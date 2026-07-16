import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contact.functions";
import { useState } from "react";
import { toast } from "sonner";
import { Eyebrow } from "@/components/site/Typography";
import { Mail, MapPin, MessageSquareText, Send } from "lucide-react";

export const Route = createFileRoute("/epikoinonia")({
  head: () => ({
    meta: [
      { title: "Επικοινωνία & Demo — SkydreamLabs" },
      { name: "description", content: "Κλείσε ένα 30λεπτο demo με την ομάδα της SkydreamLabs. Δείχνουμε τη ροή enquiry → κράτηση → follow-up στα δικά σου δεδομένα." },
      { property: "og:title", content: "Επικοινωνία & Demo — SkydreamLabs" },
      { property: "og:description", content: "Κλείσε demo με την ομάδα της SkydreamLabs." },
      { property: "og:url", content: "/epikoinonia" },
    ],
    links: [{ rel: "canonical", href: "/epikoinonia" }],
  }),
  component: Contact,
});

function Contact() {
  const send = useServerFn(submitContact);
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState("sending");
    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          company: String(fd.get("company") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      setState("sent");
      toast.success("Το μήνυμα στάλθηκε — θα σου γυρίσουμε εντός 24 ωρών.");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      toast.error("Κάτι πήγε στραβά. Δοκίμασε ξανά ή στείλε email απευθείας.");
      setState("idle");
    }
  }

  return (
    <div className="container-editorial pt-20 pb-24 md:pt-28 grid gap-14 md:grid-cols-[1fr_1fr] md:gap-20">
      <div>
        <Eyebrow>Ας μιλήσουμε</Eyebrow>
        <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.02] text-ink">
          30 λεπτά. Χωρίς <em className="text-sea-deep">υπόσχεση αγοράς</em>.
        </h1>
        <p className="mt-6 text-lg text-ink-soft leading-relaxed">
          Δείξε μας τη ροή σου — enquiries, follow-ups, τι σε πονάει. Θα σου δείξουμε πώς μοιάζει στημένο στην πλατφόρμα
          και θα σου πούμε ειλικρινά αν σε συμφέρει ή όχι.
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
              <p className="text-sm text-ink-soft">Δουλεύουμε remote-first, εξυπηρετούμε πανελλαδικά.</p>
            </div>
          </li>
        </ul>
      </div>

      <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 md:p-10">
        <div className="grid gap-5">
          <label className="grid gap-1.5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">Όνομα</span>
            <input required name="name" placeholder="Μαρία Παπαδοπούλου"
              className="rounded-xl border border-input bg-paper px-4 py-3 outline-none focus:border-coral" />
          </label>
          <label className="grid gap-1.5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">Email</span>
            <input required type="email" name="email" placeholder="you@yourtravelco.gr"
              className="rounded-xl border border-input bg-paper px-4 py-3 outline-none focus:border-coral" />
          </label>
          <label className="grid gap-1.5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">Γραφείο</span>
            <input name="company" placeholder="Το όνομα του γραφείου σου"
              className="rounded-xl border border-input bg-paper px-4 py-3 outline-none focus:border-coral" />
          </label>
          <label className="grid gap-1.5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">Πες μας λίγα</span>
            <textarea required name="message" rows={5} placeholder="Πόσα ενεργά enquiries έχεις, τι εργαλεία χρησιμοποιείς, πού πονάς."
              className="rounded-xl border border-input bg-paper px-4 py-3 outline-none focus:border-coral resize-none" />
          </label>
          <button
            disabled={state !== "idle"}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-3.5 text-sm font-medium text-paper hover:bg-coral/90 disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {state === "sending" ? "Αποστολή..." : state === "sent" ? "Στάλθηκε ✓" : "Στείλε αίτημα demo"}
          </button>
          <p className="text-[11px] text-ink-soft">
            Πατώντας «Στείλε», δέχεσαι να επικοινωνήσουμε σχετικά με το αίτημά σου. Δεν σε βάζουμε σε λίστα.
          </p>
        </div>
      </form>
    </div>
  );
}
