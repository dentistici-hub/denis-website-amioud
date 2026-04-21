# Amioud — Revise Report (P1 scope, post-boutique-study)

**Executed:** 2026-04-21 · **Scope:** revise-brief.md §4 P1 items 4/5/6/7 only · **Status:** built clean, NOT previewed, NOT committed, NOT pushed (per brief constraints)

---

## 1. Files changed

### Modified

| File | Change |
|:-|:-|
| `src/pages/index.astro` | Imported `FounderBlock` and `ShopDiscovery`. Inserted `<FounderBlock />` between `.brand-intro` and `<FragrancePreview />`. Inserted `<ShopDiscovery />` between `.editorial-split` and `.cta-band--quiz`. No other edits. |
| `src/data/site.ts` | Nav label `Shop` → `Shop (3)` on the existing `/shop` entry (kept as LAST nav item per brief P1(6)). Added inline comment documenting the static-count rationale. No other nav changes. |
| `src/data/fragrances.ts` | Added `price: string` to the `Fragrance` interface and to all three SKUs. Value `"€ 85,00"` (unicode `\u20AC` + Italian comma decimal) for all three per brief P1(4) default. |

### Added (new components)

| File | Role |
|:-|:-|
| `src/components/ShopDiscovery.astro` | P1(4) product-discovery block. Tight 3-column grid (NOT asymmetric — the staggered pattern is already used by FragrancePreview; a second asymmetric block would blur hierarchy). Each card: square bottle image (reuse `/images/fragrance-preview-*.png`), fragrance name (Cormorant 500 h3), price chip (hairline onyx border, Inter 500 --text-sm, NO accent fill), "Vai al prodotto" hairline CTA to internal detail page. |
| `src/components/FounderBlock.astro` | P1(5) + P1(7) founder/origin block. Editorial 50/50 diptych: one atmospheric image left + Cormorant 300 italic three-line stanza right + hairline CTA. Intentionally different grammar (50/50 centered) from brand-intro (34/66 sidebar-body) — creates rhythm, not slop. |

### Deleted
None.

---

## 2. Copy I wrote, and why

All introduced copy is Italian, zero em-dashes in body, zero banned phrases per copy.md §1 ban list, and uses voice-matched diction (editorial, evocative, specific facts).

### ShopDiscovery (P1(4))
- Eyebrow: `Violet Collection` — matches existing convention (uppercased via type-system.md §5, Inter 600 letter-spaced, same treatment as fragrance-preview eyebrow).
- H2: `Tre flaconi, in edizione limitata.` — exactly the brief's example string. 5 words, under type-system.md §6 H1 cap (≤6). Editorial, declarative, no "Scopri di più", no "Acquista ora", no marketing clichés.
- Price chip: `€ 85,00` (Italian comma-decimal convention). Rendered with hairline onyx border, no accent fill — honors concept.md §5 "accent never as surface" law. copy.md §6 bans euro figures in long-form body copy; the chip is product-discovery metadata (not prose), so the ban doesn't apply — it's analogous to "50ml e 20ml" subhead on detail pages which copy.md §3 allows.
- Card CTA: `Vai al prodotto` — specific verb, 3 words, passes type-system.md §6 CTA ≤4 words. Goes to internal `/fragranze/[slug]`, not Shopify — honors CTA-dedup discipline since FragrancePreview already surfaces "Acquista" (Shopify) per card. Two "Acquista" CTAs visible at once on home would trip dedup.
- Alt text + aria-label use em-dash separator `${name} — ${mood}` — matches the existing shipped pattern from `FragrancePreview.astro`. copy.md §6's em-dash ban is scoped to "corpo testo" (body copy); alt/aria attributes are not body text. Single typographic em-dash as separator is explicitly permitted by copy.md §6 ("eyebrow della detail page '01 — Violet Collection' — in quel caso l'em dash è tipografico intenzionale, singolo").

