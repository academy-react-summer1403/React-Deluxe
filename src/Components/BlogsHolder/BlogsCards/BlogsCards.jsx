import { ConfigProvider, Modal, Pagination } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetAllBlogsByPg } from "../../../core/services/api/Blogs.api";
import Logo from "../../../assets/logo (3).png";
import { getRandomColor } from "../../Common/ColorGenerator";
import { DatePersianizer } from "./../../../core/utils/DatePersianizer";
import { digitsEnToFa } from "@persian-tools/persian-tools";

const BlogsCards = ({ searchTerm, selectedCategoryBlog }) => {
  const [news, setNews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [selectedSort, setSelectedSort] = useState({});
  const [selectedId, setSelectedId] = useState();
  console.log(selectedSort);
  const [currentPg, setCurrentPg] = useState(1);
  console.log("currentPg", currentPg);
  const [currentPgSize, setCurrentPgSize] = useState(4);
  console.log("currentPgSize", currentPgSize);
  const [totalBlogCount, setTotalBlogCount] = useState();

  const getAllBlogs = async (
    selectedSort,
    searchTerm,
    selectedCategoryBlog,
    currentPg,
    currentPgSize
  ) => {
    try {
      const result = await GetAllBlogsByPg(
        selectedSort,
        searchTerm,
        selectedCategoryBlog,
        currentPg,
        currentPgSize
      );
      setNews(result.news);
      console.log(result);
      setTotalBlogCount(result.totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs(
      selectedSort,
      searchTerm,
      selectedCategoryBlog,
      currentPg,
      currentPgSize
    );
  }, [
    selectedSort,
    searchTerm,
    selectedCategoryBlog,
    currentPg,
    currentPgSize,
  ]);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsAnimating(true);
    }, 10);
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  const options = [
    {
      id: 1,
      label: "محبوب ترین",
      value: { key: "currentLikeCount", order: "DESC" },
    },
    { id: 2, label: "جدید ترین", value: { key: "updateDate", order: "DESC" } },
  ];

  const handleOptionChange = (value, id) => {
    setSelectedSort(value);
    setSelectedId(id);
  };

  const onChangePg = (page, pageSize) => {
    setCurrentPg(page);
    setCurrentPgSize(pageSize);
  };

  return (
    <div className="mb-8 w-[72rem]">
      <div className="hidden lg:flex justify-start items-center gap-2 mb-4 mr-7">
        <span className="text-xl ml-2 dark:text-white">ترتیب</span>
        {options.map((option) => (
          <label
            key={option.id}
            className={`py-2 px-4 rounded-full cursor-pointer ${
              selectedId === option.id
                ? "bg-red-500 text-white"
                : "border border-red-500 text-red-500"
            }`}
          >
            <input
              type="radio"
              name="sortOption"
              value={option.id}
              checked={selectedId === option.id}
              onChange={() => handleOptionChange(option.value, option.id)}
              className="hidden"
            />
            {option.label}
          </label>
        ))}
      </div>

      <div className="lg:hidden flex justify-end items-center gap-2 mb-4 ml-12">
        <button
          className="text-white bg-blue-500 py-3 px-4 rounded-full flex gap-2"
          onClick={openModal}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 8H20"
              stroke="#FCFCFC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 12H18"
              stroke="#FCFCFC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 16H16"
              stroke="#FCFCFC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 4H21"
              stroke="#FCFCFC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.5 21V3M5.5 21C4.79977 21 3.49153 19.0057 3 18.5M5.5 21C6.20023 21 7.50847 19.0057 8 18.5"
              stroke="#FCFCFC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          ترتیب
        </button>
      </div>

      {/* Modal Background */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end"
          onClick={closeModal}
        >
          <div
            className={`w-full bg-white rounded-t-3xl p-4 transform transition-transform duration-300 flex flex-col ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center">
              <div className="bg-gray-300 rounded-3xl w-16 h-2 mb-6"></div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold mr-4">ترتیب</h2>
              <button
                className="text-red-500 border border-[#FF5353] rounded-full py-2 px-4 ml-4"
                onClick={closeModal}
              >
                ✕ بستن
              </button>
            </div>
            <div className="flex justify-start items-center gap-2 mb-4 mr-4">
              {options.map((option) => (
                <label
                  key={option.id}
                  className={`py-2 px-4 rounded-full cursor-pointer ${
                    selectedId === option.id
                      ? "bg-red-500 text-white"
                      : "border border-red-500 text-red-500"
                  }`}
                >
                  <input
                    type="radio"
                    name="sortOption"
                    value={option.id}
                    checked={selectedId === option.id}
                    onChange={() => handleOptionChange(option.value, option.id)}
                    className="hidden"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap">
        <div className="flex gap-2 flex-wrap w-full justify-around">
          {news?.map((card, index) => (
            <div
              key={index}
              className={`lg:basis-[47%] p-4 bg-sky-50  basis-[90%] rounded-3xl mb-7`}
            >
              <Link to={`/BlogDetails/${card.id}`} className="cursor-pointer ">
                <div
                  className={`mb-4 w-full h-[22rem] rounded-[2.5rem] object-cover flex justify-center ${getRandomColor()} items-center`}
                >
                  <img
                    src={card.currentImageAddressTumb ?? Logo}
                    alt={card.title}
                    className={`size-full rounded-[2rem]`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 truncate w-96 dark:text-slate-300">
                  {card.title}
                </h3>
              </Link>
              <div className="text-gray-600 flex flex-row justify-between">
                <p className="text-sm/[1.3rem] dark:text-slate-400">
                  {card.addUserFullName}
                </p>
                <div className="flex flex-row gap-4">
                  <p className="flex text-xs/[1.4rem] gap-2 dark:text-slate-400">
                    {DatePersianizer(card.insertDate)}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 1.66663V3.33329M5 1.66663V3.33329"
                        stroke="#707070"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.99658 10.8334H10.0041M9.99658 14.1667H10.0041M13.3262 10.8334H13.3337M6.66699 10.8334H6.67447M6.66699 14.1667H6.67447"
                        stroke="#707070"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.91699 6.66663H17.0837"
                        stroke="#707070"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.08301 10.2027C2.08301 6.57162 2.08301 4.75607 3.12644 3.62803C4.16987 2.5 5.84925 2.5 9.20801 2.5H10.7913C14.1501 2.5 15.8295 2.5 16.8729 3.62803C17.9163 4.75607 17.9163 6.57162 17.9163 10.2027V10.6307C17.9163 14.2617 17.9163 16.0773 16.8729 17.2053C15.8295 18.3333 14.1501 18.3333 10.7913 18.3333H9.20801C5.84925 18.3333 4.16987 18.3333 3.12644 17.2053C2.08301 16.0773 2.08301 14.2617 2.08301 10.6307V10.2027Z"
                        stroke="#707070"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </p>
                  <p className="flex text-xs/[1.4rem] gap-2 dark:text-slate-400">
                    {digitsEnToFa(card.currentView)}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 12C1.5 12 5.5 4.5 12 4.5C18.5 4.5 22.5 12 22.5 12C22.5 12 18.5 19.5 12 19.5C5.5 19.5 1.5 12 1.5 12Z"
                        stroke="#707070"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 15.75C13.7949 15.75 15.25 14.2949 15.25 12.5C15.25 10.7051 13.7949 9.25 12 9.25C10.2051 9.25 8.75 10.7051 8.75 12.5C8.75 14.2949 10.2051 15.75 12 15.75Z"
                        stroke="#707070"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <ConfigProvider direction="rtl">
        <Pagination align="center" defaultCurrent={1} total={50} />
      </ConfigProvider> */}
      <ConfigProvider direction="rtl" theme={{ token: {} }}>
        <Pagination
          align="center"
          defaultCurrent={1}
          defaultPageSize={4}
          current={currentPg}
          onChange={onChangePg}
          total={totalBlogCount}
          showTotal={(total, range) =>
            `${digitsEnToFa(range[0])} تا ${digitsEnToFa(
              range[1]
            )} از ${digitsEnToFa(total)} دوره`
          }
          showSizeChanger
          pageSizeOptions={[4, 8, 16, 32, 64, 128]}
          responsive
        />
      </ConfigProvider>
    </div>
  );
};

export { BlogsCards };
