import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AvatarCanvas from '../three/AvatarCanvas';

const HeroSection = () => {
  const bgRef = useRef();

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(${-x}px,${-y}px,0)`;
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center overflow-hidden bg-gray-900">
      <div ref={bgRef} className="absolute inset-0 z-0 transition-transform duration-300 will-change-transform">
        <AvatarCanvas />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center py-24 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Try Before You Buy – Virtually
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-xl">
          Experience clothes on your digital twin without leaving home
        </p>
        <Link to="/signup">
          <button className="px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold shadow-lg hover:bg-primary/80 transition">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
