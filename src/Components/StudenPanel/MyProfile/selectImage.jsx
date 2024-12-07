import React, { useState } from "react";
import axios from "axios";
import http from "../../../core/services/interceptor";
import { useQueryClient } from "@tanstack/react-query";

const UserImagesWithSelect = ({ userImages, currentPictureAddress }) => {
  const [currentPicture, setCurrentPicture] = useState(
    currentPictureAddress.replace(/\\/g, "/")
  );

  const handleSelectImage = async (imageId, imageUrl) => {
    try {
      // Create FormData and append the selected image's ID
      const formData = new FormData();
      formData.append("ImageId", imageId); // Send ImageId as form-data

      // Send the request to the backend
      const response = await http.post(
        `/SharePanel/SelectProfileImage`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure this header is set for form-data
          },
        }
      );

      // Update the current image
      setCurrentPicture(imageUrl.replace(/\\/g, "/"));
      toast.success("باریکلا", {
        position: "top-center",
      });

      queryClient.invalidateQueries("ProfileInfo");
    } catch (error) {
      console.error("Error updating profile picture:", error);
      alert("An error occurred while updating the profile picture.");
    }
  };

  const queryClient = useQueryClient();
  return (
    <div className="p-4">
      <div className="mb-6">
        <h3 className="text-md font-medium">تصویر پروفایل فعلی:</h3>
        <img
          src={currentPicture}
          alt="Current Profile"
          className="w-32 h-32 rounded-full shadow-md mt-4"
        />
      </div>
      <h3>انتخاب کنید</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {userImages.map((image) => (
          <div key={image.id} className="flex flex-col items-center">
            <img
              src={image.puctureAddress.replace(/\\/g, "/")}
              alt={image.pictureName}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <button
              onClick={() => handleSelectImage(image.id, image.puctureAddress)}
              className="mt-2 bg-blue-500 text-white text-sm px-4 py-1 rounded hover:bg-blue-600"
            >
              انتخاب
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserImagesWithSelect;
