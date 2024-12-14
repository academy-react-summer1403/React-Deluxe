import { ConfigProvider, Pagination } from "antd";
import React, { useState, useEffect } from "react";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getQuery } from "../../../../core/services/api/ReactQuery/getQuery";
import { useQueryShortcut } from "./../../../../core/services/api/ReactQuery/useQueryShortcut";
import { DatePersianizer } from "./../../../../core/utils/DatePersianizer";
import Logo from "../../../../assets/logo (3)highQ.png";
import { getRandomColor } from "../../../Common/ColorGenerator";

const index = () => {
  getQuery("GetMyCourses", "/SharePanel/GetMyCourses");
  const data = useQueryShortcut("GetMyCourses");
  return (
    <div className="bg-gray-50 dark:bg-indigo-950 flex flex-col p-2 rounded-3xl">
      <div>
        <ul className="flex p-2 rounded-xl text-sm text-gray-500  m-5 dark:bg-[#041124] dark:text-white  bg-gray-100 gap-24 justify-start">
          <li className="hidden sm:block">#</li>
          <li> نام دوره</li>
          <li className="hidden sm:block w-[50px]">مدرس</li>
          <li className="mr-6 lg:mr-8">تاریخ برگزاری</li>
          <li className="mr-2 hidden lg:block">کلاس</li>
          <li className="hidden">سطح</li>
        </ul>
        <div className="mt-4 mx-1 space-y-4 max-h-[20rem] overflow-y-scroll">
          {data?.listOfMyCourses.map((course, index) => (
            <div
              key={index}
              className="  flex flex-row  relative  items-center rounded-3xl justify-start gap-11    "
            >
              <div
                className={`h-12 hidden sm:flex justify-center items-center rounded-2xl w-20  mb-4 ${getRandomColor()}`}
              >
                <img
                  src={course.tumbImageAddress ?? Logo}
                  alt={""}
                  className={`size-full rounded-2xl`}
                />
              </div>

              <h3 className=" text-xl dark:text-white font-semibold mb-2  truncate w-[111px]">
                {course.courseTitle}
              </h3>

              <p className="  dark:text-white hidden sm:block text-[12px]  font-bold items-center w-[125px]  ">
                {course.fullName}
              </p>
              <span
                className={`inline-flex items-center w-[125px] dark:text-white `}
              >
                {DatePersianizer(course.lastUpdate)}
              </span>

              <span
                className={`lg:inline-flex hidden items-center w-[105px] dark:text-white `}
              >
                {course.classRoomName}
              </span>
              <span className="px-3 py-0 text-base  hidden   bg-[#FF37F5] text-white rounded-full">
                {course.levelName}
              </span>

              <Link to={`/courseDetails/${course.courseId}`}>
                <BsEye className="text-base" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        {/* <ConfigProvider direction="rtl" className="mt-10">
          <Pagination align="center" defaultCurrent={1} total={50} />
        </ConfigProvider> */}
      </div>
    </div>
  );
};

export default index;
