import React from "react";

const GoalItems = ({ Item }) => {
  return (
    <div className="p-6 border hover:border-blue-500 rounded-lg w-72">
      <h4 className="text-xl font-bold mb-2">{Item.title}</h4>
      <p className="text-gray-600">{Item.description}</p>
      <img src="/path-to-image-2" alt="" className="mx-auto mb-4 h-52" />
    </div>
  );
};

export default GoalItems;
