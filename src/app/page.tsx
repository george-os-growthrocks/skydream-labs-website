import type { Metadata } from "next";
import { HomePage } from "@/components/site/HomePage";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "SkydreamLabs — Marketing Automation & Travel Agency CRM",
  description:
    "Travel agency CRM και marketing automation για boutique ταξιδιωτικά γραφεία. Σταμάτα να χάνεις enquiries — μετέτρεψε τις προσφορές σε κρατήσεις.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SkydreamLabs — Marketing Automation & Travel Agency CRM",
    description:
      "CRM for travel agents, pipeline και αυτοματισμοί για boutique ταξιδιωτικά γραφεία στην Ελλάδα.",
    url: getSiteUrl(),
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
