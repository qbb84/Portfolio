import { PointerLockControls, useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import {
  CapsuleCollider,
  ConvexHullCollider,
  CuboidCollider,
  MeshCollider,
  RapierRigidBody,
  RigidBody,
} from '@react-three/rapier';
import { useRef } from 'react';
import * as THREE from 'three';
import Player from '../ModelRender/Player';

const SPEED = 7;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

export default function Movement() {
  const ref = useRef<RapierRigidBody>(null);
  const [, getState] = useKeyboardControls();

  //   useEffect(() => {
  //     return sub(
  //       (state) => state.forward,
  //       (pressed) => {
  //         console.log('forward', pressed);
  //       }
  //     );
  //   }, []);

  useFrame((state) => {
    const { forward, backward, left, right } = getState();
    const velocity = ref.current!.linvel();
    // update camera
    const translation = ref.current
      ? ref.current.translation()
      : { x: 15, y: 15.114732519462178, z: 13.81515247860525 };
    state.camera.position.set(
      translation.x,
      translation.y + 2.5,
      translation.z
    );
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
  return (
    <>
      <RigidBody
        ref={ref}
        colliders={false}
        mass={0}
        type="dynamic"
        position={[15, 10.114732519462178, 13.81515247860525]}
        enabledRotations={[false, false, false]}
      >
        <CapsuleCollider args={[1, 0.5]} />
        <Player position={[15, 10.114732519462178, 13.81515247860525]} />
      </RigidBody>

      <PointerLockControls />
      {/* <group
        ref={axe}
        onPointerMissed={(e) => (axe.current.children[0].rotation.x = -0.5)}
      > */}
      {/* <Axe position={[0.3, -0.35, 0.5]} /> */}
      {/* </group> */}
    </>
  );
}
