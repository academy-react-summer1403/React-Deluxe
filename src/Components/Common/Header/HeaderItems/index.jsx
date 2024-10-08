import React from "react";
import { Link } from "react-router-dom";

const HeaderItems = ({ Item, link }) => {
  return (
    <li>
      <Link to={link} className="hover:text-white">
        {Item}
      </Link>
    </li>
  );
};

export default HeaderItems;
