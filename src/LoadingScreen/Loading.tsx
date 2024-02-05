import { CameraShake, Float, Html, useProgress } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';
import { Suspense, useContext, useEffect, useRef, useState } from 'react';
import { Room } from '../Components/ModelRender/Room';
import Movement from '../Components/Movement/Movement';
import Debug from '../Components/Test/Debug';
import Intro from './Intro';
import { HudLoadContext } from '../Components/Hud/HudLoadContext';
import HudDisplay from '../Components/Hud/HudDisplay';
import { useThree } from '@react-three/fiber';

function Load({ handlePlayClick }) {
  const { progress } = useProgress();
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    const playButtonTimeoutId = setTimeout(() => {
      setShowPlayButton(true);
    }, 6300);
    return () => {
      clearTimeout(playButtonTimeoutId);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const updateProgress = () => {
      setDisplayedProgress((prevProgress) =>
        Math.min(prevProgress + 0.01, progress)
      );

      if (displayedProgress < progress) {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };
    updateProgress();

    return () => cancelAnimationFrame(animationFrameId);
  }, [progress, displayedProgress]);

  return (
    <>
      <LoadingSleepAnimation
        showPlayButton={showPlayButton}
        handlePlayClick={handlePlayClick}
      />
    </>
  );
}

export default function Loading() {
  const [showIntro, setShowIntro] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showBlink, setShowBlink] = useState(false);

  const { setHudLoaded } = useContext(HudLoadContext);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setShowBlink(true); // Update this line
    }, 29000);
    return () => clearTimeout(blinkTimeout);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowIntro(true);
      setHudLoaded(false);
    }, 30100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [setHudLoaded, setShowIntro]);

  const handlePlayClick = () => {
    setIsClicked(true);
    //TODO Update hud after intro anim
    setHudLoaded(false);
    setTimeout(() => {
      setShowIntro(true);
    }, 1100);
  };

  return (
    <Suspense fallback={<Load handlePlayClick={undefined} />}>
      {!showIntro && (
        <>
          {showBlink && <Blink />}
          <Load handlePlayClick={handlePlayClick} />

          {isClicked && (
            <>
              <Blink />
            </>
          )}
        </>
      )}
      {showIntro && (
        <>
          <Intro />
        </>
      )}
      {showMainContent && (
        <>
          /* Playstate */
          <Movement />
        </>
      )}
    </Suspense>
  );
}

/* */
export function LoadingSleepAnimation({ showPlayButton, handlePlayClick }) {
  return (
    <>
      <CameraShake intensity={0.1} />

      <Html position={[0, 21, 0]}>
        <div className="eyes-shutting-top"></div>
      </Html>
      <Html position={[0, -61, 0]} zIndexRange={[50000000, 5000000]}>
        <div className="eyes-shutting-bottom"></div>
      </Html>
      <Float>
        <Html zIndexRange={5} onPointerOver={() => console.log('Hovered')}>
          <div className="eye">
            <div className="loader">
              <div className="intern">
                <div className="load-percent"></div>

                {showPlayButton && (
                  // <NewLoad handlePlayClick={handlePlayClick} />
                  <button
                    className="button"
                    data-text="Awesome"
                    onClick={handlePlayClick}
                  >
                    <span className="actual-text">&nbsp;wake up&nbsp;</span>
                    <span aria-hidden="true" className="hover-text">
                      &nbsp;wake up&nbsp;
                    </span>
                  </button>
                )}
              </div>
              <div className="external-shadow">
                <div className="central"></div>
              </div>
            </div>
          </div>
        </Html>
      </Float>
    </>
  );
}

function Blink() {
  return (
    <>
      <Html position={[0, 21, 0]}>
        <div className="eyes-shutting-top-click"></div>
      </Html>
      <Html position={[0, -61, 0]}>
        <div className="eyes-shutting-bottom-click"></div>
      </Html>
    </>
  );
}
