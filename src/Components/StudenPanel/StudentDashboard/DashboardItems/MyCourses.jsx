import React from "react";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
const coursesData = [
  {
    title: " فیگما",
    price: "۴۵۰,۰۰۰ تومان",
    icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
    tag: "طراحی",
    tag2: "پیشرفته",
    teacher: "محمدحسین خلیل پور",
    color: "bg-red-400",
    date: "۲۹ اردیبهشت ۱۴۰۳",
  },
  {
    title: " جاوا اسکریپت",
    price: "۱,۰۰۰,۰۰۰ تومان",
    icon: "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
    tag: "برنامه نویسی",
    tag2: "پیشرفته",
    teacher: "محمدحسین بحرالعلومی",
    color: "bg-yellow-300",
    date: "۲۹ اردیبهشت ۱۴۰۳",
  },
];

const MyCourses = () => {
  return (
    <div className="bg-gray-50 dark:bg-indigo-900  p-2 rounded-3xl  w-4/5 flex-1">
      <div className="flex flex-row px-4 justify-between">
        <h2 className="text-base font-semibold">دوره من</h2>
        <div className="flex-row flex gap-2">
          <div className="text-blue-500">مشاهده بیشتر </div>
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <ul className="flex p-2 rounded-xl text-sm text-gray-500  mx-5  bg-gray-100 gap-40 justify-start">
        <li>#</li>
        <li> نام دوره</li>
        <li className="w-[50px]">مدرس</li>
        <li className="mr-2">تاریخ برگزاری</li>
        <li>سطح</li>
      </ul>
      <div className="mt-4 mx-5 space-y-4">
        {coursesData.map((course, index) => (
          <div
            key={index}
            className="  flex flex-row  relative  items-center rounded-3xl justify-start gap-24    "
          >
            <div
              className={`h-12 flex justify-center items-center rounded-xl w-20  mb-4 ${course.color}`}
            >
              <img src={course.icon} alt={""} className={`size-8 `} />
            </div>

            <h3 className=" text-xl dark:text-white font-semibold mb-2  truncate w-[111px]">
              {course.title}
            </h3>

            <p className="  dark:text-white text-[12px]  font-bold items-center w-[125px]  ">
              {course.teacher}
            </p>
            <span className={`inline-flex items-center dark:text-white `}>
              {course.date}
            </span>
            <span className="px-3 py-0 text-base     bg-[#FF37F5] text-white rounded-full">
              {course.tag2}
            </span>
            <BsEye className="text-base" />
          </div>
        ))}
      </div>
    </div>
  );
};

export { MyCourses };