import type { TimelineEntry } from "@/types";
import Reveal from "@/components/ui/reveal";

interface TimelineProps {
  data: TimelineEntry[];
}

const Timeline = ({ data }: TimelineProps) => {
  return (
    <ul className="flex flex-col">
      {data.map((group, index) => {
        const isLast = index === data.length - 1;
        const overallStart = group.roles[0].timeLine.split(" - ")[0];
        const overallEnd = group.roles[group.roles.length - 1].timeLine.split(" - ")[1];
        const overallRange = `${overallStart} - ${overallEnd}`;

        return (
          <Reveal
            key={`${group.title}-${index}`}
            as="li"
            delayMs={index * 90}
            className="flex gap-4"
          >
            <div className="flex w-40 shrink-0 items-start justify-end pt-1">
              <span className="w-max rounded-md border border-line bg-surface px-2 py-1 text-xs font-medium whitespace-nowrap text-muted">
                {overallRange}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-md shadow-accent/25 ring-4 ring-accent/15 transition-transform duration-300 hover:scale-110">
                {group.icon}
              </span>
              {!isLast && <span className="w-px flex-1 bg-gradient-to-b from-line to-line/40" />}
            </div>
            <div className={`flex flex-col gap-2 px-4 ${isLast ? "pb-0" : "pb-8"}`}>
              <span className="text-base font-semibold text-ink">{group.title}</span>
              {group.roles.length > 1 ? (
                <div className="flex flex-col gap-3">
                  {group.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="flex flex-col gap-0.5">
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span className="text-sm font-medium text-ink">{role.role}</span>
                        <span className="text-xs text-muted">{role.timeLine}</span>
                      </div>
                      {role.description && (
                        <span className="text-sm leading-relaxed text-muted">
                          {role.description}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-ink">{group.roles[0].role}</span>
                  {group.roles[0].description && (
                    <span className="text-sm leading-relaxed text-muted">
                      {group.roles[0].description}
                    </span>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
};

export default Timeline;
