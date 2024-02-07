import { useFrame, useThree } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import { useRef, useState } from 'react';
import { SpotLight, Vector3 } from 'three';
import Player from '../Components/ModelRender/Player';
import { Room } from '../Components/ModelRender/Room';
import Debug from '../Components/Test/Debug';

export default function Intro() {
  const { camera } = useThree();
  camera.position.y += 15;
  // camera.position.z += 20;
  camera.position.x += 10.78;
  const targetPosition = new Vector3(10.8, 10.0, 2);

  const [loadRoom, setLoadRoom] = useState(false);

  useFrame(({ camera, clock }) => {
    const lerpFactor = 0.01;

    // Interpolate the camera's position
    camera.position.lerp(targetPosition, lerpFactor);

    // Update the camera's projection matrix
    camera.updateProjectionMatrix();

    if (camera.position.distanceTo(targetPosition) < 0.2) {
      camera.position.copy(targetPosition);
    }
  });

  setTimeout(() => {
    setLoadRoom(true);
  }, 3000);

  return (
    <>
      {loadRoom && (
        <Physics gravity={[0, -20, 0]} debug={false}>
          <RigidBody type="fixed" colliders={'trimesh'}>
            <Room position={[5, 5, 5]} rotation={[0, 4.4, 0]} />
          </RigidBody>

          {/* <Movement /> */}
        </Physics>
      )}
      <Player />
      {/* 
      <spotLight position={targetPosition} intensity={30} scale={10} /> */}
      <ambientLight position={targetPosition} />

      <Debug />
    </>
  );
}
