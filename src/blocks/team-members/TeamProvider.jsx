import React, { createContext, useState, useContext } from "react";

// Create the context
const ThemeContext = createContext();

// Create a provider component
export default function TeamProvider({ children }) {
  const [teamState, setTeamState] = useState({
    currentIndex: 0,
  });

  return <ThemeContext.Provider value={{ teamState, setTeamState }}>{children}</ThemeContext.Provider>;
}

// Custom hook to use the ThemeContext
export const useTeamState = () => useContext(ThemeContext);
