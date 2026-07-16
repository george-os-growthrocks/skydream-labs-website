# SkydreamLabs — Marketing Site + Blog + Expanded Keyword Research

## Positioning

Marketing automation & CRM for Greek boutique travel agencies. The pitch: stop losing enquiries. Turn quotes into bookings, automate follow-ups, own the post-trip lifecycle. Audience is small/boutique travel agencies and independent travel advisors in Greece.

## Visual direction (I'll commit to one)

Editorial "travel × automation" — warm off-white paper, deep sea-navy, sunset-coral accent, a single distinctive display serif (e.g. Fraunces) paired with a clean grotesque (e.g. Söhne-style / General Sans). Boarding-pass motifs, itinerary timelines, ticket-stub cards. No purple SaaS gradients, no generic hero-with-3-icon-cards. Motion kept restrained: one hero animation (a quote/enquiry card flipping into a booking), subtle scroll reveals.

## Site structure (routes)

```text
/                       Home — hero, problem, product pillars, proof, CTA
/platforma              Product / features (CRM, automations, pipeline, templates)
/pos-leitourgei         How it works (4-step: capture → nurture → convert → retain)
/gia-poion              Who it's for (boutique agencies, travel advisors, DMCs)
/times                  Pricing / plans
/blog                   Blog index (7 articles, filterable by funnel stage)
/blog/$slug             Article template (pillar + 6 supporting)
/epikoinonia            Contact / demo request
/en, /en/..., etc.      English mirror via language toggle
```

Greek is primary; a header EL/EN toggle switches a translation dictionary and swaps route prefixes. Article bodies stay in Greek in v1 with EN summaries — writing 7 full articles twice doubles scope; I'll flag when EN bodies are needed.

## Blog articles (from your plan, all 7 written in full Greek)

| Slug | Title | Priority |
|---|---|---|
| /blog/marketing-automation-taxidiotika-grafeia | Marketing Automation για Ταξιδιωτικά Γραφεία: Ο Πλήρης Οδηγός (pillar) | P1 |
| /blog/crm-pipeline-taxidiotika-grafeia | CRM και Pipeline Πωλήσεων | P1 |
| /blog/metatropi-enquiries-se-bookings | Πώς να Μετατρέψεις Enquiries σε Κρατήσεις | P1 |
| /blog/automated-follow-up-taxidiotika-grafeia | Αυτοματοποιημένο Follow Up | P2 |
| /blog/post-trip-lifecycle-automation | Post-trip Lifecycle | P2 |
| /blog/onboarding-pelaton-taxidiotika-grafeia | Αυτοματοποιημένο Onboarding | P3 |
| /blog/pre-trip-email-sequences | Pre-trip Email Sequences | P3 |

Each article: H1 = title from plan, primary + cluster keywords woven in naturally, ~1200–2000 words, TOC, internal links back to the pillar and product pages, CTA to demo. Article JSON-LD, canonical, og:title/description per route.

## Expanded keyword research (deliverable + on-page use)

Run Semrush passes and produce `/mnt/documents/SkydreamLabs_Keyword_Research_v2.xlsx` with sheets:
- **Competitors** — organic competitors for the GR travel-tech / CRM space (`competitive_analysis`, both `gr` and `us` databases for EN terms).
- **Gap keywords** — what competitors rank for that you don't (`competitive_analysis` + gap output).
- **Cluster expansion** — for each of your 7 clusters, deeper related/question keywords in GR and EN (`keyword_research` per primary).
- **SERP snapshots** — top 10 + KDI for the 7 primaries (`serp_analysis`).
- **New article ideas** — 5–8 additional clusters (e.g. WhatsApp automation, quote/proposal templates, Instagram-to-booking, retention KPIs, GDPR for travel CRMs, AI trip proposals) with volume/KDI justification.
- **Comparison** — head-to-head with 1–2 nearest competitors (`compare_domains`, `top_pages`).

Findings feed back into: home copy, feature-page H1/H2, blog metadata, and 2–3 recommended new articles marked as "v2".

## SEO & metadata

- Per-route `head()` with unique title/description/og:title/og:description; canonical self-referencing each route.
- `og:image` only on leaf routes (home + each blog article). Article images generated to match the editorial style.
- Article routes emit Article JSON-LD; root emits Organization + WebSite JSON-LD.
- `robots.txt` allow-all + Sitemap directive once URL is known; `sitemap.xml` generated with all routes.

## Technical notes

- TanStack Start file-based routing, one route file per page, dot-separated for blog slugs (`blog.$slug.tsx`).
- Blog content authored as typed TS modules under `src/content/articles/` (frontmatter + MDX-ish JSX blocks) — no DB needed for v1. Blog index reads the same registry.
- i18n via a lightweight dictionary + `useTranslation` hook + `<Link>` prefix helper — no heavy i18n framework.
- Contact form posts to a `createServerFn` that logs + optionally sends via a mail provider later (v1: log + toast confirmation; note where to wire Resend/etc. when the user is ready).
- Design tokens in `src/styles.css` (all oklch); fonts loaded via `<link>` in `__root.tsx` head.
- All Semrush data pulled during the build turn is captured to the XLSX artifact and surfaced with `<presentation-artifact>`.

## Build order

1. Design tokens, fonts, layout shell (__root with header/footer, EL/EN toggle scaffold).
2. Home page + shared components (nav, footer, CTA blocks, article card).
3. Product, How-it-works, Who-it's-for, Pricing, Contact.
4. Blog index + article template + all 7 Greek articles from your plan.
5. Semrush research pass → XLSX artifact + notes on which findings changed copy.
6. SEO polish: per-route heads, JSON-LD, sitemap, robots, og:images.

## Out of scope for v1 (call out, don't build)

- Full EN article bodies (EN UI + summaries only).
- Live demo booking calendar / CRM integration.
- Auth, dashboards, real backend for enquiries beyond a logged server fn.

Approve and I'll build straight through.
