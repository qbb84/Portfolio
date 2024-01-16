import { useFrame } from "@react-three/fiber";

export default function RotateAnimation() {
  useFrame((state) => {
    const angle: number = state.clock.elapsedTime;

    state.camera.position.x = Math.sin(angle) * 8;
    state.camera.position.z = Math.cos(angle) * 8;
    state.camera.lookAt(0, 0, 0);
  });
  return <></>;
}

