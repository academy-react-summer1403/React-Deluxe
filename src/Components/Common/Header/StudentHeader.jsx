import React from "react";
import { HiOutlineBell } from "react-icons/hi2";

import DarkModeToggle from "../DarkMode";
import { Link } from "react-router-dom";
import { StudentMenuWithToggle } from "./HeaderItems/StudentMenuToggle";
import { getQuery } from "../../../core/services/api/ReactQuery/getQuery";
import { useQueryShortcut } from "../../../core/services/api/ReactQuery/useQueryShortcut";

const StudentHeader = () => {
  getQuery("ProfileInfo", "/SharePanel/GetProfileInfo");
  const data = useQueryShortcut("ProfileInfo");
  return (
    <header className="bg-gray-950 min-w-[395px] text-white gap-4 sm:gap-0  p-3 flex items-center h-auto md:justify-between justify-start  ">
      <div className="xl:hidden">
        <StudentMenuWithToggle />
      </div>
      {/* User Profile */}

      <div className="flex w-10 items-center ">
        <img
          src={data?.currentPictureAddress}
          alt=""
          className="size-10 rounded-full"
        />

        <div className="text-right flex flex-col  items-start pr-4">
          <div className="text-sm font-semibold">
            {data?.fName} {data?.lName}
          </div>
          <div className="text-sm  text-gray-300">{data?.email}</div>
        </div>
      </div>

      {/* Center Links */}
      <nav className="sm:flex justify-evenly sm:w-[500px] text-lg">
        <Link className=" pr-56 sm:pr-4" to={"/"}>
          صفحه اصلی
        </Link>
        <a className="hidden sm:flex" href="">
          {" "}
          گزارش
        </a>
        <Link className="hidden sm:flex" to={"/aboutUs"} href="">
          ارتباط باما
        </Link>
      </nav>

      <div className="hidden lg:flex gap-2 pl-8">
        <div className="flex items-center  space-x-4">
          {/* Notification Bell */}
          <div className="relative hidden sm:block">
            <button className="bg-gray-700 dark:text-black dark:bg-white  p-2 rounded-full hover:bg-gray-600">
              <HiOutlineBell className="text-xl font-bold dark:text-black  text-white" />
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
