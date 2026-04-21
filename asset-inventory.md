# Amioud — Asset Inventory

Generated: 2026-04-21
Source priority: manual > client-website > pexels/unsplash > pollinations > needs_denis

## Slot coverage: 26 / 27 filled (96%)

### Home page
- [x] hero-video — client Shopify CDN, 1080p, 5.4MB. `public/videos/hero.mp4`
- [x] hero-poster — client Shopify preview thumbnail. `public/images/hero-poster.jpg`
- [x] fragrance-preview-amber-dusk — pitchdeck slide 6 (box lifestyle). `public/images/fragrance-preview-amber-dusk.png`
- [x] fragrance-preview-bubble-garden — pitchdeck slide 4. `public/images/fragrance-preview-bubble-garden.png`
- [x] fragrance-preview-midnight-florence — pitchdeck slide 5. `public/images/fragrance-preview-midnight-florence.png`
- [x] quiz-cta — Pollinations (flux, seed 77, single-attempt). `public/images/quiz-cta.jpg`
- [x] rivenditori-cta — Pexels Ferdinando Ferrazzi (Santa Maria Novella Firenze). `public/images/rivenditori-hero.jpg`

### Per-fragrance pages
- [x] fragrance-hero-amber-dusk — client site. `public/images/fragrance-hero-amber-dusk.jpg`
- [x] fragrance-hero-bubble-garden — client site. `public/images/fragrance-hero-bubble-garden.jpg`
- [x] fragrance-hero-midnight-florence — client site. `public/images/fragrance-hero-midnight-florence.jpg`
- [x] fragrance-notes-amber-dusk — client site (vanilla/lavender/orchid/amber crystals). `public/images/fragrance-notes-amber-dusk.jpg`
- [x] fragrance-notes-bubble-garden — client blog hero (bottle on water with petals). `public/images/fragrance-notes-bubble-garden.jpg`
- [x] fragrance-notes-midnight-florence — client site (iris + moss + white chocolate). `public/images/fragrance-notes-midnight-florence.jpg`
- [x] product-gallery-amber-dusk-02/03 — pitchdeck 1 + 12. `public/images/product-gallery-amber-dusk-0{2,3}.png`
- [x] product-gallery-bubble-garden-02/03 — pitchdeck 3 + 10. `public/images/product-gallery-bubble-garden-0{2,3}.png`
- [x] product-gallery-midnight-florence-02/03 — pitchdeck 2 + 11. `public/images/product-gallery-midnight-florence-0{2,3}.png`

### /shop
- [x] shop-hero — Pollinations (flux, reseeded to 142). `public/images/shop-hero.jpg`

### /rivenditori
- [x] rivenditori-hero — same Pexels asset as the home CTA (Santa Maria Novella). Consider a second shot if the builder wants to differentiate.

### /visione
- [x] visione-editorial-1 — client blog banner (three bottles on marble podiums). `public/images/visione-editorial-1.jpg`
- [x] visione-editorial-prima — before half. `public/images/visione-editorial-prima.png`
- [x] visione-editorial-dopo — after half. `public/images/visione-editorial-dopo.png`
- [ ] team-manuel-caputo — NOT FILLED. See `flags_for_denis` — need client portrait or drop the block.

### Brand marks
- [x] logo (primary monogram) — client site. `public/images/logo.png`
- [x] logo-wordmark (fallback) — client site. `public/images/logo-wordmark.png` — flag for SVG upgrade.

---

## Pitchdeck assets copied to manual-assets/
All nine usable slides, preserving full resolution:

- `manual-assets/product-amber-dusk-50ml-solo.png` (from pitchdeck 1)
- `manual-assets/product-midnight-florence-50ml-solo.png` (from pitchdeck 2)
- `manual-assets/product-bubble-garden-50ml-solo.png` (from pitchdeck 3)
- `manual-assets/product-bubble-garden-box-lifestyle.png` (from pitchdeck 4)
- `manual-assets/product-midnight-florence-box-lifestyle.png` (from pitchdeck 5)
- `manual-assets/product-amber-dusk-box-lifestyle.png` (from pitchdeck 6)
- `manual-assets/product-bubble-garden-20ml-box.png` (from pitchdeck 10)
- `manual-assets/product-midnight-florence-20ml-box.png` (from pitchdeck 11)
- `manual-assets/product-amber-dusk-20ml-box.png` (from pitchdeck 12)

Slides 7/8/9 (20ml solo, no box, small crop) were skipped — cropped small. `variantegialla.png` was excluded per instruction (unreleased yellow variant).

---

## Pollinations reseed log
- `quiz-cta`: seed 77, flux, 1 attempt — PASS.
- `shop-hero`: seed 77 first attempt (bottle cap misread as gold disc), reseeded to 142 with tighter "purple marbled sphere cap" prompt — PASS. 1 reseed.

---

## Notable decisions
1. **logo.png is the circular-monogram version**, not the AMIOVD wordmark. The wordmark is pixelated; the monogram reads as luxury/editorial. Wordmark retained as `logo-wordmark.png` for footer/small contexts.
2. **Three "fragrance-notes" slots are filled with real still-life photography**, not GLSL shaders. The client's own imagery literally shows the olfactory pyramid as physical ingredients — stronger than any abstract generative shader. If brief.json calls for a custom-glsl slot, the concept-architect should see this manifest first and decide whether the shader is additive or redundant.
3. **The rivenditori Pexels pick (Santa Maria Novella in Firenze)** is not a generic boutique — it's literally the 1612 historic perfumery. Culturally the right choice for a brand with a "Midnight in Florence" flagship.
4. **No Lotties, no Pexels Videos, no Unsplash.** The client's own imagery plus the pitchdeck covered nearly every slot. Two Pollinations generations + one Pexels photo filled the remainder.
