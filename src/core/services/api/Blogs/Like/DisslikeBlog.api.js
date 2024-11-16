import http from "../../../interceptor";

export const DisslikeBlog = async (NewsId) => {
  try {
    const res = await http.post(`/News/NewsDissLike/${NewsId}`);
    return res;
  } catch (error) {
    console.log("Error in DisslikeBlog:", error);
    throw error; // Rethrow error to pass it to onError
  }
};