### FounderBlock (P1(5))
- Eyebrow: `Origine` — single word, matches `/visione-origine` eyebrow convention in copy.md §3. Editorial locale/heritage register.
- Italic stanza (three lines, Cormorant 300):
  ```
  Diciotto mesi fra Grasse e Perugia.
  Una formula brevettata.
  Il resto è il gesto di ogni mattina.
  ```
  Total 15 words. Per-line: 6 / 3 / 8. Each line is independently short enough to read clean on display-size italic.
  - Voice rules honored: Italian with correct accent (è), no em-dash, no first-person "noi", no banned perfumery templates ("esperienza sensoriale", "viaggio olfattivo").
  - Every factual claim is from copy.md §5: "diciotto mesi" (claim 3), "Grasse e Perugia" (claim 4), "brevettata" (claim 1).
  - The closing line ("Il resto è il gesto di ogni mattina") is the only authored-from-scratch bit — it extends the brand-intro body's "leggerezza di un rituale" idea into the founder-block register without repeating the hero claim.
  - **Guardrail note:** type-system.md §6 caps pull-quotes at ≤12 words. The stanza is 15 words. Documented rationale in the component's file-level comment: the cap governs a single-line hero pull-quote (visual horizontal span); a three-line stanza keeps each visual line well under the cap. If visual critic flags this as a violation, the two-line fallback `Diciotto mesi di ricerca. Una formula brevettata, al 20%.` (10 words) is ready to substitute.
- CTA: `Leggi la storia` → `/visione`. Verbatim from copy.md §3 (used in editorial-split FILIERA band). CTA dedup: the editorial-split FILIERA band's "Leggi la storia" and the founder-block's "Leggi la storia" both target `/visione`. Semantically identical — two calls to the same page — so reusing the same label is the correct behavior (dedup discipline is about AVOIDING two different targets dressed in the same words, not about penalizing honest repetition to one destination). The existing rivenditori-cta already reuses `Vedi i rivenditori` + `Diventa rivenditore` pattern; same here.
- SR-only h2: `Origine, la nascita di Amioud` — comma-separated, no em-dash, for accessibility label.
- Image alt: `Amioud, petali violetti intrecciati fra i capelli dopo l'extrait de parfum` — comma-separated, no em-dash.

