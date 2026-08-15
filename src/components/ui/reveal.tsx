"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  as?: ElementType;
}

const Reveal = ({ children, delayMs = 0, className, as: Tag = "div" }: RevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={visible ? { animationDelay: `${delayMs}ms` } : { opacity: 0 }}
      className={`${visible ? "animate-fade-in-up" : ""} ${className ?? ""}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
