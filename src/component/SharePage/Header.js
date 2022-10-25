import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/signin">Signin</Link>
    </div>
  );
};

export default Header;
