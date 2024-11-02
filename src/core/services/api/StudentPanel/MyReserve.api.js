import http from "../../interceptor";

export const myReserve = async () => {
  try {
    const res = await http.get("/SharePanel/GetMyCoursesReserve");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
