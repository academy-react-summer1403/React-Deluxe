import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-[1440px] p-3">
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export { Layout };
