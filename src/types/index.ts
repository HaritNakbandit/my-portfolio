import type { ReactNode } from "react";

export type ThemeMode = "light" | "dark";

export interface MenuItem {
  name: string;
  link: string;
}

export interface TimelineRole {
  timeLine: string;
  role: string;
  description?: string;
}

export interface TimelineEntry {
  title: string;
  icon: ReactNode;
  roles: TimelineRole[];
}
