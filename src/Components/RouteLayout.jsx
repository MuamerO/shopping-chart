import React from "react";
import NavBar from "./navBar/NavBar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import "./routeLayout.css";

const RouteLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="mainContent">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RouteLayout;
