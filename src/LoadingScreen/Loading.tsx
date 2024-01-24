import { CameraShake, Float, Html, useProgress } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import { Room } from '../Components/ModelRender/Room';
import Debug from '../Components/Test/Debug';
import Intro from './Intro';
import Logo from './Logo';

function Load() {
  const { progress } = useProgress();
  const [displayedProgress, setDisplayedProgress] = useState(0);

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
      <LoadingSleepAnimation />
      <Float>
        <Logo />
        {/* <Html center>
          <div className="progress-bar container">
            <div className="progress-bar-background">
              <div
                className="progress-bar-inner"
                style={{
                  width:
                    displayedProgress < 6
                      ? '0%'
                      : `calc(${displayedProgress}% - 6px)`,
                }}
              ></div>
            </div>
          </div>
        </Html> */}

        <Html center>
          <div className="loading-text-container">
            <p className="loading-text animate__animated animate__zoomInDown">
              Taking a snooze... {displayedProgress.toFixed(2)}%
            </p>
          </div>
        </Html>
      </Float>
    </>
  );
}

export default function Loading() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    const playButtonTimeoutId = setTimeout(() => {
      setShowPlayButton(true);
    }, 5100); // Show "Play" button after 2 se

    const timeoutId = setTimeout(() => {
      setShowMainContent(true);
    }, 180000);

    return () => {
      clearTimeout(playButtonTimeoutId);
      clearTimeout(timeoutId);
    };
  }, []);

  const handlePlayClick = () => {
    setShowMainContent(true);
  };

  return (
    <Suspense fallback={<Load />}>
      {!showMainContent && (
        <>
          <Load />
          <Html>
            <div>
              {showPlayButton && (
                <button onClick={handlePlayClick}>Play</button>
              )}
            </div>
          </Html>
        </>
      )}
      {showMainContent && (
        <>
          <Intro />
          <Room position={[5, 5, 5]} rotation={[0, 4.4, 0]} />
          <Debug />
        </>
      )}
    </Suspense>
  );
}

/* */
export function LoadingSleepAnimation() {
  return (
    <>
      <CameraShake intensity={0.1} />

      <Html position={[0, 21, 0]}>
        <div className="eyes-shutting-top"></div>
      </Html>
      <Html position={[0, -61, 0]}>
        <div className="eyes-shutting-bottom"></div>
      </Html>
      <Float>
        <Html zIndexRange={[0]}>
          <div className="eye"></div>
        </Html>
      </Float>
    </>
  );
}
