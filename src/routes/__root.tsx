import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <div className="container-editorial py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-coral">404 · off the map</p>
        <h1 className="mt-6 font-display text-6xl md:text-7xl text-ink">Δεν βρέθηκε η σελίδα</h1>
        <p className="mt-4 text-ink-soft max-w-md mx-auto">
          Η σελίδα που ψάχνεις δεν υπάρχει ή έχει μετακινηθεί. Επέστρεψε στην αρχή για να συνεχίσεις το ταξίδι.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-full bg-sea-deep px-5 py-2.5 text-sm font-medium text-paper hover:bg-sea"
        >
          Πίσω στην αρχή
        </Link>
      </div>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-coral">Σφάλμα</p>
        <h1 className="mt-4 font-display text-3xl text-ink">Κάτι πήγε στραβά</h1>
        <p className="mt-2 text-sm text-ink-soft">
          Δοκίμασε ξανά ή επέστρεψε στην αρχική σελίδα.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-sea-deep px-4 py-2 text-sm font-medium text-paper"
          >
            Δοκίμασε ξανά
          </button>
          <a href="/" className="rounded-full border border-border px-4 py-2 text-sm font-medium">
            Αρχική
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SkydreamLabs — Marketing Automation για Ταξιδιωτικά Γραφεία" },
      {
        name: "description",
        content:
          "Το marketing automation & CRM για boutique ταξιδιωτικά γραφεία. Μετέτρεψε τα enquiries σε κρατήσεις, αυτοματοποίησε follow-ups και κράτα ζωντανούς τους πελάτες σου.",
      },
      { name: "author", content: "SkydreamLabs" },
      { name: "theme-color", content: "#0f1e3a" },
      { property: "og:title", content: "SkydreamLabs — Marketing Automation για Ταξιδιωτικά Γραφεία" },
      {
        property: "og:description",
        content: "CRM, pipeline και αυτοματισμοί για boutique ταξιδιωτικά γραφεία και travel advisors στην Ελλάδα.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "SkydreamLabs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SkydreamLabs",
          url: "https://skydreamlabs.marketing",
          description: "Marketing automation & CRM για ταξιδιωτικά γραφεία.",
          areaServed: "GR",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="el">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <div className="flex min-h-screen flex-col bg-paper">
          <Header />
          <main className="flex-1"><Outlet /></main>
          <Footer />
        </div>
        <Toaster position="top-center" />
      </I18nProvider>
    </QueryClientProvider>
  );
}
