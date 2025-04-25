import { useEffect, useRef } from 'react';

const TRAIL_LENGTH = 12;
const TRAIL_FADE = 0.08;

const CustomCursor = () => {
  const cursorRef = useRef();
  const trailRefs = useRef([]);
  const positions = useRef(Array(TRAIL_LENGTH).fill({ x: 0, y: 0 }));

  useEffect(() => {
    const move = (e) => {
      const { clientX: x, clientY: y } = e;
      positions.current = [
        { x, y },
        ...positions.current.slice(0, TRAIL_LENGTH - 1),
      ];
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      }
      trailRefs.current.forEach((ref, i) => {
        if (ref) {
          const p = positions.current[i + 1] || positions.current[0];
          ref.style.transform = `translate3d(${p.x}px,${p.y}px,0)`;
          ref.style.opacity = `${1 - i * TRAIL_FADE}`;
        }
      });
    };
    window.addEventListener('mousemove', move);
    document.body.style.cursor = 'none';
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed z-[100] pointer-events-none w-6 h-6 rounded-full border-2 border-indigo-500 bg-white/80 shadow-lg -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ left: 0, top: 0 }}
      />
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={el => (trailRefs.current[i] = el)}
          className="fixed z-[99] pointer-events-none w-4 h-4 rounded-full bg-indigo-300/60 blur-sm -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
          style={{ left: 0, top: 0, opacity: 0 }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
