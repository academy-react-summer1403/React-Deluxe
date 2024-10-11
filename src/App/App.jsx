// import { useState } from "react";
import "./App.css";
// import { authRoutes } from "../config/router/auth.router";
import { RouterProvider } from "react-router-dom";
import { commonRoutes } from "../config/router/common.router";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState();
  const publicRoutes = commonRoutes;
  return (
    <RouterProvider router={publicRoutes} />
    // Can use: router={isLoggedIn ? authRoutes : publicRoutes} instead
  );
}

export default App;
