import http from "../../interceptor";

export const favoriteNews = async () => {
  try {
    const res = await http.get("/SharePanel/GetMyFavoriteNews");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
