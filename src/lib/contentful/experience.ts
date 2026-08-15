import { client } from "@/lib/contentful/client";
import type { ExperienceSkeleton } from "@/lib/contentful/types";

export interface ExperienceData {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description?: string;
  type: "work" | "education";
}

export const getExperience = async (type: "work" | "education"): Promise<ExperienceData[]> => {
  const res = await client.getEntries<ExperienceSkeleton>({
    content_type: "experience",
    "fields.type": type,
    order: ["-fields.startDate"],
  });

  return res.items.map((item) => ({
    company: item.fields.company,
    role: item.fields.role,
    startDate: item.fields.startDate,
    endDate: item.fields.endDate,
    description: item.fields.description,
    type: item.fields.type as "work" | "education",
  }));
};
