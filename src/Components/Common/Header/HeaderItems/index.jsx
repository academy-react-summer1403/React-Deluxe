import React from "react";
import { NavLink } from "react-router-dom";

const HeaderItems = ({ Item, link }) => {
  return (
    <li>
      <NavLink to={link} className="navlink">
        {Item}
      </NavLink>
    </li>
  );
};

export default HeaderItems;
