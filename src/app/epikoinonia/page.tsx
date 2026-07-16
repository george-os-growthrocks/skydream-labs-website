import type { Metadata } from "next";
import { Eyebrow } from "@/components/site/Typography";
import { ContactForm } from "@/components/site/ContactForm";
import { Mail, MapPin, MessageSquareText } from "lucide-react";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Επικοινωνία & Demo",
  description:
    "Κλείσε ένα 30λεπτο demo με την ομάδα της SkydreamLabs. Δείχνουμε τη ροή enquiry → κράτηση → follow-up στα δικά σου δεδομένα.",
  alternates: { canonical: "/epikoinonia" },
  openGraph: {
    title: "Επικοινωνία & Demo — SkydreamLabs",
    description: "Κλείσε demo με την ομάδα της SkydreamLabs.",
    url: `${getSiteUrl()}/epikoinonia`,
  },
};

export default function ContactPage() {
  return (
    <div className="container-editorial pt-20 pb-24 md:pt-28 grid gap-14 md:grid-cols-[1fr_1fr] md:gap-20">
      <div>
        <Eyebrow>Ας μιλήσουμε</Eyebrow>
        <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.02] text-ink">
          30 λεπτά. Χωρίς <em className="text-sea-deep">υπόσχεση αγοράς</em>.
        </h1>
        <p className="mt-6 text-lg text-ink-soft leading-relaxed">
          Δείξε μας τη ροή σου — enquiries, follow-ups, τι σε πονάει. Θα σου δείξουμε πώς μοιάζει
          στημένο στην πλατφόρμα και θα σου πούμε ειλικρινά αν σε συμφέρει ή όχι.
        </p>
        <ul className="mt-10 space-y-5 text-ink">
          <li className="flex items-start gap-4">
            <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-sea-deep text-paper">
              <Mail className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-lg">hello@skydreamlabs.marketing</p>
              <p className="text-sm text-ink-soft">Απαντάμε σε εργάσιμες μέρες μέσα σε 4 ώρες.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-sea-deep text-paper">
              <MessageSquareText className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-lg">WhatsApp Business</p>
              <p className="text-sm text-ink-soft">Ζητά ένα ραντεβού με ένα μήνυμα.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-sea-deep text-paper">
              <MapPin className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-lg">Αθήνα, Ελλάδα</p>
              <p className="text-sm text-ink-soft">
                Δουλεύουμε remote-first, εξυπηρετούμε πανελλαδικά.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <ContactForm />
    </div>
  );
}
