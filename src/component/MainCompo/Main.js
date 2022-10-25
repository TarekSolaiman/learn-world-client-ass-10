import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../SharePage/Footer";
import Header from "../SharePage/Header";

const Main = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
