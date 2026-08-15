import { client, resolveAssetUrl } from "@/lib/contentful/client";
import type { ProjectSkeleton } from "@/lib/contentful/types";

export interface ProjectData {
  title: string;
  imageUrl?: string;
  year: string;
  tools: string;
  link: string;
  description: string;
}

export const getProjects = async (): Promise<ProjectData[]> => {
  const res = await client.getEntries<ProjectSkeleton>({
    content_type: "project",
    order: ["-fields.year"],
  });

  return res.items.map((item) => ({
    title: item.fields.title,
    imageUrl: resolveAssetUrl(item.fields.image),
    year: item.fields.year,
    tools: item.fields.tools,
    link: item.fields.link,
    description: item.fields.description,
  }));
};
