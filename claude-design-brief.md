# Claude Design brief — Amioud (amioud)

> Paste this file into a fresh CD session at claude.ai/design.
> Onboarded design system to use: `denistcaci-wellness`

---

## Step 1 — Open the three reference tabs

Before starting the CD session, open these three sites in separate browser tabs and take full-page screenshots:

1. **https://www.diptyqueparis.com/en_eu/**
   - Screenshot: home page (scroll to capture hero + at least one product section)
   - Why: Canonical niche-perfumery editorial layout — serif display headers, warm neutral background, slow scroll rhythm, product as protagonist. Closest tonal match for Amioud's quiet-luxury intent. Borrow: **layout & pace**.

2. **https://www.byredo.com/eu_en/**
   - Screenshot: home page (scroll to capture hero + collection section)
   - Why: Masterclass in monochrome restraint with a single accent color per collection. Large Cormorant-family serif headers, disciplined product photography on neutral background. Validates the palette lock (onyx + grey + cream, one violet accent). Borrow: **palette + typography hierarchy**.

3. **https://www.lelabofragrances.com/**
   - Screenshot: home page + one product detail page (if accessible)
   - Why: Bottle-as-hero on every page. Label-style typography, minimal navigation, editorial rather than e-commerce-heavy feel. Directly precedent for /fragranze/:slug pages. Borrow: **hero framing + label typography + product-first grid**.

**Into the CD chat:**
Drag all three screenshots (home pages minimum, 6 images if you captured details). Tell CD which site each is from and what you want from it. Example:
- "This is Diptyque home. I want the vertical pacing and the slow editorial feel."
- "This is Byredo home. Notice the monochrome — just black, grey, white, plus one gold accent. That's our world."
- "This is Le Labo home and product page. See how the bottle owns the space? That's our product hero strategy."

---

## Step 2 — First prompt

Use this copy verbatim (or adapt tone-freely; the data is load-bearing):

---

**Build a landing page for Amioud, an Italian luxury hair-fragrance brand in Torino.**

**Through-line:** Ethereal editorial minimalism — slow scroll, serif-first typography, black-grey-white monochrome with one disciplined violet accent. The brand adjectives are ETEREO (ethereal) · ONIRICO (dreamlike) · UNICO (unique) · LEGGEREZZA (lightness) · SOGNO (dream) · FLOREALE (floral). Reject all AI-slop patterns: no purple gradients on white, no centered hero with two CTAs, no generic three-card grid. Stay editorial, stay still, stay *quiet*.

**Audience:** Design-conscious, high-income individuals (25–45) in Italy and Europe who buy luxury fragrances for personal distinction; often also buy from Diptyque, Le Labo, or Byredo. They read *Harper's Bazaar Italy* and *AD Italia*. They respect craft over hype.

