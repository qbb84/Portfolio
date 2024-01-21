import {
  CameraShake,
  Cloud,
  Clouds,
  Float,
  Ring,
  SpotLight,
} from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { AmbientLight } from 'three';

export default function RandomCircles() {
  const THREE = useThree();
  const boxRef = useRef(null);
  const time = useRef(0);

  useFrame((_state, delta) => {
    time.current += delta;
    boxRef.current!.rotation.x +=
      ((Math.sin(time.current) * Math.PI * 0.5) / Math.cos(delta + 15)) * 0.05;
  });

  return <></>;
}
