import React, { useEffect } from "react";
import { CourseInfo } from "./CourseInfo/CourseInfo";
import { CourseDesc } from "./CourseDesc/CourseDesc";
import { CourseComment } from "./CourseComments/CourseComments";
import { CourseRelated } from "./CourseRelated/CourseRelated";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getQuery } from "../../core/services/api/ReactQuery/getQuery";
import { FullPageLoading } from "./../Common/Loading/FullPageLoading/FullPageLoading";

const CourseDetailHolder = () => {
  const queryClient = useQueryClient();
  const params = useParams();

  getQuery("CourseDetailById", `/Home/GetCourseDetails?CourseId=${params.id}`);
  getQuery("CourseCommentsById", `Course/GetCourseCommnets/${params.id}`);

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      queryClient.clear(["CourseDetailById", "CourseCommentsById"]);
    };
  }, []);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["CourseDetailById"],
  });

  if (isError) return <div>Error</div>;
  if (isLoading) return <FullPageLoading />;

  // const res = useQueryShortcut("CourseCommentsById");

  // const res = usequery("CourseCommentsById");
  // const dataComments = res?.slice(0, 2);
  // const { data: unSlicedComments } = useQuery({
  //   queryKey: ["CourseCommentsById"],
  // });
  console.log("Course DATAAAAAAAAAAAAAAAH", data);

  return (
    <>
      <CourseInfo data={data} />
      <CourseDesc data={data} />
      <CourseComment />
      <CourseRelated />
      {/* <div className="w-10 h-10 bg-red-600 sm:bg-blue-500 md:bg-yellow-500 xl:bg-purple-700 "></div> */}
    </>
  );
};

export { CourseDetailHolder };
