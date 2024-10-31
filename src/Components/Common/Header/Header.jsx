import React from "react";
import HeaderItems from "./HeaderItems";
import { PiBellThin } from "react-icons/pi";
import DarkModeToggle from "../DarkMode";
import { MenuWithToggle } from "./HeaderItems/MenuToggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-transparent dark:bg-[#041124] p-4 sticky top-0 z-10 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/8978/2e65/1551396a2baebe523401d4b33d0ab02a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KQ~dcIIM~JdW9LpmW5k993TDj8dn8ZkN1Qtttuy0-aSHkPk1sIyxi2ojMCsPG8vcb2~g8uXnxbCULxQJadpQ2JwI7Dwwxpp4Wm-8hhU8GpNvno0ez-2K9VQGnYe~CrZ98sZ5XUYXmAXY7jDzgH7HPYtrW9G5L7F~9KM9PKI~bFmNq5CdwiOSQV5h5afOc2RATwQZFEMpzuDfiLxh2Jo5A-IJcbTalKpbonbw~-ujm7ivgBYsdWTqgrvF6PRGappVjgHwdWZlhcLcfWHliNwBwEGJrafUpFwxFPrl1S6XiWrCc6uvAP8O7OVF9rTsLeuddKBVEjlCZKSpz8HWAImLkw__"
            alt=""
            className="size-10"
          />
          <h1 className="hidden sm:block text-xl font-bold text-cyan-500">
            آکادمی کد نویسی بحر
          </h1>
        </div>
        <div className="hidden lg:flex flex-nowrap items-center ml-10 rounded-full bg-black dark:bg-white p-1 pr-4">
          <nav>
            <ul className="flex  justify-between text-white mb-0 !items-center dark:text-black w-72">
              <HeaderItems Item="خانه" link="/" />
              <HeaderItems Item="دوره ها" link="/courses" />

              <HeaderItems Item="بلاگ ها" link="/blogs" />
              <HeaderItems Item="درباره ما" link="/aboutus" />
            </ul>
          </nav>
          <Link to={"/auth/signup"} className="space-x-2">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full mr-10">
              ثبت نام یا ورود
            </button>
          </Link>
        </div>
        <div className="flex">
          <div className="flex  items-center justify-end space-x-2 pr-2 gap-1 rounded-full border border-gray-300  h-11">
            {/* Down Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            {/* Avatar */}
            <Link to={"/dashboard"}>
              <div className="size-8 rounded-full overflow-hidden">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_27_187)">
                    <rect width="40" height="40" rx="20" fill="#4354ED" />
                    <path
                      d="M37.6375 34.3234C37.4244 32.6415 37.5076 29.6008 39.6125 29.6008C40.5417 29.6008 41.351 30.3501 41.351 31.4425C41.351 32.3351 41.361 32.8247 41.361 33.574C41.361 35.6822 39.2395 36.1218 39.2395 36.1218L37.6342 34.3234H37.6375Z"
                      fill="#FF6DBA"
                    />
                    <path
                      d="M20.6396 19.3197C21.4322 12.1725 30.148 5.19183 33.4918 7.86287C35.6899 9.61802 26.6244 12.2558 23.0641 18.8434L20.6396 19.3164V19.3197Z"
                      fill="#FF6DBA"
                    />
                    <path
                      d="M21.4349 19.2863C22.4507 13.3947 29.9542 8.01268 30.8268 9.01182C31.6195 9.92104 24.2791 13.0983 22.3808 18.9766L21.4349 19.2863Z"
                      fill="#FFA8D8"
                    />
                    <path
                      d="M11.8404 21.0082C11.3075 19.9624 10.8079 18.7734 12.8162 17.0682C14.8245 15.363 17.5288 13.3847 19.4172 14.8668C21.3855 14.2773 22.3047 15.4296 23.184 17.5445L11.8404 21.0082Z"
                      fill="#433D83"
                    />
                    <path
                      d="M11.393 22.1439C10.7835 21.0882 11.0999 20.2722 15.1165 18.7868C18.3004 17.6078 21.804 16.4688 23.2928 16.6919C23.6824 16.7486 24.0055 16.9084 24.1887 17.3947C24.595 18.4771 24.6549 18.9567 24.6549 18.9567L11.393 22.1439Z"
                      fill="#FFC200"
                    />
                    <path
                      d="M16.8658 20.6452C15.9932 11.6296 7.47386 5.93119 5.10257 8.03271C3.39404 9.54475 12.7427 15.8893 14.8009 21.1881L16.8658 20.6452Z"
                      fill="#FF6DBA"
                    />
                    <path
                      d="M16.0694 20.6784C15.1668 14.9034 9.47175 9.24495 8.5925 10.2374C7.90643 11.0134 13.6315 15.3397 15.3833 20.9216L16.0694 20.6751V20.6784Z"
                      fill="#FFA8D8"
                    />
                    <path
                      d="M36.3094 34.4898C37.1053 33.7005 37.9113 33.887 38.5807 34.5764C39.2502 35.2658 39.9063 36.4414 39.2568 37.1342C38.6074 37.8269 37.7681 37.9835 37.7681 37.9835L36.306 34.4898H36.3094Z"
                      fill="#FFC200"
                    />
                    <path
                      d="M25.7515 33.3543C27.1103 32.7848 28.8987 33.7406 31.5165 36.0153C34.8869 34.047 35.986 33.8305 36.9818 35.0195C37.9743 36.2118 39.6462 38.7863 35.5197 40.8178C31.3966 42.8494 28.2526 42.6496 26.5841 38.7763C25.172 35.4991 25.7515 33.3543 25.7515 33.3543Z"
                      fill="#433D83"
                    />
                    <path
                      d="M25.9179 33.1077C27.3799 34.4765 31.0668 40.7012 29.1151 44.2848C28.459 45.4904 21.928 46.9658 17.2087 45.96C12.4894 44.9542 15.7832 35.2326 15.7832 35.2326L25.9212 33.1111L25.9179 33.1077Z"
                      fill="#FFC200"
                    />
                    <path
                      d="M24.8328 45.0676C24.8328 45.0676 24.8195 45.0676 24.8095 45.0676C24.6363 45.0542 24.5031 44.9044 24.5164 44.7312C24.7096 41.897 24.0868 39.3425 22.6713 37.1377C22.5781 36.9912 22.618 36.7947 22.7679 36.7014C22.9144 36.6082 23.1109 36.6481 23.2042 36.798C24.6962 39.1194 25.349 41.8037 25.1458 44.7778C25.1359 44.9443 24.996 45.0742 24.8295 45.0742L24.8328 45.0676Z"
                      fill="#FFE535"
                    />
                    <path
                      d="M29.6023 43.1724C28.733 41.4439 27.7772 40.4081 26.6249 39.3157C26.4383 39.1359 26.4184 39.0892 26.6249 38.7329C26.8313 38.3898 26.9912 38.4098 27.2843 38.603C28.41 39.3523 29.2426 40.5713 29.7622 41.5072C29.7888 42.09 29.7388 42.6495 29.6023 43.1724Z"
                      fill="#433D83"
                    />
                    <path
                      d="M16.9352 35.3493C18.9235 36.002 22.5338 37.3908 22.9401 37.2277C23.2931 37.0878 25.1382 34.8397 25.4013 33.3177L16.9352 35.3493Z"
                      fill="#433D83"
                    />
                    <path
                      d="M19.2072 34.7831C19.2072 34.7831 22.1514 35.8788 22.3945 35.7789C22.6376 35.679 24.0597 34.2569 24.0597 33.4842L19.2072 34.7831Z"
                      fill="#FF2EA1"
                    />
                    <path
                      d="M16.0962 35.7821C14.0446 36.1285 13.5184 36.5448 12.7824 38.3599C8.87909 41.0276 7.88328 43.0026 11.1505 46.0133C13.4918 48.1715 14.3344 48.2814 15.7732 46.2531C16.7423 44.8909 17.172 44.0417 16.8289 43.1724C16.6624 42.7494 15.8831 41.9102 15.8831 41.9102C15.8831 41.9102 16.8389 40.7378 17.0654 39.5156C17.5117 37.121 16.0929 35.7821 16.0929 35.7821H16.0962Z"
                      fill="#433D83"
                    />
                    <path
                      d="M23.8163 18.6936C20.4292 19.1432 15.58 20.1157 12.3128 21.5311C10.3012 22.4037 8.92907 24.3088 9.4453 26.4103C9.96152 28.5118 12.0864 29.6608 14.1912 29.1446L25.6946 26.307C27.7962 25.7875 29.0817 23.6627 28.5622 21.5611C28.0426 19.4596 26.2608 18.3705 23.8163 18.6936Z"
                      fill="#FF6DBA"
                    />
                    <path
                      d="M26.0783 25.2246L13.3459 28.3652C11.2444 28.8848 9.95881 31.0096 10.4784 33.1111C10.9979 35.2127 12.8064 36.325 15.3941 35.952C20.2133 35.256 24.1233 34.41 27.9567 32.8347C30.4678 31.8023 31.3438 30.1903 30.8242 28.0888C30.3047 25.9873 28.1798 24.7017 26.0783 25.2212V25.2246Z"
                      fill="#FF6DBA"
                    />
                    <path
                      d="M19.1517 25.9495C19.3331 25.6813 19.0628 25.1816 18.5478 24.8332C18.0329 24.4848 17.4684 24.4198 17.287 24.6879C17.1056 24.956 17.376 25.4558 17.8909 25.8042C18.4059 26.1526 18.9703 26.2176 19.1517 25.9495Z"
                      fill="#2F2F2F"
                    />
                    <path
                      d="M24.6247 24.1719C24.9186 23.624 24.9256 23.0558 24.6403 22.9028C24.355 22.7497 23.8855 23.0698 23.5917 23.6177C23.2978 24.1656 23.2908 24.7337 23.5761 24.8868C23.8613 25.0398 24.3309 24.7197 24.6247 24.1719Z"
                      fill="#2F2F2F"
                    />
                    <path
                      d="M23.6294 26.2636C23.1864 25.9606 22.164 26.8398 22.164 26.8398C22.164 26.8398 20.9184 26.5667 20.5987 27.013C20.3755 27.3227 20.7052 27.9222 21.3147 28.3352C21.5545 28.4984 22.1307 28.7748 22.6103 28.6549C23.0899 28.535 23.4695 28.0221 23.6061 27.769C23.9558 27.1196 23.9425 26.4801 23.6261 26.2636H23.6294Z"
                      fill="#2F2F2F"
                    />
                    <path
                      d="M22.6141 28.655C22.9672 28.5684 23.2636 28.2686 23.4534 28.0155C23.0837 27.6691 22.4143 27.426 21.7016 27.426C21.2853 27.426 20.9256 27.5093 20.6558 27.6458C20.789 27.8823 21.0188 28.1321 21.3219 28.3352C21.5617 28.4984 22.1379 28.7749 22.6175 28.655H22.6141Z"
                      fill="#FF2EA1"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_27_187">
                      <rect width="40" height="40" rx="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Link>
          </div>
          <div className="items-center relative hidden lg:flex size-11 justify-center border-solid dark:bg-white border border-gray-300 rounded-full">
            <PiBellThin />
            <span className="absolute bottom-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
              ۲
            </span>
          </div>
          <div className="hidden items-center lg:flex size-11 justify-center bg-black  dark:bg-white text-white dark:text-black rounded-full">
            <DarkModeToggle />
          </div>
          <div className="items-center  lg:hidden flex size-11 justify-center bg-black dark:bg-white mr-2 text-white dark:text-black rounded-full">
            <MenuWithToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
