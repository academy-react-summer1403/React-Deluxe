// CourseInfo.jsx
import { Rate } from "antd";
import React, { useState } from "react";

const CourseInfo = () => {
  const [starValue, setStarValue] = useState(1);
  return (
    <div
      dir="rtl"
      className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-md"
    >
      {/* Right Section: Course Image */}
      <div className="flex justify-center lg:w-1/2 lg:h-[25rem] bg-slate-700 rounded-[1.8rem]">
        <img
          //   src="https://via.placeholder.com/150" // Replace with your course image URL
          alt="Course"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Left Section: Course Details */}
      <div className="flex flex-col flex-grow mt-4 lg:mr-6 lg:w-1/2">
        {/* 1st Row: Course Title */}
        <h1 className="text-3xl font-bold text-[#1B1B1B] mb-4">
          دوره جاوااسکریپت
        </h1>

        {/* 2nd Row: Course Info Section */}
        <div className="flex flex-wrap justify-between mb-4">
          <div className="basis-1/4 border border-gray-400 w-32 h-20 p-2">
            <span className="text-gray-500 text-sm">وضعیت</span> <br />
            <span className="text-white bg-[#ff5353] rounded-full px-2 text-lg/[2.5rem] font-light">
              در حال برگزاری
            </span>
          </div>
          <div className="basis-1/4 border border-gray-400 w-32 h-20 p-2">
            <span className="text-gray-500 text-sm">دسته بندی</span> <br />
            <span className="text-white bg-[#3772ff] rounded-full px-2 text-lg/[2.5rem] font-light">
              برنامه نویسی
            </span>
          </div>
          <div className="basis-1/4 border border-gray-400 w-32 h-20 p-2">
            <span className="text-gray-500 text-sm">سطح آموزشی</span> <br />
            <span className="text-white bg-[#ff37f5] rounded-full px-2 text-lg/[2.5rem] font-light">
              پیشرفته
            </span>
          </div>
          <div className="basis-1/4 border border-gray-400 w-32 h-20 p-2">
            <span className="text-gray-500 text-sm">مدرس</span> <br />
            <span className="text-lg/[2.5rem] font-light whitespace-nowrap">
              محمد برزگرزاده
            </span>
          </div>

          {/* 3rd Row: Additional Info Section */}

          <div className="basis-1/4 border border-gray-400 w-32 h-20 p-2">
            <span className="text-gray-500 text-sm">تاریخ برگزاری</span> <br />
            <span className="text-lg/[2.5rem] font-light">۳۱ خرداد ۱۴۰۲</span>
          </div>
          <div className="basis-1/4 border border-gray-400 w-32 h-20 p-2">
            <span className="text-gray-500 text-sm">تاریخ اتمام</span> <br />
            <span className="text-lg/[2.5rem] font-light">۳۱ تیر ۱۴۰۲</span>
          </div>
          <div className="basis-1/4 border border-gray-400 w-32 h-20 p-2">
            <span className="text-gray-500 text-sm">تعداد لایک</span> <br />
            <span className="text-lg/[2.5rem] font-light">۲۴</span>
          </div>
          <div className="basis-1/4 border border-gray-400 w-32 h-20 p-2">
            <span className="text-gray-500 text-sm">تعداد دیسلایک</span> <br />
            <span className="text-lg/[2.5rem] font-light">۵</span>
          </div>
        </div>

        {/* 4th Row: Price and Rating Section */}
        <div className="flex flex-row-reverse justify-between mb-4 items-center">
          <div className="text-black text-2xl font-bold">۲۵,۰۰۰ تومان</div>
          <div className="flex items-center">
            {/* Star Rating */}
            {/* <span className="text-[#FFB700]">⭐</span>
              <span className="text-[#FFB700]">⭐</span>
              <span className="text-[#FFB700]">⭐</span>
              <span className="text-[#FFB700]">⭐</span>
              <span className="text-[#C4C4C4]">⭐</span> */}
            <span className="text-[#7C7C7C] ml-2"> ( {starValue} ) </span>
            <Rate className="mb-1" onChange={setStarValue} defaultValue={1} />
            <span className="text-[#7C7C7C] mr-2">+ (۴۰) نظرات</span>
          </div>
        </div>

        {/* 5th Row: Action Buttons */}
        <div className="flex flex-row-reverse justify-between">
          <div className="flex">
            <button className="bg-[#3772ff] text-white w-12 h-12 rounded-full mr-2">
              👍
            </button>
            <button className="bg-white text-[#1B1B1B] border border-gray-200 w-12 h-12 rounded-full">
              👎
            </button>
          </div>
          <button className="bg-[#2f2f2f] text-white px-4 py-2 rounded-full mx-auto">
            اضافه به لیست مورد علاقه
          </button>
          <button className="bg-[#3772FF] text-white px-4 py-2 rounded-full mr-2">
            رزرو دوره
          </button>
        </div>
      </div>
    </div>
  );
};

export { CourseInfo };
