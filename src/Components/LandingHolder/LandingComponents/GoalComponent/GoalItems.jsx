import React from "react";

const GoalItems = ({ Item }) => {
  return (
    <div className="p-6 border hover:border-blue-500 bg-gray-50 hover:scale-110 hover:shadow-2xl hover:bg-gray-200 dark:bg-indigo-950 text-justify rounded-lg w-72">
      <h4 className="text-xl font-bold mb-2 dark:text-white">{Item.title}</h4>
      <p className="text-gray-600 dark:text-gray-200 mb-2">
        {Item.description}
      </p>
      <img src={Item.url} alt="" className="mx-auto size-auto mb-1 h-52" />
    </div>
  );
};

export default GoalItems;
