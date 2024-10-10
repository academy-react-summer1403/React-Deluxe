// Comments.jsx
import React from "react";
import { TbMessagePlus } from "react-icons/tb";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const CourseComment = () => {
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

  const Comment = ({
    title,
    comment,
    profilePic,
    name,
    date,
    likes,
    dislikes,
  }) => (
    <div className="bg-gray-100 dark:bg-indigo-900 pt-4 px-4 rounded-3xl shadow-md mb-6 basis-full lg:basis-[24%] h-64 flex flex-col justify-between">
      <div>
        <p className="font-bold text-[#1B1B1B] mb-2">{title}</p>
        <p className="text-[#7C7C7C] text-sm">{comment}</p>
      </div>

      <div className="flex justify-between items-center mb-2 rounded-lg w-full">
        {/* Right Section - User Info */}
        <div className="flex items-center">
          {/* Avatar */}
          <div className="w-10 h-10 bg-fuchsia-700 rounded-full">
            {/* Placeholder for avatar, you can replace with img tag */}
            <img
              src={profilePic}
              alt="Avatar"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          {/* User Name and Date */}
          <div className="flex flex-col gap-1 mr-2">
            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
              {name}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 lg:text-[0.5rem]/[0.5rem]">
              {date}
            </span>
          </div>
        </div>

        {/* Left Section - Like/Dislike Buttons */}
        <div className="flex items-center gap-2 text-gray-700">
          {/* Like Button */}
          <div className="flex items-center gap-1 text-lg">
            <AiOutlineLike className="text-xl cursor-pointer" />
            <span className="text-xs font-medium">{likes}</span>
          </div>

          {/* Dislike Button */}
          <div className="flex items-center gap-1 text-lg">
            <AiOutlineDislike className="text-xl cursor-pointer" />
            <span className="text-xs font-medium">{dislikes}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 mb-6 bg-white dark:bg-indigo-950">
      <h3 className="mb-4 text-xl font-bold text-gray-500 dark:text-gray-300">
        نظرات دانشجو ها و اساتید
      </h3>
      <div className="flex flex-wrap justify-between">
        <div className="bg-[#3772FF] p-4 rounded-3xl shadow-md mb-4 basis-full mx-4 lg:mx-0 lg:basis-[24%] h-64 flex flex-col justify-center items-center">
          <TbMessagePlus className="size-8 mb-3" color="white" />
          <p className="font-bold text-white mb-5">نظر شما</p>
          <p className="text-white">برای نظر دادن کلیک کنید</p>
        </div>
        {commentsData.map((item, index) => (
          <Comment
            key={index}
            title={item.title}
            comment={item.comment}
            profilePic={item.profilePic}
            name={item.name}
            date={item.date}
            likes={item.likes}
            dislikes={item.dislikes}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-[#2F2F2F] text-white px-4 py-2 mt-4 rounded-full">
          مشاهده بیشتر
        </button>
      </div>
    </div>
  );
};

export { CourseComment };
