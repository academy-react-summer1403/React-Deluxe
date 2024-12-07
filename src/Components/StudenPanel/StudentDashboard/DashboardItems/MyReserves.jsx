import React from "react";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { getQuery } from "../../../../core/services/api/ReactQuery/getQuery";
import { useQueryShortcut } from "./../../../../core/services/api/ReactQuery/useQueryShortcut";
import { DatePersianizer } from "./../../../../core/utils/DatePersianizer";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const ReserveData = [
  {
    title: " فیگما",
    price: "۴۵۰,۰۰۰ تومان",
    icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
    tag: "طراحی",
    tag2: "پیشرفته",
    state: "تایید نشده",
    teacher: "محمدحسین خلیل پور",
    color: "bg-red-400",
    date: "۲۹ اردیبهشت ۱۴۰۳",
  },
];

const MyReserves = () => {
  getQuery("ReserveCourses", "/SharePanel/GetMyCoursesReserve");
  const data = useQueryShortcut("ReserveCourses");

  return (
    <div className="bg-gray-50 dark:bg-indigo-950 dark:text-white shadow-lg  p-2 rounded-3xl  lg:w-2/3 h-full max-h-[20.5rem] overflow-y-hidden">
      <div className="flex flex-row px-4 justify-between">
        <h2 className="text-base font-semibold">رزرو من</h2>
        <Link to={"/MyReserve"}>
          <div className="flex-row flex gap-2">
            <div className="text-blue-500 dark:text-blue-400">
              مشاهده بیشتر{" "}
            </div>
            <svg
              className="relative top-1"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 1C6.5 1 1.50001 4.68242 1.5 6C1.49999 7.31767 6.5 11 6.5 11"
                stroke="#3772FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>
      <ul className="flex p-2 rounded-xl text-sm text-gray-500  mx-5 dark:bg-[#041124] dark:text-white  bg-gray-100 xl:gap-32 sm:gap-24 gap-12 justify-start">
        <li className="hidden lg:block">#</li>
        <li className=""> نام دوره</li>
        <li className="hidden sm:block">مدرس</li>
        <li className="mr-8">وضعیت</li>
      </ul>
      <div className="mt-4 mx-5 space-y-4 max-h-[9rem] overflow-y-scroll">
        <PerfectScrollbar>
          {data?.map((Reserve) => (
            <div
              key={Reserve.reserveId}
              className="  flex flex-row  relative  items-center rounded-3xl justify-start gap-5 lg:gap-12   "
            >
              <div
                className={`h-12 lg:flex hidden justify-center items-center rounded-xl w-24  mb-4 ${Reserve.color}`}
              >
                <img src={Reserve.icon} alt={""} className={`size-8 `} />
              </div>

              <h3 className=" text-xl  dark:text-white font-semibold mb-2  truncate w-24 ">
                {Reserve.courseName}
              </h3>

              <p className="hidden sm:block dark:text-white text-[12px] w-40 font-bold items-center w-54 mr-3   ">
                {DatePersianizer(Reserve.reserverDate)}
              </p>
              <span
                className={`px-3 py-0 text-base lg:w-40 inline-flex justify-center ${
                  Reserve.accept ? "bg-green-400" : "bg-red-400"
                } text-white rounded-full`}
              >
                {Reserve.accept ? "تایید شد" : "تایید نشد"}
              </span>
              <div className="flex flex-row gap-2">
                <Link to={`/courseDetails/${Reserve.courseId}`}>
                  <BsEye className="text-base" />
                </Link>

                <RxCross1 className="text-red-500" />
              </div>
            </div>
          ))}
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export { MyReserves };
