import React from "react";
import { FooterItems } from "./FooterItems";
import { CiTwitter } from "react-icons/ci";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { PiTelegramLogoThin } from "react-icons/pi";
import { PiInstagramLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-evenly  px-4 lg:flex-row dark:bg-indigo-950  border-t-1 py-12">
      <div className="hidden md:flex justify-center  items-center space-x-4">
        <img
          src="https://s3-alpha-sig.figma.com/img/8978/2e65/1551396a2baebe523401d4b33d0ab02a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KQ~dcIIM~JdW9LpmW5k993TDj8dn8ZkN1Qtttuy0-aSHkPk1sIyxi2ojMCsPG8vcb2~g8uXnxbCULxQJadpQ2JwI7Dwwxpp4Wm-8hhU8GpNvno0ez-2K9VQGnYe~CrZ98sZ5XUYXmAXY7jDzgH7HPYtrW9G5L7F~9KM9PKI~bFmNq5CdwiOSQV5h5afOc2RATwQZFEMpzuDfiLxh2Jo5A-IJcbTalKpbonbw~-ujm7ivgBYsdWTqgrvF6PRGappVjgHwdWZlhcLcfWHliNwBwEGJrafUpFwxFPrl1S6XiWrCc6uvAP8O7OVF9rTsLeuddKBVEjlCZKSpz8HWAImLkw__"
          alt=""
          className="size-10"
        />
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
        <img
          src="https://s3-alpha-sig.figma.com/img/8978/2e65/1551396a2baebe523401d4b33d0ab02a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KQ~dcIIM~JdW9LpmW5k993TDj8dn8ZkN1Qtttuy0-aSHkPk1sIyxi2ojMCsPG8vcb2~g8uXnxbCULxQJadpQ2JwI7Dwwxpp4Wm-8hhU8GpNvno0ez-2K9VQGnYe~CrZ98sZ5XUYXmAXY7jDzgH7HPYtrW9G5L7F~9KM9PKI~bFmNq5CdwiOSQV5h5afOc2RATwQZFEMpzuDfiLxh2Jo5A-IJcbTalKpbonbw~-ujm7ivgBYsdWTqgrvF6PRGappVjgHwdWZlhcLcfWHliNwBwEGJrafUpFwxFPrl1S6XiWrCc6uvAP8O7OVF9rTsLeuddKBVEjlCZKSpz8HWAImLkw__"
          alt=""
          className="md:hidden size-10"
        />
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
