import React from "react";
import { WelcomeHeader } from "./DashboardItems/WelcomeHeader";
import { UserProgress } from "./DashboardItems/progress";

const index = () => {
  return (
    <div className="bg-white p-8 space-y-8 rounded-3xl ">
      <WelcomeHeader />

      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row justify-between space-y-8 gap-6 lg:space-y-0">
        {/* My Courses Section (Middle Left) */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-4/5 flex-1">
          <h2 className="text-xl font-semibold">دوره‌های من</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">دوره فیگما</span>
              <span className="text-gray-500 text-sm">
                مدرس: محمدحسین خلیلی‌پور
              </span>
              <span className="bg-pink-500 text-white py-1 px-2 rounded-md">
                پیشرفت
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">دوره جاوااسکریپت</span>
              <span className="text-gray-500 text-sm">
                مدرس: محمدحسین بحرالعلومی
              </span>
              <span className="bg-yellow-500 text-white py-1 px-2 rounded-md">
                کار
              </span>
            </div>
          </div>
        </div>

        {/* States Section (Middle Right) */}
        <UserProgress />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 space-y-8 lg:space-y-0">
        {/* My Reserves Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-3/4 ">
          <h2 className="text-xl font-semibold">رزرو من</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">دوره فیگما</span>
              <span className="text-gray-500 text-sm">
                مدرس: محمدحسین خلیلی‌پور
              </span>
              <span className="bg-green-500 text-white py-1 px-2 rounded-md">
                تایید شده
              </span>
            </div>
          </div>
        </div>

        {/* My Comments Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-1/4 ">
          <h2 className="text-xl font-semibold">نظرات شما</h2>
          <div className="mt-4">
            <p className="text-gray-700">
              دوره خیلی خوبی بود و واقعا لذت بردم.
            </p>
            <p className="text-gray-400 text-sm mt-2">محمدحسین بزچاللو</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">خوب بود ولی نه زیاد</p>
            <p className="text-gray-400 text-sm mt-2">امیرحسین سیاحی</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
