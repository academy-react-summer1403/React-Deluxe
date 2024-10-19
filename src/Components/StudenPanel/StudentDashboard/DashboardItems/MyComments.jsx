import React from "react";

const MyComments = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-1/4 ">
      <h2 className="text-xl font-semibold">نظرات شما</h2>
      <div className="mt-4">
        <p className="text-gray-700">دوره خیلی خوبی بود و واقعا لذت بردم.</p>
        <p className="text-gray-400 text-sm mt-2">محمدحسین بزچاللو</p>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">خوب بود ولی نه زیاد</p>
        <p className="text-gray-400 text-sm mt-2">امیرحسین سیاحی</p>
      </div>
    </div>
  );
};

export { MyComments };
