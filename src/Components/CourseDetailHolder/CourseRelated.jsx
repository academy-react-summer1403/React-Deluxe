// RelatedCourses.jsx
import React from "react";
import { TopCourses } from "../LandingHolder/LandingComponents/CoursesComponent/TopCourses";

// const CourseCard = ({ title, price, image, status }) => (
//   <div className="bg-white p-4 rounded-lg shadow-md text-center">
//     <img src={image} alt={title} className="w-24 h-24 mx-auto mb-4" />
//     <h4 className="font-bold">{title}</h4>
//     <p className="text-gray-600">{price} تومان</p>
//     <p
//       className={`text-sm text-white px-2 py-1 rounded-full ${
//         status === "برنامه نویس" ? "bg-green-500" : "bg-pink-500"
//       }`}
//     >
//       {status}
//     </p>
//   </div>
// );

const CourseRelated = () => {
  //   const courses = [
  //     {
  //       title: "دوره طراحی سایت",
  //       price: "۵۰۰,۰۰۰",
  //       image: "path-to-html-css-image",
  //       status: "برنامه نویس",
  //     },
  //     {
  //       title: "دوره جاوااسکریپت",
  //       price: "۲۰,۵۰۰,۰۰۰",
  //       image: "path-to-js-image",
  //       status: "برنامه نویس",
  //     },
  //     {
  //       title: "دوره فیگما",
  //       price: "۵۰۰,۰۰۰",
  //       image: "path-to-figma-image",
  //       status: "طراحی",
  //     },
  //   ];

  return (
    // <div>
    //   <h3 className="text-xl font-bold mb-4">دوره های مرتبط</h3>
    //   <div className="flex space-x-4">
    //     {courses.map((course, index) => (
    //       <CourseCard key={index} {...course} />
    //     ))}
    //   </div>
    // </div>
    <TopCourses />
  );
};

export { CourseRelated };
