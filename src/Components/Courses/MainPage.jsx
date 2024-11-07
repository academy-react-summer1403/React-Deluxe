import { Filter } from "./Filter";
import { CourseList } from "./CourseList";
import { CourseHolder } from "./CoursesComponents/CourseHolder/CourseHolder";
import { getQuery } from "../../core/services/api/ReactQuery/getQuery";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const MainPage = () => {
  const [categoryValue, setCategoryValue] = useState([]);
  const queryClient = useQueryClient();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptionId, setSelectedOptionId] = useState("");

  // console.log("SelectOption", selectedOptionId);

  const categoryList = (value) => {
    setCategoryValue(value);
    // console.log(
    //   "category sent to parent",
    //   categoryValue ? categoryValue : "",
    //   categoryValue?.join(",")
    // );
    // // return value?.join(",");
  };

  // useEffect(() => {
  //   queryClient.clear(["GetCoursesByPG"]);
  //   getQuery(
  //     "GetCoursesByPG",
  //     `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=12&
  //       SortingCol=Active&SortType=DESC&CostDown=&CostUp=&TechCount=0&ListTech=${
  //         categoryValue ? categoryValue?.join(",") : 1
  //       }&courseLevelId=&CourseTypeId=&StartDate=&EndDate=&TeacherId=`
  //   );
  // }, [categoryValue]);

  return (
    <>
      <CourseHolder />
      <div className="flex justify-evenly">
        <Filter
          categorySelResult={categoryList}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedOptionId={selectedOptionId}
          setSelectedOptionId={setSelectedOptionId}
        />
        <CourseList
          searchTerm={searchTerm}
          categoryValue={categoryValue}
          selectedOptionId={selectedOptionId}
        />
      </div>
    </>
  );
};

export { MainPage };
