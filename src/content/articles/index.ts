import type { ReactNode } from "react";

export type Stage = "awareness" | "consideration" | "conversion" | "retention" | "experience";

export interface Article {
  slug: string;
  title: string;
  h1?: string;
  excerpt: string;
  type: "pillar" | "supporting";
  stage: Stage;
  priority: "P1" | "P2" | "P3";
  primaryKeyword: string;
  keywords: string[];
  readingTime: number;
  publishedAt: string;
  faqs?: { q: string; a: string }[];
  content: () => ReactNode;
}

import { a1MarketingAutomationPillar } from "./a1-marketing-automation-taxidiotika-grafeia";
import { a2CrmPipeline } from "./a2-crm-pipeline-taxidiotika-grafeia";
import { a3MetatropiEnquiries } from "./a3-metatropi-enquiries-se-bookings";
import { a4AutomatedFollowUp } from "./a4-automated-follow-up-taxidiotika-grafeia";
import { a5PostTripLifecycle } from "./a5-post-trip-lifecycle-automation";
import { a6OnboardingPelaton } from "./a6-onboarding-pelaton-taxidiotika-grafeia";
import { a7PreTripEmails } from "./a7-pre-trip-email-sequences";

export const articles: Article[] = [
  a1MarketingAutomationPillar,
  a2CrmPipeline,
  a3MetatropiEnquiries,
  a4AutomatedFollowUp,
  a5PostTripLifecycle,
  a6OnboardingPelaton,
  a7PreTripEmails,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function relatedArticles(slug: string, limit = 3): Article[] {
  return articles.filter((a) => a.slug !== slug).slice(0, limit);
}
