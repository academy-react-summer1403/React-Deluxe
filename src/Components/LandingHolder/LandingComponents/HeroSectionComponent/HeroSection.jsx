import React from "react";
import { Avatar } from "antd";

// // Images (Replace with actual image paths)
// import HTMLIcon from "/path-to-html-icon.png";
// import CSSIcon from "/path-to-css-icon.png";
// import JSIcon from "/path-to-js-icon.png";
// import ReactIcon from "/path-to-react-icon.png";
// import FigmaIcon from "/path-to-figma-icon.png";

// Main Hero Section
const HeroSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center mx-3">
        <div className="flex items-center justify-evenly ml-20  mb-10">
          {/* Stats Section */}
          <div className="w-80  flex flex-wrap justify-start mb-4">
            <div className="flex items-center mx-4">
              <Avatar.Group>
                <Avatar src="/path-to-student-avatar-1.png" />
                <Avatar src="/path-to-student-avatar-2.png" />
                <Avatar src="/path-to-student-avatar-3.png" />
              </Avatar.Group>
              <span className="">+100 دانشجوی فعال در دوره</span>
            </div>
            <div className="flex items-center mx-4">
              <Avatar.Group>
                <Avatar src="/path-to-teacher-avatar-1.png" />
                <Avatar src="/path-to-teacher-avatar-2.png" />
                <Avatar src="/path-to-teacher-avatar-3.png" />
              </Avatar.Group>
              <span className="">+50 اساتید برتر جهان</span>
            </div>
          </div>
          <div className="w-72 justify-center flex flex-wrap">
            <div>
              <div className=" text-4xl font-bold mb-4">آموزش مدرن</div>
              <h1 className=" text-4xl font-bold mb-4">پیشرفت سریع</h1>
            </div>
            <div>
              <p className=" text-base  ">
                آکادمی آموزش تخصصی برنامه نویسی بحر
              </p>
              <p className=" text-base mb-6">از کودکان تا بزرگسال</p>
            </div>
          </div>
          <div className="flex  flex-wrap flex-col">
            <div>
              <h3 className="flex  mr-2">همین حالا </h3>
              <h3 className="mr-2">شروع کن به یادگیری!</h3>
            </div>

            <button className="mb-8 mt-2 text-white rounded-full bg-gray-900 px-5 py-1.5">
              جدیدترین دوره‌ها
            </button>
          </div>
        </div>

        {/* Right side content (Course icons timeline) */}
        <div className="flex justify-center items-center">
          {/* <div className="relative w-full">
            <div className="flex justify-between items-center relative">
              <div className="flex flex-col items-center">
                <img src="" alt="HTML5" className="h-12 w-12 mb-4" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              </div>
              <div className="flex flex-col items-center">
                <img src="" alt="CSS3" className="h-12 w-12 mb-4" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              </div>
              <div className="flex flex-col items-center">
                <img src="" alt="JavaScript" className="h-12 w-12 mb-4" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              </div>
              <div className="flex flex-col items-center">
                <img src="" alt="React" className="h-12 w-12 mb-4" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              </div>
              <div className="flex flex-col items-center">
                <img src="" alt="Figma" className="h-12 w-12 mb-4" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              </div>
            </div>
            <div className="absolute top-1/2 w-full h-0.5 bg-gray-300"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
