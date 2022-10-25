import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext();

const UserProvide = ({ children }) => {
  const [user, setUser] = useState(null);

  const doli = { name: "ollok" };
  const authInfo = { doli };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserProvide;
