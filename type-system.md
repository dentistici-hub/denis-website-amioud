# Type System — Amioud

Retrofit-locked by researcher + CD Variation A. Do not re-pick fonts unless
Fontsource availability breaks. Fontsource verified at write time (2026-04-21):
both packages present, weight/italic coverage confirmed.

---

## 1. Font pair

```
Display:
  Family: Cormorant Garamond
  Source: @fontsource/cormorant-garamond ^5.2.5
  Weights used: 500 (headlines, fragrance numerals, CTA editorial headlines)
                300 italic (pull-quotes ONLY)
  Why: High-contrast old-style serif — the uniform of niche perfumery
    (Byredo, Diptyque). Concept voice is "luxury display — alto contrasto
    Didone/Garamond, denso ma quieto, mai peso 700". Weight 500 hits that
    register without tipping into the bold editorial of weight 600-700.
    Italic 300 is reserved for one purpose only: the "Un profumo che non
    si indossa, si respira" pull-quote — the through-line itself.

Body:
  Family: Inter (variable)
  Source: @fontsource-variable/inter ^5.2.7
  Weights used: 400 (body), 500 (TextLink CTAs), 600 (nav labels, eyebrows)
  Why: Neutral grotesque counterpart. Gets out of Cormorant's way, carries
    UI micro-copy and product metadata without competing for voice. Same
    pairing strategy as Aesop and Le Labo. Variable subsetting keeps payload
    tight across three weights.
```

Pair contrast check: serif + sans (high-contrast vs. neutral grotesque) —
contrast principle satisfied. Two families total. No third.

---

## 2. Size scale (fluid clamp, ratio 1.333 "perfect fourth")

All sizes fluid. Onyx `#1a171b` on cream backgrounds. Never pure black on pure
white. One extreme at the top (hero display ≥ 8rem max) + one extreme at the
bottom (xs = 0.7rem fixed) — anti-slop rule satisfied.

```css
/* Display — the extreme */
--text-hero:        clamp(3.5rem, 9vw, 8.5rem);   /* hero claim "Il primo Extrait…" — Cormorant 500 */
--text-hero-italic: clamp(2.5rem, 5.5vw, 4.5rem); /* pull-quote italic 300 "Un profumo che…" */

/* Editorial ramp */
--text-h1:          clamp(2.25rem, 5vw, 3.75rem); /* section headlines — "Da Grasse a Perugia", "Trova la tua fragranza" */
--text-h2:          clamp(1.75rem, 3.2vw, 2.5rem);/* onyx-band + quiz heads, fragrance detail hero */
--text-numeral:     clamp(3.5rem, 7vw, 6rem);     /* Cormorant 500 numerals 01/02/03, line-height 0.85 */
--text-h3:          clamp(1.25rem, 1.75vw, 1.5rem);/* fragrance card titles "Amber Dusk" */
--text-h4:          clamp(1rem, 1.25vw, 1.125rem);/* related-fragrances names, mini heads */

/* Body ramp */
--text-lead:        clamp(1.05rem, 1.15vw, 1.2rem); /* hero sub-paragraph */
--text-body:        clamp(0.95rem, 1vw, 1.0625rem); /* paragraphs — brand story, notes narrative */
--text-sm:          clamp(0.8125rem, 0.9vw, 0.9375rem); /* mood descriptors, captions, italic phrases */

/* Label ramp */
--text-label:       clamp(0.75rem, 0.82vw, 0.8125rem); /* eyebrows "La Casa", "Le Note", "Violet Collection · 03" */
--text-nav:         0.8125rem;  /* nav links — fixed, consistent header presence */
--text-xs:          0.7rem;     /* fine print, footer legal, VAT — the other extreme, fixed */
```

Ratio: 1.333 perfect-fourth ladder. Hero is an intentional break (jumps beyond
ratio for the signature moment) — editorial convention.

---

## 3. Weight law

