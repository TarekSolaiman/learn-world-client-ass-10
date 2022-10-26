import React from "react";

const AllTopic = ({ topic }) => {
  const { img, cat_name, details } = topic;
  return (
    <div className="lg:flex md:flex items-center w-4/5 justify-center mx-auto my-10 shadow-xl rounded-r-xl">
      <div className="lg:mr-3">
        <img
          className="w-80 mx-auto h-80 rounded-xl bg-gray-800"
          src={img}
          alt=""
        />
      </div>
      <div className="w-3/5 lg:text-start mx-auto">
        <h1 className="text-xl font-semibold">Topic : {cat_name}</h1>
        <p className="text-lg font-medium">How to use</p>
        <p className="">{details}</p>
      </div>
    </div>
  );
};

export default AllTopic;
