import { createClient, type Asset, type UnresolvedLink } from "contentful";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error(
    "Missing Contentful environment variables. Set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in .env.local",
  );
}

export const client = createClient({
  space: spaceId,
  accessToken,
  environment: process.env.CONTENTFUL_ENVIRONMENT ?? "master",
});

export const resolveAssetUrl = (asset?: Asset<undefined, string> | UnresolvedLink<"Asset">) => {
  if (!asset || !("fields" in asset)) return undefined;
  const url = asset.fields.file?.url;
  return url ? `https:${url}` : undefined;
};
