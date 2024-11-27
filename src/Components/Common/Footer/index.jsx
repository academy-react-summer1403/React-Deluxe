import React from "react";
import { FooterItems } from "./FooterItems";
import { CiTwitter } from "react-icons/ci";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { PiTelegramLogoThin } from "react-icons/pi";
import { PiInstagramLogoLight } from "react-icons/pi";
import AcademyLogo from "../../../assets/LandingAcademy/AcademyLogo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between  px-4 lg:flex-row dark:bg-[#041124]  border-t-1 py-12">
      <div className="hidden md:flex justify-center  items-center space-x-4">
        <img src={AcademyLogo} alt="AcademyLogo" className="size-10" />
        <h1 className="text-xl font-bold text-cyan-500">آکادمی کد نویسی بحر</h1>
      </div>
      <ul className="flex flex-wrap justify-between gap-10 mt-3 text-black dark:text-white w-auto mx-5">
        <FooterItems Item="خانه" link="/" />
        <FooterItems Item="دوره" link="/courses" />
        <FooterItems Item="بلاگ ها" />
        <FooterItems Item="اساتید" />
        <FooterItems Item="درباره ما" />
        <FooterItems Item="ارتباط باما" />
        <FooterItems Item="خدمات ما" />
      </ul>
      <div className="flex md:justify-center justify-between  gap-4 mt-4">
        <img src={AcademyLogo} alt="" className="md:hidden size-10" />
        <div className="flex gap-5 text-3xl dark:text-white">
          <i>
            <CiTwitter />
          </i>
          <i>
            <PiYoutubeLogoThin />
          </i>
          <i>
            <PiTelegramLogoThin />
          </i>
          <i>
            <PiInstagramLogoLight />
          </i>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
