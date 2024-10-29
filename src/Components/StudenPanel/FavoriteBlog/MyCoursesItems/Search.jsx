import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const SearchInput = () => {
  return (
    <div className="flex w-fit items-center bg-gray-100 dark:bg-gray-800  rounded-lg">
      <input
        type="text"
        placeholder="دوره مورد نظر را جست‌جو کنید..."
        className="py-2 px-3 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 rounded-r-lg outline-none border-none"
      />
      <div className="flex items-center justify-center  bg-blue-500  size-9 px-2 rounded-xl">
        <SearchOutlined className="text-white  text-lg" />
      </div>
    </div>
  );
};

export { SearchInput };
