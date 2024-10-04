// LoginPage.jsx
import React, { useState } from "react";
import { Steps, Button, Input } from "antd";
import "antd/dist/reset.css";
// import './index.css';
import laptopImage from "../../assets/laptop.png";
import logo from "../../assets/logo.png";
import { Tabs } from "antd";

const { Step } = Steps;

const LoginPage = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "وارد کردن شماره همراه",
      content: (
        <>
          <h2 className="text-2xl font-bold text-right">خوش برگشتی!</h2>
          <p className="text-gray-600 text-xs text-right mt-3 w-80">
            لطفا شماره همراه یا ایمیل و رمز عبور خود را برای ورود به حساب کاربری
            وارد کنید.
          </p>
          <label className="block  mt-5 text-xs font-bold text-right  text-gray-700 ">
            شماره همراه یا ایمیل
          </label>
          <Input
            className="mt-4 rounded-3xl w-80 flex justify-end"
            placeholder="شماره همراه یا ایمیل خود را وارد کنید"
          />
          <label className="block  mt-2 text-xs font-bold text-right  text-gray-700 ">
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
              <a
                href="#"
                className="text-blue-500 hover:underline mr-14 text-xs font-bold"
              >
                رمز عبور را فراموش کردید؟
              </a>
            </label>
          </div>
          <Button
            type="primary"
            className="mt-4  flex items-center justify-center text-center h-10 bg-blue-500 text-white rounded-3xl   w-80 font-bold"
            onClick={next}
          >
            ورود به حساب
          </Button>
          <div className="mt-4 w-80 font-bold">
            <p className=" text-xs">
              حساب کاربری ندارید؟{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline font-bold text-xs"
              >
                ایجاد حساب کاربری
              </a>
            </p>
          </div>
          <div to="/" className="flex justify-center mt-8  w-80">
            <button
              type="button"
              className="w-[141px] text-xs border-solid border border-gray-300 text-blue-500 py-2 px-4 rounded-3xl h-8 font-bold"
            >
              صفحه اصلی
            </button>
          </div>
        </>
      ),
    },
    {
      title: "تایید کد دو مرحله‌ای",
      content: (
        <>
          <h2 className="text-2xl font-bold text-center pl-20">تایید کد دو مرحله‌ای!</h2>
          <p className="text-gray-600 text-xs mt-3 pr-5">
            کد دو مرحله‌ای به شماره همراه شما ارسال شد. لطفا کد را وارد کنید.
          </p>
          <label className="block  mt-11 text-xs font-bold text-right pr-20 text-gray-700 ">
            کد دو مرحله ای
          </label>
          <Input
            className="mt-4 w-80 rounded-3xl h-9"
            placeholder="کد دو مرحله‌ای خود را وارد کنید"
          />
           <Button
            type="primary"
            className="mt-4 mr-16 flex items-center justify-center text-center h-10 bg-blue-500 text-white rounded-3xl   w-80 font-bold"
            onClick={next}
          >
            ورود به حساب
          </Button>
          <Button 
              className="w-[141px] text-xs mt-4 border-solid border border-gray-300 text-blue-500 py-2 px-4 rounded-3xl h-8 font-bold"
          
          onClick={prev}>
            بازگشت
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="flex justify-center h-screen">
      {/* بخش سمت راست مراحل و فرم لاگین */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <Steps current={current} className="w-full">
          {steps.map((item, index) => (
            <Step
              key={index}
              title={item.title}
              onClick={() => setCurrent(index)}
            />
          ))}
        </Steps>
        <div className="mt-8 w-full">{steps[current].content}</div>
      </div>

      {/* بخش سمت چپ ثابت */}
      <div className="w-1/2 bg-gray-100 p-10 flex flex-col justify-center">
        <div className="flex items-center  mb-8">
          <img src={logo} alt="Logo" className="w-12 h-12" />{" "}
          {/* اضافه کردن فاصله بین تصویر و متن */}
          <h2 className="text-blue-500 text-xl text-right">
            آکادمی کد نویسی بحر
          </h2>
        </div>

        <h1 className="text-2xl font-bold mb-4 text-right">
          شروع یک ماجراجویی
        </h1>
        <p className="text-gray-400 mb-6 text-right text-sm font-semibold">
          هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر
        </p>
        <img src={laptopImage} className="w-3/4 mx-auto mt-10" />
      </div>
    </div>
  );
};

export { LoginPage };
