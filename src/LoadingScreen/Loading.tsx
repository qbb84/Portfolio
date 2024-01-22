import { Float, Html, useProgress } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import { Room } from '../Components/ModelRender/Room';
import Debug from '../Components/Test/Debug';
import Intro from './Intro';
import RandomCircles from './RandomCircles';
import { useThree } from '@react-three/fiber';
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

  const displayText = "Luke's \n Exclusion";

  return (
    <>
      <Float>
        <Logo />
        <Html center zIndexRange={[50]}>
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
        </Html>

        {/* <Html center>{displayedProgress.toFixed(2)} % loaded</Html> */}
      </Float>
      <LoadingSleepAnimation />
    </>
  );
}

export default function Loading() {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // Simulate a minimum delay of 3 seconds before showing the main content
    const timeoutId = setTimeout(() => {
      setShowMainContent(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Suspense fallback={<Load />}>
      {!showMainContent && <Load />}
      {showMainContent && (
        <>
          <Room position={[5, 5, 5]} rotation={[0, 4.4, 0]} />

          <Intro />
          <Debug />
        </>
      )}
    </Suspense>
  );
}

function LoadingSleepAnimation() {
  return (
    <>
      <Html position={[0, 21, 0]} zIndexRange={[0, 6999999]}>
        <div className="eyes-shutting-top"></div>
      </Html>
      <Html position={[0, -61, 0]} zIndexRange={[-1]}>
        <div className="eyes-shutting-bottom"></div>
      </Html>
    </>
  );
}
