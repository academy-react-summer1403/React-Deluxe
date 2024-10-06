// CourseInfo.jsx
import React from "react";

const CourseInfo = () => {
  //   return (
  //     <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-6">
  //       <div className="flex space-x-4">
  //         <img
  //           src="path-to-js-logo"
  //           alt="JS Logo"
  //           className="w-20 h-20 object-cover rounded"
  //         />
  //         <div>
  //           <h2 className="text-2xl font-bold">دوره جاوااسکریپت</h2>
  //           <p>مدرس: محمدحسین بحرانی</p>
  //           <p>وضعیت: در حال برگزاری</p>
  //         </div>
  //       </div>
  //       <div className="text-right">
  //         <p className="text-lg font-bold">۲۰,۵۰۰,۰۰۰ تومان</p>
  //         <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
  //           رزرو دوره
  //         </button>
  //       </div>
  //     </div>
  //   );
  //   return (
  //     <div className="flex justify-between items-center bg-[#F9F9F9] p-6 rounded-lg mb-6 shadow-md">
  //       <div className="flex space-x-4 items-center">
  //         <img
  //           src="../../../public/vite.svg" // Add your JavaScript logo image path
  //           alt="JS Logo"
  //           className="w-20 h-20 object-cover rounded"
  //         />
  //         <div className="text-right">
  //           <h2 className="text-2xl font-bold text-[#1B1B1B]">
  //             دوره جاوااسکریپت
  //           </h2>
  //           <p className="text-[#7C7C7C]">مدرس: محمدحسین بحرانی</p>
  //           <p className="text-[#7C7C7C]">وضعیت: در حال برگزاری</p>
  //         </div>
  //       </div>
  //       <div className="text-right">
  //         <p className="text-2xl font-bold text-[#1B1B1B]">۲۰,۵۰۰,۰۰۰ تومان</p>
  //         <button className="bg-[#FFB700] text-white px-6 py-2 rounded-md shadow-md">
  //           رزرو دوره
  //         </button>
  //       </div>
  //     </div>
  //   );
  //   return (
  //     <div className="flex flex-row-reverse lg:flex-row-reverse bg-white p-6 rounded-lg shadow-md">
  //       {/* Left Section: Course Details */}
  //       <div className="flex flex-col flex-grow lg:mr-6">
  //         <h1 className="text-2xl font-bold text-[#1B1B1B] mb-2">
  //           دوره جاوااسکریپت
  //         </h1>
  //         <div className="flex items-center mb-4">
  //           <button className="bg-[#FFB700] text-white px-3 py-1 rounded-md mr-2">
  //             👍
  //           </button>
  //           <button className="bg-[#E4E4E4] text-[#1B1B1B] px-3 py-1 rounded-md">
  //             👎
  //           </button>
  //         </div>
  //         <div className="flex flex-wrap text-[#7C7C7C] mb-4">
  //           <div className="mr-6">
  //             <strong>مدرس:</strong> محمدمحسن برزگرزاده
  //           </div>
  //           <div className="mr-6">
  //             <strong>مدت زمان:</strong> ۳۴ ساعت
  //           </div>
  //           <div className="mr-6">
  //             <strong>سطح:</strong> مبتدی
  //           </div>
  //           <div className="mr-6">
  //             <strong>تاریخ شروع:</strong> ۳۱ خرداد ۱۴۰۲
  //           </div>
  //           <div className="mr-6">
  //             <strong>ظرفیت:</strong> ۲۹ نفر
  //           </div>
  //         </div>
  //         <button className="bg-[#FFB700] text-white px-4 py-2 rounded-md mb-4">
  //           اضافه به لیست موردعلاقه
  //         </button>
  //         <div className="text-[#7C7C7C]">
  //           <p className="mb-2">نقد و بررسی دوره:</p>
  //           <p>این دوره بهترین گزینه برای شروع یادگیری جاوااسکریپت است...</p>
  //         </div>
  //       </div>

  //       {/* Right Section: Course Image */}
  //       <div className="flex justify-center lg:w-1/3">
  //         <img
  //           src="https://via.placeholder.com/150" // Replace with your course image URL
  //           alt="Course"
  //           className="rounded-lg shadow-md"
  //         />
  //       </div>
  //     </div>
  //   );

  //   return (
  //     <div className="flex flex-row-reverse lg:flex-row-reverse bg-white p-6 rounded-lg shadow-md">
  //       {/* Left Section: Course Details */}
  //       <div className="flex flex-col flex-grow lg:mr-6">
  //         {/* 1st Row: Course Title */}
  //         <h1 className="text-3xl font-bold text-[#1B1B1B] mb-4">
  //           دوره جاوااسکریپت
  //         </h1>

  //         {/* 2nd Row: Course Info Section */}
  //         <div className="flex justify-between mb-4">
  //           <div className="text-[#7C7C7C]">
  //             <strong>وضعیت:</strong> <span className="text-[#1B1B1B]">فعال</span>
  //           </div>
  //           <div className="text-[#7C7C7C]">
  //             <strong>دسته بندی:</strong>{" "}
  //             <span className="text-[#1B1B1B]">برنامه نویسی</span>
  //           </div>
  //           <div className="text-[#7C7C7C]">
  //             <strong>سطح آموزشی:</strong>{" "}
  //             <span className="text-[#1B1B1B]">مبتدی</span>
  //           </div>
  //           <div className="text-[#7C7C7C]">
  //             <strong>مدرس:</strong>{" "}
  //             <span className="text-[#1B1B1B]">محمدمحسن برزگرزاده</span>
  //           </div>
  //         </div>

  //         {/* 3rd Row: Additional Info Section */}
  //         <div className="flex justify-between mb-4">
  //           <div className="text-[#7C7C7C]">
  //             <strong>تاریخ برگزاری:</strong>{" "}
  //             <span className="text-[#1B1B1B]">۳۱ خرداد ۱۴۰۲</span>
  //           </div>
  //           <div className="text-[#7C7C7C]">
  //             <strong>تاریخ اتمام:</strong>{" "}
  //             <span className="text-[#1B1B1B]">۳۱ تیر ۱۴۰۲</span>
  //           </div>
  //           <div className="text-[#7C7C7C]">
  //             <strong>تعداد لایک:</strong>{" "}
  //             <span className="text-[#1B1B1B]">۲۴</span>
  //           </div>
  //           <div className="text-[#7C7C7C]">
  //             <strong>تعداد دیسلایک:</strong>{" "}
  //             <span className="text-[#1B1B1B]">۵</span>
  //           </div>
  //         </div>

  //         {/* 4th Row: Price and Rating Section */}
  //         <div className="flex justify-between mb-4 items-center">
  //           <div className="text-[#FFB700] text-2xl font-bold">۲۵,۰۰۰ تومان</div>
  //           <div className="flex items-center">
  //             <div className="flex mr-2">
  //               {/* Star Rating */}
  //               <span className="text-[#FFB700]">⭐</span>
  //               <span className="text-[#FFB700]">⭐</span>
  //               <span className="text-[#FFB700]">⭐</span>
  //               <span className="text-[#FFB700]">⭐</span>
  //               <span className="text-[#C4C4C4]">⭐</span>
  //             </div>
  //             <span className="text-[#7C7C7C]">۴.۰ (۴۰ نظر)</span>
  //           </div>
  //         </div>

  //         {/* 5th Row: Action Buttons */}
  //         <div className="flex justify-between">
  //           <div className="flex">
  //             <button className="bg-[#FFB700] text-white px-4 py-2 rounded-md mr-2">
  //               👍
  //             </button>
  //             <button className="bg-[#E4E4E4] text-[#1B1B1B] px-4 py-2 rounded-md">
  //               👎
  //             </button>
  //           </div>
  //           <button className="bg-[#FFB700] text-white px-4 py-2 rounded-md mx-auto">
  //             اضافه به لیست مورد علاقه
  //           </button>
  //           <button className="bg-[#1B1B1B] text-white px-4 py-2 rounded-md mr-2">
  //             رزرو دوره
  //           </button>
  //         </div>
  //       </div>

  //       {/* Right Section: Course Image */}
  //       <div className="flex justify-center lg:w-1/3">
  //         <img
  //           src="https://via.placeholder.com/150" // Replace with your course image URL
  //           alt="Course"
  //           className="rounded-lg shadow-md"
  //         />
  //       </div>
  //     </div>
  //   );

  //   return (
  //     <div className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-md">
  //       {/* Right Section: Course Image */}
  //       <div className="flex justify-center lg:w-1/3">
  //         <img
  //           src="https://via.placeholder.com/150" // Replace with your course image URL
  //           alt="Course"
  //           className="rounded-lg shadow-md"
  //         />
  //       </div>

  //       {/* Left Section: Course Details */}
  //       <div className="flex flex-col flex-grow lg:ml-6">
  //         {/* 1st Row: Course Title */}
  //         <h1 className="text-3xl font-bold text-[#1B1B1B] mb-4">
  //           دوره جاوااسکریپت
  //         </h1>

  //         {/* 2nd Row: Course Info Section */}
  //         <div className="flex justify-between mb-4">
  //           <div className="text-[#7C7C7C]">
  //             <strong>وضعیت:</strong> <span className="text-[#1B1B1B]">فعال</span>
  //           </div>
  //           <div className="text-[#7C7C7C]">
  //             <strong>دسته بندی:</strong>{" "}
  //             <span className="text-[#1B1B1B]">برنامه نویسی</span>
  //           </div>
  //           <div className="text-[#7C7C7C]">
  //             <strong>سطح آموزشی:</strong>{" "}
  //             <span className="text-[#1B1B1B]">مبتدی</span>
  //           </div>
  //           <div className="text-[#7C7C7C]">
  //             <strong>مدرس:</strong>{" "}
  //             <span className="text-[#1B1B1B]">محمدمحسن برزگرزاده</span>
  //           </div>
  //         </div>

  //         {/* 3rd Row: Additional Info Section */}
  //         <div className="flex justify-between mb-4">
  //           <div className="text-[#7C7C7C]">
  //             <strong>تاریخ برگزاری:</strong>{" "}
  //             <span className="text-[#1B1B1B]">۳۱ خرداد ۱۴۰۲</span>
  //           </div>
  //           <div className="text-[#7C7C7C]">
  //             <strong>تاریخ اتمام:</strong>{" "}
  //             <span className="text-[#1B1B1B]">۳۱ تیر ۱۴۰۲</span>
  //           </div>
  //           <div className="text-[#7C7C7C]">
  //             <strong>تعداد لایک:</strong>{" "}
  //             <span className="text-[#1B1B1B]">۲۴</span>
  //           </div>
  //           <div className="text-[#7C7C7C]">
  //             <strong>تعداد دیسلایک:</strong>{" "}
  //             <span className="text-[#1B1B1B]">۵</span>
  //           </div>
  //         </div>

  //         {/* 4th Row: Price and Rating Section */}
  //         <div className="flex justify-between mb-4 items-center">
  //           <div className="text-[#FFB700] text-2xl font-bold">۲۵,۰۰۰ تومان</div>
  //           <div className="flex items-center">
  //             <div className="flex mr-2">
  //               {/* Star Rating */}
  //               <span className="text-[#FFB700]">⭐</span>
  //               <span className="text-[#FFB700]">⭐</span>
  //               <span className="text-[#FFB700]">⭐</span>
  //               <span className="text-[#FFB700]">⭐</span>
  //               <span className="text-[#C4C4C4]">⭐</span>
  //             </div>
  //             <span className="text-[#7C7C7C]">۴.۰ (۴۰ نظر)</span>
  //           </div>
  //         </div>

  //         {/* 5th Row: Action Buttons */}
  //         <div className="flex justify-between">
  //           <div className="flex">
  //             <button className="bg-[#FFB700] text-white px-4 py-2 rounded-md mr-2">
  //               👍
  //             </button>
  //             <button className="bg-[#E4E4E4] text-[#1B1B1B] px-4 py-2 rounded-md">
  //               👎
  //             </button>
  //           </div>
  //           <button className="bg-[#FFB700] text-white px-4 py-2 rounded-md mx-auto">
  //             اضافه به لیست مورد علاقه
  //           </button>
  //           <button className="bg-[#1B1B1B] text-white px-4 py-2 rounded-md mr-2">
  //             رزرو دوره
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );

  return (
    <div
      dir="rtl"
      className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-md"
    >
      {/* Right Section: Course Image */}
      <div className="flex justify-center lg:w-1/2 bg-slate-700 rounded-2xl">
        <img
          //   src="https://via.placeholder.com/150" // Replace with your course image URL
          alt="Course"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Left Section: Course Details */}
      <div className="flex flex-col flex-grow lg:mr-6">
        {/* 1st Row: Course Title */}
        <h1 className="text-3xl font-bold text-[#1B1B1B] mb-4">
          دوره جاوااسکریپت
        </h1>

        {/* 2nd Row: Course Info Section */}
        <div className="flex justify-between mb-4">
          <div className="text-[#7C7C7C]">
            <strong>وضعیت:</strong> <span className="text-[#1B1B1B]">فعال</span>
          </div>
          <div className="text-[#7C7C7C]">
            <strong>دسته بندی:</strong>{" "}
            <span className="text-[#1B1B1B]">برنامه نویسی</span>
          </div>
          <div className="text-[#7C7C7C]">
            <strong>سطح آموزشی:</strong>{" "}
            <span className="text-[#1B1B1B]">مبتدی</span>
          </div>
          <div className="text-[#7C7C7C]">
            <strong>مدرس:</strong>{" "}
            <span className="text-[#1B1B1B]">محمدمحسن برزگرزاده</span>
          </div>
        </div>

        {/* 3rd Row: Additional Info Section */}
        <div className="flex justify-between mb-4">
          <div className="text-[#7C7C7C]">
            <strong>تاریخ برگزاری:</strong>{" "}
            <span className="text-[#1B1B1B]">۳۱ خرداد ۱۴۰۲</span>
          </div>
          <div className="text-[#7C7C7C]">
            <strong>تاریخ اتمام:</strong>{" "}
            <span className="text-[#1B1B1B]">۳۱ تیر ۱۴۰۲</span>
          </div>
          <div className="text-[#7C7C7C]">
            <strong>تعداد لایک:</strong>{" "}
            <span className="text-[#1B1B1B]">۲۴</span>
          </div>
          <div className="text-[#7C7C7C]">
            <strong>تعداد دیسلایک:</strong>{" "}
            <span className="text-[#1B1B1B]">۵</span>
          </div>
        </div>

        {/* 4th Row: Price and Rating Section */}
        <div className="flex flex-row-reverse justify-between mb-4 items-center">
          <div className="text-[#FFB700] text-2xl font-bold">۲۵,۰۰۰ تومان</div>
          <div className="flex items-center">
            <div className="flex mr-2">
              {/* Star Rating */}
              <span className="text-[#FFB700]">⭐</span>
              <span className="text-[#FFB700]">⭐</span>
              <span className="text-[#FFB700]">⭐</span>
              <span className="text-[#FFB700]">⭐</span>
              <span className="text-[#C4C4C4]">⭐</span>
            </div>
            <span className="text-[#7C7C7C]">۴.۰ (۴۰ نظر)</span>
          </div>
        </div>

        {/* 5th Row: Action Buttons */}
        <div className="flex flex-row-reverse justify-between">
          <div className="flex">
            <button className="bg-[#FFB700] text-white px-4 py-2 rounded-md mr-2">
              👍
            </button>
            <button className="bg-[#E4E4E4] text-[#1B1B1B] px-4 py-2 rounded-md">
              👎
            </button>
          </div>
          <button className="bg-[#FFB700] text-white px-4 py-2 rounded-md mx-auto">
            اضافه به لیست مورد علاقه
          </button>
          <button className="bg-[#1B1B1B] text-white px-4 py-2 rounded-md mr-2">
            رزرو دوره
          </button>
        </div>
      </div>
    </div>
  );
};

export { CourseInfo };
