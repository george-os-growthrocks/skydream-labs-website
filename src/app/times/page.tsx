import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/site/CTABand";
import { Eyebrow } from "@/components/site/Typography";
import { Check } from "lucide-react";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Τιμές",
  description:
    "Τιμές για travel agency CRM και marketing automation. Διαφανή plans για boutique γραφεία και travel advisors — χωρίς κρυφά κόστη.",
  alternates: { canonical: "/times" },
  openGraph: {
    title: "Τιμές — SkydreamLabs Travel Agency CRM",
    description: "Τιμοκατάλογος SkydreamLabs CRM for travel agents και boutique agencies.",
    url: `${getSiteUrl()}/times`,
  },
};

const plans = [
  {
    name: "Solo",
    price: "€79",
    tag: "per month",
    for: "Ανεξάρτητοι travel advisors",
    features: [
      "1 χρήστης",
      "Έως 200 ενεργές επαφές",
      "CRM + pipeline",
      "Auto follow-up sequences",
      "Email + WhatsApp inbox",
      "Basic reporting",
    ],
    highlighted: false,
  },
  {
    name: "Studio",
    price: "€199",
    tag: "per month",
    for: "Boutique γραφεία 2–8 ατόμων",
    features: [
      "Έως 6 χρήστες",
      "Έως 2.000 ενεργές επαφές",
      "Ολόκληρη η πλατφόρμα",
      "Lifecycle sequences (onboarding, pre/post-trip, anniversary)",
      "Referral engine",
      "Advanced reporting",
      "Integrations (Meta, Google, Stripe, Booking engines)",
    ],
    highlighted: true,
  },
  {
    name: "Atelier",
    price: "Custom",
    tag: "",
    for: "Μεγαλύτερα ταξιδιωτικά γραφεία και DMCs",
    features: [
      "Απεριόριστοι χρήστες",
      "Απεριόριστες επαφές",
      "Custom workflows & templates",
      "Dedicated onboarding coach",
      "SLA & priority support",
      "SSO & advanced security",
    ],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div>
      <section className="container-editorial pt-20 pb-14 md:pt-28 md:pb-14">
        <Eyebrow>Τιμοκατάλογος</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-5xl md:text-7xl leading-[1.02] text-ink">
          Διαφανείς τιμές, καμία <em className="text-sea-deep">έκπληξη</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          Χωρίς per-user χρεώσεις που εκτροχιάζονται, χωρίς setup fees. Όλα τα πλάνα περιλαμβάνουν
          white-glove onboarding και ελληνόφωνη υποστήριξη.
        </p>
      </section>

      <section className="container-editorial grid gap-5 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-3xl border p-8 flex flex-col ${
              p.highlighted
                ? "border-coral bg-sea-deep text-paper shadow-xl"
                : "border-border bg-card"
            }`}
          >
            <div className="flex items-baseline justify-between">
              <h3 className={`font-display text-2xl ${p.highlighted ? "text-paper" : "text-ink"}`}>
                {p.name}
              </h3>
              {p.highlighted && (
                <span className="rounded-full bg-coral px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-paper">
                  Popular
                </span>
              )}
            </div>
            <p className={`mt-1 text-sm ${p.highlighted ? "text-paper/70" : "text-ink-soft"}`}>
              {p.for}
            </p>
            <div className="mt-6 flex items-end gap-2">
              <span
                className={`font-display text-5xl ${p.highlighted ? "text-paper" : "text-ink"}`}
              >
                {p.price}
              </span>
              {p.tag && (
                <span
                  className={`pb-2 text-sm ${p.highlighted ? "text-paper/60" : "text-ink-soft"}`}
                >
                  {p.tag}
                </span>
              )}
            </div>
            <ul className="mt-8 space-y-3 text-sm flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-coral" />
                  <span className={p.highlighted ? "text-paper/90" : "text-ink-soft"}>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/epikoinonia"
              className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                p.highlighted
                  ? "bg-coral text-paper hover:bg-coral/90"
                  : "bg-sea-deep text-paper hover:bg-sea"
              }`}
            >
              {p.name === "Atelier" ? "Ας μιλήσουμε" : "Κλείσε demo"}
            </Link>
          </div>
        ))}
      </section>

      <section className="container-editorial mt-20 max-w-3xl">
        <h2 className="font-display text-3xl text-ink">Συχνές ερωτήσεις</h2>
        <div className="mt-6 space-y-6">
          {[
            {
              q: "Πόσο διαρκεί το onboarding;",
              a: "Οι περισσότερες ομάδες είναι σε πλήρη λειτουργία μέσα σε 10–14 μέρες. Το πρώτο pipeline και οι βασικές ροές είναι έτοιμα από τη μέρα 1.",
            },
            {
              q: "Θέλει τεχνικές γνώσεις;",
              a: "Όχι. Αν ξέρεις να στέλνεις email και να χρησιμοποιείς spreadsheet, μπορείς να δουλέψεις την πλατφόρμα.",
            },
            {
              q: "Τι γίνεται με τα δεδομένα μου αν φύγω;",
              a: "Είναι δικά σου. Πλήρες export σε CSV και JSON, ανά πάσα στιγμή, χωρίς επιπλέον χρέωση.",
            },
            {
              q: "Δουλεύει με το booking engine που ήδη έχω;",
              a: "Υποστηρίζουμε τα κύρια Ελληνικά και διεθνή booking engines. Πες μας ποιο χρησιμοποιείς και θα σου πούμε άμεσα.",
            },
          ].map((f) => (
            <div key={f.q} className="border-b border-border pb-6">
              <h3 className="font-display text-xl text-ink">{f.q}</h3>
              <p className="mt-2 text-ink-soft">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </div>
  );
}
