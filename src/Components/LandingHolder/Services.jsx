import React from "react";

const servicesData = [
  {
    title: "آزمون ها",
    description: "از آزمون های تعیین سطح محتوانایی سطح خودتون رو بسنجید",
    icon: "/path-to-icon-exam.png",
  },
  {
    title: "فرصت‌های شغلی",
    description:
      "با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده میشه",
    icon: "/path-to-icon-job.png",
  },
  {
    title: "مدرک معتبر",
    description: "با مدرک ما می‌توانید به راحتی در همه جا استخدام شوید",
    icon: "/path-to-icon-certificate.png",
  },
  {
    title: "مشاوره ۲۴ ساعته",
    description: "مشاورین ما ۲۴ ساعته جوابگوی سوال های شما هستند",
    icon: "/path-to-icon-support.png",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          خدماتی که ما در طی دوره‌ها به شما ارائه میدیم
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg flex items-center"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="h-12 mr-4"
              />
              <div className="text-right">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Services };
