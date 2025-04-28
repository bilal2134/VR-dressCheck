import React, { useState } from 'react';

const FASHN_API_KEY = 'sample-API-key1';
const BASE_URL = 'https://api.fashn.ai/v1';

const categoryOptions = [
  { value: 'tops', label: 'Top' },
  { value: 'bottoms', label: 'Bottom' },
  { value: 'full-body', label: 'Full Body' },
];

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-t-4 border-t-gray-400 border-white rounded-full animate-spin mb-4" style={{ borderTopColor: '#a3a3a3' }}></div>
      <span className="text-lg font-semibold text-white drop-shadow">Processing your fit...</span>
    </div>
  </div>
);

const TryFitPage = () => {
  const [modelImage, setModelImage] = useState(null);
  const [garmentImage, setGarmentImage] = useState(null);
  const [modelPreview, setModelPreview] = useState(null);
  const [garmentPreview, setGarmentPreview] = useState(null);
  const [category, setCategory] = useState('tops');
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Helper to upload image to a hosting service (for demo, uses imgbb)
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    // Replace with your own imgbb API key or use another image host
    const res = await fetch('https://api.imgbb.com/1/upload?key=sample-API-key1', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    return data.data.url;
  };

  const handleModelChange = (e) => {
    const file = e.target.files[0];
    setModelImage(file);
    setModelPreview(file ? URL.createObjectURL(file) : null);
  };
  const handleGarmentChange = (e) => {
    const file = e.target.files[0];
    setGarmentImage(file);
    setGarmentPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResultImage(null);
    setLoading(true);
    try {
      // Upload images to get URLs
      const [modelUrl, garmentUrl] = await Promise.all([
        uploadImage(modelImage),
        uploadImage(garmentImage),
      ]);
      // Call Fashn.ai API
      const input_data = {
        model_image: modelUrl,
        garment_image: garmentUrl,
        category,
      };
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${FASHN_API_KEY}`,
      };
      const runRes = await fetch(`${BASE_URL}/run`, {
        method: 'POST',
        headers,
        body: JSON.stringify(input_data),
      });
      const runData = await runRes.json();
      const prediction_id = runData.id;
      // Poll for status
      let status = 'starting';
      let output = null;
      while (['starting', 'in_queue', 'processing'].includes(status)) {
        await new Promise((r) => setTimeout(r, 3000));
        const statusRes = await fetch(`${BASE_URL}/status/${prediction_id}`, { headers });
        const statusData = await statusRes.json();
        status = statusData.status;
        if (status === 'completed') {
          output = statusData.output;
          break;
        }
        if (status === 'failed') {
          throw new Error(statusData.error || 'Prediction failed');
        }
      }
      setResultImage(Array.isArray(output) ? output[0] : output);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-x-hidden">
      {loading && <Loader />}
      <div className="w-full max-w-lg mt-16 mb-8 p-8 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/10 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-white drop-shadow mb-6 text-center">Try Fit <span className="text-gray-300"></span></h1>
        <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="flex-1 flex flex-col items-center">
              <label className="text-white font-semibold mb-2">Model Image</label>
              <input type="file" accept="image/*" required onChange={handleModelChange} className="file:bg-gray-700 file:text-white file:rounded-full file:px-4 file:py-2 file:font-semibold file:border-0 file:shadow hover:file:bg-gray-600 transition block w-full text-sm text-gray-200" />
              {modelPreview && <img src={modelPreview} alt="Model Preview" className="mt-3 w-28 h-28 object-cover rounded-xl shadow-lg border-2 border-white/20" />}
            </div>
            <div className="flex-1 flex flex-col items-center">
              <label className="text-white font-semibold mb-2">Garment Image</label>
              <input type="file" accept="image/*" required onChange={handleGarmentChange} className="file:bg-gray-600 file:text-white file:rounded-full file:px-4 file:py-2 file:font-semibold file:border-0 file:shadow hover:file:bg-gray-700 transition block w-full text-sm text-gray-200" />
              {garmentPreview && <img src={garmentPreview} alt="Garment Preview" className="mt-3 w-28 h-28 object-cover rounded-xl shadow-lg border-2 border-white/20" />}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <label className="text-white font-semibold mb-2">Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)} className="rounded-xl px-4 py-2 bg-white/80 text-gray-800 font-semibold shadow focus:outline-none focus:ring-2 focus:ring-gray-400">
              {categoryOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <button type="submit" disabled={loading} className="mt-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 hover:from-gray-900 hover:to-gray-700 transition-all duration-200 text-lg disabled:opacity-60 disabled:cursor-not-allowed">
            {loading ? 'Processing...' : 'Try Fit'}
          </button>
          {error && <div className="text-red-200 text-center font-semibold mt-2">{error}</div>}
        </form>
        {resultImage && (
          <div className="mt-10 flex flex-col items-center w-full">
            <h2 className="text-2xl font-bold text-white mb-4 drop-shadow">Result</h2>
            <div className="bg-white/10 rounded-2xl p-4 shadow-xl border border-white/10">
              <img src={resultImage} alt="Result" className="max-w-xs rounded-xl shadow-lg border-2 border-white/20" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TryFitPage;
