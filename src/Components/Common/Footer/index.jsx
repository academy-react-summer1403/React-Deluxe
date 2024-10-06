import React from "react";
import { FooterItems } from "./FooterItems";
import { CiTwitter } from "react-icons/ci";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { PiTelegramLogoThin } from "react-icons/pi";
import { PiInstagramLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="flex justify-center gap-36   border-t-2 py-12">
      <div className="flex items-center space-x-4">
        <img src="" alt="" className="size-10" />
        <h1 className="text-xl font-bold text-cyan-500">آکادمی کد نویسی بحر</h1>
      </div>
      <ul className="flex justify-between gap-10 mt-3 text-black w-auto">
        <FooterItems Item="خانه" />
        <FooterItems Item="دوره" />
        <FooterItems Item="بلاگ ها" />
        <FooterItems Item="اساتید" />
        <FooterItems Item="درباره ما" />
        <FooterItems Item="ارتباط باما" />
        <FooterItems Item="خدمات ما" />
      </ul>
      <div className="flex gap-4 mt-4">
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
    </footer>
  );
};

export { Footer };
