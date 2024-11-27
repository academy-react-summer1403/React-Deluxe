import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getSecurityInfo,
  updateTwoStepAuth,
} from "../../../core/services/api/StudentPanel/TwoAuthEnable";

const useSecurityInfo = () => {
  return useQuery(["securityInfo"], getSecurityInfo);
};

const useUpdateTwoStepAuth = () => {
  const queryClient = useQueryClient();

  return useMutation(updateTwoStepAuth, {
    onSuccess: () => {
      // Invalidate and refetch the security info query
      queryClient.invalidateQueries(["securityInfo"]);
    },
    onError: (error) => {
      console.error("Error updating two-step authentication:", error.message);
    },
  });
};

const Security = () => {
  const { data, isLoading: isFetching, error } = useSecurityInfo();
  const { mutate, isLoading: isMutating } = useUpdateTwoStepAuth();

  const handleToggle = () => {
    const newStatus = !data?.twoStepAuth; // Toggle the status
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
