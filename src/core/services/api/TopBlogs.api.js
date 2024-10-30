import http from "../interceptor";

export const GetTopBlogsByPg = async () => {
  try {
    const res = await http.get("/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query=");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};