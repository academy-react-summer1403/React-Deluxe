import { ConfigProvider, Flex, Modal, Pagination, Radio } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetAllCoursesByPg } from "../../core/services/api/Courses.api";
import Pic from "../../assets/react.png";
import Logo from "../../assets/logo (3).png";
import { useQueryShortcut } from "./../../core/services/api/ReactQuery/useQueryShortcut";
import { getRandomColor } from "../Common/ColorGenerator";

// const coursesData = [
//   {
//     title: "دوره ری‌اکت جی‌اس",
//     price: "۱,۲۰۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/e186/5b86/bca1c8cd3132e2639f0ded1c76c11d46?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZpF7verSM~Wu9RNqd6hHA12IbI~LIx0FgOIbjEJ1VWHoFByPXm~I35f~hNBNQaRdeTzriYNSU5G0ZBRk~OdTp5AYbDVLbBVr-uELXIrqJ7qL5uwtJHsPoWAY4ezQFG8rQ-LdULqFnxFTniNE5jVzE7~rpHETIA1o2GIyx8AMsDEN92z1Z26hhXLoHvIIUW3wi6b0DkT179r81dYvmxs6GJy1VS5UIdfUYgiWvPJJJJo25PjCzBHLQk2npBWFV4xWDrtkZvxb~0aqJlk1ZBy-kgkQ0h-7g-7GJh~KAryZtkvoUJMQEWtt2mYD53c6RG478pyeiEK-M6JRMIG8zZUbLA__",
//     tag: "برنامه نویسی",
//     tag2: "مقدماتی",
//     teacher: "محسن اسفندیاری",
//     color: "bg-cyan-200",
//   },
//   {
//     title: "دوره فیگما",
//     price: "۴۵۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
//     tag: "طراحی",
//     tag2: "پیشرفته",
//     teacher: "محمدحسین خلیل پور",
//     color: "bg-red-400",
//   },
//   {
//     title: "دوره ری‌اکت جی‌اس",
//     price: "۱,۲۰۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/e186/5b86/bca1c8cd3132e2639f0ded1c76c11d46?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZpF7verSM~Wu9RNqd6hHA12IbI~LIx0FgOIbjEJ1VWHoFByPXm~I35f~hNBNQaRdeTzriYNSU5G0ZBRk~OdTp5AYbDVLbBVr-uELXIrqJ7qL5uwtJHsPoWAY4ezQFG8rQ-LdULqFnxFTniNE5jVzE7~rpHETIA1o2GIyx8AMsDEN92z1Z26hhXLoHvIIUW3wi6b0DkT179r81dYvmxs6GJy1VS5UIdfUYgiWvPJJJJo25PjCzBHLQk2npBWFV4xWDrtkZvxb~0aqJlk1ZBy-kgkQ0h-7g-7GJh~KAryZtkvoUJMQEWtt2mYD53c6RG478pyeiEK-M6JRMIG8zZUbLA__",
//     tag: "برنامه نویسی",
//     tag2: "مقدماتی",
//     teacher: "محسن اسفندیاری",
//     color: "bg-cyan-200",
//   },
//   {
//     title: "دوره فیگما",
//     price: "۴۵۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
//     tag: "طراحی",
//     tag2: "پیشرفته",
//     teacher: "محمدحسین خلیل پور",
//     color: "bg-red-400",
//   },
//   {
//     title: "دوره ری‌اکت جی‌اس",
//     price: "۱,۲۰۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/e186/5b86/bca1c8cd3132e2639f0ded1c76c11d46?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZpF7verSM~Wu9RNqd6hHA12IbI~LIx0FgOIbjEJ1VWHoFByPXm~I35f~hNBNQaRdeTzriYNSU5G0ZBRk~OdTp5AYbDVLbBVr-uELXIrqJ7qL5uwtJHsPoWAY4ezQFG8rQ-LdULqFnxFTniNE5jVzE7~rpHETIA1o2GIyx8AMsDEN92z1Z26hhXLoHvIIUW3wi6b0DkT179r81dYvmxs6GJy1VS5UIdfUYgiWvPJJJJo25PjCzBHLQk2npBWFV4xWDrtkZvxb~0aqJlk1ZBy-kgkQ0h-7g-7GJh~KAryZtkvoUJMQEWtt2mYD53c6RG478pyeiEK-M6JRMIG8zZUbLA__",
//     tag: "برنامه نویسی",
//     tag2: "مقدماتی",
//     teacher: "محسن اسفندیاری",
//     color: "bg-cyan-200",
//   },
//   {
//     title: "دوره فیگما",
//     price: "۴۵۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
//     tag: "طراحی",
//     tag2: "پیشرفته",
//     teacher: "محمدحسین خلیل پور",
//     color: "bg-red-400",
//   },
//   {
//     title: "دوره ری‌اکت جی‌اس",
//     price: "۱,۲۰۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/e186/5b86/bca1c8cd3132e2639f0ded1c76c11d46?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZpF7verSM~Wu9RNqd6hHA12IbI~LIx0FgOIbjEJ1VWHoFByPXm~I35f~hNBNQaRdeTzriYNSU5G0ZBRk~OdTp5AYbDVLbBVr-uELXIrqJ7qL5uwtJHsPoWAY4ezQFG8rQ-LdULqFnxFTniNE5jVzE7~rpHETIA1o2GIyx8AMsDEN92z1Z26hhXLoHvIIUW3wi6b0DkT179r81dYvmxs6GJy1VS5UIdfUYgiWvPJJJJo25PjCzBHLQk2npBWFV4xWDrtkZvxb~0aqJlk1ZBy-kgkQ0h-7g-7GJh~KAryZtkvoUJMQEWtt2mYD53c6RG478pyeiEK-M6JRMIG8zZUbLA__",
//     tag: "برنامه نویسی",
//     tag2: "مقدماتی",
//     teacher: "محسن اسفندیاری",
//     color: "bg-cyan-200",
//   },
//   {
//     title: "دوره فیگما",
//     price: "۴۵۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
//     tag: "طراحی",
//     tag2: "پیشرفته",
//     teacher: "محمدحسین خلیل پور",
//     color: "bg-red-400",
//   },
//   {
//     title: "دوره ری‌اکت جی‌اس",
//     price: "۱,۲۰۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/e186/5b86/bca1c8cd3132e2639f0ded1c76c11d46?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZpF7verSM~Wu9RNqd6hHA12IbI~LIx0FgOIbjEJ1VWHoFByPXm~I35f~hNBNQaRdeTzriYNSU5G0ZBRk~OdTp5AYbDVLbBVr-uELXIrqJ7qL5uwtJHsPoWAY4ezQFG8rQ-LdULqFnxFTniNE5jVzE7~rpHETIA1o2GIyx8AMsDEN92z1Z26hhXLoHvIIUW3wi6b0DkT179r81dYvmxs6GJy1VS5UIdfUYgiWvPJJJJo25PjCzBHLQk2npBWFV4xWDrtkZvxb~0aqJlk1ZBy-kgkQ0h-7g-7GJh~KAryZtkvoUJMQEWtt2mYD53c6RG478pyeiEK-M6JRMIG8zZUbLA__",
//     tag: "برنامه نویسی",
//     tag2: "مقدماتی",
//     teacher: "محسن اسفندیاری",
//     color: "bg-cyan-200",
//   },
//   {
//     title: "دوره فیگما",
//     price: "۴۵۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
//     tag: "طراحی",
//     tag2: "پیشرفته",
//     teacher: "محمدحسین خلیل پور",
//     color: "bg-red-400",
//   },
//   {
//     title: "دوره ری‌اکت جی‌اس",
//     price: "۱,۲۰۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/e186/5b86/bca1c8cd3132e2639f0ded1c76c11d46?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZpF7verSM~Wu9RNqd6hHA12IbI~LIx0FgOIbjEJ1VWHoFByPXm~I35f~hNBNQaRdeTzriYNSU5G0ZBRk~OdTp5AYbDVLbBVr-uELXIrqJ7qL5uwtJHsPoWAY4ezQFG8rQ-LdULqFnxFTniNE5jVzE7~rpHETIA1o2GIyx8AMsDEN92z1Z26hhXLoHvIIUW3wi6b0DkT179r81dYvmxs6GJy1VS5UIdfUYgiWvPJJJJo25PjCzBHLQk2npBWFV4xWDrtkZvxb~0aqJlk1ZBy-kgkQ0h-7g-7GJh~KAryZtkvoUJMQEWtt2mYD53c6RG478pyeiEK-M6JRMIG8zZUbLA__",
//     tag: "برنامه نویسی",
//     tag2: "مقدماتی",
//     teacher: "محسن اسفندیاری",
//     color: "bg-cyan-200",
//   },
//   {
//     title: "دوره فیگما",
//     price: "۴۵۰,۰۰۰ تومان",
//     icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
//     tag: "طراحی",
//     tag2: "پیشرفته",
//     teacher: "محمدحسین خلیل پور",
//     color: "bg-red-400",
//   },
// ];

