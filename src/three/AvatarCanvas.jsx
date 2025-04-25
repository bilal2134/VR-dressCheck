import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function AvatarModel() {
  const { scene } = useGLTF('/avatar.glb');
  return <primitive object={scene} scale={4} position={[0, -1, 0]} />;
}

const AvatarCanvas = () => (
  <Canvas camera={{ position: [0, 1, 4] }} style={{ width: '100vw', height: '80vh' }}>
    <ambientLight intensity={0.7} />
    <directionalLight position={[5, 5, 5]} intensity={0.7} />
    <AvatarModel />
    <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} enableRotate={true} />
  </Canvas>
);

export default AvatarCanvas;
