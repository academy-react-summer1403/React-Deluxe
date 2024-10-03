import React from "react";
import HeaderItems from "./HeaderItems";

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="" alt="Logo" className="h-10" />
          <h1 className="text-xl font-bold">آکادمی کد نویسی بحر</h1>
        </div>
        <nav>
          <ul className="flex space-x-4 text-gray-700">
            <HeaderItems Item="خانه" />
            <HeaderItems Item="دوره ها" />
            <HeaderItems Item="بلاگ ها" />
            <HeaderItems Item="درباره ما" />
          </ul>
        </nav>
        <div className="space-x-2">
          <button className="bg-blue-600 text-white py-2 px-4 rounded">
            ثبت نام یا ورود
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
