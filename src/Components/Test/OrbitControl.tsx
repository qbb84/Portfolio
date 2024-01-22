import { extend, useFrame, useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

extend({ OrbitControls });

export default function OrbitControl() {
  const { camera, gl } = useThree();

  useFrame(() => {
    {
      console.log(camera);
    }
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
    </>
  );
}
