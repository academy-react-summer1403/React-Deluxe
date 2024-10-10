// CourseDescription.jsx
import { Rate } from "antd";
import React, { useState } from "react";
import { IoIosLink } from "react-icons/io";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center mt-4">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? "#FFB700" : "#E4E4E4"}
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path d="M12 .587l3.668 7.431 8.24 1.198-5.954 5.426 1.405 8.21L12 18.897l-7.359 3.88 1.405-8.21-5.954-5.426 8.24-1.198L12 .587z" />
        </svg>
      ))}
      <span className="text-[#7C7C7C] ml-2">{rating} از ۵</span>
    </div>
  );
};

const CopyLink = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="mr-5 -mt-1">
      <button
        onClick={copyToClipboard}
        className="border-2 border-[#3772FF] text-[#3772FF] text-lg/4 line-heith px-4 py-2 rounded-full"
      >
        {copied ? (
          <div className="flex">
            <IoIosLink className="-scale-x-[1] ml-2 text-[#3772FF] dark:text-white" />
            <span className="text-[#3772FF] dark:text-white">کپی شد!</span>
          </div>
        ) : (
          <div className="flex">
            <IoIosLink className="-scale-x-[1] ml-2" />
            کپی کردن لینک صفحه
          </div>
        )}
      </button>
    </div>
  );
};

const CourseDesc = () => {
  return (
    <div className="bg-white p-6 rounded-lg mb-6">
      <h3 className="text-xl text-gray-500 font-bold mb-4">توضیحات دوره</h3>
      <p className="text-gray-800 leading-relaxed">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        <br />
        <br />
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        <br />
        <br />
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        <br />
        <br />
      </p>
      <div className="flex flex-col justify-start gap-3 mt-5 lg:flex-row">
        <div className="mb-6 lg:mb-0">
          <span className="text-[#3772FF] dark:text-white">امتیاز بدید</span>
          <Rate className="mr-4" defaultValue={3} />
        </div>
        <CopyLink />
      </div>
    </div>
  );
};

export { CourseDesc };
