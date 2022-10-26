import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../userContext/UserProvide";

const PrivateRoute = ({ children }) => {
  const { user, loadeing } = useContext(AuthContext);
  const location = useLocation();
  if (loadeing) {
    return (
      <div className=" flex justify-center my-60">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};
export default PrivateRoute;
