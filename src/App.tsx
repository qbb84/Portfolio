import { Canvas } from '@react-three/fiber';
import OrbitControl from './Components/Test/OrbitControl';
import Loading from './LoadingScreen/Loading';
import './assets/Styles/App.css';
import { KeyboardControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import Movement from './Components/Movement/Movement';
import HudDisplay from './Components/Hud/HudDisplay';
import { HudLoadContext } from './Components/Hud/HudLoadContext';
import { useState } from 'react';

function App() {
  const [hudLoaded, setHudLoaded] = useState(HudLoadContext);
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
        { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
        { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
        { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
        { name: 'jump', keys: ['Space'] },
      ]}
    >
      <>
        {/* <HudLoadContext.Provider value={{ hudLoaded, setHudLoaded }}> */}
        <HudDisplay />
        {/* </HudLoadContext.Provider> */}
        <Canvas
          flat
          gl={{ antialias: false }}
          camera={{
            fov: 90,
            position: [
              18.779424788883275, 12.114732519462178, 15.81515247860525,
            ],
          }}
        >
          <Loading />
          <OrbitControl />
        </Canvas>
      </>
    </KeyboardControls>
  );
}

export default App;
