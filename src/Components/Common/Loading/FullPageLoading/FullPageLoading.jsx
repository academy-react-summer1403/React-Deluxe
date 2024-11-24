import React from "react";
import Style from "./FullPageLoading.module.css";

export const FullPageLoading = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-">
      <div className={Style["custom-loader"]}></div>
      <p className="mt-3">در حال بارگذاری...</p>
    </div>
  );
};
