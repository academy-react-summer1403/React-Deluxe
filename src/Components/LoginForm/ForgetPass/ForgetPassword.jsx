import React, { useState } from "react";
import { Button, Input, Tabs } from "antd";
import "antd/dist/reset.css";
import { LoginPanel } from "../LoginPanel";

const { TabPane } = Tabs;

const InputField = ({ label, placeholder }) => (
  <div className="mb-4">
    <label className="block text-xs font-bold text-right text-gray-700 mb-2">{label}</label>
    <Input className="rounded-3xl w-full" placeholder={placeholder} />
  </div>
);

const ForgotPassword = ({ onBack }) => {
  const [currentTab, setCurrentTab] = useState("1");

  const changeTab = (key) => {
    setCurrentTab(key);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center h-screen">
      {/* بخش فرم فراموشی رمز عبور */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5 md:p-10">
        <Tabs
          activeKey={currentTab}
          onChange={changeTab}
          className="w-full"
          tabBarStyle={{ marginBottom: '60px' }} // افزایش فاصله بین تب‌ها
        >
          {/* تب وارد کردن ایمیل */}
          <TabPane tab={<span className="mx-3">وارد کردن ایمیل</span>} key="1">
            <div className="w-full max-w-md text-center">
              <h2 className="text-2xl font-bold mb-2 text-right">فراموشی رمزعبور!</h2>
              <p className="text-gray-500 text-xs mb-6 w-80 md:w-96 text-right">
                اگر رمزعبور خود را فراموش کرده‌اید، ایمیل خود را وارد کنید تا
                لینک تغییر رمزعبور برای شما ارسال شود.
              </p>
              <InputField label="ایمیل" placeholder="ایمیل خود را وارد کنید" />
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
              <p className="text-gray-500 text-xs mb-6 w-80 md:w-96 text-right">
                رمز عبور جدید خود را وارد کنید
              </p>
              <InputField label="رمز عبور جدید" placeholder="رمز عبور خود را وارد کنید" />
              <InputField label="تکرار رمز عبور جدید" placeholder="تکرار رمز عبور خود را وارد کنید" />
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
      </div>

      {/* بخش سمت چپ ثابت */}
      <div className="hidden md:flex w-full md:w-1/2 bg-gray-100 h-full">
        <LoginPanel />
      </div>
    </div>
  );
};

export { ForgotPassword };
