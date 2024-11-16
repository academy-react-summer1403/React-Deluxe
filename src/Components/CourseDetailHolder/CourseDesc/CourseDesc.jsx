// CourseDescription.jsx
import { useMutation } from "@tanstack/react-query";
import { Rate } from "antd";
import React, { useEffect, useState } from "react";
import { IoIosLink } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { RateCourse } from "../../../core/services/api/Courses/RateCourse.api";
import { toast } from "react-toastify";
import { RateBlog } from "../../../core/services/api/Blogs/Rate/RateBlog.api";

const CopyLink = () => {
  const [copied, setCopied] = useState(false);

  const { pathname } = useLocation();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="mr-5 -mt-1">
      <button
        onClick={copyToClipboard}
        className="border-2 border-[#3772FF] dark:border-indigo-800 text-[#3772FF] dark:text-indigo-300 text-lg/4 line-heith px-4 py-2 rounded-full"
      >
        {copied ? (
          <div className="flex">
            <IoIosLink className="-scale-x-[1] ml-2 text-[#3772FF] dark:text-white" />
            <span className="text-[#3772FF] dark:text-white">کپی شد!</span>
          </div>
        ) : (
          <div className="flex">
            <IoIosLink className="-scale-x-[1] ml-2 text-[#3772FF] dark:text-white" />
            <span className="text-[#3772FF] dark:text-white">
              کپی کردن لینک صفحه
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

const CourseDesc = ({ data }) => {
  const { pathname } = useLocation();

  const mutation = useMutation({
    mutationKey: ["CourseRating"],
    mutationFn: RateCourse,
    onSuccess: () => {
      toast.success("امتیاز با موفقیت ثبت شد!", {
        position: "top-center",
      });
    },
    onError: (error) => {
      toast.error(error.response.data.ErrorMessage[0], {
        position: "top-center",
      });
    },
  });

  const blogMutation = useMutation({
    mutationKey: ["BlogRating"],
    mutationFn: RateBlog,
    onSuccess: () => {
      toast.success("امتیاز با موفقیت ثبت شد!", {
        position: "top-center",
      });
    },
    onError: (error) => {
      toast.error(error.response.data.ErrorMessage[0], {
        position: "top-center",
      });
    },
  });

  const handleRate = async (Rate) => {
    // console.log(data.courseId);
    {
      pathname.includes("courseDetails")
        ? await mutation.mutateAsync({ Rate: Rate, courseId: data.courseId })
        : await blogMutation.mutateAsync({ Rate: Rate, blogId: data.id });
    }
  };

  console.log("data", data);

  return (
    <div className="p-6 mb-6 bg-white rounded-lg dark:bg-[#041124]">
      <h3 className="mb-4 text-xl font-bold text-gray-500 dark:text-gray-300">
        توضیحات دوره
      </h3>
      <p className="leading-relaxed text-gray-800 dark:text-gray-200">
        {data?.miniDescribe}
        <br />
        <br />
        {data?.describe}
        <br />
        <br />
      </p>
      <div className="flex flex-col justify-start gap-3 mt-5 lg:flex-row">
        <div className="mb-6 lg:mb-0">
          <span className="text-[#3772FF] dark:text-white">امتیاز بدید</span>
          {data && (
            <Rate
              className="mr-4"
              defaultValue={
                data?.currentUserSetRate == true
                  ? data?.currentUserRateNumber
                  : 0
              }
              onChange={handleRate}

              // value={
              //   data?.currentUserSetRate == true ? data?.currentUserRateNumber : 0
              // }
            />
          )}
        </div>
        {pathname.includes("courseDetails") ? <CopyLink /> : ""}
      </div>
    </div>
  );
};

export { CourseDesc };
