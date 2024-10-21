// import { useState } from "react";

// const CategoryMenu = () => {
//   const [activeCategory, setActiveCategory] = useState("جدیدترین");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const handleCategoryClick = (category) => {
//     setActiveCategory(category);
//     setIsModalOpen(false);
//   };

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <div className="flex flex-col items-start mb-6 mr-8">
//       <div className="hidden md:flex justify-start space-x-4 mb-4">
//         <p className="font-bold text-lg p-2 dark:text-white dark:bg-indigo-950">
//           ترتیب
//         </p>
//         <button
//           onClick={() => handleCategoryClick("جدیدترین")}
//           className={`px-4 py-2 h-10 rounded-full border border-transparent ${
//             activeCategory === "جدیدترین"
//               ? "bg-red-500 text-white"
//               : "border-gray-600 text-gray-800 hover:border-red-500 hover:text-red-500"
//           }`}
//         >
//           جدیدترین
//         </button>
//         <button
//           onClick={() => handleCategoryClick("محبوب‌ترین")}
//           className={`px-4 py-2 h-10 rounded-full border border-transparent ${
//             activeCategory === "محبوب‌ترین"
//               ? "bg-red-500 text-white"
//               : "bg-white border-gray-600 text-gray-800 hover:border-red-500 hover:text-red-500"
//           }`}
//         >
//           محبوب‌ترین
//         </button>
//         <button
//           onClick={() => handleCategoryClick("گران‌ترین")}
//           className={`px-4 py-2 h-10 rounded-full border border-transparent ${
//             activeCategory === "گران‌ترین"
//               ? "bg-red-500 text-white"
//               : "bg-white border-gray-600 text-gray-800 hover:border-red-500 hover:text-red-500"
//           }`}
//         >
//           گران‌ترین
//         </button>
//         <button
//           onClick={() => handleCategoryClick("ارزان‌ترین")}
//           className={`px-4 py-2 h-10 rounded-full border border-transparent ${
//             activeCategory === "ارزان‌ترین"
//               ? "bg-red-500 text-white"
//               : "bg-white border-gray-600 text-gray-800 hover:border-red-500 hover:text-red-500"
//           }`}
//         >
//           ارزان‌ترین
//         </button>
//       </div>

//       <div className="md:hidden mb-4 lg:hidden flex justify-start">
//         <button
//           onClick={toggleModal}
//           className="px-6 py-2 mx-28  bg-red-500 text-white rounded-full "
//         >
//           ترتیب
//         </button>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white dark:bg-indigo-950 p-8 rounded-lg">
//             <h2 className="text-xl font-bold mb-4 dark:text-white">
//               دسته‌بندی‌ها
//             </h2>
//             <button
//               onClick={() => handleCategoryClick("جدیدترین")}
//               className={`block w-full px-4 py-2 mb-2 rounded-full ${
//                 activeCategory === "جدیدترین"
//                   ? "bg-red-500 text-white"
//                   : "border border-gray-600 text-gray-800 hover:border-red-500 hover:text-red-500"
//               }`}
//             >
//               جدیدترین
//             </button>
//             <button
//               onClick={() => handleCategoryClick("محبوب‌ترین")}
//               className={`block w-full px-4 py-2 mb-2 rounded-full ${
//                 activeCategory === "محبوب‌ترین"
//                   ? "bg-red-500 text-white"
//                   : "border border-gray-600 text-gray-800 hover:border-red-500 hover:text-red-500"
//               }`}
//             >
//               محبوب‌ترین
//             </button>
//             <button
//               onClick={() => handleCategoryClick("گران‌ترین")}
//               className={`block w-full px-4 py-2 mb-2 rounded-full ${
//                 activeCategory === "گران‌ترین"
//                   ? "bg-red-500 text-white"
//                   : "border border-gray-600 text-gray-800 hover:border-red-500 hover:text-red-500"
//               }`}
//             >
//               گران‌ترین
//             </button>
//             <button
//               onClick={() => handleCategoryClick("ارزان‌ترین")}
//               className={`block w-full px-4 py-2 mb-2 rounded-full ${
//                 activeCategory === "ارزان‌ترین"
//                   ? "bg-red-500 text-white"
//                   : "border border-gray-600 text-gray-800 hover:border-red-500 hover:text-red-500"
//               }`}
//             >
//               ارزان‌ترین
//             </button>

//             <button
//               onClick={toggleModal}
//               className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full"
//             >
//               بستن
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export { CategoryMenu };
