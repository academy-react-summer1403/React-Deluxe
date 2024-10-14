import React from "react";

const cardsData = [
  {
    title: "فیگما یا ادوبی ایکس‌دی؟",
    author: "محمدحسین علیپور",
    date: "17 اردیبهشت 1403",
    views: 290,
    imgUrl: "https://via.placeholder.com/300x150?text=Figma",
    bgColor: "bg-red-400",
  },
  {
    title: "فرق ری‌اکت با نکست جی‌اس چیست؟",
    author: "محسن اسکندری",
    date: "17 اردیبهشت 1403",
    views: 318,
    imgUrl: "https://via.placeholder.com/300x150?text=React",
    bgColor: "bg-blue-400",
  },
  // Add more card objects here
];

const BlogsCards = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-end items-center gap-4 mb-4">
        <button className="text-blue-500 border border-blue-500 py-2 px-4 rounded-full">
          مرتب‌ترین
        </button>
        <button className="text-white bg-blue-500 py-2 px-4 rounded-full">
          جدیدترین
        </button>
      </div>
      <div className="flex flex-wrap justify-between gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`w-full lg:w-[calc(50%-12px)] p-4 rounded-2xl shadow-md ${card.bgColor}`}
          >
            <img
              src={card.imgUrl}
              alt={card.title}
              className="mb-4 w-full h-40 rounded-lg object-cover"
            />
            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
            <div className="text-gray-600">
              <p>{card.author}</p>
              <p>{card.date}</p>
              <p>{card.views} بازدید</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-full">
          1
        </button>
        <button className="bg-white text-gray-700 py-2 px-4 rounded-full">
          2
        </button>
        <button className="bg-white text-gray-700 py-2 px-4 rounded-full">
          3
        </button>
      </div>
    </div>
  );
};

export { BlogsCards };
