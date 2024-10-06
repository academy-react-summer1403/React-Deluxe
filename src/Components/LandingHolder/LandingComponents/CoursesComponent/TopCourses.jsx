import React from "react";

const coursesData = [
  {
    title: "دوره ری‌اکت جی‌اس",
    price: "۱,۲۰۰,۰۰۰ تومان",
    icon: "/path-to-course-icon-4.png",
    tag: "برنامه نویسی",
    tag2: "مقدماتی",
    teacher: "محسن اسفندیاری",
    color: "bg-cyan-200",
  },
  {
    title: "دوره فیگما",
    price: "۴۵۰,۰۰۰ تومان",
    icon: "/path-to-course-icon-3.png",
    tag: "طراحی",
    tag2: "پیشرفته",
    teacher: "محمدحسین خلیل پور",
    color: "bg-red-400",
  },
  {
    title: "دوره جاوااسکریپت",
    price: "۱,۰۰۰,۰۰۰ تومان",
    icon: "/path-to-course-icon-2.png",
    tag: "برنامه نویسی",
    tag2: "پیشرفته",
    teacher: "محمدحسین بحرالعلومی",
    color: "bg-yellow-300",
  },
  {
    title: "دوره طراحی سایت",
    price: "۵۰۰,۰۰۰ تومان",
    icon: "/path-to-course-icon-1.png",
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
        <h2 className="text-3xl font-bold mb-8">دوره های برتر هفته</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="p-6 bg-white relative  rounded-lg flex-1 min-w-[250px] max-w-[350px]"
            >
              <img
                src={course.icon}
                alt={""}
                className={`h-56 rounded-3xl w-72 mx-auto mb-4 ${course.color}`}
              />
              <h3 className="flex text-xl font-semibold mb-2">
                {course.title}
              </h3>
              <div className="flex flex-nowrap gap-7">
                <p className=" text-gray-400 text-xs items-center ">
                  {course.teacher}
                </p>
                <span className="text-gray-500 text-sm font-semibold mb-4">
                  {course.price}
                </span>
              </div>
              <div className="mt-4">
                <span className="px-3 py-0  text-xs absolute top-8 right-24 bg-blue-500 text-white rounded-full">
                  {course.tag}
                </span>
                <span className="px-3 py-0 text-xs  absolute top-8 right-8 bg-pink-500 text-white rounded-full">
                  {course.tag2}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-gray-900 text-white px-5 py-1.5 rounded-full mt-8">
          مشاهده بیشتر
        </button>
      </div>
    </section>
  );
};

export { TopCourses };
