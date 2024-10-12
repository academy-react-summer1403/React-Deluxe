import  { useState } from "react";
import { CourseList } from "./CourseList"; 

const CategoryMenu = () => {
  const [activeCategory, setActiveCategory] = useState("جدیدترین");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex flex-col items-start mb-6 mr-8">
      <div className="flex justify-start space-x-4 mb-4">
        <p className="font-bold text-lg p-2">ترتیب</p>
        <button
          onClick={() => handleCategoryClick("جدیدترین")}
          className={`px-4 py-2 rounded-full border border-transparent ${
            activeCategory === "جدیدترین"
              ? "bg-red-500 text-white"
              : " border-gray-600 text-gray-800 hover:border-red-500 hover:text-red-500"
          }`}
        >
          جدیدترین
        </button>
        <button
          onClick={() => handleCategoryClick("محبوب‌ترین")}
          className={`px-4 py-2 rounded-full border border-transparent ${
            activeCategory === "محبوب‌ترین"
              ? "bg-red-500 text-white"
              : "bg-white  border-gray-600  text-gray-800  hover:border-red-500 hover:text-red-500"
          }`}
        >
          محبوب‌ترین
        </button>
        <button
          onClick={() => handleCategoryClick("گران‌ترین")}
          className={`px-4 py-2 rounded-full border border-transparent ${
            activeCategory === "گران‌ترین"
              ? "bg-red-500 text-white"
              : "bg-white  border-gray-600 text-gray-800  hover:border-red-500 hover:text-red-500"

          }`}
        >
          گران‌ترین
        </button>
        <button
          onClick={() => handleCategoryClick("ارزان‌ترین")}
          className={` px-4 py-2 rounded-full border border-transparent ${
            activeCategory === "ارزان‌ترین"
              ? "bg-red-500 text-white"
              : "bg-white  border-gray-600  text-gray-800 hover:border-red-500 hover:text-red-500"
          }`}
        >
          ارزان‌ترین
        </button>
      </div>
     
      <CourseList category={activeCategory} />
    </div>
  );
};

export { CategoryMenu };
