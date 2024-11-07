import React from "react";
import StudentDashboard from "./StudentDashboard";

const StudentPanelHolder = () => {
  return (
    <div className="pb-4 pl-5 bg-gray-950 h-full flex">
      <StudentDashboard />
    </div>
  );
};

export { StudentPanelHolder };
