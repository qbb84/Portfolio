import React from 'react';

export const HudLoadContext = React.createContext({
  hudLoaded: true,
  setHudLoaded: () => {},
});
