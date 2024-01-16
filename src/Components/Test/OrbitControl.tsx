import {extend, useThree} from "@react-three/fiber";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";


extend({OrbitControls})

export default function OrbitControl() {
    const {camera, gl} = useThree()

    console.log(camera, gl)

    return <>
        <orbitControls args={[camera, gl.domElement]}/>
    </>
}