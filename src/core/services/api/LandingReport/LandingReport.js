import http from "../../interceptor";

export const GetLandingReport = async () => {
  try {
    const res = await http.get("/Home/LandingReport");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
