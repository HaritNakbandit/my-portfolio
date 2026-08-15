import type { ReactNode } from "react";
import Reveal from "@/components/ui/reveal";

interface PageWrapperProps {
  id?: string;
  divider?: boolean;
  children: ReactNode;
}

const PageWrapper = ({ id, divider = true, children }: PageWrapperProps) => {
  return (
    <section id={id} className={`scroll-mt-16 bg-canvas ${divider ? "border-t border-line" : ""}`}>
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
};

export default PageWrapper;
