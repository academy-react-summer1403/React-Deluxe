import React from "react";

const HeaderItems = ({ Item }) => {
  return (
    <li>
      <a href="#courses" className="hover:text-white">
        {Item}
      </a>
    </li>
  );
};

export default HeaderItems;
