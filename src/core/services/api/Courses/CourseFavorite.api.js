import http from "../../interceptor";

export const CourseFavorite = async (courseId) => {
  try {
    const res = await http.post("/Course/AddCourseFavorite", {
      courseId: courseId,
    });
    return res;
  } catch (error) {
    console.log("Error in CourseFavorite:", error);
    throw error; // Rethrow error to pass it to onError
  }
};
