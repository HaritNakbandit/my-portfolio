import "@/styles/globals.css";
import ThemeScript from "@/components/theme/theme-script";
import ThemeProvider from "@/components/theme/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/layout/scroll-to-top";
import { personJsonLd, siteMetadata, siteViewport, websiteJsonLd } from "@/config/metadata";

export const metadata = siteMetadata;
export const viewport = siteViewport;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
