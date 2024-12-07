import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import { GetTopCoursesByPg } from "../../../../../core/services/api/Landing.api";
import { getRandomColor } from "../../../../Common/ColorGenerator";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
import { formatCost } from "./../../../../../core/utils/CostEntoFa+Commas+Split.utils";
import Logo from "../../../../../assets/logo (3)highQ.png";

const contentStyle = {
  height: "",
  color: "",
  colorText: "rgba (255, 3, 255, 1)",
  lineHeight: "160px",
  textAlign: "center",
  background: "",
};

const CoursesItems = () => {
  const scrollTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const [TopCourses, setTopCourses] = useState([]);

  const getTopCourses = async () => {
    try {
      const result = await GetTopCoursesByPg();

      setTopCourses(result);

      console.log("TopCourses", TopCourses);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTopCourses();
  }, []);

  return (
    <div
      data-aos="flip-up"
      className="hidden md:flex flex-wrap justify-center gap-4"
    >
      {TopCourses.map((course, index) => (
        <div
          key={index}
          className="p-4 bg-sky-50 flex flex-col dark:bg-indigo-950 relative   rounded-3xl justify-center items-center flex-1  min-w-[250px] max-w-[350px]"
        >
          <Link
            onClick={() => {
              scrollTop();
            }}
            to={`/courseDetails/${course.courseId}`}
          >
            <div
              className={`h-56 flex justify-center items-center rounded-3xl w-64 mx-auto mb-4 ${getRandomColor()}`}
            >
              <img
                // src={course.tumbImageAddress ?? Logo}
                src={
                  course.tumbImageAddress !== null &&
                  course.tumbImageAddress !== "null"
                    ? course.tumbImageAddress
                    : Logo
                }
                alt={""}
                className={`size-48 `}
              />
            </div>
          </Link>

          <Link
            onClick={() => {
              scrollTop();
            }}
            to={"/courseDetails"}
          >
            <h3 className="flex text-xl dark:text-white font-semibold mb-2 ">
              {course.title}
            </h3>
          </Link>
          <div className="flex flex-nowrap gap-7">
            <p className=" text-gray-400 dark:text-white text-xs items-center ">
              {course.teacherName}
            </p>
            <span className="text-gray-500 dark:text-white text-sm font-semibold mb-4">
              {formatCost(course.cost)}
            </span>
          </div>
          <div className="mt-4">
            <span className="px-3 py-0  text-xs absolute top-8 right-28 md:right-32 bg-blue-500 text-white rounded-full">
              {course.statusName}
            </span>
            <span className="px-3 py-0 text-xs  absolute top-8 right-10 md:right-14 bg-pink-500 text-white rounded-full">
              {course.levelName}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const CoursesCarsoual = () => {
  const [TopCourses, setTopCourses] = useState([]);

  const getTopCourses = async () => {
    try {
      const result = await GetTopCoursesByPg();

      setTopCourses(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTopCourses();
  }, []);

  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <div className="md:hidden flex flex-wrap justify-center gap-8">
            {TopCourses.slice(0, 1).map((course, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 flex flex-col dark:bg-indigo-950 relative   rounded-3xl justify-center items-center flex-1  min-w-[250px] max-w-[350px]"
              >
                <Link to={`/courseDetails/${course.courseId}`}>
                  <div
                    className={`h-56 flex justify-center items-center rounded-3xl w-64 mx-auto mb-4 ${getRandomColor()}`}
                  >
                    <img
                      src={
                        course.tumbImageAddress !== null &&
                        course.tumbImageAddress !== "null"
                          ? course.tumbImageAddress
                          : Logo
                      }
                      alt={""}
                      className={`size-48 `}
                    />
                  </div>
                </Link>

                <Link to={"/courseDetails"}>
                  <h3 className="flex text-xl dark:text-white font-semibold mb-2 ">
                    {course.title}
                  </h3>
                </Link>
                <div className="flex flex-nowrap gap-7">
                  <span className="text-gray-500 dark:text-white text-sm font-semibold mb-4">
                    {course.cost}
                  </span>
                  <p className=" text-gray-400 dark:text-white text-base items-center ">
                    {course.teacherName}
                  </p>
                </div>
                <div className="mt-4">
                  <span className="px-3 py-0  text-xs absolute top-8 right-32 md:right-32 bg-blue-500 text-white rounded-full">
                    {course.statusName}
                  </span>
                  <span className="px-3 py-0 text-xs  absolute top-8 right-14 md:right-14 bg-pink-500 text-white rounded-full">
                    {course.levelName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <div className="md:hidden flex flex-wrap justify-center gap-8">
            {TopCourses.slice(1, 2).map((course, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 flex flex-col dark:bg-indigo-950 relative   rounded-3xl justify-center items-center flex-1  min-w-[250px] max-w-[350px]"
              >
                <Link to={"/courseDetails"}>
                  <div
                    className={`h-56 flex justify-center items-center rounded-3xl w-64 mx-auto mb-4 ${course.color}`}
                  >
                    <img
                      src={
                        course.tumbImageAddress !== null &&
                        course.tumbImageAddress !== "null"
                          ? course.tumbImageAddress
                          : Logo
                      }
                      alt={""}
                      className={`size-48 `}
                    />
                  </div>
                </Link>

                <Link to={"/courseDetails"}>
                  <h3 className="flex text-xl dark:text-white font-semibold mb-2 ">
                    {course.title}
                  </h3>
                </Link>
                <div className="flex flex-nowrap gap-7">
                  <span className="text-gray-500 dark:text-white text-sm font-semibold mb-4">
                    {course.cost}
                  </span>
                  <p className=" text-gray-400 dark:text-white text-base items-center ">
                    {course.teacherName}
                  </p>
                </div>
                <div className="mt-4">
                  <span className="px-3 py-0  text-xs absolute top-8 right-32 md:right-32 bg-blue-500 text-white rounded-full">
                    {course.statusName}
                  </span>
                  <span className="px-3 py-0 text-xs  absolute top-8 right-14 md:right-14 bg-pink-500 text-white rounded-full">
                    {course.levelName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <div className="md:hidden flex flex-wrap justify-center gap-8">
            {TopCourses.slice(2, 3).map((course, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 flex flex-col dark:bg-indigo-950 relative   rounded-3xl justify-center items-center flex-1  min-w-[250px] max-w-[350px]"
              >
                <Link to={"/courseDetails"}>
                  <div
                    className={`h-56 flex justify-center items-center rounded-3xl w-64 mx-auto mb-4 ${course.color}`}
                  >
                    <img
                      src={
                        course.tumbImageAddress !== null &&
                        course.tumbImageAddress !== "null"
                          ? course.tumbImageAddress
                          : Logo
                      }
                      alt={""}
                      className={`size-48 `}
                    />
                  </div>
                </Link>

                <Link to={"/courseDetails"}>
                  <h3 className="flex text-xl dark:text-white font-semibold mb-2 ">
                    {course.title}
                  </h3>
                </Link>
                <div className="flex flex-nowrap gap-7">
                  {" "}
                  <span className="text-gray-500 dark:text-white text-sm font-semibold mb-4">
                    {course.cost}
                  </span>
                  <p className=" text-gray-400 dark:text-white text-base items-center ">
                    {course.teacherName}
                  </p>
                </div>
                <div className="mt-4">
                  <span className="px-3 py-0  text-xs absolute top-8 right-32 md:right-32 bg-blue-500 text-white rounded-full">
                    {course.statusName}
                  </span>
                  <span className="px-3 py-0 text-xs  absolute top-8 right-14 md:right-14 bg-pink-500 text-white rounded-full">
                    {course.levelName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <div className="md:hidden flex flex-wrap justify-center gap-8">
            {TopCourses.slice(3, 4).map((course, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 flex flex-col dark:bg-indigo-950 relative   rounded-3xl justify-center items-center flex-1  min-w-[250px] max-w-[350px]"
              >
                <Link to={"/courseDetails"}>
                  <div
                    className={`h-56 flex justify-center items-center rounded-3xl w-64 mx-auto mb-4 ${course.color}`}
                  >
                    <img
                      src={
                        course.tumbImageAddress !== null &&
                        course.tumbImageAddress !== "null"
                          ? course.tumbImageAddress
                          : Logo
                      }
                      alt={""}
                      className={`size-48 `}
                    />
                  </div>
                </Link>

                <Link to={"/courseDetails"}>
                  <h3 className="flex text-xl dark:text-white font-semibold mb-2 ">
                    {course.title}
                  </h3>
                </Link>
                <div className="flex flex-nowrap gap-7">
                  <span className="text-gray-500 dark:text-white text-sm font-semibold mb-4">
                    {course.cost}
                  </span>
                  <p className=" text-gray-400 dark:text-white text-base items-center ">
                    {course.teacherName}
                  </p>
                </div>
                <div className="mt-4">
                  <span className="px-3 py-0  text-xs absolute top-8 right-32 md:right-32 bg-blue-500 text-white rounded-full">
                    {course.statusName}
                  </span>
                  <span className="px-3 py-0 text-xs  absolute top-8 right-14 md:right-14 bg-pink-500 text-white rounded-full">
                    {course.levelName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </h3>
      </div>
    </Carousel>
  );
};

export { CoursesItems, CoursesCarsoual };
