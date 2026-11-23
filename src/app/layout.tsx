import "@/styles/globals.css";
import ThemeScript from "@/components/theme/theme-script";
import ThemeProvider from "@/components/theme/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/layout/scroll-to-top";
import { getProjects } from "@/lib/contentful";
import { personJsonLd, siteMetadata, siteViewport, websiteJsonLd } from "@/config/metadata";

export const metadata = siteMetadata;
export const viewport = siteViewport;

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const showProjects = await getProjects()
    .then((projects) => projects.length > 0)
    .catch(() => true);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header showProjects={showProjects} />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
