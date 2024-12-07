import http from "../interceptor";

export const allOfCourse = async () => {
  try {
    const res = await http.get(
      "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=1000"
    );
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const myCoursesAi = async () => {
  try {
    const res = await http.get(
      "/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=20"
    );
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
