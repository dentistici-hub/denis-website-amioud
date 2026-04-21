# Amioud — Revise Brief (v1 post-publish study)

**Written:** 2026-04-21 · **Status:** proposal, no live changes yet · **Reference set:** `boutique-inspiration/` (8 refs, 2 usable refs after filtering)

---

## 1. Premise

The live site at `https://dentistici-hub.github.io/denis-website-amioud/` is editorially strong but sits in the middle of the luxury-niche peer set. The gap vs Diptyque / Penhaligon's / Byredo is **conversion structure + editorial depth**, not aesthetic. Amioud's Cormorant display, asymmetric fragrance stagger, and onyx FILIERA band already out-compete most of the peer set on distinctiveness. Where it loses ground is:

- Product discovery grammar (no price chips, no add-to-bag on home, no collection carousel)
- Brand storytelling depth (no founder block, no press, no heritage editorial)
- Image register (all packshot-on-cream + one lifestyle — too sterile for the peer shelf)

A real bug also surfaced during the study — see §2(A).

## 2. Findings

### What the references do that Amioud doesn't

| Ref | Move worth borrowing | Already in Amioud? |
|:--|:--|:--|
| Diptyque | "Best sellers" carousel w/ visible prices + tabbed filters ("Set All / Fragrances / Home / Bath & Body") below the hero | No |
| Diptyque | Centered italic section titles ("Breathing poetry into space", "Sustainable Inspiration") with warm lifestyle photography | No — we have onyx band only |
| Penhaligon's | "Most Loved" 5-up product row with prices + crown/icon hooks | No — we have 3 editorial cards |
| Penhaligon's | "BOLD NOTES. BOLDER ATTITUDE." oversized pull-quote with atmospheric photo next to it (blue balls/balloons motif) | Partial — we have one pull-quote |
| Penhaligon's | "The Perfect Gift" editorial block with contextual image + short CTA (not a button) | No |
| Penhaligon's | "Popular Stories to Discover" 3-up editorial grid (brand history, ritual guide, manifesto) | No |
| Byredo | Single wordmark dominating hero as graphic, not wordmark-as-header | No — we use product bottles |
| Byredo | 5-col footer with Customer Services / Legal / Exclusive Services / Legal / Policies | Close — ours is 4-col |
| Diptyque & Penhaligon's | Clear cart affordance + visible product count in top-right | No — quiet nav, no cart pill |

Byredo and Diptyque both have large translucent-image hero compositions; Amioud's hero ghost-bottles behind the headline is similar in spirit — keep.

### What Amioud does better than most of the peer set

Keep these — they are the brand's signature:

- **Oversized Cormorant h1 at 115-130px**. Only Penhaligon's comes close, and they're at 38px. This is Amioud's loudest lever.
- **Asymmetric fragrance card stagger** (offsets `1.5/6.25, 7.5/1.5, 3/5 rem`). Editorial-magazine, not e-commerce-grid. Distinctive on first scroll.
- **Onyx FILIERA band**. A real chromatic reset between cream sections — Diptyque does wood, Byredo does gold. Onyx + "Da Grasse a Perugia" is the Italian equivalent.
- **Italian copy with proper voice**. "Profumare i capelli con la densità di un extrait, la leggerezza di un rituale." — better than every competitor's English voice in its own language.
- **No button chrome on hero CTAs** — bottle-is-CTA is confident. Diptyque falls back to "Add to bag" pills; Amioud doesn't. Keep.

## 3. Real bugs found (not stylistic)

### (A) /visione page — title wrapping cut mid-word

`boutique-inspiration/amioud-visione/home.jpg` shows the hero reading:

```
VISIONE
Gioiel
della
testa.

Un profumo che
non si indossa, si
respira.
```

"Gioiel" is cut mid-word — the full word is "Gioielleria". Either the container has a smaller max-width on /visione than on / home, or the letter-spacing has broken the word rendering, or there's a CSS override. Needs investigation of `src/pages/visione.astro` and its hero section.

**Impact:** brand name partially unreadable on the /visione entry point.
**Confidence:** high — this is a full-page screenshot, no scroll fallback can explain it.

### (B) Non-scroll paint (diagnosed this turn, see chat)

`ClipMaskReveal.astro` CSS sets `clip-path: inset(100% 0 0 0)` as the initial state. ScrollTrigger only fires on user scroll, so below-fold sections stay invisible to:
- Screenshot tools (the critic's own `preview_screenshot`, OG image generators, crawlers' visual snapshots)
- Users arriving at `#hash` deep-links above the fold (section entering from *below* never fires)
- Search engines evaluating first-paint Lighthouse metrics

**Impact:** Explains why the previous agent saw a "broken" site. Real users who scroll don't hit this. But it degrades every automated render of the site.
**Confidence:** reproduced with `tools/screenshot-refs/diag-noscroll.mjs` vs `diag.mjs`.
**Fix direction:** remove aggressive clip-path from CSS default; have JS (`gsap.set`) apply the clipped state, then ScrollTrigger animates open. Content stays visible if JS fails or never scrolls.

## 4. Proposed revisions — prioritized

### P0 — real bugs (do before `promote amioud`)

