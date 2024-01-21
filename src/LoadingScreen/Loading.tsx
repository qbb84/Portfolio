import { Center, Float, Html, Text3D, useProgress } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import { Color } from 'three';
import { Room } from '../Components/ModelRender/Room';
import Debug from '../Components/Test/Debug';

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
        <Center position={[0, 1, 0]}>
          <Text3D
            font={'./fonts/bubble.json'}
            rotation={[0, 0, 0]}
            position={[5, 5, 5]}
            scale={0.7}
          >
            {displayText}
            <meshBasicMaterial color={new Color(Color.NAMES.brown)} />
          </Text3D>
        </Center>
        <Html center>
          <div className="progress-bar">
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
          <Room />
          <Debug />
        </>
      )}
    </Suspense>
  );
}
