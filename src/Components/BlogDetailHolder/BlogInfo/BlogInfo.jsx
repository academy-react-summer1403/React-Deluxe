// CourseInfo.jsx
import { Rate } from "antd";
import React, { useState } from "react";
import { FaBook } from "react-icons/fa6";
import { PiShoppingBagOpen } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { InfoBlock } from "./Components/InfoBlock";
import { IoIosLink } from "react-icons/io";

const CopyLink = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div
      className="mr-5 -mt-1
    overflow-hidden text-ellipsis max-w-full"
    >
      <button
        onClick={copyToClipboard}
        className="border-2 border-[#3772FF] dark:border-indigo-800 text-[#3772FF] dark:text-indigo-300 text-sm lg:text-lg/5 px-2 lg:px-4 py-3 rounded-full mt-1
        overflow-hidden text-ellipsis max-w-full"
      >
        {copied ? (
          <div className="flex">
            <IoIosLink className="-scale-x-[1] ml-2 text-[#3772FF] dark:text-white" />
            <span className="text-[#3772FF] dark:text-white whitespace-nowrap text-ellipsis">
              کپی شد!
            </span>
          </div>
        ) : (
          <div className="flex">
            <IoIosLink className="-scale-x-[1] ml-2 text-[#3772FF] dark:text-white" />
            <span className="text-[#3772FF] dark:text-white text-ellipsis overflow-hidden whitespace-nowrap min-w-0">
              کپی کردن لینک صفحه
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

const BlogInfo = () => {
  const [starValue, setStarValue] = useState(1);

  const infoBlock1Data = [
    {
      wrapperClasses:
        "basis-[50%] border-l border-slate-200 dark:border-gray-500 w-32 h-20 p-2 text-nowrap flex flex-col items-center lg:block",
      titleClasses: "text-sm text-gray-400 dark:text-gray-300",
      title: "دسته بندی",
      statusClasses:
        "text-white bg-[#3772ff] rounded-full px-2 text-base font-light w-fit h-6 mt-2",
      status: "برنامه نویسی",
    },
    {
      wrapperClasses: "basis-[50%] w-32 h-20 p-2",
      titleClasses: "text-sm text-gray-400 dark:text-gray-300",
      title: "بازدیدکنندگان",
      statusClasses: "text-base/[2.5rem] font-light dark:text-white",
      status: "264 نفر",
    },
  ];
  const infoBlock2Data = [
    {
      wrapperClasses:
        "basis-[50%] border-l border-slate-200 dark:border-gray-500 w-32 h-20 p-2",
      titleClasses: "text-sm text-gray-400 dark:text-gray-300",
      title: "تاریخ انتشار",
      statusClasses: "text-base/[2.5rem] font-light dark:text-white",
      status: "29 اردیبهشت 1403",
    },
    {
      wrapperClasses: "basis-[50%] lg:basis-[50%] w-32 h-20 p-2",
      titleClasses: "text-sm text-gray-400 dark:text-gray-300",
      title: "منتشرکننده",
      statusClasses:
        "text-base/[1.2rem] font-light whitespace-wrap dark:text-white mt-2",
      status: "محمدحسین خلیل‌پور",
    },
  ];
  const infoBlock3Data = [
    {
      wrapperClasses:
        "basis-[50%] border-l border-slate-200 dark:border-gray-500 w-32 h-20 p-2",
      titleClasses: "text-sm text-gray-400 dark:text-gray-300",
      title: "تعداد لایک",
      statusClasses: "text-base/[2.5rem] font-light dark:text-white",
      status: "220 نفر",
    },
    {
      wrapperClasses: "basis-[50%] w-32 h-20 p-2",
      titleClasses: "text-sm text-gray-400 dark:text-gray-300",
      title: "تعداد دیس‌لایک",
      statusClasses: "text-base/[2.5rem] font-light dark:text-white",
      status: "20 نفر",
    },
  ];

  return (
    <>
      <div
        dir="rtl"
        className="flex flex-col p-6 bg-white rounded-lg dark:bg-indigo-950 lg:flex-row"
      >
        {/* Right Section: Course Image */}
        <div className="flex justify-center h-[27rem] order-last mt-10 lg:mt-0 lg:order-none lg:w-1/2 lg:h-[27rem] bg-[#FF6C6C] dark:bg-indigo-800 rounded-[1.8rem]">
          <img
            src="https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VKvXDw8XmMqPX-avBXZ3r-CHzU9Gajrp1YuONERMXpFwVwsZ621ROUvmGg0l0M5Uk3WLvvw2rJNVCzHrcBZFnMZ7223KYF1zthqjB~agrpfX1me4Htn4sYgPWzfOwWcoeMc-8Ft~KokEaEwmlvGatv8eiEtEq7qJdFYL2XiYwSwyu6q6HpeqpSxry78jz0IRAoiTvIYk2P9IFUBoe0ld3XB~XIPFhnHivN8S7q7uvba6q8faq91bBMcoe6dbzjhSVpBQOyKyOeSw4CO4ds4OMV-PV~7gwlyWBn85CIdU5oudgmBhTkRo5lytZ9g8DyzRqkHuWOr7Wez3jdvHYkD02g__"
            alt="Course"
            className="rounded-lg shadow-md w-64 object-contain"
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
            <div className="basis-full flex flex-wrap justify-between mb-4 rounded-3xl lg:rounded-none lg:rounded-r-3xl lg:basis-[50%] xl:basis-[50%] border lg:border-0 lg:border-t lg:border-r lg:border-b border-slate-200 bg-slate-100 dark:border-gray-500 overflow-hidden dark:bg-indigo-900">
              {infoBlock1Data.map((item, index) => (
                <InfoBlock
                  key={index}
                  wrapperClasses={item.wrapperClasses}
                  titleClasses={item.titleClasses}
                  title={item.title}
                  statusClasses={item.statusClasses}
                  status={item.status}
                />
              ))}
            </div>
            <div className="basis-full flex flex-wrap justify-between mb-4 rounded-3xl lg:rounded-none lg:rounded-l-3xl lg:basis-[50%] xl:basis-[50%] border border-slate-200 bg-slate-100 dark:border-gray-500 overflow-hidden dark:bg-indigo-900">
              {infoBlock2Data.map((item, index) => (
                <InfoBlock
                  key={index}
                  wrapperClasses={item.wrapperClasses}
                  titleClasses={item.titleClasses}
                  title={item.title}
                  statusClasses={item.statusClasses}
                  status={item.status}
                />
              ))}
            </div>

            {/* 3rd Row: Additional Info Section */}
            <div className="basis-full flex flex-wrap justify-between mb-4 rounded-3xl lg:basis-[50%] border border-slate-200 bg-slate-100 dark:border-gray-500 overflow-hidden dark:bg-indigo-900">
              {infoBlock3Data.map((item, index) => (
                <InfoBlock
                  key={index}
                  wrapperClasses={item.wrapperClasses}
                  titleClasses={item.titleClasses}
                  title={item.title}
                  statusClasses={item.statusClasses}
                  status={item.status}
                />
              ))}
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
            <CopyLink />
            <button className="bg-[#2f2f2f] dark:bg-indigo-800 text-white px-2 whitespace-nowrap text-sm sm:text-base lg:px-4 xl:px-8 xl:py-2 rounded-full lg:mx-auto flex items-center">
              <PiShoppingBagOpen className="mx-0 size-5 xl:mx-2" />
              اضافه به لیست مورد علاقه
            </button>
            {/* <button className="bg-[#2f2f2f] dark:bg-indigo-800 text-white px-2 whitespace-nowrap text-sm sm:text-base lg:px-4 xl:px-8 xl:py-2 rounded-full lg:mx-auto flex items-center overflow-hidden text-ellipsis max-w-full">
              <PiShoppingBagOpen className="mx-0 size-5 xl:mx-2" />
              <span className="overflow-hidden text-ellipsis">
                اضافه به لیست مورد علاقه
              </span>
            </button>
            Ellipsis code!!!!!!!! */}
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

export { BlogInfo };
