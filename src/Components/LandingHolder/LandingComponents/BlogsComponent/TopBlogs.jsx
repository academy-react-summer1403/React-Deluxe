import React from "react";
import { BsCalendar4Week } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

const blogsData = [
  {
    title: "زبان جاوا اسکریپت در چه حوزه ای به کار میرود؟",
    icon: "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
    author: "محمدحسین بحرالعلومی",
    date: "۲۳ فروردین ۱۴۰۳",
    views: "۳۰۴",
    color: "bg-yellow-300",
  },
  {
    title: "فیگما یا ادوبی ایکس‌دی؟",
    icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
    author: "محمدحسین خلیل پور",
    date: "۳۰ اردیبهشت ۱۴۰۳",
    views: "۲۴۰",
    color: "bg-red-400",
  },
  {
    title: "فرق ری‌اکت با نکست جی‌اس چیست؟",
    icon: "https://s3-alpha-sig.figma.com/img/e186/5b86/bca1c8cd3132e2639f0ded1c76c11d46?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZpF7verSM~Wu9RNqd6hHA12IbI~LIx0FgOIbjEJ1VWHoFByPXm~I35f~hNBNQaRdeTzriYNSU5G0ZBRk~OdTp5AYbDVLbBVr-uELXIrqJ7qL5uwtJHsPoWAY4ezQFG8rQ-LdULqFnxFTniNE5jVzE7~rpHETIA1o2GIyx8AMsDEN92z1Z26hhXLoHvIIUW3wi6b0DkT179r81dYvmxs6GJy1VS5UIdfUYgiWvPJJJJo25PjCzBHLQk2npBWFV4xWDrtkZvxb~0aqJlk1ZBy-kgkQ0h-7g-7GJh~KAryZtkvoUJMQEWtt2mYD53c6RG478pyeiEK-M6JRMIG8zZUbLA__",
    author: "محسن اسفندیاری",
    date: "۲۷ اردیبهشت ۱۴۰۳",
    views: "۳۱۲",
    color: "bg-cyan-200",
  },
];

const TopBlogs = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">
          بلاگ های برتر هفته
        </h2>
        <div className="md:flex hidden  md:flex-wrap justify-center gap-8 mx-2">
          {blogsData.map((blog, index) => (
            <div
              key={index}
              className=" bg-white dark:bg-indigo-900 rounded-lg  flex-1 min-w-[370px] max-w-[450px]"
            >
              <div
                className={`h-72 mx-auto flex justify-center items-center mb-4 rounded-xl ${blog.color}`}
              >
                <img src={blog.icon} alt={""} className={`size-48 `} />
              </div>
              <h3 className="flex text-l font-bold mb-2 dark:text-white">
                {blog.title}
              </h3>
              <div className="flex justify-between mt-4 text-gray-500 space-x-2 rtl:space-x-reverse mb-2">
                <p className="flex text-gray-400 dark:text-white text-sm items-center ">
                  {blog.author}
                </p>
                <div>
                  <span
                    className={`inline-flex items-center dark:text-white text-xs gap-2 w-32 `}
                  >
                    <i /> {blog.date}
                    <BsCalendar4Week />
                  </span>
                  <span className="inline-flex items-center dark:text-white text-xs gap-2">
                    <i /> {blog.views} <BsEye />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-gray-900 dark:bg-blue-500 text-white px-5 py-1.5 rounded-full mt-8">
          مشاهده بیشتر
        </button>
      </div>
    </section>
  );
};

export { TopBlogs };
