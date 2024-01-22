import { Html } from '@react-three/drei';

export default function Logo() {
  return (
    <>
      <Html center zIndexRange={[50]}>
        <div className={'luke container'}>
          <img src="./images/luke.png" alt="Luke" className="luke-text" />
        </div>
      </Html>
    </>
  );
}
