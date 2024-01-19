import { useRef } from "react";

export default function Foo(props) {
  const ref = useRef();
  return (
    <>
      <mesh ref={ref} {...props}>
        <boxGeometry />
        <meshToonMaterial />
      </mesh>
    </>
  );
}
