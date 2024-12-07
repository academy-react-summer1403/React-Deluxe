import React, { useEffect, useState } from "react";
import {
  getSecurityInfo,
  updateTwoStepAuth,
} from "../../../core/services/api/StudentPanel/TwoAuthEnable";
import { toast } from "react-toastify";

const Security = () => {
  const [twoStepAuth, setTwoStepAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [newStatus, setNewStatus] = useState(false);
  console.log(twoStepAuth);

  useEffect(() => {
    const fetchSecurityInfo = async () => {
      try {
        const data = await getSecurityInfo();
        setTwoStepAuth(data.twoStepAuth);
      } catch (error) {
        console.error("Failed to fetch security info:", error.message);
      }
    };

    fetchSecurityInfo();
  }, []);

  // Handle Toggle Click (Show Confirmation Dialog)
  const handleToggle = (status) => {
    setNewStatus(status);
    setShowConfirmDialog(true);
  };

  // Confirm Toggle Change
  const confirmToggle = async () => {
    setLoading(true);
    setShowConfirmDialog(false);
    try {
      const result = await updateTwoStepAuth(!twoStepAuth);
      setTwoStepAuth(!twoStepAuth);
      toast.success(result.message, {
        position: "top-center",
      });
    } catch (error) {
      console.error("Failed to update two-step authentication:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Cancel Confirmation
  const cancelToggle = () => {
    setShowConfirmDialog(false);
  };

  return (
    <div className="security-tab mt-14">
      <h2 className="text-lg font-bold mb-4">تنظیمات امنیتی</h2>
      <div className="flex items-center justify-between">
        <span>تایید دو مرحله ای</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={twoStepAuth}
            onChange={() => handleToggle(!twoStepAuth)}
            disabled={loading}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-500"></div>
          <div
            className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transform transition-transform ${
              twoStepAuth ? "translate-x-5" : ""
            }`}
          ></div>
        </label>
      </div>
      {loading && <p className="text-sm text-gray-500 mt-2">Updating...</p>}

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md w-80 text-center">
            <p>
              مطمئنید که میخواهید تایید دو مرحله ای را{" "}
              {newStatus ? "فعال" : "غیر فعال"} کنید؟
            </p>
            <div className="flex justify-around mt-4">
              <button
                onClick={confirmToggle}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                بله
              </button>
              <button
                onClick={cancelToggle}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                نچ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Security };
