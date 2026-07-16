"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-boarding-pass.jpg";
import deskImg from "@/assets/desk-workflow.jpg";
import { CTABand } from "@/components/site/CTABand";
import { SectionHeading, Eyebrow, Stamp } from "@/components/site/Typography";
import { ArticleCard } from "@/components/site/ArticleCard";
import { articles } from "@/content/articles";
import { ArrowRight, Compass, Inbox, MailCheck, Sparkles, Timer, Users } from "lucide-react";

const pillars = [
  {
    icon: Inbox,
    title: "Enquiry capture",
    body: "Site forms, Instagram, WhatsApp, email — όλα σε ένα inbox με auto-assign και SLA.",
  },
  {
    icon: Compass,
    title: "CRM & pipeline",
    body: "Έξι στάδια φτιαγμένα για travel. Ετικέτες, LTV, ιστορικό, notes σε κάθε επαφή.",
  },
  {
    icon: MailCheck,
    title: "Auto follow-up",
    body: "4-touch ακολουθία 10 ημερών με έξυπνο tone και stop-rules. Χωρίς spam.",
  },
  {
    icon: Sparkles,
    title: "Lifecycle",
    body: "Onboarding, pre-trip, post-trip και anniversary emails — κάθε τι στη σωστή στιγμή.",
  },
];

const stats = [
  { n: "+18pp", label: "μέση αύξηση enquiry→booking rate" },
  { n: "70%", label: "λιγότερα support tickets πριν την αναχώρηση" },
  { n: "25%", label: "νέα κρατήσεις μέσω referrals" },
];

const trust = [
  "Cyclades Bespoke",
  "Ionian Trails",
  "Attica Curated",
  "Meteora & Co.",
  "Chania Voyages",
  "Aegean Slow Travel",
  "Northern Passages",
];

