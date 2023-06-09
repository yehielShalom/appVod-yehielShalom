import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../layout/Layout";
import NotFound404 from "../layout/NotFound404";
import OneMovie from "../components/oneMovie";

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search/:searchQ" element={<Home />} />
            <Route path="search/:searchQ/year/:YYYY" element={<Home />} />
          </Route>
          <Route path="video/:id" element={<OneMovie />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
