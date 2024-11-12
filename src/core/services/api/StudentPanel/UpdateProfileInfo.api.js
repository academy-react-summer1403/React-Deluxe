import http from "../../interceptor";

export const UpdateProfileInfo = async (profileValues) => {
  try {
    const res = await http.put("/SharePanel/UpdateProfileInfo", profileValues);
    // return res; //???!!!!???????!!!!!!!!!!??????
  } catch (error) {
    console.log("Error in UpdateProfileInfo:", error);
    throw error; // Rethrow to be handled by `useMutation` onError
  }
};
