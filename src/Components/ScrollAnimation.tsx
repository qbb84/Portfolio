import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Room } from "./ModelRender/Room";
import Foo from "./Foo";
import { useThree } from "@react-three/fiber";

export default function ScrollAnimation() {
  const { viewport } = useThree();

  return (
    <>
      <group>
        <ScrollControls pages={5} damping={0.1}>
          {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
          <Scroll>
            {/* Canvas contents in here will scroll along */}
            <Foo position={[0, 0, 0]} />
            <Foo position={[0, viewport.height, 0]} />
            <Foo position={[0, viewport.height * 1, 0]} />
          </Scroll>
          <Scroll html>
            {/* DOM contents in here will scroll along */}
            <h1>html in here (optional)</h1>
            <h1 style={{ top: "500vh" }}>second page</h1>
            <h1 style={{ top: "200vh" }}>third page</h1>
          </Scroll>

          <Scroll>
            <Room position={[6, -30, 0]} rotation={[0, 2, 0]} />
          </Scroll>
        </ScrollControls>
        <OrbitControls />
      </group>
    </>
  );
}
