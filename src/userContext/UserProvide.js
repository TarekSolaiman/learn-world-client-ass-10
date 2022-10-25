import React from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const UserProvide = ({ children }) => {
  const [user, setUser] = useState(null);

  const [cetagori, setCetagori] = useState(null);

  // Sign in with email and password
  const registerWithEmailPAssword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Goole
  const googleSign = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //Log in with Email and password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //send a mail for verified email
  const verificationSend = () => {
    return sendEmailVerification(auth.currentUser)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  //update name and photo
  const updateNamePhoto = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //send passwprd reset mail
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Log out user

  const logout = () => {
    return signOut(auth);
  };

  // holde user data and set setUser
  useEffect(() => {
    const unsabcrive = onAuthStateChanged(auth, (mainUser) => {
      setUser(mainUser);
    });
    return () => {
      unsabcrive();
    };
  }, []);

  const authInfo = {
    user,
    googleSign,
    logout,
    registerWithEmailPAssword,
    login,
    verificationSend,
    updateNamePhoto,
    passwordReset,
    cetagori,
    setCetagori,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserProvide;
