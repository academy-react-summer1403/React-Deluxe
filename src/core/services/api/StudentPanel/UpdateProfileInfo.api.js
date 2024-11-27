import http from "../../interceptor";

export const UpdateProfileInfo = async (formData) => {
  try {
    console.log("FormData", formData);
    const res = await http.put("/SharePanel/UpdateProfileInfo", formData);
    return res; //???!!!!???????!!!!!!!!!!??????
  } catch (error) {
    console.log("Error in UpdateProfileInfo:", error);
    throw error; // Rethrow to be handled by `useMutation` onError
  }
};
// const UpdateProfileInfo2 = async (formData) => {
//   console.log("FormData", formData);
//   const res = await http.put("/SharePanel/UpdateProfileInfo", formData);
//   return res; //???!!!!???????!!!!!!!!!!??????
// };
