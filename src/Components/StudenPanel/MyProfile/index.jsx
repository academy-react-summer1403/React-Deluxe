import { useEffect, useState } from "react";
import Pic1 from "../../../assets/pic.png";
import Pic2 from "../../../assets/pic2.png";
import Pic3 from "../../../assets/pic3.png";
import Pic4 from "../../../assets/pic4.png";
import { profileInfo } from "../../../core/services/api/StudentPanel/ProfileInfo.api";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useQueryShortcut } from "./../../../core/services/api/ReactQuery/useQueryShortcut";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../../core/services/interceptor";
import { toast } from "react-toastify";
import { UpdateProfileInfo } from "./../../../core/services/api/StudentPanel/UpdateProfileInfo.api";
import MyMap from "./Map";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [cordinate, setCortinate] = useState();
  console.log(cordinate);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const validationSchema = Yup.object({
    FName: Yup.string().required("نام ضروری است"),
    LName: Yup.string().required("نام خانوادگی ضروری است"),
    UserAbout: Yup.string(),
    // phoneNumber: Yup.string(),
    NationalCode: Yup.string(),
    BirthDay: Yup.date(),
    Gender: Yup.string(),
    // email: Yup.string().email("ایمیل نامعتبر است").required("ایمیل ضروری است"),
    HomeAdderess: Yup.string(),
  });

  const formikRef = useRef(null);

  const data = useQueryShortcut("ProfileInfo");

  // const initialValues = (data) => {
  //   firstName: "",
  //   lastName: "",
  //   about: "",
  //   phone: "",
  //   nationalCode: "",
  //   birthDate: "",
  //   gender: "",
  //   email: data.email,
  //   address: "",
  // }

  const queryClient = useQueryClient();

  // const UpdateProfileInfo2 = async (formData) => {
  //   console.log("FormData", formData);
  //   const res = await http.put("/SharePanel/UpdateProfileInfo", formData);
  //   return res; //???!!!!???????!!!!!!!!!!??????
  // };

  const mutation = useMutation({
    mutationKey: ["updateProfile"],
    mutationFn: UpdateProfileInfo,
    onSuccess: () => {
      queryClient.invalidateQueries(["ProfileInfo"]);
      toast.success("بروزرسانی با موفقیت انجام شد!", {
        position: "top-center",
      });
    },
    onError: () => {
      toast.error("خطا در بروزرسانی اطلاعات پروفایل!", {
        position: "top-center",
      });
    },
  });
  // console.log(mutation.isPending);

  const handleFormikSubmit = async (values, { setSubmitting }, cordinate) => {
    // await mutation.mutateAsync(values);
    console.log("Raw Formik Values", values);
    const formData = new FormData();
    formData.append("FName", values.FName);
    formData.append("LName", values.LName);
    formData.append("UserAbout", values.UserAbout);
    // formData.append("PhoneNumber", values.PhoneNumber);
    formData.append("NationalCode", values.NationalCode);
    formData.append("BirthDay", values.BirthDay);
    formData.append("Gender", values.Gender);
    // formData.append("Email", values.Email);
    formData.append("HomeAdderess", values.HomeAdderess);

    formData.append("latitude", cordinate.lat);
    formData.append("longitude", cordinate.lng);

    await mutation.mutateAsync(formData, {
      onSuccess: () => setSubmitting(false),
      onError: () => setSubmitting(false),
    });
  };

  return (
    <div className="bg-gray-950 px-5  pb-11  h-full">
      <div className="bg-white dark:bg-[#041124] dark:text-white rounded-3xl py-12 px-3">
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-[200px]    ml-5 px-4">
              <h2 className="text-2xl pb-4 font-bold mb-4 ">پروفایل من</h2>
              <ul className=" border-l h-[707px] space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    onClick={() => handleSectionClick("profile")}
                    className={` ${
                      activeSection === "profile"
                        ? "text-blue-500 font-semibold bg-gray-100 py-1.5 px-3 rounded-3xl"
                        : "text-gray-500 dark:text-white px-3"
                    }`}
                  >
                    اطلاعات حساب کاربری
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleSectionClick("photos")}
                    className={`${
                      activeSection === "photos"
                        ? "text-blue-500 font-semibold bg-gray-100 py-1.5 px-3 rounded-3xl"
                        : "text-gray-500 dark:text-white px-3"
                    }`}
                  >
                    عکس ها
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleSectionClick("location")}
                    className={`${
                      activeSection === "location"
                        ? "text-blue-500 font-semibold bg-gray-100 py-1.5 px-3 rounded-3xl"
                        : "text-gray-500 dark:text-white px-3"
                    }`}
                  >
                    محل سکونت
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleSectionClick("links")}
                    className={`${
                      activeSection === "links"
                        ? "text-blue-500 font-semibold bg-gray-100 py-1.5 px-3 rounded-3xl"
                        : "text-gray-500 dark:text-white px-3"
                    }`}
                  >
                    لینک ها
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-3/5 pl-6">
              {activeSection === "profile" && (
                <form className="flex flex-col mt-14 gap-1">
                  <div className="mb-4 flex flex-col md:flex-row space-x-4 gap-10 rounded-xl">
                    <div className="md:w-1/2">
                      <label className="block text-sm font-bold mb-2">
                        {" "}
                        نام
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border dark:border-gray-700 dark:bg-indigo-950 border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="نام خود را وارد کنید"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <label className="block text-sm font-bold mb-2">
                        {" "}
                        نام خانوادگی
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border dark:border-gray-700 dark:bg-indigo-950 border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="نام خانوادگی خود را وارد کنید"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                      درباره من
                    </label>
                    <textarea
                      className="w-full h-40 px-3 py-2 border dark:border-gray-700 dark:bg-indigo-950 border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="چند کلمه در مورد خودتان بنویسید"
                    />
                  </div>

                  <div className="mb-4 flex flex-col md:flex-row space-x-4 gap-10 rounded-xl">
                    <div className="md:w-1/2">
                      <label className="block text-sm font-bold mb-2">
                        شماره همراه
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border dark:border-gray-700 dark:bg-indigo-950 border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="شماره خود را وارد کنید"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <label className="block text-sm font-bold mb-2">
                        کد ملی
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border dark:border-gray-700 dark:bg-indigo-950 border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="کد ملی خود را وارد کنید"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-10 w-full">
                    <div className="mb-4 w-1/2 ">
                      <label className="block text-sm font-bold mb-2">
                        تاریخ تولد
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border dark:border-gray-700 dark:bg-indigo-950 border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-bold mb-2">
                        جنسیت
                      </label>
                      <div className="flex items-center h-10 gap-10 space-x-4">
                        <label className="inline-flex items-center">
                          <span className="ml-2">مرد</span>
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            className="form-radio  text-blue-500"
                          />
                        </label>
                        <label className="inline-flex items-center">
                          <span className="ml-2">زن</span>
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            className="form-radio text-blue-500"
                          />
                        </label>
                        <span className="hidden sm:block text-blue-500 w-20">
                          انتخاب کنید
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                      ایمیل
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border dark:border-gray-700 dark:bg-indigo-950 border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="ایمیل خود را وارد کنید"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                      آدرس سکونت
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border dark:border-gray-700 dark:bg-indigo-950 border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="آدرس خود را وارد کنید"
                    />
                  </div>
                </form>
              )}

              {/* بخش عکس‌ها */}
              {activeSection === "photos" && (
                <div className="flex flex-col">
                  <button className="flex justify-start items-center mt-14 w-48 gap-2 text-white px-5 py-3 rounded-3xl bg-blue-500">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 6.75C22.4142 6.75 22.75 6.41421 22.75 6C22.75 5.58579 22.4142 5.25 22 5.25V6.75ZM14 5.25C13.5858 5.25 13.25 5.58579 13.25 6C13.25 6.41421 13.5858 6.75 14 6.75V5.25ZM18.75 2C18.75 1.58579 18.4142 1.25 18 1.25C17.5858 1.25 17.25 1.58579 17.25 2H18.75ZM17.25 10C17.25 10.4142 17.5858 10.75 18 10.75C18.4142 10.75 18.75 10.4142 18.75 10H17.25ZM22 5.25H18V6.75H22V5.25ZM18 5.25H14V6.75H18V5.25ZM17.25 2V6H18.75V2H17.25ZM17.25 6V10H18.75V6H17.25Z"
                        fill="#FCFCFC"
                      />
                      <path
                        d="M11.5 3C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C21 19.2175 21 16.9783 21 12.5V12"
                        stroke="#FCFCFC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2 14.1354C2.61902 14.0455 3.24484 14.0011 3.87171 14.0027C6.52365 13.9466 9.11064 14.7729 11.1711 16.3342C13.082 17.7821 14.4247 19.7749 15 22"
                        stroke="#FCFCFC"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 16.8962C19.8246 16.3009 18.6088 15.9988 17.3862 16.0001C15.5345 15.9928 13.7015 16.6733 12 18"
                        stroke="#FCFCFC"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    اضافه کردن عکس
                  </button>
                  <div className="flex flex-row flex-wrap gap-2 mt-5  h-[400px]">
                    {/* تصاویر در گالری */}
                    <div className="flex flex-row w-32 h-32">
                      <img src={Pic1} className="rounded-lg shadow-md" />
                    </div>
                    <div className="flex flex-row w-32 h-32">
                      <img src={Pic2} className="rounded-lg shadow-md" />
                    </div>
                    <div className="flex flex-row w-32 h-32">
                      <img src={Pic3} className="rounded-lg shadow-md" />
                    </div>
                    <div className="flex flex-row w-32 h-32">
                      <img src={Pic4} className="rounded-lg shadow-md" />
                    </div>
                  </div>
                </div>
              )}

              {/* بخش محل سکونت */}
              {activeSection === "location" && (
                <div className="h-[700px] mt-14 ">
                  <p className=" text-sm text-blue-600 text-right mt-4">
                    داخل نقشه موقعیت مکان محل سکونت خود را انتخاب کنید
                  </p>
                  <div className="w-full h-64 rounded-lg shadow-lg dark:border-gray-700 dark:bg-indigo-950 bg-gray-200">
                    <MyMap setCortinate={setCortinate} />
                  </div>
                </div>
              )}

              {/* بخش لینک‌ها */}
              {activeSection === "links" && (
                <div className="h-[700px] mt-14">
                  <div className="mb-4 mt-4">
                    <label className="block text-sm font-bold mb-2">
                      تلگرام
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border dark:border-gray-700 dark:bg-indigo-950 border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="لینک تلگرام خود را وارد کنید"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                      لینکدین
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border dark:border-gray-700 dark:bg-indigo-950 border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="لینک لینکدین خود را وارد کنید"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-start mr-56">
            <button
              type="submit"
              className="ml-52 px-6 py-2 bg-blue-500 text-white font-bold rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              اعمال تغییرات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Profile };
