import React from "react";
import StudentDashboard from "./StudentDashboard";

const StudentPanelHolder = () => {
  return (
    <div className="pb-4 pl-5 bg-gray-950 flex h-full">
      <StudentDashboard />
    </div>
  );
};

export { StudentPanelHolder };
