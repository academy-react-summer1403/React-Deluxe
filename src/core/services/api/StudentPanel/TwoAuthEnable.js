import http from "../../interceptor";

// Fetch security information
export const getSecurityInfo = async () => {
  try {
    const response = await http.get(
      "https://classapi.sepehracademy.ir/api/SharePanel/GetSecurityInfo"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch security information.");
    }
    return response.json(); // Returning the response data
  } catch (error) {
    throw new Error(
      error.message || "An error occurred while fetching security info."
    );
  }
};

// Update two-step authentication status
export const updateTwoStepAuth = async (twoStepAuth) => {
  try {
    const response = await http.post(
      "https://classapi.sepehracademy.ir/api/SharePanel/EditSecurity",
      {
        method: "POST",
        body: JSON.stringify({ twoStepAuth }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update two-step authentication.");
    }
    return response.json(); // Returning the updated response data
  } catch (error) {
    throw new Error(
      error.message || "An error occurred while updating authentication."
    );
  }
};
