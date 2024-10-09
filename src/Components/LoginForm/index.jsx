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
    <div className="flex flex-col md:flex-row h-screen justify-center items-center bg-white">
      {/* Right side with tabs and login form */}
      <div className="flex flex-col w-full md:w-1/2 justify-center items-center p-5 md:p-10 text-black ">
        <Tabs
          activeKey={currentTab}
          onChange={changeTab}
          className="w-full flex justify-center h-screen mt-8"
          tabBarGutter={40}
          tabBarStyle={{
            borderBottom: 'none',
            marginBottom: '50px',
            background: "white",
          }}
        >
          {/* Blue line */}
          <div style={{ height: '8px', backgroundColor: '#1890ff', marginBottom: '-8px'}} />

          <TabPane
            tab={<span className="px-4" style={{ paddingBottom: '8px' }}>وارد کردن شماره همراه</span>}
            key="1"
          >
            <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg text-center"> {/* تغییر اندازه و تنظیمات */}
              <h2 className="text-2xl font-bold text-right">خوش برگشتی!</h2>
              <p className="text-gray-600 text-xs text-right mt-3 w-full md:w-96">
                لطفا شماره همراه یا ایمیل و رمز عبور خود را برای ورود به حساب کاربری وارد کنید.
              </p>
              <label className="block mt-5 text-xs font-bold text-right text-gray-700">
                شماره همراه یا ایمیل
              </label>
              <Input
                className="mt-4 rounded-3xl w-full bg-white text-black"
                placeholder="شماره همراه یا ایمیل خود را وارد کنید"
              />
              <label className="block mt-2 text-xs font-bold text-right text-gray-700">
                رمزعبور
              </label>
              <Input.Password
                className="mt-4 rounded-3xl w-full bg-white text-black"
                placeholder="رمز عبور خود را وارد کنید"
              />
              <div className="flex items-center mt-2 justify-between w-full">
                <div className="flex items-center">
                  <input type="checkbox" id="rememberMe" className="mr-2" />
                  <label htmlFor="rememberMe" className="text-xs font-bold text-black">
                    مرا به خاطر بسپار
                  </label>
                </div>
                <a
                  href="#"
                  className="text-blue-500 hover:underline text-xs font-bold"
                  onClick={() => setShowForgotPassword(true)}
                >
                  رمز عبور را فراموش کردید؟
                </a>
              </div>
              <Button
                type="primary"
                className="mt-4 flex items-center justify-center text-center h-10 bg-blue-500 text-white rounded-3xl w-full font-bold"
                onClick={() => setCurrentTab("2")}
              >
                ورود به حساب
              </Button>
              <div className="mt-4 w-full font-bold">
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
              <div className="flex justify-center mt-8 w-full">
                <button
                  type="button"
                  className="w-full md:w-[141px] text-xs border-solid border border-gray-300 text-blue-500 py-2 px-4 rounded-3xl h-8 font-bold"
                >
                  صفحه اصلی
                </button>
              </div>
            </div>
          </TabPane>

          {/* Two-factor code verification tab */}
          <TabPane tab={<span className="px-4" style={{ paddingBottom: '8px' }}>تایید کد دو مرحله‌ای</span>} key="2">
            <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg text-center">
              <h2 className="text-2xl font-bold text-right">
                تایید کد دو مرحله‌ای!
              </h2>
              <p className="text-gray-600 text-xs text-right mt-3 ">
                کد دو مرحله‌ای به شماره همراه شما ارسال شد. لطفا کد را وارد کنید.
              </p>
              <label className="block mt-11 text-xs font-bold text-right text-gray-700">
                کد دو مرحله ای
              </label>
              <Input
                className="mt-4 rounded-3xl h-9 w-full bg-white text-black"
                placeholder="کد دو مرحله‌ای خود را وارد کنید"
              />
              <Button
                type="primary"
                className="mt-4 flex items-center justify-center text-center h-10 bg-blue-500 text-white rounded-3xl w-full font-bold"
              >
                ورود به حساب
              </Button>
              <Button
                className="w-full mt-4 text-xs border-solid border border-gray-300 text-blue-500 py-2 px-4 rounded-3xl h-8 font-bold"
                onClick={() => setCurrentTab("1")}
              >
                بازگشت
              </Button>
            </div>
          </TabPane>
        </Tabs>
      </div>

      {/* Left side fixed */}
      <div className="hidden md:flex w-full lg:w-1/2">
        <LoginPanel />
      </div>
    </div>
  );
};

export { LoginPage };
