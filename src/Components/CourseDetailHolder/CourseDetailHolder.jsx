import React from "react";
import { CourseInfo } from "./CourseInfo";
import { CourseDesc } from "./CourseDesc";
import { CourseComment } from "./CourseComments";
import { CourseRelated } from "./CourseRelated";

const CourseDetailHolder = () => {
  return (
    <>
      <CourseInfo />
      <CourseDesc />
      <CourseComment />
      <CourseRelated />
      <div className="w-10 h-10 bg-red-600 sm:bg-blue-500 md:bg-yellow-500 xl:bg-purple-700 "></div>
    </>
  );
};

export { CourseDetailHolder };
