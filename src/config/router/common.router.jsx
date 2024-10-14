import App from "../../App/App";
import { Layout } from "../../App/Layout/Layout";
import { CourseDetails } from "../../Screens/CourseDetails";
import { Courses } from "../../Screens/Courses";
import { Landing } from "../../Screens/Landing";
import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../../Screens/SignIn";
import { SignUp } from "../../Screens/SignUp";
import { ForgetPass } from "../../Screens/ForgetPass";
import { ErrorRoutes } from "../../Screens/Errors/ErrorRoutes/ErrorRoutes";
import Blogs from "../../Screens/Blogs";

// routes that are available both as public and auth
export const commonRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoutes />,
    children: [
      {
        index: true,
        path: "/",
        element: <Landing />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courseDetails",
        element: <CourseDetails />,
      },
      {
        path: "/Blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "/auth",
    errorElement: <ErrorRoutes />,
    children: [
      {
        path: "/auth/signIn",
        element: <SignIn />,
      },
      {
        path: "/auth/signUp",
        element: <SignUp />,
      },
      {
        path: "/auth/forgetPass",
        element: <ForgetPass />,
      },
    ],
  },
]);
