import React, { createContext, useContext, useState, useEffect } from 'react';

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

  useEffect(() => {
    // Check if user already made a choice in a previous session
    const storedPreference = localStorage.getItem('skillmerge_performance_mode');
    if (storedPreference !== null) {
      setIsLiteMode(storedPreference === 'lite');
      setHasChosen(true);
    }
  }, []);

  const handleSetLiteMode = (value) => {
    setIsLiteMode(value);
    setHasChosen(true);
    localStorage.setItem('skillmerge_performance_mode', value ? 'lite' : 'enhanced');
  };

  return (
    <PerformanceContext.Provider value={{ isLiteMode, setLiteMode: handleSetLiteMode, hasChosen, setHasChosen }}>
      {children}
    </PerformanceContext.Provider>
  );
}
