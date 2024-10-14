import { useState } from "react";
import { Button, Input } from "antd";
import "antd/dist/reset.css";
import { LoginPanel } from "./LoginPanel";

const Register = ({ onBack }) => {
  const [currentTab, setCurrentTab] = useState("1");

  return (
    <div className="flex flex-col md:flex-row h-screen justify-center items-start bg-white mt-8">
      {/* بخش فرم ثبت‌نام */}
      <div className="flex flex-col w-full md:w-1/2 justify-start items-center p-5 md:p-10 text-black ">
        {/* Tabs */}
        <div className="flex justify-between w-full max-w-xl h-20 mb-4">
          {/* First tab */}
          <div
            className={`cursor-pointer text-center pb-1 w-1/3 flex flex-col items-center ${
              currentTab === "1" ? "text-black font-bold" : "text-gray-400"
            }`}
            onClick={() => setCurrentTab("1")}
          >
            <div
              className={`h-1 w-full ${currentTab === "1" ? "bg-blue-500" : "bg-transparent"}`}
            />
            <span className="mt-2 min-h-[30px] ">وارد کردن شماره همراه</span>
          </div>

          {/* Space between tabs */}
          <div className="w-6" />

          {/* Second tab */}
          <div
            className={`cursor-pointer text-center pb-1 w-1/3 flex flex-col items-center  ${
              currentTab === "2" ? "text-black font-bold" : "text-gray-400 "
            }`}
            onClick={() => setCurrentTab("2")}
          >
            <div
              className={`h-1 w-full ${currentTab === "2" ? "bg-blue-500" : "bg-transparent"}`}
            />
            <span className="mt-2 min-h-[30px]">تایید کد ارسال شده</span>
          </div>

          {/* Space between tabs */}
          <div className="w-6" />

          {/* Third tab */}
          <div
            className={`cursor-pointer text-center pb-1 w-1/3 flex flex-col items-center ${
              currentTab === "3" ? "text-black font-bold" : "text-gray-400"
            }`}
            onClick={() => setCurrentTab("3")}
          >
            <div
              className={`h-1 w-full ${currentTab === "3" ? "bg-blue-500" : "bg-transparent"}`}
            />
            <span className="mt-2 min-h-[30px]">وارد کردن اطلاعات شخصی</span>
          </div>
        </div>

        {/* محتوای تب‌ها */}
        {currentTab === "1" && (
          <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg text-center">
            <h2 className="text-2xl font-bold mb-2 text-right">خوش آمدید!</h2>
            <p className="text-xs sm:text-sm mb-4 w-full text-right text-gray-500">
              لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود.
            </p>
            <label className="block text-xs sm:text-sm font-bold text-right mb-2 text-gray-700">
              شماره همراه
            </label>
            <Input
              className="rounded-3xl mb-4 w-full bg-white text-black"
              placeholder="شماره همراه خود را وارد کنید"
            />
            <Button
              type="primary"
              className="w-full h-10 bg-blue-500 text-white rounded-3xl font-bold"
              onClick={() => setCurrentTab("2")} // تغییر به تب بعدی
            >
              ارسال کد تایید
            </Button>
          </div>
        )}

        {currentTab === "2" && (
          <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg text-center">
            <h2 className="text-2xl font-bold mb-2 text-right">تایید کد ارسال شده</h2>
            <p className="text-xs sm:text-sm mb-4 w-full text-right text-gray-500">
              کد تایید ارسال‌شده به شماره همراه خود را وارد کنید.
            </p>
            <label className="block text-xs sm:text-sm font-bold text-right mb-2 text-gray-700">
              کد تایید
            </label>
            <Input
              className="rounded-3xl mb-4 w-full bg-white text-black"
              placeholder="کد تایید خود را وارد کنید"
            />
            <Button
              type="primary"
              className="w-full h-10 bg-blue-500 text-white rounded-3xl font-bold"
              onClick={() => setCurrentTab("3")} // تغییر به تب بعدی
            >
              تایید
            </Button>
          </div>
        )}

        {currentTab === "3" && (
          <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg text-center ">
            <h2 className="text-2xl font-bold mb-2  text-right">وارد کردن اطلاعات شخصی</h2>
            <p className="text-xs sm:text-sm mb-4 w-full text-right text-gray-500">
              لطفا اطلاعات شخصی خود را وارد کنید.
            </p>
            <label className="block text-xs sm:text-sm font-bold text-right mb-2 text-gray-700">
              ایمیل
            </label>
            <Input
              className="rounded-3xl mb-4 w-full bg-white text-black"
              placeholder="ایمیل خود را وارد کنید"
            />
            <label className="block text-xs sm:text-sm font-bold text-right mb-2 text-gray-700">
              رمز عبور جدید
            </label>
            <Input
              className="rounded-3xl mb-4 w-full bg-white text-black"
              placeholder="رمز عبور جدید خود را وارد کنید"
              type="password"
            />
            <Button
              type="primary"
              className="w-full h-10 bg-blue-500 text-white rounded-3xl font-bold"
            >
              تایید
            </Button>
          </div>
        )}
      </div>

      {/* بخش سمت چپ ثابت */}
      <div className="hidden md:flex w-full lg:w-1/2">
        <LoginPanel />
      </div>
    </div>
  );
};

export { Register };
