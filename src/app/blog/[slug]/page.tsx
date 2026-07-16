import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle, relatedArticles } from "@/content/articles";
import { ArticleCard } from "@/components/site/ArticleCard";
import { CTABand } from "@/components/site/CTABand";
import { ArrowLeft } from "lucide-react";
import { getSiteUrl } from "@/lib/site-url";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "Άρθρο δεν βρέθηκε",
      robots: { index: false },
    };
  }

  const url = `${getSiteUrl()}/blog/${slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url,
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const Body = article.content;
  const related = relatedArticles(article.slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    inLanguage: "el",
    author: { "@type": "Organization", name: "SkydreamLabs" },
    publisher: { "@type": "Organization", name: "SkydreamLabs" },
    keywords: article.keywords.join(", "),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="container-editorial pt-14 pb-20 md:pt-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-coral hover:gap-3 transition-all"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> πίσω στο blog
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em]">
            <span className="text-coral">
              {article.type === "pillar" ? "Pillar guide" : "Playbook"}
            </span>
            <span className="text-border-strong">·</span>
            <span className="text-ink-soft">{article.readingTime} λεπτά ανάγνωσης</span>
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] text-ink">
            {article.title}
          </h1>
          <p className="mt-6 text-xl text-ink-soft leading-relaxed">{article.excerpt}</p>
        </header>

        <div className="mt-14 max-w-3xl text-lg">
          <Body />
        </div>

        <div className="mt-16 max-w-3xl">
          <p className="font-mono text-[10px] uppercase tracking-widest text-coral">Keywords</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {article.keywords.map((k: string) => (
              <span
                key={k}
                className="rounded-full border border-border-strong bg-sand px-3 py-1 text-xs text-ink-soft"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
      </article>

      <section className="container-editorial">
        <p className="font-mono text-[10px] uppercase tracking-widest text-coral">Σχετικά</p>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {related.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <CTABand />
    </div>
  );
}
