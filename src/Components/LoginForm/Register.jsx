import { useState } from "react";
import { Button, Input } from "antd";
import "antd/dist/reset.css";
import { LoginPanel } from "./LoginPanel";
import { Link } from "react-router-dom";


const Register = ({ onBack }) => {
  const [currentTab, setCurrentTab] = useState("1");

  return (
    <div className="dark:bg-indigo-950 flex flex-col md:flex-row h-screen justify-center items-start bg-white">
      <div className="flex flex-col w-full md:w-1/2 justify-start items-center p-5 md:p-10 text-black mt-10">
        {/* Tabs */}
        <div className="flex flex-col md:flex-row justify-between w-full max-w-xl h-20 mb-4 dark:bg-indigo-950">
          {/* First tab */}
          <div
            className={`cursor-pointer text-center pb-1 w-full md:w-1/3 flex flex-col items-center ${
              currentTab === "1" ? "text-black font-bold" : "text-gray-400"
            }`}
            onClick={() => setCurrentTab("1")}
          >
            <div
              className={`h-2 rounded-2xl w-full ${
                currentTab === "1" ? "bg-blue-500" : "bg-transparent"
              }`}
            />
            <span className="mt-2 min-h-[30px] dark:text-white">
              وارد کردن شماره همراه
            </span>
          </div>

          {/* Space between tabs (for larger screens) */}
          <div className="hidden md:block w-6" />

          {/* Second tab */}
          <div
            className={`cursor-pointer text-center pb-1 w-full md:w-1/3 flex flex-col items-center ${
              currentTab === "2" ? "text-black font-bold" : "text-gray-400"
            }`}
            onClick={() => setCurrentTab("2")}
          >
            <div
              className={`h-2 rounded-2xl w-full ${
                currentTab === "2" ? "bg-blue-500" : "bg-transparent"
              }`}
            />
            <span className="mt-2 min-h-[30px] dark:text-white">
              تایید کد ارسال شده
            </span>
          </div>

          {/* Space between tabs (for larger screens) */}
          <div className="hidden md:block w-6" />

          {/* Third tab */}
          <div
            className={`cursor-pointer text-center pb-1 w-full md:w-1/3 flex flex-col items-center ${
              currentTab === "3" ? "text-black font-bold" : "text-gray-400"
            }`}
            onClick={() => setCurrentTab("3")}
          >
            <div
              className={`h-2 rounded-2xl w-full ${
                currentTab === "3" ? "bg-blue-500" : "bg-transparent"
              }`}
            />
            <span className="mt-2 min-h-[30px] dark:text-white">
              وارد کردن اطلاعات شخصی
            </span>
          </div>
        </div>

        {/* محتویات تب‌ها */}
        {currentTab === "1" && (
          <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg text-center">
            <h2 className="text-3xl font-bold mb-2 text-right dark:text-white mt-10 sm:mt-24">
              خوش آمدید!
            </h2>
            <p className="text-lg  mt-4 mb-4 w-full text-right text-gray-500 dark:text-white">
              لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود.
            </p>
            <label className="block text-lg mt-12  font-bold text-right mb-2 text-gray-700 dark:text-white">
              شماره همراه
            </label>
            <Input
              className="rounded-3xl text-lg h-11 mb-4 w-full bg-white text-black dark:text-white mt-4"
              placeholder="شماره همراه خود را وارد کنید"
            />
            <Button
              type="primary"
              className="w-full h-12 text-lg bg-blue-500 text-white rounded-3xl font-bold dark:text-white"
              onClick={() => setCurrentTab("2")}
            >
              ارسال کد تایید
            </Button>
          </div>
        )}

        {currentTab === "2" && (
          <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg text-center">
            <h2 className="text-2xl font-bold mb-2 text-right dark:text-white mt-8 sm:mt-24">
              تایید کد ارسال شده
            </h2>
            <p className="text-lg mt-4 mb-4 w-full text-right text-gray-500 dark:text-white">
              کد تایید ارسال‌شده به شماره همراه خود را وارد کنید.
            </p>
            <label className="block text-lg mt-10 font-bold text-right mb-2 text-gray-700 dark:text-white">
              کد تایید
            </label>
            <Input
              className="rounded-3xl h-11 text-lg mt-4 mb-4 w-full bg-white text-black dark:text-white"
              placeholder="کد تایید خود را وارد کنید"
            />
            <Button
              type="primary"
              className="w-full h-12 mt-2 text-lg bg-blue-500 text-white rounded-3xl font-bold dark:text-white"
              onClick={() => setCurrentTab("3")}
            >
              تایید
            </Button>
          </div>
        )}

        {currentTab === "3" && (
          <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg text-center ">
            <h2 className="text-3xl mt-10 font-bold mb-2 text-right dark:text-white sm:mt-24">
              وارد کردن اطلاعات شخصی
            </h2>
            <p className="text-lg mt-5 mb-4 w-full text-right text-gray-500 dark:text-white">
              لطفا اطلاعات شخصی خود را وارد کنید.
            </p>
            <label className="block text-lg mt-8 font-bold text-right mb-2 text-gray-700 dark:text-white">
              ایمیل
            </label>
            <Input
              className="rounded-3xl h-11 text-lg mb-4 w-full bg-white text-black dark:text-white"
              placeholder="ایمیل خود را وارد کنید"
            />
            <label className="block text-lg font-bold text-right mb-2 text-gray-700 dark:text-white">
              رمز عبور جدید
            </label>
            <Input
              className="rounded-3xl h-11 text-lg mb-4 w-full bg-white text-black dark:text-white"
              placeholder="رمز عبور جدید خود را وارد کنید"
              type="password"
            />
            <Link to={"/auth/signin"}>
              <Button
                type="primary"
                className="w-full h-12 text-lg bg-blue-500 text-white rounded-3xl font-bold"
              >
                تایید
              </Button>
            </Link>
          </div>
        )}
          <Link to={"/auth/signin"}>
          <p
            type="primary"
            className="w-full mt-3 h-12 text-lg py-2 px-4 border-gray-300   bg-white text-blue-500 rounded-3xl font-bold"
          >
              اگر حساب کاربری دارید وارد شوید 
          </p>
        </Link>
           <Link to={"/"}>
          <Button
            type="primary"
            className="w-36 mt-8 h-12 text-lg py-2 px-4 border-gray-300   bg-white text-blue-500 rounded-3xl font-bold"
          >
             صفحه اصلی 
          </Button>
        </Link>
      </div>

      <div className="hidden lg:flex w-full lg:w-1/2 p-9 dark:bg-indigo-950">
        <LoginPanel />
      </div>
    </div>
  );
};

export { Register };
