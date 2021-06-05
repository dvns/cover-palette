import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function BgStateProvider({ children }) {
  const [bgColors, setBgColors] = useState([]);

  return (
    <LocalStateProvider value={{ bgColors, setBgColors }}>
      {children}
    </LocalStateProvider>
  );
}

function useBg() {
  const all = useContext(LocalStateContext);
  return all;
}

export { BgStateProvider, useBg };
