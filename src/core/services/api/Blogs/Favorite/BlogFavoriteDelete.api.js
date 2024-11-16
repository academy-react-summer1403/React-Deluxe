import http from "../../../interceptor";

export const BlogFavoriteDelete = async (favoriteId) => {
  try {
    console.log(favoriteId);
    const res = await http.delete("/News/DeleteFavoriteNews", {
      data: { deleteEntityId: favoriteId },
    });
    return res;
  } catch (error) {
    console.log("Error in BlogFavoriteDelete:", error);
    throw error; // Rethrow error to pass it to onError
  }
};
