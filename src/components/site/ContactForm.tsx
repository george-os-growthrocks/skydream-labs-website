"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          company: String(fd.get("company") ?? ""),
          message: String(fd.get("message") ?? ""),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
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
    <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 md:p-10">
      <div className="grid gap-5">
        <label className="grid gap-1.5">
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
            Όνομα
          </span>
          <input
            required
            name="name"
            placeholder="Μαρία Παπαδοπούλου"
            className="rounded-xl border border-input bg-paper px-4 py-3 outline-none focus:border-coral"
          />
        </label>
        <label className="grid gap-1.5">
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
            Email
          </span>
          <input
            required
            type="email"
            name="email"
            placeholder="you@yourtravelco.gr"
            className="rounded-xl border border-input bg-paper px-4 py-3 outline-none focus:border-coral"
          />
        </label>
        <label className="grid gap-1.5">
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
            Γραφείο
          </span>
          <input
            name="company"
            placeholder="Το όνομα του γραφείου σου"
            className="rounded-xl border border-input bg-paper px-4 py-3 outline-none focus:border-coral"
          />
        </label>
        <label className="grid gap-1.5">
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
            Πες μας λίγα
          </span>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Πόσα ενεργά enquiries έχεις, τι εργαλεία χρησιμοποιείς, πού πονάς."
            className="rounded-xl border border-input bg-paper px-4 py-3 outline-none focus:border-coral resize-none"
          />
        </label>
        <button
          disabled={state !== "idle"}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-3.5 text-sm font-medium text-paper hover:bg-coral/90 disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {state === "sending"
            ? "Αποστολή..."
            : state === "sent"
              ? "Στάλθηκε ✓"
              : "Στείλε αίτημα demo"}
        </button>
        <p className="text-[11px] text-ink-soft">
          Πατώντας «Στείλε», δέχεσαι να επικοινωνήσουμε σχετικά με το αίτημά σου. Δεν σε βάζουμε σε
          λίστα.
        </p>
      </div>
    </form>
  );
}
