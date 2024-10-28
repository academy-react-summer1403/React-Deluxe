import React from "react";

const servicesData = [
  {
    title: "مدرک معتبر",
    description: "با مدرک ما میتوانید به راحتی در همه جا استخدام بشید",
    icon: "src/assets/licence.png",
    border: "border-blue-500",
  },
  {
    title: "آزمون ها",
    description: "با آزمون های تعیین سطح میتوانید سطح دانش خودتون رو بسنجید",
    border: "border-red-500",
    icon: "src/assets/tests.png",
  },
  {
    title: "مشاوره ۲۴ ساعته",
    description: "مشاورین ما ۲۴ ساعته جوابگوی سوال های شما هستند",
    border: "border-yellow-500",
    icon: "src/assets/support.png",
  },
  {
    title: "فرصت‌های شغلی",
    description:
      "با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده میشه",
    icon: "src/assets/career.png",
    border: "border-pink-500",
  },
];

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center ">
        <h2 className="text-3xl font-bold dark:text-white">
          خدماتی که ما در طی دوره‌ها
        </h2>
        <h2 className="text-3xl font-bold mb-8  dark:text-white">
          به شما ارائه می‌دهیم
        </h2>

        {/* First Row */}
        <div className="flex flex-col md:flex-row justify-between flex-wrap gap-4 md:gap-8">
          {servicesData.slice(0, 2).map((service, index) => (
            <div
              key={index}
              className="flex flex-row flex-shrink-0 md:items-center   hover:bg-gradient-to-r dark:from-pink-500 dark:via-blue-500 dark:to-teal-500 from-pink-100 via-blue-100 to-teal-100 p-4 border w-full md:w-1/2 rounded-3xl bg-gray-100 dark:bg-gray-700 border-gray-300 hover:border-blue-300 flex-1"
            >
              <div
                className={`flex-shrink-0 border size-14 ${service.border} bg-white rounded-full dark:bg-gray-200  mx-2`}
              >
                <img src={service.icon} alt="" />
              </div>
              <div className="text-right">
                <h3 className="text-xl font-semibold mb-1 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-100">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 mt-4">
          {servicesData.slice(2, 4).map((service, index) => (
            <div
              key={index}
              className={`flex flex-row flex-shrink-0 md:items-center p-4 hover:bg-gradient-to-r dark:from-pink-500 dark:via-blue-500 dark:to-teal-500 from-pink-100 via-blue-100 to-teal-100  border w-full md:w-1/2 rounded-3xl bg-gray-100 dark:bg-gray-700 border-gray-300 hover:border-blue-300 flex-1`}
            >
              <div
                className={`flex-shrink-0 border size-14 ${service.border} bg-white rounded-full dark:bg-gray-200  mx-2`}
              >
                <img src={service.icon} alt="" />
              </div>
              <div className="text-right">
                <h3 className="text-xl font-semibold mb-1 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-100">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Services };
