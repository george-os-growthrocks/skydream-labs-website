import type { Article } from ".";
import { P, H2, H3, UL, OL, LI, Callout, Quote, Strong } from "./_atoms";

export const a2CrmPipeline: Article = {
  slug: "crm-pipeline-taxidiotika-grafeia",
  title: "CRM και Pipeline Πωλήσεων για Ταξιδιωτικά Γραφεία",
  excerpt:
    "Πώς να στήσεις ένα CRM που δουλεύει πραγματικά για ένα boutique ταξιδιωτικό γραφείο: στάδια pipeline, ετικέτες πελατών, αυτοματισμοί, και τι να αποφύγεις.",
  type: "supporting",
  stage: "consideration",
  priority: "P1",
  primaryKeyword: "CRM για μικρά ταξιδιωτικά γραφεία",
  keywords: [
    "CRM για μικρά ταξιδιωτικά γραφεία",
    "καλύτερο CRM για ταξιδιωτικό γραφείο",
    "CRM για boutique ταξιδιωτικά γραφεία",
    "pipeline πωλήσεων ταξιδιωτικού γραφείου",
    "travel advisor CRM",
    "σύστημα διαχείρισης leads ταξιδιωτικού γραφείου",
  ],
  readingTime: 10,
  publishedAt: "2026-01-15",
  content: () => (
    <>
      <P>
        Το CRM είναι το πιο παρεξηγημένο εργαλείο σε ένα ταξιδιωτικό γραφείο. Οι μισοί το βλέπουν σαν "πολυτέλεια για μεγάλες αλυσίδες",
        οι άλλοι μισοί έχουν προσπαθήσει με Excel και HubSpot και το εγκατέλειψαν σε δύο μήνες. Η αλήθεια είναι στη μέση: ένα boutique
        γραφείο χρειάζεται CRM — αλλά όχι το ίδιο CRM με μια SaaS εταιρεία.
      </P>

      <H2 id="what">Τι κάνει διαφορετικό ένα CRM για ταξιδιωτικό γραφείο</H2>
      <P>
        Ένα generic CRM (Salesforce, HubSpot, Pipedrive) είναι φτιαγμένο για B2B κύκλους 60–120 ημερών με σταθερά στάδια:
        Lead → MQL → SQL → Opp → Closed. Ένα ταξιδιωτικό enquiry ζει σε πολύ διαφορετικό ρυθμό:
      </P>
      <UL>
        <LI>Ο πελάτης θέλει απάντηση σε ώρες, όχι σε μέρες.</LI>
        <LI>Η "προσφορά" είναι ένα ολόκληρο itinerary με 5–15 στοιχεία.</LI>
        <LI>Ο κύκλος από enquiry σε booking μπορεί να είναι 3 ημέρες ή 4 μήνες.</LI>
        <LI>Ο ίδιος πελάτης θα ξανακρατήσει σε 6, 12, 24 μήνες — όχι σε 5 χρόνια.</LI>
      </UL>
      <P>
        Το CRM ενός ταξιδιωτικού γραφείου πρέπει να χειρίζεται και τα δύο: γρήγορο pipeline μετατροπής και μακροχρόνια σχέση.
      </P>

      <H2 id="pipeline">Τα 6 στάδια του σωστού pipeline</H2>
      <P>Δουλεύουμε με έξι καθαρά στάδια. Λιγότερα και χάνεις ορατότητα, περισσότερα και μπερδεύεσαι.</P>

      <H3>1. Νέο Enquiry</H3>
      <P>Ό,τι μπαίνει από site form, Instagram, email, WhatsApp, σύσταση. Timestamp και κανάλι είναι υποχρεωτικά.</P>

      <H3>2. Qualified</H3>
      <P>Έχεις τις πληροφορίες που χρειάζεσαι: προορισμός, ημερομηνίες, μέγεθος party, budget εύρος. Αν λείπει κάτι, μένεις σε "Νέο".</P>

      <H3>3. Πρόταση Στάλθηκε</H3>
      <P>Στάλθηκε το itinerary. Ξεκινά ο μετρητής follow-up.</P>

      <H3>4. Σε Διαπραγμάτευση</H3>
      <P>Ο πελάτης απάντησε, ζητά αλλαγές, ρωτά λεπτομέρειες. Ενεργή συζήτηση.</P>

      <H3>5. Κρατήθηκε</H3>
      <P>Deposit ή full payment έλαβε χώρα. Ο πελάτης περνά σε ξεχωριστό workflow: pre-trip.</P>

      <H3>6. Χάθηκε (με λόγο)</H3>
      <P>Χάσατε την κράτηση. <Strong>Πάντα με σημείωση: γιατί.</Strong> Χωρίς αυτό, δεν μπορείς ποτέ να βελτιωθείς.</P>

      <Callout title="Το πιο σημαντικό στάδιο είναι το 'Χάθηκε'.">
        Χωρίς λόγο απώλειας δεν ξέρεις αν χάνεις γιατί είσαι ακριβός, γιατί απάντησες αργά, γιατί έλειπε το κομμάτι που ζητούσαν
        ή γιατί δεν έκανες follow-up. Κάθε lost deal είναι ένα δωρεάν μάθημα — αν το γράψεις.
      </Callout>

      <H2 id="etiketes">Ετικέτες και segmentation που έχουν σημασία</H2>
      <P>
        Οι ετικέτες είναι αυτό που κάνει ένα CRM χρήσιμο. Χωρίς σωστές ετικέτες, έχεις απλά μια αλφαβητική λίστα.
        Οι πιο σημαντικές για ένα ταξιδιωτικό γραφείο:
      </P>
      <UL>
        <LI><Strong>Τύπος ταξιδιώτη:</Strong> honeymooners, οικογένειες, luxury solo, group of friends, culture buffs, adventure.</LI>
        <LI><Strong>Προτιμώμενη εποχή:</Strong> summer, off-season, winter escapes.</LI>
        <LI><Strong>Ιστορικά destinations:</Strong> τι έχει ταξιδέψει ήδη μαζί σου.</LI>
        <LI><Strong>Lifetime value bucket:</Strong> κάτω από 3k, 3–10k, πάνω από 10k.</LI>
        <LI><Strong>Πηγή (source):</Strong> Instagram, referral, Google, walk-in, event.</LI>
      </UL>
      <P>
        Αυτές οι πέντε ετικέτες αρκούν για να στέλνεις εξατομικευμένη επικοινωνία που δεν μοιάζει με newsletter.
      </P>

      <H2 id="automations">Οι 4 βασικοί αυτοματισμοί πάνω στο pipeline</H2>
      <OL>
        <LI><Strong>Auto-assign νέων enquiries:</Strong> κάθε νέο lead πάει αυτόματα στον σωστό travel advisor βάσει προορισμού ή διαθεσιμότητας.</LI>
        <LI><Strong>Stale deal alerts:</Strong> αν κάτι μείνει στο "Πρόταση Στάλθηκε" πάνω από 5 μέρες χωρίς activity, ειδοποίηση.</LI>
        <LI><Strong>Auto follow-up sequence:</Strong> ενεργοποιείται όταν μπει σε "Πρόταση Στάλθηκε". Δες τον <a href="/blog/automated-follow-up-taxidiotika-grafeia" className="text-coral underline">οδηγό follow-up</a>.</LI>
        <LI><Strong>Post-booking handoff:</Strong> κρατήθηκε deal → ξεκινά αυτόματα το onboarding sequence και μπαίνει στο ημερολόγιο pre-trip check-in.</LI>
      </OL>

      <H2 id="excel">Γιατί το Excel δεν αρκεί (και πότε αρκεί)</H2>
      <P>
        Το Excel είναι απίστευτο για ένα μονό άτομο, με λιγότερα από 20 enquiries τον μήνα. Πέρα από αυτό, τρία πράγματα το σπάνε:
      </P>
      <UL>
        <LI>Δεν υπάρχει "timestamp" σε αλλαγές — δεν ξέρεις πότε άλλαξε status ή ποιος το άλλαξε.</LI>
        <LI>Δεν στέλνει reminders. Ξεχνάς follow-ups.</LI>
        <LI>Δεν συνδέεται με email/WhatsApp/site form — κάνεις χειροκίνητη εισαγωγή δεδομένων κάθε μέρα.</LI>
      </UL>
      <P>
        Αν έχεις 2 ή περισσότερα άτομα στο γραφείο, το Excel γίνεται εμπόδιο μέσα σε εβδομάδες.
      </P>

      <H2 id="what-to-avoid">Τι να αποφύγεις όταν διαλέγεις CRM</H2>
      <UL>
        <LI><Strong>Generic B2B CRMs χωρίς customization:</Strong> Salesforce Enterprise είναι υπερβολή. Θα πληρώσεις consultant για 3 μήνες πριν το χρησιμοποιήσεις.</LI>
        <LI><Strong>Tools χωρίς email integration:</Strong> αν πρέπει να αντιγράφεις κάθε email με χειρωνακτικά, θα το εγκαταλείψεις.</LI>
        <LI><Strong>Tools με per-user pricing πάνω από €30/μήνα:</Strong> για γραφείο 6 ατόμων, γίνεται 2.100€/χρόνο — πολύ για την αξία που παίρνεις.</LI>
        <LI><Strong>Tools χωρίς mobile app που δουλεύει:</Strong> ένας travel advisor απαντά σε enquiries από το κινητό. Αν η mobile εμπειρία είναι θάνατος, το ξεχνάς.</LI>
      </UL>

      <Quote cite="Travel advisor, Θεσσαλονίκη">
        Το κρίσιμο δεν είναι τα features. Είναι αν το ανοίγεις κάθε μέρα. Ό,τι δεν ανοίγεις, δεν υπάρχει.
      </Quote>

      <H2 id="next">Επόμενα βήματα</H2>
      <P>
        Ένα CRM είναι το θεμέλιο. Πάνω σε αυτό χτίζονται όλοι οι υπόλοιποι αυτοματισμοί που περιγράφουμε στον
        {" "}<a href="/blog/marketing-automation-taxidiotika-grafeia" className="text-coral underline">οδηγό marketing automation</a> —
        χωρίς αυτό, τίποτα άλλο δεν λειτουργεί.
      </P>
      <P>
        Αν θες να δεις πώς μοιάζει το CRM της SkydreamLabs στημένο για ταξιδιωτικό γραφείο, με τα 6 στάδια, τις ετικέτες και τους
        αυτοματισμούς έτοιμα, <a href="/epikoinonia" className="text-coral underline">κλείσε ένα 30λεπτο demo</a>.
      </P>
    </>
  ),
};
