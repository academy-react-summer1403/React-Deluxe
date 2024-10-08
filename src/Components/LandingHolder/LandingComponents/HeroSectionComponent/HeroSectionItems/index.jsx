import React from "react";

const HeroItem = (Item) => {
  return (
    <div className="flex flex-col items-center">
      <img src={Item.url} alt="" className="h-12 w-12" />
      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
    </div>
  );
};

export { HeroItem };
