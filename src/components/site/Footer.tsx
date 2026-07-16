import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t, locale } = useI18n();
  return (
    <footer className="mt-24 border-t border-border/70 bg-sea-deep text-paper">
      <div className="container-editorial py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span aria-hidden className="grid h-9 w-9 place-items-center rounded-full bg-coral text-sea-deep font-display text-lg leading-none">
              s
            </span>
            <span className="font-display text-xl">SkydreamLabs</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-paper/70">{t("footer.tag")}</p>
          <p className="mt-6 text-xs text-paper/50">Αθήνα · Ελλάδα</p>
        </div>
        <div>
          <h4 className="font-display text-sm text-paper/60 uppercase tracking-widest">Προϊόν</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/platforma" className="hover:text-coral">Πλατφόρμα</Link></li>
            <li><Link to="/pos-leitourgei" className="hover:text-coral">Πώς Λειτουργεί</Link></li>
            <li><Link to="/times" className="hover:text-coral">Τιμές</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm text-paper/60 uppercase tracking-widest">Πηγές</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/blog" className="hover:text-coral">Blog</Link></li>
            <li><Link to="/gia-poion" className="hover:text-coral">Για ποιον</Link></li>
            <li><Link to="/epikoinonia" className="hover:text-coral">Επικοινωνία</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm text-paper/60 uppercase tracking-widest">Επικοινωνία</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:hello@skydreamlabs.marketing" className="hover:text-coral">hello@skydreamlabs.marketing</a></li>
            <li><Link to="/epikoinonia" className="hover:text-coral">Κλείσε demo</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="container-editorial py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-paper/50">
          <span>© {new Date().getFullYear()} SkydreamLabs. {t("footer.rights")}</span>
          <span>{locale === "el" ? "Φτιαγμένο με φροντίδα στην Ελλάδα" : "Crafted with care in Greece"}</span>
        </div>
      </div>
    </footer>
  );
}
