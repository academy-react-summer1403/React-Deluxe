// CourseDescription.jsx
import React, { useState } from "react";

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
    <div className="mt-4">
      <button
        onClick={copyToClipboard}
        className="border-2 border-[#3772FF] text-[#3772FF] font-serif text-lg/4 line-heith px-4 py-2 rounded-full"
      >
        {copied ? "کپی شد!" : "کپی کردن لینک صفحه"}
      </button>
    </div>
  );
};

const CourseDesc = () => {
  return (
    <div className="bg-white p-6 rounded-lg mb-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4">توضیحات دوره</h3>
      <p className="text-gray-700 leading-relaxed">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته.
        <br />
        <br />
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته.
        <br />
        <br />
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته.
        <br />
        <br />
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته.
      </p>
      <div className="flex justify-start gap-6">
        <StarRating rating={4} />
        <CopyLink />
      </div>
    </div>
  );
};

export { CourseDesc };
