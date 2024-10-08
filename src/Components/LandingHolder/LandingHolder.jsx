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
    <div className=" relative dark:bg-indigo-950">
      {/* <Header /> */}
      <HeroSection />
      <GoalsSection />
      <Services />
      <TopCourses />
      <TopBlogs />
      <TopTeachers />
      {/* <Footer /> */}
    </div>
  );
};

export { LandingHolder };
