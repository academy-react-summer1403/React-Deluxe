import React, { useState } from "react";
import Recommendations from "../Common/RecommendedCourses";

const SlideModalWithRibbon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Sliding Modal */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        {/* Modal Content */}
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800">
            دوره های پیشنهادی ما مخصوص شما
          </h2>
          <p className="text-sm text-gray-600 mt-10">
            <Recommendations />
          </p>
        </div>
      </div>

      {/* Ribbon Button */}
      <button
        className={`fixed top-1/3 transform -translate-y-1/2 z-50 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 shadow-lg rounded-none origin-center ${
          isOpen ? "right-52 -rotate-90" : "right-0 rotate-0"
        } transition-all duration-300`}
        onClick={toggleModal}
      >
        پیشنهادات
      </button>

      {/* Overlay (optional) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleModal}
        ></div>
      )}
    </div>
  );
};

export default SlideModalWithRibbon;
