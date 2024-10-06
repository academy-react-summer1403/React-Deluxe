import React from "react";

const servicesData = [
  {
    title: "مدرک معتبر",
    description: "با مدرک ما میتوانید به راحتی در همه جا استخدام بشید",
    icon: "/path-to-service-icon-2.png",
  },
  {
    title: "آزمون ها",
    description: "با آزمون های تعیین سطح میتوانید سطح دانش خودتون رو بسنجید",
    icon: "/path-to-service-icon-1.png",
  },
  {
    title: "مشاوره ۲۴ ساعته",
    description: "مشاورین ما ۲۴ ساعته جوابگوی سوال های شما هستند",
    icon: "/path-to-service-icon-4.png",
  },
  {
    title: "فرصت‌های شغلی",
    description:
      "با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده میشه",
    icon: "/path-to-service-icon-3.png",
  },
];

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          خدماتی که ما در طی دوره‌ها به شما ارائه می‌دهیم
        </h2>

        {/* First Row */}
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
          {servicesData.slice(0, 2).map((service, index) => (
            <div
              key={index}
              className={`flex items-center p-4 border rounded-lg bg-gray-100  border-gray-300 hover:border-blue-500
               flex-1`}
            >
              <div className="flex-shrink-0 mx-2">
                <img src={service.icon} alt="" className="h-10 w-10" />
              </div>
              <div className="text-right">
                <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 mt-4">
          {servicesData.slice(2, 4).map((service, index) => (
            <div
              key={index}
              className={`flex items-center p-4 border rounded-lg  bg-gray-100 border-gray-300 hover:border-blue-500
               flex-1`}
            >
              <div className="flex-shrink-0 mx-2">
                <img src={service.icon} alt="" className="h-10 w-10" />
              </div>
              <div className="text-right">
                <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Services };
