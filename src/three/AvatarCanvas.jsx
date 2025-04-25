import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function AvatarModel({ scale }) {
  const { scene } = useGLTF('/avatar.glb');
  return <primitive object={scene} scale={scale} position={[0, -1, 0]} />;
}

const AvatarCanvas = ({ scale = 4 }) => (
  <Canvas camera={{ position: [0, 1, 4] }} style={{ width: 320, height: 320 }}>
    <ambientLight intensity={0.7} />
    <directionalLight position={[5, 5, 5]} intensity={0.7} />
    <AvatarModel scale={scale} />
    <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} enableRotate={true} />
  </Canvas>
);

export default AvatarCanvas;
