import React, { useState, useEffect, useRef } from "react";
import HeaderItems from "./HeaderItems";
import { PiBellThin } from "react-icons/pi";
import DarkModeToggle from "../DarkMode";
import { MenuWithToggle } from "./HeaderItems/MenuToggle";
import { Link } from "react-router-dom";
import AcademyLogo from "../../../assets/LandingAcademy/AcademyLogo.png";
import { getItem } from "../../../core/services/common/storage";
import { getQuery } from "../../../core/services/api/ReactQuery/getQuery";
import { useQueryShortcut } from "../../../core/services/api/ReactQuery/useQueryShortcut";
import { BsEye } from "react-icons/bs";
import Logo from "../../../assets/logo (3)highQ.png";

const ActionModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDashboard = () => {
    window.location.href = "/dashboard";
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/auth/signin";
  };

  return (
    <div className="absolute top-[45px] right-10 inset-0 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-black py-1 px-2 rounded-full shadow-lg w-64"
      >
        <div className="flex gap-4 h-8 items-center   justify-around">
          <button onClick={handleDashboard} className="text-white rounded-md">
            داشبورد
          </button>
          <button
            onClick={handleSignOut}
            className="bg-red-500 py-1 px-2 text-white rounded-3xl"
          >
            خروج
          </button>
        </div>
      </div>
    </div>
  );
};

const ReserveModal = ({ isOpen, onClose, data }) => {
  console.log("DATA", data);
  const modalRef = useRef();

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDashboard = () => {
    window.location.href = "/dashboard";
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/auth/signin";
  };

  return (
  <div className="absolute top-[45px] left-10 inset-0 flex items-center justify-center z-50">
    <div
      ref={modalRef}
      className="bg-white dark:bg-indigo-950 py-1 px-2 rounded-2xl shadow-lg w-64 absolute left-8"
    >
      {data?.listOfMyCourses.map((course, index) => (
      <div
        key={index}
        className="  flex flex-row  relative  items-center rounded-3xl justify-start gap-11    "
      >
        <div
          className={`h-12 hidden sm:flex justify-center items-center rounded-2xl w-20  mb-4`}
        >
          <img
            src={course.tumbImageAddress ?? Logo}
            alt={""}
            className={`size-full rounded-2xl`}
          />
        </div>

        <h3 className=" text-xl dark:text-white font-semibold mb-2  truncate w-[111px]">
          {course.courseTitle}
        </h3>

        <p className="  dark:text-white hidden sm:block text-[12px]  font-bold items-center w-[125px]  ">
          {course.fullName}
        </p>
        {/* <span className={`inline-flex items-center w-[125px] dark:text-white `}>
        {DatePersianizer(course.lastUpdate)}
      </span> */}

        <span
          className={`lg:inline-flex hidden items-center w-[105px] dark:text-white `}
        >
          {course.classRoomName}
        </span>
        <span className="px-3 py-0 text-base  hidden   bg-[#FF37F5] text-white rounded-full">
          {course.levelName}
        </span>

        <Link to={`/courseDetails/${course.courseId}`}>
          <BsEye className="text-base" />
        </Link>
      </div>
      ))}
    </div>
  </div>)
};

const Header = () => {
  getQuery("ProfileInfo", "/SharePanel/GetProfileInfo");
  const data = useQueryShortcut("ProfileInfo");

  getQuery("MyCoursesModal", "/SharePanel/GetMyCourses");
  const data2 = useQueryShortcut("MyCoursesModal");

  const [isModalOpen, setModalOpen] = useState(false);
  const [isReserveModalOpen, setReserveModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const openReserveModal = () => setReserveModalOpen(true);
  const closeReserveModal = () => setReserveModalOpen(false);

  const handleLogin = () => {
    const token = getItem("token");

    if (token) {
      return (
        <div className="flex items-center align-middle">
          <div className="relative">
            <button onClick={openModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ActionModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
          <div className="size-8 rounded-full overflow-hidden">
            <div className="flex w-10 items-center ">
              <img
                src={data?.currentPictureAddress}
                alt=""
                className="size-10 rounded-full"
              />

              <div className="text-right flex flex-col  items-start pr-4">
                <div className="text-sm font-semibold">
                  {data?.fName} {data?.lName}
                </div>
                <div className="text-sm  text-gray-300">{data?.email}</div>
              </div>
            </div>
          </div>
        </div>
        // </Link>
      );
    } else {
      return (
        <Link to={"/auth/signup"} className="space-x-2">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full mr-10">
            ثبت نام یا ورود
          </button>
        </Link>
      );
    }
  };
  return (
    <header className="bg-transparent dark:bg-[#041124] p-4 sticky top-0 z-10 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={AcademyLogo} alt="" className="size-10" />
          <h1 className="hidden sm:block text-xl font-bold text-cyan-500">
            آکادمی کد نویسی بحر
          </h1>
        </div>
        <div className="hidden lg:flex flex-nowrap items-center ml-10 rounded-full bg-black dark:bg-white p-1 pr-4">
          <nav>
            <ul className="flex  justify-between text-white mb-0 ml-2 !items-center dark:text-black w-72">
              <HeaderItems Item="خانه" link="/" />
              <HeaderItems Item="دوره ها" link="/courses" />

              <HeaderItems Item="بلاگ ها" link="/blogs" />
              <HeaderItems Item="درباره ما" link="/aboutus" />
            </ul>
          </nav>
          {handleLogin()}
          {/* <Link to={"/auth/signup"} className="space-x-2">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full mr-10">
              ثبت نام یا ورود
            </button>
          </Link> */}
        </div>
        <div className="flex">
          <div
            className="items-center relative hidden size-11 justify-center border-solid dark:bg-white border border-gray-300 rounded-full"
            onClick={openReserveModal}
          >
            <PiBellThin />
            <span className="absolute bottom-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
              ۲
            </span>
            <ReserveModal
              isOpen={isReserveModalOpen}
              onClose={closeReserveModal}
              data={data2}
            />
          </div>
          <div className="hidden items-center lg:flex size-11 justify-center bg-black  dark:bg-white text-white dark:text-black rounded-full">
            <DarkModeToggle />
          </div>
          <div className="items-center  lg:hidden flex size-11 justify-center bg-black dark:bg-white mr-2 text-white dark:text-black rounded-full">
            <MenuWithToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
