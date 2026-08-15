"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeMode } from "./theme-provider";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { mode, toggleColorMode } = useThemeMode();

  return (
    <button
      type="button"
      onClick={toggleColorMode}
      aria-label="Toggle color mode"
      className={`inline-flex items-center justify-center rounded-full p-2 transition hover:opacity-70 ${className ?? ""}`}
    >
      {mode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
