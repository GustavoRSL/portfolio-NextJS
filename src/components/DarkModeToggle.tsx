"use client"; // Necessário para Next.js App Router

import { useTheme } from "@/context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export function DarkModeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-6 p-2 rounded-3xl transition-all bg-gray-200 dark:bg-gray-800"
    >
      {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
    </button>
  );
}
