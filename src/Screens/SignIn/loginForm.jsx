
import React, { useState } from 'react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-sm text-right" >
      <h2 className="text-2xl font-bold mb-6">!خوش برگشتی</h2>

      <form>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700 ">
            شماره همراه یا ایمیل
          </label>
          <input
            type="text"
            placeholder="شماره همراه یا ایمیل خود را وارد کنید"
            className="w-full px-3 py-2 border rounded-3xl text-right"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">رمز عبور</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="رمزور خود را وارد کنید"
              className="w-full px-3 py-2 border rounded-3xl text-right"
            />
            <button
              type="button"
              className="absolute inset-y-0 left-0 flex items-center px-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </button>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <label className="flex items-center">
          <a href="#" className="text-blue-500 text-sm">رمز عبور را فراموش کردید؟</a>

          </label>
          <span className="text-sm">مرا به خاطر بسپار</span>

          <input type="checkbox" className="mr-2" />

        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-3xl"
        >
          ورود به حساب
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm">
          حساب کاربری ندارید؟ <a href="#" className="text-blue-500">ایجاد حساب کاربری</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

