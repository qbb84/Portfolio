import { Props } from "@react-three/fiber";
import {useRef} from "react";

export default function Foo(props: Props) {
    const ref = useRef();
    return (
        <>
            <mesh ref={ref} {...props}>
                <boxGeometry/>
                <meshToonMaterial/>
            </mesh>
        </>
    );
}
