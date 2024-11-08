import React from "react";
import { WelcomeHeader } from "./DashboardItems/WelcomeHeader";
import { MyCourses } from "./DashboardItems/MyCourses";
import { MyReserves } from "./DashboardItems/MyReserves";
import { MyComments } from "./DashboardItems/MyComments";
import { UserProgress } from "./DashboardItems/Progress";
import { getQuery } from "../../../core/services/api/ReactQuery/getQuery";

const index = () => {
  getQuery("ProfileInfo", "/SharePanel/GetProfileInfo");
  return (
    <div className="bg-white xl:h-max overflow-hidden  xl:mr-0 mr-3   dark:bg-[#041124] p-3 space-y-8 rounded-3xl ">
      <WelcomeHeader />

      <div className="flex flex-row justify-between space-y-8 gap-4 lg:space-y-0">
        <MyCourses />
        <UserProgress />
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-6 space-y-8 lg:space-y-0 h-full">
        <MyReserves />
        <MyComments />
      </div>
    </div>
  );
};

export default index;