```
Cormorant Garamond — WEIGHT 500 ONLY (display, regular):
  - Hero claim "Il primo Extrait de Parfum al mondo per capelli."
  - Section headlines (H1/H2) on home, /visione, /fragranze/*
  - Fragrance card titles (Amber Dusk, Bubble Garden, Midnight in Florence)
  - Numerals 01/02/03 in the fragrance-preview staggered section
  - Fragrance detail hero ("Midnight in Florence.")
  - Editorial price display ("€ 48,90 — 50ml")

Cormorant Garamond — WEIGHT 300 ITALIC (rarity weapon):
  - Pull-quote: "Un profumo che non si indossa, si respira." (brand story)
  - Notes-as-poem verses on /fragranze/:slug (one per SKU, detail page only)
  - Fragrance mood descriptors ("Avvolgente e sensuale.", "Solare e giocosa.",
    "Misteriosa e raffinata.") — at --text-sm, italic 300
  Used ≤ 3 times per page. If italic appears more than that, demote to body.

Cormorant — FORBIDDEN WEIGHTS:
  - 400 (too anemic against body Inter 400 — loses the display contrast)
  - 600, 700 (break the quiet cadence — concept section 3 explicitly bans 700)
  - Italic 500+ (never — italic is always 300)

Inter 400 (body):
  - Body paragraphs (brand story, notes narrative, quiz copy)
  - Fine print (footer, legal, cookie notice)

Inter 500 (UI emphasis):
  - CTA labels — hairline underline TextLinks ("Leggi la storia",
    "Inizia il quiz", "Dove trovarci", "Aggiungi al carrello",
    "Porta [nome] con te", "Leggi la visione")
  - Active/current nav state

Inter 600 (loud-whispers only):
  - Nav labels (home, fragranze, visione, rivenditori, shop)
  - Eyebrows / kicker labels ("La Casa", "Le Note", "Violet Collection · 03",
    "Grasse, 1792", "Continua")

Italic usage law:
  - Italic = Cormorant 300 only. Never italic Inter.
  - Never italic for inline emphasis in body — use weight 500 Inter instead.
  - Italic is a pull-quote instrument, not a texture.
```

---

## 4. Letter-spacing & leading

Tight leading on display (serif breathes visually already), looser on body
(Italian orthography with accents needs vertical room).

```css
--text-hero:        letter-spacing: -0.02em;  line-height: 0.95;
--text-hero-italic: letter-spacing: -0.005em; line-height: 1.15;  /* italic breathes more */
--text-h1:          letter-spacing: -0.015em; line-height: 1.02;
--text-h2:          letter-spacing: -0.01em;  line-height: 1.08;
--text-numeral:     letter-spacing: -0.025em; line-height: 0.85;  /* per CD Variation A */
--text-h3:          letter-spacing: -0.005em; line-height: 1.15;
--text-h4:          letter-spacing: normal;   line-height: 1.25;

--text-lead:        letter-spacing: normal;   line-height: 1.45;
--text-body:        letter-spacing: 0;        line-height: 1.6;   /* Italian accents */
--text-sm:          letter-spacing: 0;        line-height: 1.5;

--text-label:       letter-spacing: 0.14em;   line-height: 1.2;   text-transform: uppercase;
--text-nav:         letter-spacing: 0.12em;   line-height: 1;     text-transform: uppercase;
--text-xs:          letter-spacing: 0.08em;   line-height: 1.4;
```

Nav specifically: Inter 600, 0.12em tracking, uppercase per Variation A brief
("Inter 600 with 2px letter-spacing on nav labels/eyebrows"). 0.12em at
0.8125rem = ~1.56px — close enough; we stay at 0.12em to hold proportionality
when the scale flexes. Eyebrows also 0.14em for the "small-caps loose-tracked"
editorial feel.

---

## 5. Case rules

