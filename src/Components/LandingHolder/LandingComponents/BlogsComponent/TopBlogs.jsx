import React from "react";
import { BsCalendar4Week } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

const blogsData = [
  {
    title: "زبان جاوا اسکریپت در چه حوزه ای به کار میرود؟",
    icon: "/path-to-js-icon.png",
    author: "محمدحسین بحرالعلومی",
    date: "۲۳ فروردین ۱۴۰۳",
    views: "۳۰۴",
    color: "bg-cyan-200",
  },
  {
    title: "فیگما یا ادوبی ایکس‌دی؟",
    icon: "/path-to-figma-icon.png",
    author: "محمدحسین خلیل پور",
    date: "۳۰ اردیبهشت ۱۴۰۳",
    views: "۲۴۰",
    color: "bg-red-400",
  },
  {
    title: "فرق ری‌اکت با نکست جی‌اس چیست؟",
    icon: "/path-to-react-icon.png",
    author: "محسن اسفندیاری",
    date: "۲۷ اردیبهشت ۱۴۰۳",
    views: "۳۱۲",
    color: "bg-yellow-300",
  },
];

const TopBlogs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">بلاگ های برتر هفته</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {blogsData.map((blog, index) => (
            <div
              key={index}
              className=" bg-white rounded-lg  flex-1 min-w-[370px] max-w-[450px]"
            >
              <div
                className={`h-72 mx-auto mb-4 rounded-xl ${blog.color}`}
              ></div>
              <h3 className="flex text-l font-bold mb-2">{blog.title}</h3>
              <div className="flex justify-between mt-4 text-gray-500 space-x-2 rtl:space-x-reverse">
                <p className="flex text-gray-400 text-sm items-center ">
                  {blog.author}
                </p>
                <div>
                  <span
                    className={`inline-flex items-center text-xs gap-2 w-32 `}
                  >
                    <i /> {blog.date}
                    <BsCalendar4Week />
                  </span>
                  <span className="inline-flex items-center text-xs gap-2">
                    <i /> {blog.views} <BsEye />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-gray-900 text-white px-5 py-1.5 rounded-full mt-8">
          مشاهده بیشتر
        </button>
      </div>
    </section>
  );
};

export { TopBlogs };
