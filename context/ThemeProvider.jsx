"use client";

import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("isDark");
    if (stored === "true") {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
    const dashboard = document.getElementById("dashboard");
    if (isDark) {
      dashboard.classList.add("dark");
      dashboard.setAttribute("data-theme", "dark");
    } else {
      dashboard.classList.remove("dark");
      dashboard.setAttribute("data-theme", "light");
    }
  }, [isDark]);

  const themeData = {
    toggleTheme,
    isDark,
  };

  return <ThemeContext value={themeData}>{children}</ThemeContext>;
}
