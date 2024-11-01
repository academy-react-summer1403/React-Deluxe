import http from "../../../interceptor";

export const GetCoursesTeachers = async () => {
  try {
    const res = await http.get("/Home/GetTeachers");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
