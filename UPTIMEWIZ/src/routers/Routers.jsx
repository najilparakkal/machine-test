import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/register/LoginPage";
import Main from "../pages/landingpage/Main";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Features from "../pages/features/Features";
import PricingMain from "../pages/pricing/Pricing";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<PricingMain />} />
    </Routes>
  );
};

export default Routers;
