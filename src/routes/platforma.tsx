import { createFileRoute } from "@tanstack/react-router";
import { CTABand } from "@/components/site/CTABand";
import { SectionHeading } from "@/components/site/Typography";
import { Inbox, LayoutList, MailCheck, MessageSquare, PieChart, Send, Tags, Users, Workflow, Zap } from "lucide-react";

export const Route = createFileRoute("/platforma")({
  head: () => ({
    meta: [
      { title: "Η Πλατφόρμα — SkydreamLabs" },
      { name: "description", content: "CRM, pipeline, αυτόματες ροές, πρότυπα emails και reporting σχεδιασμένα για ταξιδιωτικά γραφεία. Ένα εργαλείο, όλος ο κύκλος πελάτη." },
      { property: "og:title", content: "Η Πλατφόρμα — SkydreamLabs" },
      { property: "og:description", content: "CRM, αυτοματισμοί, follow-ups και lifecycle emails για boutique ταξιδιωτικά γραφεία." },
      { property: "og:url", content: "/platforma" },
    ],
    links: [{ rel: "canonical", href: "/platforma" }],
  }),
  component: Platform,
});

const features = [
  { icon: Inbox, title: "Unified inbox", body: "Site forms, Instagram DM, WhatsApp Business, email και εισερχόμενες κλήσεις — όλα σε ένα σημείο με auto-assign." },
  { icon: LayoutList, title: "Travel pipeline", body: "6 στάδια φτιαγμένα για travel: Νέο, Qualified, Πρόταση, Διαπραγμάτευση, Κρατήθηκε, Χάθηκε με λόγο." },
  { icon: Tags, title: "Έξυπνες ετικέτες", body: "Segmentation ανά τύπο ταξιδιώτη, εποχή, LTV, πηγή. Οι ετικέτες τρέχουν τα workflows." },
  { icon: Workflow, title: "Ροές (automations)", body: "Πραγματικές οπτικές ροές: trigger → condition → action. Στημένες για travel scenarios εκτός κουτιού." },
  { icon: MailCheck, title: "Auto follow-up", body: "4-touch ακολουθία σε 10 ημέρες, με stop rules και fallback σε WhatsApp όταν χρειάζεται." },
  { icon: Send, title: "Lifecycle emails", body: "Onboarding, pre-trip, post-trip, anniversary sequences — έτοιμα templates που τα κάνεις δικά σου." },
  { icon: Users, title: "Client 360°", body: "Ιστορικό, ταξίδια, notes, δικαιολογητικά, ημερομηνίες γενεθλίων. Ένας πελάτης, μία σελίδα." },
  { icon: MessageSquare, title: "Templates & snippets", body: "Βιβλιοθήκη προτύπων με δυναμικά πεδία. Απαντάς σε 30 δευτερόλεπτα αντί για 5 λεπτά." },
  { icon: PieChart, title: "Reporting που έχει νόημα", body: "Enquiry→booking rate, response time, repeat rate, referral rate. Όχι open rates." },
];

function Platform() {
  return (
    <div>
      <section className="container-editorial pt-20 pb-14 md:pt-28 md:pb-20">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-coral">Η πλατφόρμα</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl md:text-7xl leading-[1.02] text-ink">
          Ένα εργαλείο.<br />Όλος ο κύκλος πελάτη.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          Η SkydreamLabs αντικαθιστά τα 5–7 σκόρπια tools που χρησιμοποιείς σήμερα, με ένα ενιαίο σύστημα φτιαγμένο για
          ταξιδιωτικά γραφεία. Χωρίς Zapier, χωρίς spreadsheets, χωρίς "consultant που θα σας το στήσει σε 3 μήνες".
        </p>
      </section>

      <section className="container-editorial">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-7 hover:border-coral/60 transition-colors">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-sea-deep text-paper">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-editorial mt-24">
        <div className="rounded-3xl bg-sand p-10 md:p-16 border border-border">
          <SectionHeading
            eyebrow="Integrations"
            title={<>Δουλεύει με τα εργαλεία που ήδη χρησιμοποιείς.</>}
            lead="Google Workspace, Microsoft 365, WhatsApp Business, Instagram, Meta Ads, Stripe, Booking engines. Χωρίς Zapier ενδιάμεσα."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {["Gmail", "Outlook", "WhatsApp", "Instagram", "Meta Ads", "Google Ads", "Stripe", "Viva", "iCal", "Calendly", "Zoom"].map((x) => (
              <span key={x} className="inline-flex items-center rounded-full border border-border-strong bg-paper px-4 py-2 text-sm">
                <Zap className="mr-2 h-3.5 w-3.5 text-coral" /> {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
