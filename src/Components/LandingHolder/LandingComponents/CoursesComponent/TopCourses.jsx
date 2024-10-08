import React from "react";
import { Link } from "react-router-dom";

const coursesData = [
  {
    title: "دوره ری‌اکت جی‌اس",
    price: "۱,۲۰۰,۰۰۰ تومان",
    icon: "https://s3-alpha-sig.figma.com/img/e186/5b86/bca1c8cd3132e2639f0ded1c76c11d46?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZpF7verSM~Wu9RNqd6hHA12IbI~LIx0FgOIbjEJ1VWHoFByPXm~I35f~hNBNQaRdeTzriYNSU5G0ZBRk~OdTp5AYbDVLbBVr-uELXIrqJ7qL5uwtJHsPoWAY4ezQFG8rQ-LdULqFnxFTniNE5jVzE7~rpHETIA1o2GIyx8AMsDEN92z1Z26hhXLoHvIIUW3wi6b0DkT179r81dYvmxs6GJy1VS5UIdfUYgiWvPJJJJo25PjCzBHLQk2npBWFV4xWDrtkZvxb~0aqJlk1ZBy-kgkQ0h-7g-7GJh~KAryZtkvoUJMQEWtt2mYD53c6RG478pyeiEK-M6JRMIG8zZUbLA__",
    tag: "برنامه نویسی",
    tag2: "مقدماتی",
    teacher: "محسن اسفندیاری",
    color: "bg-cyan-200",
  },
  {
    title: "دوره فیگما",
    price: "۴۵۰,۰۰۰ تومان",
    icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
    tag: "طراحی",
    tag2: "پیشرفته",
    teacher: "محمدحسین خلیل پور",
    color: "bg-red-400",
  },
  {
    title: "دوره جاوااسکریپت",
    price: "۱,۰۰۰,۰۰۰ تومان",
    icon: "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
    tag: "برنامه نویسی",
    tag2: "پیشرفته",
    teacher: "محمدحسین بحرالعلومی",
    color: "bg-yellow-300",
  },
  {
    title: "دوره طراحی سایت",
    price: "۵۰۰,۰۰۰ تومان",
    icon: "https://s3-alpha-sig.figma.com/img/fc71/0ef5/0b850c99f94ca19273ee7e343959a869?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tn92qFBUixxyZXwoDdCFdngZoyld1IodHyagJyZT~vPC5NUAb7pXV9jdxTb4haaDJHXngYKsE9f09WEdkVQk~8oZ3TZo5vA5gQ~LwBX668jcOlrNNOwpBJhTH8m74ouMcIlBUdaAfAcgwlg8tLSy6f8drKZHhAWO0AkiG6RNYwnlJI4FT3YbSfRRHZ0OVzd-lknq7BHebGGgZpJxRUTvxRSgSleqBad6MFPncGllv9f39goiGGwU86ee-miq5X4Q4l2alDmm-WBxTyI1yHv4Earhqn8kUnbuahFdv3AYf0WSG8dLkpX~E5ZTdMXxT1UMkpa0z9PxbBtcLiM7noDdKg__",
    tag: "برنامه نویسی",
    tag2: "پیشرفته",
    teacher: "محمدحسین بحرالعلومی",
    color: "bg-blue-600",
  },
];

const TopCourses = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">
          دوره های برتر هفته
        </h2>
        <div className="hidden md:flex flex-wrap justify-center gap-8">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="p-6 bg-white flex flex-col dark:bg-indigo-900 relative  rounded-lg justify-center items-center flex-1  min-w-[250px] max-w-[350px]"
            >
              <Link to={"/courseDetails"}>
                <div
                  className={`h-56 flex justify-center items-center rounded-3xl w-64 mx-auto mb-4 ${course.color}`}
                >
                  <img src={course.icon} alt={""} className={`size-48 `} />
                </div>
              </Link>

              <Link to={"/courseDetails"}>
                <h3 className="flex text-xl dark:text-white font-semibold mb-2 ">
                  {course.title}
                </h3>
              </Link>
              <div className="flex flex-nowrap gap-7">
                <p className=" text-gray-400 dark:text-white text-xs items-center ">
                  {course.teacher}
                </p>
                <span className="text-gray-500 dark:text-white text-sm font-semibold mb-4">
                  {course.price}
                </span>
              </div>
              <div className="mt-4">
                <span className="px-3 py-0  text-xs absolute top-8 right-28 bg-blue-500 text-white rounded-full">
                  {course.tag}
                </span>
                <span className="px-3 py-0 text-xs  absolute top-8 right-10 bg-pink-500 text-white rounded-full">
                  {course.tag2}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-gray-900   dark:bg-blue-500 text-white px-5 py-1.5 rounded-full mt-8">
          مشاهده بیشتر
        </button>
      </div>
    </section>
  );
};

export { TopCourses };
