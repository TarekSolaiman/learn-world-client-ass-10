import React from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const UserProvide = ({ children }) => {
  const [user, setUser] = useState(null);

  // Sign in with email and password
  const signinWithEmailPAssword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Goole
  const googleSign = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Log out user

  const logout = () => {
    return signOut(auth);
  };

  // holde user data and set setUser
  useEffect(() => {
    const unsabcrive = onAuthStateChanged(auth, (curretUser) => {
      setUser(curretUser);
    });
    return () => {
      unsabcrive();
    };
  }, []);

  const authInfo = {
    user,
    googleSign,
    logout,
    signinWithEmailPAssword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserProvide;
