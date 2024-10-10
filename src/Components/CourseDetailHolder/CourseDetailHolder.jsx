import React from "react";
import { CourseInfo } from "./CourseInfo/CourseInfo";
import { CourseDesc } from "./CourseDesc/CourseDesc";
import { CourseComment } from "./CourseComments/CourseComments";
import { CourseRelated } from "./CourseRelated/CourseRelated";

const CourseDetailHolder = () => {
  return (
    <>
      <CourseInfo />
      <CourseDesc />
      <CourseComment />
      <CourseRelated />
      {/* <div className="w-10 h-10 bg-red-600 sm:bg-blue-500 md:bg-yellow-500 xl:bg-purple-700 "></div> */}
    </>
  );
};

export { CourseDetailHolder };
