import React from "react";

const BlogsHeroSection = () => {
  return (
    <div className="bg-white text-black dark:text-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 mr-0 sm:mr-6 md:mr-10 lg:mr-14 text-center font-sans relative dark:bg-[#041124]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-12">
        اطلاعات بیشتر ، درک بهتر
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl dark:text-white text-gray-500 leading-relaxed break-words">
        ما در بلاگ ها اطلاعات شما رو نسبت به <br /> تکنولوژی ای که یاد میگیرید
        بیشتر میکنیم
      </p>
    </div>
  );
};

export { BlogsHeroSection };
