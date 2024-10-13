const CourseCard = ({ title, image, category, level, price, teacher, background }) => {
  return (
    <div className="flex flex-col w-full max-w-sm mx-auto mb-5">
      {/* دایو اصلی کارت که به آن استایل background می‌دهیم */}
      <div
        className="relative border rounded-3xl p-4 bg-white flex flex-col h-60 mt-5 shadow-md"
        style={{ backgroundColor: background }} 
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
          className="object-cover mb-4 rounded w-full h-40 sm:h-48 md:h-52 lg:h-48 xl:h-52"
        />
      </div>
      
      {/* عنوان دوره */}
      <h2 className="text-xl font-bold mb-2 text-right mt-2 dark:text-white">{title}</h2>

      {/* اطلاعات مدرس و قیمت */}
      <div className="flex flex-col sm:flex-row justify-between">
        <p className="text-gray-600 text-sm dark:text-white">مدرس: {teacher}</p>
        <p className="text-gray-800 font-semibold">{price} تومان</p>
      </div>
    </div>
  );
};

export { CourseCard };
