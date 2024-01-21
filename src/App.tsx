import { Canvas } from '@react-three/fiber';
import OrbitControl from './Components/Test/OrbitControl';
import Loading from './LoadingScreen/Loading';
import './assets/Styles/App.css';

function App() {
  return (
    <>
      <Canvas
        flat
        gl={{ antialias: true }}
        camera={{
          fov: 60,
          position: [6.0, 12.93, -7.37],
          rotation: [0, 1.0, 0],
        }}
      >
        <Loading />
        <OrbitControl />
      </Canvas>
    </>
  );
}

export default App;
