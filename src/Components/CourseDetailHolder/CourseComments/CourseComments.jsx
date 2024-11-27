// Comments.jsx
import React, { useState } from "react";
import { TbMessagePlus } from "react-icons/tb";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { CourseCommentsModal } from "./CourseCommentsModal";
import { useQueryShortcut } from "../../../core/services/api/ReactQuery/useQueryShortcut";
import { useLocation } from "react-router-dom";
import { ThumbsDownIcon, ThumbsUpIcon } from "hugeicons-react";
import { DatePersianizer } from "./../../../core/utils/DatePersianizer";
import { digitsEnToFa } from "@persian-tools/persian-tools";

const CourseComment = ({ dataBlog }) => {
  const { pathname } = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const commentsData = [
    {
      title: "دوره جاوااسکریپت",
      comment:
        "واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و اصلا از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم توی کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو گذاشتن ",
      profilePic: "public/vite.svg",
      name: "امیر امیری",
      date: "29 اردیبهشت 1403",
      likes: 90,
      dislikes: 5,
    },
    {
      title: "جاوااسکریپت",
      comment:
        "واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و اصلا از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم توی کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو گذاشتن ",
      profilePic: "public/vite.svg",
      name: "حسین سهرابی",
      date: "29 اردیبهشت 1403",
      likes: 18,
      dislikes: 86,
    },
    {
      title: "دوره جاوا",
      comment:
        "واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و اصلا از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم توی کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو گذاشتن ",
      profilePic: "public/vite.svg",
      name: "یاسین کوچولو",
      date: "29 اردیبهشت 1403",
      likes: "10k",
      dislikes: 0,
    },
  ];

  const courseComments = useQueryShortcut("CourseCommentsById");
  const data = courseComments?.slice(0, 3);
  console.log("Comments DATAAAAAAH", data ? data : "");

  const blogComments = dataBlog?.slice(0, 3);
  console.log("dataBlog for Comments", dataBlog);

  const Comment = ({
    title,
    comment,
    profilePic,
    name,
    date,
    likes,
    dislikes,
  }) => (
    <div className="bg-gray-100 dark:bg-indigo-950 pt-4 px-4 rounded-3xl shadow-md mb-6 basis-full lg:basis-[24%] h-64 flex flex-col justify-between">
      <div>
        <p className="font-bold text-[#1B1B1B] dark:text-white mb-2">{title}</p>
        <p className="text-[#7C7C7C] dark:text-gray-300 text-sm">{comment}</p>
      </div>

      <div className="flex items-center justify-between w-full mb-2 rounded-lg">
        {/* Right Section - User Info */}
        <div className="flex items-center">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-blue-500">
            {/* Placeholder for avatar, you can replace with img tag */}
            <img
              src={profilePic}
              alt="Avatar"
              className="object-cover w-10 h-10 max-w-none rounded-full"
            />
          </div>
          {/* User Name and Date */}
          <div className="flex flex-col gap-1 mr-2">
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
              {name}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 lg:text-[0.65rem]/[0.5rem]">
              {DatePersianizer(date)}
            </span>
          </div>
        </div>

        {/* Left Section - Like/Dislike Buttons */}
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          {/* Like Button */}
          <div className="flex items-center gap-1 text-lg">
            <ThumbsUpIcon size={20} color={"#374151"} variant={"stroke"} />{" "}
            <span className="text-xs font-medium">{digitsEnToFa(likes)}</span>
          </div>

          {/* Dislike Button */}
          <div className="flex items-center gap-1 text-lg">
            <ThumbsDownIcon size={20} color={"#374151"} variant={"stroke"} />{" "}
            <span className="text-xs font-medium">
              {digitsEnToFa(dislikes)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 mb-6 bg-white dark:bg-[#041124]">
      <h3 className="mb-4 text-xl font-bold text-gray-500 dark:text-gray-300">
        نظرات دانشجو ها و اساتید
      </h3>
      <div className="flex flex-wrap justify-between">
        <div className="bg-[#3772FF] dark:bg-indigo-950 p-4 rounded-3xl shadow-md mb-4 basis-full lg:basis-[24%] h-64 flex flex-col justify-center items-center">
          <TbMessagePlus className="mb-3 size-8" color="white" />
          <p className="mb-5 font-bold text-white dark:text-gray-100">
            نظر شما
          </p>
          <p className="text-white dark:text-gray-300">
            برای نظر دادن کلیک کنید
          </p>
        </div>
        {pathname.includes("courseDetails")
          ? data?.map((item, index) => (
              <Comment
                key={index}
                title={item.title}
                comment={item.describe}
                profilePic={item.pictureAddress}
                name={item.author}
                date={item.insertDate.toString().slice(0, 10)}
                likes={item.likeCount}
                dislikes={item.disslikeCount}
              />
            ))
          : blogComments?.map((item, id) => (
              <Comment
                key={id}
                title={item.title}
                comment={item.describe}
                profilePic={item.pictureAddress}
                name={item.autor}
                date={item.inserDate.toString().slice(0, 10)}
                likes={item.likeCount}
                dislikes={item.dissLikeCount}
              />
            ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#2F2F2F] dark:bg-gray-700 text-white dark:text-gray-200 px-4 py-2 mt-4 rounded-full"
        >
          مشاهده بیشتر
        </button>
      </div>
      <CourseCommentsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseComments={courseComments}
        dataBlog={dataBlog}
      />
    </div>
  );
};

export { CourseComment };
