import React from "react";

const blogsData = [
  {
    title: "زبان جاوا اسکریپت در چه حوزه ای به کار میرود؟",
    icon: "/path-to-js-icon.png",
    author: "محمدحسین راستگار",
    date: "۲۳ فروردین ۱۴۰۳",
    views: "۳۰۴",
    comments: "۱۳",
  },
  {
    title: "فیگما یا ادوبی ایکس‌دی؟",
    icon: "/path-to-figma-icon.png",
    author: "محمدحسین شایانپور",
    date: "۳۰ اردیبهشت ۱۴۰۳",
    views: "۲۴۰",
    comments: "۴",
  },
  {
    title: "فرق ری‌اکت با نکست جی‌اس چیست؟",
    icon: "/path-to-react-icon.png",
    author: "محسن اسفندیاری",
    date: "۲۷ اردیبهشت ۱۴۰۳",
    views: "۳۱۲",
    comments: "۷",
  },
];

const TopBlogs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">بلاگ های برتر هفته</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <img
                src={blog.icon}
                alt={blog.title}
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-400 text-sm">{blog.author}</p>
              <div className="flex justify-center mt-4 text-gray-500 space-x-2 rtl:space-x-reverse">
                <span className="inline-flex items-center">
                  <i className="icon-calendar" /> {blog.date}
                </span>
                <span className="inline-flex items-center">
                  <i className="icon-eye" /> {blog.views} بازدید
                </span>
                <span className="inline-flex items-center">
                  <i className="icon-comment" /> {blog.comments} نظر
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full mt-8">
          مشاهده بیشتر
        </button>
      </div>
    </section>
  );
};

export { TopBlogs };
