import http from "../interceptor";

export const GetAllBlogsByPg = async () => {
  try {
    const res = await http.get("/News/GetNewsFilterPages");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};