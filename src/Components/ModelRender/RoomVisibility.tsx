import React from 'react';

export const VisibilityContext = React.createContext({
  isVisible: true,
  setIsVisible: (visible: boolean) => {},
});
