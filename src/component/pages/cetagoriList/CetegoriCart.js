import React from "react";
import { Link } from "react-router-dom";

const CetegoriCart = ({ title }) => {
  const { img, cat_name, details, cat_id } = title;
  return (
    <Link to={`/course/${cat_id}`}>
      <div className="rounded-md shadow-md bg-gray-900 text-gray-100">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-40 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{cat_name}</h2>
            <p className="text-gray-100">
              {details?.length > 150 ? details.slice(0, 150) + "...." : details}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CetegoriCart;
