# Concept — Amioud

## 1. Through-line

Gioielleria della testa — un profumo che non si indossa, si respira.

## 2. Signature move

**Hero a due tempi: nebbia che si dirada in flacone.** Il video `/videos/hero.mp4` gioca in loop silenzioso (HeroVideo, `muted` + `autoplay` + `playsinline`) su un wash cream-to-white. Sopra, un `ClipMaskReveal` diretto `top` porta in scena la claim in Cormorant 7–9vw ("Il primo Extrait de Parfum al mondo per capelli.") al 12% di scroll, seguito 200ms dopo da un secondo `ClipMaskReveal` sul flacone Amber Dusk in `CutoutImage`. Nessun bottone: il flacone È la CTA. La nebbia del video resta viva sotto tutto, eterea e onirica — letteralmente ETEREO + ONIRICO dal brand manual.

_Rationale vs. ScrollVideoScrub (proposto upstream):_ il video Shopify è una nebbia atmosferica non una rotazione 360° — scrubbarlo romperebbe la sua leggerezza onirica. Variation A impegna la hero a densità editoriale ("bottle is the CTA, no buttons"), incompatibile con una sequenza di scroll pinnato a 500vh. Si tiene il video come wallpaper quieto, non come stunt.

### Signature requires bespoke motion?

**NO.** Tutti i componenti sono già sulla scaffalatura: `HeroVideo` (component), `ClipMaskReveal`, `CutoutImage`, `KenBurnsImage`, `ParallaxLayer`. Nessun `signature-motion-brief.md`, nessun sentinel.

## 3. Typographic voice

**Luxury display** — alto contrasto in stile Didone/Garamond (Cormorant Garamond 500 per display, italic 300 per pull-quote). Corpo neutrale grotesque a complemento. Denso ma quieto — mai in peso 700, mai in maiuscoletto aggressivo. La Type Stylist tradurrà in coppia specifica.

## 4. Motion language

**Intensity:** `quiet`.
**Signature Tier 1 move:** `ClipMaskReveal + KenBurnsImage` (il chain cinematografico).

Moment map:
- **Hero** — HeroVideo loop + 2× ClipMaskReveal (claim, bottle).
- **Brand story** — `data-anim="fade-up"` su paragrafi, ClipMaskReveal sul pull-quote italic.
- **Fragrance preview staggered** — ClipMaskReveal per card, numerali 01/02/03 in entrata `stagger` 180ms. `ParallaxLayer` leggero (y=0.15) sui bottle packshots.
- **Onyx band "Da Grasse a Perugia"** — KenBurnsImage sul lifestyle-box, nessun altro movimento (la tonalità onyx già grida).
- **Quiz + Rivenditori CTA** — statico, hairline underline, zero magnetic.
- **Detail page** — KenBurnsImage sul fragrance hero, ClipMaskReveal staggered sulle 3 note (testa/cuore/fondo), nessun altro.

Regole anti-stack: niente MagneticButton, niente TextScramble, niente ShaderCanvas, niente DragGallery, niente HorizontalScrollTrack, niente InteractiveThreeScene. Un'unica firma di scroll (ClipMaskReveal chain).

## 5. Color law

**Commit: cream sì, CD wins.** Il wireframe di Variation A usa gradient `#f6f4ef → #fbfaf6` in hero e banda onyx + band `#f3eee6` in sezione quiz. Mantenere il gradient cream è coerente con la convenzione niche-perfumery (Diptyque, Le Labo) e con ETEREO del brand manual; saltare indietro a bianco puro renderebbe sterile la nebbia del video. La brief palette (`#f3eee6` cream, `#1a171b` onyx, `#5a3e8c` violet accent, `#b89768` gold secondary) resta autorità — io aggiungo solo un secondo cream chiarissimo per il wash.

```
bg-primary:   #f6f4ef   (cream warm — hero top, base sections)
bg-wash:      #fbfaf6   (cream near-white — hero bottom gradient target)
bg-band:      #f3eee6   (cream deeper — quiz + related-fragrances bands)
fg:           #1a171b   (onyx — testo, banda editorial)
fg-muted:     rgba(26,23,27,0.70)   (ink70 — corpo leggero, note)
divider:      rgba(26,23,27,0.20)   (ink20 — hairlines)
accent:       #5a3e8c   (violet — USO PARCO: solo hover su TextLink + active nav underline. MAI pieno, MAI fill di bottoni)
secondary:    #b89768   (gold — USO PARCISSIMO: solo favicon + loader glyph + monogramma A watermark)
grain:        off       (il video video + KenBurns portano già texture; grain sovrappone rumore digitale)
```

**Mai usato:** nessun viola o oro pieno, nessun gradient violet, nessun dark-mode, nessun accent colorato su CTA (CTA = hairline underline onyx).

## 6. Layout grammar

