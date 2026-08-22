import type { Metadata, Viewport } from "next";
import {
  CONTACT,
  SITE_DESCRIPTION,
  SITE_JOB_TITLE,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/config/site";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Harit Nakbandit",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Harit Nakbandit",
    "Software Engineer",
    "React Developer",
    "React Native Developer",
    "Mobile App Developer",
    "Web Developer Thailand",
    "Portfolio",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_TITLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const siteViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: SITE_JOB_TITLE,
  email: `mailto:${CONTACT.email}`,
  sameAs: [CONTACT.github, CONTACT.linkedin],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_TITLE,
  url: SITE_URL,
};
