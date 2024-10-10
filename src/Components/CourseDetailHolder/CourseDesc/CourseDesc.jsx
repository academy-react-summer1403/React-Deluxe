// CourseDescription.jsx
import { Rate } from "antd";
import React, { useState } from "react";
import { IoIosLink } from "react-icons/io";

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
        className="border-2 border-[#3772FF] dark:border-indigo-800 text-[#3772FF] dark:text-indigo-300 text-lg/4 line-heith px-4 py-2 rounded-full"
      >
        {copied ? (
          <div className="flex">
            <IoIosLink className="-scale-x-[1] ml-2 text-[#3772FF] dark:text-white" />
            <span className="text-[#3772FF] dark:text-white">کپی شد!</span>
          </div>
        ) : (
          <div className="flex">
            <IoIosLink className="-scale-x-[1] ml-2 text-[#3772FF] dark:text-white" />
            <span className="text-[#3772FF] dark:text-white">
              کپی کردن لینک صفحه
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

const CourseDesc = () => {
  return (
    <div className="p-6 mb-6 bg-white rounded-lg dark:bg-indigo-950">
      <h3 className="mb-4 text-xl font-bold text-gray-500 dark:text-gray-300">
        توضیحات دوره
      </h3>
      <p className="leading-relaxed text-gray-800 dark:text-gray-200">
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
