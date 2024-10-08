import React, { useState } from "react";
import { Button, Input, Tabs } from "antd";
import "antd/dist/reset.css";
import { ForgotPassword } from "./ForgetPass/ForgetPassword";
import { LoginPanel } from "./LoginPanel";
import { Register } from "./Register";

const { TabPane } = Tabs;

const LoginPage = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // استیت برای حالت تاریک

  if (showRegister) {
    return <Register onBack={() => setShowRegister(false)} />;
  }

  const changeTab = (key) => {
    setCurrentTab(key);
  };

  if (showForgotPassword) {
    return <ForgotPassword onBack={() => setShowForgotPassword(false)} />;
  }

  // return (
  //   <div className="h-96">
  //     <div
  //       className={`flex flex-col md:flex-row  justify-center  ${
  //         darkMode ? "bg-gray-900" : "bg-white"
  //       }`}
  //     >
  //       {/* Right side with tabs and login form */}
  //       <div
  //         className={`flex flex-col w-full md:w-1/2 justify-center  p-5 md:p-10 ${
  //           darkMode ? "text-white" : "text-black"
  //         }`}
  //       >
  //         {/* دکمه تغییر حالت تاریک */}
  //         <Button
  //           type="default"
  //           className={`mt-4 ml-24 w-36 ${
  //             darkMode ? "text-white" : "text-black"
  //           } bg-transparent`}
  //           onClick={() => setDarkMode(!darkMode)} // تغییر حالت تاریک
  //         >
  //           {darkMode ? "حالت روشن" : "حالت تاریک"}
  //         </Button>
  //       </div>

  //       {/* Left side fixed */}
  //       <div className="hidden md:flex w-full  h-full">
  //         <LoginPanel />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export { LoginPage };
