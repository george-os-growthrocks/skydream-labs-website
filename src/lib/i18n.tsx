import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Locale = "el" | "en";

type Dict = Record<string, { el: string; en: string }>;

const dict: Dict = {
  "nav.platform": { el: "Πλατφόρμα", en: "Platform" },
  "nav.how": { el: "Πώς Λειτουργεί", en: "How it works" },
  "nav.for": { el: "Για Ποιον", en: "For whom" },
  "nav.pricing": { el: "Τιμές", en: "Pricing" },
  "nav.blog": { el: "Blog", en: "Blog" },
  "nav.contact": { el: "Επικοινωνία", en: "Contact" },
  "cta.demo": { el: "Κλείσε demo", en: "Book a demo" },
  "cta.start": { el: "Ξεκίνα τώρα", en: "Get started" },
  "footer.tag": { el: "Marketing automation για ταξιδιωτικά γραφεία.", en: "Marketing automation for travel agencies." },
  "footer.rights": { el: "Με επιφύλαξη κάθε δικαιώματος.", en: "All rights reserved." },
};

export function t(key: string, locale: Locale): string {
  return dict[key]?.[locale] ?? key;
}

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (k: string) => string;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "el",
  setLocale: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("el");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("skydream.locale") : null;
    if (saved === "el" || saved === "en") setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("skydream.locale", l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: (k) => t(k, locale) }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
