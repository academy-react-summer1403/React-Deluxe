import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { CiTwitter } from "react-icons/ci";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { PiTelegramLogoThin } from "react-icons/pi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { Link } from "react-router-dom";
const MenuWithToggle = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="">
      {/* Button to toggle menu */}
      <button
        onClick={toggleMenu}
        className="dark:text-black text-white p-3 rounded-full "
      >
        <FiMenu />
      </button>

      {isMenuVisible && (
        <div className="absolute top-0 z-10 left-0 mt-2 w-full bg-gray-800 shadow-lg rounded-md">
          <div className="w-full flex justify-between">
            <div className="flex flex-nowrap justify-start w-full mb-6">
              <img
                src="https://s3-alpha-sig.figma.com/img/8978/2e65/1551396a2baebe523401d4b33d0ab02a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KQ~dcIIM~JdW9LpmW5k993TDj8dn8ZkN1Qtttuy0-aSHkPk1sIyxi2ojMCsPG8vcb2~g8uXnxbCULxQJadpQ2JwI7Dwwxpp4Wm-8hhU8GpNvno0ez-2K9VQGnYe~CrZ98sZ5XUYXmAXY7jDzgH7HPYtrW9G5L7F~9KM9PKI~bFmNq5CdwiOSQV5h5afOc2RATwQZFEMpzuDfiLxh2Jo5A-IJcbTalKpbonbw~-ujm7ivgBYsdWTqgrvF6PRGappVjgHwdWZlhcLcfWHliNwBwEGJrafUpFwxFPrl1S6XiWrCc6uvAP8O7OVF9rTsLeuddKBVEjlCZKSpz8HWAImLkw__"
                alt=""
                className="size-10 pr-2 mt-1"
              />
              <h1 className="text-blue-400 text-xl pr-2 pt-4">
                آکادمی کدنویسی بحر
              </h1>
            </div>
            <button
              onClick={toggleMenu}
              className="text-white text-2xl pl-6 rounded-full border-0 "
            >
              <RxCross1 />
            </button>
          </div>

          {/* Menu Links */}
          <div>
            <div className="space-y-6 w-auto mx-3">
              <Link
                to={"/"}
                className="text-white text-right text-2xl block border-b font-extrabold border-gray-400 pb-2 hover:text-white"
              >
                خانه
              </Link>
              <Link
                to={"/courses"}
                className="text-white text-right text-2xl block border-b font-extrabold border-gray-400 pb-2 hover:text-white"
              >
                دوره ها
              </Link>
              <a
                href="#"
                className="text-white text-right text-2xl block border-b font-extrabold border-gray-400 pb-2 hover:text-white"
              >
                بلاگ ها
              </a>
              <a
                href="#"
                className="text-white text-right text-2xl block border-b font-extrabold border-gray-400 pb-2 hover:text-white"
              >
                درباره ما
              </a>
              <a
                href="#"
                className="text-white text-right text-2xl block border-b font-extrabold border-gray-400 pb-2 hover:text-white"
              >
                ارتباط باما
              </a>
            </div>

            <div className=" mt-20 mx-3 border-t flex justify-center gap-5 text-2xl text-white pt-2">
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

          {/* Social Icons */}
          <div className="w-full flex justify-center space-x-4 mt-6">
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export { MenuWithToggle };
