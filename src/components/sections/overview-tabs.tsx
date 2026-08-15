"use client";

import { useState } from "react";
import Timeline from "@/components/ui/timeline";
import type { TimelineEntry } from "@/types";

const TABS = ["Experience", "Education"] as const;

interface OverviewTabsProps {
  experience: TimelineEntry[];
  education: TimelineEntry[];
}

const OverviewTabs = ({ experience, education }: OverviewTabsProps) => {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Experience");

  return (
    <>
      <div className="mt-8 border-b border-line">
        <div role="tablist" aria-label="Timeline sections" className="flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              id={`tab-${tab.toLowerCase()}`}
              role="tab"
              type="button"
              aria-selected={activeTab === tab}
              aria-controls="timeline-panel"
              onClick={() => setActiveTab(tab)}
              className={`rounded-t-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? "text-accent shadow-[inset_0_-2px_0_0_var(--color-accent)]"
                  : "text-muted hover:text-ink"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div
        role="tabpanel"
        id="timeline-panel"
        aria-labelledby={`tab-${activeTab.toLowerCase()}`}
        className="pt-10"
      >
        <Timeline data={activeTab === "Experience" ? experience : education} />
      </div>
    </>
  );
};

export default OverviewTabs;
