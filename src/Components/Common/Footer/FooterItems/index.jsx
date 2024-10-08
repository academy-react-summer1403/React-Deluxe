import React from "react";
import { Link } from "react-router-dom";

const FooterItems = ({ Item, link }) => {
  return (
    <li>
      <Link to={link} className="hover:text-black dark:hover:text-white">
        {Item}
      </Link>
    </li>
  );
};

export { FooterItems };
