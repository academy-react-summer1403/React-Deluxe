import React from "react";
import { WelcomeHeader } from "./DashboardItems/WelcomeHeader";
import { MyCourses } from "./DashboardItems/MyCourses";
import { MyReserves } from "./DashboardItems/MyReserves";
import { MyComments } from "./DashboardItems/MyComments";
import { UserProgress } from "./DashboardItems/Progress";

const index = () => {
  return (
    <div className="bg-white dark:bg-indigo-950 p-8 space-y-8 rounded-3xl ">
      <WelcomeHeader />

      <div className="flex flex-col lg:flex-row justify-between space-y-8 gap-6 lg:space-y-0">
        <MyCourses />
        <UserProgress />
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-6 space-y-8 lg:space-y-0">
        <MyReserves />
        <MyComments />
      </div>
    </div>
  );
};

export default index;
