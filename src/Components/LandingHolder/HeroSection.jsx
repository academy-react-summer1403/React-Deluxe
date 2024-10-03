import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-black">
          آموزش مدرن پیشرفت سریع
        </h2>
        <p className="text-lg mb-8 text-black">
          آکادمی آموزش تخصصی برنامه نویسی بحر از کودکان تا بزرگسال
        </p>
        <div className="flex justify-center space-x-8 mb-12">
          <img src="/path-to-html-icon" alt="HTML" className="h-16 " />
          <img src="/path-to-css-icon" alt="CSS" className="h-16" />
          <img src="/path-to-js-icon" alt="JavaScript" className="h-16" />
          <img src="/path-to-react-icon" alt="React" className="h-16" />
        </div>
        <button className="bg-black text-white py-2 px-2 rounded hover:bg-blue-700">
          جدیدترین دوره ها
        </button>
      </div>
    </section>
  );
};

export { HeroSection };
