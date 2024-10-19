import React from "react";
import { BlogInfo } from "./BlogInfo/BlogInfo";
import { CourseDesc } from "../CourseDetailHolder/CourseDesc/CourseDesc";
import { CourseComment } from "../CourseDetailHolder/CourseComments/CourseComments";
import { CourseRelated } from "../CourseDetailHolder/CourseRelated/CourseRelated";

const BlogDetailHolder = () => {
  return (
    <>
      <BlogInfo />
      <CourseDesc />
      <CourseComment />
      <CourseRelated />
      {/* <div className="w-10 h-10 bg-red-600 sm:bg-blue-500 md:bg-yellow-500 xl:bg-purple-700 "></div> */}
    </>
  );
};

export { BlogDetailHolder };
