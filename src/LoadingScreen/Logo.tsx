import { Html } from '@react-three/drei';

interface props {
  classStyle?: string;
}

export default function Logo({ classStyle = 'luke' }: props) {
  return (
    <>
      <Html center>
        <div className={classStyle}>
          <img src="./images/luke.png" alt="Luke" className="luke-text" />
        </div>
      </Html>
    </>
  );
}
