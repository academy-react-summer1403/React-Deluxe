import React from "react";

const FooterItems = ({ Item }) => {
  return (
    <li>
      <a href="#courses" className="hover:text-black">
        {Item}
      </a>
    </li>
  );
};

export { FooterItems };
