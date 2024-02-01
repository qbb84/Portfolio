import { useContext, useEffect, useState } from 'react';
import { HudLoadContext } from './HudLoadContext';

export default function HudDisplay() {
  const { hudLoaded } = useContext(HudLoadContext);
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().getHours() +
          ':' +
          (new Date().getMinutes() > 9
            ? new Date().getMinutes()
            : '0' + new Date().getMinutes())
      );
    }, 60);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <p className="hudLogoText">Luke's Exclusion</p>
      <div
        className={`topBar ${hudLoaded ? 'animateEntryTop' : 'animateLeave'} `}
        style={{
          visibility: hudLoaded ? 'visible' : 'hidden',
        }}
      >
        <div
          className="top-line"
          style={{
            position: 'absolute',
            top: '0%',
            right: '50%',
            left: '50%',
            width: '220px',
            height: '115px',
            backgroundColor: 'white',
            marginLeft: '-110px',
            borderRadius: '0px 0px 30px 30px',
            boxShadow: '0px 30px 15px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(221, 214, 214, 0.1)',
            borderBottom: '5px solid rgb(211, 202, 202)',

            visibility: hudLoaded ? 'visible' : 'hidden',
          }}
        ></div>
        <div className="left-triangle"></div>
        <div className="center-oval">
          <p className="center-time">{time}</p>
        </div>
      </div>
      <div
        className={'bottomButtons'}
        style={{ visibility: hudLoaded ? 'visible' : 'hidden' }}
      >
        <div
          className={`questionMark ${
            hudLoaded ? 'animateEntryQuestion' : 'animateLeave'
          } `}
        >
          <button className="questionButton">
            <img src="/images/question.png" className="question-img" />
          </button>
        </div>
        <div
          className={`settings ${
            hudLoaded ? 'animateEntrySettings' : 'animateLeave'
          } `}
        >
          <button className="settingsButton">
            <img src="/images/settings.png" className="setting-img" />
          </button>
        </div>
        <div
          className={`contact ${
            hudLoaded ? 'animateEntryContact' : 'animateLeave'
          } `}
        >
          <button className="contactButton">
            <img src="/images/contact.png" className="contact-img" />
          </button>
        </div>
        <div
          className={`profile ${
            hudLoaded ? 'animateEntryProfile' : 'animateLeave'
          } `}
        >
          <button className="profileButton">
            <img src="/images/profile.png" className="profile-img" />
          </button>
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
