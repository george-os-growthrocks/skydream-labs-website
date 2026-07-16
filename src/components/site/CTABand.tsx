import { Link } from "@tanstack/react-router";

export function CTABand() {
  return (
    <section className="container-editorial mt-24">
      <div className="relative overflow-hidden rounded-3xl bg-sea-deep text-paper p-10 md:p-16">
        <div aria-hidden className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-coral/30 blur-3xl" />
        <div aria-hidden className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-coral/20 blur-3xl" />
        <div className="relative grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-coral-soft">Έτοιμος για το επόμενο βήμα;</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
              Δες πώς φαίνεται το γραφείο σου μέσα από τη SkydreamLabs.
            </h2>
            <p className="mt-4 max-w-xl text-paper/70">
              Ένα 30λεπτο demo, χωρίς πίεση. Δείχνουμε τη ροή enquiry → προσφορά → κράτηση → follow-up στα δεδομένα σου.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/epikoinonia" className="inline-flex items-center rounded-full bg-coral px-6 py-3 text-sm font-medium text-paper hover:bg-coral/90">
              Κλείσε demo
            </Link>
            <Link to="/times" className="inline-flex items-center rounded-full border border-paper/30 px-6 py-3 text-sm font-medium text-paper hover:bg-paper/10">
              Δες τιμές
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
