import { Building2, GraduationCap } from "lucide-react";
import { getExperience } from "@/lib/contentful";
import { formatTimelineRange } from "@/lib/format";
import type { TimelineEntry } from "@/types";

type RoleEntry = TimelineEntry["roles"][number] & { startDate: string };

interface CompanyGroup {
  title: string;
  icon: React.ReactNode;
  roles: RoleEntry[];
}

const groupByCompany = (
  entries: Awaited<ReturnType<typeof getExperience>>,
  icon: React.ReactNode,
): TimelineEntry[] => {
  const groups: CompanyGroup[] = [];

  for (const entry of entries) {
    const role: RoleEntry = {
      startDate: entry.startDate,
      timeLine: formatTimelineRange(entry.startDate, entry.endDate),
      role: entry.role,
      description: entry.description,
    };

    const lastGroup = groups[groups.length - 1];
    if (lastGroup && lastGroup.title === entry.company) {
      lastGroup.roles.push(role);
    } else {
      groups.push({ title: entry.company, icon, roles: [role] });
    }
  }

  return groups.map((group) => ({
    title: group.title,
    icon: group.icon,
    roles: group.roles
      .sort((a, b) => a.startDate.localeCompare(b.startDate))
      .map((role) => ({
        timeLine: role.timeLine,
        role: role.role,
        description: role.description,
      })),
  }));
};

export const getWorkTimeline = async (): Promise<TimelineEntry[]> => {
  const entries = await getExperience("work");
  return groupByCompany(entries, <Building2 size={18} />);
};

export const getEducationTimeline = async (): Promise<TimelineEntry[]> => {
  const entries = await getExperience("education");
  return groupByCompany(entries, <GraduationCap size={18} />);
};
