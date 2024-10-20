import { useState } from "react";
import Pic1 from "../../../assets/pic.png";
import Pic2 from "../../../assets/pic2.png";
import Pic3 from "../../../assets/pic3.png";
import Pic4 from "../../../assets/pic4.png";

const index = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-gray-950 px-5  shadow-lg w-[1440px] h-[921px]  ">
      <div className="bg-white rounded-3xl p-3">
        <div className="flex">
          <div className="w-1/3 border-r pr-4">
            <h2 className="text-xl font-bold mb-4">پروفایل من</h2>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  onClick={() => handleSectionClick("profile")}
                  className={`${
                    activeSection === "profile"
                      ? "text-blue-500 font-semibold"
                      : "text-gray-500"
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
                      ? "text-blue-500 font-semibold"
                      : "text-gray-500"
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
                      ? "text-blue-500 font-semibold"
                      : "text-gray-500"
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
                      ? "text-blue-500 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  لینک ها
                </a>
              </li>
            </ul>
          </div>

          <div className="w-2/3 pl-6">
            {activeSection === "profile" && (
              <form>
                <div className="mb-4 flex space-x-4 gap-3 rounded-xl">
                  <div className="w-1/2">
                    <label className="block text-sm font-bold mb-2"> نام</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-bold mb-2">
                      {" "}
                      نام خانوادگی
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="نام خانوادگی خود را وارد کنید"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2">
                    درباره من
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="چند کلمه در مورد خودتان بنویسید"
                  />
                </div>

                <div className="mb-4 flex space-x-4 gap-3 rounded-xl">
                  <div className="w-1/2">
                    <label className="block text-sm font-bold mb-2">
                      شماره همراه
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="شماره خود را وارد کنید"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-bold mb-2">
                      کد ملی
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="کد ملی خود را وارد کنید"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2">
                    تاریخ تولد
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2">جنسیت</label>
                  <div className="flex items-center space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="form-radio text-blue-500"
                      />
                      <span className="ml-2">مرد</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="form-radio text-blue-500"
                      />
                      <span className="ml-2">زن</span>
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2">ایمیل</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="ایمیل خود را وارد کنید"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2">
                    آدرس سکونت
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="آدرس خود را وارد کنید"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="ml-52 px-6 py-2 bg-blue-500 text-white font-bold rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    اعمال تغییرات
                  </button>
                </div>
              </form>
            )}

            {/* بخش عکس‌ها */}
            {activeSection === "photos" && (
              <div className="flex flex-cols-2 gap-2 mt-14 h-[700px]">
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
            )}

            {/* بخش محل سکونت */}
            {activeSection === "location" && (
              <div className="h-[700px] ">
                <p className=" text-sm text-blue-600 text-right mt-4">
                  داخل نقشه موقعیت مکان محل سکونت خود را انتخاب کنید
                </p>
                <div className="w-full h-64 rounded-lg shadow-lg bg-gray-200"></div>
              </div>
            )}

            {/* بخش لینک‌ها */}
            {activeSection === "links" && (
              <div className="h-[700px]">
                <div className="mb-4 mt-4">
                  <label className="block text-sm font-bold mb-2">تلگرام</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="لینک تلگرام خود را وارد کنید"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2">
                    لینکدین
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="لینک لینکدین خود را وارد کنید"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
