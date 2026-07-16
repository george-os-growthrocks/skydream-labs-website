import Link from "next/link";
import type { Article } from "@/content/articles";

const stageLabel: Record<Article["stage"], string> = {
  awareness: "Awareness",
  consideration: "Consideration",
  conversion: "Conversion",
  retention: "Retention",
  experience: "Experience",
};

export function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className={`group block rounded-2xl border border-border bg-card overflow-hidden hover:border-coral/60 transition-colors ${featured ? "md:col-span-2" : ""}`}
    >
      <article className="grid h-full">
        <div
          className={`p-6 md:p-8 grid gap-4 ${featured ? "md:grid-cols-[1.5fr_1fr] md:gap-10" : ""}`}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em]">
              <span className="text-coral">
                {article.type === "pillar" ? "Pillar" : "Supporting"}
              </span>
              <span className="text-border-strong">·</span>
              <span className="text-ink-soft">{stageLabel[article.stage]}</span>
            </div>
            <h3
              className={`mt-3 font-display text-ink group-hover:text-sea leading-[1.15] ${featured ? "text-3xl md:text-4xl" : "text-2xl"}`}
            >
              {article.title}
            </h3>
            <p className="mt-3 text-sm text-ink-soft line-clamp-3">{article.excerpt}</p>
            <div className="mt-6 flex items-center justify-between text-xs text-ink-soft/80">
              <span>{article.readingTime} λεπτά ανάγνωσης</span>
              <span className="font-mono text-coral group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
