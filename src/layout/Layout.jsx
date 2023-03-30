import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import UpNavBar from "./UpNavBar";

const Layout = () => {
  return (
    <div>
     <UpNavBar/>
     <NavBar/>
      <Outlet />
    </div>
  );
};

export default Layout;
