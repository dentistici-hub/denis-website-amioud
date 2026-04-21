# Motion Plan — Amioud

**Register:** quiet (editorial). Durations 700–900ms, easings `power2.out` / `power3.out` / `expo.out` family. No bounce, no back-overshoot, stagger ≤ 0.06s. One signature move per page; ≤1 supporting primitive per remaining section.

**Pre-commit asset check:** all assets required by this plan are present in `asset-manifest.json`. `hero-video` (5.4MB MP4 @ 1080p) + `hero-poster` confirmed for signature; `fragrance-preview-{amber-dusk,bubble-garden,midnight-florence}` confirmed for fragrance preview; `visione-editorial-1` confirmed for editorial-split lifestyle band; `fragrance-hero-*` and `fragrance-notes-*` confirmed for detail page. No `cd-signature/` in play. No gaps beyond the already-flagged `team-manuel-caputo` (handled by concept rejection — drop founders block if missing, never sub stock).

---

## 1. Signature move — detailed spec

**Signature (re-stated from concept.md §2):** Hero a due tempi — nebbia che si dirada in flacone. `HeroVideo` loops silently as atmospheric wash; at ~12% scroll a `ClipMaskReveal` (direction `top`) brings the Cormorant claim, then 200ms later a second `ClipMaskReveal` brings the Amber Dusk bottle in `CutoutImage`. No button — the bottle IS the CTA.

```
Slot: home hero (section 0 in section_order)

Primitives:
  1. HeroVideo (components/heroes/HeroVideo.astro)
       src:         /videos/hero.mp4   (confirmed in manifest, 5.4MB, H.264, 1080p)
       poster:      /images/hero-poster.jpg
       attrs:       muted, autoplay, playsinline, loop
       overlay:     cream gradient #f6f4ef top → #fbfaf6 bottom, opacity 0.45
       filter:      none (do NOT blur or desaturate — the nebbia IS the texture)

  2. ClipMaskReveal #1 — the claim
       direction:   top
       trigger:     in-view + 12% scroll progress (via IntersectionObserver, threshold 0.12)
       target:      <h1> "Il primo Extrait de Parfum al mondo per capelli."
                    (Cormorant Garamond 500, clamp(5.5rem, 7.8vw, 9rem))
       duration:    900ms
       easing:      expo.out
       delay:       0ms

  3. ClipMaskReveal #2 — the bottle (the CTA)
       direction:   top
       trigger:     chained — fires 200ms after #1 completes (delay 1100ms from hero mount)
       target:      <CutoutImage src="/images/fragrance-preview-amber-dusk.png" />
                    positioned bottom-right of viewport, 32vw width, transparent PNG
       duration:    900ms
       easing:      expo.out
       link:        wraps an <a href="/fragranze/amber-dusk"> — the bottle itself is clickable,
                    hairline underline appears on hover (per Variation A CTA law)

Reduced-motion fallback:
  - HeroVideo replaced by poster frame (still image, no autoplay)
  - Both ClipMaskReveal children render in final state, immediately, no wipe
  - Claim + bottle + hover underline all present from first paint

Why this config:
  - 900ms / expo.out is the quietest curve available; feels like fabric settling, not UI
  - 200ms inter-reveal stagger gives the eye time to read claim before bottle lands
    (stacking them simultaneously reads as loading spinner, not editorial beat)
  - Bottle-as-CTA respects Variation A's "no button chrome" rule — no IconPillCTA,
    no MagneticButton, nothing competes with the flacone
  - Hero video stays as loop (not scrub) because the video IS atmospheric nebbia,
    not a rotational turntable — scrubbing would break the ETEREO register
```

---

## 2. Section-by-section motion plan

### Home `/`

