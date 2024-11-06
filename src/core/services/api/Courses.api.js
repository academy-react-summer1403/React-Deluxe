import http from "../interceptor";

export const GetAllCoursesByPg = async (searchTerm, selectedOptionId) => {
  try {
    const queryParams = {};
    if (searchTerm !== "" && searchTerm !== null) {
      queryParams.Query = searchTerm;
    }
    if (selectedOptionId !== "" && selectedOptionId !== null) {
      queryParams.ListTech = selectedOptionId?.join(",");
      queryParams.TechCount = 1;
    }
    console.log(selectedOptionId);

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
