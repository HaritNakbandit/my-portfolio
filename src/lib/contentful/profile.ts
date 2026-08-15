import { client, resolveAssetUrl } from "@/lib/contentful/client";
import type { ProfileSkeleton } from "@/lib/contentful/types";

export interface ProfileData {
  name: string;
  jobTitle: string;
  bio: string;
  resumeUrl?: string;
  photoUrl?: string;
}

export const getProfile = async (): Promise<ProfileData | null> => {
  const res = await client.getEntries<ProfileSkeleton>({ content_type: "profile", limit: 1 });
  const item = res.items[0];
  if (!item) return null;

  return {
    name: item.fields.name,
    jobTitle: item.fields.jobTitle,
    bio: item.fields.bio,
    resumeUrl: resolveAssetUrl(item.fields.resumeFile),
    photoUrl: resolveAssetUrl(item.fields.profilePhoto),
  };
};
