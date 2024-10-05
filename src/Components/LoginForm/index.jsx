import React, { useState } from "react";
import { Button, Input, Tabs } from "antd";
import "antd/dist/reset.css";
import {ForgotPassword} from "./ForgetPassword"
import { LoginPanel } from "./LoginPanel";
import { Register } from "./Register";

const { TabPane } = Tabs;

const LoginPage = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const [showForgotPassword, setShowForgotPassword] = useState(false); 
  const [showRegister, setShowRegister] = useState(false); 
  
    if (showRegister) {
      return <Register onBack={() => setShowRegister(false)} />; 
    }
  const changeTab = (key) => {
    setCurrentTab(key);
  };

  if (showForgotPassword) {
    return <ForgotPassword onBack={() => setShowForgotPassword(false)} />;
  }
  

  return (
    <div className="flex justify-center h-screen">
      {/* بخش سمت راست تب ها و فرم لاگین */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10 ">
        <Tabs activeKey={currentTab} onChange={changeTab} className="w-full flex justify-center ">
          {/* تب وارد کردن شماره همراه */}
          <TabPane tab="وارد کردن شماره همراه" key="1" className="pr-2 ">
            <h2 className="text-2xl font-bold text-right">خوش برگشتی!</h2>
            <p className="text-gray-600 text-xs text-right mt-3 w-80">
              لطفا شماره همراه یا ایمیل و رمز عبور خود را برای ورود به حساب
              کاربری وارد کنید.
            </p>
            <label className="block mt-5 text-xs font-bold text-right text-gray-700">
              شماره همراه یا ایمیل
            </label>
            <Input
              className="mt-4 rounded-3xl w-80 flex justify-end"
              placeholder="شماره همراه یا ایمیل خود را وارد کنید"
            />
            <label className="block mt-2 text-xs font-bold text-right text-gray-700">
              رمزعبور
            </label>
            <Input.Password
              className="mt-4 rounded-3xl w-80 flex justify-end"
              placeholder="رمز عبور خود را وارد کنید"
            />
            <div className="flex items-center mt-2">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="mr-2 text-xs font-bold">
                مرا به خاطر بسپار
              </label>
              <label className="flex items-center">
                {/* وقتی کاربر روی لینک کلیک می‌کند، حالت فراموشی رمز عبور فعال می‌شود */}
                <a
                  href="#"
                  className="text-blue-500 hover:underline mr-14 text-xs font-bold"
                  onClick={() => setShowForgotPassword(true)} // تغییر حالت به فراموشی رمز عبور
                >
                  رمز عبور را فراموش کردید؟
                </a>
              </label>
            </div>
            <Button
              type="primary"
              className="mt-4 flex items-center justify-center text-center h-10 bg-blue-500 text-white rounded-3xl w-80 font-bold"
              onClick={() => setCurrentTab("2")}
            >
              ورود به حساب
            </Button>
            <div className="mt-4 w-80 font-bold">
              <p className="text-xs">
                حساب کاربری ندارید؟{" "}
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-bold text-xs"
                  onClick={() => setShowRegister(true)}
                >
                  ایجاد حساب کاربری
                </a>
              </p>
            </div>
            <div className="flex justify-center mt-8 w-80">
              <button
                type="button"
                className="w-[141px] text-xs border-solid border border-gray-300 text-blue-500 py-2 px-4 rounded-3xl h-8 font-bold"
              >
                صفحه اصلی
              </button>
            </div>
          </TabPane>

          {/* تب تایید کد دو مرحله ای */}
          <TabPane tab="تایید کد دو مرحله‌ای" key="2">
            <h2 className="text-2xl font-bold text-center pl-20">
              تایید کد دو مرحله‌ای!
            </h2>
            <p className="text-gray-600 text-xs mt-3 pr-5">
              کد دو مرحله‌ای به شماره همراه شما ارسال شد. لطفا کد را وارد کنید.
            </p>
            <label className="block mt-11 text-xs font-bold text-right pr-20 text-gray-700">
              کد دو مرحله ای
            </label>
            <Input
              className="mt-4 w-80 rounded-3xl h-9"
              placeholder="کد دو مرحله‌ای خود را وارد کنید"
            />
            <Button
              type="primary"
              className="mt-4 mr-16 flex items-center justify-center text-center h-10 bg-blue-500 text-white rounded-3xl w-80 font-bold"
            >
              ورود به حساب
            </Button>
            <Button
              className="w-[141px] text-xs mt-4 border-solid border border-gray-300 text-blue-500 py-2 px-4 rounded-3xl h-8 font-bold"
              onClick={() => setCurrentTab("1")}
            >
              بازگشت
            </Button>
          </TabPane>
        </Tabs>
      </div>

      {/* بخش سمت چپ ثابت */}
     <LoginPanel />
    </div>
  );
};

export { LoginPage };
