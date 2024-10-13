import { useState } from "react";

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [teacher, setTeacher] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState(false); // State for level dropdown
  const [isTeacherDropdownOpen, setIsTeacherDropdownOpen] = useState(false); // State for teacher dropdown

  const handleSearch = () => {
    const filters = {
      searchTerm,
      category,
      level,
      teacher,
    };
    console.log("Searching with filters:", filters);
    setIsModalOpen(false); // Close modal after search
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setIsCategoryDropdownOpen(false);
  };

  const handleLevelSelect = (selectedLevel) => {
    setLevel(selectedLevel);
    setIsLevelDropdownOpen(false);
  };

  const handleTeacherSelect = (selectedTeacher) => {
    setTeacher(selectedTeacher);
    setIsTeacherDropdownOpen(false);
  };

  return (
    <div className="relative">
      {/* Button to show filters only on small screens */}
      <div className="mb-4 lg:hidden md:hidden md:min-w-8">
        <button
          onClick={toggleModal}
          className="px-6 py-2 mx-auto bg-red-500 text-white rounded-full"
        >
          نمایش فیلتر
        </button>
      </div>

      {/* Filter form hidden on small screens */}
      <div className="hidden md:block bg-white rounded-lg p-8 w-full max-w-xs text-right border-4 mt-20 dark:bg-indigo-950 ">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">فیلتر</h2>

        {/* Search */}
        <label className="text-gray-700 mb-2 block dark:text-white">جستجو</label>
        <div className="relative mb-4">
          <input
            type="text"
            className="w-full pr-4  pl-12 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-right bg-slate-200 text-gray-500"
            placeholder="دوره مورد نظر را جستجو کنید..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute left-1 text-blue-600" onClick={handleSearch}>
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="16" fill="#3772FF" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 17.5L22 22" stroke="#FEFDFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="#FEFDFF" strokeWidth="1.5" />
              </svg>
            </svg>
          </button>
        </div>

        {/* Category Dropdown */}
        <div className="mb-4 relative">
          <label className="text-gray-700 mb-2 block dark:text-white">دسته بندی</label>
          <button
            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
            className="w-full text-gray-500 text-right border border-gray-300 rounded-lg py-2 px-4 bg-slate-200"
          >
            {category ? category : "دسته مورد نظر را انتخاب کنید"}
          </button>
          {isCategoryDropdownOpen && (
            <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
              {["طراحی سایت", "برنامه‌نویسی", "دوره طراحی UX"].map((cat) => (
                <div
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {cat}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Level Dropdown */}
        <div className="mb-4 relative">
          <label className="text-gray-700 mb-2 block dark:text-white">سطح آموزشی</label>
          <button
            onClick={() => setIsLevelDropdownOpen(!isLevelDropdownOpen)}
            className="w-full  text-gray-500 text-right border border-gray-300 rounded-lg py-2 px-4 bg-slate-200"
          >
            {level ? level : "سطح مورد نظر را انتخاب کنید"}
          </button>
          {isLevelDropdownOpen && (
            <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
              {["مقدماتی", "پیشرفته"].map((lvl) => (
                <div
                  key={lvl}
                  onClick={() => handleLevelSelect(lvl)}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {lvl}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Teachers Dropdown */}
        <div className="mb-4 relative">
          <label className="text-gray-700 mb-2 block dark:text-white">اساتید</label>
          <button
            onClick={() => setIsTeacherDropdownOpen(!isTeacherDropdownOpen)}
            className="w-full  text-gray-500  text-right bg-slate-200 border border-gray-300 rounded-lg py-2 px-4"
          >
            {teacher ? teacher : "استاد مورد نظر را انتخاب کنید"}
          </button>
          {isTeacherDropdownOpen && (
            <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
              {["محمدحسین", "محمدامین شالبیافر", "محمدحسین خیراندیش", "فاطمه نیکوکار"].map((tchr) => (
                <div
                  key={tchr}
                  onClick={() => handleTeacherSelect(tchr)}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {tchr}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="text-gray-700 mb-2 block dark:text-white">قیمت</label>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2 dark:text-white">
            <span>از 10,000</span>
            <span>تا 1,000,000</span>
          </div>
          <input type="range" className="w-full" min="10000" max="1000000" />
        </div>

        {/* Event Dates */}
        <div className="mb-4">
          <label className="text-gray-700 mb-2 block dark:text-white">تاریخ برگزاری - اتمام</label>
          <p className="text-sm text-gray-500">۲۹ اردیبهشت ۱۴۰۳ - ۵ خرداد ۱۴۰۳</p>
        </div>
      </div>

      {/* Modal for filters */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-indigo-950 p-8 rounded-lg w-full max-w-xs">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">فیلتر</h2>

            {/* Search */}
            <label className="text-gray-700 mb-2 block dark:text-white">جستجو</label>
            <div className="relative mb-4">
              <input
                type="text"
                className="w-full pr-4 pl-12 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-right bg-slate-200 text-gray-500"
                placeholder="دوره مورد نظر را جستجو کنید..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute left-1 text-blue-600" onClick={handleSearch}>
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="16" fill="#3772FF" />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5 17.5L22 22" stroke="#FEFDFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="#FEFDFF" strokeWidth="1.5" />
                  </svg>
                </svg>
              </button>
            </div>

            {/* Category Dropdown */}
            <div className="mb-4 relative">
              <label className="text-gray-700 mb-2 block dark:text-white">دسته بندی</label>
              <button
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                className="w-full text-left border border-gray-300 rounded-lg py-2 px-4"
              >
                {category ? category : "دسته مورد نظر را انتخاب کنید"}
              </button>
              {isCategoryDropdownOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
                  {["طراحی سایت", "برنامه‌نویسی", "دوره طراحی UX"].map((cat) => (
                    <div
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Level Dropdown */}
            <div className="mb-4 relative">
              <label className="text-gray-700 mb-2 block dark:text-white">سطح آموزشی</label>
              <button
                onClick={() => setIsLevelDropdownOpen(!isLevelDropdownOpen)}
                className="w-full text-right border border-gray-300 rounded-lg py-2 px-4 "
              >
                {level ? level : "سطح مورد نظر را انتخاب کنید"}
              </button>
              {isLevelDropdownOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
                  {["مقدماتی", "پیشرفته"].map((lvl) => (
                    <div
                      key={lvl}
                      onClick={() => handleLevelSelect(lvl)}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {lvl}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Teachers Dropdown */}
            <div className="mb-4 relative">
              <label className="text-gray-700 mb-2 block dark:text-white">اساتید</label>
              <button
                onClick={() => setIsTeacherDropdownOpen(!isTeacherDropdownOpen)}
                className="w-full text-right border border-gray-300 rounded-lg py-2 px-4"
                
              >
                {teacher ? teacher : "استاد مورد نظر را انتخاب کنید"}
              </button>
              {isTeacherDropdownOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
                  {["محمدحسین", "محمدامین شالبیافر", "محمدحسین خیراندیش", "فاطمه نیکوکار"].map((tchr) => (
                    <div
                      key={tchr}
                      onClick={() => handleTeacherSelect(tchr)}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {tchr}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Price */}
            <div className="mb-4">
              <label className="text-gray-700 mb-2 block dark:text-white">قیمت</label>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2 dark:text-white">
                <span>از 10,000</span>
                <span>تا 1,000,000</span>
              </div>
              <input type="range" className="w-full" min="10000" max="1000000" />
            </div>

            {/* Event Dates */}
            <div className="mb-4">
              <label className="text-gray-700 mb-2 block dark:text-white">تاریخ برگزاری - اتمام</label>
              <p className="text-sm text-gray-500">۲۹ اردیبهشت ۱۴۰۳ - ۵ خرداد ۱۴۰۳</p>
            </div>

            {/* Button to close modal */}
            <button
              onClick={toggleModal}
              className="mt-4 w-full bg-gray-500 text-white py-2 rounded-lg"
            >
              بستن
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { Filter };
