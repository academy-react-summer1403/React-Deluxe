import React, { useState, useEffect } from "react";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = localStorage.getItem("theme");
    if (initialColorValue === "dark") {
      root.classList.add("dark");
      setIsDarkMode(true);
    } else {
      root.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode and save to localStorage
  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="p-2 rounded-full ">
      {isDarkMode ? <FiSun /> : <IoMoonOutline />}
    </button>
  );
};

export default DarkModeToggle;
