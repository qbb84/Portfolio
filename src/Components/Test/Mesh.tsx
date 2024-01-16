import { Float, Html, PivotControls, Text, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export function MyMesh() {
  const cubeRef = useRef<Mesh>(null);
  const sphereRef = useRef<Mesh>(null);
  const textRef = useRef<Text>(null);

  const time = useRef(0);

  useFrame((_state, delta) => {
    time.current += delta;
    cubeRef.current!.rotation.x +=
      ((Math.sin(delta) * 0.5) / Math.PI) * Math.cos(0.1) * Math.PI;
    cubeRef.current!.rotation.z +=
      (Math.asin(delta * 0.89) / Math.PI) * Math.cos(0.1) * Math.PI;
    const speed = 1;
    textRef.current!.position.y =
      (Math.sin(time.current * speed) * Math.PI * 0.5) / 15;
  });
  return (
    <>
      <PivotControls
        anchor={[1, 1, 1]}
        depthTest={false}
        lineWidth={2}
        scale={100}
        fixed={true}
      >
        <mesh ref={cubeRef} position={[1, 0.5, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>
      </PivotControls>
      <mesh ref={sphereRef} position={[-2, 0.5, 0]} scale={0.5}>
        <sphereGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh scale={5} rotation={[5, 0, 0]} position={[0, -0.4, 0]}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <Float speed={3}>
        <Text rotation={[0, 0, 0]} ref={textRef}>
          Hey!
        </Text>
      </Float>
    </>
  );
}
