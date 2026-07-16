import { createFileRoute } from "@tanstack/react-router";
import { CTABand } from "@/components/site/CTABand";
import { SectionHeading, Eyebrow } from "@/components/site/Typography";

export const Route = createFileRoute("/pos-leitourgei")({
  head: () => ({
    meta: [
      { title: "Πώς Λειτουργεί — SkydreamLabs" },
      { name: "description", content: "Ο πλήρης κύκλος πελάτη σε 4 βήματα: capture, nurture, convert, retain. Δες πώς μπαίνει σε λειτουργία σε ένα boutique ταξιδιωτικό γραφείο." },
      { property: "og:title", content: "Πώς Λειτουργεί — SkydreamLabs" },
      { property: "og:description", content: "Capture → nurture → convert → retain. Η ροή που μετατρέπει enquiries σε πιστούς πελάτες." },
      { property: "og:url", content: "/pos-leitourgei" },
    ],
    links: [{ rel: "canonical", href: "/pos-leitourgei" }],
  }),
  component: HowItWorks,
});

const stages = [
  {
    n: "01",
    stage: "Capture",
    title: "Κάθε enquiry, σε ένα μέρος",
    body: "Site form, Instagram DM, WhatsApp Business, email, εισερχόμενη κλήση. Το σύστημα βάζει timestamp, καταλαβαίνει την πηγή, δημιουργεί επαφή και το αναθέτει στον σωστό advisor βάσει κανόνων.",
    details: [
      "Auto-response σε 60 δευτερόλεπτα με ρεαλιστικό SLA",
      "Duplicate detection — δεν φτιάχνει καινούριο record για γνωστό πελάτη",
      "Meta capture: UTM, referral, ημέρα/ώρα εβδομάδας",
    ],
  },
  {
    n: "02",
    stage: "Nurture",
    title: "Μικρό discovery, μεγάλη διαφορά",
    body: "Ένα ελαφρύ questionnaire (προορισμός, ημερομηνίες, budget, style) που στέλνεται αυτόματα, ή συμπληρώνεται σε 10 λεπτά discovery call. Τα δεδομένα γίνονται ετικέτες στο CRM.",
    details: [
      "Πρότυπα ερωτήσεις προσαρμοσμένες σε honeymoons, οικογένειες, groups",
      "Tagging και segmentation που τρέχει τα επόμενα workflows",
      "Αν λείπουν πληροφορίες, το σύστημα δεν σε αφήνει να στείλεις πρόταση",
    ],
  },
  {
    n: "03",
    stage: "Convert",
    title: "4 touches σε 10 ημέρες",
    body: "Μόλις στείλεις πρόταση, ξεκινά η αυτόματη ακολουθία follow-up: check-in, alternative option, social proof, deadline. Με stop-rules και σοφή σιωπή αν χρειαστεί.",
    details: [
      "Fallback σε WhatsApp αν κανένα email δεν άνοιξε",
      "Loss capture: αν χάθηκε, καταγραφή του λόγου",
      "Reporting: median follow-ups μέχρι κλείσιμο ανά advisor",
    ],
  },
  {
    n: "04",
    stage: "Retain",
    title: "Το ταξίδι δεν τελειώνει με το κλείσιμο",
    body: "Onboarding sequence, pre-trip emails, welcome-back μήνυμα, review request στη σωστή ημέρα, anniversary email 1 χρόνο μετά. Το CAC για επαναλαμβανόμενο πελάτη τείνει στο μηδέν.",
    details: [
      "Referral engine με unique codes και two-sided rewards",
      "Seasonal check-ins βάσει προηγούμενης εποχής ταξιδιού",
      "NPS & review capture σε Google, TripAdvisor, Instagram",
    ],
  },
];

function HowItWorks() {
  return (
    <div>
      <section className="container-editorial pt-20 pb-14 md:pt-28 md:pb-20">
        <Eyebrow>Πώς λειτουργεί</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-5xl md:text-7xl leading-[1.02] text-ink">
          Capture, nurture, convert, retain — <em className="text-sea-deep">σε ένα timeline</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          Δεν χρειάζεσαι 6 tools. Χρειάζεσαι μία ροή που ξέρει πού είσαι, τι χρωστάς σε ποιον, και ποιο είναι το επόμενο βήμα.
        </p>
      </section>

      <section className="container-editorial">
        <div className="relative border-l-2 border-coral/40 pl-8 md:pl-14 space-y-16">
          {stages.map((s) => (
            <div key={s.n} className="relative">
              <span className="absolute -left-11 md:-left-[74px] top-1 grid h-9 w-9 place-items-center rounded-full bg-coral text-paper font-mono text-sm">
                {s.n}
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-coral">{s.stage}</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink leading-tight">{s.title}</h2>
              <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">{s.body}</p>
              <ul className="mt-6 grid gap-2 max-w-xl">
                {s.details.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-coral flex-shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container-editorial mt-24">
        <SectionHeading
          eyebrow="Το αποτέλεσμα"
          title={<>Λιγότερα emails, καλύτερα αποτελέσματα.</>}
          lead="Τα μέσα boutique γραφεία που δουλεύουν με SkydreamLabs βλέπουν διπλασιασμό στο enquiry→booking rate μέσα σε 90 μέρες, χωρίς επιπλέον διαφημιστικά έξοδα."
          align="center"
        />
      </section>

      <CTABand />
    </div>
  );
}
