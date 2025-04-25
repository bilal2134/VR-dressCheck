import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef, useState } from 'react';

function AvatarModel() {
  const { scene } = useGLTF('/avatar2.glb');
  return <primitive object={scene} scale={2.2} position={[0, -1, 0]} />;
}

const DraggableAvatar = () => {
  const [pos, setPos] = useState({ x: 40, y: 40 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  const onMouseMove = (e) => {
    if (dragging.current) {
      setPos({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    }
  };
  const onMouseUp = () => {
    dragging.current = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  return (
    <div
      style={{
        position: 'fixed',
        right: `${pos.x}px`,
        bottom: `${pos.y}px`,
        zIndex: 40,
        width: 180, // Increased width
        height: 220, // Increased height for full visibility
        cursor: 'grab',
        userSelect: 'none',
        background: 'none',
        boxShadow: 'none',
        borderRadius: 0,
        overflow: 'visible', // Ensure nothing is clipped
      }}
      onMouseDown={onMouseDown}
      title="Drag, rotate, or zoom me!"
    >
      <Canvas camera={{ position: [0, 0.5, 5] }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <AvatarModel />
        <OrbitControls enablePan={false} enableZoom enableRotate />
      </Canvas>
    </div>
  );
};

export default DraggableAvatar;
