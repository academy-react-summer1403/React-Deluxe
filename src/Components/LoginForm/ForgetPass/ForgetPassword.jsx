import  { useState } from "react";
import { Button, Input, Tabs } from "antd";
import "antd/dist/reset.css";
import { LoginPanel } from "../LoginPanel";

const { TabPane } = Tabs;

const InputField = ({ label, placeholder }) => (
  <div className="mb-4">
    <label className="block text-xs font-bold text-right mb-2 text-gray-700">{label}</label>
    <Input
      className="rounded-3xl w-full bg-white text-black"
      placeholder={placeholder}
    />
  </div>
);

const ForgotPassword = ({ onBack }) => {
  const [currentTab, setCurrentTab] = useState("1");

  const changeTab = (key) => {
    setCurrentTab(key);
  };

  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center h-screen bg-white">
      {/* بخش فرم فراموشی رمز عبور */}
      <div className="w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex flex-col justify-center items-center p-5 sm:p-5 md:p-10 lg:p-12 xl:p-14 2xl:p-16 text-black">
        <Tabs
          activeKey={currentTab}
          onChange={changeTab}
          className="w-full"
          tabBarStyle={{ marginBottom: '60px', backgroundColor: "#fff" }}
        >
          {/* تب وارد کردن ایمیل */}
          <TabPane tab={<span className="mx-3">وارد کردن ایمیل</span>} key="1">
            <div className="w-full max-w-md text-center">
              <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-2 text-right">
                فراموشی رمزعبور!
              </h2>
              <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg mb-6 w-80 sm:w-72 md:w-80 lg:w-96 xl:w-[400px] 2xl:w-[500px] text-right text-gray-500">
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
              <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-2 text-right">
                رمز عبور جدید!
              </h2>
              <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg mb-6 w-80 sm:w-72 md:w-80 lg:w-96 xl:w-[400px] 2xl:w-[500px] text-right text-gray-500">
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
      <div className="hidden md:flex w-full">
        <LoginPanel />
      </div>
    </div>
  );
};

export { ForgotPassword };
