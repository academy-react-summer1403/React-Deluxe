import { ConfigProvider, Pagination } from "antd";
import React, { useState, useEffect } from "react";
import { BsEye } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { myReserve } from "../../../../core/services/api/StudentPanel/MyReserve.api";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/logo (3)highQ.png";
import { getRandomColor } from "../../../Common/ColorGenerator";
import { DatePersianizer } from "./../../../../core/utils/DatePersianizer";
// const ReserveData = [
//   {
//     title: " فیگما",
//     price: "۴۵۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
//     tag: "طراحی",
//     tag2: "پیشرفته",
//     teacher: "محمدحسین خلیل پور",
//     color: "bg-red-400",
//     date: "۲۹ اردیبهشت ۱۴۰۳",
//     enddate: "۲۹ شهریور ۱۴۰۳",
//     tagCol: "bg-blue-500",
//     status: "تایید شده",
//   },
//   {
//     title: " جاوا اسکریپت",
//     price: "۱,۰۰۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
//     tag: "برنامه نویسی",
//     tag2: "پیشرفته",
//     teacher: "محمدحسین بحرالعلومی",
//     color: "bg-yellow-300",
//     date: "۲۹ اردیبهشت ۱۴۰۳",
//     enddate: "۲۹ شهریور ۱۴۰۳",
//     tagCol: "bg-red-500",
//     status: "تایید نشده",
//   },
//   {
//     title: " ری‌اکت جی‌اس",
//     price: "۱,۲۰۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/e186/5b86/bca1c8cd3132e2639f0ded1c76c11d46?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZpF7verSM~Wu9RNqd6hHA12IbI~LIx0FgOIbjEJ1VWHoFByPXm~I35f~hNBNQaRdeTzriYNSU5G0ZBRk~OdTp5AYbDVLbBVr-uELXIrqJ7qL5uwtJHsPoWAY4ezQFG8rQ-LdULqFnxFTniNE5jVzE7~rpHETIA1o2GIyx8AMsDEN92z1Z26hhXLoHvIIUW3wi6b0DkT179r81dYvmxs6GJy1VS5UIdfUYgiWvPJJJJo25PjCzBHLQk2npBWFV4xWDrtkZvxb~0aqJlk1ZBy-kgkQ0h-7g-7GJh~KAryZtkvoUJMQEWtt2mYD53c6RG478pyeiEK-M6JRMIG8zZUbLA__",
//     tag: "برنامه نویسی",
//     tag2: "مقدماتی",
//     teacher: "محسن اسفندیاری",
//     color: "bg-cyan-200",
//     date: "۲۹ اردیبهشت ۱۴۰۳",
//     enddate: "۲۹ شهریور ۱۴۰۳",
//     tagCol: "bg-red-500",
//     status: "تایید نشده",
//   },
//   {
//     title: " فیگما",
//     price: "۴۵۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
//     tag: "طراحی",
//     tag2: "پیشرفته",
//     teacher: "محمدحسین خلیل پور",
//     color: "bg-red-400",
//     date: "۲۹ اردیبهشت ۱۴۰۳",
//     enddate: "۲۹ شهریور ۱۴۰۳",
//     tagCol: "bg-red-500",

//     status: "تایید نشده",
//   },
//   {
//     title: " جاوااسکریپت",
//     price: "۱,۰۰۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
//     tag: "برنامه نویسی",
//     tag2: "پیشرفته",
//     teacher: "محمدحسین بحرالعلومی",
//     color: "bg-yellow-300",
//     date: "۲۹ اردیبهشت ۱۴۰۳",
//     enddate: "۲۹ شهریور ۱۴۰۳",
//     tagCol: "bg-red-500",
//     status: "تایید نشده",
//   },
//   {
//     title: " طراحی سایت",
//     price: "۵۰۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/fc71/0ef5/0b850c99f94ca19273ee7e343959a869?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tn92qFBUixxyZXwoDdCFdngZoyld1IodHyagJyZT~vPC5NUAb7pXV9jdxTb4haaDJHXngYKsE9f09WEdkVQk~8oZ3TZo5vA5gQ~LwBX668jcOlrNNOwpBJhTH8m74ouMcIlBUdaAfAcgwlg8tLSy6f8drKZHhAWO0AkiG6RNYwnlJI4FT3YbSfRRHZ0OVzd-lknq7BHebGGgZpJxRUTvxRSgSleqBad6MFPncGllv9f39goiGGwU86ee-miq5X4Q4l2alDmm-WBxTyI1yHv4Earhqn8kUnbuahFdv3AYf0WSG8dLkpX~E5ZTdMXxT1UMkpa0z9PxbBtcLiM7noDdKg__",
//     tag: "برنامه نویسی",
//     tag2: "پیشرفته",
//     teacher: "محمدحسین بحرالعلومی",
//     color: "bg-blue-600",
//     date: "۲۹ اردیبهشت ۱۴۰۳",
//     enddate: "۲۹ شهریور ۱۴۰۳",
//     tagCol: "bg-red-500",
//     status: "تایید نشده",
//   },
// ];

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
  // console.log("reserveData", reserveData);
  useEffect(() => {
    getMyReserve();
  }, []);
  return (
    <div className="bg-gray-50 dark:bg-indigo-950 p-2 rounded-3xl flex flex-col justify-between">
      <div>
        <ul className="flex p-2 rounded-xl text-sm text-gray-500  m-5 dark:bg-[#041124] dark:text-white  bg-gray-100 gap-14 sm:gap-20 md:gap-24 lg:gap-24 justify-start">
          <li className="hidden md:block">#</li>
          <li className="w-[121px] md:w-[131px] lg:w-[231px]"> نام دوره</li>
          <li className="mr-2 hidden sm:block">تاریخ برگزاری</li>
          <li className="mr-2 hidden lg:block">تاریخ اتمام</li>
          <li>تایید</li>
        </ul>
        <div className="mt-4 mx-5 space-y-4 max-h-[20rem] overflow-y-scroll">
          {reserveData?.map((Reserve, index) => (
            <div
              key={index}
              className="  flex flex-row  relative  items-center rounded-3xl justify-start gap-9    "
            >
              <div
                className={`h-12 hidden md:flex justify-center items-center rounded-2xl w-20  mb-4 ${getRandomColor()}`}
              >
                <img
                  src={Reserve.icon ?? Logo}
                  alt={""}
                  className={`size-full rounded-2xl`}
                />
              </div>

              <h3 className=" text-xl dark:text-white font-semibold mb-2  truncate w-[151px] sm:w-[301px]">
                {Reserve.courseName}
              </h3>

              <span
                className={`hidden sm:inline-flex items-center w-[127px] dark:text-white `}
              >
                {DatePersianizer(Reserve.reserverDate)}
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
                <Link to={`/courseDetails/${Reserve.courseId}`}>
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
