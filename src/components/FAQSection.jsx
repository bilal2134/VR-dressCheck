import { useState } from 'react';

const faqs = [
  {
    question: 'How does FitCheck create my avatar?',
    answer: 'You can scan your body using your phone camera or enter your measurements. Our system generates a 3D avatar that matches your proportions.'
  },
  {
    question: 'Is my data and privacy safe?',
    answer: 'Yes. We use industry-standard encryption and never share your data with third parties. You control your information.'
  },
  {
    question: 'Can I try on any clothing item virtually?',
    answer: 'You can try on all items from our partner brands. More collections are added regularly.'
  },
  {
    question: 'How accurate is the virtual fitting?',
    answer: 'Our 3D modeling is highly accurate, but we always recommend checking size guides for best results.'
  },
  {
    question: 'Do I need special hardware?',
    answer: 'No special hardware is needed. FitCheck works on any modern smartphone or computer.'
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={faq.question} className="bg-gray-800 rounded-xl shadow p-4">
              <button
                className="w-full flex justify-between items-center text-left text-lg font-medium text-primary focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                {faq.question}
                <span className="ml-2 text-primary">{openIdx === idx ? '-' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="mt-2 text-gray-200 text-base animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;