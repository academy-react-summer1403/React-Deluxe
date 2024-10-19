import React from "react";
import { WelcomeHeader } from "./DashboardItems/WelcomeHeader";
import { UserProgress } from "./DashboardItems/progress";
import { MyCourses } from "./DashboardItems/MyCourses";
import { MyReserves } from "./DashboardItems/MyReserves";
import { MyComments } from "./DashboardItems/MyComments";

const index = () => {
  return (
    <div className="bg-white dark:bg-indigo-950 p-8 space-y-8 rounded-3xl ">
      <WelcomeHeader />

      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row justify-between space-y-8 gap-6 lg:space-y-0">
        {/* My Courses Section (Middle Left) */}
        <MyCourses />
        {/* States Section (Middle Right) */}
        <UserProgress />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 space-y-8 lg:space-y-0">
        {/* My Reserves Section */}
        <MyReserves />

        {/* My Comments Section */}
        <MyComments />
      </div>
    </div>
  );
};

export default index;
