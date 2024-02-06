import { useFrame, useThree } from '@react-three/fiber';
import OrbitControl from '../Components/Test/OrbitControl';
import { OrbitControls, SpotLight } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';
import { Room } from '../Components/ModelRender/Room';
import Debug from '../Components/Test/Debug';
import Player from '../Components/ModelRender/Player';
import { Vector3 } from 'three';
import { useEffect, useRef } from 'react';
import Movement from '../Components/Movement/Movement';

export default function Intro() {
  const { camera } = useThree();
  const playerRef = useRef();

  let targetPosition = null;

  useEffect(() => {
    if (playerRef.current) {
      targetPosition = new Vector3(playerRef.current.position);
    }
  });

  useFrame(({ camera, clock }) => {
    if (playerRef.current) {
      targetPosition.copy(playerRef.current.position);
      // Calculate the lerp factor
      const lerpFactor = 0.01;

      // Interpolate the camera's position
      camera.position.lerp(targetPosition, lerpFactor);

      // Update the camera's projection matrix
      camera.updateProjectionMatrix();
    }
  });

  // if (camera) {
  //   setTimeout(() => {
  //     camera.position.set(18, 10, 12);
  //   }, 1000);
  // }
  return (
    <>
      <Physics gravity={[0, -20, 0]} debug={false}>
        {/* <Lighting /> */}
        <RigidBody type="fixed" colliders={'trimesh'}>
          <Room position={[5, 5, 5]} rotation={[0, 4.4, 0]} />
        </RigidBody>
        {/* <CuboidCollider args={[1000, 5, 1000]} /> */}
        {/* <Movement /> */}
      </Physics>
      <Player ref={playerRef} />
      {/* <SpotLight position={playerRef.current.position} /> */}

      <Debug />
    </>
  );
}
