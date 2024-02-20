import { useFrame, useThree } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import { useContext, useEffect, useRef, useState } from 'react';
import { Euler, Quaternion, SpotLight, Vector3 } from 'three';
import Player from '../Components/ModelRender/Player';
import { Room } from '../Components/ModelRender/Room';
import Debug from '../Components/Test/Debug';

import * as THREE from 'three';
import Movement from '../Components/Movement/Movement';
import { HudLoadContext } from '../Components/Hud/HudLoadContext';
import { Html } from '@react-three/drei';

export default function Intro() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.y += 15;
    camera.position.x += 10.78;
  }, []);

  const points = [
    // ending position (center of the room)
  ];

  for (let angle = 0; angle <= Math.PI / 2; angle += Math.PI / 20) {
    const x = 9 + 5 * Math.cos(angle);
    const z = 6 + 5 * Math.sin(angle);
    points.push(new THREE.Vector3(x, 10, z));
  }

  const curve = new THREE.CatmullRomCurve3(points);
  let t = 0;

  const targetPosition = new Vector3(10.8, 10.0, 2);
  const [loadRoom, setLoadRoom] = useState(false);
  const [rotationStarted, setRotationStarted] = useState(false);
  const [moveToCenter, setMoveToCenter] = useState(false);
  const [walkable, setWalkable] = useState(false);
  const centerPosition = new Vector3(9, 10, 6);
  let angle = 0;
  let rotationSpeed = 0;

  const targetRotation = new THREE.Quaternion();
  targetRotation.setFromEuler(new THREE.Euler(0, 0, 0, 'XYZ'));

  const { setHudLoaded } = useContext(HudLoadContext);

  useFrame(({ camera }) => {
    if (!rotationStarted) {
      const lerpFactor = 0.01;

      // Interpolate the camera's position
      camera.position.lerp(targetPosition, lerpFactor);

      camera.updateProjectionMatrix();

      if (camera.position.distanceTo(targetPosition) < 0.2) {
        camera.position.copy(targetPosition);
        setRotationStarted(true);
      }
      setTimeout(() => {
        setMoveToCenter(true);
        setTimeout(() => {
          setWalkable(true);
          setHudLoaded(true);
        }, 1000);
      }, 10000);
    } else if (!moveToCenter) {
      // rotationSpeed += (0.01 - rotationSpeed) * 0.01;
      // angle += rotationSpeed;

      // const roomWidth = 10;
      // const roomDepth = 30;
      // const radius = Math.min(roomWidth, roomDepth) / 2;
      const x = centerPosition.x - Math.sin(angle);
      const z = centerPosition.z - Math.cos(angle);
      camera.position.set(x, centerPosition.y, z);

      camera.lookAt(targetPosition);

      camera.updateProjectionMatrix();

      camera.rotateY(25);
    } else {
      const position = curve.getPoint(t);

      // Move the camera to the new position
      camera.position.copy(position);
      camera.lookAt(
        centerPosition.x - 5,
        centerPosition.y,
        centerPosition.z + 5
      );
      // Update the camera's projection matrix
      camera.updateProjectionMatrix();

      // Increment t to move along the curve
      t += 0.001;
      setTimeout(() => {
        setRotationStarted(false);
      }, 1000);
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setLoadRoom(true);
    }, 2000);
  });

  return (
    <>
      {loadRoom && (
        <Physics gravity={[0, -20, 0]} debug={false}>
          <RigidBody type="fixed" colliders={'trimesh'}>
            <Room position={[5, 5, 5]} rotation={[0, 4.4, 0]} />
          </RigidBody>

          {walkable && (
            <>
              <Movement />
            </>
          )}
        </Physics>
      )}
      <Player />
      {/* 
      <spotLight position={targetPosition} intensity={30} scale={10} /> */}
      <spotLight position={targetPosition} color={'white'} intensity={10} />

      {/* <Debug /> */}
    </>
  );
}
