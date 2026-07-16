import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-editorial py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-coral">404 · off the map</p>
      <h1 className="mt-6 font-display text-6xl md:text-7xl text-ink">Δεν βρέθηκε η σελίδα</h1>
      <p className="mt-4 text-ink-soft max-w-md mx-auto">
        Η σελίδα που ψάχνεις δεν υπάρχει ή έχει μετακινηθεί. Επέστρεψε στην αρχή για να συνεχίσεις
        το ταξίδι.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-sea-deep px-5 py-2.5 text-sm font-medium text-paper hover:bg-sea"
      >
        Πίσω στην αρχή
      </Link>
    </div>
  );
}
