import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("شماره همراه یا ایمیل خود را وارد کنید");
  const [password, setPassword] = useState("رمز عبور خود را وارد کنید");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" max-w-md">
      <h2 className="text-2xl font-bold mb-6">خوش برگشتی!</h2>
      <p className="text-right font:[DanaFaNum] text-[16px] font-medium leading-[22.88px] text-gray-800">
      لطفا شماره همراه یا ایمیل و رمزعبور خود را برای ورود به حساب کاربری را وارد کنید
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm mb-2 text-right font-bold"
            htmlFor="email"
          >
            شماره همراه یا ایمیل
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 border text-right border-gray-200 rounded-3xl focus:outline-none focus:ring focus:ring-blue-200 text-gray-600 text-xs"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm mb-2 text-right font-bold"
            htmlFor="password"
          >
            رمز عبور
          </label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3 border text-right border-gray-200 rounded-3xl focus:outline-none focus:ring focus:ring-blue-200 text-gray-600 text-xs"
          />
        </div>

        <div className="mb-4 flex items-center">
          <a href="#" className="text-blue-500 text-sm hover:underline">
            رمزعبور را فراموش کردید؟
          </a>
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-sm text-gray-600">
            مرا به خاطر بسپار
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-3xl hover:bg-blue-600 transition duration-200"
        >
          ورود به حساب
        </button>

        <div className="mt-4 text-center"></div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          حساب کاربری ندارید؟
          <a href="#" className="text-blue-500 hover:underline ml-1">
            ایجاد حساب کاربری
          </a>
        </p>
      </div>
    </div>
  );
};

export { LoginForm };
