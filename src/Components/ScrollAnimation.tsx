import {
  Html,
  OrbitControls,
  Scroll,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import { Room } from "./ModelRender/Room";
import Foo from "./Foo";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import OrbitControl from "./Test/OrbitControl";

export default function ScrollAnimation() {
  const viewport = useThree().viewport;

  return (
    <>
      <ScrollControls pages={5} damping={0.1}>
        {
          /* Canvas contents in here will *not* scroll, but receive useScroll! */
          <Html>
            <button className="scrollBtn" onClick={console.log("yo")}>
              Scroll
            </button>
          </Html>
        }
        <Scroll>
          {/* Canvas contents in here will scroll along */}
          <Foo position={[0, 0, 0]} />
          <Foo position={[0, viewport.height, 0]} />
          <Foo position={[0, viewport.height * 1, 0]} />

          <RoomCurve />
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
    </>
  );
}

function RoomCurve(props) {
  const ref = useRef();
  const data = useScroll();

  useFrame(() => {
    const a = data.range(0, 1 / 3);
    const b = data.range(1 / 3, 1 / 3);
    const c = data.range(1 / 3, 1 / 3, 0.1);

    const d = data.curve(1 / 3, 1 / 3);
    const e = data.curve(1 / 3, 1 / 3, 0.1);

    const f = data.visible(2 / 3, 1 / 3);
    const g = data.visible(2 / 3, 1 / 3, 0.1);
  });

  return <mesh ref={ref} {...props} />;
}
