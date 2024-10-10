import  { useState } from "react";
import { Button, Input, Tabs } from "antd";
import "antd/dist/reset.css";
import { ForgotPassword } from "../ForgetPass/ForgetPassword";
import { LoginPanel } from "../LoginPanel";
import { Register } from "../Register";

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
    <div className="flex flex-col md:flex-row justify-center items-center bg-white">
      {/* Right side with tabs and login form */}
           <div className="flex flex-col w-full md:w-1/2 justify-center items-center p-5 md:p-10 text-black">

       <Tabs
          activeKey={currentTab}
          onChange={changeTab}
          className="w-full flex justify-center"
          tabBarGutter={40}
          tabBarStyle={{
            borderBottom: 'none',
            marginBottom: '50px', // کاهش marginBottom
            background: "white",
          }}
        >
          <div
            style={{
              height: "8px",
              backgroundColor: "#1890ff",
              marginBottom: "-8px",
            }}
          />{" "}
          {/* Blue line with height 8px */}
          <TabPane
            tab={
              <span className="px-6 " style={{ paddingBottom: "10px" }}>
                وارد کردن شماره همراه
              </span>
            }
            key="1"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-right">خوش برگشتی!</h2>
            <p className="text-gray-600 text-xs lg:text-sm text-right mt-3 w-80 lg:w-[400px]">
              لطفا شماره همراه یا ایمیل و رمز عبور خود را برای ورود به حساب کاربری وارد کنید.
            </p>
            <label className="block mt-5 text-xs font-bold text-right text-gray-700">
              شماره همراه یا ایمیل
            </label>
            <Input
              className="mt-4 rounded-3xl w-80 lg:w-[400px] flex justify-end bg-white text-black"
              placeholder="شماره همراه یا ایمیل خود را وارد کنید"
            />
            <label className="block mt-2 text-xs font-bold text-right text-gray-700">
              رمزعبور
            </label>
            <Input.Password
              className="mt-4 rounded-3xl w-80 lg:w-[400px] flex justify-end bg-white text-black"
              placeholder="رمز عبور خود را وارد کنید"
            />
            <div className="flex items-center mt-2">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="mr-2 text-xs lg:text-sm font-bold text-black">
                مرا به خاطر بسپار
              </label>
              <label className="flex items-center">
                <a
                  href="#"
                  className="text-blue-500 hover:underline mr-14 text-xs lg:text-sm font-bold"
                  onClick={() => setShowForgotPassword(true)}
                >
                  رمز عبور را فراموش کردید؟
                </a>
              </label>
            </div>
            <Button
              type="primary"
              className="mt-4 flex items-center justify-center text-center h-10 bg-blue-500 text-white rounded-3xl w-80 lg:w-[400px] font-bold"
              onClick={() => setCurrentTab("2")}
            >
              ورود به حساب
            </Button>
            <div className="mt-4 w-80 lg:w-[400px] font-bold">
              <p className="text-xs lg:text-sm">
                حساب کاربری ندارید؟{" "}
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-bold text-xs lg:text-sm"
                  onClick={() => setShowRegister(true)}
                >
                  ایجاد حساب کاربری
                </a>
              </p>
            </div>
            <div className="flex justify-center mt-8 w-80 lg:w-[400px]">
              <button
                type="button"
                className="w-[141px] lg:w-[160px] text-xs lg:text-sm border-solid border border-gray-300 text-blue-500 py-2 px-4 rounded-3xl h-8 font-bold"
              >
                صفحه اصلی
              </button>
            </div>
          </TabPane>
          {/* Two-factor code verification tab */}
          <TabPane
            tab={
              <span className="px-6" style={{ paddingBottom: "8px" }}>
                تایید کد دو مرحله‌ای
              </span>
            }
            key="2"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-center pl-20 lg:pl-0">
              تایید کد دو مرحله‌ای!
            </h2>
            <p className="text-gray-600 text-xs lg:text-sm mt-3 pr-5">
              کد دو مرحله‌ای به شماره همراه شما ارسال شد. لطفا کد را وارد کنید.
            </p>
            <label className="block mt-11 text-xs lg:text-sm font-bold text-right pr-20 lg:pr-0 text-gray-700">
              کد دو مرحله ای
            </label>
            <Input
              className="mt-4 w-80 lg:w-[400px] rounded-3xl h-9 bg-white text-black"
              placeholder="کد دو مرحله‌ای خود را وارد کنید"
            />
            <Button
              type="primary"
              className="mt-4 mr-6 flex items-center justify-center text-center h-10 bg-blue-500 text-white rounded-3xl w-80 lg:w-[400px] font-bold"
            >
              ورود به حساب
            </Button>
            <Button
              className="w-[141px] lg:w-[160px] text-xs lg:text-sm mt-4 border-solid border border-gray-300 text-blue-500 py-2 px-4 rounded-3xl h-8 font-bold"
              onClick={() => setCurrentTab("1")}
            >
              بازگشت
            </Button>
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
