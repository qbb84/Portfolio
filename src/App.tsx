import { Canvas } from '@react-three/fiber';
import { BsChevronDown } from 'react-icons/bs';
import CreateButton from './Components/Hud/CreateButton';
import ScrollAnimation from './Components/ScrollAnimation';
import Debug from './Components/Test/Debug';
import OrbitControl from './Components/Test/OrbitControl';
import './assets/Styles/App.css';

function App() {
  return (
    <>
      <CreateButton name={<BsChevronDown />} />
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
