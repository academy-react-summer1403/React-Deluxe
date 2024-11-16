import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import { HeroItem } from "./HeroSectionItems";
import { Link } from "react-router-dom";
import { GetLandingReport } from "../../../../core/services/api/LandingReport/LandingReport";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import HTML5 from "../../../../assets/LandingProgressBar/HTML5.png";
import CSS3 from "../../../../assets/LandingProgressBar/CSS3.png";
import JavaScript from "../../../../assets/LandingProgressBar/JavaScript.png";
import ReactPic from "../../../../assets/LandingProgressBar/React.png";
import Figma from "../../../../assets/LandingProgressBar/Figma.png";
import Avatar1 from "../../../../assets/LandingAvatars/LandingAvatarsUpper/Avatar1.png";
import Avatar2 from "../../../../assets/LandingAvatars/LandingAvatarsUpper/Avatar2.png";
import Avatar3 from "../../../../assets/LandingAvatars/LandingAvatarsUpper/Avatar3.png";
import Avatar4 from "../../../../assets/LandingAvatars/LandingAvatarsLower/Avatar4.png";
import Avatar5 from "../../../../assets/LandingAvatars/LandingAvatarsLower/Avatar5.png";
import Avatar6 from "../../../../assets/LandingAvatars/LandingAvatarsLower/Avatar6.png";

// // Images (Replace with actual image paths)
// import HTMLIcon from "/path-to-html-icon.png";
// import CSSIcon from "/path-to-css-icon.png";
// import JSIcon from "/path-to-js-icon.png";
// import ReactIcon from "/path-to-react-icon.png";
// import FigmaIcon from "/path-to-figma-icon.png";

// Main Hero Section
const HeroSection = () => {
  // const pics = [
  //   {
  //     url: "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
  //   },
  //   {
  //     url: "",
  //   },
  //   {
  //     url: "",
  //   },
  //   {
  //     url: "",
  //   },
  //   {
  //     url: "",
  //   },
  // ];

  const [landingReportInfo, setLandingReportInfo] = useState([]);
  const getLandingRep = async () => {
    try {
      const result = await GetLandingReport();

      setLandingReportInfo(result);

      // console.log("result", result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLandingRep();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto text-center w-full ">
        <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-evenly   mb-10">
          {/* Stats Section */}
          <div className="w-[19rem] order-2 lg:order-1 flex gap-4   flex-wrap justify-start mb-5">
            <div className="flex items-center mx-4">
              <Avatar.Group>
                <Avatar src={Avatar1} />
                <Avatar src={Avatar2} />
                <Avatar src={Avatar3} />
              </Avatar.Group>
              <span className="dark:text-white">
                +{digitsEnToFa(`${landingReportInfo.studentCount}`)} دانشجوی
                فعال در دوره
              </span>
            </div>
            <div className="flex relative right-4 lg:right-0 items-center mx-4">
              <Avatar.Group>
                <Avatar src={Avatar4} />
                <Avatar src={Avatar5} />
                <Avatar src={Avatar6} />
              </Avatar.Group>
              <span className="dark:text-white">
                +{digitsEnToFa(`${landingReportInfo.teacherCount}`)} اساتید برتر
                جهان
              </span>
            </div>
          </div>
          <div className="w-72 order-1 lg:order-2 justify-center flex flex-wrap my-5">
            <div>
              <div className=" text-4xl font-bold mb-4 dark:text-white">
                آموزش مدرن
              </div>
              <h1 className=" text-4xl font-bold mb-4 dark:text-white">
                پیشرفت سریع
              </h1>
            </div>
            <div>
              <p className=" text-base pt-4 dark:text-gray-200 ">
                آکادمی آموزش تخصصی برنامه نویسی بحر
              </p>
              <p className=" text-base mb-6 dark:text-gray-200">
                از کودکان تا بزرگسال
              </p>
            </div>
          </div>
          <div className="w-72 flex order-3 flex-wrap flex-col">
            <div>
              <h3 className="lg:flex justify-center text-base/6 mr-2 dark:text-white">
                همین حالا
                <br />
                شروع کن به یادگیری!
              </h3>
              <h3 className="mr-2 dark:text-white"></h3>
            </div>
            <Link to={"/courses"}>
              <button className="mb-8 mt-2 text-white rounded-full bg-gray-900 dark:bg-blue-500 px-5 py-1.5">
                جدیدترین دوره‌ها
              </button>
            </Link>
          </div>
        </div>

        {/* Right side content (Course icons timeline) */}

        <div className="flex justify-center w-full items-center">
          <div className="relative w-full">
            <div className="absolute bottom-1 w-full h-1 bg-gray-300 overflow-hidden">
              <div className="absolute z-10 w-full h-1  bg-blue-500"></div>
            </div>
            <div className="flex justify-around  items-center relative">
              {/* <div className="flex justify-between items-center relative">
                {pics.map((Item, Index) => (
                  <HeroItem key={Index} Item={Item} />
                ))}
              </div> */}
              <div className="flex flex-col items-center">
                <img src={Figma} alt="Figma" className="size-28" />
                <div className="flex items-center justify-center size-3.5 rounded-full z-20 bg-blue-500">
                  <div className="size-1.5 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img src={ReactPic} alt="React" className="size-28" />
                <div className="flex items-center justify-center size-3.5 rounded-full z-20 bg-blue-500">
                  <div className="size-1.5 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img src={JavaScript} alt="JavaScript" className="size-28" />
                <div className="flex items-center justify-center size-3.5 rounded-full z-20 bg-blue-500">
                  <div className="size-1.5 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img src={CSS3} alt="CSS3" className="size-28 " />
                <div className="flex items-center justify-center size-3.5 rounded-full z-20 bg-blue-500">
                  <div className="size-1.5 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img src={HTML5} alt="HTML5" className="size-28" />
                <div className="flex items-center justify-center size-3.5 z-20   rounded-full bg-blue-500">
                  <div className="size-1.5 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
