import React from "react";
import { Outlet } from "react-router-dom";
import { StudentHeader } from "../../Components/Common/Header/StudentHeader";
import { StudentMenu } from "../../Components/Common/StudentMenu/StudentMenu";

const StudentPanelLayout = () => {
  return (
    <div className="flex justify-center h-screen  dark:bg-indigo-950">
      <div>
        <StudentMenu />
      </div>
      <div className="flex-col p-0 flex w-[1040px]">
        <div>
          <StudentHeader />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export { StudentPanelLayout };
