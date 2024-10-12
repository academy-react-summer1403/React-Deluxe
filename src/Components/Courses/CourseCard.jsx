// import React from "react";
const CourseCard = ({ title, image, category, level, price, teacher, background }) => {
  return (
    <div>
      {/* دایو اصلی کارت که به آن استایل background می‌دهیم */}
      <div
        className="relative border rounded-3xl p-4 bg-white flex flex-col h-60 mt-5"
        style={{ backgroundColor: background }} // اضافه کردن بک‌گراند دلخواه
      >
        <div className="absolute top-2 right-2 flex gap-2">
          <p className="text-white bg-purple-500 w-20 text-sm text-center rounded-lg">
            {category}
          </p>
          <p className="text-white bg-blue-600 w-20 text-sm text-center rounded-lg">
            {level}
          </p>
        </div>

        <img
          src={image}
          alt={title}
          className="object-cover mb-4 pr-20 rounded w-52 h-52"
        />
      </div>
      
      {/* عنوان دوره */}
      <h2 className="text-xl font-bold mb-2 text-right mt-2">{title}</h2>

      {/* اطلاعات مدرس و قیمت */}
      <div className="flex justify-between">
        <p className="text-gray-600 text-sm">مدرس: {teacher}</p>
        <p className="text-gray-800 font-semibold">{price} تومان</p>
      </div>
    </div>
  );
};

export { CourseCard };
