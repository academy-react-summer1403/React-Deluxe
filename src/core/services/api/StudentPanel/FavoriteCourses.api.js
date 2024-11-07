import http from "../../interceptor";

export const favoriteCourseDto = async () => {
  try {
    const res = await http.get("/SharePanel/GetMyFavoriteCourses");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
