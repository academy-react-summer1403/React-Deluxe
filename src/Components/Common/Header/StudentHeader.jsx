import React from "react";
import { HiOutlineBell } from "react-icons/hi2";

import DarkModeToggle from "../DarkMode";
import { Link } from "react-router-dom";
import { StudentMenuWithToggle } from "./HeaderItems/StudentMenuToggle";

const StudentHeader = () => {
  return (
    <header className="bg-gray-950 min-w-[395px] text-white gap-4 sm:gap-0  p-3 flex items-center h-auto md:justify-between justify-start  ">
      <div className="xl:hidden">
        <StudentMenuWithToggle />
      </div>
      {/* User Profile */}
      <div className="flex items-center ">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_56_1831)">
            <rect width="48" height="48" rx="24" fill="#4354ED" />
            <path
              d="M45.1654 41.1881C44.9097 39.1698 45.0096 35.5209 47.5354 35.5209C48.6504 35.5209 49.6216 36.4202 49.6216 37.731C49.6216 38.8021 49.6336 39.3896 49.6336 40.2888C49.6336 42.8187 47.0878 43.3462 47.0878 43.3462L45.1614 41.1881H45.1654Z"
              fill="#FF6DBA"
            />
            <path
              d="M24.7676 23.1836C25.7188 14.607 36.1778 6.23021 40.1903 9.43545C42.828 11.5416 31.9494 14.7069 27.6771 22.6121L24.7676 23.1796V23.1836Z"
              fill="#FF6DBA"
            />
            <path
              d="M25.7227 23.1436C26.9416 16.0737 35.9459 9.61524 36.993 10.8142C37.9441 11.9053 29.1357 15.718 26.8577 22.7719L25.7227 23.1436Z"
              fill="#FFA8D8"
            />
            <path
              d="M14.209 25.2099C13.5696 23.9549 12.9701 22.5282 15.38 20.4819C17.7899 18.4357 21.0351 16.0617 23.3012 17.8402C25.6632 17.1328 26.7662 18.5156 27.8213 21.0534L14.209 25.2099Z"
              fill="#433D83"
            />
            <path
              d="M13.6714 26.5727C12.94 25.3058 13.3197 24.3267 18.1396 22.5442C21.9603 21.1294 26.1647 19.7626 27.9511 20.0303C28.4187 20.0983 28.8064 20.2901 29.0262 20.8736C29.5138 22.1725 29.5857 22.748 29.5857 22.748L13.6714 26.5727Z"
              fill="#FFC200"
            />
            <path
              d="M20.2397 24.7743C19.1926 13.9556 8.96943 7.11743 6.12388 9.63926C4.07364 11.4537 15.292 19.0671 17.7619 25.4257L20.2397 24.7743Z"
              fill="#FF6DBA"
            />
            <path
              d="M19.2845 24.8142C18.2015 17.8841 11.3674 11.094 10.3123 12.2849C9.48897 13.2161 16.3591 18.4077 18.4613 25.1059L19.2845 24.8102V24.8142Z"
              fill="#FFA8D8"
            />
            <path
              d="M43.5724 41.3878C44.5275 40.4406 45.4947 40.6644 46.298 41.4917C47.1013 42.319 47.8886 43.7298 47.1093 44.561C46.33 45.3923 45.3228 45.5802 45.3228 45.5802L43.5684 41.3878H43.5724Z"
              fill="#FFC200"
            />
            <path
              d="M30.903 40.0252C32.5336 39.3418 34.6798 40.4888 37.8211 43.2184C41.8656 40.8565 43.1845 40.5967 44.3794 42.0234C45.5704 43.4542 47.5767 46.5436 42.6249 48.9815C37.6772 51.4194 33.9044 51.1796 31.9022 46.5316C30.2076 42.599 30.903 40.0252 30.903 40.0252Z"
              fill="#433D83"
            />
            <path
              d="M31.1009 39.7293C32.8554 41.3719 37.2796 48.8415 34.9376 53.1418C34.1503 54.5885 26.313 56.359 20.6499 55.152C14.9868 53.9451 18.9394 42.2791 18.9394 42.2791L31.1049 39.7333L31.1009 39.7293Z"
              fill="#FFC200"
            />
            <path
              d="M29.8003 54.0811C29.8003 54.0811 29.7843 54.0811 29.7723 54.0811C29.5645 54.0651 29.4046 53.8852 29.4206 53.6774C29.6524 50.2763 28.905 47.211 27.2065 44.5652C27.0946 44.3894 27.1425 44.1536 27.3224 44.0417C27.4982 43.9298 27.734 43.9778 27.8459 44.1576C29.6364 46.9432 30.4197 50.1644 30.1759 53.7334C30.1639 53.9332 29.9961 54.0891 29.7963 54.0891L29.8003 54.0811Z"
              fill="#FFE535"
            />
            <path
              d="M35.5233 51.8069C34.4802 49.7326 33.3332 48.4897 31.9504 47.1788C31.7266 46.963 31.7026 46.9071 31.9504 46.4794C32.1982 46.0678 32.39 46.0918 32.7417 46.3236C34.0926 47.2228 35.0917 48.6855 35.7152 49.8086C35.7471 50.508 35.6872 51.1794 35.5233 51.8069Z"
              fill="#433D83"
            />
            <path
              d="M20.3223 42.4192C22.7082 43.2025 27.0405 44.8691 27.5281 44.6732C27.9517 44.5054 30.1658 41.8077 30.4815 39.9813L20.3223 42.4192Z"
              fill="#433D83"
            />
            <path
              d="M23.0508 41.7397C23.0508 41.7397 26.5837 43.0546 26.8755 42.9347C27.1672 42.8148 28.8738 41.1082 28.8738 40.181L23.0508 41.7397Z"
              fill="#FF2EA1"
            />
            <path
              d="M19.3169 42.9386C16.855 43.3542 16.2236 43.8538 15.3403 46.0319C10.6564 49.2332 9.4614 51.6032 13.382 55.216C16.1916 57.8058 17.2027 57.9377 18.9293 55.5038C20.0923 53.8692 20.6078 52.8501 20.1962 51.807C19.9963 51.2994 19.0611 50.2923 19.0611 50.2923C19.0611 50.2923 20.2082 48.8855 20.4799 47.4187C21.0155 44.5452 19.3129 42.9386 19.3129 42.9386H19.3169Z"
              fill="#433D83"
            />
            <path
              d="M28.5794 22.4323C24.5149 22.9718 18.6959 24.1388 14.7753 25.8374C12.3614 26.8845 10.7148 29.1705 11.3342 31.6923C11.9537 34.2142 14.5035 35.593 17.0293 34.9735L30.8335 31.5685C33.3553 30.945 34.898 28.3952 34.2745 25.8734C33.6511 23.3515 31.5129 22.0446 28.5794 22.4323Z"
              fill="#FF6DBA"
            />
            <path
              d="M31.2938 30.2695L16.0149 34.0382C13.4931 34.6617 11.9504 37.2115 12.5739 39.7333C13.1974 42.2552 15.3675 43.59 18.4728 43.1424C24.2559 42.3071 28.9478 41.292 33.5479 39.4016C36.5613 38.1627 37.6124 36.2284 36.9889 33.7065C36.3655 31.1847 33.8156 29.642 31.2938 30.2655V30.2695Z"
              fill="#FF6DBA"
            />
            <path
              d="M22.9834 31.1394C23.2011 30.8176 22.8766 30.2179 22.2587 29.7998C21.6408 29.3818 20.9634 29.3037 20.7457 29.6255C20.528 29.9472 20.8525 30.547 21.4704 30.965C22.0883 31.3831 22.7657 31.4611 22.9834 31.1394Z"
              fill="#2F2F2F"
            />
            <path
              d="M29.5501 29.0062C29.9028 28.3488 29.9111 27.667 29.5688 27.4833C29.2265 27.2997 28.6631 27.6838 28.3104 28.3412C27.9578 28.9987 27.9494 29.6805 28.2917 29.8641C28.634 30.0477 29.1975 29.6637 29.5501 29.0062Z"
              fill="#2F2F2F"
            />
            <path
              d="M28.3556 31.5164C27.8241 31.1527 26.5971 32.2078 26.5971 32.2078C26.5971 32.2078 25.1024 31.8801 24.7187 32.4156C24.451 32.7873 24.8466 33.5067 25.578 34.0023C25.8658 34.1981 26.5572 34.5298 27.1327 34.3859C27.7082 34.242 28.1638 33.6266 28.3276 33.3228C28.7473 32.5435 28.7313 31.7762 28.3516 31.5164H28.3556Z"
              fill="#2F2F2F"
            />
            <path
              d="M27.1371 34.386C27.5607 34.2821 27.9164 33.9224 28.1442 33.6186C27.7006 33.203 26.8973 32.9113 26.042 32.9113C25.5425 32.9113 25.1108 33.0112 24.7871 33.175C24.947 33.4588 25.2227 33.7585 25.5864 34.0023C25.8742 34.1982 26.5656 34.5299 27.1411 34.386H27.1371Z"
              fill="#FF2EA1"
            />
          </g>
          <defs>
            <clipPath id="clip0_56_1831">
              <rect width="48" height="48" rx="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div className="text-right flex flex-col  items-start pr-4">
          <div className="text-sm font-semibold">سید عظیم حسینی</div>
          <div className="text-sm  text-gray-300">دانشجو</div>
        </div>
      </div>

      {/* Center Links */}
      <nav className="sm:flex justify-evenly sm:w-[500px] text-lg">
        <Link className=" pr-5 " to={"/"}>
          صفحه اصلی
        </Link>
        <a className="hidden sm:flex" href="">
          {" "}
          گزارش
        </a>
        <Link className="hidden sm:flex" to={"/aboutUs"} href="">
          ارتباط باما
        </Link>
      </nav>

      <div className="hidden lg:flex gap-2 pl-8">
        {/* Left Icons (Dark Mode and Notifications) */}
        <div className="flex items-center  space-x-4">
          {/* Notification Bell */}
          <div className="relative hidden sm:block">
            <button className="bg-gray-700 dark:text-black dark:bg-white  p-2 rounded-full hover:bg-gray-600">
              <HiOutlineBell className="text-xl font-bold dark:text-black  text-white" />
            </button>
            {/* Notification Badge */}
            <span className="absolute bottom-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
              ۲
            </span>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <div className="hidden items-center lg:flex size-11 justify-center bg-gray-700  dark:bg-white text-white dark:text-black rounded-full">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export { StudentHeader };
