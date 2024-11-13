import http from "../interceptor";

export const GetAllCoursesByPg = async (
  searchTerm,
  selectedOptionId,
  levelsOptionId,
  teachersOptionId,
  priceRange,
  selectedSort,
  currentPg,
  currentPgSize
) => {
  try {
    const queryParams = {};
    if (searchTerm !== "" && searchTerm !== null) {
      queryParams.Query = searchTerm;
    }
    if (selectedOptionId !== "" && selectedOptionId !== null) {
      queryParams.ListTech = selectedOptionId?.join(",");
      queryParams.TechCount = selectedOptionId.length;
    }
    console.log(selectedOptionId);
    if (levelsOptionId !== "" && levelsOptionId !== null) {
      queryParams.courseLevelId = levelsOptionId;
    }
    if (teachersOptionId !== "" && teachersOptionId !== null) {
      // queryParams.TeacherId = teachersOptionId?.join(",");
      queryParams.TeacherId = teachersOptionId;
    }
    queryParams.CostDown = priceRange[0];
    queryParams.CostUp = priceRange[1];
    if (selectedSort !== "" && selectedSort !== null) {
      queryParams.SortingCol = selectedSort?.key;
      queryParams.SortType = selectedSort?.order;
    }
    if (currentPg !== "" && currentPg !== null) {
      queryParams.PageNumber = currentPg;
    }
    if (currentPgSize !== "" && currentPgSize !== null) {
      queryParams.RowsOfPage = currentPgSize;
    }

    const res = await http.get("/Home/GetCoursesWithPagination", {
      params: queryParams,
    });
    console.log("Query", queryParams);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
