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
        }}
      >
        <Loading />
        <OrbitControl />
      </Canvas>
    </>
  );
}

export default App;
