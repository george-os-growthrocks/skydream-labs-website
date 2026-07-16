import { createFileRoute } from "@tanstack/react-router";
import { CTABand } from "@/components/site/CTABand";
import { Eyebrow } from "@/components/site/Typography";
import { Building2, Compass, Users } from "lucide-react";

export const Route = createFileRoute("/gia-poion")({
  head: () => ({
    meta: [
      { title: "Για Ποιον — SkydreamLabs" },
      { name: "description", content: "Για ποιον είναι η SkydreamLabs: boutique ταξιδιωτικά γραφεία, ανεξάρτητοι travel advisors και μικρά DMCs που θέλουν να αυτοματοποιήσουν χωρίς να χάσουν την προσωπική τους ταυτότητα." },
      { property: "og:title", content: "Για Ποιον — SkydreamLabs" },
      { property: "og:description", content: "Boutique ταξιδιωτικά γραφεία, travel advisors, μικρά DMCs στην Ελλάδα." },
      { property: "og:url", content: "/gia-poion" },
    ],
    links: [{ rel: "canonical", href: "/gia-poion" }],
  }),
  component: ForWhom,
});

const personas = [
  {
    icon: Building2,
    title: "Boutique ταξιδιωτικά γραφεία (2–15 άτομα)",
    body:
      "Έχεις κτίσει brand, έχεις πιστούς πελάτες, αλλά η ροή enquiry → κράτηση σας τρώει μέρες. Θέλεις να μεγαλώσεις χωρίς να χάσεις τον τόνο σου.",
    signals: ["10+ ενεργά enquiries την εβδομάδα", "2+ travel advisors", "Χρησιμοποιείτε ήδη 3–5 tools με Zapier ή χειροκίνητα"],
  },
  {
    icon: Compass,
    title: "Ανεξάρτητοι travel advisors",
    body:
      "Δουλεύεις solo ή με 1 βοηθό, φτιάχνεις εξατομικευμένα ταξίδια, αλλά χάνεις leads γιατί δεν προλαβαίνεις τη ροή.",
    signals: ["High-touch, high-margin πελάτες", "Instagram + word of mouth", "Θέλεις να μεγαλώσεις χωρίς να προσλάβεις"],
  },
  {
    icon: Users,
    title: "Μικρά DMCs & tour operators",
    body:
      "Δουλεύεις με B2B partners και B2C, χρειάζεσαι pipeline που να χειρίζεται και τα δύο, plus post-trip retention για τους B2C.",
    signals: ["Μικτό B2B/B2C πορτφόλιο", "Θες reporting per source", "Χρειάζεσαι ομαδική συνεργασία στα deals"],
  },
];

function ForWhom() {
  return (
    <div>
      <section className="container-editorial pt-20 pb-14 md:pt-28 md:pb-20">
        <Eyebrow>Για ποιον</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-5xl md:text-7xl leading-[1.02] text-ink">
          Για γραφεία που πουλάνε <em className="text-sea-deep">εμπειρίες</em>, όχι πακέτα.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          Η SkydreamLabs δεν είναι για online travel agencies μαζικού όγκου. Είναι για ταξιδιωτικά γραφεία που το κάθε booking
          έχει όνομα, ιστορία και συνέχεια.
        </p>
      </section>

      <section className="container-editorial grid gap-5 md:grid-cols-3">
        {personas.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border bg-card p-7">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-sea-deep text-paper">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-2xl text-ink leading-tight">{p.title}</h3>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">{p.body}</p>
            <div className="mt-5 border-t border-border pt-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-coral">σου ταιριάζει αν</p>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
                {p.signals.map((s) => <li key={s}>· {s}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="container-editorial mt-24 grid gap-12 md:grid-cols-2 md:gap-16 items-start">
        <div>
          <Eyebrow>Δεν είμαστε για</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink">Δεν είμαστε για όλους — και είναι εντάξει.</h2>
        </div>
        <ul className="space-y-4 text-ink-soft">
          <li className="border-l-2 border-coral pl-4">Mass market OTAs με χιλιάδες κρατήσεις/μήνα — υπάρχουν άλλα εργαλεία.</li>
          <li className="border-l-2 border-coral pl-4">Γραφεία που δεν θέλουν να αγγίξουν καθόλου τη ροή τους — το automation θέλει σκέψη.</li>
          <li className="border-l-2 border-coral pl-4">Ομάδες χωρίς κανέναν "owner" που να το τρέξει τους πρώτους 30 μέρες.</li>
        </ul>
      </section>

      <CTABand />
    </div>
  );
}
