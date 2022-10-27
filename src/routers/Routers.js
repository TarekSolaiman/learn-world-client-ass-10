import { createBrowserRouter } from "react-router-dom";
import Login from "../component/LoginSigninPages/Login";
import Signin from "../component/LoginSigninPages/Signin";
import Main from "../component/MainCompo/Main";
import About from "../component/pages/About";
import Bloge from "../component/pages/Bloge";
import Courses from "../component/pages/Courses";
import Error from "../component/pages/Error";
import Home from "../component/pages/Home";
import Premium from "../component/pages/Premium/Premium";
import Profile from "../component/pages/Profile";
import Topic from "../component/pages/Topic/Topic";
import PrivateRoute from "../component/privateRoute/privateRoute";

// categori data : ( 'https://learn-world-server.vercel.app/course-categori' )
// coursess topic : ( `https://learn-world-server.vercel.app/course/${1}` )

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
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`https://learn-world-server.vercel.app/course/${params.id}`),
        element: <Topic />,
      },
      {
        path: "blog",
        element: <Bloge />,
      },
      {
        path: "premium",
        element: (
          <PrivateRoute>
            <Premium />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
