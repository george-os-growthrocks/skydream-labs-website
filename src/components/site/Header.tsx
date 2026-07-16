"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/platforma", label: t("nav.platform") },
    { href: "/pos-leitourgei", label: t("nav.how") },
    { href: "/gia-poion", label: t("nav.for") },
    { href: "/times", label: t("nav.pricing") },
    { href: "/blog", label: t("nav.blog") },
  ] as const;

  const linkClass = (href: string) =>
    pathname === href ? "text-ink font-medium" : "hover:text-coral transition-colors";

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-paper/85 backdrop-blur-md">
      <div className="container-editorial flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 group">
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-full bg-sea-deep text-paper font-display text-lg leading-none"
          >
            s
          </span>
          <span className="font-display text-lg tracking-tight text-ink">SkydreamLabs</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-ink-soft">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center rounded-full border border-border text-xs">
            <button
              onClick={() => setLocale("el")}
              className={`px-2.5 py-1 rounded-full transition ${locale === "el" ? "bg-sea-deep text-paper" : "text-ink-soft"}`}
              aria-pressed={locale === "el"}
            >
              EL
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1 rounded-full transition ${locale === "en" ? "bg-sea-deep text-paper" : "text-ink-soft"}`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>
          <Link
            href="/epikoinonia"
            className="hidden sm:inline-flex items-center rounded-full bg-coral px-4 py-2 text-sm font-medium text-paper hover:bg-coral/90 transition-colors"
          >
            {t("cta.demo")}
          </Link>
          <button className="lg:hidden p-2 -mr-2" aria-label="menu" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-paper">
          <nav className="container-editorial py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-1 ${linkClass(l.href)}`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/epikoinonia"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center rounded-full bg-coral px-4 py-2 text-sm font-medium text-paper"
            >
              {t("cta.demo")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
