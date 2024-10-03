import React from "react";
import { HeroSection } from "./HeroSection";
import { Header } from "../Common/Header/Header";
import { GoalsSection } from "./GoalSection";
import { Services } from "./Services";
import { TopCourses } from "./TopCourses";
import { TopBlogs } from "./TopBlogs";
import { TopTeachers } from "./TopTeachers";
import { Footer } from "../Common/Footer";

const LandingHolder = () => {
  return (
    <div>
      <Header />
      <HeroSection />
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
