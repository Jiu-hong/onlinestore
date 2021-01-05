import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();
export const UserContextAction = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [tmpuser, setTmpuser] = useState('');
  return (
    <UserContext.Provider value={{ user, tmpuser }}>
      <UserContextAction.Provider value={{ setUser, setTmpuser }}>
        {children}
      </UserContextAction.Provider>
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export const useUserDispatch = () => useContext(UserContextAction);
export default UserContextProvider;
