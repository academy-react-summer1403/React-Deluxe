// import { useState } from "react";
import "./App.css";
// import { authRoutes } from "../config/router/auth.router";
import { RouterProvider } from "react-router-dom";
import { commonRoutes } from "../config/router/common.router";
import { ErrorBoundary } from "../Screens/Errors/ErrorBoundry/ErrorBoundry";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState();
  const publicRoutes = commonRoutes;

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  return (
    <ErrorBoundary>
      <RouterProvider router={publicRoutes} />
      <ToastContainer />
    </ErrorBoundary>
  );
}

export default App;
