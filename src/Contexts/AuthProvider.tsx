import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext({});

const auth = getAuth(app);

function AuthProvider({ children }: any) {
  const [user, setUser] = useState<{} | null>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (crntUser) => {
      setLoading(false);
      setUser(crntUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signUp = (email: string, pass: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const authInfo: {
    user: object | null;
    signUp: Function;
  } = {
    user,
    signUp,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
