import React from "react";
import Lottie from "lottie-react";
import reader from "../imges/90714-online-learning.json";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div>
        <div className="lg:flex md:flex justify-center items-center bg-blue-300">
          <div className="text-white md:w-2/5 lg:w-2/5">
            <div className="text-center md:text-justify lg:text-justify ">
              <p className="lg:text-5xl text-2xl font-bold">
                Improve Your
                <br />
                Learning Experience
                <br />
                Better Instantly
              </p>
            </div>
            <p className="text-lg font-semibold pt-3">
              We have <span className="text-yellow-400">40k+</span> Online
              courses & <span className="text-yellow-400">500k+</span> Online
              registered student. Find your desired Courses from them.
            </p>

            <p className="text-lg font-semibold pt-3">
              <span className="text-yellow-400">500k+</span>People already
              trusted us.{" "}
              <Link to="/courses" className="text-yellow-400">
                View Courses{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </p>
          </div>
          <div className="lg:w-2/5">
            <Lottie animationData={reader} loop={true} />;
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
