// Comments.jsx
import React from "react";

// const Comment = ({ name, comment }) => (
//   <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
//     <p className="font-bold mb-2">{name}</p>
//     <p>{comment}</p>
//   </div>
// );

// const CourseComment = () => {
//   const commentsData = [
//     { name: "مهندس محمد", comment: "خیلی عالی بود." },
//     { name: "مهدی اصفهانی", comment: "این دوره عالی است." },
//   ];

//   return (
//     <div className="mb-6">
//       <h3 className="text-xl font-bold mb-4">نظرات دانشجویان</h3>
//       {commentsData.map((item, index) => (
//         <Comment key={index} name={item.name} comment={item.comment} />
//       ))}
//       <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
//         مشاهده بیشتر
//       </button>
//     </div>
//   );

const Comment = ({ name, comment }) => (
  <div className="bg-[#F9F9F9] p-4 rounded-3xl shadow-md mb-4 basis-[22%] h-72">
    <p className="font-bold text-[#1B1B1B] mb-2">{name}</p>
    <p className="text-[#7C7C7C]">{comment}</p>
  </div>
);

const CourseComment = () => {
  const commentsData = [
    {
      name: "مهندس محمد",
      comment: "خیلی عالی بود.",
    },
    { name: "مهدی اصفهانی", comment: "این دوره عالی است." },
    { name: "مهدی اصفهانی", comment: "این دوره عالی است." },
  ];

  return (
    // <div className="mb-6 flex">
    //   <h3 className="text-xl font-bold mb-4 text-[#1B1B1B]">نظرات دانشجویان</h3>
    //   {commentsData.map((item, index) => (
    //     <Comment key={index} name={item.name} comment={item.comment} />
    //   ))}
    //   <button className="bg-[#FFB700] text-white px-4 py-2 mt-4 rounded-md">
    //     مشاهده بیشتر
    //   </button>
    // </div>
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-4 text-[#1B1B1B]">
        نظرات دانشجو ها و اساتید
      </h3>
      <div className="flex flex-wrap justify-between">
        <div className="bg-[#3772FF] p-4 rounded-3xl shadow-md mb-4 basis-[22%] h-72 flex flex-col justify-center text-center">
          <p className="font-bold text-white mb-5">نظر شما</p>
          <p className="text-white">برای نظر دادن کلیک کنید</p>
        </div>
        {commentsData.map((item, index) => (
          <Comment key={index} name={item.name} comment={item.comment} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-[#2F2F2F] text-white px-4 py-2 mt-4 rounded-full">
          مشاهده بیشتر
        </button>
      </div>
    </div>
  );
};

export { CourseComment };
