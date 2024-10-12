// import { useState } from "react";
import "./App.css";
// import { authRoutes } from "../config/router/auth.router";
import { RouterProvider } from "react-router-dom";
import { commonRoutes } from "../config/router/common.router";
import { ErrorBoundary } from "../Screens/Errors/ErrorBoundry/ErrorBoundry";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState();
  const publicRoutes = commonRoutes;
  return (
    <ErrorBoundary>
      <RouterProvider router={publicRoutes} />
    </ErrorBoundary>
  );
}

export default App;
