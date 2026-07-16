import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articles, getArticle, relatedArticles } from "@/content/articles";
import { ArticleCard } from "@/components/site/ArticleCard";
import { CTABand } from "@/components/site/CTABand";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Άρθρο δεν βρέθηκε — SkydreamLabs" }, { name: "robots", content: "noindex" }],
      };
    }
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title} — SkydreamLabs` },
        { name: "description", content: a.excerpt },
        { name: "keywords", content: a.keywords.join(", ") },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { property: "article:published_time", content: a.publishedAt },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.excerpt,
            datePublished: a.publishedAt,
            inLanguage: "el",
            author: { "@type": "Organization", name: "SkydreamLabs" },
            publisher: { "@type": "Organization", name: "SkydreamLabs" },
            keywords: a.keywords.join(", "),
          }),
        },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: ArticleNotFound,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const Body = article.content;
  const related = relatedArticles(article.slug, 3);

  return (
    <div>
      <article className="container-editorial pt-14 pb-20 md:pt-20">
        <Link to="/blog" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-coral hover:gap-3 transition-all">
          <ArrowLeft className="h-3.5 w-3.5" /> πίσω στο blog
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em]">
            <span className="text-coral">{article.type === "pillar" ? "Pillar guide" : "Playbook"}</span>
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
              <span key={k} className="rounded-full border border-border-strong bg-sand px-3 py-1 text-xs text-ink-soft">{k}</span>
            ))}
          </div>
        </div>
      </article>

      <section className="container-editorial">
        <p className="font-mono text-[10px] uppercase tracking-widest text-coral">Σχετικά</p>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {related.map((a) => <ArticleCard key={a.slug} article={a} />)}
        </div>
      </section>

      <CTABand />
    </div>
  );
}

function ArticleNotFound() {
  const { slug } = Route.useParams();
  return (
    <div className="container-editorial py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-coral">404</p>
      <h1 className="mt-4 font-display text-4xl text-ink">Δεν βρέθηκε το άρθρο "{slug}"</h1>
      <Link to="/blog" className="mt-8 inline-flex items-center rounded-full bg-sea-deep px-5 py-2.5 text-sm text-paper">
        Πίσω στο blog
      </Link>
    </div>
  );
}

// keep articles imported for tree-shake-safe listing when needed elsewhere
void articles;
