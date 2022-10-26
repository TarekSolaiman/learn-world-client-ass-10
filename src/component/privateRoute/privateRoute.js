import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../userContext/UserProvide";

const PrivateRoute = ({ children }) => {
  const { user, loadeing } = useContext(AuthContext);
  const location = useLocation();
  if (loadeing) {
    return <h2>Loading....</h2>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};
export default PrivateRoute;
