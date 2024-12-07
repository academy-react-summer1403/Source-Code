import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const LayOut = () => {
  return (
    <div className="bg-slate-50">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayOut;
