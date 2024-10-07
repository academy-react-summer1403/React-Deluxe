import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-[1440px] p-3">
      {/* <Header className={ p-3 w-1 } /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export { Layout };