1. **Fix /visione hero wrap.** Inspect `src/pages/visione.astro`, find the h1 container, confirm why "Gioielleria" is breaking. Likely `max-width: 36ch` or similar hitting harder on this page than expected. Add a visual regression check.
2. **Harden ClipMaskReveal against no-scroll paint.** Move initial clipped state from CSS to `gsap.set()` in `ext/components/motion-primitives/ClipMaskReveal.astro`. Content visible if JS fails or no scroll ever happens. Keep the on-scroll reveal for real users.
3. **Repeat this fix on every starter that uses ClipMaskReveal**, not just amioud — `components/motion-primitives/ClipMaskReveal.astro` is the master. Patch there so future client builds don't inherit the bug.

### P1 — conversion + completeness (before `promote`, after P0)

4. **Add a "Shop Amioud" home section** between the FILIERA onyx band and the quiz CTA. Three product cards: square bottle photo + name + price ("€85" or "Sold out") + "Aggiungi" or "Vai al dettaglio" hairline CTA. Borrow Penhaligon's "Most Loved" rhythm, keep Amioud's typography voice. This is the biggest conversion gap vs peers.
5. **Add a founder / origin block.** One Cormorant italic pull-quote + one portrait or workshop photo + one "Leggi la storia" hairline link. Drops in after the brand-intro section. Diptyque uses "Breathing poetry into space"; Penhaligon's uses the "A Brief History" editorial grid. Amioud has the material (2025 launch, Torino, filiera Grasse-Perugia) — just needs the block.
6. **Nav cart affordance.** Right side of nav gets a quiet "Shop (3)" text link that anchors to `/shop` OR a "Cart" chip if a cart is ever wired. Keeps the nav clean, restores conversion discipline.
7. **One lifestyle photo.** The site runs entirely on packshot-on-cream. One atmospheric image — workshop hands, Perugia lab, Grasse fields, or Torino atelier — breaks the texture monotony. Drop it into the founder block from (5) or the FILIERA band.

### P2 — editorial depth (post-promote polish)

8. **"Popular Stories" 3-up grid** at the bottom of the home, before the CTAs. Seed stories: "Perché un extrait per capelli" (science), "La filiera Grasse-Perugia" (heritage), "Come si indossa un profumo per capelli" (ritual). Can link to `/blog/<slug>.astro` pages added later.
9. **Second pull-quote in the /visione body.** Penhaligon's uses "BOLD NOTES. BOLDER ATTITUDE." as a mid-page atmospheric break. Amioud's /visione is currently quite long and uninterrupted.
10. **Footer column split 4 → 5**, adding "Servizio clienti" (spedizioni, resi, FAQ) as its own column. Matches Byredo/Diptyque scale.

## 5. What not to change

- **Don't** swap Cormorant Garamond. It is the strongest typographic move on the site, more distinctive than any peer except Penhaligon's (and Amioud uses it louder).
- **Don't** add button chrome to primary CTAs. Bottle-as-CTA + hairline TextLink is the design commitment; buttons would flatten the voice.
- **Don't** add the Violet Collection hero banner into a carousel. The single static composition is stronger. Carousels are a conversion pattern that only makes sense once there are ≥4 collections.
- **Don't** introduce a second accent color. Violet (#5a3e8c) on hover only is the color law. Adding gold or green to the palette would dilute.
- **Don't** internationalize yet. IT-only is a positioning choice. Shipping EN before the brand has an international distribution strategy wastes engineering.

## 6. Non-design notes worth flagging

- **Image payload** (from `critique.md`): home downloads ~22MB pre-scroll. `optimize-images.mjs` script exists but was not run before publish. Run it before `promote` — expected ~80% reduction on fragrance PNGs. This is prerequisite to decent Core Web Vitals.
- **hero.mp4** at 5.4MB / 1080p. A 720p transcode (~2MB) would serve mobile better without visible quality loss at the hero size. Not blocking.
- **Two more starters** (`wellness`, `tech` if used) should get the ClipMaskReveal fix from P0(3) even if they have no current client using the primitive below the fold.

## 7. Execution order, if Denis greenlights

Sequential, ~1-hour blocks:

1. P0(1) + P0(2) + P0(3) — one builder run, two component patches, one visual verify on /visione and home (both scroll + no-scroll). Commit + push.
2. Run `optimize-images.mjs` against `public/images/`. Commit. Push. Re-verify live.
3. P1(4) — new home section + three `ProductCard` components. CD not needed; this is Tier-0 component work.
4. P1(5) + P1(7) — founder block with atmospheric photo. If no founder photo in `manual-assets/`, flag needs_denis; do NOT stock-substitute a portrait.
5. P1(6) — nav cart affordance.
6. Re-run visual-critic with the new preview_screenshot (fixed by P0(2) being in place).
7. P2 items — separate session after `promote`.

## 8. Deferred until Denis replies

- Whether to add any P2 items at all, or stop at P1 and call it v1.5.
- Whether the founder block portrait is Denis's to shoot, stock-buy, or skip.
- Whether the "Popular Stories" concept requires real content (IT copywriting, ~400 words × 3 posts).
- Whether `/shop` should link to Shopify (existing `shopify-links.ts`) or stay on-site.

---

## 9. What was NOT studied

- Byredo was only available on the cookie-consent overlay screen — deeper pages weren't captured.
- MFK returned an Access Denied page (Edge/Akamai bot filter) — not usable.
- Le Labo was stuck on the location-picker splash — not usable.
- SM Novella, Nishane — screenshots captured but not deeply inspected this turn.

If Denis wants to extend the study with the four under-sampled refs, the screenshot tool is already wired — re-run `tools/screenshot-refs/screenshot.mjs` with working headers or a cookie-accept step.
