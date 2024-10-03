import React from "react";

const HeaderItems = ({ Item }) => {
  console.log(Item);
  return (
    <li>
      <a href="#courses" className="hover:text-blue-600">
        {Item}
      </a>
    </li>
  );
};

export default HeaderItems;
