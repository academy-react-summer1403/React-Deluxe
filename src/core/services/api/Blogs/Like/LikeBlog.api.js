import http from "../../../interceptor";

export const LikeBlog = async (NewsId) => {
  try {
    // const queryParams = {};
    // queryParams.NewsId = NewsId;
    const res = await http.post(`/News/NewsLike/${NewsId}`);
    return res;
  } catch (error) {
    console.log("Error in LikeBlog:", error);
    throw error; // Rethrow error to pass it to onError
  }
};
