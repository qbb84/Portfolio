/* eslint-disable @typescript-eslint/no-unused-vars */
import { PointerLockControls, useKeyboardControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import {
  CapsuleCollider,
  RapierRigidBody,
  RigidBody,
} from '@react-three/rapier';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import Player from '../ModelRender/Player';

const SPEED = 7;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

export default function Movement() {
  const ref = useRef<RapierRigidBody>(null);
  const [, getState] = useKeyboardControls();

  const { camera } = useThree();
  const [playerPosition, setPlayerPosition] = useState([0, 0, 0]);
  const [playerRotaion, setPlayerRotation] = useState([0, 0, 0]);

  // useEffect(() => {
  //   setPlayerPosition([
  //     camera.position.x + 2,
  //     camera.position.y - 4,
  //     camera.position.z,
  //   ]);
  //   setPlayerRotation([
  //     camera.rotation.x,
  //     camera.rotation.y,
  //     camera.rotation.z,
  //   ]);
  // });

  useFrame((state) => {
    const { forward, backward, left, right } = getState();
    const velocity = ref.current!.linvel();
    // update camera
    const translation = ref.current
      ? ref.current.translation()
      : { x: 9, y: 10, z: 7 };

    state.camera.position.set(
      translation.x,
      translation.y + 2.5,
      translation.z
    );

    setPlayerPosition([translation.x, translation.y, translation.z]);

    // movement
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(state.camera.rotation);

    ref.current!.setLinvel(
      { x: direction.x, y: velocity.y, z: direction.z },
      true
    );

    // ref.current.applyImpulse({ x: 0, y: 10, z: 0 }, true);
  });

  const playerRef = useRef();

  useFrame(() => {
    if (playerRef.current) {
      camera.add(playerRef.current);
    }
  }, [camera]);

  return (
    <>
      <RigidBody
        ref={ref}
        colliders={false}
        mass={0}
        type="dynamic"
        position={[9, 10, 5]}
        enabledRotations={[false, false, false]}
      >
        <CapsuleCollider args={[1, 0.5]} />
      </RigidBody>

      <ambientLight
        position={[camera.position.x, 8, camera.position.z]}
        intensity={1}
      />
      <PointerLockControls />
    </>
  );
}
