import type { Article } from ".";
import { P, H2, H3, UL, OL, LI, Callout, Quote, Strong } from "./_atoms";

export const a6OnboardingPelaton: Article = {
  slug: "onboarding-pelaton-taxidiotika-grafeia",
  title: "Αυτοματοποιημένο Onboarding Πελατών για Ταξιδιωτικά Γραφεία",
  excerpt:
    "Πώς να χτίσεις welcome sequence που μειώνει το χάος μετά την κράτηση, δίνει καθαρότητα στον πελάτη και σου γλιτώνει ώρες support.",
  type: "supporting",
  stage: "experience",
  priority: "P3",
  primaryKeyword: "αυτοματοποίηση onboarding πελατών ταξιδιωτικού γραφείου",
  keywords: [
    "αυτοματοποίηση onboarding πελατών ταξιδιωτικού γραφείου",
    "welcome sequence ταξιδιωτικού γραφείου",
    "πληρωμή κράτησης email templates",
    "customer onboarding travel agency",
    "post-booking automation",
  ],
  readingTime: 8,
  publishedAt: "2026-03-05",
  content: () => (
    <>
      <P>
        Το booking κλείστηκε. Ο πελάτης είναι ευχαριστημένος. Και μετά αρχίζει το χάος: "πότε θα έρθει το voucher;", "τι έγγραφα χρειάζομαι;",
        "μπορώ να αλλάξω ημερομηνία;". Ένα σωστό onboarding sequence μειώνει αυτά τα emails κατά 70% — και ο πελάτης νιώθει πιο σίγουρος.
      </P>

      <H2 id="why">Γιατί υπάρχει "post-booking anxiety"</H2>
      <P>
        Ο πελάτης μόλις έδωσε προκαταβολή. Είναι το πιο ευάλωτο σημείο του ταξιδιού. Έχει buyer's remorse. Ρωτά τους φίλους του, ψάχνει reviews.
        Ένα καθαρό, γρήγορο, θερμό onboarding δείχνει "είσαι σε καλά χέρια" και σβήνει τις αμφιβολίες.
      </P>

      <H2 id="sequence">Το 4-email onboarding sequence</H2>

      <H3>Email 1 — 0 ώρες: Επιβεβαίωση + welcome</H3>
      <P>
        Στέλνεται αυτόματα με το που πέφτει το deposit. Περιέχει:
      </P>
      <UL>
        <LI>Ξεκάθαρη επιβεβαίωση της κράτησης με reference number.</LI>
        <LI>Επόμενα βήματα σε timeline (πότε θα έρθει τι).</LI>
        <LI>Direct contact ενός travel advisor — όνομα, τηλέφωνο, ωράριο.</LI>
        <LI>Ένα προσωπικό μήνυμα ("είμαστε ενθουσιασμένοι που θα σε στείλουμε στη [προορισμός]").</LI>
      </UL>

      <H3>Email 2 — Ημέρα +1: Documents & checklist</H3>
      <P>
        Λίστα με ό,τι πρέπει να ετοιμάσει ο πελάτης: διαβατήριο (ημερομηνία λήξης!), ασφάλιση, visa αν χρειάζεται.
        Downloadable PDF checklist. Πάντα PDF — δεν χάνεται σε emails.
      </P>

      <H3>Email 3 — Ημέρα +7: "Πληρώστε το υπόλοιπο άνετα"</H3>
      <P>
        Αν έχεις structure με deposit + balance, εδώ ενημερώνεις για τις επιλογές: full payment, δόσεις, εναλλακτικά. Χωρίς πίεση.
      </P>

      <H3>Email 4 — 30 μέρες πριν αναχώρηση: Handoff</H3>
      <P>
        Ο πελάτης περνά από onboarding sequence σε pre-trip sequence (δες <a href="/blog/pre-trip-email-sequences" className="text-coral underline">pre-trip emails</a>).
        Ξεκάθαρη μετάβαση: "από εδώ και πέρα θα σας στέλνουμε καθημερινές λεπτομέρειες — μείνετε συντονισμένοι".
      </P>

      <Callout title="Το magic number είναι 4 emails, όχι 10.">
        Παρα-πληροφορία = τόσο χειρότερα από καθόλου πληροφορία. Στέλνεις 4 emails, καθένα με ένα καθαρό σκοπό, και ο πελάτης αισθάνεται φροντισμένος.
      </Callout>

      <H2 id="advisors">Πώς βοηθά τους advisors</H2>
      <UL>
        <LI>Απαλλαγή από τα επαναλαμβανόμενα "πότε θα μου στείλετε το X".</LI>
        <LI>Λιγότερα λάθη: ο πελάτης έχει τα δικαιολογητικά έγκαιρα.</LI>
        <LI>Σαφή expectations: όλοι ξέρουν ποιος κάνει τι και πότε.</LI>
      </UL>

      <H2 id="metrics">Τι να μετρήσεις</H2>
      <UL>
        <LI><Strong>Support tickets/booking:</Strong> στόχος -50% μετά την εφαρμογή του sequence.</LI>
        <LI><Strong>Document completion rate:</Strong> % πελατών που στέλνουν έγκαιρα όσα ζητήθηκαν. Στόχος 90%+.</LI>
        <LI><Strong>NPS στην ημέρα +7:</Strong> γρήγορη μέτρηση αν το onboarding δουλεύει.</LI>
      </UL>

      <Quote cite="Travel advisor, Ναύπλιο">
        Νόμιζα ότι θα ενοχλήσει. Οι πελάτες μας ευχαριστούν για την οργάνωση. Ένας μου είπε: "νιώθω ότι είμαι σε private banking, όχι σε ταξιδιωτικό γραφείο".
      </Quote>

      <H2 id="next">Επόμενα βήματα</H2>
      <P>
        Το onboarding sequence είναι το φυσικό γεφύρι μεταξύ κράτησης και εμπειρίας. Στημένο μία φορά, δουλεύει για κάθε booking.
        Δες <a href="/platforma" className="text-coral underline">πώς το σετάρουμε στην πλατφόρμα</a> ή <a href="/epikoinonia" className="text-coral underline">κλείσε demo</a>.
      </P>
    </>
  ),
};
