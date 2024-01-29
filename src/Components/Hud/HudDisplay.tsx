import { Html, Hud } from '@react-three/drei';
import { HudLoadContext } from './HudLoadContext';
import { useContext, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { BsWindowSidebar } from 'react-icons/bs';

enum Position {
  Top,
  Bottom,
  Left,
  Right,
}

export default function HudDisplay() {
  const { hudLoaded } = useContext(HudLoadContext);
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().getHours() + ':' + new Date().getMinutes());
    }, 60);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <p className="hudLogoText">Luke's Exclusion</p>
      <div
        className="topBar"
        style={{ visibility: hudLoaded ? 'visible' : 'hidden' }}
      >
        <div
          className="top-line"
          style={{
            position: 'absolute',
            top: '0%',
            right: '50%',
            left: '50%',
            width: '410px',
            height: '50px',
            backgroundColor: 'rgb(226, 220, 220)',
            marginLeft: '-203px',
            borderLeft: '2px solid white',
            borderRight: '2px solid white',
          }}
        ></div>
        <div className="left-triangle"></div>
        <div className="right-triangle"></div>
        <div className="center-oval">
          <p className="center-time">{time}</p>
        </div>
      </div>
      <div
        className="bottomButtons"
        style={{ visibility: hudLoaded ? 'visible' : 'hidden' }}
      >
        <div className="questionMark">
          <button className="questionButton"></button>
        </div>
        <div className="settings">
          <button className="settingsButton"></button>
        </div>
        <div className="contact">
          <button className="contactButton"></button>
        </div>
        <div className="profile">
          <button className="profileButton"></button>
        </div>
      </div>

      <div
        className={'hud'}
        style={{
          position: 'absolute',
          visibility: hudLoaded ? 'visible' : 'hidden',
          zIndex: 9999,
        }}
      ></div>
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
