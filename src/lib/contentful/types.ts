import type { EntryFieldTypes, EntrySkeletonType } from "contentful";

export interface ExperienceSkeleton extends EntrySkeletonType {
  contentTypeId: "experience";
  fields: {
    company: EntryFieldTypes.Symbol;
    role: EntryFieldTypes.Symbol;
    startDate: EntryFieldTypes.Date;
    endDate?: EntryFieldTypes.Date;
    description?: EntryFieldTypes.Text;
    type: EntryFieldTypes.Symbol;
  };
}

export interface ProjectSkeleton extends EntrySkeletonType {
  contentTypeId: "project";
  fields: {
    title: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    year: EntryFieldTypes.Symbol;
    tools: EntryFieldTypes.Symbol;
    link: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
  };
}

export interface SkillSkeleton extends EntrySkeletonType {
  contentTypeId: "skill";
  fields: {
    category: EntryFieldTypes.Symbol;
    items: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  };
}

export interface ProfileSkeleton extends EntrySkeletonType {
  contentTypeId: "profile";
  fields: {
    name: EntryFieldTypes.Symbol;
    jobTitle: EntryFieldTypes.Symbol;
    bio: EntryFieldTypes.Text;
    resumeFile?: EntryFieldTypes.AssetLink;
    profilePhoto?: EntryFieldTypes.AssetLink;
  };
}
