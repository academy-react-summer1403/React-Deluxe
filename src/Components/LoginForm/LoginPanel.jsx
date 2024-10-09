// import React from 'react';
import laptopImage from "../../assets/laptop.png";
import logo from "../../assets/logo.png";

const LoginPanel = () => {
  return (
    <div className="flex bg-gray-100 p-10 flex-col justify-center rounded-3xl ml-6 " >
      <div className="flex items-center mb-8">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <h2 className="text-blue-500 text-xl text-right">
          آکادمی کد نویسی بحر
        </h2>
      </div>

      <h1 className="text-2xl font-bold mb-4 text-right">شروع یک ماجراجویی</h1>
      <p className="text-gray-400 mb-6 text-right text-sm font-semibold">
        هر دوره‌ای که بخوای رو به راحتی پیدا کن و یاد بگیر
      </p>
      <img src={laptopImage} className="w-3/4 mx-auto mt-10" />
    </div>
  );
}

export { LoginPanel };
