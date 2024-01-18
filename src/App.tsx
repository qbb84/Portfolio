import "./assets/Styles/App.css";
import {Canvas} from "@react-three/fiber";
import ScrollAnimation from "./Components/ScrollAnimation";
import Debug from "./Components/Test/Debug";
import OrbitControl from "./Components/Test/OrbitControl";

function App() {
    return (
        <>
            <Canvas
                flat
                gl={{antialias: false}}
                camera={{
                    fov: 50,
                    near: 0.1,
                    position: [3, 2, 6],
                }}
            >
                <Debug/>
                <OrbitControl/>
                <ScrollAnimation/>
            </Canvas>
        </>
    );
}

export default App;
