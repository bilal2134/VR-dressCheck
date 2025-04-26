import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function AvatarModel({ scale, modelPath = '/avatar.glb', position = [0, -1, 0] }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={scale} position={position} />;
}

const AvatarCanvas = ({ scale = 4, modelPath = '/avatar.glb', position = [0, -1, 0] }) => (
  <Canvas camera={{ position: [0, 2, 6] }} style={{ width: 400, height: 400 }}>
    <ambientLight intensity={0.7} />
    <directionalLight position={[5, 5, 5]} intensity={0.7} />
    <AvatarModel scale={scale} modelPath={modelPath} position={position} />
    <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} enableRotate={true} />
  </Canvas>
);

export default AvatarCanvas;
