import axios from "axios";
import http from "../../interceptor";

// Get Two-Step Authentication Status
export const getSecurityInfo = async () => {
  try {
    const response = await http.get(`/GetSecurityInfo`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching security info:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Enable/Disable Two-Step Authentication
export const updateTwoStepAuth = async (isEnabled) => {
  try {
    const response = await http.put(`/SharePanel/EditSecurity`, {
      twoStepAuth: isEnabled,
      recoveryEmail: "azimhs95@gmail.com",
      baseUrl: "https://classapi.sepehracademy.ir/api",
    });
    return response;
  } catch (error) {
    console.error(
      "Error updating two-step authentication:",
      error.response?.data || error.message
    );
    throw error;
  }
};
