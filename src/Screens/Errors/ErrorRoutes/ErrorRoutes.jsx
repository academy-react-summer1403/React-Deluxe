import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorRoutes = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-100 text-center">
      <h1 className="text-9xl font-extrabold text-sky-600">خطا</h1>
      <p className="text-2xl text-sky-800 mt-4">
        مشکلی پیش آمده است!
        <span role="img" aria-label="magnifying glass">
          🔍
        </span>
      </p>
      <p className="text-md text-sky-700 mt-2">{error.message}.</p>
      <button
        className="mt-6 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-800 text-white rounded-full shadow-md hover:bg-sky-700 transition"
        onClick={() => location.reload()}
      >
        بارگذاری مجدد
      </button>
      <button
        className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-700 text-white rounded-full shadow-md hover:bg-sky-700 transition"
        // onClick={() => location.reload()} clear locale storage + redirect to login!!!!!!!
      >
        پاک کردن حافظه پنهان
      </button>
    </div>
  );
};

export { ErrorRoutes };
