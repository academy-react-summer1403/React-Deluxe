import http from "../interceptor";

export const GetTopCoursesByPg = async () => {
  try {
    const res = await http.get("/Home/GetCoursesTop?Count=4");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};