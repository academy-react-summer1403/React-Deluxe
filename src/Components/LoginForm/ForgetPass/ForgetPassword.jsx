import { useState } from "react";
import { Button, Input } from "antd";
import "antd/dist/reset.css";
import { LoginPanel } from "../LoginPanel";

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

  return (
    <div className="flex flex-col md:flex-row h-screen justify-center items-start bg-white">
    
      <div className="w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex flex-col justify-center items-center p-5 sm:p-5 md:p-10 lg:p-12 xl:p-14 2xl:p-16 text-black">
        {/* Tabs */}
        <div className="flex justify-start gap-8 w-full max-w-lg mb-4">
          {/* First tab */}
          <div
            className={`cursor-pointer text-center pb-1 w-1/4 flex flex-col items-center ${
              currentTab === "1" ? "text-black font-bold" : "text-gray-400"
            }`}
            onClick={() => setCurrentTab("1")}
          >
            <div
              className={`h-1 w-full ${currentTab === "1" ? "bg-blue-500" : "bg-transparent"}`}
            />
            <span className="mt-2 min-h-[30px] w-52">وارد کردن ایمیل</span>
          </div>

          {/* Space between tabs */}
          <div className="w-1.5" />  

          {/* Second tab */}
          <div
            className={`cursor-pointer text-center pb-1 w-1/4 flex flex-col items-center ${
              currentTab === "2" ? "text-black font-bold" : "text-gray-400"
            }`}
            onClick={() => setCurrentTab("2")}
          >
            <div
              className={`h-1 w-full ${currentTab === "2" ? "bg-blue-500" : "bg-transparent"}`}
            />
            <span className="mt-1 min-h-[30px]">تایید کد ارسال شده</span>
          </div>
        </div>

        {currentTab === "1" && (
          <div className="w-full max-w-lg text-center mt-14">
            <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-2 text-right">
              فراموشی رمزعبور!
            </h2>
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg mb-6 w-80 sm:w-72 md:w-80 lg:w-96 xl:w-[400px] 2xl:w-[500px] text-right text-gray-500">
              اگر رمزعبور خود را فراموش کرده‌اید، ایمیل خود را وارد کنید تا لینک تغییر رمزعبور برای شما ارسال شود.
            </p>
            <InputField label="ایمیل" placeholder="ایمیل خود را وارد کنید" />
            <Button
              type="primary"
              className="w-full h-10 bg-blue-500 text-white rounded-3xl font-bold"
              onClick={() => setCurrentTab("2")} 
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
        )}

        {currentTab === "2" && (
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
              onClick={() => setCurrentTab("1")}
            >
              بازگشت
            </Button>
          </div>
        )}
      </div>


      <div className="hidden md:flex w-full lg:w-1/2 p-9">
        <LoginPanel />
      </div>
    </div>
  );
};

export { ForgotPassword };
