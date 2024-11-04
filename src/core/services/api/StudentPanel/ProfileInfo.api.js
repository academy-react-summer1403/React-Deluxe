import http from "../../interceptor";

export const profileInfo = async () => {
  try {
    const res = await http.get("/SharePanel/GetProfileInfo");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
