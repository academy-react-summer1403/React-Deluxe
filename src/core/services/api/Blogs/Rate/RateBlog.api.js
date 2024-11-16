import http from "../../../interceptor";

export const RateBlog = async (values) => {
  try {
    console.log(values);
    const queryParams = {};
    queryParams.NewsId = values.blogId;
    queryParams.RateNumber = values.Rate;
    const res = await http.post("/News/NewsRate", null, {
      params: queryParams,
    });
    return res;
  } catch (error) {
    console.log("Error in RateBlog:", error);
    throw error;
  }
};
