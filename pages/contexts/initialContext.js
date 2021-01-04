import React, { createContext, useContext, useState } from 'react';

export const InitialContext = createContext();
export const InitialContextAction = createContext();

const InitialContextProvider = ({ children }) => {
  const [inital, setInitial] = useState(false);
  return (
    <InitialContext.Provider value={inital}>
      <InitialContextAction.Provider value={setInitial}>
        {children}
      </InitialContextAction.Provider>
    </InitialContext.Provider>
  );
};

export const useInitial = () => useContext(InitialContext);
export const useInitialDispatch = () => useContext(InitialContextAction);
export default InitialContextProvider;
