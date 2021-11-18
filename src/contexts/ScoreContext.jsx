import React, { createContext, useState } from 'react';

const ScoreContext = createContext({
  score: Number(),
  setScore: () => {},
});

export function ScoreContextProvider({ children }) {
  const [score, setScore] = useState(0);

  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

export default ScoreContext;
