"use client";

import { useEffect } from "react";
import { RefreshCw } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-4 bg-canvas px-6 text-center">
      <h1 className="m-0 text-3xl font-bold tracking-tight text-ink md:text-4xl">
        Something went wrong
      </h1>
      <p className="m-0 max-w-md text-base text-muted">
        The page hit an unexpected error. Please try again in a moment.
      </p>
      <button
        type="button"
        onClick={reset}
        className="group mt-2 inline-flex w-max items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 active:translate-y-0"
      >
        Try again
        <RefreshCw size={16} className="transition-transform group-hover:rotate-180" />
      </button>
    </div>
  );
};

export default ErrorPage;
