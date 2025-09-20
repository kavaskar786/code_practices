import { Canvas } from "@react-three/fiber";

export const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <mesh position={[5, 0, -9]}>
        <boxGeometry args={[5, 5, 4]} />
        <meshStandardMaterial color="orange" position={[0, 0, 2]} />
      </mesh>
    </Canvas>
  );
};
