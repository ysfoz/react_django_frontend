import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();



  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, setCurrentUser, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

