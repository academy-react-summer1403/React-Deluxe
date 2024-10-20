import React from "react";

const MyComments = () => {
  return (
    <div className="relative flex flex-col bg-gray-100 dark:bg-indigo-900 dark:text-white p-6 rounded-lg shadow-md w-1/4 ">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">نظرات شما</h2>
        <div className="flex-row flex gap-2">
          <div className="text-blue-500 dark:text-blue-400">مشاهده بیشتر </div>
          <svg
            className="relative top-1"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 1C6.5 1 1.50001 4.68242 1.5 6C1.49999 7.31767 6.5 11 6.5 11"
              stroke="#3772FF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="absolute  top-[68px]  w-72 h-1 bg-gray-300 overflow-hidden"></div>
      <div className="flex justify-center">
        <div className=" items-center px-2 z-10 w-32 bg-gray-100 dark:bg-indigo-900 dark:text-white">
          دوره‌ها و بلاگ ها
        </div>
      </div>
    </div>
  );
};

export { MyComments };
