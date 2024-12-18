import React from "react";
import "./index.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
