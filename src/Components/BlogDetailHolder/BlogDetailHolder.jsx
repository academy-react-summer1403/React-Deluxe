import React, { useEffect } from "react";
import { BlogInfo } from "./BlogInfo/BlogInfo";
import { CourseDesc } from "../CourseDetailHolder/CourseDesc/CourseDesc";
import { CourseComment } from "../CourseDetailHolder/CourseComments/CourseComments";
import { CourseRelated } from "../CourseDetailHolder/CourseRelated/CourseRelated";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useQueryShortcut } from "../../core/services/api/ReactQuery/useQueryShortcut";
import { getQuery } from "../../core/services/api/ReactQuery/getQuery";

const BlogDetailHolder = () => {
  const queryClient = useQueryClient();
  const { blogId } = useParams();

  getQuery("BlogDetailById", `/News/${blogId}`);
  // getQuery("BlogCommentsById", `/News/GetNewsComments?NewsId=${blogId}`);

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      queryClient.clear([
        "BlogDetailById",
        // "BlogCommentsById"
      ]);
    };
  }, []);

  const data = useQueryShortcut("BlogDetailById");
  console.log(data);

  return (
    <>
      <BlogInfo data={data?.detailsNewsDto} />
      <CourseDesc data={data?.detailsNewsDto} />
      <CourseComment dataBlog={data?.commentDtos} />
      <CourseRelated />
      {/* <div className="w-10 h-10 bg-red-600 sm:bg-blue-500 md:bg-yellow-500 xl:bg-purple-700 "></div> */}
    </>
  );
};

export { BlogDetailHolder };
