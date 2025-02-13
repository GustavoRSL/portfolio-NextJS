"use client"; // Necessário para Next.js App Router
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  function isDark() {
    return theme === "dark";
  }

  return (
    <button
      onClick={() => setTheme(isDark() ? "light" : "dark")}
      className="fixed top-5 right-6 p-2 rounded-3xl transition-all bg-gray-200 dark:bg-gray-800"
    >
      {isDark() ? <FaMoon size={20} /> : <FaSun size={20} />}
    </button>
  );
}
