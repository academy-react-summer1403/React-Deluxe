import http from "../../interceptor";

export const CourseReserveDelete = async (reserveId) => {
  try {
    const res = await http.delete("/CourseReserve", {
      data: { id: reserveId },
    });
    return res;
  } catch (error) {
    console.log("Error in CourseReserveDelete:", error);
    throw error; // Rethrow error to pass it to onError
  }
};
