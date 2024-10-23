import http from "../interceptor";

export const GetAllCoursesByPg = async () => {
  try {
    const res = await http.get("/Home/GetCoursesWithPagination");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
