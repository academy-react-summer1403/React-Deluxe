import { Filter } from "./Filter";
import { CourseList } from "./CourseList";
import { CourseHolder } from "./CoursesComponents/CourseHolder/CourseHolder";
import { getQuery } from "../../core/services/api/ReactQuery/getQuery";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import SlideModal from "./SlideModal";

const MainPage = () => {
  const [categoryValue, setCategoryValue] = useState([]);
  const queryClient = useQueryClient();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptionId, setSelectedOptionId] = useState("");
  const [levelsOptionId, setLevelsOptionId] = useState("");
  const [teachersOptionId, setTeacherOptionId] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000000000]); // Initial values for range

  // console.log("TeacherOption", teachersOptionId);

  const categoryList = (value) => {
    setCategoryValue(value);
    // console.log(
    //   "category sent to parent",
    //   categoryValue ? categoryValue : "",
    //   categoryValue?.join(",")
    // );
    // // return value?.join(",");
  };

  return (
    <>
      <CourseHolder />
      <SlideModal />

      <div className="flex justify-evenly">
        <Filter
          categorySelResult={categoryList}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedOptionId={selectedOptionId}
          setSelectedOptionId={setSelectedOptionId}
          levelsOptionId={levelsOptionId}
          setLevelsOptionId={setLevelsOptionId}
          teachersOptionId={teachersOptionId}
          setTeacherOptionId={setTeacherOptionId}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        <CourseList
          searchTerm={searchTerm}
          categoryValue={categoryValue}
          selectedOptionId={selectedOptionId}
          levelsOptionId={levelsOptionId}
          teachersOptionId={teachersOptionId}
          priceRange={priceRange}
        />
      </div>
    </>
  );
};

export { MainPage };
