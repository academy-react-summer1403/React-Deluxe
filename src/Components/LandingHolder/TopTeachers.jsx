import React from "react";

const teachersData = [
  {
    name: "محمدحسین شایانپور",
    rating: "۴.۷",
    icon: "/path-to-teacher1.png",
  },
  {
    name: "محمدحسین راستگار",
    rating: "۴.۸",
    icon: "/path-to-teacher2.png",
  },
  {
    name: "محسن اسفندیاری",
    rating: "۴.۲",
    icon: "/path-to-teacher3.png",
  },
];

const TopTeachers = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">اساتید برتر هفته آکادمی</h2>
        <div className="flex flex-col items-center">
          <p className="text-gray-600 mb-6">
            در هفته جاری، آکادمی برنامه‌نویسی به معرفی اساتید برتر خود می‌پردازد
            که با دانش عمیق و تجربه گسترده در زمینه‌های مختلف برنامه‌نویسی،
            آماده ارائه جلسات مشاوره، فضایی پویا و کارآموزش با بازده یادگیری
            بالا هستند.
          </p>
          <div className="flex justify-center space-x-8 rtl:space-x-reverse">
            {teachersData.map((teacher, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg text-center"
              >
                <img
                  src={teacher.icon}
                  alt={teacher.name}
                  className="h-16 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
                <p className="text-gray-500">رتبه: {teacher.rating}</p>
              </div>
            ))}
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full mt-8">
            صفحه اساتید
          </button>
        </div>
      </div>
    </section>
  );
};

export { TopTeachers };
