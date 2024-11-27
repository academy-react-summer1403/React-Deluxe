import React from "react";
import { Outlet } from "react-router-dom";
import { StudentHeader } from "../../Components/Common/Header/StudentHeader";
import { StudentMenu } from "../../Components/Common/StudentMenu/StudentMenu";

const StudentPanelLayout = () => {
  return (
    <div className="flex justify-center h-screen dark:bg-[#041124]">
      <div className="w-1/4 hidden xl:block">
        <StudentMenu />
      </div>
      <div className="flex-col p-0 flex w-full h-full">
        <StudentHeader />
        <div className="h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export { StudentPanelLayout };
