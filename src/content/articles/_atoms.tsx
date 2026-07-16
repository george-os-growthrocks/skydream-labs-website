import type { ReactNode } from "react";

/** Reusable typographic building blocks for long-form articles. */
export function P({ children }: { children: ReactNode }) {
  return <p className="mt-5 leading-relaxed text-ink-soft">{children}</p>;
}
export function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mt-14 font-display text-3xl md:text-4xl text-ink scroll-mt-24">
      {children}
    </h2>
  );
}
export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-8 font-display text-xl md:text-2xl text-ink">{children}</h3>;
}
export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-4 space-y-2 list-disc pl-6 text-ink-soft leading-relaxed">{children}</ul>
  );
}
export function OL({ children }: { children: ReactNode }) {
  return (
    <ol className="mt-4 space-y-2 list-decimal pl-6 text-ink-soft leading-relaxed">{children}</ol>
  );
}
export function LI({ children }: { children: ReactNode }) {
  return <li className="pl-1">{children}</li>;
}
export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="mt-8 rounded-2xl border-l-4 border-coral bg-coral/5 p-6">
      <p className="font-display text-lg text-ink">{title}</p>
      <div className="mt-2 text-ink-soft leading-relaxed">{children}</div>
    </aside>
  );
}
export function Quote({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <blockquote className="mt-8 border-l-2 border-coral pl-6 font-display text-2xl leading-snug text-ink">
      "{children}"
      {cite && (
        <cite className="mt-2 block text-xs font-sans not-italic text-ink-soft">— {cite}</cite>
      )}
    </blockquote>
  );
}
export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}