```
hero  (signature — see §1)
  Signature: HeroVideo + 2× ClipMaskReveal (claim, bottle)
  Why: committed signature; bottle is the CTA
  Reduced-motion: poster + static claim + bottle, rendered final state

brand-story-intro
  Motion: data-anim="fade-up" on paragraphs + ClipMaskReveal (direction: right) on the italic pull-quote
  Why: editorial cadence — quiet paragraph reveals let typography carry the voice;
    one single clip-reveal on the pull-quote marks the hinge beat. No second signature.
  Reduced-motion: all text renders static in final state

fragrance-preview  (staggered, asymmetric — per Variation A)
  Motion: 3× ClipMaskReveal cards (direction: top) + NumberedChapter "01/02/03" oversized
    numerals per card, entering with data-anim="fade-up" stagger 60ms
    Light ParallaxLayer (y=0.15) on the bottle packshot inside each card
  Why: staggered layout is the character; ClipMaskReveal marks each card as an editorial
    frame (not a catalog grid). Numerals anchor editorial rhythm per concept.md §4.
    Parallax y=0.15 is subtle bottle drift on scroll — ETEREO nebbia carried through.
    Viable: manifest has 3× fragrance-preview-* PNGs (high quality, ~1400px).
  Reduced-motion: all 3 cards render static, no parallax, numerals present inline

editorial-split  (box lifestyle + supply-chain story "Da Grasse a Perugia")
  Motion: KenBurnsImage on lifestyle still (visione-editorial-1.jpg) + data-anim="fade-up"
    on the supply-chain prose
  Why: the onyx-adjacent band already carries visual weight via color; KenBurns adds
    breath to the still without a second scroll-scrub. Asset confirmed in manifest
    (visione-editorial-1.jpg, 2000px, high quality).
  Reduced-motion: static image, fade-up collapses to final state

quiz-cta
  Motion: none (deliberate) — hairline underline on link, zero magnetic, zero pill
  Why: conversion beat. Variation A's "no button chrome" rule. Concept §4 explicit.
  Reduced-motion: unchanged (already static)

rivenditori-cta
  Motion: none (deliberate) — hairline underline
  Why: same as quiz-cta. Two CTAs in sequence = static twins, trust via restraint.
  Reduced-motion: unchanged

footer
  Motion: none
  Why: legal + nav only. Motion here is noise.
  Reduced-motion: unchanged
```

### Detail `/fragranze/[slug]`

```
fragrance-hero
  Motion: KenBurnsImage on the sidelit packshot (fragrance-hero-<slug>.jpg)
    + single ClipMaskReveal (direction: top) on the fragrance name in Cormorant
  Why: slow pan-zoom on the single large product image gives cinematic entry.
    One clip-reveal marks the headline. Assets confirmed (1920x2880 packshots).
  Reduced-motion: static image + final headline

notes-breakdown  (testa / cuore / fondo)
  Motion: 3× ClipMaskReveal (direction: top), stagger 60ms between rows
  Why: three sequential editorial frames match the olfactory pyramid's 3-beat
    structure. Single primitive, staggered — no accordion animation stacked on top.
  Reduced-motion: static list, final state

story
  Motion: data-anim="fade-up" on paragraphs only
  Why: long-form prose; reveals are per-paragraph, quiet. No second signature move.
  Reduced-motion: static

product-gallery
  Motion: data-anim="fade-up" stagger 60ms on gallery thumbs (static grid, NOT DragGallery)
  Why: small gallery of packshots; DragGallery is explicitly rejected in concept §6.
    Thumbnails fade-up in sequence, click opens lightbox (lightbox is native browser / static).
  Reduced-motion: static grid, final state

shop-cta  (Shopify handoff — per shopify-handoff.md)
  Motion: none — hairline underline + external-link indicator
  Why: transactional handoff. Any motion here reads as gimmick at conversion.
  Reduced-motion: unchanged

related-fragrances
  Motion: 2× CutoutImage of the other two bottles, each with ClipMaskReveal
    (direction: top) on viewport entry, stagger 60ms
  Why: closes the page with the same bottle-as-CTA vocabulary as the hero.
    Carries the signature primitive consistently through the whole site.
  Reduced-motion: static bottles, final state
```

