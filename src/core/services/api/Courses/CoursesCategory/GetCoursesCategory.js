import http from "../interceptor";

export const GetCoursesCategory = async () => {
  try {
    const res = await http.get("/Home/GetTechnologies");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