**Must-include sections:**
1. **Hero:** Scroll-scrubbed bottle turntable (the 50ml Violet Collection bottle rotating 360° as the user scrolls). The violet-marbled cap catches light. Below the pin: "Il primo Extrait de Parfum al mondo per capelli" (The world's first hair-fragrance extrait at 20% concentration). Fallback if turntable is unavailable: slow ken-burns pan on a single hero product shot with serif label entrance.
2. **Brand story intro:** 2–3 short editorial paragraphs on what Amioud is (first extrait de parfum for hair + jewelry for the head + editorial positioning). Tone: evocativa, leggera (evocative, light). Never corporate.
3. **Fragrance preview:** Three staggered cards, one per SKU (Amber Dusk, Bubble Garden, Midnight in Florence). Each card: large Cormorant numeral (01 / 02 / 03), product image, one-line mood descriptor ("Avvolgente e sensuale / Solare e giocosa / Misteriosa e raffinata"), link to /fragranze/:slug.
4. **Quiz CTA:** "Trova la tua fragranza" — find-your-fragrance quiz section. Big serif headline, one primary button (links to internal quiz page). Tone: invitation, not hard-sell.
5. **Retailers CTA:** "I Nostri Rivenditori" — editorial photo of a luxury perfumery shelf (Italian provenance preferred), brief intro, one button linking to /rivenditori. Tone: heritage, craft, selectivity.
6. **Footer:** Legal-heavy but visually quiet. Legal entity: Aura Company S.r.l., VAT IT13285940014. Address: Via Nicola Fabrizi 43, Torino. Jurisdiction: Foro di Torino. Socials: Instagram, Facebook, TikTok (@amioudofficial). Links: /privacy, /cookie-policy. Footer background: cream (#f3eee6). Footer text: onyx (#1a171b). No three-column grid — single column, read as a block.

**Palette (strict lock):**
- Foreground (text, headers, borders): Onyx `#1a171b`
- Background (page, cards, hero backdrop): Cream `#f3eee6`
- Secondary (accents, labels, bottle highlight): Grey `#a7a8aa`
- White (content bg if needed): `#ffffff`
- Accent (one only, the Violet Collection cap color): `#5a3e8c` (violet)
- **No other colors.** No gradients. No duotones (except as a future CD-signature if the builder wants them). Monochrome + one accent.

**Typography (strict lock):**
- **Headlines / Display:** Cormorant Garamond, weight 500. All-caps for section headers (OK), title-case or sentence-case for smaller heads. Never weight 700 — too heavy, breaks the quiet.
- **Pull quotes / emphasis:** Cormorant Garamond, weight 300, italic.
- **Body / UI labels / nav:** Inter variable, weight 400 (body text), 500 (labels / buttons), 600 (nav links, small-caps).
- **Letter-spacing:** Standard for body (Inter 400 = normal). Nav links 2px loose.

**Animation register (editorial, not e-commerce):**
- Scroll-driven motion (scroll scrub on hero bottle, clip-mask reveals on section entrance, parallax on the 'A' monogram watermark).
- Ken-Burns slow pan on product stills (5–8 sec duration).
- No magnetic buttons. No text scramble. No drag galleries. No bounce-in. No Lottie cartoons.
- Reduced-motion aware: all scroll-driven animations degrade to static on `prefers-reduced-motion: reduce`.

**Copy language:** Italian throughout (even on English-locale domains, the Amioud brand voice is Italian). Use proper accents (è, à, ì, ò, ù). Short, poetic sentences alternate with longer editorial passages — never robotic, never all short, never all long. Example rhythms:
- "Il primo Extrait de Parfum al mondo per capelli. Diciotto mesi di ricerca. Laboratori Sabatel a Perugia, maison di Grasse. Ogni flacone è un rituale."
- Never: "Scopri di più", "Acquista ora", "Offerta imperdibile" (generic e-commerce speak).
- Instead: "Entra", "Leggi la storia", "Conosci i Rivenditori", "Il nostro guardaroba olfattivo" (poetry).

**Special note on multi-page scope:**
- This brief covers **home only** (the hero + five sections above). The builder will wire `/fragranze/:slug` product pages, `/shop`, `/rivenditori`, `/visione` (brand story), and legals separately. CD output focuses on home layout, palette, typography, and animation register. The builder uses this as the design system for all downstream pages.

---

## Step 3 — Variation prompt

After you've built home at the pace and tone above, ask CD:

> "Show me three variations of this home page:
> 1. **Maximalist editorial** — add more text, more layering, more tonal shifts within the cream/onyx/grey (lighter greys for bg sections, darker onyx for headers). Keep the violet accent single. Think *Byredo brand book*, not brutalist.
> 2. **Architectural minimal** — reduce to the absolute essentials. Hero bottle. One tagline. Three fragrance cards. Footer. Whitespace-heavy. Serif-only headers, no body text except labels. Quiet to the point of austerity.
> 3. **Atmospheric / sensory** — lean into the violet accent; use it more liberally (not everywhere, but bolder at key moments). Add subtle gradients *only* in hero-adjacent zones (fade from cream to lighter cream top-to-bottom on the hero). Emphasize scent-evocation copy. Imagery foreground."

Pick whichever feels most true to the brand voice, then **export as ZIP**.

---

## Step 4 — Export & resume

1. Pick one variation from Step 3.
2. Export the site as **ZIP**.
3. **Save** to: `clients/amioud/cd-bundle.zip`
4. **Unzip** in place so that `clients/amioud/cd-bundle/` contains the Astro files.
5. Return to chat, type: `resume amioud`

---

## Note on reference screenshots

The reference library for this project was empty at brief-writer stage (library.json has no populated entries). Instead of automated screenshot selection, you are screenshotting these three canonical sites manually during the CD session. This is intentional — the sites are too important to automate, and manual capture lets you study the specific sections that matter (header rhythm on Diptyque, palette restraint on Byredo, product-hero treatment on Le Labo) before you prompt CD.

If you want to save time, open all three tabs *before* pasting the first prompt, and have the screenshots queued up in your image clipboard. CD can ingest them all at once.
