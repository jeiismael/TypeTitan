import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const login = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
    setIsLoggedIn(true);
    console.log(username);
    console.log(isLoggedIn);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}