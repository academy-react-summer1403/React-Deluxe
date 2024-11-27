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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState();
  const publicRoutes = commonRoutes;

  const queryClient = new QueryClient();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={publicRoutes} />
        <ToastContainer />
        <ReactQueryDevtools />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
