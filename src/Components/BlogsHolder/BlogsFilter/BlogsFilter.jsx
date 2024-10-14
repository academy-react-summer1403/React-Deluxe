import React from "react";

const BlogsFilter = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-3/12">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">فیلتر</h2>
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-gray-600 mb-2">جستجو</label>
          <input
            type="text"
            placeholder="یک عبارت جستجو کنید..."
            className="w-full border border-gray-300 rounded-lg py-2 px-4"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-2">دسته بندی</label>
          <select className="w-full border border-gray-300 rounded-lg py-2 px-4">
            <option>انتخاب کنید</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-600 mb-2">تاریخ انتشار</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg py-2 px-4"
          />
        </div>
      </div>
    </div>

    // <div className="right flex flex-col text-right border-2  rounded-3xl p-4 gap-1 w-72 h-96 justify-between">
    //   <h2 className="font-bold text-2xl	">فیلتر</h2>
    //   <div className="flex gap-1">
    //     <img
    //       src="./src/assets/BlogImg/search-01-stroke-rounded 1.png"
    //       className=""
    //     />
    //     <h2 className="font-medium text-black	text-base"> جستجو</h2>
    //   </div>
    //   <div className="bg-gray-200 rounded-2xl  w-56	h-12	flex">
    //     <input
    //       className="bg-gray-200 rounded-2xl w-44 h-12 pr-1	text-xs outline-none	border-gray-200 font-medium"
    //       type="text"
    //       placeholder="بلاگ مورد نظر را جستجو کنید..."
    //     />
    //     <div className="bg-blue-400 w-12 rounded-2xl">
    //       <img
    //         src="./src/assets/BlogImg/search-01-stroke-rounded 2.png"
    //         className="mt-3 mr-3 "
    //       />
    //     </div>
    //   </div>
    //   <div className="">
    //     <div className="flex gap-1 mb-1">
    //       <img
    //         src="./src/assets/BlogImg/cells-stroke-rounded 1.png"
    //         className=""
    //       />
    //       <h2 className="font-medium text-black	text-base"> دسته بندی</h2>
    //     </div>
    //     <div className="">
    //       <div className="bg-gray-200 rounded-2xl  w-56	h-12	flex">
    //         <input
    //           className="bg-gray-200 rounded-2xl w-44 h-12 pr-1	text-xs outline-none	border-gray-200 font-medium"
    //           type="text"
    //           placeholder="دسته موردنظر را انتخاب کنید"
    //         />
    //         <div className=" w-12 rounded-2xl">
    //           <img
    //             src="./src/assets/BlogImg/arrow-down-01.png"
    //             className="mt-3 mr-3 "
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="">
    //     <div className="">
    //       <div className="flex gap-1 mb-1">
    //         <img
    //           src="./src/assets/BlogImg/calendar-02-stroke-rounded 2.png"
    //           className=""
    //         />
    //         <h2 className="font-medium text-black	text-base"> تاریخ انتشار</h2>
    //       </div>
    //     </div>
    //     <div className="">
    //       <div className="bg-gray-200 rounded-2xl  w-56	h-12	flex">
    //         <input
    //           className="bg-gray-200 rounded-2xl w-44 h-12 pr-1	text-xs outline-none	border-gray-200 font-medium"
    //           type="text"
    //           placeholder="۲۹اردیبهشت ۱۴۰۳ - ۵خرداد ۱۴۰۳"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export { BlogsFilter };
