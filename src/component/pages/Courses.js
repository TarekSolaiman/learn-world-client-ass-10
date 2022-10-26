import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CetegoriCart from "./cetagoriList/CetegoriCart";
import SaitBar from "./cetagoriList/SaitBar";

const Courses = () => {
  // const { cetagori, setCetagori } = useContext(AuthContext);
  const [cetagori, setCetagori] = useState([]);
  console.log(cetagori);
  useEffect(() => {
    fetch("https://learn-world-server.vercel.app/course-categori")
      .then((res) => res.json())
      .then((data) => setCetagori(data));
  }, []);
  return (
    <div>
      <section className="grid grid-flow-col">
        <div className="col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-10 m-10">
          {cetagori.map((title) => (
            <CetegoriCart key={title.cat_id} title={title}></CetegoriCart>
          ))}
        </div>
        <div className="col-span-1 lg:w-80">
          {cetagori.map((title) => (
            <SaitBar key={title.cat_id} title={title}></SaitBar>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
