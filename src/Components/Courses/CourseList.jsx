// import React from "react";
import { CourseCard } from "./CourseCard";

const CourseList = ({ category }) => {
  const courses = [
    {
      title: "دوره جاوااسکریپت",
      image: "path_to_js_image", // تصویر جاوااسکریپت
      category: "برنامه نویسی",
      level: "پیشرفته",
      price: "1,000,000",
      teacher: "محمدحسین",
      popularity: 5,
      date: new Date(2023, 1, 15),
      icon: "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
    },
    {
      title: "دوره فیگما",
      image: "path_to_figma_image", // تصویر فیگما
      category: "طراحی",
      level: "مقدماتی",
      price: "450,000",
      teacher: "محمد شفیعی‌پور",
      popularity: 4,
      date: new Date(2023, 5, 10),
    },
    {
      title: "دوره پیشرفته React",
      image: "path_to_react_image", // تصویر React
      category: "برنامه نویسی",
      level: "پیشرفته",
      price: "1,200,000",
      teacher: "علی احمدی",
      popularity: 3,
      date: new Date(2023, 3, 20),
    },
    {
      title: "دوره طراحی UX",
      image: "path_to_ux_image", // تصویر UX
      category: "طراحی",
      level: "مقدماتی",
      price: "300,000",
      teacher: "فاطمه نیکوکار",
      popularity: 5,
      date: new Date(2024, 0, 5),
    },
    {
      title: "دوره گرافیک",
      image: "path_to_graphic_image", // تصویر گرافیک
      category: "طراحی",
      level: "متوسط",
      price: "700,000",
      teacher: "حسین نادری",
      popularity: 2,
      date: new Date(2023, 8, 15),
    },
    {
      title: "دوره گرافیک",
      image: "path_to_graphic_image", // تصویر گرافیک
      category: "طراحی",
      level: "متوسط",
      price: "700,000",
      teacher: "حسین نادری",
      popularity: 2,
      date: new Date(2023, 8, 15),
    },
    {
      title: "دوره گرافیک",
      image: "path_to_graphic_image", // تصویر گرافیک
      category: "طراحی",
      level: "متوسط",
      price: "700,000",
      teacher: "حسین نادری",
      popularity: 2,
      date: new Date(2023, 8, 15),
    },
    {
      title: "دوره گرافیک",
      image: "path_to_graphic_image", // تصویر گرافیک
      category: "طراحی",
      level: "متوسط",
      price: "700,000",
      teacher: "حسین نادری",
      popularity: 2,
      date: new Date(2023, 8, 15),
    },
    {
      title: "دوره گرافیک",
      image: "path_to_graphic_image", // تصویر گرافیک
      category: "طراحی",
      level: "متوسط",
      price: "700,000",
      teacher: "حسین نادری",
      popularity: 2,
      date: new Date(2023, 8, 15),
    },
    {
      title: "دوره گرافیک",
      image: "path_to_graphic_image", // تصویر گرافیک
      category: "طراحی",
      level: "متوسط",
      price: "700,000",
      teacher: "حسین نادری",
      popularity: 2,
      date: new Date(2023, 8, 15),
    },
    {
      title: "دوره گرافیک",
      image: "path_to_graphic_image", // تصویر گرافیک
      category: "طراحی",
      level: "متوسط",
      price: "700,000",
      teacher: "حسین نادری",
      popularity: 2,
      date: new Date(2023, 8, 15),
    },
    {
      title: "دوره گرافیک",
      image: "path_to_graphic_image", // تصویر گرافیک
      category: "طراحی",
      level: "متوسط",
      price: "700,000",
      teacher: "حسین نادری",
      popularity: 2,
      date: new Date(2023, 8, 15),
    },
  ];

  const filteredCourses = courses.filter((course) => {
    switch (category) {
      case "جدیدترین":
        return true;
      case "محبوب‌ترین":
        return course.popularity >= 4;
      case "گران‌ترین":
        return parseInt(course.price.replace(/,/g, "")) > 500000;
      case "ارزان‌ترین":
        return parseInt(course.price.replace(/,/g, "")) <= 500000;
      default:
        return false;
    }
  });

  const sortedCourses =
    category === "جدیدترین"
      ? filteredCourses.sort((a, b) => b.date - a.date)
      : filteredCourses;

  return (
    <div className="flex flex-wrap -mx-3">
      {sortedCourses.map((course, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
          <CourseCard {...course} />
        </div>
      ))}
    </div>
  );
};

export { CourseList };
