import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Common/Header/Header";
import { Footer } from "../../Components/Common/Footer";

const Layout = () => {
  return (
    <div className="dark:bg-[#041124]">
      <Header />
      <div className="flex justify-center">
        <div className="max-w-[1400px] min-w-0 w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { Layout };
