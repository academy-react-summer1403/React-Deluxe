import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getSecurityInfo,
  updateTwoStepAuth,
} from "../../../core/services/api/StudentPanel/TwoAuthEnable";

// Custom hook to fetch security info
const useSecurityInfo = () => {
  return useQuery({
    queryKey: ["securityInfo"], // Unique query key
    queryFn: getSecurityInfo, // Fetch function
    onSuccess: (data) => {
      console.log("Security Info Data:", data); // Log data for debugging
    },
    onError: (error) => {
      console.error("Error fetching security information:", error.message);
    },
  });
};

// Custom hook to update two-step authentication status
const useUpdateTwoStepAuth = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTwoStepAuth, // The mutation function
    onSuccess: () => {
      // Invalidate and refetch the security info query to get updated data
      queryClient.invalidateQueries(["securityInfo"]);
    },
    onError: (error) => {
      console.error("Error updating two-step authentication:", error.message);
    },
  });
};
const Security = () => {
  const { data, isLoading: isFetching, error } = useSecurityInfo(); // Hook used inside component
  const { mutate, isLoading: isMutating } = useUpdateTwoStepAuth(); // Hook used inside component

  // Further logic...

  const handleToggle = () => {
    if (!data) return; // Prevent toggle if data is undefined

    const newStatus = !data.twoStepAuth; // Toggle the status based on the current value of twoStepAuth
    mutate(newStatus, {
      onSuccess: () => {
        alert(
          newStatus
            ? "Two-step verification enabled!"
            : "Two-step verification disabled!"
        );
      },
      onError: (err) => {
        alert(err.message);
      },
    });
  };

  if (isFetching) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  // If data is undefined or null, show a message instead of rendering the toggle button
  if (!data)
    return <p className="text-red-500">No security information available.</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Security Settings</h2>

      <div className="flex items-center justify-between">
        <p>Enable Two-Step Verification</p>
        <button
          className={`${
            data.twoStepAuth ? "bg-green-500" : "bg-gray-500"
          } text-white rounded-full px-4 py-2`}
          onClick={handleToggle}
          disabled={isMutating}
        >
          {isMutating ? "Updating..." : data.twoStepAuth ? "Disable" : "Enable"}
        </button>
      </div>
    </div>
  );
};

export default Security;
