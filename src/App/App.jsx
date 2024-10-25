// import { useState } from "react";
import "./App.css";
// import { authRoutes } from "../config/router/auth.router";
import { RouterProvider } from "react-router-dom";
import { commonRoutes } from "../config/router/common.router";
import { ErrorBoundary } from "../Screens/Errors/ErrorBoundry/ErrorBoundry";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState();
  const publicRoutes = commonRoutes;
  return (
    <ErrorBoundary>
      <RouterProvider router={publicRoutes} />
      <ToastContainer />
    </ErrorBoundary>
  );
}

export default App;
