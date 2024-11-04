import http from "../interceptor";

export const GetAllBlogsByPg = async () => {
  try {
    const res = await http.get("/News?RowsOfPage=10");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
