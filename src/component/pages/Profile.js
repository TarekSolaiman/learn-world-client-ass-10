import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../userContext/UserProvide";

const Profile = () => {
  const { doli } = useContext(AuthContext);
  // console.log();
  return (
    <div>
      <h1>this is Proifile page</h1>
      <p>Name : {doli.name}</p>
    </div>
  );
};

export default Profile;
