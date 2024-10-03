import React from "react";

const coursesData = [
  {
    title: "دوره طراحی سایت",
    price: "۵۰۰,۰۰۰ تومان",
    teacher: "محمدحسین راستگار",
    icon: "/path-to-html-icon.png",
    badge: "برنامه نویسی",
  },
  {
    title: "دوره جاوااسکریپت",
    price: "۱,۰۰۰,۰۰۰ تومان",
    teacher: "محمدمهدی امیرابراهیمی",
    icon: "/path-to-js-icon.png",
    badge: "برنامه نویسی",
  },
  {
    title: "دوره فیگما",
    price: "۶۰۰,۰۰۰ تومان",
    teacher: "محمدحسین شایانپور",
    icon: "/path-to-figma-icon.png",
    badge: "طراحی",
  },
  {
    title: "دوره ری‌اکت جی‌اس",
    price: "۴,۵۰۰,۰۰۰ تومان",
    teacher: "محمدمهدی امیرابراهیمی",
    icon: "/path-to-react-icon.png",
    badge: "برنامه نویسی",
  },
];

const TopCourses = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">دوره های برتر هفته</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coursesData.map((course, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <div className="relative mb-4">
                <img
                  src={course.icon}
                  alt={course.title}
                  className="h-16 mx-auto"
                />
                <span className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 rounded">
                  {course.badge}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-2">{course.price}</p>
              <p className="text-gray-400 text-sm">{course.teacher}</p>
            </div>
          ))}
        </div>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full mt-8">
          مشاهده بیشتر
        </button>
      </div>
    </section>
  );
};

export { TopCourses };
