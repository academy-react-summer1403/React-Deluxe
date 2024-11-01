import http from "../../../interceptor";

export const GetCoursesLevels = async () => {
  try {
    const res = await http.get("/CourseLevel/GetAllCourseLevel");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
