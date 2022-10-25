import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../SharePage/Footer";
import Header from "../SharePage/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
