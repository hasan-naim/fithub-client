import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext({});

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

function AuthProvider({ children }: any) {
  const [user, setUser] = useState<{} | null>({});
  const [loading, setLoading]: [boolean, Function] = useState(true);

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

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
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

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const logIn = (email: string, pass: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const authInfo: {
    user: object | null;
    loading: boolean;
    signUp: Function;
    updateUser: Function;
    logOut: Function;
    logIn: Function;
    googleLogin: Function;
  } = {
    user,
    loading,
    signUp,
    updateUser,
    logOut,
    logIn,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
