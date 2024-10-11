import React from "react";
import HeaderItems from "./HeaderItems";
import { PiBellThin } from "react-icons/pi";
import DarkModeToggle from "../DarkMode";
import { MenuWithToggle } from "./HeaderItems/MenuToggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white dark:bg-indigo-950  p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/8978/2e65/1551396a2baebe523401d4b33d0ab02a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KQ~dcIIM~JdW9LpmW5k993TDj8dn8ZkN1Qtttuy0-aSHkPk1sIyxi2ojMCsPG8vcb2~g8uXnxbCULxQJadpQ2JwI7Dwwxpp4Wm-8hhU8GpNvno0ez-2K9VQGnYe~CrZ98sZ5XUYXmAXY7jDzgH7HPYtrW9G5L7F~9KM9PKI~bFmNq5CdwiOSQV5h5afOc2RATwQZFEMpzuDfiLxh2Jo5A-IJcbTalKpbonbw~-ujm7ivgBYsdWTqgrvF6PRGappVjgHwdWZlhcLcfWHliNwBwEGJrafUpFwxFPrl1S6XiWrCc6uvAP8O7OVF9rTsLeuddKBVEjlCZKSpz8HWAImLkw__"
            alt=""
            className="size-10"
          />
          <h1 className="hidden sm:block text-xl font-bold text-cyan-500">
            آکادمی کد نویسی بحر
          </h1>
        </div>
        <div className="hidden lg:flex flex-nowrap items-center ml-10 rounded-full bg-black dark:bg-white p-1 pr-4">
          <nav>
            <ul className="flex  justify-between text-white dark:text-black w-72">
              <HeaderItems Item="خانه" link="/" />
              <HeaderItems Item="دوره ها" link="/courses" />

              <HeaderItems Item="بلاگ ها" />
              <HeaderItems Item="درباره ما" />
            </ul>
          </nav>
          <Link to={"/signup"} className="space-x-2">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full mr-10">
              ثبت نام یا ورود
            </button>
          </Link>
        </div>
        <div className="flex">
          <div className="flex lg:hidden items-center space-x-2 p-2 rounded-full border border-gray-300 w-15 h-11">
            {/* Down Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            {/* Avatar */}
            <div className="size-8 rounded-full overflow-hidden">
              <img
                src="" // Replace with actual image URL or use a local image
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="items-center hidden lg:flex size-11 justify-center border-solid border-black bg-slate-100 rounded-full">
            <PiBellThin />
          </div>
          <div className="hidden items-center lg:flex size-11 justify-center bg-black  dark:bg-white text-white dark:text-black rounded-full">
            <DarkModeToggle />
          </div>
          <div className="items-center  lg:hidden flex size-11 justify-center bg-black dark:bg-white mr-2 text-white dark:text-black rounded-full">
            <MenuWithToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
