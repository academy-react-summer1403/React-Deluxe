import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap justify-center space-x-4 rtl:space-x-reverse mb-8">
          <a href="/" className="text-gray-400 hover:text-white">
            خانه
          </a>
          <a href="/about" className="text-gray-400 hover:text-white">
            درباره ما
          </a>
          <a href="/courses" className="text-gray-400 hover:text-white">
            دوره ها
          </a>
          <a href="/teachers" className="text-gray-400 hover:text-white">
            اساتید
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white">
            ارتباط با ما
          </a>
        </div>
        <div className="flex justify-center space-x-6 rtl:space-x-reverse mb-8">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-instagram text-gray-400 hover:text-white text-2xl" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-twitter text-gray-400 hover:text-white text-2xl" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-facebook text-gray-400 hover:text-white text-2xl" />
          </a>
        </div>
        <div className="text-gray-400">آکادمی کد نویسی بحر © ۱۴۰۳</div>
      </div>
    </footer>
  );
};

export { Footer };
