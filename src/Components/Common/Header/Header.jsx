import React from "react";
import HeaderItems from "./HeaderItems";
import { PiBellThin } from "react-icons/pi";
import { IoMoonOutline } from "react-icons/io5";
const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="" alt="" className="size-10" />
          <h1 className="text-xl font-bold text-cyan-500">
            آکادمی کد نویسی بحر
          </h1>
        </div>
        <div className="hidden md:flex flex-nowrap items-center ml-10 rounded-full bg-black p-1 pr-4">
          <nav>
            <ul className="flex  justify-between text-white w-72">
              <HeaderItems Item="خانه" />
              <HeaderItems Item="دوره ها" />
              <HeaderItems Item="بلاگ ها" />
              <HeaderItems Item="درباره ما" />
            </ul>
          </nav>
          <div className="space-x-2">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full mr-10">
              ثبت نام یا ورود
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="items-center flex size-11 justify-center border-solid border-black bg-slate-100 rounded-full">
            <PiBellThin />
          </div>
          <div className="items-center flex size-11 justify-center bg-black   rounded-full">
            <IoMoonOutline stroke="white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
