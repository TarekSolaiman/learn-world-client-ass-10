import React from "react";
import avater from "../../imges/avatarImg.png";

const Premium = () => {
  return (
    <div>
      <section className="p-6 bg-gray-800 text-gray-50">
        <h1 className="text-center text-5xl font-semibold mb-5">
          Register Now
        </h1>
        <form
          novalidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">
                If you get the premium courses ,then registar with this form .
              </p>
              <p className="text-xs">
                Learn worl is the best website for your learning .
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="firstname" className="text-sm">
                  First name
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full py-2 px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="lastname" className="text-sm">
                  Last name
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                  className="w-full  py-2 px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full  py-2 px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="address" className="text-sm">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder=""
                  className="w-full  py-2 px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="city" className="text-sm">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder=""
                  className="w-full  py-2 px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="state" className="text-sm">
                  State / Province
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder=""
                  className="w-full  py-2 px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="zip" className="text-sm">
                  ZIP / Postal
                </label>
                <input
                  id="zip"
                  type="text"
                  placeholder=""
                  className="w-full  py-2 px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Profile</p>
              <p className="text-xs">Courses and project information</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="username" className="text-sm">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="w-full  py-2 px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="website" className="text-sm">
                  Website
                </label>
                <input
                  id="website"
                  type="text"
                  placeholder="https://"
                  className="w-full  py-2 px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="bio" className="text-sm">
                  Bio
                </label>
                <textarea
                  id="bio"
                  placeholder=""
                  className="w-full  py-2 px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                ></textarea>
              </div>
              <div className="col-span-full">
                <label for="bio" className="text-sm">
                  Photo
                </label>
                <div className="flex items-center space-x-2">
                  <img
                    src={avater}
                    alt=""
                    className="w-10 h-10 rounded-full bg-gray-700"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 border rounded-md border-gray-100"
                  >
                    Change
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="flex items-center justify-center w-80 my-10 mx-auto p-3 font-semibold tracking-wide rounded-md bg-yellow-400 text-gray-900"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Premium;
