import { ConfigProvider, Pagination } from "antd";
import React, { useState, useEffect } from "react";
import { BsEye } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { TbBookDownload } from "react-icons/tb";
import { Link } from "react-router-dom";
import { favoriteCourseDto } from "../../../../core/services/api/StudentPanel/FavoriteCourses.api";
import { getRandomColor } from "../../../Common/ColorGenerator";

const index = () => {
  const [CoursesData, setCoursesData] = useState([]);

  const getCoursesData = async () => {
    try {
      const result = await favoriteCourseDto();

      setCoursesData(result.favoriteCourseDto);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCoursesData();
  }, []);
  return (
    <div className="bg-gray-50 dark:bg-indigo-950  flex flex-col gap-96 p-2 rounded-3xl    ">
      <div>
        <ul className="flex p-2 rounded-xl text-sm text-gray-500  m-5 dark:bg-[#041124] dark:text-white  bg-gray-100 gap-24 justify-start">
          <li className="hidden md:block ">#</li>
          <li> نام دوره</li>
          <li className="w-[50px] hidden sm:block">مدرس</li>
          <li className="mr-2 hidden lg:block">تاریخ برگزاری</li>
          <li className="mr-2 ">نوع برگزاری</li>
          <li className="hidden sm:block">سطح</li>
        </ul>
        <div className="mt-4 mx-5 space-y-4">
          {CoursesData.map((course, index) => (
            <div
              key={index}
              className="  flex flex-row  relative  items-center rounded-3xl justify-start gap-8    "
            >
              <div
                className={`h-12 hidden md:flex justify-center items-center rounded-xl w-20  mb-4 ${getRandomColor()}`}
              >
                <img
                  src={course.tumbImageAddress}
                  alt={""}
                  className={`size-8 `}
                />
              </div>
              <h3 className=" text-xl dark:text-white font-semibold mb-2  truncate w-[111px]">
                {course.courseTitle}
              </h3>
              <p className="  dark:text-white hidden sm:block text-[12px]  font-bold items-center w-[125px]  ">
                {course.teacheName}
              </p>
              <span
                className={`hidden lg:inline-flex items-center w-[125px] dark:text-white `}
              >
                {course.lastUpdate.slice(0, 10)}
              </span>
              <span
                className={`inline-flex items-center  lg:w-[125px] dark:text-white `}
              >
                {course.typeName}
              </span>
              <span
                className={`px-3 py-0 text-base  hidden sm:block   ${
                  course.levelName === "مبتدی"
                    ? "bg-blue-500"
                    : course.levelName === "متوسط"
                    ? "bg-pink-500"
                    : "bg-red-500"
                } text-white rounded-full`}
              >
                {course.levelName}
              </span>{" "}
              <div className="flex gap-2">
                <Link to={"/courseDetails"}>
                  <BsEye className="text-base" />
                </Link>
                <TbBookDownload />
                <RxCross1 className="text-red-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <ConfigProvider direction="rtl" className="mt-10">
          {CoursesData.length > 8 && (
            <Pagination align="center" defaultCurrent={1} total={50} />
          )}
        </ConfigProvider>
      </div>
    </div>
  );
};

export default index;
