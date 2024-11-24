import React from "react";
import Style from "./QueryLoading.module.css";

export const QueryLoading = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className={Style["custom-loader"]}></div>
      {/* <p className="mt-3">در حال بارگذاری...</p> */}
    </div>
  );
};
