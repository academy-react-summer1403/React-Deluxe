import http from "../../interceptor";

export const GetBlogsCategory = async () => {
  try {
    const res = await http.get("/News/GetListNewsCategory");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
