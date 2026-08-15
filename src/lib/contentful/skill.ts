import { client } from "@/lib/contentful/client";
import type { SkillSkeleton } from "@/lib/contentful/types";

export interface SkillData {
  category: string;
  items: string[];
}

export const getSkills = async (): Promise<SkillData[]> => {
  const res = await client.getEntries<SkillSkeleton>({ content_type: "skill" });
  return res.items.map((item) => ({
    category: item.fields.category,
    items: item.fields.items ?? [],
  }));
};