```
IN:
- HeroVideo                  (hero bg loop quieto, muted autoplay)
- ClipMaskReveal             (signature chain: claim, bottle, fragrance cards, onyx-band image, detail notes)
- CutoutImage                (bottles float on cream senza sfondo)
- KenBurnsImage              (onyx-band lifestyle, fragrance-hero detail, visione-editorial-1)
- ParallaxLayer              (y=0.15 sui bottle packshots in preview staggered; opzionale su monogramma A watermark)
- NumberedChapter            (numerali 01/02/03 nella sezione fragrance preview)
- Marquee                    (solo /visione — marquee dei 6 aggettivi brand ETEREO · ONIRICO · UNICO · LEGGEREZZA · SOGNO · FLOREALE)
- ColorFloodScroll           (delicato: solo transizione cream → onyx → cream fra Brand Story / Grasse-Perugia / Quiz-CTA)
- data-anim="fade-up"        (paragrafi brand story, note detail, body copy)

OUT:
- ScrollVideoScrub           (rejected signature — vedi sopra; confligge con Variation A density)
- ScrollPinSection           (non serve — ClipMaskReveal chain è già la firma)
- HorizontalScrollTrack      (nessun portfolio/process orizzontale in questo brand)
- ScrollScenePan             (nessuna wide-SVG narrativa disponibile né richiesta)
- MagneticButton             (troppo startup — niche-perfumery rule, cfr. gmem pattern)
- TextScramble               (troppo tech — conflitto diretto con ETEREO/ONIRICO)
- IconPillCTA                (troppo chromato per hairline underline editorial di Variation A)
- DragGallery                (catalog-y, anti-editorial)
- ShaderCanvas               (non serve — la nebbia del video è già il "marble wash")
- InteractiveThreeScene      (over-engineer, il flacone parla da solo)
- DuotonePhoto               (le foto cliente sono già studio-shot; duotone le sporcherebbe)
- TestimonialsWall           (brand <1 anno, nessun social proof pubblico)
- TrustStats grid-of-numbers (supply-chain provenance narrata prosaicamente, non in counter)
```

## 7. Rejections

- **Variation B (Asymmetric Minimalist) e Variation C (Serial Novella)** — Denis ha scelto A. B perde la densità editoriale (troppo silenzio, sembra incompleto per un brand <1 anno che deve provare profondità); C sovra-narra la prosa e manca la signature visiva forte per convertire. Non riconsiderate.
- **Hero con ScrollVideoScrub su rotazione bottiglia 360°** (proposto da upstream researcher) — confligge con Variation A "bottle IS the CTA, no buttons" e con la natura atmosferica del video `hero.mp4` (nebbia, non turntable). Il video sta, ma come loop silente, non come scrub. Se in futuro arriva un 360° frame-sequence reale, riaprire.
- **Griglia di 3 fragrance cards uguali** — Variation A impone staggered (marginLeft: 24/120/48, marginRight: 100/24/80). Niente grid simmetrica, niente cards con misure identiche. L'asimmetria È il carattere editoriale.
- **Accent color violet #5a3e8c come fill di bottoni, pill, badge, sfondi** — il palette del brief autorizza il viola ma Variation A non lo usa mai come superficie. Confinato a hover TextLink e underline attivo nav. Nessun fill.
- **Stock persone / foto team fabbricate per Manuel Caputo** — manifest `team-manuel-caputo` è `needs_denis: EMPTY`. Se Denis non fornisce ritratto, droppare il blocco founders da /visione. Luxury rule: mai stock per persone reali.
- **Generic "scopri di più" / "acquista ora" / "offerta" / "all'avanguardia"** — bandito dal vocabolario di brief voice_notes. Copy-composer userà `Leggi la storia`, `Inizia il quiz`, `Dove trovarci`, `Aggiungi al carrello`, `Porta [nome] con te`.
- **Grain overlay** — OFF. Il video nebbia e KenBurns portano già texture organica; grain aggiungerebbe solo rumore digitale.

### needs_denis flags

- `team-manuel-caputo` portrait missing — builder: se assente, nascondi founders block da /visione, non sostituire con stock.
- Logo SVG vettoriale — flag già in manifest; workaround builder usa PNG 512x512 su fondo chiaro, ma in nav piccolo può pixelare sotto 1x.

### Pre-commit check

- Tutti i primitives citati esistono in `components/motion-primitives/README.md`: `ClipMaskReveal`, `CutoutImage`, `KenBurnsImage`, `ParallaxLayer`, `NumberedChapter`, `Marquee`, `ColorFloodScroll` ✓. `HeroVideo` è un hero component in `components/heroes/HeroVideo.astro` (non un motion-primitive ma è nell'inventario Tier 0 citato nel CLAUDE.md) ✓.
- Tutti gli asset referenziati sono nel manifest o in `public/videos/hero.mp4` ✓.
- Nessun slot richiesto mancante che non sia già flaggato (team-manuel-caputo only).