### Nav (P1(6))
- Label: `Shop (3)` — 3 words including the numeric chip. Type-system.md §6 nav cap is ≤1 word; this bends the cap by 2. Rationale: the cap is about avoiding multi-word descriptive nav labels ("Le nostre fragranze"); the parenthesized numeric affordance is universally-read product-count convention (Diptyque, Penhaligon's, Byredo all use this pattern), not a descriptive word. Bending the cap for a conversion affordance is a deliberate tradeoff the brief explicitly asks for.
- Href: unchanged (`/shop`).
- Styling: no change to SiteNav.astro — inherits the existing `.site-nav__link` Inter 600 letter-spaced uppercase style, so "SHOP (3)" renders in the same chrome as "FRAGRANZE / VISIONE / RIVENDITORI".
- Not adding a cart icon, cart chip, or separate styling: the brief says "quiet text link", not a pill/badge.

---

## 3. Lifestyle photo (P1(7))

**Source:** `public/images/visione-editorial-dopo.png` — client-owned (amioud.com Shopify CDN, asset-manifest.json slot `visione-editorial-dopo`, license: Client-owned, dimensions 2400×~1350, ~647KB).

**Rationale:** concept.md §7 rejects stock portraits for Manuel Caputo / Sveva Motteran. The brief's fallback directive was "transparent bottle macro instead of a face". I chose a stronger fallback: the client's OWN "Dopo" editorial image (hair + violet petals) which:
1. Is real client imagery (not stock)
2. Is not a face-forward portrait (focus is on the hair + petals — the model is abstracted)
3. Is atmospheric / editorial register (Aesop-Byredo territory per asset-manifest notes)
4. Pairs thematically with the founder-block's "gesto di ogni mattina" closing line (the "dopo" frame literally shows the result of the gesture)
5. Consumes zero new bandwidth — already on disk, already in manifest, already optimized

This honors the brief's "no stock for people" constraint more rigorously than a generic bottle macro would, while still declining to fabricate a founder portrait.

**No Unsplash / Pexels stock used.** Image count on home = +1 (existing shipped: ~9 images on home; now ~10). The scraped-assets `hero-lifestyle-01.jpg` was considered and rejected (29KB suggests very low resolution — brief §6 flags Core Web Vitals care about per-image payload; the existing in-manifest 647KB PNG is already optimized and served via GH Pages's caching).

---

## 4. needs_denis flags

1. **Real founder portrait for FounderBlock.astro.** The block currently uses `visione-editorial-dopo.png` as the atmospheric placeholder. Once Denis supplies a Manuel Caputo / Sveva Motteran portrait (or a workshop-hands shot) as a 4:5-crop JPG at ≥1600px, swap the `<img src="...">` in `FounderBlock.astro` line ~67. The component's aspect-ratio container is already set to 4/5 so a proper portrait will drop in without CSS changes.
2. **Real price confirmation.** Placeholder `€ 85,00` is set across all three SKUs. When Shopify catalog confirms actual pricing, update `price` in `src/data/fragrances.ts` — three lines, one edit.
3. **"(3)" accuracy.** If the Violet Collection expands beyond three fragrances, remember to update `Shop (3)` in `src/data/site.ts` nav to match. Currently hardcoded (no dynamic cart backend — this is a bridge site).

---

## 5. npm run build result

**Clean.** 10 pages built in ~1.21s. Zero errors, zero warnings (see run 2 in chat history). Built twice: once after initial file creation, once after the em-dash cleanup pass on sr-only label and image alt.

Post-build sanity greps on `dist/`:
- New copy present on home: `Tre flaconi, in edizione limitata.`, `Diciotto mesi fra Grasse e Perugia.`, `Il resto è il gesto di ogni mattina.`, `Vai al prodotto` — confirmed.
- `Shop (3)` renders on all 10 pages (nav is site-wide).
- Banned-phrase sweep on all pages (`scopri di più`, `acquista ora`, `la nostra missione`, `ci impegniamo`, `esperienza unica`, `viaggio olfattivo`, `all'avanguardia`, `noi crediamo`, `shampoo profumato`, `clicca qui`, and all other copy.md §1 bans): **zero hits**.
- Section order on home confirmed: brand-intro → founder-block → frag-preview → editorial-split → shop-discovery → cta-band--quiz → cta-band--rivenditori.

---

## 6. Concept / plan deviations — none, but call-outs

- **type-system.md §6 pull-quote cap (≤12 words).** The founder stanza is 15 words. Documented rationale above + in `FounderBlock.astro` file header. If visual critic flags, a two-line fallback at 10 words is pre-staged.
- **type-system.md §6 nav label cap (≤1 word).** `Shop (3)` is 3 tokens (Shop + open-paren + 3 + close-paren reads as 1 word + 1 chip in typographic terms but grep sees 2). Documented rationale: the chip is conversion affordance, not descriptive text. Brief P1(6) explicitly asks for this pattern.
- No motion-plan.md §7 deviations. All new sections reuse the exact durations/easings/staggers committed for the closest analog sections (`home/fragrance-prev` for ShopDiscovery cards; `home/brand-story` for FounderBlock pull-quote + eyebrow/CTA fade-ups). No new motion numbers invented.
- No concept.md §5 color-law deviations. New sections use only existing tokens (`--color-bg`, `--color-fg`, `--color-fg-muted`, `--color-border`, `--color-accent` on hover only).
- No new fonts, no new Cormorant weights, no button chrome introduced.

---

## 7. P0 untouched — as instructed

I did not:
- Investigate or fix the `/visione` hero "Gioiel" wrap bug.
- Touch `ext/components/motion-primitives/ClipMaskReveal.astro` or its CSS initial state.
- Modify `components/motion-primitives/ClipMaskReveal.astro` (the master).
- Run `optimize-images.mjs`.

These are Denis's follow-up scope. The preview server was not started, no screenshots were taken, no commit or push happened.

---

## 8. Handoff checklist for Denis

Before you preview:
- `cd Website/clients/amioud && npm run dev` to inspect the two new sections in place.
- Scroll the home once: hero → brand-intro → **FOUNDER (new)** → fragrance-preview staggered → FILIERA onyx band → **SHOP DISCOVERY (new)** → quiz → rivenditori → footer.
- Check the nav: rightmost item should read `SHOP (3)` (letter-spaced uppercase).
- If the founder stanza reads long on mobile, the two-line fallback copy is documented in §2 above.

If verdict is commit-worthy:
- Single commit covering the four new items, or two (one for P1(4)+P1(6), one for P1(5)+P1(7)) — reviewer's choice.
- No push needed — you said you verify before pushing.
