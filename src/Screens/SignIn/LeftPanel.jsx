import React from 'react';
import laptopImage from '../../assets/laptop.png';

const LeftPanel = () => {
  return (
    <div className='text-right w-[1148px] h-[910px] relative mt-80 rounded-[5px] '>
      <h2 className="text-blue-500 text-xl mb-20">آکادمی کد نویسی بحر</h2>
      <h1 className="text-3xl font-bold mb-4">شروع یک ماجراجویی</h1>
      <p className="text-gray-600 mb-8">
        هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر
      </p>

      {/* Image area */}
      <div className="flex items-center">
        <img src={laptopImage}  className="w-80 mx-auto mt-24" />
      </div>
    </div>
  );
};

export default LeftPanel;
