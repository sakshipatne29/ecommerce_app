import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./ui-component/homepage/HomePage";
import LoginPage from "./ui-component/loginPage/LoginPage";
import Navbar from "./ui-component/navbar/Navbar";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginPage" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
