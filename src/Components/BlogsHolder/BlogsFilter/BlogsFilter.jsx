import React, { useState } from "react";

const BlogsFilter = () => {
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
    // <div className="bg-white p-6 rounded-2xl shadow-md w-3/12">
    //   <h2 className="text-xl font-semibold text-gray-800 mb-4">فیلتر</h2>
    //   <div className="flex flex-col gap-4">
    //     <div>
    //       <label className="block text-gray-600 mb-2">جستجو</label>
    //       <input
    //         type="text"
    //         placeholder="یک عبارت جستجو کنید..."
    //         className="w-full border border-gray-300 rounded-lg py-2 px-4"
    //       />
    //     </div>
    //     <div>
    //       <label className="block text-gray-600 mb-2">دسته بندی</label>
    //       <select className="w-full border border-gray-300 rounded-lg py-2 px-4">
    //         <option>انتخاب کنید</option>
    //       </select>
    //     </div>
    //     <div>
    //       <label className="block text-gray-600 mb-2">تاریخ انتشار</label>
    //       <input
    //         type="date"
    //         className="w-full border border-gray-300 rounded-lg py-2 px-4"
    //       />
    //     </div>
    //   </div>
    // </div>

    // Creative-Team Dozdi vvv

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

    // GHONCHE CODE!!!!!!!!!!!!!!!! vvvvvvvv

    <div className="relative w-0 flex lg:w-[20rem]">
      {/* Button to show filters only on small screens */}
      <div className="mb-4 lg:hidden">
        <button
          onClick={toggleModal}
          className="px-6 py-2 mx-auto bg-red-500 text-white rounded-full"
        >
          نمایش فیلتر
        </button>
      </div>

      {/* Filter form hidden on small screens */}
      <div className="hidden lg:block bg-white rounded-3xl p-4 w-80 text-right border-2 mt-20 dark:bg-indigo-950 ">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">فیلتر</h2>

        {/* Search */}
        <div className="flex flex-row gap-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 17.5L22 22"
              stroke="#2F2F2F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
              stroke="#2F2F2F"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </svg>
          <label className="text-gray-700 mb-2 block dark:text-white">
            جستجو{" "}
          </label>
        </div>
        <div className="relative mb-4">
          <input
            type="text"
            className="w-full pr-4 pl-12 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-right bg-slate-200 text-gray-500"
            placeholder="بلاگ مورد نظر را جستجو کنید..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="absolute left-0 text-blue-600 w-10 h-full rounded-xl bg-[#3772FF]"
            onClick={handleSearch}
          >
            <div className="flex justify-center items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 17.5L22 22"
                  stroke="#FEFDFF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                  stroke="#FEFDFF"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Category Dropdown */}
        <div className="mb-4 relative">
          <div className="flex flex-row gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1075 5.57624C11.3692 6.02707 11.5 6.25248 11.5 6.5C11.5 6.74752 11.3692 6.97293 11.1075 7.42376L9.85804 9.57624C9.59636 10.0271 9.46551 10.2525 9.25 10.3762C9.03449 10.5 8.7728 10.5 8.24943 10.5H5.75057C5.2272 10.5 4.96551 10.5 4.75 10.3762C4.53449 10.2525 4.40364 10.0271 4.14196 9.57624L2.89253 7.42376C2.63084 6.97293 2.5 6.74752 2.5 6.5C2.5 6.25248 2.63084 6.02707 2.89253 5.57624L4.14196 3.42376C4.40364 2.97293 4.53449 2.74752 4.75 2.62376C4.96551 2.5 5.2272 2.5 5.75057 2.5H8.24943C8.7728 2.5 9.03449 2.5 9.25 2.62376C9.46551 2.74752 9.59636 2.97293 9.85804 3.42376L11.1075 5.57624Z"
                stroke="#2F2F2F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.1075 11.5762C21.3692 12.0271 21.5 12.2525 21.5 12.5C21.5 12.7475 21.3692 12.9729 21.1075 13.4238L19.858 15.5762C19.5964 16.0271 19.4655 16.2525 19.25 16.3762C19.0345 16.5 18.7728 16.5 18.2494 16.5H15.7506C15.2272 16.5 14.9655 16.5 14.75 16.3762C14.5345 16.2525 14.4036 16.0271 14.142 15.5762L12.8925 13.4238C12.6308 12.9729 12.5 12.7475 12.5 12.5C12.5 12.2525 12.6308 12.0271 12.8925 11.5762L14.142 9.42376C14.4036 8.97293 14.5345 8.74752 14.75 8.62376C14.9655 8.5 15.2272 8.5 15.7506 8.5H18.2494C18.7728 8.5 19.0345 8.5 19.25 8.62376C19.4655 8.74752 19.5964 8.97293 19.858 9.42376L21.1075 11.5762Z"
                stroke="#2F2F2F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.1075 16.5762C11.3692 17.0271 11.5 17.2525 11.5 17.5C11.5 17.7475 11.3692 17.9729 11.1075 18.4238L9.85804 20.5762C9.59636 21.0271 9.46551 21.2525 9.25 21.3762C9.03449 21.5 8.7728 21.5 8.24943 21.5H5.75057C5.2272 21.5 4.96551 21.5 4.75 21.3762C4.53449 21.2525 4.40364 21.0271 4.14196 20.5762L2.89253 18.4238C2.63084 17.9729 2.5 17.7475 2.5 17.5C2.5 17.2525 2.63084 17.0271 2.89253 16.5762L4.14196 14.4238C4.40364 13.9729 4.53449 13.7475 4.75 13.6238C4.96551 13.5 5.2272 13.5 5.75057 13.5H8.24943C8.7728 13.5 9.03449 13.5 9.25 13.6238C9.46551 13.7475 9.59636 13.9729 9.85804 14.4238L11.1075 16.5762Z"
                stroke="#2F2F2F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <label className="text-gray-700 mb-2 block dark:text-white">
              دسته بندی
            </label>
          </div>
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

        {/* Event Dates */}
        <div className="mb-4">
          <div className="flex flex-row gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 13H16M8 13H8.00898M13 17H8M16 17H15.991"
                stroke="#272727"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 2V4M6 2V4"
                stroke="#272727"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                stroke="#272727"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 8H21"
                stroke="#272727"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <label className="text-gray-700 mb-2 block dark:text-white">
              تاریخ انتشار
            </label>
          </div>
          <p className="text-sm text-gray-500 mt-3 bg-gray-200 py-2 px-4 rounded-lg">
            ۲۹ اردیبهشت ۱۴۰۳ - ۵ خرداد ۱۴۰۳
          </p>
        </div>
      </div>

      {/* Modal for filters */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-indigo-950 p-8 rounded-lg w-full max-w-xs">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              فیلتر
            </h2>

            {/* Search */}
            <label className="text-gray-700 mb-2 block dark:text-white">
              جستجو
            </label>
            <div className="relative mb-4">
              <input
                type="text"
                className="w-full pr-4 pl-12 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-right bg-slate-200 text-gray-500"
                placeholder="دوره مورد نظر را جستجو کنید..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="absolute left-1 text-blue-600"
                onClick={handleSearch}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="16" fill="#3772FF" />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5 17.5L22 22"
                      stroke="#FEFDFF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                      stroke="#FEFDFF"
                      strokeWidth="1.5"
                    />
                  </svg>
                </svg>
              </button>
            </div>

            {/* Category Dropdown */}
            <div className="mb-4 relative">
              <label className="text-gray-700 mb-2 block dark:text-white">
                دسته بندی
              </label>
              <button
                onClick={() =>
                  setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                }
                className="w-full text-left border border-gray-300 rounded-lg py-2 px-4"
              >
                {category ? category : "دسته مورد نظر را انتخاب کنید"}
              </button>
              {isCategoryDropdownOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
                  {["طراحی سایت", "برنامه‌نویسی", "دوره طراحی UX"].map(
                    (cat) => (
                      <div
                        key={cat}
                        onClick={() => handleCategorySelect(cat)}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      >
                        {cat}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Level Dropdown */}
            <div className="mb-4 relative">
              <label className="text-gray-700 mb-2 block dark:text-white">
                سطح آموزشی
              </label>
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
              <label className="text-gray-700 mb-2 block dark:text-white">
                اساتید
              </label>
              <button
                onClick={() => setIsTeacherDropdownOpen(!isTeacherDropdownOpen)}
                className="w-full text-right border border-gray-300 rounded-lg py-2 px-4"
              >
                {teacher ? teacher : "استاد مورد نظر را انتخاب کنید"}
              </button>
              {isTeacherDropdownOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
                  {[
                    "محمدحسین",
                    "محمدامین شالبیافر",
                    "محمدحسین خیراندیش",
                    "فاطمه نیکوکار",
                  ].map((tchr) => (
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
              <label className="text-gray-700 mb-2 block dark:text-white">
                قیمت
              </label>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2 dark:text-white">
                <span>از 10,000</span>
                <span>تا 1,000,000</span>
              </div>
              <input
                type="range"
                className="w-full"
                min="10000"
                max="1000000"
              />
            </div>

            {/* Event Dates */}
            <div className="mb-4">
              <label className="text-gray-700 mb-2 block dark:text-white">
                تاریخ برگزاری - اتمام
              </label>
              <p className="text-sm text-gray-500">
                ۲۹ اردیبهشت ۱۴۰۳ - ۵ خرداد ۱۴۰۳
              </p>
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

export { BlogsFilter };
