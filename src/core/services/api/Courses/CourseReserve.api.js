import http from "../../interceptor";

export const CourseReserve = async (courseId) => {
  try {
    const res = http.post("/CourseReserve/ReserveAdd", {
      courseId: courseId,
    });
    return res;
  } catch (error) {
    console.log("Error in CourseReserve:", error);
    throw error; // Rethrow error to pass it to onError
  }
};
