import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const AurhContext = createContext();

const UserProvide = ({ children }) => {
  const [user, setUser] = useState(null);

  const doli = { name: "ollok" };
  const authInfo = {};
  return (
    <AurhContext.Provider value={authInfo}>{children}</AurhContext.Provider>
  );
};

export default UserProvide;
