import React, { createContext, useContext, useState } from 'react';

export const PerformanceContext = createContext({
  isLiteMode: false,
  setLiteMode: () => {},
  hasChosen: false,
  setHasChosen: () => {}
});

export const usePerformance = () => useContext(PerformanceContext);

export function PerformanceProvider({ children }) {
  const [isLiteMode, setIsLiteMode] = useState(false);
  const [hasChosen, setHasChosen] = useState(false);

  const handleSetLiteMode = (value) => {
    setIsLiteMode(value);
    setHasChosen(true);
  };

  return (
    <PerformanceContext.Provider value={{ isLiteMode, setLiteMode: handleSetLiteMode, hasChosen, setHasChosen }}>
      {children}
    </PerformanceContext.Provider>
  );
}
