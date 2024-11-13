// CourseInfo.jsx
import { Rate } from "antd";
import React, { useState } from "react";
import { FaBook } from "react-icons/fa6";
import { PiShoppingBagOpen } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { InfoBlock } from "./Components/InfoBlock";
import {
  Archive02Icon,
  Book02Icon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "hugeicons-react";
import { useMutation } from "@tanstack/react-query";
import { CourseReserve } from "../../../core/services/api/Courses/CourseReserve.api";
import { toast } from "react-toastify";
import { CourseFavorite } from "../../../core/services/api/Courses/CourseFavorite.api";
import { LikeCourse } from "../../../core/services/api/Courses/LikeCourse.api";
import { DisslikeCourse } from "../../../core/services/api/Courses/DisslikeCourse.api";

const CourseInfo = ({ data }) => {
  const [starValue, setStarValue] = useState(`${data.currentRate}`);
  const [isLiked, setIsLiked] = useState();
  const [isDissliked, setIsDissliked] = useState();

  const infoBlock1Data = [
    {
      wrapperClasses:
        "basis-[50%] border-l border-slate-200 dark:border-gray-500 w-32 h-20 p-2 flex flex-col items-center lg:block",
      titleClasses: "text-sm text-gray-400 dark:text-gray-300",
      title: "وضعیت",
      statusClasses:
        "text-white bg-[#ff5353] rounded-full px-2 text-base font-light whitespace-nowrap w-fit h-6 mt-2",
      status: `${data.courseStatusName}`,
    },
    {
      wrapperClasses:
        "basis-[50%] w-32 h-20 p-2 text-nowrap flex flex-col items-center lg:block",
      titleClasses: "text-sm text-gray-400 dark:text-gray-300",
      title: "دسته بندی",
      statusClasses:
        "text-white bg-[#3772ff] rounded-full px-2 text-base font-light w-fit h-6 mt-2",
      status: `${data.techs[0]}`,
    },
  ];
  const infoBlock2Data = [
    {
      wrapperClasses:
        "basis-[50%] lg:basis-[50%] border-l border-slate-200 dark:border-gray-500 w-32 h-20 p-2 flex flex-col items-center lg:block",
      titleClasses: "text-sm text-gray-400 dark:text-gray-300",
      title: "سطح آموزشی",
      statusClasses:
        "text-white bg-[#ff37f5] rounded-full px-2 text-base font-light w-fit h-6 mt-2",
      status: `${data.courseLevelName}`,
    },
    {
      wrapperClasses: "basis-[50%] lg:basis-[50%] w-32 h-20 p-2",
      titleClasses: "text-sm text-gray-400 dark:text-gray-300",
      title: "مدرس",
      statusClasses:
        "text-base/[1.2rem] font-light whitespace-wrap dark:text-white mt-2",
      status: `${data.teacherName}`,
    },
  ];
  const infoBlock3Data = [
    {
      wrapperClasses:
        "basis-[50%] border-l border-slate-200 dark:border-gray-500 w-32 h-20 p-2",
      titleClasses: "text-sm text-gray-400 dark:text-gray-300",
      title: "تاریخ برگزاری",
      statusClasses: "text-base/[1rem] mt-3 font-light dark:text-white",
      status: `${data.startTime.toString().slice(0, 10)}`,
    },
    {
      wrapperClasses: "basis-[50%] w-32 h-20 p-2",
      titleClasses: "text-sm text-gray-400 dark:text-gray-300",
      title: "تاریخ اتمام",
      statusClasses: "text-base/[1rem] mt-3 font-light dark:text-white",
      status: `${data.endTime.toString().slice(0, 10)}`,
    },
  ];
  const infoBlock4Data = [
    {
      wrapperClasses:
        "basis-[50%] border-l border-slate-200 dark:border-gray-500 w-32 h-20 p-2",
      titleClasses: "text-sm text-gray-400 dark:text-gray-300",
      title: "تعداد لایک",
      statusClasses: "text-base/[2.5rem] font-light dark:text-white",
      status: `${data.likeCount} نفر`,
    },
    {
      wrapperClasses: "basis-[50%] w-32 h-20 p-2",
      titleClasses: "text-sm text-gray-400 dark:text-gray-300",
      title: "تعداد دیس‌لایک",
      statusClasses: "text-base/[2.5rem] font-light dark:text-white",
      status: `${data.dissLikeCount} نفر`,
    },
  ];

  const mutation = useMutation({
    mutationKey: ["AddCourseReserve"],
    mutationFn: CourseReserve,
    onSuccess: () => {
      toast.success("دوره با موفقیت رزرو شد!", { position: "top-center" });
    },
    onError: (error) => {
      toast.error(error.response.data.ErrorMessage[0], {
        position: "top-center",
      });
      // console.log(error.response.data.ErrorMessage[0]);
    },
  });

  const handleReserve = async (courseId) => {
    // console.log(courseId);
    await mutation.mutateAsync(courseId);
  };

  const favoriteMutation = useMutation({
    mutationKey: ["AddCourseFavorite"],
    mutationFn: CourseFavorite,
    onSuccess: () => {
      toast.success("دوره به عنوان علاقمندی شما اضافه شد!", {
        position: "top-center",
      });
    },
    onError: (error) => {
      toast.error(error.response.data.ErrorMessage[0], {
        position: "top-center",
      });
      // console.log("error Favorite", error);
    },
  });

  const handleFavorite = async (courseId) => {
    console.log(courseId);
    await favoriteMutation.mutateAsync(courseId);
  };

  const likeMutation = useMutation({
    mutationKey: ["LikeCourse"],
    mutationFn: LikeCourse,
    onSuccess: () => {
      toast.success("دوره لایک شد!", {
        position: "top-center",
      });
      // setIsLiked(true);
      // setIsDissliked(false);
      data.currentUserLike = 1;
      data.currentUserDissLike = 0;
    },
    onError: (error) => {
      toast.error(error.response.data.ErrorMessage[0], {
        position: "top-center",
      });
      // console.log("error Like", error);
    },
  });

  const handleLike = async (courseId) => {
    // console.log(courseId);
    await likeMutation.mutateAsync(courseId);
  };

  const DisslikeMutation = useMutation({
    mutationKey: ["DislikeCourse"],
    mutationFn: DisslikeCourse,
    onSuccess: () => {
      toast.success("دوره دیسلایک شد!", {
        position: "top-center",
      });
      // setIsDissliked(true);
      // setIsLiked(false);
      data.currentUserDissLike = 1;
      data.currentUserLike = 0;
    },
    onError: (error) => {
      toast.error(error.response.data.ErrorMessage[0], {
        position: "top-center",
      });
      // console.log("error Disslike", error);
    },
  });

  const handleDisslike = async (courseId) => {
    await DisslikeMutation.mutateAsync(courseId);
  };

  return (
    <>
      <div
        dir="rtl"
        className="flex flex-col p-6 bg-white rounded-lg dark:bg-[#041124] lg:flex-row"
      >
        {/* Right Section: Course Image */}
        <div className="flex justify-center h-[27rem] order-last mt-10 lg:mt-0 lg:order-none lg:w-1/2 lg:h-[27rem] bg-transparent rounded-[1.8rem]">
          <img
            src={data.imageAddress}
            // "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VKvXDw8XmMqPX-avBXZ3r-CHzU9Gajrp1YuONERMXpFwVwsZ621ROUvmGg0l0M5Uk3WLvvw2rJNVCzHrcBZFnMZ7223KYF1zthqjB~agrpfX1me4Htn4sYgPWzfOwWcoeMc-8Ft~KokEaEwmlvGatv8eiEtEq7qJdFYL2XiYwSwyu6q6HpeqpSxry78jz0IRAoiTvIYk2P9IFUBoe0ld3XB~XIPFhnHivN8S7q7uvba6q8faq91bBMcoe6dbzjhSVpBQOyKyOeSw4CO4ds4OMV-PV~7gwlyWBn85CIdU5oudgmBhTkRo5lytZ9g8DyzRqkHuWOr7Wez3jdvHYkD02g__"
            alt="Course"
            className="rounded-[2rem] shadow-md object-fill w-full"
          />
        </div>

        {/* Left Section: Course Details */}
        <div className="flex flex-col flex-grow mt-4 lg:mr-6 lg:w-1/2">
          {/* 1st Row: Course Title */}
          <h1 className="text-3xl font-bold text-[#1B1B1B] dark:text-white mb-4">
            {data.title}
          </h1>

          {/* 2nd Row: Course Info Section */}
          <div className="flex flex-wrap justify-between mb-4 text-center lg:text-right">
            <div className="basis-full flex flex-wrap justify-between mb-4 rounded-3xl lg:rounded-none lg:rounded-r-3xl lg:basis-[50%] xl:basis-[50%] border lg:border-0 lg:border-t lg:border-r lg:border-b border-slate-200 bg-slate-100 dark:border-gray-500 overflow-hidden dark:bg-indigo-950">
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
            <div className="basis-full flex flex-wrap justify-between mb-4 rounded-3xl lg:rounded-none lg:rounded-l-3xl lg:basis-[50%] xl:basis-[50%] border border-slate-200 bg-slate-100 dark:border-gray-500 overflow-hidden dark:bg-indigo-950">
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
            <div className="basis-full flex flex-wrap justify-between mb-4 rounded-3xl lg:rounded-none lg:rounded-r-3xl lg:basis-[50%] border lg:border-0 lg:border-t lg:border-r lg:border-b border-slate-200 bg-slate-100 dark:border-gray-500 overflow-hidden dark:bg-indigo-950">
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
            <div className="basis-full flex flex-wrap justify-between mb-4 rounded-3xl lg:rounded-none lg:rounded-l-3xl lg:basis-[50%] border border-slate-200 bg-slate-100 dark:border-gray-500 overflow-hidden dark:bg-indigo-950">
              {infoBlock4Data.map((item, index) => (
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
              <Rate
                className="mb-1"
                disabled
                onChange={setStarValue}
                defaultValue={data.currentRate}
              />
              <span className="text-[#7C7C7C] dark:text-gray-300 mr-2">
                + ({data.commentCount}) نظرات
              </span>
            </div>
            <div className="hidden text-2xl font-bold text-black dark:text-white lg:block">
              {data.cost}
              <span className="text-sm mr-1">تومان</span>
            </div>
          </div>

          {/* 5th Row: Action Buttons */}
          <div className="flex flex-row justify-evenly lg:justify-between md:gap-2 lg:gap-0 lg:text-ellipsis text-base lg:text-sm xl:text-base lg:overflow-hidden">
            <button
              className="bg-[#3772FF] dark:bg-indigo-800 text-white px-8 lg:px-4 xl:px-8 xl:py-2 sm:text-base rounded-full mr-2 hidden lg:flex items-center gap-2"
              onClick={() => handleReserve(data.courseId)}
            >
              {mutation.isPending ? (
                "در حال رزرو..."
              ) : (
                <>
                  <Book02Icon size={20} color={"#ffffff"} /> رزرو دوره
                </>
              )}
            </button>
            <button
              className="bg-[#2f2f2f] dark:bg-indigo-800 text-white px-2 whitespace-nowrap text-sm sm:text-base lg:px-4 xl:px-8 xl:py-2 rounded-full lg:mx-auto flex items-center gap-2"
              onClick={() => handleFavorite(data.courseId)}
            >
              {favoriteMutation.isPending ? (
                "درحال اضافه کردن به لیست..."
              ) : (
                <>
                  <Archive02Icon
                    size={20}
                    color={"#ffffff"}
                    variant={"stroke"}
                  />
                  اضافه به لیست مورد علاقه
                </>
              )}
            </button>
            <div className="flex gap-3">
              {data.currentUserLike == 1 ? (
                <button
                  className="bg-[#3772ff] dark:bg-indigo-800 text-white w-12 h-12 rounded-full flex justify-center items-center"
                  onClick={() => handleLike(data.courseId)}
                >
                  <ThumbsUpIcon size={20} color={"#fff"} variant={"stroke"} />{" "}
                </button>
              ) : (
                <button
                  className="bg-white dark:bg-[#041124] text-black dark:text-white border border-gray-200 dark:border-gray-600 w-12 h-12 rounded-full flex justify-center items-center"
                  onClick={() => handleLike(data.courseId)}
                >
                  <ThumbsUpIcon size={20} color={"#000"} variant={"stroke"} />{" "}
                </button>
              )}

              {data.currentUserDissLike == 1 ? (
                <button
                  className="bg-red-500 dark:bg-[#041124] text-[#1B1B1B] dark:text-white border border-gray-200 dark:border-gray-600 w-12 h-12 rounded-full flex justify-center items-center"
                  onClick={() => handleDisslike(data.courseId)}
                >
                  <ThumbsDownIcon size={20} color={"#fff"} variant={"stroke"} />{" "}
                </button>
              ) : (
                <button
                  className="bg-white dark:bg-[#041124] text-[#1B1B1B] dark:text-white border border-gray-200 dark:border-gray-600 w-12 h-12 rounded-full flex justify-center items-center"
                  onClick={() => handleDisslike(data.courseId)}
                >
                  <ThumbsDownIcon size={20} color={"#000"} variant={"stroke"} />{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-auto z-10 flex items-center justify-evenly w-full h-20 bg-white lg:hidden dark:bg-[#041124]">
        <button className="bg-[#3772FF] dark:bg-indigo-800 text-white px-8 py-2 rounded-full mr-2 flex items-center">
          <FaBook className="mx-2" />
          رزرو دوره
        </button>
        <div className="text-2xl font-bold text-black dark:text-white">
          {data.cost}
          <span className="text-sm mr-1">تومان</span>
        </div>
      </div>
    </>
  );
};

export { CourseInfo };
