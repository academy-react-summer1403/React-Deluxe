import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { authRoutes } from "../config/router/auth.router";
import { RouterProvider } from "react-router-dom";
import { commonRoutes } from "../config/router/common.router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const publicRoutes = commonRoutes;
  return (
    <>
      <RouterProvider routes={isLoggedIn ? authRoutes : publicRoutes} />
    </>
  );
}

export default App;
