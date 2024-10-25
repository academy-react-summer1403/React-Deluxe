import React, { useState, useEffect } from "react";

const WelcomeHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex justify-between items-start p-2  dark:bg-indigo-900 bg-white dark:text-white rounded-xl ">
      {/* Welcome and Date/Time Section */}
      <div className="flex flex-col items-start">
        <div className="flex gap-5 items-center space-x-2">
          <h2 className="text-xl font-semibold"> سلام پارسا، روزت بخیر 👋</h2>{" "}
          <p className="text-gray-500 hidden dark:text-gray-50 text-xs mt-1">
            امیدوارم امروز روز خوبی رو داشته باشید
          </p>
        </div>

        {/* Date and Time */}
        <div className="flex mt-4 space-x-8 gap-20 leading-3 dark:text-gray-50 text-gray-500 text-lg">
          {" "}
          <div className="flex items-center gap-2  space-x-1">
            <svg
              className="bg-gray-50 dark:bg-gray-400 size-10 rounded-full p-2"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
                stroke="#2F2F2F"
                stroke-width="1.5"
              />
              <path
                d="M12.0078 11.0082C11.1794 11.0082 10.5078 11.6798 10.5078 12.5082C10.5078 13.3366 11.1794 14.0082 12.0078 14.0082C12.8362 14.0082 13.5078 13.3366 13.5078 12.5082C13.5078 11.6798 12.8362 11.0082 12.0078 11.0082ZM12.0078 11.0082V7.49902M15.0147 15.5198L13.0661 13.5712"
                stroke="#2F2F2F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>
              <p>ساعت </p>
              <p className="font-bold text-black dark:text-gray-50">
                {formatTime(currentTime)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2    space-x-1">
            <svg
              className="bg-gray-50 dark:bg-gray-400 size-10 rounded-full p-2 "
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2.5V4.5M6 2.5V4.5"
                stroke="#2F2F2F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9955 13.5H12.0045M11.9955 17.5H12.0045M15.991 13.5H16M8 13.5H8.00897M8 17.5H8.00897"
                stroke="#2F2F2F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 8.5H20.5"
                stroke="#2F2F2F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.5 12.7432C2.5 8.38594 2.5 6.20728 3.75212 4.85364C5.00424 3.5 7.01949 3.5 11.05 3.5H12.95C16.9805 3.5 18.9958 3.5 20.2479 4.85364C21.5 6.20728 21.5 8.38594 21.5 12.7432V13.2568C21.5 17.6141 21.5 19.7927 20.2479 21.1464C18.9958 22.5 16.9805 22.5 12.95 22.5H11.05C7.01949 22.5 5.00424 22.5 3.75212 21.1464C2.5 19.7927 2.5 17.6141 2.5 13.2568V12.7432Z"
                stroke="#2F2F2F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 8.5H21"
                stroke="#2F2F2F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="">
              <p>تاریخ</p>
              <p className="font-bold text-black dark:text-white">
                {" "}
                {formatDate(currentTime)}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bio Section */}
      <div className="flex flex-col justify-center w-96">
        <p className="text-gray-700 hidden xl:block dark:text-gray-100 text-base">
          سلام ، من پارسام
        </p>
        <p className="text-sm hidden xl:block text-gray-500 dark:text-gray-50">
          اینم بیو پروفایلمه واقعا نمیدونم چی بنویسم خودتون بیایید منو بشناسید
          حال ندارم بخدا خستم
        </p>
      </div>
    </div>
  );
};

export { WelcomeHeader };
