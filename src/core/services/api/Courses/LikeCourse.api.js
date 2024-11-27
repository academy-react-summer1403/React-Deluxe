import http from "../../interceptor";

export const LikeCourse = async (courseId) => {
  try {
    const queryParams = {};
    queryParams.CourseId = courseId;
    const res = await http.post("/Course/AddCourseLike", null, {
      params: queryParams,
    });
    return res;
  } catch (error) {
    console.log("Error in LikeCourse:", error);
    throw error;
  }
};
