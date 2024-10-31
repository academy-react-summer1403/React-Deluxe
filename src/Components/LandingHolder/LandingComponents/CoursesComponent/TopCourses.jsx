import React from "react";
import { Link } from "react-router-dom";
import { CoursesCarsoual, CoursesItems } from "./CoursesItems/Courses";

const TopCourses = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto text-center">
        <h2
          data-aos="fade-down"
          className="text-3xl font-bold mb-8 dark:text-white"
        >
          دوره های برتر هفته
        </h2>
        <CoursesItems />
        <div className="md:hidden block">
          <CoursesCarsoual />
        </div>

        <Link to={"courses"}>
          <button className="bg-gray-900   dark:bg-blue-500 text-white px-5 py-1.5 rounded-full mt-8">
            مشاهده بیشتر
          </button>
        </Link>
      </div>
    </section>
  );
};

export { TopCourses };
