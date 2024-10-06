import React from "react";

const teachersData = [
  {
    name: "محمدحسین خلیل پور",
    rating: "۴.۷",
    icon: "/path-to-teacher1.png",
  },
  {
    name: "محمدحسین بهرالعلومی",
    rating: "۴.۸",
    icon: "/path-to-teacher2.png",
    top: "bottom-10",
  },
  {
    name: "محسن اسفندیاری",
    rating: "۴.۲",
    icon: "/path-to-teacher3.png",
  },
];

const TopTeachers = () => {
  return (
    <section className="py-16 bg-gray-950 mb-5 rounded-3xl h-auto">
      <div className="container mx-auto text-center">
        <div className="flex justify-between">
          <div className="flex flex-col items-start text-justify w-2/5 mr-10">
            <h2 className="text-3xl font-bold text-white mb-8">
              اساتید برتر هفته آکادمی
            </h2>
            <p className="text-white mb-6">
              در هفته جاری، اکادمی برنامه‌نویسی ما مفتخر است که از اساتید برتر
              خود تقدیر کند. این اساتید با دانش عمیق و تجربه گسترده خود در
              زمینه‌های مختلف برنامه‌نویسی، نه تنها به ارتقاء مهارت‌های
              دانشجویان کمک کرده‌اند، بلکه با برگزاری کارگاه‌ها و جلسات مشاوره،
              فضایی پویا و انگیزشی را برای یادگیری فراهم آورده‌اند.
            </p>
            <button className="bg-blue-500 text-white px-5 py-1.5 rounded-full mt-8">
              {" "}
              صفحه اساتید
            </button>
          </div>
          <div className="bg-gray-900 rounded-2xl flex items-center justify-center mx-10 h-80 w-3/5">
            <div className="flex">
              {teachersData.map((teacher, index) => (
                <div
                  key={index}
                  className={`text-center flex flex-col items-center min-w-[250px] max-w-[350px] relative  ${teacher.top}`}
                >
                  <div className="bg-white rounded-full size-20">
                    <img
                      src={teacher.icon}
                      alt=""
                      className="h-16 mx-auto mb-4 rounded-full"
                    />
                  </div>
                  <h3 className="text-l text-white  font-semibold mb-2">
                    {teacher.name}
                  </h3>
                  <p className="text-gray-500">رتبه: {teacher.rating}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TopTeachers };
