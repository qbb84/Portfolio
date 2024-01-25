import {
  CameraShake,
  Float,
  Html,
  MeshPortalMaterial,
  useProgress,
} from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Room } from '../Components/ModelRender/Room';
import Debug from '../Components/Test/Debug';
import Intro from './Intro';
import Logo, { Loading2 } from './Logo';
import React from 'react';
import { BoxGeometry } from 'three';

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
      <LoadingSleepAnimation progress={displayedProgress.toFixed(2)} />

      <Float>
        {/* <Logo />
        //TODO fade animations for button
        <Html center>
          <div className="loading-text-container">
            <p className="loading-text animate__animated animate__zoomInDown">
              Taking a snooze... {displayedProgress.toFixed(2)}%
            </p>
          </div>
        </Html> */}
      </Float>
    </>
  );
}

export default function Loading() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const playButtonTimeoutId = setTimeout(() => {
      setShowPlayButton(true);
    }, 6300);

    const timeoutId = setTimeout(() => {
      setShowMainContent(true);
    }, 180000);

    return () => {
      clearTimeout(playButtonTimeoutId);
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
    <Suspense fallback={<Load />}>
      {!showMainContent && (
        <>
          <Load />
          <Html center>
            {showPlayButton && (
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
          </Html>
          {isClicked && (
            <>
              <Html position={[0, 21, 0]}>
                <div className="eyes-shutting-top-click"></div>
              </Html>
              <Html position={[0, -61, 0]}>
                <div className="eyes-shutting-bottom-click"></div>
              </Html>
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
export function LoadingSleepAnimation({ progress }) {
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
        <Html zIndexRange={[5]} onPointerOver={() => console.log('Hovered')}>
          <div className="eye">
            <div className="loader">
              <div className="intern"></div>
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