export function HomePage() {
  const featured = articles.slice(0, 3);
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="container-editorial grid gap-14 pt-14 pb-20 md:pt-24 md:pb-28 md:grid-cols-[1.05fr_1fr] md:gap-16 items-center">
          <div>
            <Stamp>Marketing OS · travel · Ελλάδα</Stamp>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-tight text-ink"
            >
              Σταμάτα να χάνεις
              <br />
              <span className="italic text-sea-deep">enquiries</span> στο Instagram,
              <br />
              στο WhatsApp και
              <br />
              στα post-it.
            </motion.h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft leading-relaxed">
              Η SkydreamLabs είναι το marketing automation & CRM για boutique ταξιδιωτικά γραφεία.
              Ένα σύστημα που μετατρέπει τις προσφορές σε κρατήσεις, αυτοματοποιεί τα follow-ups και
              κρατά ζωντανούς τους πελάτες σου — από το πρώτο "γεια" μέχρι το επόμενο ταξίδι.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/epikoinonia"
                className="inline-flex items-center gap-2 rounded-full bg-sea-deep px-6 py-3 text-sm font-medium text-paper hover:bg-sea"
              >
                Κλείσε 30λεπτό demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/platforma"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-ink hover:bg-sand"
              >
                Δες τη πλατφόρμα
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl text-sea-deep">{s.n}</dt>
                  <dd className="mt-1 text-xs text-ink-soft leading-snug">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl">
              <Image
                src={heroImg}
                alt="Boarding pass, itinerary και μπρούτζινη πυξίδα σε βαθύ μπλε φόντο"
                width={1600}
                height={1200}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 rotate-[-6deg] bg-paper rounded-xl border border-border shadow-xl p-4 pr-6 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-coral text-paper">
                  <Timer className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                    enquiry
                  </p>
                  <p className="font-display text-sm">Μαρία → Σαντορίνη · 4 βρ.</p>
                </div>
              </div>
              <div className="mt-3 rule-coral pb-1 text-[10px] font-mono text-ink-soft">
                status → πρόταση στάλθηκε
              </div>
            </div>
            <div className="hidden md:block absolute -top-4 -right-4 rotate-[4deg] bg-paper rounded-xl border border-border shadow-xl p-4 max-w-[220px]">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                auto follow-up
              </p>
              <p className="mt-1 font-display text-sm leading-tight">
                "Πρόσθεσα κάτι που μάλλον σου ταιριάζει"
              </p>
              <p className="mt-2 text-[10px] text-ink-soft">σε 3 ημέρες · 78% απαντούν</p>
            </div>
          </motion.div>
        </div>

        <div className="border-y border-border/60 bg-sand/60 py-4 overflow-hidden">
          <div className="flex gap-14 animate-marquee whitespace-nowrap">
            {[...trust, ...trust].map((t, i) => (
              <span key={i} className="font-display text-lg text-ink/60">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial mt-24">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20 items-start">
          <div>
            <Eyebrow>Το πρόβλημα</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-ink">
              Δεν χάνεις κρατήσεις γιατί έχεις κακά πακέτα. Χάνεις κρατήσεις γιατί η επικοινωνία
              γίνεται με ένα Excel και μια μνήμη.
            </h2>
          </div>
          <ul className="space-y-6">
            {[
              { n: "01", t: "Enquiries στο Instagram Παρασκευής βράδυ — χαμένα ως Δευτέρα." },
              { n: "02", t: "Προσφορές που στάλθηκαν, δεν απαντήθηκαν, ξεχάστηκαν." },
              { n: "03", t: "Πληροφορίες σκόρπιες: post-it, sheets, WhatsApp threads." },
              {
                n: "04",
                t: "Πελάτες που δεν επιστρέφουν γιατί κανείς δεν τους θύμισε ότι υπάρχεις.",
              },
            ].map((x) => (
              <li
                key={x.n}
                className="grid grid-cols-[auto_1fr] gap-5 border-b border-border pb-6 last:border-0"
              >
                <span className="font-mono text-sm text-coral">{x.n}</span>
                <p className="text-lg text-ink leading-snug">{x.t}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-editorial mt-24">
        <SectionHeading
          eyebrow="Το προϊόν"
          title={
            <>
              Ένα σύστημα, φτιαγμένο για <span className="italic">travel</span> ροές.
            </>
          }
          lead="Όχι generic CRM με add-ons. Όχι newsletter tool. Ένα ενιαίο εργαλείο που καταλαβαίνει τον κύκλο enquiry → κράτηση → επιστροφή."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-card p-6 hover:border-coral/60 transition-colors"
            >
              <div className="grid h-11 w-11 place-items-center rounded-full bg-sea-deep text-paper">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-editorial mt-24 grid gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20 items-center">
        <div>
          <Image
            src={deskImg}
            alt="Boutique travel advisor's desk με σκίτσο itinerary στα ελληνικά νησιά και φωτιζόμενη σειρά email αυτοματισμών"
            width={1400}
            height={1000}
            className="rounded-3xl border border-border shadow-xl"
          />
        </div>
        <div>
          <Eyebrow>Πώς λειτουργεί</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-ink">
            Capture → nurture → convert → retain. Σε ένα ενιαίο timeline.
          </h2>
          <ol className="mt-8 space-y-6">
            {[
              {
                s: "Capture",
                t: "Κάθε enquiry πέφτει αυτόματα στο pipeline με source, timestamp, SLA.",
              },
              {
                s: "Nurture",
                t: "Discovery questionnaire, tagging, ζεστό follow-up εκεί που πρέπει.",
              },
              { s: "Convert", t: "4-touch sequence σε 10 μέρες με stop-rules και ξεκάθαρα CTAs." },
              {
                s: "Retain",
                t: "Onboarding, pre-trip, post-trip, anniversary — δωρεάν loyalty engine.",
              },
            ].map((x, i) => (
              <li key={x.s} className="grid grid-cols-[auto_1fr] gap-5">
                <span className="font-mono text-sm text-coral mt-1">0{i + 1}</span>
                <div>
                  <p className="font-display text-xl text-ink">{x.s}</p>
                  <p className="mt-1 text-ink-soft">{x.t}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href="/pos-leitourgei"
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-coral hover:gap-3 transition-all"
          >
            Ολόκληρη η ροή <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <section className="container-editorial mt-24">
        <figure className="max-w-4xl mx-auto text-center">
          <Users className="h-6 w-6 text-coral mx-auto" />
          <blockquote className="mt-6 font-display text-3xl md:text-5xl leading-[1.1] text-ink">
            "Δεν στέλνουμε <em className="text-coral">πιο πολλά</em>. Σταματήσαμε να χάνουμε αυτά
            που είχαμε στα χέρια μας."
          </blockquote>
          <figcaption className="mt-6 font-mono text-xs uppercase tracking-widest text-ink-soft">
            Boutique operator · Αθήνα
          </figcaption>
        </figure>
      </section>

      <section className="container-editorial mt-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Από το blog"
            title={<>Ιδέες, playbooks και σκέψεις για travel operators.</>}
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-coral"
          >
            Όλα τα άρθρα <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featured.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <CTABand />
    </div>
  );
}
