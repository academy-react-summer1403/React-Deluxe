// import React from "react";
const CourseCard = ({ title, image, category, level, price, teacher }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white flex flex-col h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover mb-4 rounded"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{category}</p>
      <p className="text-gray-600 mb-2">{level}</p>
      <p className="text-gray-800 font-semibold mb-2">{price} تومان</p>
      <p className="text-gray-600">مدرس: {teacher}</p>
    </div>
  );
};

export { CourseCard };
