import React from "react";
import { Outlet } from "react-router-dom";
import UpNavBar from "./UpNavBar";

const Layout = () => {
  return (
    <div>
      <UpNavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
