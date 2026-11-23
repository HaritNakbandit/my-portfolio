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

const listeners = new Set<() => void>();

const subscribe = (onStoreChange: () => void) => {
  listeners.add(onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
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
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
    document.documentElement.classList.toggle("dark", next === "dark");
    listeners.forEach((listener) => listener());
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
