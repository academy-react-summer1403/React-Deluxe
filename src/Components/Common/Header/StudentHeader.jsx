import React from "react";
import { HiOutlineBell } from "react-icons/hi2";
import { BsMoon } from "react-icons/bs";

import DarkModeToggle from "../DarkMode";

const StudentHeader = () => {
  return (
    <header className="bg-gray-950 text-white  p-3 flex items-center h-auto justify-between">
      {/* User Profile */}
      <div className="flex items-center ">
        <img
          src="/path-to-avatar.png" // Replace with the path to the avatar image
          alt="User Avatar"
          className="size-10 rounded-full"
        />
        <div className="text-right items-center pr-4">
          <h3 className="text-sm font-semibold">پارسا آقایی</h3>
          <p className="text-sm text-gray-300">دانشجو</p>
        </div>
      </div>

      {/* Center Links */}
      <nav className="hidden md:flex justify-evenly w-[500px] text-lg">
        <a href="">صفحه اصلی</a>
        <a href=""> گزارش</a>
        <a href="">ارتباط باما</a>
      </nav>

      <div className="flex gap-2 pl-8">
        {/* Left Icons (Dark Mode and Notifications) */}
        <div className="flex items-center  space-x-4">
          {/* Notification Bell */}
          <div className="relative">
            <button className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
              <HiOutlineBell className="text-xl font-bold text-white" />
            </button>
            {/* Notification Badge */}
            <span className="absolute bottom-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
              ۲
            </span>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <div className="hidden items-center lg:flex size-11 justify-center bg-gray-700  dark:bg-white text-white dark:text-black rounded-full">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export { StudentHeader };
