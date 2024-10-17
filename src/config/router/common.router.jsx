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
import { StudentPanelLayout } from "../../App/Layout/StudentPanelLayout";
import Dashboard from "../../Screens/Dashboard";
import MyCourses from "../../Screens/MyCourse";
import MyProfile from "../../Screens/MyProfile";
import MyReserve from "../../Screens/MyReserve";

import FavoriteCourse from "../../Screens/FavoriteCourse";
import FavoriteBlog from "../../Screens/FavoriteBlog";
import Blogs from "../../Screens/Blogs";
import BlogDetails from "../../Screens/BlogDetails";

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
      {
        path: "/BlogDetails",
        element: <BlogDetails />,
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
  {
    path: "/",
    element: <StudentPanelLayout />,
    errorElement: <ErrorRoutes />,
    children: [
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/MyCourse",
        element: <MyCourses />,
      },
      {
        path: "/MyReserve",
        element: <MyReserve />,
      },
      {
        path: "/FavoriteCourses",
        element: <FavoriteCourse />,
      },
      {
        path: "/FavoriteBlogs",
        element: <FavoriteBlog />,
      },
      {
        path: "/MyProfile",
        element: <MyProfile />,
      },
    ],
  },
]);
