import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { button, folder, useControls } from "leva";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";

interface Movement {
  move?: boolean;
}

export default function Lighting({ move = false }: Movement) {
  const { position } = useControls({
    position: {
      value: { x: -2, y: 0 },
    },

    Reset: button(() => {}),
    choice: { options: ["a", "b", "c"] },
  });

  return (
    <>
      <Perf position="top-left" />
      <spotLight
        ref={lightRef}
        position={[position.x, position.y, 3]}
        intensity={5}
      />
    </>
  );
}
