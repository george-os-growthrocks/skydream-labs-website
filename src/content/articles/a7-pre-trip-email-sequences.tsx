import type { Article } from ".";
import { P, H2, H3, UL, OL, LI, Callout, Quote, Strong } from "./_atoms";

export const a7PreTripEmails: Article = {
  slug: "pre-trip-email-sequences",
  title: "Pre-trip Email Sequences: Αυτοματοποιημένη Επικοινωνία πριν το Ταξίδι",
  excerpt:
    "Πώς να χτίσεις pre-trip sequence που ενθουσιάζει τον πελάτη, μειώνει τα support tickets και ξεχωρίζει το γραφείο σου από κάθε γενικό tour operator.",
  type: "supporting",
  stage: "experience",
  priority: "P3",
  primaryKeyword: "αυτοματοποιημένα email πριν από την αναχώρηση",
  keywords: [
    "αυτοματοποιημένα email πριν από την αναχώρηση",
    "pre trip communication travel",
    "pre-departure emails ταξιδιωτικού γραφείου",
    "travel prep email templates",
    "welcome pre-trip sequence",
  ],
  readingTime: 8,
  publishedAt: "2026-03-19",
  faqs: [
    {
      q: "Πόσα emails πρέπει να έχει ένα pre-trip sequence;",
      a: "5 emails: 30 μέρες πριν (countdown + upsells), 14 μέρες (destination guide), 7 μέρες (packing & practical), 3 μέρες (vouchers & itinerary) και το πρωί της άφιξης (καλή αρχή).",
    },
    {
      q: "Πότε είναι η σωστή στιγμή για upsells;",
      a: "Στο πρώτο email, 30 μέρες πριν την αναχώρηση. Ο πελάτης έχει χρόνο να το σκεφτεί χωρίς να νιώθει πίεση — και όχι στο email των vouchers.",
    },
    {
      q: "Τι open rates να περιμένω;",
      a: "Pre-trip emails έχουν τα υψηλότερα open rates ενός ταξιδιωτικού γραφείου — 60%+ είναι εφικτός στόχος, καθώς ο πελάτης περιμένει την πληροφορία.",
    },
    {
      q: "Πόσο προσωπικά πρέπει να είναι τα emails;",
      a: "Το personalization πάει πέρα από το ‘Γεια σου, [Όνομα]’: αναφορές σε προτιμήσεις από το discovery call, weather forecast στη μέρα άφιξης και reference σε προηγούμενα ταξίδια για επαναλαμβανόμενους πελάτες.",
    },
  ],
  content: () => (
    <>
      <P>
        Ένα καλό ταξίδι ξεκινά πριν την αναχώρηση. Ένα boutique γραφείο δεν πουλάει "πακέτο" —
        πουλάει εμπειρία που ξεκινά τη στιγμή της κράτησης και τελειώνει την ημέρα του anniversary.
        Το pre-trip sequence είναι το πιο υποτιμημένο κομμάτι αυτής της εμπειρίας.
      </P>

      <H2 id="why">Γιατί έχει σημασία</H2>
      <UL>
        <LI>Ο πελάτης νιώθει "με το χέρι". Μειώνεται το άγχος αναχώρησης.</LI>
        <LI>Λιγότερα last-minute τηλέφωνα ("τι ώρα είναι η μεταφορά;").</LI>
        <LI>Χτίζεται anticipation — που είναι μεγάλο κομμάτι της συνολικής χαράς του ταξιδιού.</LI>
        <LI>
          Δίνεται ευκαιρία για upsells (private tours, restaurant reservations, upgrades) στη σωστή
          στιγμή.
        </LI>
      </UL>

      <H2 id="sequence">Το 5-email pre-trip sequence</H2>

      <H3>Email 1 — 30 ημέρες πριν: "Ξεκινά η αντίστροφη μέτρηση"</H3>
      <P>
        Ενημέρωση για ό,τι θα ακολουθήσει, timeline των υπόλοιπων επικοινωνιών, checklist
        προετοιμασίας. Επίσης το slot για upsells: "θέλετε να προσθέσουμε ένα private cooking
        class;".
      </P>

      <H3>Email 2 — 14 ημέρες πριν: Destination guide</H3>
      <P>
        Ένα σωστά επιμελημένο mini-guide για τον προορισμό: τι να δει, τι να αποφύγει, ένα-δύο
        restaurants που δεν είναι στους τουριστικούς οδηγούς. Έχει τεράστια αξία και επιβεβαιώνει
        την επιλογή του γραφείου σου.
      </P>

      <H3>Email 3 — 7 ημέρες πριν: Packing & practical</H3>
      <P>
        Packing checklist προσαρμοσμένο στον προορισμό και εποχή. Πληροφορίες για weather, dress
        code σε συγκεκριμένα venues, currency, tipping culture. Μικρή πινελιά αναγνωσιμότητας: "μπες
        στην dress code κουλτούρα από την πρώτη μέρα".
      </P>

      <H3>Email 4 — 3 ημέρες πριν: Vouchers & itinerary</H3>
      <P>
        Όλα τα vouchers σε ένα PDF, ημέρα-προς-ημέρα itinerary σε mobile-friendly format, contact
        details για emergencies. Ξεκάθαρος τίτλος: "Όλα όσα χρειάζεσαι για το ταξίδι — σώσε αυτό το
        email".
      </P>

      <H3>Email 5 — Ημέρα άφιξης, το πρωί: "Καλή αρχή"</H3>
      <P>
        Ένα μικρό, θερμό, προσωπικό μήνυμα. "Καλή σας άφιξη. Στη [πόλη] θα σας υποδεχτεί ο [όνομα].
        Ό,τι χρειαστείτε, εδώ είμαι." Κανένα CTA, κανένα upsell. Μόνο ανθρωπιά.
      </P>

      <Callout title="Ο τόνος αλλάζει από κάθε email στο επόμενο.">
        Το πρώτο είναι λειτουργικό, το δεύτερο εκπαιδευτικό, το τρίτο πρακτικό, το τέταρτο
        επιχειρησιακό, το πέμπτο συναισθηματικό. Αυτή η φυσική εξέλιξη είναι που δίνει την αίσθηση
        φροντίδας.
      </Callout>

      <H2 id="upsells">Upsells που δουλεύουν</H2>
      <UL>
        <LI>
          <Strong>Private transfers</Strong> αντί για shared shuttles.
        </LI>
        <LI>
          <Strong>Restaurant reservations</Strong> σε δύσκολα spots (γραφείο-only πρόσβαση).
        </LI>
        <LI>
          <Strong>Photographer session</Strong> για honeymoons και ανιξίες.
        </LI>
        <LI>
          <Strong>Room upgrades</Strong> τελευταία στιγμή με προνομιακή τιμή.
        </LI>
      </UL>
      <P>
        Ο σωστός χρόνος για upsell είναι το Email 1 (30 μέρες πριν), όχι το Email 4. Ο πελάτης έχει
        χρόνο να το σκεφτεί χωρίς να νιώθει ότι πιέζεται.
      </P>

      <H2 id="personalization">Personalization που έχει σημασία</H2>
      <P>Δεν είναι το "Γεια σου, [Όνομα]". Είναι:</P>
      <UL>
        <LI>
          Αναφορά σε συγκεκριμένες προτιμήσεις που είπε στο discovery ("ξέρω ότι είσαι fan του
          seafood — δες αυτό το restaurant").
        </LI>
        <LI>Πρόγνωση καιρού για τη μέρα άφιξης, στο Email 3.</LI>
        <LI>Αν είναι επαναλαμβανόμενος πελάτης, αναφορά στο προηγούμενο ταξίδι.</LI>
      </UL>

      <Quote cite="Πελάτης, από review">
        Δεν πίστευα πόσο καλά προετοιμασμένη ένιωσα. Ένιωσα ότι με ξέρετε πραγματικά.
      </Quote>

      <H2 id="numbers">Τι μετράς</H2>
      <UL>
        <LI>
          <Strong>Email open rate:</Strong> στόχος 60%+ (τα πιο ανοιγμένα emails ενός ταξιδιωτικού
          γραφείου).
        </LI>
        <LI>
          <Strong>Upsell conversion από Email 1:</Strong> στόχος 15–25%.
        </LI>
        <LI>
          <Strong>Support tickets πριν την αναχώρηση:</Strong> στόχος -60% μετά την εφαρμογή του
          sequence.
        </LI>
        <LI>
          <Strong>Post-trip NPS:</Strong> τα γραφεία με pre-trip sequences έχουν σταθερά υψηλότερο
          NPS.
        </LI>
      </UL>

      <H2 id="next">Επόμενα βήματα</H2>
      <P>
        Μαζί με το{" "}
        <a href="/blog/onboarding-pelaton-taxidiotika-grafeia" className="text-coral underline">
          onboarding sequence
        </a>{" "}
        και το{" "}
        <a href="/blog/post-trip-lifecycle-automation" className="text-coral underline">
          post-trip lifecycle
        </a>
        , το pre-trip κλείνει τον πλήρη κύκλο της εμπειρίας πελάτη.{" "}
        <a href="/epikoinonia" className="text-coral underline">
          Κλείσε demo
        </a>{" "}
        να δεις πώς τρέχει όλο αυτόματα στην SkydreamLabs.
      </P>
    </>
  ),
};
