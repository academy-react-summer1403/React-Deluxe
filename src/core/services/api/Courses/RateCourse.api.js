import http from "../../interceptor";

export const RateCourse = async (values) => {
  try {
    console.log(values?.courseId);
    const queryParams = {};
    queryParams.CourseId = values?.courseId;
    queryParams.RateNumber = values?.Rate;
    const res = await http.post("/Course/SetCourseRating", null, {
      params: queryParams,
    });
    return res;
  } catch (error) {
    console.log("Error in RateCourse:", error);
    throw error;
  }
};
