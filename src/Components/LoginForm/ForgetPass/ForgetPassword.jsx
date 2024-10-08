import React, { useState } from "react";
import { Button, Input, Tabs } from "antd";
import "antd/dist/reset.css";
import { LoginPanel } from "../LoginPanel";

const { TabPane } = Tabs;

const InputField = ({ label, placeholder, darkMode }) => (
  <div className="mb-4">
    <label
      className={`block text-xs font-bold text-right mb-2 ${
        darkMode ? "text-gray-300" : "text-gray-700"
      }`}
    >
      {label}
    </label>
    <Input
      className={`rounded-3xl w-full ${
        darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
      }`}
      placeholder={placeholder}
    />
  </div>
);

const ForgotPassword = ({ onBack }) => {
  const [currentTab, setCurrentTab] = useState("1");
  const [darkMode, setDarkMode] = useState(false);

  const changeTab = (key) => {
    setCurrentTab(key);
  };

  // return (
  //   <div className="h-96">
  //     <div
  //       className={`flex flex-col md:flex-row justify-center  ${
  //         darkMode ? "bg-gray-900" : "bg-white"
  //       }`}
  //     >
  //       {/* بخش فرم فراموشی رمز عبور */}
  //       <div
  //         className={`w-full md:w-1/2 flex flex-col justify-center items-center p-5 md:p-10 ${
  //           darkMode ? "text-white" : "text-black"
  //         }`}
  //       >
  //         {/* دکمه تغییر حالت تاریک */}
  //         <Button
  //           type="default"
  //           className="mt-4 bg-transparent"
  //           onClick={() => setDarkMode(!darkMode)}
  //         >
  //           {darkMode ? "حالت روشن" : "حالت تاریک"}
  //         </Button>
  //       </div>

  //       {/* بخش سمت چپ ثابت */}
  //       <div
  //         className={`hidden md:flex w-full md:w-1/2 ${
  //           darkMode ? "bg-gray-800" : "bg-gray-100"
  //         } h-full`}
  //       >
  //         <LoginPanel />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export { ForgotPassword };
