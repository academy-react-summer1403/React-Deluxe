import http from "../../interceptor";

export const CourseFavoriteDelete = async (formData) => {
  try {
    const res = await http.delete("/Course/DeleteCourseFavorite", {
      data: formData,
    });
    return res;
  } catch (error) {
    console.log("Error in CourseFavoriteDelete:", error);
    throw error; // Rethrow error to pass it to onError
  }
};
