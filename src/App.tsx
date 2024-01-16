import "./assets/Styles/App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Room } from "./Components/ModelRender/Room";
import Lighting from "./Components/Test/Lighting";

function App() {
  return (
    <>
      <Canvas
        flat
        gl={{ antialias: false }}
        camera={{
          fov: 50,
          near: 0.1,
          position: [3, 2, 6],
        }}
      >
        <Lighting />
        <Room />;
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
