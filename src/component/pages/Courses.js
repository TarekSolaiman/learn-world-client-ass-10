import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../userContext/UserProvide";

const Courses = () => {
  const { cetagori, setCetagori } = useContext(AuthContext);
  console.log(cetagori);
  useEffect(() => {
    fetch("https://learn-world-server.vercel.app/course-categori")
      .then((res) => res.json())
      .then((data) => setCetagori(data));
  }, []);
  return (
    <div>
      <h1>this is courses page</h1>
    </div>
  );
};

export default Courses;
