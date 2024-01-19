import "./assets/Styles/App.css";
import { Canvas } from "@react-three/fiber";
import ScrollAnimation from "./Components/ScrollAnimation";
import Debug from "./Components/Test/Debug";
import OrbitControl from "./Components/Test/OrbitControl";
import CreateButton from "./Components/Hud/CreateButton";

function App() {
  return (
    <>
      <CreateButton isStatic={true} />
      <Canvas
        flat
        gl={{ antialias: false }}
        camera={{
          fov: 50,
          near: 0.1,
          position: [3, 2, 6],
        }}
      >
        <Debug />
        <OrbitControl />
        <ScrollAnimation />
      </Canvas>
    </>
  );
}

export default App;
