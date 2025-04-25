import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AvatarCanvas from '../three/AvatarCanvas';

const HeroSection = () => {
  const [scale, setScale] = useState(4);
  const modelRef = useRef();

  // Remove parallax effect since model is no longer background

  // Handle scroll to resize
  useEffect(() => {
    const handleWheel = (e) => {
      if (modelRef.current && modelRef.current.contains(e.target)) {
        e.preventDefault(); // Prevent page scroll
        setScale((prev) => {
          let next = prev - e.deltaY * 0.01;
          if (next < 1) next = 1;
          if (next > 8) next = 8;
          return next;
        });
      }
    };
    // Use capture phase to ensure we catch the event before scroll
    window.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    return () => window.removeEventListener('wheel', handleWheel, { capture: true });
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center overflow-hidden bg-gray-900">
      <div className="relative z-10 flex flex-col items-center justify-center py-24 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Try Before You Buy – Virtually
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-xl">
          Experience clothes on your digital twin without leaving home
        </p>
        <Link to="/signup">
          <button className="px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold shadow-lg hover:bg-primary/80 transition mb-8">
            Get Started
          </button>
        </Link>
        <div ref={modelRef} className="flex flex-col items-center w-full" style={{ minHeight: 320 }}>
          <AvatarCanvas scale={scale} />
          <span className="text-gray-400 text-xs mt-2">Scroll to resize avatar</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
