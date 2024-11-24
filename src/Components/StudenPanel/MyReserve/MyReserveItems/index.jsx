import { ConfigProvider, Pagination } from "antd";
import React, { useState, useEffect } from "react";
import { BsEye } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { myReserve } from "../../../../core/services/api/StudentPanel/MyReserve.api";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/logo (3).png";
import { getRandomColor } from "../../../Common/ColorGenerator";
import { DatePersianizer } from "./../../../../core/utils/DatePersianizer";

const index = () => {
  const [reserveData, setReserveData] = useState([]);

  const getMyReserve = async () => {
    try {
      const result = await myReserve();

      setReserveData(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyReserve();
  }, []);
  return (
    <div className="bg-gray-50 dark:bg-indigo-950  h-[900px] p-2 rounded-3xl flex flex-col gap-24  justify-between flex-1">
      <div>
        <ul className="flex p-2 rounded-xl text-sm text-gray-500  m-5 dark:bg-[#041124] dark:text-white  bg-gray-100 gap-14 sm:gap-20 md:gap-24 lg:gap-24 justify-start">
          <li className="hidden md:block">#</li>
          <li className="w-[121px] md:w-[131px] lg:w-[231px]"> نام دوره</li>
          <li className="mr-2 hidden sm:block">تاریخ برگزاری</li>
          <li className="mr-2 hidden lg:block">تاریخ اتمام</li>
          <li>تایید</li>
        </ul>
        <div className="mt-4 mx-5 space-y-4">
          {reserveData?.map((Reserve, index) => (
            <div
              key={index}
              className="  flex flex-row  relative  items-center rounded-3xl justify-start gap-9    "
            >
              <div
                className={`h-12 hidden md:flex justify-center items-center rounded-xl w-20  mb-4 ${getRandomColor()}`}
              >
                <img
                  src={Reserve.icon ?? Logo}
                  alt={""}
                  className={`size-8 `}
                />
              </div>

              <h3 className=" text-xl dark:text-white font-semibold mb-2  truncate w-[151px] sm:w-[301px]">
                {Reserve.courseName}
              </h3>

              <span
                className={`hidden sm:inline-flex items-center w-[127px] dark:text-white `}
              >
                {Reserve.reserverDate.slice(0, 10)}
              </span>

              <span
                className={`hidden lg:inline-flex items-center w-[125px] dark:text-white `}
              >
                {Reserve.enddate}
              </span>
              <span
                className={`md:px-3 py-0 text-sm sm:text-base ${
                  Reserve.accept === false ? "bg-red-500" : "bg-blue-500"
                }  w-[130px] flex justify-center   text-white rounded-full`}
              >
                {Reserve.accept === false ? (
                  <span>تایید نشد </span>
                ) : (
                  <span>تایید شد </span>
                )}
              </span>
              <div className="flex gap-2">
                <Link to={"/courseDetails"}>
                  <BsEye className="text-base" />
                </Link>

                <RxCross1 className="text-red-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <ConfigProvider direction="rtl" className="mt-10">
          {" "}
          {reserveData.length > 8 && (
            <Pagination align="center" defaultCurrent={1} total={50} />
          )}
        </ConfigProvider>
      </div>
    </div>
  );
};

export default index;
