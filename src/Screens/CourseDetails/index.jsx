import React from "react";
import { CourseDetailHolder } from "../../Components/CourseDetailHolder/CourseDetailHolder";
import { Header } from "../../Components/Common/Header/Header";
import { Footer } from "../../Components/Common/Footer";

const CourseDetails = () => {
  return (
    <>
      <Header />
      <CourseDetailHolder />
      <Footer />
    </>
  );
};

export { CourseDetails };
