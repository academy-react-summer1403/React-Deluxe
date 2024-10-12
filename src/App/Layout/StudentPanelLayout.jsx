import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Common/Header/Header";
import { Footer } from "../../Components/Common/Footer";
import { HeaderStudent } from "../../Components/Common/Header/HeaderStudent";

const Layout = () => {
  return (
    <div className="flex  dark:bg-indigo-950">
      <div> menu </div>
      <div className="flex-col flex">
        <div>
          <HeaderStudent />
        </div>
        <div>outlet</div>
      </div>
    </div>
  );
};

export { Layout };
