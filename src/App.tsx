import { Canvas } from '@react-three/fiber';
import OrbitControl from './Components/Test/OrbitControl';
import Loading from './LoadingScreen/Loading';
import './assets/Styles/App.css';

function App() {
  return (
    <>
      <Canvas
        flat
        gl={{ antialias: false }}
        camera={{
          fov: 90,
          position: [18.779424788883275, 12.114732519462178, 15.81515247860525],
        }}
      >
        <Loading />
        {/* <OrbitControl /> */}
      </Canvas>
    </>
  );
}

export default App;
