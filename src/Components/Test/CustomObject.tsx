import * as THREE from "three";
import {useEffect, useMemo, useRef} from "react";

export default function CustomObject() {
    const geometryRef = useRef();
    const verticesCount: number = 10 * 3;

    const positions = useMemo(() => {
        const positions: Float32Array = new Float32Array(verticesCount * 3);

        for (let i = 0; i < verticesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 3;
        }
        return positions
    }, [verticesCount]);

    useEffect(() => {
        geometryRef.current!.computeVertexNormals();
    }, []);

    return (
        <mesh>
            <bufferGeometry ref={geometryRef}>
                <bufferAttribute
                    attach="attributes-position"
                    count={verticesCount}
                    itemSize={3}
                    array={positions}
                />
            </bufferGeometry>
            <meshBasicMaterial color="red" side={THREE.DoubleSide}/>
        </mesh>
    );
}

