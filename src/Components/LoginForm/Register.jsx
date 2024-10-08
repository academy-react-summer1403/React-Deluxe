import React, { useState } from "react";
import { Button, Input, Tabs } from "antd";
import "antd/dist/reset.css";
import { LoginPanel } from "./LoginPanel";

const { TabPane } = Tabs;

const Register = ({ onBack }) => {
  const [currentTab, setCurrentTab] = useState("1");
  const [darkMode, setDarkMode] = useState(false); // اضافه کردن state برای حالت تاریک

  const nextTab = () => {
    setCurrentTab((prevTab) => (parseInt(prevTab) + 1).toString());
  };

  // return (
  //   <div className="h-96">
  //     <div
  //       className={`flex justify-center  ${
  //         darkMode ? "bg-gray-900" : "bg-white"
  //       }`}
  //     >
  //       {/* بخش فرم ثبت‌نام */}
  //       <div
  //         className={`w-1/2 flex flex-col justify-center items-center p-4 ${
  //           darkMode ? "text-white" : "text-black"
  //         }`}
  //       >
  //         <Tabs
  //           activeKey={currentTab}
  //           onChange={setCurrentTab}
  //           className="w-full"
  //           tabBarStyle={{
  //             marginBottom: "40px",
  //             backgroundColor: darkMode ? "#1F2937" : "#fff",
  //           }} // تب‌ها بر اساس حالت دارک یا روشن
  //         >
  //           {/* تب وارد کردن شماره همراه */}
  //           <TabPane tab="واردکردن شماره همراه" key="1" className="pb-6">
  //             <div className="w-full max-w-md text-center">
  //               <h2 className="text-2xl font-bold mb-2 text-right">
  //                 خوش آمدید!
  //               </h2>
  //               <p
  //                 className={`text-xs mb-6 w-80 text-right ${
  //                   darkMode ? "text-gray-400" : "text-gray-500"
  //                 }`}
  //               >
  //                 لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال
  //                 شود.
  //               </p>
  //               <label
  //                 className={`block text-xs font-bold text-right mb-2 ${
  //                   darkMode ? "text-gray-300" : "text-gray-700"
  //                 }`}
  //               >
  //                 شماره همراه
  //               </label>
  //               <Input
  //                 className={`rounded-3xl mb-4 ml-28 w-80 ${
  //                   darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
  //                 }`}
  //                 placeholder="شماره همراه خود را وارد کنید"
  //               />
  //               <Button
  //                 type="primary"
  //                 className="ml-28 w-80 h-10 bg-blue-500 text-white rounded-3xl font-bold"
  //                 onClick={nextTab}
  //               >
  //                 ارسال کد تایید
  //               </Button>
  //             </div>
  //           </TabPane>

  //           {/* تب تایید کد ارسال شده */}
  //           <TabPane tab="تایید کد ارسال شده" key="2" className="pb-6">
  //             <div className="w-full max-w-md text-center">
  //               <h2 className="text-2xl font-bold mb-2 text-right">
  //                 تایید کد ارسال شده
  //               </h2>
  //               <p
  //                 className={`text-xs mb-6 w-80 text-right ${
  //                   darkMode ? "text-gray-400" : "text-gray-500"
  //                 }`}
  //               >
  //                 کد تایید ارسال‌شده به شماره همراه خود را وارد کنید.
  //               </p>
  //               <label
  //                 className={`block text-xs font-bold text-right mb-2 ${
  //                   darkMode ? "text-gray-300" : "text-gray-700"
  //                 }`}
  //               >
  //                 کد تایید
  //               </label>
  //               <Input
  //                 className={`rounded-3xl mb-4 ml-28 w-80 ${
  //                   darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
  //                 }`}
  //                 placeholder="کد تایید خود را وارد کنید"
  //               />
  //               <Button
  //                 type="primary"
  //                 className="ml-28 w-80 h-10 bg-blue-500 text-white rounded-3xl font-bold"
  //                 onClick={nextTab}
  //               >
  //                 تایید
  //               </Button>
  //             </div>
  //           </TabPane>

  //           {/* تب وارد کردن اطلاعات شخصی */}
  //           <TabPane tab="واردکردن اطلاعات شخصی" key="3">
  //             <div className="w-full max-w-md text-center">
  //               <h2 className="text-2xl font-bold mb-2 text-right">
  //                 وارد کردن اطلاعات شخصی
  //               </h2>
  //               <p
  //                 className={`text-xs mb-6 w-80 text-right ${
  //                   darkMode ? "text-gray-400" : "text-gray-500"
  //                 }`}
  //               >
  //                 لطفا اطلاعات شخصی خود را وارد کنید.
  //               </p>
  //               <label
  //                 className={`block text-xs font-bold text-right mb-2 ${
  //                   darkMode ? "text-gray-300" : "text-gray-700"
  //                 }`}
  //               >
  //                 ایمیل
  //               </label>
  //               <Input
  //                 className={`rounded-3xl mb-4 ml-28 w-80 ${
  //                   darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
  //                 }`}
  //                 placeholder="ایمیل خود را وارد کنید"
  //               />
  //               <label
  //                 className={`block text-xs font-bold text-right mb-2 ${
  //                   darkMode ? "text-gray-300" : "text-gray-700"
  //                 }`}
  //               >
  //                 رمز عبور جدید
  //               </label>
  //               <Input
  //                 className={`rounded-3xl mb-4 ml-28 w-80 ${
  //                   darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
  //                 }`}
  //                 placeholder="رمز عبور جدید خود را وارد کنید"
  //               />
  //               <Button
  //                 type="primary"
  //                 className="ml-28 w-80 h-10 bg-blue-500 text-white rounded-3xl font-bold"
  //               >
  //                 تایید
  //               </Button>
  //             </div>
  //           </TabPane>
  //         </Tabs>

  //         {/* دکمه تغییر حالت تاریک */}
  //         <Button
  //           type="default"
  //           className="mt-4 text-black bg-transparent ml-24"
  //           onClick={() => setDarkMode(!darkMode)}
  //         >
  //           {darkMode ? "حالت روشن" : "حالت تاریک"}
  //         </Button>
  //       </div>

  //       {/* بخش سمت چپ ثابت */}
  //       <div className="hidden md:flex w-full bg-gray-100  h-full">
  //         <LoginPanel />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export { Register };
