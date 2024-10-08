import React from "react";

const FooterItems = ({ Item }) => {
  return (
    <li>
      <a href="#courses" className="hover:text-gray-300">
        {Item}
      </a>
    </li>
  );
};

export { FooterItems };
