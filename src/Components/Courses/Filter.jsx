import { useState } from "react";

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [teacher, setTeacher] = useState("");

  const handleSearch = () => {
    const filters = {
      searchTerm,
      category,
      level,
      teacher,
    };
    console.log("Searching with filters:", filters);
  };

  return (
    <div className="bg-white rounded-lg  p-8 w-full max-w-xs text-right border-4 mt-20  relative dark:bg-indigo-950">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-4">فیلتر</h2>

      {/* Search Box */}
      <label className="text-gray-700 mb-2 block"> جستجو </label>
      

      <div className="relative mb-4">
        <input
          type="text"
          className="w-full pr-4 pl-12 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-right bg-slate-200 text-gray-500"
          placeholder="دوره مورد نظر را جستجو کنید..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="absolute left-3 top-3 text-blue-600"
          onClick={handleSearch}
        >
          🔍
        </button>
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="text-gray-700 mb-2 block">دسته بندی</label>
        <select
          className="w-full appearance-none pr-4 pl-12 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">دسته مورد نظر را انتخاب کنید</option>
          <option value="طراحی سایت">طراحی سایت</option>
          <option value="برنامه‌نویسی">برنامه‌نویسی</option>
          <option value="دوره طراحی UX">دوره طراحی UX</option>

        </select>
      </div>

      {/* Level */}
      <div className="mb-4">
        <label className="text-gray-700 mb-2 block">سطح آموزشی</label>
        <select
          className="w-full appearance-none pr-4 pl-12 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">سطح مورد نظر را انتخاب کنید</option>
          <option value="مقدماتی">مقدماتی</option>
          <option value="پیشرفته">پیشرفته</option>
        </select>
      </div>

      {/* Teachers */}
      <div className="mb-4">
        <label className="text-gray-700 mb-2 block">اساتید</label>
        <select
          className="w-full appearance-none pr-4 pl-12 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
        >
          <option value="">استاد مورد نظر را انتخاب کنید</option>
          <option value="محمدحسین ">محمدحسین </option>
          <option value="محمدامین شالبیافر">محمدامین شالبیافر</option>
          <option value="محمدحسین خیراندیش">محمدحسین خیراندیش</option>
          <option value=" فاطمه نیکوکار">فاطمه نیکوکار </option>

        </select>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <label className="text-gray-700 mb-2 block">قیمت</label>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>از 10,000</span>
          <span>تا 1,000,000</span>
        </div>
        <input type="range" className="w-full" min="10000" max="1000000" />
      </div>

      {/* Date Range */}
      <div className="mb-4">
        <label className="text-gray-700 mb-2 block">
          تاریخ برگزاری - اتمام
        </label>
        <p className="text-sm text-gray-500">۲۹ اردیبهشت ۱۴۰۳ - ۵ خرداد ۱۴۰۳</p>
      </div>
    </div>
  );
};

export { Filter };
