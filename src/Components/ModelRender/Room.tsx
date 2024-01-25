/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { Html, useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React, { useContext, useMemo, useState } from 'react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';
import { VisibilityContext } from './RoomVisibility';
import { DissolveMaterial } from '../Effects/DissolveMaterial';

type GLTFResult = GLTF & {
  nodes: {
    Box002_Baked: THREE.Mesh;
    Cube038_Baked: THREE.Mesh;
    Cube039_Baked: THREE.Mesh;
    Cube040_Baked: THREE.Mesh;
    Cube059_Baked: THREE.Mesh;
    Plane002_Baked: THREE.Mesh;
    Bishop001_Baked: THREE.Mesh;
    Bishop002__Baked: THREE.Mesh;
    Bishop003__Baked: THREE.Mesh;
    Bishop004__Baked: THREE.Mesh;
    Cube001_Baked: THREE.Mesh;
    Cube013_Baked: THREE.Mesh;
    Cube028_Baked: THREE.Mesh;
    Cube033_Baked: THREE.Mesh;
    Cube041_Baked: THREE.Mesh;
    Cube042_Baked: THREE.Mesh;
    Cube043_Baked: THREE.Mesh;
    Cube044_Baked: THREE.Mesh;
    Cube045_Baked: THREE.Mesh;
    Cube046_Baked: THREE.Mesh;
    Cube047_Baked: THREE.Mesh;
    Cube048_Baked: THREE.Mesh;
    Cube049_Baked: THREE.Mesh;
    Cube060_Baked: THREE.Mesh;
    Cube061_Baked: THREE.Mesh;
    Cube062_Baked: THREE.Mesh;
    Cube063_Baked: THREE.Mesh;
    King001__Baked: THREE.Mesh;
    King_Baked_Baked: THREE.Mesh;
    Knight001__Baked: THREE.Mesh;
    Knight002__Baked: THREE.Mesh;
    Knight003__Baked: THREE.Mesh;
    Knight004__Baked: THREE.Mesh;
    Pawn001__Baked: THREE.Mesh;
    Pawn006__Baked: THREE.Mesh;
    Queen001__Baked: THREE.Mesh;
    Queen__Baked: THREE.Mesh;
    Rook003__Baked: THREE.Mesh;
    Rook004__Baked: THREE.Mesh;
    Rook005__Baked: THREE.Mesh;
    Rook_Baked: THREE.Mesh;
    Torus001_Baked: THREE.Mesh;
    Torus_Baked: THREE.Mesh;
    Cube024_Baked: THREE.Mesh;
    Circle001_Baked: THREE.Mesh;
    Circle003_Baked: THREE.Mesh;
    Cube002_Baked: THREE.Mesh;
    Cube007_Baked: THREE.Mesh;
    Cube011_Baked: THREE.Mesh;
    Cube012_Baked: THREE.Mesh;
    Sphere_Baked: THREE.Mesh;
    Cube025_Baked: THREE.Mesh;
    Cube026_Baked: THREE.Mesh;
    Cube027_Baked: THREE.Mesh;
    Cube029_Baked: THREE.Mesh;
    Cube030_Baked: THREE.Mesh;
    Cube032_Baked: THREE.Mesh;
    Cube065_Baked: THREE.Mesh;
    Cylinder010_Baked: THREE.Mesh;
    NurbsPath002_Baked: THREE.Mesh;
    Sphere004_Baked: THREE.Mesh;
    Uzi_Tshirt002_Baked: THREE.Mesh;
    chair_f003_Baked: THREE.Mesh;
    Cube014_Baked: THREE.Mesh;
    Cube015_Baked: THREE.Mesh;
    Cube016_Baked: THREE.Mesh;
    Cube017_Baked: THREE.Mesh;
    Cube018_Baked: THREE.Mesh;
    Cube066_Baked: THREE.Mesh;
    Cube068_Baked: THREE.Mesh;
    Cube069_Baked: THREE.Mesh;
    Plane003_Baked: THREE.Mesh;
    Plane005_Baked: THREE.Mesh;
    Cube003_Baked: THREE.Mesh;
    Cube004_Baked: THREE.Mesh;
    Cube005_Baked: THREE.Mesh;
    Plane001_Baked: THREE.Mesh;
    Cube010_Baked: THREE.Mesh;
    Cube022_Baked: THREE.Mesh;
    Cube023_Baked: THREE.Mesh;
    Cube031_Baked: THREE.Mesh;
    Sphere001_Baked: THREE.Mesh;
    Cube034_Baked: THREE.Mesh;
    Cube035_Baked: THREE.Mesh;
    curtain001_Baked: THREE.Mesh;
    curtain002_Baked: THREE.Mesh;
    Cylinder012_Baked: THREE.Mesh;
    Sphere003_Baked: THREE.Mesh;
    Cube019_Baked: THREE.Mesh;
    Cube020_Baked: THREE.Mesh;
    Cylinder002_Baked: THREE.Mesh;
    Cylinder006_Baked: THREE.Mesh;
    Cylinder_Baked: THREE.Mesh;
  };
  materials: {
    Objs2_Baked: THREE.MeshBasicMaterial;
    Objs3_Baked: THREE.MeshBasicMaterial;
    Objs1_Baked: THREE.MeshBasicMaterial;
    Objs5_Baked: THREE.MeshBasicMaterial;
    Objs6_Baked: THREE.MeshBasicMaterial;
    Objs7_Baked: THREE.MeshBasicMaterial;
    Objs4_Baked: THREE.MeshBasicMaterial;
    Main_Baked: THREE.MeshBasicMaterial;
  };
};

export function Room(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Portfolio_room.glb') as GLTFResult;
  const { scene } = useThree();
  const { isVisible } = useContext(VisibilityContext);

  const bedRef = useRef();
  const roomRef = useRef();
  const everythingRef = useRef();

  useEffect(() => {
    if (roomRef.current) {
      roomRef.current.traverse((object) => {
        if (object.isMesh) {
          object.visible = false;
        }
      });
    }
  }, []); //

  useEffect(() => {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.visible = isVisible;
      }
    });
  }, [isVisible, scene]);

  return (
    <>
      <group {...props} dispose={null} ref={roomRef}>
        <group name="Bed" ref={bedRef}>
          <mesh
            name="Bed_Pillows"
            geometry={nodes.Box002_Baked.geometry}
            material={materials.Objs2_Baked}
            position={[-6.907, 2.052, -0.094]}
            rotation={[-0.898, 0, 0]}
            userData={{ name: 'Bed_Pillows' }}
          />
          <mesh
            name="Bed_Liner"
            geometry={nodes.Cube038_Baked.geometry}
            material={materials.Objs2_Baked}
            position={[-7.062, 0.044, -4.368]}
            userData={{ name: 'Bed_Liner' }}
          />
          <mesh
            name="Bed_Backboard"
            geometry={nodes.Cube039_Baked.geometry}
            material={materials.Objs2_Baked}
            position={[-7.062, 2.409, 0.602]}
            userData={{ name: 'Bed_Backboard' }}
          />
          <mesh
            name="Bed_Mattress"
            geometry={nodes.Cube040_Baked.geometry}
            material={materials.Objs2_Baked}
            position={[-7.062, 0.798, -4.367]}
            userData={{ name: 'Bed_Mattress' }}
          />
          <mesh
            name="Bed_Legs"
            geometry={nodes.Cube059_Baked.geometry}
            material={materials.Objs2_Baked}
            position={[-7.062, -0.473, -8.646]}
            userData={{ name: 'Bed_Legs' }}
          />
          <mesh
            name="Bed_Quilt"
            geometry={nodes.Plane002_Baked.geometry}
            material={materials.Objs2_Baked}
            position={[-7.104, 1.044, -5.177]}
            userData={{ name: 'Bed_Quilt' }}
          />
        </group>
        <group ref={everythingRef}>
          <mesh
            name="Bishop001_Baked"
            geometry={nodes.Bishop001_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[5.691, 2.122, -5.58]}
            rotation={[Math.PI / 2, 0, -1.643]}
            userData={{ name: 'Bishop.001_Baked' }}
          />
          <mesh
            name="Bishop002__Baked"
            geometry={nodes.Bishop002__Baked.geometry}
            material={materials.Objs3_Baked}
            position={[5.698, 2.122, -6.369]}
            rotation={[Math.PI / 2, 0, -1.643]}
            userData={{ name: 'Bishop.002__Baked' }}
          />
          <mesh
            name="Bishop003__Baked"
            geometry={nodes.Bishop003__Baked.geometry}
            material={materials.Objs3_Baked}
            position={[7.219, 2.122, -6.374]}
            rotation={[Math.PI / 2, 0, -1.643]}
            userData={{ name: 'Bishop.003__Baked' }}
          />
          <mesh
            name="Bishop004__Baked"
            geometry={nodes.Bishop004__Baked.geometry}
            material={materials.Objs3_Baked}
            position={[7.219, 2.123, -5.593]}
            rotation={[Math.PI / 2, 0, -1.643]}
            userData={{ name: 'Bishop.004__Baked' }}
          />
          <mesh
            name="Cube001_Baked"
            geometry={nodes.Cube001_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[8.292, 1.991, -6.777]}
            userData={{ name: 'Cube.001_Baked' }}
          />
          <mesh
            name="Cube013_Baked"
            geometry={nodes.Cube013_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[6.446, 1.925, -5.985]}
            scale={1.043}
            userData={{ name: 'Cube.013_Baked' }}
          />
          <mesh
            name="Cube028_Baked"
            geometry={nodes.Cube028_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[8.292, 2.173, -6.777]}
            rotation={[Math.PI, 0, Math.PI]}
            userData={{ name: 'Cube.028_Baked' }}
          />
          <mesh
            name="Cube033_Baked"
            geometry={nodes.Cube033_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[8.292, 2.358, -6.777]}
            rotation={[-Math.PI, 1.497, -Math.PI]}
            userData={{ name: 'Cube.033_Baked' }}
          />
          <mesh
            name="Cube041_Baked"
            geometry={nodes.Cube041_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[8.257, 2.18, -6.353]}
            rotation={[-1.574, -0.016, 0.037]}
            userData={{ name: 'Cube.041_Baked' }}
          />
          <mesh
            name="Cube042_Baked"
            geometry={nodes.Cube042_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[8.434, 2.735, -6.706]}
            rotation={[-Math.PI, 1.565, -Math.PI]}
            userData={{ name: 'Cube.042_Baked' }}
          />
          <mesh
            name="Cube043_Baked"
            geometry={nodes.Cube043_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[8.434, 2.92, -6.706]}
            rotation={[0, -1.204, 0]}
            userData={{ name: 'Cube.043_Baked' }}
          />
          <mesh
            name="Cube044_Baked"
            geometry={nodes.Cube044_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[8.289, 2.2, -6.017]}
            rotation={[-Math.PI / 2, -0.005, -Math.PI]}
            userData={{ name: 'Cube.044_Baked' }}
          />
          <mesh
            name="Cube045_Baked"
            geometry={nodes.Cube045_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[8.396, 2.714, -5.542]}
            rotation={[0, -1.569, 0]}
            userData={{ name: 'Cube.045_Baked' }}
          />
          <mesh
            name="Cube046_Baked"
            geometry={nodes.Cube046_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[8.275, 2.197, -5.381]}
            rotation={[1.571, -0.005, -0.001]}
            userData={{ name: 'Cube.046_Baked' }}
          />
          <mesh
            name="Cube047_Baked"
            geometry={nodes.Cube047_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[8.434, 3.102, -6.706]}
            rotation={[Math.PI, -1.306, Math.PI]}
            userData={{ name: 'Cube.047_Baked' }}
          />
          <mesh
            name="Cube048_Baked"
            geometry={nodes.Cube048_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[8.35, 2.902, -5.969]}
            rotation={[-1.278, -0.005, -Math.PI]}
            userData={{ name: 'Cube.048_Baked' }}
          />
          <mesh
            name="Cube049_Baked"
            geometry={nodes.Cube049_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[8.359, 3.406, -5.689]}
            rotation={[Math.PI, -0.029, Math.PI]}
            userData={{ name: 'Cube.049_Baked' }}
          />
          <mesh
            name="Cube060_Baked"
            geometry={nodes.Cube060_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[8.304, 2.2, -5.823]}
            rotation={[-Math.PI / 2, -0.005, -Math.PI]}
            userData={{ name: 'Cube.060_Baked' }}
          />
          <mesh
            name="Cube061_Baked"
            geometry={nodes.Cube061_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[8.304, 2.2, -5.629]}
            rotation={[-Math.PI / 2, -0.005, -Math.PI]}
            userData={{ name: 'Cube.061_Baked' }}
          />
          <mesh
            name="Cube062_Baked"
            geometry={nodes.Cube062_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[8.357, 2.865, -5.549]}
            rotation={[0, -1.569, 0]}
            userData={{ name: 'Cube.062_Baked' }}
          />
          <mesh
            name="Cube063_Baked"
            geometry={nodes.Cube063_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[8.329, 3.038, -5.549]}
            rotation={[0, -1.569, 0]}
            userData={{ name: 'Cube.063_Baked' }}
          />
          <mesh
            name="King001__Baked"
            geometry={nodes.King001__Baked.geometry}
            material={materials.Objs3_Baked}
            position={[7.219, 2.185, -5.85]}
            rotation={[Math.PI / 2, 0, -1.643]}
            userData={{ name: 'King.001__Baked' }}
          />
          <mesh
            name="King_Baked_Baked"
            geometry={nodes.King_Baked_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[5.698, 2.183, -5.841]}
            rotation={[Math.PI / 2, 0, -1.643]}
            userData={{ name: 'King_Baked_Baked' }}
          />
          <mesh
            name="Knight001__Baked"
            geometry={nodes.Knight001__Baked.geometry}
            material={materials.Objs3_Baked}
            position={[5.693, 2.096, -5.332]}
            rotation={[Math.PI / 2, 0, -1.643]}
            userData={{ name: 'Knight.001__Baked' }}
          />
          <mesh
            name="Knight002__Baked"
            geometry={nodes.Knight002__Baked.geometry}
            material={materials.Objs3_Baked}
            position={[5.685, 2.096, -6.639]}
            rotation={[Math.PI / 2, 0, -1.643]}
            userData={{ name: 'Knight.002__Baked' }}
          />
          <mesh
            name="Knight003__Baked"
            geometry={nodes.Knight003__Baked.geometry}
            material={materials.Objs3_Baked}
            position={[7.225, 2.098, -6.625]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            userData={{ name: 'Knight.003__Baked' }}
          />
          <mesh
            name="Knight004__Baked"
            geometry={nodes.Knight004__Baked.geometry}
            material={materials.Objs3_Baked}
            position={[7.241, 2.098, -5.326]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            userData={{ name: 'Knight.004__Baked' }}
          />
          <mesh
            name="Pawn001__Baked"
            geometry={nodes.Pawn001__Baked.geometry}
            material={materials.Objs3_Baked}
            position={[6.983, 2.054, -5.981]}
            rotation={[Math.PI / 2, 0, -1.588]}
            userData={{ name: 'Pawn.001__Baked' }}
          />
          <mesh
            name="Pawn006__Baked"
            geometry={nodes.Pawn006__Baked.geometry}
            material={materials.Objs3_Baked}
            position={[5.911, 2.065, -5.981]}
            rotation={[Math.PI / 2, 0, -1.588]}
            userData={{ name: 'Pawn.006__Baked' }}
          />
          <mesh
            name="Queen001__Baked"
            geometry={nodes.Queen001__Baked.geometry}
            material={materials.Objs3_Baked}
            position={[7.219, 2.201, -6.111]}
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: 'Queen.001__Baked' }}
          />
          <mesh
            name="Queen__Baked"
            geometry={nodes.Queen__Baked.geometry}
            material={materials.Objs3_Baked}
            position={[5.705, 2.198, -6.124]}
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: 'Queen__Baked' }}
          />
          <mesh
            name="Rook003__Baked"
            geometry={nodes.Rook003__Baked.geometry}
            material={materials.Objs3_Baked}
            position={[5.704, 2.17, -5.067]}
            rotation={[Math.PI / 2, 0, -1.643]}
            userData={{ name: 'Rook.003__Baked' }}
          />
          <mesh
            name="Rook004__Baked"
            geometry={nodes.Rook004__Baked.geometry}
            material={materials.Objs3_Baked}
            position={[7.197, 2.171, -6.873]}
            rotation={[Math.PI / 2, 0, -1.643]}
            userData={{ name: 'Rook.004__Baked' }}
          />
          <mesh
            name="Rook005__Baked"
            geometry={nodes.Rook005__Baked.geometry}
            material={materials.Objs3_Baked}
            position={[7.238, 2.171, -5.074]}
            rotation={[Math.PI / 2, 0, -1.643]}
            userData={{ name: 'Rook.005__Baked' }}
          />
          <mesh
            name="Rook_Baked"
            geometry={nodes.Rook_Baked.geometry}
            material={materials.Objs3_Baked}
            position={[5.693, 2.17, -6.9]}
            rotation={[Math.PI / 2, 0, -1.643]}
            userData={{ name: 'Rook_Baked' }}
          />
          <mesh
            name="Torus001_Baked"
            geometry={nodes.Torus001_Baked.geometry}
            material={materials.Objs1_Baked}
            position={[3.001, 6.817, 1.097]}
            rotation={[0, 0, -Math.PI / 2]}
            userData={{ name: 'Torus.001_Baked' }}
          />
          <mesh
            name="Torus_Baked"
            geometry={nodes.Torus_Baked.geometry}
            material={materials.Objs1_Baked}
            position={[-3.441, 6.817, 1.097]}
            rotation={[0, 0, -Math.PI / 2]}
            userData={{ name: 'Torus_Baked' }}
          >
            <mesh
              name="Cube024_Baked"
              geometry={nodes.Cube024_Baked.geometry}
              material={materials.Objs1_Baked}
              position={[2.037, 12.436, -13.746]}
              rotation={[0, -Math.PI / 2, 0]}
              userData={{ name: 'Cube.024_Baked' }}
            />
          </mesh>
          <mesh
            name="Circle001_Baked"
            geometry={nodes.Circle001_Baked.geometry}
            material={materials.Objs5_Baked}
            position={[7.577, 4.293, -1.018]}
            rotation={[1.611, 0.002, 0.342]}
            userData={{ name: 'Circle.001_Baked' }}
          />
          <mesh
            name="Circle003_Baked"
            geometry={nodes.Circle003_Baked.geometry}
            material={materials.Objs5_Baked}
            position={[0.067, 0.023, -0.182]}
            rotation={[0, -0.014, 0]}
            userData={{ name: 'Circle.003_Baked' }}
          />
          <mesh
            name="Cube002_Baked"
            geometry={nodes.Cube002_Baked.geometry}
            material={materials.Objs5_Baked}
            position={[7.665, 3.006, -3.104]}
            rotation={[0, 0, -1.664]}
            scale={1.122}
            userData={{ name: 'Cube.002_Baked' }}
          />
          <mesh
            name="Cube007_Baked"
            geometry={nodes.Cube007_Baked.geometry}
            material={materials.Objs5_Baked}
            position={[7.342, 3.306, -0.769]}
            rotation={[1.606, -0.059, -1.028]}
            scale={1.122}
            userData={{ name: 'Cube.007_Baked' }}
          />
          <mesh
            name="Cube011_Baked"
            geometry={nodes.Cube011_Baked.geometry}
            material={materials.Objs5_Baked}
            position={[6.385, 1.925, -3.248]}
            rotation={[0, 0, 0.032]}
            scale={1.122}
            userData={{ name: 'Cube.011_Baked' }}
          />
          <mesh
            name="Cube012_Baked"
            geometry={nodes.Cube012_Baked.geometry}
            material={materials.Objs5_Baked}
            position={[6.231, 1.916, -1.521]}
            rotation={[0, -1.493, -Math.PI]}
            scale={1.122}
            userData={{ name: 'Cube.012_Baked' }}
          />
          <mesh
            name="Sphere_Baked"
            geometry={nodes.Sphere_Baked.geometry}
            material={materials.Objs5_Baked}
            position={[6.228, 1.963, -1.532]}
            rotation={[Math.PI, -0.17, Math.PI]}
            scale={1.122}
            userData={{ name: 'Sphere_Baked' }}
          />
          <mesh
            name="Cube025_Baked"
            geometry={nodes.Cube025_Baked.geometry}
            material={materials.Objs6_Baked}
            position={[-2.476, 2.48, -17.063]}
            rotation={[-Math.PI / 2, 0, 0]}
            userData={{ name: 'Cube.025_Baked' }}
          />
          <mesh
            name="Cube026_Baked"
            geometry={nodes.Cube026_Baked.geometry}
            material={materials.Objs6_Baked}
            position={[-0.665, 2.877, -17.139]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            userData={{ name: 'Cube.026_Baked' }}
          />
          <mesh
            name="Cube027_Baked"
            geometry={nodes.Cube027_Baked.geometry}
            material={materials.Objs6_Baked}
            position={[-1.818, 5.059, -16.996]}
            rotation={[Math.PI, 1.571, 0]}
            userData={{ name: 'Cube.027_Baked' }}
          />
          <mesh
            name="Cube029_Baked"
            geometry={nodes.Cube029_Baked.geometry}
            material={materials.Objs6_Baked}
            position={[-1.818, 2.051, -16.996]}
            rotation={[Math.PI, 1.571, 0]}
            userData={{ name: 'Cube.029_Baked' }}
          />
          <mesh
            name="Cube030_Baked"
            geometry={nodes.Cube030_Baked.geometry}
            material={materials.Objs6_Baked}
            position={[1.63, 0.755, -16.945]}
            rotation={[Math.PI, 1.571, 0]}
            userData={{ name: 'Cube.030_Baked' }}
          />
          <mesh
            name="Cube032_Baked"
            geometry={nodes.Cube032_Baked.geometry}
            material={materials.Objs6_Baked}
            position={[-4.008, 2.877, -15.67]}
            userData={{ name: 'Cube.032_Baked' }}
          />
          <mesh
            name="Cube065_Baked"
            geometry={nodes.Cube065_Baked.geometry}
            material={materials.Objs6_Baked}
            position={[-6.719, 2.877, -15.595]}
            userData={{ name: 'Cube.065_Baked' }}
          />
          <mesh
            name="Cylinder010_Baked"
            geometry={nodes.Cylinder010_Baked.geometry}
            material={materials.Objs6_Baked}
            position={[1.642, 4.534, -16.895]}
            rotation={[0, 0, -Math.PI / 2]}
            userData={{ name: 'Cylinder.010_Baked' }}
          />
          <mesh
            name="NurbsPath002_Baked"
            geometry={nodes.NurbsPath002_Baked.geometry}
            material={materials.Objs6_Baked}
            position={[1.668, 4.247, -16.889]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            userData={{ name: 'NurbsPath.002_Baked' }}
          />
          <mesh
            name="Sphere004_Baked"
            geometry={nodes.Sphere004_Baked.geometry}
            material={materials.Objs6_Baked}
            position={[1.7, 0.825, -15.664]}
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: 'Sphere.004_Baked' }}
          />
          <mesh
            name="Uzi_Tshirt002_Baked"
            geometry={nodes.Uzi_Tshirt002_Baked.geometry}
            material={materials.Objs6_Baked}
            position={[1.061, 3.531, -16.898]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            userData={{ name: 'Uzi Tshirt.002_Baked' }}
          />
          <mesh
            name="chair_f003_Baked"
            geometry={nodes.chair_f003_Baked.geometry}
            material={materials.Objs7_Baked}
            position={[1.748, 1.179, -4.077]}
            rotation={[Math.PI / 2, 0, -2.776]}
            userData={{ name: 'chair_f.003_Baked' }}
          />
          <mesh
            name="Cube014_Baked"
            geometry={nodes.Cube014_Baked.geometry}
            material={materials.Objs4_Baked}
            position={[8.417, 2.581, -5.165]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.122}
            userData={{ name: 'Cube.014_Baked' }}
          />
          <mesh
            name="Cube015_Baked"
            geometry={nodes.Cube015_Baked.geometry}
            material={materials.Objs4_Baked}
            position={[8.417, 2.581, -7.157]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.122}
            userData={{ name: 'Cube.015_Baked' }}
          />
          <mesh
            name="Cube016_Baked"
            geometry={nodes.Cube016_Baked.geometry}
            material={materials.Objs4_Baked}
            position={[8.429, 2.581, -6.024]}
            rotation={[-Math.PI, 0, 0]}
            scale={1.122}
            userData={{ name: 'Cube.016_Baked' }}
          />
          <mesh
            name="Cube017_Baked"
            geometry={nodes.Cube017_Baked.geometry}
            material={materials.Objs4_Baked}
            position={[8.429, 2.581, -6.184]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.122}
            userData={{ name: 'Cube.017_Baked' }}
          />
          <mesh
            name="Cube018_Baked"
            geometry={nodes.Cube018_Baked.geometry}
            material={materials.Objs4_Baked}
            position={[8.429, 3.269, -5.604]}
            rotation={[-Math.PI, 0, 0]}
            scale={1.122}
            userData={{ name: 'Cube.018_Baked' }}
          />
          <mesh
            name="Cube066_Baked"
            geometry={nodes.Cube066_Baked.geometry}
            material={materials.Objs4_Baked}
            position={[6.756, 0.251, -1.028]}
            userData={{ name: 'Cube.066_Baked' }}
          />
          <mesh
            name="Cube068_Baked"
            geometry={nodes.Cube068_Baked.geometry}
            material={materials.Objs4_Baked}
            position={[7.115, -0.465, -7.026]}
            userData={{ name: 'Cube.068_Baked' }}
          />
          <mesh
            name="Cube069_Baked"
            geometry={nodes.Cube069_Baked.geometry}
            material={materials.Objs4_Baked}
            position={[7.115, 0.604, -6.891]}
            userData={{ name: 'Cube.069_Baked' }}
          />
          <mesh
            name="Plane003_Baked"
            geometry={nodes.Plane003_Baked.geometry}
            material={materials.Objs4_Baked}
            position={[6.62, 1.905, -3.403]}
            userData={{ name: 'Plane.003_Baked' }}
          />
          <mesh
            name="Plane005_Baked"
            geometry={nodes.Plane005_Baked.geometry}
            material={materials.Objs4_Baked}
            position={[4.61, -0.534, -2.887]}
            rotation={[0, 0, Math.PI]}
            scale={1.122}
            userData={{ name: 'Plane.005_Baked' }}
          />
          <mesh
            name="Cube003_Baked"
            geometry={nodes.Cube003_Baked.geometry}
            material={materials.Main_Baked}
            position={[-0.975, 4.132, -8.716]}
            userData={{ name: 'Cube.003_Baked' }}
          />
          <mesh
            name="Cube004_Baked"
            geometry={nodes.Cube004_Baked.geometry}
            material={materials.Main_Baked}
            position={[-0.975, 4.132, -8.716]}
            scale={[10.028, 4.819, 10.028]}
            userData={{ name: 'Cube.004_Baked' }}
          />
          <mesh
            name="Cube005_Baked"
            geometry={nodes.Cube005_Baked.geometry}
            material={materials.Main_Baked}
            position={[-0.975, 4.132, -8.716]}
            userData={{ name: 'Cube.005_Baked' }}
          />
          <mesh
            name="Plane001_Baked"
            geometry={nodes.Plane001_Baked.geometry}
            material={materials.Main_Baked}
            position={[-10.973, 4.114, -7.512]}
            rotation={[0, 0, -Math.PI / 2]}
            userData={{ name: 'Plane.001_Baked' }}
          />
          <mesh
            name="Cube010_Baked"
            geometry={nodes.Cube010_Baked.geometry}
            material={materials.Objs1_Baked}
            position={[9, 2.703, -12.649]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            userData={{ name: 'Cube.010_Baked' }}
          />
          <mesh
            name="Cube022_Baked"
            geometry={nodes.Cube022_Baked.geometry}
            material={materials.Objs1_Baked}
            position={[9.004, 2.069, -12.654]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            userData={{ name: 'Cube.022_Baked' }}
          />
          <mesh
            name="Cube023_Baked"
            geometry={nodes.Cube023_Baked.geometry}
            material={materials.Objs1_Baked}
            position={[9, 2.758, -12.649]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            userData={{ name: 'Cube.023_Baked' }}
          />
          <mesh
            name="Cube031_Baked"
            geometry={nodes.Cube031_Baked.geometry}
            material={materials.Objs1_Baked}
            position={[9.004, 5.437, -12.654]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            userData={{ name: 'Cube.031_Baked' }}
          />
          <mesh
            name="Sphere001_Baked"
            geometry={nodes.Sphere001_Baked.geometry}
            material={materials.Objs1_Baked}
            position={[8.844, 2.248, -11.113]}
            rotation={[0, 0, -Math.PI / 2]}
            userData={{ name: 'Sphere.001_Baked' }}
          />
          <mesh
            name="Cube034_Baked"
            geometry={nodes.Cube034_Baked.geometry}
            material={materials.Objs1_Baked}
            position={[-0.166, 4.433, 1.411]}
            rotation={[-Math.PI / 2, 0, 0]}
            userData={{ name: 'Cube.034_Baked' }}
          />
          <mesh
            name="Cube035_Baked"
            geometry={nodes.Cube035_Baked.geometry}
            material={materials.Objs1_Baked}
            position={[-0.166, 4.542, 1.5]}
            rotation={[-0.615, 0, 0]}
            userData={{ name: 'Cube.035_Baked' }}
          />
          <mesh
            name="curtain001_Baked"
            geometry={nodes.curtain001_Baked.geometry}
            material={materials.Objs1_Baked}
            position={[3.085, 3.743, 1.018]}
            rotation={[Math.PI, 0, Math.PI]}
            userData={{ name: 'curtain.001_Baked' }}
          />
          <mesh
            name="curtain002_Baked"
            geometry={nodes.curtain002_Baked.geometry}
            material={materials.Objs1_Baked}
            position={[-3.586, 4.069, 1.082]}
            rotation={[Math.PI, 0, Math.PI]}
            userData={{ name: 'curtain.002_Baked' }}
          />
          <mesh
            name="Cylinder012_Baked"
            geometry={nodes.Cylinder012_Baked.geometry}
            material={materials.Objs1_Baked}
            position={[0.004, 6.867, 1.094]}
            rotation={[0, 0, -Math.PI / 2]}
            userData={{ name: 'Cylinder.012_Baked' }}
          />
          <mesh
            name="Sphere003_Baked"
            geometry={nodes.Sphere003_Baked.geometry}
            material={materials.Objs1_Baked}
            position={[0.004, 6.872, 1.083]}
            rotation={[0, 0, -Math.PI / 2]}
            userData={{ name: 'Sphere.003_Baked' }}
          />
          <mesh
            name="Cube019_Baked"
            geometry={nodes.Cube019_Baked.geometry}
            material={materials.Objs5_Baked}
            position={[8.946, 5.549, -3.81]}
            rotation={[0, 0, -Math.PI / 2]}
            userData={{ name: 'Cube.019_Baked' }}
          />
          <mesh
            name="Cube020_Baked"
            geometry={nodes.Cube020_Baked.geometry}
            material={materials.Objs5_Baked}
            position={[8.798, 4.349, -3.302]}
            rotation={[-Math.PI, 0, 0]}
            userData={{ name: 'Cube.020_Baked' }}
          />
          <mesh
            name="Cylinder002_Baked"
            geometry={nodes.Cylinder002_Baked.geometry}
            material={materials.Objs5_Baked}
            position={[8.801, 4.437, -3.27]}
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: 'Cylinder.002_Baked' }}
          />
          <mesh
            name="Cylinder006_Baked"
            geometry={nodes.Cylinder006_Baked.geometry}
            material={materials.Objs5_Baked}
            position={[8.601, 4.437, -3.286]}
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: 'Cylinder.006_Baked' }}
          />
          <mesh
            name="Cylinder_Baked"
            geometry={nodes.Cylinder_Baked.geometry}
            material={materials.Objs5_Baked}
            position={[8.706, 4.437, -3.525]}
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: 'Cylinder_Baked' }}
          />
        </group>
      </group>
      {console.log(bedRef.current)}

      {/* <mesh
        geometry={bedRef.current.geometry}
        material={bedRef.current.material}
        position={[0, 0, 0]}
        scale={4}
      ></mesh> */}
    </>
  );
}

useGLTF.preload('/Portfolio_room.glb');

export const useRoomGLTF = () => useGLTF('/Portfolio_room.glb');
