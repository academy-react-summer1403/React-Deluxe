import http from "../interceptor";

export const GetTopBlogsByPg = async () => {
  try {
    const res = await http.get("/Home/");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};