"use client";

import { useEffect, useState } from "react";

const SHOW_MS = 2000;
const EXIT_MS = 500;
const VISITED_KEY = "intro-visited";

type Phase = "loading" | "exiting" | "done";

const IntroLoader = () => {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    let visited = false;
    try {
      visited = sessionStorage.getItem(VISITED_KEY) === "1";
    } catch {
      /* ignore */
    }

    const timers: number[] = [];

    timers.push(
      window.setTimeout(() => {
        if (visited) {
          setPhase("done");
          return;
        }

        try {
          sessionStorage.setItem(VISITED_KEY, "1");
        } catch {
          /* ignore */
        }

        timers.push(window.setTimeout(() => setPhase("exiting"), SHOW_MS));
        timers.push(window.setTimeout(() => setPhase("done"), SHOW_MS + EXIT_MS));
      }, 0),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  if (phase === "done") return null;

  const name = "Harit Nakbandit";

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-canvas transition-all duration-500 ease-out ${
        phase === "exiting"
          ? "pointer-events-none -translate-y-4 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <h1 className="m-0 flex overflow-hidden text-4xl font-bold tracking-tight text-ink md:text-6xl">
        {name.split("").map((char, index) => (
          <span
            key={index}
            className="animate-char-in"
            style={{ animationDelay: `${index * 35}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
        <span
          className="animate-char-in ml-1.5 h-2 w-2 self-end rounded-full bg-accent md:h-3 md:w-3"
          style={{ animationDelay: `${name.length * 35}ms` }}
        />
      </h1>
      <div className="h-1 w-44 overflow-hidden rounded-full bg-line">
        <div className="animate-bar-fill h-full w-full origin-left rounded-full bg-accent" />
      </div>
    </div>
  );
};

export default IntroLoader;
