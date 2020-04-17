import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

// Children: react property that automatically passes that anything inside any component
function AuthProvider({ children }) {
  const {
    loading, authenticated, handleLogin, handleLogout
  } = useAuth();

  return (
    <Context.Provider value={{ loading, authenticated, handleLogin, handleLogout }} >
      { children }
    </Context.Provider>
  );
}

export { Context, AuthProvider };
