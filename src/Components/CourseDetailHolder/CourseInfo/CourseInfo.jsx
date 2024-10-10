// CourseInfo.jsx
import { Rate } from "antd";
import React, { useState } from "react";
import { FaBook } from "react-icons/fa6";
import { PiShoppingBagOpen } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const CourseInfo = () => {
  const [starValue, setStarValue] = useState(1);

  return (
    <>
      <div
        dir="rtl"
        className="flex flex-col p-6 bg-white rounded-lg dark:bg-indigo-950 lg:flex-row"
      >
        {/* Right Section: Course Image */}
        <div className="flex justify-center h-[27rem] order-last mt-10 lg:mt-0 lg:order-none lg:w-1/2 lg:h-[27rem] bg-slate-700 dark:bg-indigo-800 rounded-[1.8rem]">
          <img
            src="https://via.placeholder.com/150" // Replace with your course image URL
            alt="Course"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Left Section: Course Details */}
        <div className="flex flex-col flex-grow mt-4 lg:mr-6 lg:w-1/2">
          {/* 1st Row: Course Title */}
          <h1 className="text-3xl font-bold text-[#1B1B1B] dark:text-white mb-4">
            دوره جاوااسکریپت
          </h1>

          {/* 2nd Row: Course Info Section */}
          <div className="flex flex-wrap justify-between mb-4 text-center lg:text-right">
            <div className=" basis-full  flex flex-wrap justify-between mb-4 rounded-3xl lg:rounded-none lg:rounded-r-3xl lg:basis-[50%] xl:basis-[44%] border lg:border-0 lg:border-t lg:border-r lg:border-b border-gray-400 dark:border-gray-500 overflow-hidden dark:bg-indigo-900">
              <div className="basis-[50%] border-l border-gray-400 dark:border-gray-500 w-32 h-20 p-2">
                <span className="text-sm text-gray-400 dark:text-gray-300">
                  وضعیت
                </span>{" "}
                <br />
                <span className="text-white bg-[#ff5353] rounded-full px-2 text-base/[2.5rem] font-light whitespace-nowrap">
                  درحال برگزاری
                </span>
              </div>
              <div className="basis-[50%] w-32 h-20 p-2 text-nowrap">
                <span className="text-sm text-gray-400 dark:text-gray-300">
                  دسته بندی
                </span>{" "}
                <br />
                <span className="text-white bg-[#3772ff] rounded-full px-2 text-base/[2.5rem] font-light">
                  برنامه نویسی
                </span>
              </div>
            </div>
            <div className="basis-full flex flex-wrap justify-between mb-4 rounded-3xl lg:rounded-none lg:rounded-l-3xl lg:basis-[50%] xl:basis-[56%] border border-gray-400 dark:border-gray-500 overflow-hidden dark:bg-indigo-900">
              <div className="basis-[40%] border-l border-gray-400 dark:border-gray-500 w-32 h-20 p-2">
                <span className="text-sm text-gray-400 dark:text-gray-300">
                  سطح آموزشی
                </span>{" "}
                <br />
                <span className="text-white bg-[#ff37f5] rounded-full px-2 text-base/[2.5rem] font-light">
                  پیشرفته
                </span>
              </div>
              <div className="basis-[60%] w-32 h-20 p-2">
                <span className="text-sm text-gray-400 dark:text-gray-300">
                  مدرس
                </span>{" "}
                <br />
                <span className="text-base/[2.5rem] font-light whitespace-nowrap dark:text-white">
                  محمدحسین بحرالعلومی
                </span>
              </div>
            </div>

            {/* 3rd Row: Additional Info Section */}
            <div className="basis-full flex flex-wrap justify-between mb-4 rounded-3xl lg:rounded-none lg:rounded-r-3xl lg:basis-[50%] border lg:border-0 lg:border-t lg:border-r lg:border-b border-gray-400 dark:border-gray-500 overflow-hidden dark:bg-indigo-900">
              <div className="basis-[50%] border-l border-gray-400 dark:border-gray-500 w-32 h-20 p-2">
                <span className="text-sm text-gray-400 dark:text-gray-300">
                  تاریخ برگزاری
                </span>{" "}
                <br />
                <span className="text-base/[2.5rem] font-light dark:text-white">
                  ۳۱ خرداد ۱۴۰۲
                </span>
              </div>
              <div className="basis-[50%] w-32 h-20 p-2">
                <span className="text-sm text-gray-400 dark:text-gray-300">
                  تاریخ اتمام
                </span>{" "}
                <br />
                <span className="text-base/[2.5rem] font-light dark:text-white">
                  ۳۱ تیر ۱۴۰۲
                </span>
              </div>
            </div>
            <div className="basis-full flex flex-wrap justify-between mb-4 rounded-3xl lg:rounded-none lg:rounded-l-3xl lg:basis-[50%] border border-gray-400 dark:border-gray-500 overflow-hidden dark:bg-indigo-900">
              <div className="basis-[50%] border-l border-gray-400 dark:border-gray-500 w-32 h-20 p-2">
                <span className="text-sm text-gray-400 dark:text-gray-300">
                  تعداد لایک
                </span>{" "}
                <br />
                <span className="text-base/[2.5rem] font-light dark:text-white">
                  ۲۴ نفر
                </span>
              </div>
              <div className="basis-[50%] w-32 h-20 p-2">
                <span className="text-sm text-gray-400 dark:text-gray-300">
                  تعداد دیسلایک
                </span>{" "}
                <br />
                <span className="text-base/[2.5rem] font-light dark:text-white">
                  ۵ نفر
                </span>
              </div>
            </div>
          </div>

          {/* 4th Row: Price and Rating Section */}
          <div className="flex flex-row items-center justify-around mb-4 lg:justify-between">
            <div className="flex items-center">
              <span className="text-[#7C7C7C] dark:text-gray-300 ml-2">
                {" "}
                ( {starValue} ){" "}
              </span>
              <Rate className="mb-1" onChange={setStarValue} defaultValue={1} />
              <span className="text-[#7C7C7C] dark:text-gray-300 mr-2">
                + (۴۰) نظرات
              </span>
            </div>
            <div className="hidden text-2xl font-bold text-black dark:text-white lg:block">
              ۲۵,۰۰۰
              <span className="text-sm mr-1">تومان</span>
            </div>
          </div>

          {/* 5th Row: Action Buttons */}
          <div className="flex flex-row justify-evenly lg:justify-between md:gap-2 lg:gap-0 lg:text-ellipsis text-base lg:text-sm xl:text-base lg:overflow-hidden">
            <button className="bg-[#3772FF] dark:bg-indigo-800 text-white px-8 lg:px-4 xl:px-8 xl:py-2 sm:text-base rounded-full mr-2 hidden lg:flex items-center">
              <FaBook className="xl:mx-2" />
              رزرو دوره
            </button>
            <button className="bg-[#2f2f2f] dark:bg-indigo-800 text-white px-2 whitespace-nowrap text-sm sm:text-base lg:px-4 xl:px-8 xl:py-2 rounded-full lg:mx-auto flex items-center">
              <PiShoppingBagOpen className="mx-0 size-5 xl:mx-2" />
              اضافه به لیست مورد علاقه
            </button>
            <div className="flex gap-3">
              <button className="bg-[#3772ff] dark:bg-indigo-800 text-white w-12 h-12 rounded-full flex justify-center items-center">
                <AiOutlineLike className="size-5" />
              </button>
              <button className="bg-white dark:bg-indigo-950 text-[#1B1B1B] dark:text-white border border-gray-200 dark:border-gray-600 w-12 h-12 rounded-full flex justify-center items-center">
                <AiOutlineDislike className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-auto z-10 flex items-center justify-evenly w-full h-20 bg-white lg:hidden dark:bg-indigo-950">
        <button className="bg-[#3772FF] dark:bg-indigo-800 text-white px-8 py-2 rounded-full mr-2 flex items-center">
          <FaBook className="mx-2" />
          رزرو دوره
        </button>
        <div className="text-2xl font-bold text-black dark:text-white">
          ۲۵,۰۰۰
          <span className="text-sm mr-1">تومان</span>
        </div>
      </div>
    </>
  );
};

export { CourseInfo };
