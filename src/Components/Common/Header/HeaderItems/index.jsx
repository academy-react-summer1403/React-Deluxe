import React from "react";
import { NavLink } from "react-router-dom";

const HeaderItems = ({ Item, link }) => {
  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline" : ""
        }
      >
        {Item}
      </NavLink>
    </li>
  );
};

export default HeaderItems;
