import type { Metadata, Viewport } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Providers } from "@/components/site/Providers";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SkydreamLabs — Marketing Automation & Travel Agency CRM",
    template: "%s — SkydreamLabs",
  },
  description:
    "Travel agency CRM και marketing automation για boutique ταξιδιωτικά γραφεία. Μετέτρεψε enquiries σε κρατήσεις, αυτοματοποίησε follow-ups και κράτα ζωντανούς τους πελάτες σου.",
  authors: [{ name: "SkydreamLabs" }],
  openGraph: {
    type: "website",
    siteName: "SkydreamLabs",
    title: "SkydreamLabs — Marketing Automation & Travel Agency CRM",
    description:
      "CRM for travel agents, pipeline και αυτοματισμοί για boutique ταξιδιωτικά γραφεία στην Ελλάδα.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1e3a",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SkydreamLabs",
  url: siteUrl,
  description: "Travel agency CRM και marketing automation για boutique ταξιδιωτικά γραφεία.",
  areaServed: "GR",
  knowsAbout: [
    "travel agency CRM",
    "CRM for travel agents",
    "marketing automation for travel agencies",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Providers>
          <div className="flex min-h-screen flex-col bg-paper">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
