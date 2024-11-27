// api/security.js
export const getSecurityInfo = async () => {
  const response = await fetch(
    "https://classapi.sepehracademy.ir/api/SharePanel/GetSecurityInfo"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch security information.");
  }
  return response.json();
};

export const updateTwoStepAuth = async (twoStepAuth) => {
  const response = await fetch(
    "https://classapi.sepehracademy.ir/api/SharePanel/EditSecurity",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ twoStepAuth }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update two-step authentication.");
  }
  return response.json();
};
