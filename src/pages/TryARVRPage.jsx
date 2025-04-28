import Header from '../components/Header';

const TryARVRPage = () => (
  <>
    <Header />
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md bg-gray-800/80 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8 mt-24">
        <h1 className="text-3xl font-extrabold text-white mb-6 text-center">Try AR/VR</h1>
        <button className="w-full py-3 rounded-xl bg-gray-700 text-white font-bold text-lg shadow hover:bg-gray-600 transition">Check out AR here</button>
        <button className="w-full py-3 rounded-xl bg-gray-700 text-white font-bold text-lg shadow hover:bg-gray-600 transition">Check out VR here</button>
      </div>
    </div>
  </>
);

export default TryARVRPage;
