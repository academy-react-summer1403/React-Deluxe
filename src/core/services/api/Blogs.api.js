import http from "../interceptor";

export const GetAllBlogsByPg = async (
  selectedSort,
  searchTerm,
  selectedCategoryBlog
) => {
  try {
    const queryParams = {};
    if (searchTerm !== "" && searchTerm !== null) {
      queryParams.Query = searchTerm;
    }
    console.log(searchTerm);
    if (selectedSort !== "" && selectedSort !== null) {
      queryParams.SortingCol = selectedSort?.key;
      queryParams.SortType = selectedSort?.order;
    }
    if (selectedCategoryBlog !== "" && selectedCategoryBlog !== null) {
      queryParams.NewsCategoryId = selectedCategoryBlog?.join(",");
    }

    const res = await http.get("/News?RowsOfPage=10", {
      params: queryParams,
    });
    console.log("QueryBlogs", queryParams);

    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
