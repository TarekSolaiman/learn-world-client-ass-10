import { createBrowserRouter } from "react-router-dom";
import Login from "../component/LoginSigninPages/Login";
import Signin from "../component/LoginSigninPages/Signin";
import Main from "../component/MainCompo/Main";
import Bloge from "../component/pages/Bloge";
import Courses from "../component/pages/Courses";
import Error from "../component/pages/Error";
import Home from "../component/pages/Home";
import Profile from "../component/pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "blog",
        element: <Bloge />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
    ],
  },
]);
