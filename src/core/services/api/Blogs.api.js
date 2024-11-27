import http from "../interceptor";

export const GetAllBlogsByPg = async (
  selectedSort,
  searchTerm,
  selectedCategoryBlog,
  currentPg,
  currentPgSize
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
    if (currentPg !== "" && currentPg !== null) {
      queryParams.PageNumber = currentPg;
    }
    if (currentPgSize !== "" && currentPgSize !== null) {
      queryParams.RowsOfPage = currentPgSize;
    }

    const res = await http.get("/News", {
      params: queryParams,
    });
    console.log("QueryBlogs", queryParams);

    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
