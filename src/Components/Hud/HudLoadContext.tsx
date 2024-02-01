import { Hud } from '@react-three/drei';
import React, { useState } from 'react';

export const HudLoadContext = React.createContext({
  hudLoaded: false,
  setHudLoaded: () => {},
});

export const HudLoadProvider = ({ children }) => {
  const [hudLoaded, setHudLoaded] = useState(false);

  return (
    <HudLoadContext.Provider value={{ hudLoaded, setHudLoaded }}>
      {children}
    </HudLoadContext.Provider>
  );
};