---

## 3. Interaction language

| Pattern                | Where                                          | Config                                                          |
| :---                   | :---                                           | :---                                                            |
| Hairline underline CTA | all links + all CTAs site-wide                 | 1px onyx #1a171b, underline-offset 0.25em, no hover color shift |
| Hover on text links    | nav links + inline links                       | underline color transitions to accent #5a3e8c, 200ms linear     |
| Default browser cursor | site-wide                                      | deliberately NO CustomCursor — editorial quiet, not tech demo   |
| Bottle-as-CTA hover    | hero bottle + fragrance-preview cards          | cursor: pointer, hairline underline appears under caption, 200ms |
| No MagneticButton      | —                                              | rejected per concept §6 — editorial violates magnetic register  |
| No TextScramble        | —                                              | rejected per concept §6 — too tech, conflicts with ETEREO       |
| No IconPillCTA         | —                                              | rejected per concept §6 — chromato, incompatible with hairline  |

---

## 4. Rejections (motion we deliberately do NOT use)

- **No ScrollVideoScrub** — the hero video is atmospheric nebbia, not a 360° rotation. Scrubbing breaks the dreamlike loop. (Explicit per concept §2, §7.)
- **No ScrollPinSection** — the ClipMaskReveal chain IS the signature; pinning would over-engineer a quiet hero.
- **No HorizontalScrollTrack** — no portfolio/process content justifies it.
- **No ScrollScenePan** — no wide-SVG narrative asset exists or is needed.
- **No MagneticButton** — editorial register forbids chromed CTA behavior; Variation A mandates hairline.
- **No TextScramble** — tech register, conflicts with ETEREO/ONIRICO.
- **No IconPillCTA** — chromed button style incompatible with hairline underline law.
- **No DragGallery** — catalog-y, anti-editorial per concept §6.
- **No ShaderCanvas** — the hero video already provides atmospheric wash; a second GPU canvas is redundant.
- **No InteractiveThreeScene** — over-engineering; the flacone photography already speaks.
- **No DuotonePhoto** — client photography is already studio-shot; duotone would degrade it.
- **No GrainOverlay** — hero video + KenBurns already carry organic texture.
- **No CustomCursor** — site-wide default cursor is the correct editorial choice.
- **No preloader** — the hero poster + 5.4MB video load is fast; loader ceremony conflicts with quiet register.
- **No fragrance-preview symmetric grid** — asymmetric stagger per Variation A is the character.
- **No ColorFloodScroll** — concept §6 lists it as optional (cream → onyx → cream for brand-story/Grasse/quiz). I'm NOT invoking it on Home. Rationale: the home's 5 content sections stay in the cream family; the editorial-split's onyx band is a typography + background-color commit on a single section, not a scroll-driven page flood. Invoking ColorFloodScroll for one band would be over-engineering; the band's background is set statically in the section CSS.

---

## 5. Reduced-motion summary

Reduced-motion users see the hero poster frame (not the video), all ClipMaskReveal children rendered in final state, KenBurns stills static, parallax neutralized, all fade-ups collapsed to immediate presence. The editorial carries on typography alone — Cormorant Garamond's high-contrast display + Inter's quiet body still deliver the niche-perfumery register without a single pixel of motion. The bottle remains visually the CTA (hairline underline on hover). Nothing about the concept falls apart; the register shifts from ETEREO/ONIRICO (motion-assisted dreamlike) to quiet editorial (typography-led). Both are on-brand.

---

## 6. Build order hint (for the builder)

1. **Hero + signature chain** (HeroVideo + 2× ClipMaskReveal + CutoutImage bottle) — verify the centerpiece lands before touching anything else. This is the whole concept in one beat.
2. **Navigation + Footer** — frame the page; confirm hairline-underline CTA law works with the nav.
3. **Fragrance-preview** (asymmetric staggered + ClipMaskReveal + NumberedChapter + ParallaxLayer) — the second most important beat; this is where the signature primitive proves it can carry a grid.
4. **Detail page hero + notes-breakdown** — mirror the signature language on `/fragranze/[slug]`.
5. **Editorial-split, brand-story-intro** — supporting beats.
6. **Quiz + Rivenditori CTAs, product-gallery, story, related-fragrances** — remaining sections. Static or simple data-anim.
7. **Legal pages, Shop placeholder** — last; all static.

