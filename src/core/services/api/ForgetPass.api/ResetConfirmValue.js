import http from "../../interceptor";

export const ResetConfirmValue = async () => {
  try {
    const res = await http.get(
      "/Sign/Reset/" + window.location.pathname.replace("/auth/forgetPass/", "")
    );
    console.log(window.location.pathname);
    return res;
  } catch (error) {
    console.log(error);
  }
};
