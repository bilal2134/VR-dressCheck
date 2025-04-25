import { Canvas } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';

function LoadingBar({ progress }) {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[progress * 2, 0.3, 0.3]} />
      <meshStandardMaterial color="#6366f1" />
    </mesh>
  );
}

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0.1);
  useEffect(() => {
    let frame;
    let start;
    function animate(ts) {
      if (!start) start = ts;
      const elapsed = (ts - start) / 3000; // 3 seconds
      setProgress(Math.min(1, elapsed));
      if (elapsed < 1) {
        frame = requestAnimationFrame(animate);
      }
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-200 to-blue-200">
      <Canvas camera={{ position: [0, 0, 5] }} style={{ width: 300, height: 120 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={0.7} />
        <LoadingBar progress={progress} />
      </Canvas>
      <div className="absolute bottom-16 w-full flex justify-center">
        <span className="text-indigo-700 font-bold text-lg tracking-widest animate-pulse">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
