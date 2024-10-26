import React from "react";
import StudentDashboard from "./StudentDashboard";

const StudentPanelHolder = () => {
  return (
    <div className="  pb-4 pl-5 w-[395px] sm:min-w-[690.4px] lg:min-w-[1024px] xl:w-[1040px] bg-gray-950">
      <StudentDashboard />
    </div>
  );
};

export { StudentPanelHolder };
