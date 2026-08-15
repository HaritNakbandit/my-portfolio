"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { ThemeMode } from "@/types";

interface ThemeContextValue {
  mode: ThemeMode;
  toggleColorMode: () => void;
}

const THEME_KEY = "theme";

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
};

const getSnapshot = (): ThemeMode => {
  try {
    return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
};

const getServerSnapshot = (): ThemeMode => "light";

const ThemeContext = createContext<ThemeContextValue>({
  mode: "light",
  toggleColorMode: () => {},
});

export const useThemeMode = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleColorMode = useCallback(() => {
    const next: ThemeMode = mode === "light" ? "dark" : "light";
    localStorage.setItem(THEME_KEY, next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
