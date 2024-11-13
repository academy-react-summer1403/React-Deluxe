import http from "../../interceptor";

export const DisslikeCourse = async (courseId) => {
  try {
    const queryParams = {};
    queryParams.CourseId = courseId;
    const res = await http.post("/Course/AddCourseDissLike", null, {
      params: queryParams,
    });
    return res;
  } catch (error) {
    console.log("Error in LikeCourse:", error);
    throw error;
  }
};
