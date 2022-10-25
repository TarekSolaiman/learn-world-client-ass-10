import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../userContext/UserProvide";
import logo from "../imges/logo.png";
import avatar from "../imges/avatarImg.png";

const Header = () => {
  const [dark, setDark] = useState(false);
  const { user, logout } = useContext(AuthContext);
  console.log(user);

  const handelLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-base-100 sticky top-0">
      <div className="flex-1 justify-between">
        <div className="flex items-center">
          <img className="h-14" src={logo} alt="" />
          <Link to="/home" className="text-5xl font-bold text-blue-300">
            Learn
            <span className="text-3xl font-bold text-yellow-400">world</span>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:block">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-xl font-semibold text-yellow-400 mx-3"
                  : "text-xl font-semibold mx-3"
              }
              to="/courses"
            >
              Courses
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-xl font-semibold text-yellow-400 mx-3"
                  : "text-xl font-semibold mx-3"
              }
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-xl font-semibold text-yellow-400 mx-3"
                  : "text-xl font-semibold mx-3"
              }
              to="/about"
            >
              About
            </NavLink>
          </div>
          {user ? (
            <button
              onClick={handelLogout}
              className="text-lg font-bold mx-3 btn btn-outline btn-warning"
            >
              Log out
            </button>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-semibold text-yellow-400 mx-3"
                    : "text-xl font-semibold mx-3"
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-semibold text-yellow-400 mx-3"
                    : "text-xl font-semibold mx-3"
                }
                to="/signin"
              >
                Signin
              </NavLink>
            </>
          )}
        </div>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          {dark ? (
            <label
              onClick={() => setDark(false)}
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/4000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </div>
            </label>
          ) : (
            <label
              onClick={() => setDark(true)}
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/4000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </div>
            </label>
          )}
        </div>
        <div className="dropdown dropdown-end">
          {user?.photoURL ? (
            <Link to="/profile" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="" />
              </div>
            </Link>
          ) : (
            <Link to="/profile" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={avatar} alt="" />
              </div>
            </Link>
          )}
        </div>

        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost avatar">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-semibold text-yellow-400 mx-3"
                    : "text-xl font-semibold mx-3"
                }
                to="/courses"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-semibold text-yellow-400 mx-3"
                    : "text-xl font-semibold mx-3"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-semibold text-yellow-400 mx-3"
                    : "text-xl font-semibold mx-3"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
