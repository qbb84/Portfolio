import { Html, Hud } from '@react-three/drei';
import { HudLoadContext } from './HudLoadContext';
import { useContext } from 'react';

enum Position {
  Top,
  Bottom,
  Left,
  Right,
}

export default function HudDisplay() {
  const { hudLoaded } = useContext(HudLoadContext);
  return (
    <>
      <p className="hudLogoText">Luke's Exclusion</p>
      <div
        className={'hud'}
        style={{
          position: 'absolute',
          visibility: hudLoaded ? 'visible' : 'hidden',
          zIndex: 9999,
        }}
      >
        <div
          className="LeftSideBottom"
          style={{
            position: 'absolute',
            bottom: '2%',
            left: '2%',
            width: '500px',
            height: '50px',
            backgroundColor: 'black',
            opacity: 0.5,

            display: 'grid', // Add this line
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', // Add this line
          }}
        ></div>

        <div
          className="LeftSideTop"
          style={{
            position: 'absolute',
            bottom: '0%',
            left: '0%',
            width: '500px',
            height: '50px',
            backgroundColor: 'black',
            opacity: 0.5,
            zIndex: 9999,
            display: 'grid', // Add this line
            transform: 'rotate(90deg) translateX(-49%) translateY(373%)', // Add this line
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', // Add this line
          }}
        ></div>
      </div>
    </>
  );
}

function HudButton(Icon?: string, props) {
  return (
    <div {...props}>
      <img src={'https://loading.io/icon/kvo3wt'} alt="icon" />
    </div>
  );
}