const CourseList = ({
  searchTerm,
  selectedOptionId,
  levelsOptionId,
  teachersOptionId,
  priceRange,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [courses, setCourses] = useState([]);

  const [selectedSort, setSelectedSort] = useState({});
  const [selectedId, setSelectedId] = useState();
  // console.log(selectedSort);
  const [currentPg, setCurrentPg] = useState(1);
  console.log("currentPg", currentPg);
  const [currentPgSize, setCurrentPgSize] = useState(10);
  console.log("currentPgSize", currentPgSize);
  const [totalCourseCount, setTotalCourseCount] = useState();

  const courseData = useQueryShortcut("GetCoursesByPG");

  // const data = useQueryShortcut("BlogDetailById");

  const getAllCourse = async (
    searchTerm,
    selectedOptionId,
    levelsOptionId,
    teachersOptionId,
    priceRange,
    selectedSort,
    currentPg,
    currentPgSize
  ) => {
    try {
      const result = await GetAllCoursesByPg(
        searchTerm,
        selectedOptionId,
        levelsOptionId,
        teachersOptionId,
        priceRange,
        selectedSort,
        currentPg,
        currentPgSize
      );

      setCourses(result.courseFilterDtos);
      setTotalCourseCount(result.totalCount);

      // console.log("result", result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCourse(
      searchTerm,
      selectedOptionId,
      levelsOptionId,
      teachersOptionId,
      priceRange,
      selectedSort,
      currentPg,
      currentPgSize
    );
  }, [
    searchTerm,
    selectedOptionId,
    levelsOptionId,
    teachersOptionId,
    priceRange,
    selectedSort,
    currentPg,
    currentPgSize,
  ]);

  const openModal = () => {
    setIsModalOpen(true);
    // Add a slight delay before triggering the slide-up animation
    setTimeout(() => {
      setIsAnimating(true);
    }, 10); // Delay for the transition to trigger properly
  };

  const closeModal = () => {
    setIsAnimating(false);
    // Delay closing modal until the slide-down animation finishes
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300); // Match the transition duration (300ms)
  };

  const options = [
    { id: 1, label: "گران ترین", value: { key: "cost", order: "DESC" } },
    { id: 2, label: "ارزان ترین", value: { key: "cost", order: "ASC" } },
    { id: 3, label: "محبوب ترین", value: { key: "likeCount", order: "DESC" } },
    { id: 4, label: "جدید ترین", value: { key: "lastUpdate", order: "DESC" } },
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
    <div className="mb-8 w-[72rem] flex flex-col gap-6">
      <div className="hidden lg:flex justify-start items-center gap-2 mr-7">
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

      {/* On smaller screens, we show a single button to trigger the modal */}
      <div className="lg:hidden flex justify-end items-center gap-2 mb-4 ml-12">
        <button
          className="text-white bg-black py-3 px-4 rounded-full flex gap-2"
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
          className="fixed  z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-end"
          onClick={closeModal}
        >
          {/* Modal Content (Slide-up effect) */}
          <div
            className={`w-full  dark:bg-indigo-950 bg-white  rounded-t-3xl p-4 transform transition-transform duration-300 flex flex-col ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center">
              <div className="bg-gray-300 rounded-3xl w-16 h-2 mb-6"></div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold mr-4 dark:text-white">ترتیب</h2>
              <button
                className="text-red-500 border border-[#FF5353] rounded-full py-2 px-4 ml-4 "
                onClick={closeModal}
              >
                ✕ بستن
              </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 mb-4 ">
              <button className=" text-red-500 border border-red-500 py-2 px-4 rounded-full  dark:text-white dark:border-white">
                جدیدترین
              </button>
              <button className="text-gray-800 border border-gray-800 py-2 px-3 rounded-full  dark:text-white dark:border-white">
                محبوب‌ترین
              </button>
              <button className="text-gray-800 border border-gray-800 py-2 px-4 rounded-full  dark:text-white dark:border-white">
                ارزان ترین
              </button>{" "}
              <button className="text-gray-800 border border-gray-800 py-2 px-4 rounded-full  dark:text-white dark:border-white">
                گران ترین
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-4 ">
        {/* {courseData?.courseFilterDtos.map((course, index) => ( */}
        {courses?.map((course, index) => (
          <div
            key={index}
            className="p-6 bg-sky-50 flex flex-col dark:bg-indigo-950 relative rounded-3xl justify-center items-center flex-1 min-w-[300px] max-w-[350px] "
          >
            <Link className="w-full" to={`/courseDetails/${course.courseId}`}>
              <div
                className={`h-56 flex justify-center items-center rounded-3xl w-64 mx-auto mb-4 ${getRandomColor()}`}
              >
                <img
                  src={course.tumbImageAddress ?? Logo}
                  alt={""}
                  className={`size-full rounded-3xl`}
                />
              </div>

              <h3 className="flex text-xl dark:text-white font-semibold mb-2">
                {course.title}
              </h3>
            </Link>
            <div className="flex flex-nowrap gap-7 w-full justify-between">
              <p className=" text-gray-400 dark:text-white text-xs items-center ">
                {course.teacherName}
              </p>
              <span className="text-gray-500 dark:text-white text-sm font-semibold mb-4">
                {course.cost}
                <span className="text-[0.6rem] mr-0.5">تومان</span>
              </span>
            </div>
            <div className="mt-4">
              <span className="px-3 py-0  text-xs absolute top-8 right-28 md:right-32 bg-blue-500 text-white rounded-full">
                {course.statusName}
              </span>
              <span className="px-3 py-0 text-xs  absolute top-8 right-10 md:right-14 bg-pink-500 text-white rounded-full">
                {course.levelName}
              </span>
            </div>
          </div>
        ))}
      </div>
      <ConfigProvider direction="rtl" theme={{ token: {} }}>
        <Pagination
          align="center"
          defaultCurrent={1}
          defaultPageSize={10}
          current={currentPg}
          onChange={onChangePg}
          total={totalCourseCount}
          showTotal={(total, range) =>
            `${range[0]}تا${range[1]} از ${total} دوره`
          }
          showSizeChanger
          pageSizeOptions={[10, 20, 50, 75, 100]}
          responsive
        />
      </ConfigProvider>
    </div>
  );
};

export { CourseList };
