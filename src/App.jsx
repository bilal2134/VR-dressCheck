import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import RecommendPage from './pages/RecommendPage';
import TryFitPage from './pages/TryFitPage';
import TryARVRPage from './pages/TryARVRPage';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-gray-900">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/recommend" element={<RecommendPage />} />
            <Route path="/try-fit" element={<TryFitPage />} />
            <Route path="/try-arvr" element={<TryARVRPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
