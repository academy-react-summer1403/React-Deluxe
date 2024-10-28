import http from "../interceptor";

export const GetTopCoursesByPg = async () => {
  try {
    const res = await http.get("/Home/LandingReport");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};