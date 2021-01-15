import React, { createContext, useContext, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
export const UserContext = createContext();
export const UserContextAction = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [isAuthenticated, setAuthStatus] = useState(false);

  const [tmpuser, setTmpuser] = useState('');

  useEffect(async () => {
    try {
      const session = await Auth.currentSession();
      setAuthStatus(true);
      console.log('session in _app: ', session);
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, isAuthenticated, tmpuser }}>
      <UserContextAction.Provider
        value={{ setUser, setAuthStatus, setTmpuser }}
      >
        {children}
      </UserContextAction.Provider>
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export const useUserDispatch = () => useContext(UserContextAction);
export default UserContextProvider;