```
UPPERCASE (letter-spaced Inter 600):
  - Eyebrows / kicker labels: "LA CASA", "LE NOTE", "CONTINUA", "ANCHE —"
  - Section tags: "VIOLET COLLECTION · 03", "GRASSE, 1792"
  - Nav labels: "HOME", "FRAGRANZE", "VISIONE", "RIVENDITORI", "SHOP"
  - Footer legal headers: "CONTATTI", "SEDE LEGALE", "SOCIAL"
  - Brand adjective marquee on /visione: "ETEREO · ONIRICO · UNICO ·
    LEGGEREZZA · SOGNO · FLOREALE"

Sentence case (the dominant case — Italian editorial standard):
  - All headlines in Cormorant
  - All body paragraphs
  - All TextLink CTAs ("Leggi la storia", "Inizia il quiz", "Dove trovarci",
    "Aggiungi al carrello", "Porta Midnight con te", "Leggi la visione")
  - Fragrance names as they appear in running text (BUT fragrance display
    names preserve their proprietary capitalization: "Amber Dusk",
    "Bubble Garden", "Midnight in Florence")

Title Case:
  - Fragrance proper names ONLY (trademark convention): "Amber Dusk",
    "Bubble Garden", "Midnight in Florence"
  - Nowhere else. Never on headlines, never on section heads.

All-caps buttons / CTA chrome:
  - Never. Variation A is hairline-underline only — no button chrome.
```

---

## 6. Copy length guardrails (Builder grep gate)

Italian copy. Words counted on whole-word basis. Builder rejects drafts that
breach these caps.

```
Hero headline (Cormorant 500, 7-9vw):
  ≤ 10 words   (current: "Il primo Extrait de Parfum al mondo per capelli." = 9 words ✓)

Hero sub-paragraph (Inter 400 lead):
  ≤ 18 words   (current: "Violet Collection — tre fragranze, tre storie, una
                concentrazione al 20%." = 11 words ✓)

Section headline (H1, e.g. "Da Grasse a Perugia.", "Trova la tua fragranza."):
  ≤ 6 words

Section sub-headline / detail hero tagline:
  ≤ 8 words

Fragrance card headline (H3, name):
  ≤ 4 words    (proper names: "Amber Dusk" = 2, "Midnight in Florence" = 3 ✓)

Fragrance mood descriptor (italic 300 --text-sm):
  ≤ 4 words    (current: "Avvolgente e sensuale." = 3 ✓)

Pull-quote (italic 300 display):
  ≤ 12 words   (current: "Un profumo che non si indossa, si respira." = 8 ✓)

Section intro paragraph (Inter 400 body):
  ≤ 45 words per paragraph, ≤ 2 paragraphs per section intro

Body paragraph (brand story, detail story):
  ≤ 55 words per paragraph, ≤ 3 paragraphs per continuous block

Notes narrative caption (detail page, Inter 400 --text-sm):
  ≤ 12 words   (current: "Apertura — i primi tre minuti." = 6 ✓)

CTA label (TextLink, Inter 500):
  ≤ 4 words    (current: "Leggi la storia" = 3, "Aggiungi al carrello" = 3 ✓)

Eyebrow / kicker (Inter 600 uppercase):
  ≤ 3 words    (current: "La Casa" = 2, "Violet Collection · 03" = 3 ✓)

Nav label (Inter 600 uppercase):
  ≤ 1 word     (single word only — "Fragranze", not "Le nostre fragranze")

Footer legal line (Inter 400 --text-xs):
  ≤ 20 words per line
```

Italian orthography rule: accents MUST be correct (è à ì ò ù í ú). Builder
grep gate also rejects em-dash (—) in body copy per Denis's standing email/copy
rule; em-dash is allowed ONLY inside section dividers ("Da Grasse a Perugia.")
and pull-quotes (never in prose paragraphs).

---

## 7. Forbidden fonts (for this concept)

