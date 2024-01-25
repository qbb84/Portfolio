import {
  CameraShake,
  Float,
  Html,
  MeshRefractionMaterial,
  useProgress,
} from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import { Room, useRoomGLTF } from '../Components/ModelRender/Room';
import Debug from '../Components/Test/Debug';
import Intro from './Intro';
import { TextureLoader, WebGLCubeRenderTarget } from 'three';
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
  const [showMainContent, setShowMainContent] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showBlink, setShowBlink] = useState(false); // Add this line

  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setShowBlink(true); // Update this line
    }, 29000);
    return () => clearTimeout(blinkTimeout);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMainContent(true);
    }, 30100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handlePlayClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      setShowMainContent(true);
    }, 1100);
  };

  return (
    <Suspense fallback={<Load handlePlayClick={undefined} />}>
      {!showMainContent && (
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

function NewLoad({ handlePlayClick }) {
  return (
    <>
      <a href="#" className="link" onClick={handlePlayClick}>
        <svg
          viewBox="0 0 200 200"
          width="200"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          className="link__svg"
          aria-labelledby="link1-title link1-desc"
        >
          <title id="link1-title">Come quick and click this</title>
          <desc id="link1-desc">
            A rotating link with text placed around a circle with an arrow
            inside
          </desc>

          <path
            id="link-circle"
            className="link__path"
            d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            stroke="none"
            fill="none"
          />

          <path
            className="link__arrow"
            d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"
            fill="none"
          />

          <text className="link__text">
            <textPath href="#link-circle" stroke="none">
              Click Me To Wake Up
            </textPath>
          </text>
        </svg>
      </a>
    </>
  );
}
