import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Common/Header/Header";
import { Footer } from "../../Components/Common/Footer";

const Layout = () => {
  return (
    <div className="dark:bg-indigo-950">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export { Layout };