---

## 7. Micro-timings (per-entry commitments)

| Section              | Primitive                   | Duration | Easing       | Delay / Stagger             | Scrub? | Damping |
| :---                 | :---                        | :---     | :---         | :---                        | :---   | :---    |
| home/hero            | ClipMaskReveal #1 (claim)   | 900ms    | expo.out     | delay 0ms                   | no     | n/a     |
| home/hero            | ClipMaskReveal #2 (bottle)  | 900ms    | expo.out     | delay 1100ms (200ms gap)    | no     | n/a     |
| home/hero            | HeroVideo loop              | loop     | linear       | autoplay on load            | no     | n/a     |
| home/brand-story     | data-anim="fade-up" paras   | 700ms    | power2.out   | stagger 60ms                | no     | n/a     |
| home/brand-story     | ClipMaskReveal pull-quote   | 800ms    | power3.out   | delay 120ms after in-view   | no     | n/a     |
| home/fragrance-prev  | ClipMaskReveal card (×3)    | 800ms    | power3.out   | stagger 60ms between cards  | no     | n/a     |
| home/fragrance-prev  | NumberedChapter numeral     | 700ms    | power2.out   | stagger 60ms (matches card) | no     | n/a     |
| home/fragrance-prev  | ParallaxLayer on bottle     | scroll   | linear       | y=0.15 offset               | yes    | n/a     |
| home/editorial-split | KenBurnsImage               | 28s loop | ease-in-out  | begins on in-view           | no     | n/a     |
| home/editorial-split | data-anim="fade-up" prose   | 700ms    | power2.out   | stagger 60ms                | no     | n/a     |
| home/quiz-cta        | (none)                      | —        | —            | —                           | —      | —       |
| home/rivenditori-cta | (none)                      | —        | —            | —                           | —      | —       |
| home/footer          | (none)                      | —        | —            | —                           | —      | —       |
| detail/hero          | KenBurnsImage               | 28s loop | ease-in-out  | begins on in-view           | no     | n/a     |
| detail/hero          | ClipMaskReveal name         | 900ms    | expo.out     | delay 0ms on in-view        | no     | n/a     |
| detail/notes         | ClipMaskReveal row (×3)     | 800ms    | power3.out   | stagger 60ms                | no     | n/a     |
| detail/story         | data-anim="fade-up" paras   | 700ms    | power2.out   | stagger 60ms                | no     | n/a     |
| detail/gallery       | data-anim="fade-up" thumbs  | 700ms    | power2.out   | stagger 60ms                | no     | n/a     |
| detail/shop-cta      | (none)                      | —        | —            | —                           | —      | —       |
| detail/related       | ClipMaskReveal bottle (×2)  | 800ms    | power3.out   | stagger 60ms                | no     | n/a     |

**Commitments:**
- Durations: 700ms (fade-up body), 800ms (clip-reveal supporting), 900ms (clip-reveal signature) — all within the 700–900ms quiet band.
- Easings: `power2.out` for body fades, `power3.out` for supporting clip-reveals, `expo.out` reserved for the two signature reveals (claim, bottle, detail headline). No bounce, no back-overshoot anywhere.
- Stagger: fixed at 60ms (0.06s) — the ceiling for quiet register. Never exceeded.
- Signature inter-reveal gap: 200ms between claim-complete and bottle-start (1100ms total delay on #2).
- KenBurns loop: 28s (slow enough to be almost subliminal, per concept's ETEREO/ONIRICO).
- No scroll-scrub anywhere on the site. Parallax y=0.15 is the only scroll-coupled motion.

---
