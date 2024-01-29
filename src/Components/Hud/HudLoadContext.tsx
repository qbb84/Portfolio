import { Hud } from '@react-three/drei';
import React from 'react';

export const HudLoadContext = React.createContext({
  hudLoaded: true,
  setHudLoaded: () => {},
});
