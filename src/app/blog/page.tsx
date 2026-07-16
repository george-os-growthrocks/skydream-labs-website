import type { Metadata } from "next";
import { articles } from "@/content/articles";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Eyebrow } from "@/components/site/Typography";
import { CTABand } from "@/components/site/CTABand";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Playbooks και οδηγοί για ταξιδιωτικά γραφεία: CRM, conversion, follow-ups, retention. Πρακτικές συμβουλές, χωρίς fluff.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — SkydreamLabs",
    description: "Playbooks για marketing automation ταξιδιωτικών γραφείων.",
    url: `${getSiteUrl()}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const pillar = articles.find((a) => a.type === "pillar");
  const rest = articles.filter((a) => a.type !== "pillar");

  return (
    <div className="container-editorial pt-20 pb-16 md:pt-28">
      <Eyebrow>Το blog</Eyebrow>
      <h1 className="mt-6 max-w-4xl font-display text-5xl md:text-7xl leading-[1.02] text-ink">
        Playbooks για ταξιδιωτικά γραφεία που <em className="text-sea-deep">σκέφτονται</em>.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-ink-soft">
        Πρακτικές συμβουλές για CRM, conversion, retention και lifecycle emails. Γραμμένα για
        boutique operators — όχι για SaaS εταιρείες που δεν έχουν πουλήσει ποτέ ταξίδι.
      </p>

      {pillar && (
        <div className="mt-14">
          <p className="font-mono text-[10px] uppercase tracking-widest text-coral">Pillar</p>
          <div className="mt-4">
            <ArticleCard article={pillar} featured />
          </div>
        </div>
      )}

      <div className="mt-14">
        <p className="font-mono text-[10px] uppercase tracking-widest text-coral">
          Υποστηρικτικά άρθρα
        </p>
        <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </div>

      <CTABand />
    </div>
  );
}
