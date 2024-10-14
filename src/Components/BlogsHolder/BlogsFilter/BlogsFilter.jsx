import React from "react";

const BlogsFilter = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full">
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
  );
};

export { BlogsFilter };
