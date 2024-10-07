import React from "react";
import { HeroSection } from "./LandingComponents/HeroSectionComponent/HeroSection";
import { Header } from "../Common/Header/Header";
import { GoalsSection } from "./LandingComponents/GoalComponent/GoalSection";
import { Services } from "./LandingComponents/ServicesComponent/Services";
import { TopCourses } from "./LandingComponents/CoursesComponent/TopCourses";
import { TopBlogs } from "./LandingComponents/BlogsComponent/TopBlogs";
import { TopTeachers } from "./LandingComponents/TeachersComponent/TopTeachers";
import { Footer } from "../Common/Footer";
import { Steps } from "antd";

const LandingHolder = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Steps labelPlacement="horizontal" size="defalt" />
      <GoalsSection />
      <Services />
      <TopCourses />
      <TopBlogs />
      <TopTeachers />
      <Footer />
    </div>
  );
};

export { LandingHolder };
