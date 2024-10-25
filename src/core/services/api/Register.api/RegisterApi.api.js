import { getItem } from "../../common/storage";
import http from "../../interceptor";

export const RegisterApi = async ({ gmail, password }) => {
  try {
    const phoneNumber = getItem("phoneNumber");

    console.log(phoneNumber);

    await http.post("/Sign/Register", {
      password: password,
      gmail: gmail,
      phoneNumber: phoneNumber,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
