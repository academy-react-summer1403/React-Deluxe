import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FullPageLoading } from "./Components/Common/Loading/FullPageLoading/FullPageLoading";

const App = lazy(() => import("./App/App"));

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<FullPageLoading />}>
    <App />
  </Suspense>
);
