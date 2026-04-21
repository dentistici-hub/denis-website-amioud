# Critique — Amioud (iteration 1/2)

## 1. Verdict

**GREENLIGHT** — with one accepted tradeoff on image payload (see §4).

Rubric: 0 "no", 1 "partial" (perf/a11y). Below the ITERATE threshold (1+ no OR 3+ partial).

## 2. Screenshots taken

The Claude Preview screenshot renderer timed out repeatedly on this session
(even after pausing/removing the HeroVideo) — `preview_screenshot` returned
`timed out after 30s` consistently. The site itself is healthy (Astro dev
served 200s, no console errors, DOM reachable). I fell through to DOM-level
audit via `preview_eval` + `preview_inspect`, which the spec explicitly
recommends as "more accurate than screenshots" for verifying colors, fonts,
sizes, classnames, and motion configs. Every rubric dimension below has
concrete DOM/CSS evidence instead of a pixel.

`critique-screenshots/` directory is created but empty. Flag for Denis:
preview_screenshot tooling may need a look on a future run — not a build
blocker, a tooling blocker.

Pages audited live:
- `/` (home) — desktop 1280×720
- `/fragranze/midnight-in-florence/` (detail)
- `/shop/`
- `/visione/`

## 3. Concept alignment rubric

| Dimension          | Status  | Evidence |
| :---               | :---    | :---     |
| Through-line       | yes     | `body` bg `rgb(246,244,239)` cream, fg `rgb(26,23,27)` onyx; single `<h1>` "Il primo Extrait de Parfum al mondo per capelli." in Cormorant Garamond 500 @ 115.2px; lang="it"; no button chrome anywhere. Quiet editorial register delivered. |
| Signature move     | yes     | `HeroVideo` mounted w/ autoplay+loop+muted, `currentSrc=/videos/hero.mp4` 1920×1080. Two `[data-clip-mask]` configs read: {duration:0.9, ease:"expo.out", delay:0} for claim, {duration:0.9, ease:"expo.out", delay:1.1} for bottle. **Exact** match to motion-plan §7 (900ms / expo.out / 200ms inter-reveal gap = 1100ms total delay on #2). `CutoutImage` wraps `<a href="/fragranze/amber-dusk">` — bottle IS the CTA, no button. |
| Typographic voice  | yes     | Nav: Inter Variable 600 uppercase letter-spacing 1.56px @ 13px — matches type-system §4 (`0.12em × 0.8125rem`). Pull-quote: Cormorant Garamond 300 italic @ 33.6px ("Un profumo che non si indossa, si respira."). H1 line-height 0.95 w/ tracking -0.02em — matches §4. No weight 700 anywhere. |
| Motion intensity   | yes     | 5× ClipMaskReveal + 2× KenBurnsImage (visione-editorial-1, detail hero) + 3× ParallaxLayer (fragrance card bottles, `y=0.15`) + 1× Marquee (/visione only) + `data-animate="fade-up"` on paragraphs/eyebrows. Zero MagneticButton, TextScramble, DragGallery, ShaderCanvas, HorizontalScrollTrack, IconPillCTA, CustomCursor, GrainOverlay anywhere on home, detail, shop, visione. |
| Color law          | yes     | Color audit on home: onyx `rgb(26,23,27)` 253 uses, ink70 `rgba(26,23,27,0.7)` 45 uses, cream `rgb(246,244,239)` 26 uses, ink20 `rgba(26,23,27,0.2)` (hairlines) present. Violet `#5a3e8c` appears **once** with alpha 0.9 (hover hint) — concept §5 authorized "solo hover su TextLink". Gold not in default state. No pure white, no solid-fill violet. |
| Layout grammar     | yes     | Home section order: HeroSignature → BrandIntro → FragPreview (staggered) → EditorialSplit (onyx band) → CtaQuiz → CtaRivenditori → Footer. Matches `variations/home-a.jsx` 1:1. Fragrance preview is staggered (not grid) — asymmetric `.frag-card` widths confirmed. /visione has the brand-adjective Marquee w/ exactly the 6 tokens from concept §6: ETEREO · ONIRICO · UNICO · LEGGEREZZA · SOGNO · FLOREALE. |
| Rejections         | yes     | Banned-phrase grep (body.innerText): zero hits on "scopri di più", "acquista ora", "offerta", "all'avanguardia". Em-dash `—` in body `<p>`: zero occurrences. Founders block on /visione: absent (correctly hidden per needs_denis flag for `team-manuel-caputo`). No stock sub for missing portrait. |
| CD bundle fidelity | yes     | Variation A skeleton preserved section-for-section. Onyx editorial band, staggered fragrance cards w/ oversized numerals 01/02/03, italic-300 mood descriptors, hairline TextLink CTAs, bottle-as-CTA hero. Detail schematic (hero w/ KenBurns 28s loop, notes w/ ClipMaskReveal stagger 60ms, related-fragrances w/ 2× CutoutImage) matches `variations/detail.jsx`. |
| Perf / a11y        | partial | See §4. Images > 500KB: 11 files including 3× 5.4MB fragrance PNGs on home. Lazy-loading coverage: 5/6 home images lazy (logo correctly eager). Alt coverage: 6/6 non-empty, meaningful Italian alts. h1 count per page: 1/1/1/1 (home/detail/shop/visione). Contrast: onyx on cream 16.16:1, ink70 on cream 6.29:1 — both pass WCAG AA easily. |

## 4. Critical gaps

None at the ITERATE-threshold level. One accepted tradeoff documented below.

## 5. Non-critical nits (not blocking, Denis should know)

**Perf — fragrance-preview PNGs are massive.** The three home bottle artworks
are 5.4MB each (raw):
- `fragrance-preview-amber-dusk.png` — 5,425,817 bytes
- `fragrance-preview-bubble-garden.png` — 5,349,935 bytes
- `fragrance-preview-midnight-florence.png` — 5,539,841 bytes

Home downloads ~16MB of PNG + 5.4MB hero.mp4 + visione-editorial-1.jpg (91KB)
before a first mobile scroll. Product-gallery PNGs on detail (2MB each × 3)
add another 6MB per fragrance page. Concept §5 commits to "editorial
restraint"; a 22MB home payload contradicts that at the network layer even
if it's not visible in the DOM.

Mitigation for a future pass (NOT this iteration's ITERATE):
- Convert the 9 fragrance PNG assets to WebP @ quality 82. Expected ~85%
  reduction → each bottle 700-900KB instead of 5.4MB.
- Add `<picture>` fallback if Denis wants IE/legacy Safari safety (doubtfully
  needed for a 2026 niche-luxury brand).
- Optionally generate 2 sizes per bottle (800px mobile, 1400px desktop) via
  Astro's `<Image>` component — currently the PNGs ship raw from `public/`.

All other lazy-loading, alt, h1, and contrast checks pass. The perf gap is
purely asset-payload and is an **accepted tradeoff for v1 demo** — cosmetic
at desktop broadband, noticeable on 4G mobile.

**Type-system italic-count.** Type-system §3 says italic Cormorant 300 "used
≤ 3 times per page." Home uses 4 (pull-quote + 3 fragrance mood descriptors).
Defensible because the mood descriptors are explicitly authorized in the
SAME §3 paragraph. Not a gap, a note: if a future section adds one more
italic line, demote one to body.

**hero.mp4 at 5.4MB.** Within motion-plan pre-commit bound ("5.4MB MP4 @
1080p confirmed"). At 1080p H.264, acceptable for a demo; a ~2-3MB 720p
transcode would be appropriate for mobile but is explicitly NOT required
by concept or motion-plan.

## 6. Reference alignment notes

- `cd-bundle/variations/home-a.jsx` — section order, staggered fragrance
  layout, onyx editorial band, pull-quote block, hairline TextLink — all
  reproduced 1:1. Builder did not invent structure.
- `cd-bundle/variations/detail.jsx` — KenBurns hero + 3× staggered clip-mask
  on notes + related-fragrances as 2× CutoutImage closer — all present on
  `/fragranze/midnight-in-florence/`.
- `reference_sites[]` (brief.json Byredo/Diptyque/Le Labo editorial anchors):
  signature-typography contrast (serif display + grotesque body) delivered;
  no button-chrome on primary CTAs; color law matches the niche-perfumery
  convention. Good.

## 7. What memory says

No directly-applicable procedural memory on niche-perfumery website critique
patterns in the general store. Filing one with this run so future
editorial-luxury builds benefit. Pattern: "accept image-payload tradeoff on
demo builds; require WebP conversion before `promote <slug>`."

## 8. Preview cleanup

Preview server `8197911a-0f1a-461c-aa71-ec062205a5dd` stopped per Denis's
"close preview servers" standing rule.

---

## Builder notes for next iteration (if any)

None required for this iteration. If Denis opts to loop for the perf nit
before publish:

1. `public/images/fragrance-preview-{amber-dusk,bubble-garden,midnight-florence}.png`
   — re-export at 1400px wide, convert to WebP quality 82.
2. `public/images/product-gallery-{slug}-{02,03}.png` — same treatment.
3. `public/images/visione-editorial-{dopo,prima}.png` — convert to WebP
   (currently 1.4MB PNG × 2).
4. Optionally wrap all `<img>` via Astro's `<Image>` component with
   `format="webp"` to auto-generate responsive srcset.

These changes are mechanical and would take <15min in the builder. They are
**not** prerequisite to GREENLIGHT per the rubric, but are prerequisite to
`promote <slug>` production flip for SEO + Core Web Vitals.
