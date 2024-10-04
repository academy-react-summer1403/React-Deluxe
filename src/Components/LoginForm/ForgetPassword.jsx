import React from "react";
import { Button, Input } from "antd";
import "antd/dist/reset.css";
import { LoginPanel } from "./LoginPanel";

const ForgotPassword = ({ onBack }) => {
  return (
    <div className="flex justify-center h-screen">
      {/* بخش فرم فراموشی رمز عبور */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <div className="w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-2 text-right">فراموشی رمزعبور!</h2>
          <p className="text-gray-500 text-xs mb-6 w-80 text-right">
            اگر رمزعبور خود را فراموش کرده‌اید، ایمیل خود را وارد کنید تا لینک
            تغییر رمزعبور برای شما ارسال شود.
          </p>
          <label className="block text-xs font-bold text-right text-gray-700 mb-2">
            ایمیل
          </label>
          <Input
            className="rounded-3xl mb-4 ml-28 w-80"
            placeholder="ایمیل خود را وارد کنید"
          />
          <Button
            type="primary"
            className=" ml-28 w-80 h-10 bg-blue-500 text-white rounded-3xl font-bold"
          >
            ارسال لینک
          </Button>
          <Button
            className="w-32 h-9 mt-4 ml-32 border border-solid border-gray-300 text-blue-500 rounded-3xl font-bold"
            onClick={onBack}
          >
            بازگشت
          </Button>
        </div>
      </div>

      {/* بخش سمت چپ ثابت */}
      <LoginPanel />
    </div>
  );
};

export { ForgotPassword };
