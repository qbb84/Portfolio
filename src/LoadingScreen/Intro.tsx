import { Html, Svg } from '@react-three/drei';
import { useRoomGLTF } from '../Components/ModelRender/Room';
import { LoadingSleepAnimation } from './Loading';
import Logo from './Logo';
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Intro() {

  const [showIntroScreen, setShowIntroScreen] = useState(true);


  useFrame(() => {
    
  }


  return <></>;
}
