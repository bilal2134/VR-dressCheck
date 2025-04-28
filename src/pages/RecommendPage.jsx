import { useAuth } from '../components/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { jsPDF } from 'jspdf';

const measurementFields = [
  { key: 'clothing_type', label: 'Clothing type (or leave blank for all types)' },
  { key: 'shoulder_cm', label: 'Shoulder width (inches)' },
  { key: 'chest_cm', label: 'Chest/bust (inches)' },
  { key: 'waist_cm', label: 'Waist (inches)' },
  { key: 'hip_cm', label: 'Hip (inches)' },
  { key: 'height_cm', label: 'Height (inches)' },
];

export default function RecommendPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState([]);
  const [step, setStep] = useState(0);
  const [inputs, setInputs] = useState({});
  const [chat, setChat] = useState([
    { from: 'bot', text: 'Let’s get your size recommendation! You can skip any field.' },
    { from: 'bot', text: measurementFields[0].label }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  const handleInput = async (value) => {
    // clear input field
    setCurrentInput('');
    // store answer
    const field = measurementFields[step];
    setInputs(prev => ({ ...prev, [field.key]: value }));
    // append user message
    setChat(prev => ([...prev, { from: 'user', text: value || '(skipped)' }]));
    const nextIdx = step + 1;
    if (nextIdx < measurementFields.length) {
      // ask next question
      setChat(prev => ([...prev, { from: 'bot', text: measurementFields[nextIdx].label }]));
      setStep(nextIdx);
      return;
    }
    // last answer: hide form and fetch recommendations from backend
    setIsComplete(true);
    setChat(prev => ([...prev, { from: 'bot', text: 'Fetching recommendations from server...' }]));
    // convert inches to cm
    const cmInputs = { ...inputs, [field.key]: value };
    ['shoulder_cm','chest_cm','waist_cm','hip_cm','height_cm'].forEach(k => {
      if (cmInputs[k]) cmInputs[k] = (parseFloat(cmInputs[k]) * 2.54).toFixed(1);
    });
    // call backend API
    try {
      const res = await fetch('http://127.0.0.1:8000/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clothing_type: cmInputs.clothing_type || '',
          shoulder_cm: Number(cmInputs.shoulder_cm) || 0,
          chest_cm: Number(cmInputs.chest_cm) || 0,
          waist_cm: Number(cmInputs.waist_cm) || 0,
          hip_cm: Number(cmInputs.hip_cm) || 0,
          height_cm: Number(cmInputs.height_cm) || 0
        })
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const data = await res.json();
      if (data.recommendations?.length) {
        // display recommendations immediately
        const recMsgs = [
          { from: 'bot', text: 'Here are your top recommendations:' },
          ...data.recommendations.map(r => ({ from: 'bot', text: `${r.brand} - ${r.clothing_type} - Size: ${r.size} (Match: ${(r.match_quality*100).toFixed(0)}%)` }))
        ];
        setRecommendations(data.recommendations);
        setChat(prev => ([...prev, ...recMsgs]));
        // save measurements & recommendations asynchronously
        setDoc(doc(db, 'users', user.uid), {
          measurements: cmInputs,
          recommendations: data.recommendations,
          updatedAt: new Date().toISOString()
        }, { merge: true }).catch(err => {
          console.error('Firestore write error:', err);
          setChat(prev => ([...prev, { from: 'bot', text: '❌ Error saving to Firestore.' }]));
        });
      } else {
        setChat(prev => ([...prev, { from: 'bot', text: 'No recommendations found.' }]));
      }
    } catch (err) {
      console.error('Recommendation fetch error:', err);
      setChat(prev => ([...prev, { from: 'bot', text: '❌ Error fetching recommendations.' }]));
    }
  };

  const handleBackHome = () => navigate('/');

  const handleGeneratePDF = () => {
    const docpdf = new jsPDF();
    docpdf.text('FitCheck Recommendations', 10, 10);
    docpdf.text('Your Measurements:', 10, 20);
    let y = 30;
    Object.entries(inputs).forEach(([key, val]) => {
      docpdf.text(`${key}: ${val}`, 10, y);
      y += 10;
    });
    if (recommendations.length) {
      docpdf.text('Recommendations:', 10, y + 10);
      recommendations.forEach((r, i) => {
        docpdf.text(`- ${r.brand} ${r.clothing_type} Size: ${r.size} Match: ${(r.match_quality*100).toFixed(0)}%`, 10, y + 20 + i*10);
      });
    }
    docpdf.save('fitcheck_recommendations.pdf');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center pt-24 px-4">
      <div className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-lg p-6 relative">
        <div className="flex justify-between mb-4">
          <button onClick={handleBackHome} className="text-primary font-semibold">Go Home</button>
          <button onClick={handleGeneratePDF} disabled={!isComplete} className="text-primary font-semibold">Generate PDF</button>
        </div>
        <div className="space-y-4 mb-6">
          {chat.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}>
              <div 
                className={`rounded-2xl px-4 py-2 max-w-[85%] ${
                  msg.from === 'bot' 
                    ? 'bg-gray-700 text-white rounded-tl-none' 
                    : 'bg-primary text-white rounded-tr-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        {!isComplete && (
          <form onSubmit={e => { e.preventDefault(); handleInput(currentInput); }} className="flex gap-2">
            <input
              value={currentInput}
              onChange={e => setCurrentInput(e.target.value)}
              autoFocus
              className="flex-1 px-4 py-2 rounded bg-gray-900 text-white border border-primary focus:outline-none"
              placeholder={measurementFields[step].label}
            />
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded font-semibold">Send</button>
          </form>
         )}
      </div>
    </div>
  );
}
