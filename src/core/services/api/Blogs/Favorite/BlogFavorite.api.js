import http from "../../../interceptor";

export const BlogFavorite = async (NewsId) => {
  try {
    const queryParams = {};
    queryParams.NewsId = NewsId;
    const res = await http.post("/News/AddFavoriteNews", null, {
      params: queryParams,
    });
    return res;
  } catch (error) {
    console.log("Error in BlogFavorite:", error);
    throw error; // Rethrow error to pass it to onError
  }
};