```
- Inter for display (body use only — nav/CTA/UI fine, headlines NEVER)
- Playfair Display — 2015 wedding-blog slop indicator; Cormorant is the
  contemporary-luxury replacement
- Fraunces — too editorial-warm with its SOFT axis engaged; would compete
  with Cormorant's quiet. Also: Denis just shipped Fraunces on CHIARA —
  diversity across clients matters
- Didot / Bodoni — too sharp / too Vogue-cover; breaks the ETEREO softness
- Montserrat — fragrance brand ≠ startup deck
- DM Serif Display — thick high-contrast serif, breaks "mai peso 700" rule
- EB Garamond — too bookish, not editorial enough for a 2026 niche brand
- Any script / handwritten face — the brand is artisanal not personal
- Cormorant Infant / Cormorant Upright / Cormorant SC — we commit to the
  Garamond cut, do not substitute siblings
- Google Fonts CDN anything — GDPR violation. Self-host via Fontsource only.
```

---

## 8. Do-not-substitute rule

The builder MUST NOT swap Cormorant Garamond for a "similar" serif (Cormorant
Infant, EB Garamond, Playfair) even if Fontsource fails at install time.
Halt and flag to Denis instead. The pairing is load-bearing — it carries the
"Byredo-not-Sephora" positioning.

Same for Inter: swapping to "DM Sans or Manrope" is forbidden. Inter's
geometric neutrality is specifically what lets Cormorant sing. DM Sans's
humanist warmth would crowd the serif; Manrope's rounded terminals break the
clinical / Sabatel-laboratory undertone the brand needs.

If Fontsource install fails → halt + report. Never fall back to Google CDN.

---

## 9. Preload strategy (builder hint)

Preload only these two files in `BaseLayout.astro` to keep LCP fast:

```html
<link rel="preload" href="/fonts/cormorant-garamond-latin-500-normal.woff2"
      as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter-latin-wght-normal.woff2"
      as="font" type="font/woff2" crossorigin>
```

- Cormorant 500 normal (hero appears within first viewport on every page).
- Inter variable wght axis (covers 400/500/600 body+UI+nav in one file).

Italic 300 Cormorant and 300-italic-file: do NOT preload. It appears below
fold on home (pull-quote in brand-story-intro) and is acceptable on second
paint.

Subset: `latin` only (Italian copy requires latin-ext for nothing in current
corpus — è à ì ò ù í ú are all in latin basic). If copy later introduces
Œ/œ or ß, switch to `latin-ext`.

---

## 10. Tokens for builder

Put these in `src/styles/tokens.css`:

```css
:root {
  --font-display: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  --font-body: "Inter Variable", "Inter", system-ui, -apple-system, sans-serif;

  /* Size scale — see section 2 */
  --text-hero:        clamp(3.5rem, 9vw, 8.5rem);
  --text-hero-italic: clamp(2.5rem, 5.5vw, 4.5rem);
  --text-h1:          clamp(2.25rem, 5vw, 3.75rem);
  --text-h2:          clamp(1.75rem, 3.2vw, 2.5rem);
  --text-numeral:     clamp(3.5rem, 7vw, 6rem);
  --text-h3:          clamp(1.25rem, 1.75vw, 1.5rem);
  --text-h4:          clamp(1rem, 1.25vw, 1.125rem);
  --text-lead:        clamp(1.05rem, 1.15vw, 1.2rem);
  --text-body:        clamp(0.95rem, 1vw, 1.0625rem);
  --text-sm:          clamp(0.8125rem, 0.9vw, 0.9375rem);
  --text-label:       clamp(0.75rem, 0.82vw, 0.8125rem);
  --text-nav:         0.8125rem;
  --text-xs:          0.7rem;

  /* Weights */
  --fw-display:        500;
  --fw-display-italic: 300;
  --fw-body:           400;
  --fw-ui:             500;
  --fw-label:          600;
}
```

Builder: `package.json` deps to add:

```json
"@fontsource/cormorant-garamond": "^5.2.5",
"@fontsource-variable/inter": "^5.2.7"
```

Import in `BaseLayout.astro`:

```js
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/300-italic.css";
import "@fontsource-variable/inter";
```
