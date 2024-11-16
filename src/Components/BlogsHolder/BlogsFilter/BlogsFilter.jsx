import { useState, useEffect } from "react";
import { Checkbox, Collapse } from "antd";

import { GetBlogsCategory } from "../../../core/services/api/Blogs/GetBlogsCategory";
import { AccordionTab } from "./../../Courses/CoursesComponents/FilterAccordion/Accordion";

const BlogsFilter = ({
  searchTerm,
  setSearchTerm,
  selectedCategoryBlog,
  setSelectedCategoryBlog,
}) => {
  const [category, setCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const { Panel } = Collapse;

  const handleSearch = () => {
    const filters = {
      searchTerm,
      category,
    };
    console.log("Searching with filters:", filters);
    setIsModalOpen(false); // Close modal after search
  };

  const toggleModal = () => {
    if (isModalOpen) {
      setIsAnimating(false);
      setTimeout(() => {
        setIsModalOpen(false);
      }, 300); // Match the duration of the slide-down transition
    } else {
      setIsModalOpen(true);
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);
    }
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setIsCategoryDropdownOpen(false);
  };

  const GetCategory = async () => {
    try {
      const res = await GetBlogsCategory();
      console.log(res);
      setCategories(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetCategory();
  }, []);

  const catOptions = [
    "طراحی سایت",
    "برنامه‌نویسی",
    "طراحی سایت",
    "برنامه‌نویسی",
  ];

  const handleSelectionChange = (optionId) => {
    console.log(optionId);
    setSelectedCategoryBlog((prev) => {
      const selectedId = prev.includes(optionId)
        ? prev.filter((item) => item !== optionId)
        : [...prev, optionId];

      return selectedId;
    });
    // console.log("Selected options:", selectedOptionId);
    // Insert API call logic here
  };

  return (
    <div className="absolute right-12 lg:right-0 lg:relative w-[128px] flex lg:w-[20rem]">
      {/* Button to show filters only on small screens */}
      <div className="mb-4 lg:hidden">
        <button
          onClick={toggleModal}
          className="px-4 py-3 bg-blue-500 text-white rounded-full flex gap-2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.85746 10.5061C4.36901 8.6456 2.59564 6.59915 1.62734 5.44867C1.3276 5.09253 1.22938 4.8319 1.17033 4.3728C0.968111 2.8008 0.867011 2.0148 1.32795 1.5074C1.7889 1 2.60404 1 4.23433 1H15.7657C17.396 1 18.2111 1 18.672 1.5074C19.133 2.0148 19.0319 2.8008 18.8297 4.37281C18.7706 4.83191 18.6724 5.09254 18.3726 5.44867C17.403 6.60062 15.6261 8.6507 13.1326 10.5135C12.907 10.6821 12.7583 10.9567 12.7307 11.2614C12.4837 13.992 12.2559 15.4876 12.1141 16.2442C11.8853 17.4657 10.1532 18.2006 9.226 18.8563C8.6741 19.2466 8.0043 18.782 7.93278 18.1778C7.79643 17.0261 7.53961 14.6864 7.25927 11.2614C7.23409 10.9539 7.08486 10.6761 6.85746 10.5061Z"
              stroke="#FCFCFC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          فیلتر
        </button>
      </div>

      {/* Filter form hidden on small screens */}
      <div className="hidden lg:block bg-white rounded-3xl p-4 w-72 text-right border-2 mt-20 h-fit dark:bg-[#041124] ">
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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
              stroke="#2F2F2F"
              strokeWidth="1.5"
              strokeLinejoin="round"
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
            placeholder="فیلتر مورد نظر را جستجو کنید..."
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                  stroke="#FEFDFF"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.1075 11.5762C21.3692 12.0271 21.5 12.2525 21.5 12.5C21.5 12.7475 21.3692 12.9729 21.1075 13.4238L19.858 15.5762C19.5964 16.0271 19.4655 16.2525 19.25 16.3762C19.0345 16.5 18.7728 16.5 18.2494 16.5H15.7506C15.2272 16.5 14.9655 16.5 14.75 16.3762C14.5345 16.2525 14.4036 16.0271 14.142 15.5762L12.8925 13.4238C12.6308 12.9729 12.5 12.7475 12.5 12.5C12.5 12.2525 12.6308 12.0271 12.8925 11.5762L14.142 9.42376C14.4036 8.97293 14.5345 8.74752 14.75 8.62376C14.9655 8.5 15.2272 8.5 15.7506 8.5H18.2494C18.7728 8.5 19.0345 8.5 19.25 8.62376C19.4655 8.74752 19.5964 8.97293 19.858 9.42376L21.1075 11.5762Z"
                stroke="#2F2F2F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.1075 16.5762C11.3692 17.0271 11.5 17.2525 11.5 17.5C11.5 17.7475 11.3692 17.9729 11.1075 18.4238L9.85804 20.5762C9.59636 21.0271 9.46551 21.2525 9.25 21.3762C9.03449 21.5 8.7728 21.5 8.24943 21.5H5.75057C5.2272 21.5 4.96551 21.5 4.75 21.3762C4.53449 21.2525 4.40364 21.0271 4.14196 20.5762L2.89253 18.4238C2.63084 17.9729 2.5 17.7475 2.5 17.5C2.5 17.2525 2.63084 17.0271 2.89253 16.5762L4.14196 14.4238C4.40364 13.9729 4.53449 13.7475 4.75 13.6238C4.96551 13.5 5.2272 13.5 5.75057 13.5H8.24943C8.7728 13.5 9.03449 13.5 9.25 13.6238C9.46551 13.7475 9.59636 13.9729 9.85804 14.4238L11.1075 16.5762Z"
                stroke="#2F2F2F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <label className="text-gray-700 mb-2 block dark:text-white">
              دسته بندی
            </label>
          </div>
          <AccordionTab
            options={categories}
            onSelectionChange={(optionId) => handleSelectionChange(optionId)}
            labelTitle={"دسته بلاگ"}
          />
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 2V4M6 2V4"
                stroke="#272727"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                stroke="#272727"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 8H21"
                stroke="#272727"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <label className="text-gray-700 mb-2 block dark:text-white">
              تاریخ برگزاری - اتمام
            </label>
          </div>
          <p className="text-sm text-gray-500 mt-3 bg-gray-200 py-2 px-4 rounded-lg">
            ۲۹ اردیبهشت ۱۴۰۳ - ۵ خرداد ۱۴۰۳
          </p>
        </div>
      </div>

      {/* Modal for filters */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-50"
          onClick={toggleModal} // Close modal when background is clicked
        >
          <div
            className={`w-full bg-white dark:bg-[#041124] px-8 pb-8 pt-4 rounded-t-3xl transition-transform duration-300 flex flex-col ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside it
          >
            <div className="flex justify-center">
              <div className="bg-gray-300 rounded-3xl w-16 h-2 mb-6"></div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">
                فیلتر
              </h2>

              {/* Button to close modal */}
              <button
                className="text-red-500 border border-[#FF5353] rounded-full py-2 px-4 mb-2"
                onClick={toggleModal}
              >
                ✕ بستن
              </button>
            </div>
            {/* Search */}
            <div className="flex flex-row gap-1 mb-4">
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                  stroke="#2F2F2F"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <label className="text-gray-700 dark:text-white">جستجو</label>
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
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                      stroke="#FEFDFF"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
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
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.1075 11.5762C21.3692 12.0271 21.5 12.2525 21.5 12.5C21.5 12.7475 21.3692 12.9729 21.1075 13.4238L19.858 15.5762C19.5964 16.0271 19.4655 16.2525 19.25 16.3762C19.0345 16.5 18.7728 16.5 18.2494 16.5H15.7506C15.2272 16.5 14.9655 16.5 14.75 16.3762C14.5345 16.2525 14.4036 16.0271 14.142 15.5762L12.8925 13.4238C12.6308 12.9729 12.5 12.7475 12.5 12.5C12.5 12.2525 12.6308 12.0271 12.8925 11.5762L14.142 9.42376C14.4036 8.97293 14.5345 8.74752 14.75 8.62376C14.9655 8.5 15.2272 8.5 15.7506 8.5H18.2494C18.7728 8.5 19.0345 8.5 19.25 8.62376C19.4655 8.74752 19.5964 8.97293 19.858 9.42376L21.1075 11.5762Z"
                    stroke="#2F2F2F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.1075 16.5762C11.3692 17.0271 11.5 17.2525 11.5 17.5C11.5 17.7475 11.3692 17.9729 11.1075 18.4238L9.85804 20.5762C9.59636 21.0271 9.46551 21.2525 9.25 21.3762C9.03449 21.5 8.7728 21.5 8.24943 21.5H5.75057C5.2272 21.5 4.96551 21.5 4.75 21.3762C4.53449 21.2525 4.40364 21.0271 4.14196 20.5762L2.89253 18.4238C2.63084 17.9729 2.5 17.7475 2.5 17.5C2.5 17.2525 2.63084 17.0271 2.89253 16.5762L4.14196 14.4238C4.40364 13.9729 4.53449 13.7475 4.75 13.6238C4.96551 13.5 5.2272 13.5 5.75057 13.5H8.24943C8.7728 13.5 9.03449 13.5 9.25 13.6238C9.46551 13.7475 9.59636 13.9729 9.85804 14.4238L11.1075 16.5762Z"
                    stroke="#2F2F2F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <label className="text-gray-700 mb-2 block dark:text-white">
                  دسته بندی
                </label>
              </div>
              <AccordionTab
                options={categories}
                onSelectionChange={(optionId) =>
                  handleSelectionChange(optionId)
                }
                labelTitle={"دسته بلاگ"}
              />
            </div>

            {/* Event Dates */}
            <div className="mb-0">
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
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 2V4M6 2V4"
                    stroke="#272727"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                    stroke="#272727"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 8H21"
                    stroke="#272727"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <label className="text-gray-700 dark:text-white">
                  تاریخ برگزاری - اتمام
                </label>
              </div>
              <p className="text-sm text-gray-500 mt-3 border border-gray-300 bg-slate-200 py-2 px-4 rounded-lg">
                ۲۹ اردیبهشت ۱۴۰۳ - ۵ خرداد ۱۴۰۳
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { BlogsFilter };
