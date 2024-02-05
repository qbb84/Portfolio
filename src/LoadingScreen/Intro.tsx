import { useThree } from '@react-three/fiber';
import OrbitControl from '../Components/Test/OrbitControl';
import { OrbitControls } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';
import { Room } from '../Components/ModelRender/Room';
import Debug from '../Components/Test/Debug';
import Player from '../Components/ModelRender/Player';

export default function Intro() {
  const { camera } = useThree();

  if (camera) {
    camera.position.set(18, 10, 12);
  }
  return (
    <>
      <Physics gravity={[0, -20, 0]} debug={false}>
        {/* <Lighting /> */}
        <RigidBody type="fixed" colliders={'trimesh'}>
          <Room position={[5, 5, 5]} rotation={[0, 4.4, 0]} />
        </RigidBody>
        {/* <CuboidCollider args={[1000, 5, 1000]} /> */}
        <Player />
      </Physics>
      <Debug />
    </>
  );
}
