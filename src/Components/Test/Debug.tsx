import { useHelper } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { button, folder, useControls } from 'leva';
import { Perf } from 'r3f-perf';
import { useRef } from 'react';
import { DirectionalLight, DirectionalLightHelper } from 'three';

export default function Debug(props) {
  const THREE = useThree();
  const { position, rotation } = useControls({
    position: {
      value: {
        x: THREE.camera.position.x,
        y: THREE.camera.position.y,
        z: THREE.camera.position.z,
      },
    },
    rotation: {
      value: {
        x: THREE.camera.rotation.x,
        y: THREE.camera.rotation.y,
        z: THREE.camera.rotation.z,
      },
    },

    Reset: button(() => {}),
    choice: { options: ['a', 'b', 'c'] },
  });

  THREE.camera.position.set(position.x, position.y, position.z);
  THREE.camera.rotation.set(rotation.x, rotation.y, rotation.z);
  THREE.camera.updateMatrixWorld();

  return (
    <>
      <Perf position="bottom-right" {...props} />
    </>
  );
}
