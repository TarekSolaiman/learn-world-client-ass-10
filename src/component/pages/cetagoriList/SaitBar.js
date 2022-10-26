import React from "react";
import { NavLink } from "react-router-dom";

const SaitBar = ({ title }) => {
  const { cat_name, cat_id } = title;
  return (
    <div className="mx-10 my-10">
      <NavLink
        to={`/course/${cat_id}`}
        className={({ isActive }) =>
          isActive
            ? " btn w-full bg-yellow-400"
            : "btn w-full hover:bg-yellow-400"
        }
      >
        <h1 className="my-1">{cat_name}</h1>
      </NavLink>
    </div>
  );
};

export default SaitBar;
