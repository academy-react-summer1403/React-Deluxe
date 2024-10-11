import React, { useState } from "react";
import { CourseList } from "./CourseList"; // فرض بر اینکه CourseList در همان پوشه است

const CategoryMenu = () => {
  const [activeCategory, setActiveCategory] = useState("جدیدترین");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex flex-col items-start mb-6">
      <div className="flex justify-start space-x-4 mb-4">
        <button
          onClick={() => handleCategoryClick("جدیدترین")}
          className={`px-4 py-2 rounded-full border border-transparent ${
            activeCategory === "جدیدترین"
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-800 hover:border-red-500 hover:text-red-500"
          }`}
        >
          جدیدترین
        </button>
        <button
          onClick={() => handleCategoryClick("محبوب‌ترین")}
          className={`px-4 py-2 rounded-full border border-transparent ${
            activeCategory === "محبوب‌ترین"
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-800 hover:border-red-500 hover:text-red-500"
          }`}
        >
          محبوب‌ترین
        </button>
        <button
          onClick={() => handleCategoryClick("گران‌ترین")}
          className={`px-4 py-2 rounded-full border border-transparent ${
            activeCategory === "گران‌ترین"
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-800 hover:border-red-500 hover:text-red-500"
          }`}
        >
          گران‌ترین
        </button>
        <button
          onClick={() => handleCategoryClick("ارزان‌ترین")}
          className={`px-4 py-2 rounded-full border border-transparent ${
            activeCategory === "ارزان‌ترین"
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-800 hover:border-red-500 hover:text-red-500"
          }`}
        >
          ارزان‌ترین
        </button>
      </div>
      <div className="text-lg font-semibold">
        دسته‌بندی فعال: <span className="text-red-500">{activeCategory}</span>
      </div>
      {/* نمایش دوره‌های مربوط به دسته‌بندی فعال */}
      <CourseList category={activeCategory} />
    </div>
  );
};

export { CategoryMenu };
