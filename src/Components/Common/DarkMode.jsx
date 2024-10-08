import React, { useState, useEffect } from "react";
import { IoMoonOutline } from "react-icons/io5";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for previously saved theme from localStorage
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

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.remove("dark");
      // localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      // localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="p-2 rounded-full ">
      {isDarkMode ? <IoMoonOutline /> : <IoMoonOutline />}
    </button>
  );
};

export default DarkModeToggle;
