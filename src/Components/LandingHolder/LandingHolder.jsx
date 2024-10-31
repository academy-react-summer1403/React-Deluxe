import React from "react";
import { HeroSection } from "./LandingComponents/HeroSectionComponent/HeroSection";
import { Header } from "../Common/Header/Header";
import { GoalsSection } from "./LandingComponents/GoalComponent/GoalSection";
import { Services } from "./LandingComponents/ServicesComponent/Services";
import { TopCourses } from "./LandingComponents/CoursesComponent/TopCourses";
import { TopBlogs } from "./LandingComponents/BlogsComponent/TopBlogs";
import { TopTeachers } from "./LandingComponents/TeachersComponent/TopTeachers";
import { Footer } from "../Common/Footer";

const LandingHolder = () => {
  return (
    <div
      data-aos="zoom-out-up"
      className=" relative dark:bg-[#041124] overflow-hidden"
    >
      <HeroSection />
      <GoalsSection />
      <Services />
      <TopCourses />
      <TopBlogs />
      <TopTeachers />
    </div>
  );
};

export { LandingHolder };
