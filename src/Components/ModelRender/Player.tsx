import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Player(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/Player.glb');
  const { ref, mixer, names, actions, clips } = useAnimations(animations);

  const { camera } = useThree();

  const offset = new THREE.Vector3(0, -0, 1);

  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'w' || event.key === 'W') {
        setIsMoving(true);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === 'w' || event.key === 'W') {
        setIsMoving(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  if (ref.current) {
    ref.current.position.x = 8.78;
    ref.current.position.y = 6.8;
    ref.current.position.z = 0;

    ref.current.rotation.y = 1;
    ref.current.rotation.z = 0;
  }

  useFrame(() => {
    actions['scary_wake.001']?.play();
  });

  // useFrame(() => {
  //   if (actions) {
  //     if (isMoving) {
  //       actions['idle-b'].stop();
  //       actions['new_walk.001']?.play();
  //       console.log('moving');
  //     } else if (!isMoving) {
  //       console.log('hey!');
  //       actions['new_walk.001']?.fadeOut(5).stop();
  //       actions['idle-b'].play();
  //     }
  //   }
  // });

  // const velocity = new THREE.Vector3();
  // useFrame(() => {
  //   setTimeout(() => {
  //     if (ref.current) {
  //       // Get the camera's world direction

  //       // targetDirection.copy(camera.getWorldDirection(targetDirection));

  //       ref.current.position.copy(camera.position).add(offset);

  //       // Set player's rotation based on camera's rotation
  //       ref.current.rotation.y = Math.PI - camera.rotation.y;

  //       ref.current.position.y = camera.position.y - 4;

  //       //
  //     }
  //   });
  // }, 4000);

  names.forEach((name) => console.log(name));

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group name="rig003" userData={{ name: 'rig.003' }}>
          <group name="Belt" userData={{ name: 'Belt' }}>
            <skinnedMesh
              name="Mesh"
              geometry={nodes.Mesh.geometry}
              material={materials['Material.330']}
              skeleton={nodes.Mesh.skeleton}
            />
            <skinnedMesh
              name="Mesh_1"
              geometry={nodes.Mesh_1.geometry}
              material={materials['Material.329']}
              skeleton={nodes.Mesh_1.skeleton}
            />
          </group>
          <skinnedMesh
            name="Belt001"
            geometry={nodes.Belt001.geometry}
            material={materials.pants}
            skeleton={nodes.Belt001.skeleton}
            userData={{ name: 'Belt.001' }}
          />
          <skinnedMesh
            name="Belt002"
            geometry={nodes.Belt002.geometry}
            material={materials.pants}
            skeleton={nodes.Belt002.skeleton}
            userData={{ name: 'Belt.002' }}
          />
          <skinnedMesh
            name="Belt003"
            geometry={nodes.Belt003.geometry}
            material={materials.pants}
            skeleton={nodes.Belt003.skeleton}
            userData={{ name: 'Belt.003' }}
          />
          <skinnedMesh
            name="Belt004"
            geometry={nodes.Belt004.geometry}
            material={materials.pants}
            skeleton={nodes.Belt004.skeleton}
            userData={{ name: 'Belt.004' }}
          />
          <group name="body001" userData={{ name: 'body.001' }}>
            <skinnedMesh
              name="GEO-vincent_body"
              geometry={nodes['GEO-vincent_body'].geometry}
              material={materials.shirt}
              skeleton={nodes['GEO-vincent_body'].skeleton}
            />
            <skinnedMesh
              name="GEO-vincent_body_1"
              geometry={nodes['GEO-vincent_body_1'].geometry}
              material={materials.socks}
              skeleton={nodes['GEO-vincent_body_1'].skeleton}
            />
            <skinnedMesh
              name="GEO-vincent_body_2"
              geometry={nodes['GEO-vincent_body_2'].geometry}
              material={materials['Material.363']}
              skeleton={nodes['GEO-vincent_body_2'].skeleton}
            />
            <skinnedMesh
              name="GEO-vincent_body_3"
              geometry={nodes['GEO-vincent_body_3'].geometry}
              material={materials['Material.361']}
              skeleton={nodes['GEO-vincent_body_3'].skeleton}
            />
          </group>
          <skinnedMesh
            name="body002"
            geometry={nodes.body002.geometry}
            material={materials.pants}
            skeleton={nodes.body002.skeleton}
            userData={{ name: 'body.002' }}
          />
          <skinnedMesh
            name="Eyebrows"
            geometry={nodes.Eyebrows.geometry}
            material={materials['Material.337']}
            skeleton={nodes.Eyebrows.skeleton}
            userData={{ name: 'Eyebrows' }}
          />
          <skinnedMesh
            name="Head001"
            geometry={nodes.Head001.geometry}
            material={materials['Material.354']}
            skeleton={nodes.Head001.skeleton}
            userData={{ name: 'Head.001' }}
          />
          <skinnedMesh
            name="mouth-inner"
            geometry={nodes['mouth-inner'].geometry}
            material={materials.mouth}
            skeleton={nodes['mouth-inner'].skeleton}
            userData={{ name: 'mouth-inner' }}
          />
          <group name="shoes001" userData={{ name: 'shoes.001' }}>
            <skinnedMesh
              name="mike_jeans002"
              geometry={nodes.mike_jeans002.geometry}
              material={nodes.mike_jeans002.material}
              skeleton={nodes.mike_jeans002.skeleton}
            />
            <skinnedMesh
              name="mike_jeans002_1"
              geometry={nodes.mike_jeans002_1.geometry}
              material={materials['Material.357']}
              skeleton={nodes.mike_jeans002_1.skeleton}
            />
            <skinnedMesh
              name="mike_jeans002_2"
              geometry={nodes.mike_jeans002_2.geometry}
              material={materials['Material.356']}
              skeleton={nodes.mike_jeans002_2.skeleton}
            />
            <skinnedMesh
              name="mike_jeans002_3"
              geometry={nodes.mike_jeans002_3.geometry}
              material={materials['Material.355']}
              skeleton={nodes.mike_jeans002_3.skeleton}
            />
            <skinnedMesh
              name="mike_jeans002_4"
              geometry={nodes.mike_jeans002_4.geometry}
              material={materials['Material.335']}
              skeleton={nodes.mike_jeans002_4.skeleton}
            />
          </group>
          <skinnedMesh
            name="Tongue002"
            geometry={nodes.Tongue002.geometry}
            material={materials.mouth}
            skeleton={nodes.Tongue002.skeleton}
            userData={{ name: 'Tongue.002' }}
          />
          <primitive object={nodes['DEF-spine']} />
          <primitive object={nodes['DEF-pelvisL']} />
          <primitive object={nodes['DEF-pelvisR']} />
          <primitive object={nodes['DEF-thighL']} />
          <primitive object={nodes['DEF-thighR']} />
          <primitive object={nodes['DEF-earL']} />
          <primitive object={nodes['DEF-earL001']} />
          <primitive object={nodes['DEF-earL002']} />
          <primitive object={nodes['DEF-earL004']} />
          <primitive object={nodes['DEF-earR']} />
          <primitive object={nodes['DEF-earR001']} />
          <primitive object={nodes['DEF-earR002']} />
          <primitive object={nodes['DEF-earR004']} />
          <primitive object={nodes['DEF-teethT']} />
          <primitive object={nodes['DEF-nose002']} />
          <primitive object={nodes['DEF-noseL001']} />
          <primitive object={nodes['DEF-noseR001']} />
          <primitive object={nodes['DEF-eye_masterL']} />
          <primitive object={nodes['DEF-lidBL']} />
          <primitive object={nodes['DEF-lidTL']} />
          <primitive object={nodes['MCH-eyeL']} />
          <primitive object={nodes['DEF-eye_masterR']} />
          <primitive object={nodes['DEF-lidBR']} />
          <primitive object={nodes['DEF-lidTR']} />
          <primitive object={nodes['MCH-eyeR']} />
          <primitive object={nodes['DEF-teethB']} />
          <primitive object={nodes.teethB} />
          <primitive object={nodes['DEF-tongue']} />
          <primitive object={nodes['DEF-jaw_master']} />
          <primitive object={nodes['DEF-chin']} />
          <primitive object={nodes['DEF-jaw']} />
          <primitive object={nodes['DEF-jawL']} />
          <primitive object={nodes['DEF-jawR']} />
          <primitive object={nodes['DEF-lipTL']} />
          <primitive object={nodes['DEF-lipTR']} />
          <primitive object={nodes['DEF-lipBL']} />
          <primitive object={nodes['DEF-lipBR']} />
          <primitive object={nodes.teethT} />
          <primitive object={nodes['DEF-browBL']} />
          <primitive object={nodes['DEF-browBL004']} />
          <primitive object={nodes['DEF-browBR']} />
          <primitive object={nodes['DEF-browBR004']} />
          <primitive object={nodes['DEF-browTL']} />
          <primitive object={nodes['DEF-browTL001']} />
          <primitive object={nodes['DEF-browTL003']} />
          <primitive object={nodes['DEF-browTR']} />
          <primitive object={nodes['DEF-browTR001']} />
          <primitive object={nodes['DEF-browTR003']} />
          <primitive object={nodes['DEF-cheekBL']} />
          <primitive object={nodes['DEF-cheekBR']} />
          <primitive object={nodes['DEF-cheekTL']} />
          <primitive object={nodes['DEF-cheekTR']} />
          <primitive object={nodes['DEF-foreheadL']} />
          <primitive object={nodes['DEF-foreheadL001']} />
          <primitive object={nodes['DEF-foreheadL002']} />
          <primitive object={nodes['DEF-foreheadR']} />
          <primitive object={nodes['DEF-foreheadR001']} />
          <primitive object={nodes['DEF-foreheadR002']} />
          <primitive object={nodes['DEF-nose']} />
          <primitive object={nodes['DEF-nose004']} />
          <primitive object={nodes['DEF-templeL']} />
          <primitive object={nodes['DEF-templeR']} />
          <primitive object={nodes.head} />
          <primitive object={nodes['DEF-shoulderL']} />
          <primitive object={nodes['DEF-upper_armL']} />
          <primitive object={nodes['DEF-shoulderR']} />
          <primitive object={nodes['DEF-upper_armR']} />
          <primitive object={nodes.neutral_bone} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/Player.glb');
