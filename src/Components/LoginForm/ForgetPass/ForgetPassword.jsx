import React, { useState } from "react";
import { Button, Input, Tabs } from "antd";
import "antd/dist/reset.css";
import { LoginPanel } from "../LoginPanel";

const { TabPane } = Tabs;

const InputField = ({ label, placeholder, darkMode }) => (
  <div className="mb-4">
    <label className={`block text-xs font-bold text-right mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{label}</label>
    <Input
      className={`rounded-3xl w-full ${darkMode ? "bg-gray-700 text-white" : "bg-white text-black"}`}
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

  return (
    <div className={`flex flex-col md:flex-row justify-center h-screen ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      {/* بخش فرم فراموشی رمز عبور */}
      <div className={`w-full md:w-1/2 flex flex-col justify-center items-center p-5 md:p-10 ${darkMode ? "text-white" : "text-black"}`}>
        <Tabs
          activeKey={currentTab}
          onChange={changeTab}
          className="w-full"
          tabBarStyle={{ marginBottom: '60px', backgroundColor: darkMode ? "#1F2937" : "#fff" }} // تب‌ها بر اساس حالت
        >
          {/* تب وارد کردن ایمیل */}
          <TabPane tab={<span className="mx-3">وارد کردن ایمیل</span>} key="1">
            <div className="w-full max-w-md text-center">
              <h2 className="text-2xl font-bold mb-2 text-right">فراموشی رمزعبور!</h2>
              <p className={`text-xs mb-6 w-80 md:w-96 text-right ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                اگر رمزعبور خود را فراموش کرده‌اید، ایمیل خود را وارد کنید تا
                لینک تغییر رمزعبور برای شما ارسال شود.
              </p>
              <InputField label="ایمیل" placeholder="ایمیل خود را وارد کنید" darkMode={darkMode} />
              <Button
                type="primary"
                className="w-full h-10 bg-blue-500 text-white rounded-3xl font-bold"
                onClick={() => setCurrentTab("2")} // رفتن به تب بعدی
              >
                ارسال لینک
              </Button>
              <Button
                className="w-32 h-9 mt-4 border border-solid border-gray-300 text-blue-500 rounded-3xl font-bold"
                onClick={onBack}
              >
                بازگشت
              </Button>
            </div>
          </TabPane>

          {/* تب تایید کد دو مرحله‌ای */}
          <TabPane tab={<span className="mx-3">تایید کد ارسال شده</span>} key="2">
            <div className="w-full max-w-md text-center">
              <h2 className="text-2xl font-bold mb-2 text-right">رمز عبور جدید!</h2>
              <p className={`text-xs mb-6 w-80 md:w-96 text-right ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                رمز عبور جدید خود را وارد کنید
              </p>
              <InputField label="رمز عبور جدید" placeholder="رمز عبور خود را وارد کنید" darkMode={darkMode} />
              <InputField label="تکرار رمز عبور جدید" placeholder="تکرار رمز عبور خود را وارد کنید" darkMode={darkMode} />
              <Button
                type="primary"
                className="w-full h-10 bg-blue-500 text-white rounded-3xl font-bold"
              >
                تایید رمز عبور
              </Button>
              <Button
                className="w-32 h-9 mt-4 border border-solid border-gray-300 text-blue-500 rounded-3xl font-bold"
                onClick={() => setCurrentTab("1")} // بازگشت به تب اول
              >
                بازگشت
              </Button>
            </div>
          </TabPane>
        </Tabs>

        {/* دکمه تغییر حالت تاریک */}
        <Button
          type="default"
          className="mt-4 bg-transparent"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "حالت روشن" : "حالت تاریک"}
        </Button>
      </div>

      {/* بخش سمت چپ ثابت */}
      <div className={`hidden md:flex w-full md:w-1/2 ${darkMode ? "bg-gray-800" : "bg-gray-100"} h-full`}>
        <LoginPanel />
      </div>
    </div>
  );
};

export { ForgotPassword };
