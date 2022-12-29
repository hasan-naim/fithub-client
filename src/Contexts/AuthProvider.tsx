import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  updateProfile,
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

  const updateUser = (
    displayName: string | null | undefined,
    photoURL: string | null | undefined
  ) => {
    if (auth.currentUser !== null) {
      return updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
    }
  };

  const authInfo: {
    user: object | null;
    signUp: Function;
    updateUser: Function;
  } = {
    user,
    signUp,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
