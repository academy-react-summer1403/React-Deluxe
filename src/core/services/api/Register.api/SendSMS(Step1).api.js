import http from "../../interceptor";

export const SendVerifySMS = async ({ phoneNumber }) => {
  try {
    // Perform the actual HTTP request (commented out for now)
    await http.post("/Sign/SendVerifyMessage", { phoneNumber });

    console.log("Sending SMS to:", phoneNumber);
  } catch (error) {
    console.error("Failed to send SMS:", error);

    return error;
  }
};
