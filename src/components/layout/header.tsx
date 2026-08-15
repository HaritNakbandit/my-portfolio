"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/theme/theme-toggle";
import type { MenuItem } from "@/types";

const MENU_LIST: MenuItem[] = [
  { name: "Overview", link: "#overview" },
  { name: "Skills", link: "#skills" },
  { name: "Project", link: "#project" },
  { name: "Contact", link: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        id="back-to-top"
        className={`fixed top-0 z-30 w-full transition-colors ${
          scrolled ? "border-b border-line bg-canvas/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#back-to-top" className="text-sm font-bold tracking-tight text-ink">
            Harit Nakbandit
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {MENU_LIST.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="group relative text-sm font-medium text-muted no-underline transition-colors hover:text-ink"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <span className="h-5 w-px bg-line" />
            <ThemeToggle className="text-muted hover:text-ink" />
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            className="flex items-center justify-center text-ink md:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>
      <div className="h-16" />

      {drawerOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="relative bg-canvas text-ink shadow-lg">
            <div className="flex justify-end p-3">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setDrawerOpen(false)}
              >
                <X size={22} />
              </button>
            </div>
            <ul>
              {MENU_LIST.map((item) => (
                <li key={item.name} className="border-t border-line">
                  <a
                    href={item.link}
                    onClick={() => setDrawerOpen(false)}
                    className="block px-6 py-4 text-sm font-medium text-ink"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2 border-t border-line px-6 py-4">
                <ThemeToggle />
                <span className="text-sm font-medium text-ink">Toggle theme</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
