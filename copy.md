# Copy — Amioud

## 1. Voice rules

Voice: editorial, evocativa, leggera. Profumeria artistica, non e-commerce. Frasi brevi poetiche alternate a passaggi editoriali piu distesi (max due per sezione). Il registro e quieto: mai corporate, mai startup, mai AI-robotico. ETEREO, ONIRICO, SOGNO, LEGGEREZZA, FLOREALE sono ancore tonali — guidano il ritmo e la scelta dei sostantivi, non diventano mai frasi fatte ("cosa ONIRICA", "esperienza UNICA"). Amioud e un brand, non un consulente: niente monologo in prima persona, niente "ti accompagnamo", niente "scopri con noi". Il soggetto e il profumo, non chi lo racconta. Accenti corretti sempre (e a i o u). Zero em dash, zero trattini doppi in corpo testo. Numeri solo se documentati nel brief (20%, 2025, 18 mesi). Vocabolario profumeria artistica: extrait de parfum, piramide olfattiva, note di testa/cuore/fondo, maison essenziere, materie prime, impronta olfattiva, guardaroba olfattivo.

Ban for this site:
  - "scopri di piu", "scopri la gamma", "scopri subito" (generic)
  - "acquista ora", "acquista subito", "offerta", "offerta imperdibile"
  - "all'avanguardia", "innovativo", "rivoluzionario" (usare "brevettato")
  - "shampoo profumato", "spray per capelli", "cosmetico" (il brief lo vieta)
  - "contattaci", "contattaci oggi", "clicca qui", "inizia ora"
  - "esperienza unica", "esperienza sensoriale", "viaggio olfattivo" (template perfumery)
  - "cosa ONIRICA", "profumo UNICO", "SOGNO che si avvera" (gli aggettivi brand come slogan)
  - "noi crediamo", "la nostra missione", "la nostra passione"
  - "il team che fa la differenza", "il lusso accessibile"
  - em dash e doppio trattino ("--") in corpo testo
  - punto esclamativo (una sola eccezione: messaggio di errore form se mai serve — preferire il punto)
  - domande retoriche come headline ("Vuoi sentire un profumo diverso?")
  - emoji inline
  - maiuscolo enfatico in body (riservato a eyebrow + marquee valori)

## 2. Language

Language: it-IT
Source: analysis.json.language = "it", live site 100% italiano, brief.voice_notes.language = "Italian (primary)"

## 3. Section-by-section copy

### HOME — `/`

## hero
eyebrow: —
headline: "Il primo Extrait de Parfum al mondo per capelli."
subhead: "Violet Collection. Tre fragranze, una concentrazione al 20%."
primary_cta: —
secondary_cta: —
notes: "Per concept.md, il flacone E la CTA. Nessun bottone. Il video nebbia gira in loop sotto la claim. Pull quote 'Un profumo che non si indossa, si respira.' compare in ClipMaskReveal secondario sotto il flacone, in Cormorant italic 300. Committed come pull_quote qui sotto."

## hero.pull_quote
text: "Un profumo che non si indossa, si respira."

## brand-story-intro
eyebrow: "Visione"
headline: "Gioielleria della testa."
subhead: —
body: "Diciotto mesi di ricerca fra Grasse e Perugia per un gesto nuovo: profumare i capelli con la densita di un extrait, la leggerezza di un rituale. Il risultato e brevettato. La concentrazione e al 20%."
primary_cta: "Leggi la visione"
secondary_cta: —
notes: "CTA rimanda a /visione. Body 38 parole — sotto cap 45."

## fragrance-preview
eyebrow: "Violet Collection"
headline: "Tre fragranze. Tre storie."
subhead: —
primary_cta: —
notes: "Tre card staggered. Numerali 01/02/03 come eyebrow di card, non come ordinale narrativo. Ogni card ha un descrittore brevissimo piu link a /fragranze/[slug]. Acquista secondario e opzionale per card — committed sotto. CTA principale per card = 'Scopri' (porta alla detail), CTA secondaria opzionale = 'Acquista' (Shopify handoff per SKU)."

### fragrance-preview.card.amber-dusk
eyebrow: "01"
headline: "Amber Dusk"
descriptor: "Avvolgente e sensuale."
primary_cta: "Scopri"
primary_cta_href: "/fragranze/amber-dusk"
secondary_cta: "Acquista"
secondary_cta_shopify_key: "productAmberDusk"

### fragrance-preview.card.bubble-garden
eyebrow: "02"
headline: "Bubble Garden"
descriptor: "Solare e giocosa."
primary_cta: "Scopri"
primary_cta_href: "/fragranze/bubble-garden"
secondary_cta: "Acquista"
secondary_cta_shopify_key: "productBubbleGarden"

### fragrance-preview.card.midnight-in-florence
eyebrow: "03"
headline: "Midnight in Florence"
descriptor: "Misteriosa e raffinata."
primary_cta: "Scopri"
primary_cta_href: "/fragranze/midnight-in-florence"
secondary_cta: "Acquista"
secondary_cta_shopify_key: "productMidnightFlorence"

## editorial-split (supply chain)
eyebrow: "Filiera"
headline: "Da Grasse a Perugia."
subhead: —
body: "Le essenze nascono fra le maison di Grasse, cuore storico della profumeria. La formula e l'imbottigliamento sono affidati ai Laboratori Sabatel di Perugia. La logistica parte da Fiano Romano. Una filiera breve, dichiarata, italo-francese."
primary_cta: "Leggi la storia"
secondary_cta: —
notes: "CTA porta a /visione sezione filiera. Body cita tre luoghi reali: brief.brand_facts.supply_chain. Nessun numero aggiunto."

## quiz-cta
eyebrow: —
headline: "Trova la tua fragranza."
subhead: "Cinque domande. Nessuna registrazione. Un profumo che ti somiglia."
primary_cta: "Inizia il quiz"
secondary_cta: —
notes: "CTA usa shopifyHref('quizStart'). Se il quiz non e ancora online, href resta #shopify-todo-quizStart (QA lo intercetta)."

## rivenditori-cta
eyebrow: —
headline: "Dove trovarci."
subhead: "Profumerie selettive e saloni partner in Italia."
primary_cta: "Vedi i rivenditori"
secondary_cta: "Diventa rivenditore"
notes: "Primary CTA porta a /rivenditori (lista pubblica). Secondary porta a /rivenditori#form. Distribuzione Italia: Roby Profumi (fact #4)."

## footer
tagline: "Extrait de parfum per capelli. Torino, dal 2025."
notes: "Vedi sezione 4 Global microcopy per nav, colonne e legali."

---

### FRAGRANCE DETAIL — `/fragranze/midnight-in-florence` (template di riferimento)

## fragrance-hero
eyebrow: "03 — Violet Collection"
headline: "Midnight in Florence"
subhead: "Misteriosa e raffinata. Una notte senza tempo fra le strade di Firenze."
primary_cta: "Acquista"
primary_cta_shopify_key: "productMidnightFlorence"
secondary_cta: "Vai allo shop"
secondary_cta_shopify_key: "storeRoot"
notes: "KenBurnsImage su product-midnight-florence-01.jpg. Hairline underline, nessun fill violet."

## notes-breakdown
eyebrow: "Piramide olfattiva"
headline: "Tre tempi."
subhead: —
notes: "Tre righe accordion (ServicesAccordion). Una per note di testa/cuore/fondo. Corpo breve, evocativo."

### notes-breakdown.testa
label: "Note di testa"
ingredient: "Iris"
body: "L'apertura polverosa e fredda. Iris fiorentino, l'icona della citta e della profumeria classica."

### notes-breakdown.cuore
label: "Note di cuore"
ingredient: "Incenso"
body: "Il fumo lento delle basiliche. Una resina sacra che tiene il profumo in sospensione."

### notes-breakdown.fondo
label: "Note di fondo"
ingredient: "Legni preziosi"
body: "Cedro, sandalo, un fondo scuro. Il profumo rimane sui capelli come una memoria urbana."

## story
eyebrow: "Storia"
headline: "Una notte in Oltrarno."
subhead: —
body: "Firenze dopo la chiusura dei musei. Le pietre ancora calde, le botteghe serrate, l'aria che sa di incenso e legno bagnato. Midnight in Florence nasce da questa oretta silenziosa fra Santa Croce e il fiume, e la porta sui capelli come una scia discreta."
primary_cta: —
secondary_cta: —
notes: "Body 49 parole — appena sopra cap 45, ammesso per editorial-long come da concept.md registro. Se builder vuole stringere a 45, togliere 'discreta'."

## product-gallery
eyebrow: "Dettagli"
headline: "Flacone e formati."
subhead: "50ml e 20ml. Unisex. Extrait de parfum al 20%."
notes: "KenBurnsImage su product-midnight-florence-02.jpg. Nessuna CTA: la gallery e informativa."

## shop-cta
eyebrow: —
headline: "Porta Midnight in Florence con te."
subhead: "Lo shop e gestito su Amioud Shopify. Checkout, spedizioni e resi restano li."
primary_cta: "Acquista"
primary_cta_shopify_key: "productMidnightFlorence"
secondary_cta: "Vai allo shop Amioud"
secondary_cta_shopify_key: "storeRoot"
notes: "Per shopify-handoff.md: 'Acquista' e label primaria per detail page."

## related-fragrances
eyebrow: —
headline: "Le altre due."
subhead: —
notes: "Due CutoutImage dei flaconi mancanti. Per questa pagina: Amber Dusk + Bubble Garden. Label sotto ogni flacone = nome fragranza, CTA = 'Scopri', porta a /fragranze/[slug]."

### related-fragrances.card.a (su pagina midnight-in-florence)
label: "Amber Dusk"
descriptor: "Avvolgente e sensuale."
cta: "Scopri"
href: "/fragranze/amber-dusk"

### related-fragrances.card.b (su pagina midnight-in-florence)
label: "Bubble Garden"
descriptor: "Solare e giocosa."
cta: "Scopri"
href: "/fragranze/bubble-garden"

---

### FRAGRANCE DETAIL — `/fragranze/amber-dusk`

## fragrance-hero
eyebrow: "01 — Violet Collection"
headline: "Amber Dusk"
subhead: "Avvolgente e sensuale. La quiete e il calore di un tramonto dorato."
primary_cta: "Acquista"
primary_cta_shopify_key: "productAmberDusk"
secondary_cta: "Vai allo shop"
secondary_cta_shopify_key: "storeRoot"

## notes-breakdown
eyebrow: "Piramide olfattiva"
headline: "Tre tempi."
subhead: —

### notes-breakdown.testa
label: "Note di testa"
ingredient: "Vaniglia"
body: "Un'apertura dolce, vicina alla pelle. Vaniglia pura, non zuccherata."

### notes-breakdown.cuore
label: "Note di cuore"
ingredient: "Lavanda"
body: "La lavanda provenzale smorza la dolcezza. Taglia pulito, fa ombra."

### notes-breakdown.fondo
label: "Note di fondo"
ingredient: "Ambra"
body: "Il fondo resinoso, caldo, persistente. Il tramonto che resta nei capelli per ore."

## story
eyebrow: "Storia"
headline: "L'ora d'oro."
subhead: —
body: "Il momento in cui la luce si abbassa e tutto diventa piu morbido. Amber Dusk e scritto per quella luce: una scia calda che si appoggia sui capelli e rimane come un ricordo del pomeriggio, senza mai diventare pesante."

## product-gallery
eyebrow: "Dettagli"
headline: "Flacone e formati."
subhead: "50ml e 20ml. Unisex. Extrait de parfum al 20%."

## shop-cta
eyebrow: —
headline: "Porta Amber Dusk con te."
subhead: "Lo shop e gestito su Amioud Shopify. Checkout, spedizioni e resi restano li."
primary_cta: "Acquista"
primary_cta_shopify_key: "productAmberDusk"
secondary_cta: "Vai allo shop Amioud"
secondary_cta_shopify_key: "storeRoot"

## related-fragrances
eyebrow: —
headline: "Le altre due."
subhead: —

### related-fragrances.card.a (su pagina amber-dusk)
label: "Bubble Garden"
descriptor: "Solare e giocosa."
cta: "Scopri"
href: "/fragranze/bubble-garden"

### related-fragrances.card.b (su pagina amber-dusk)
label: "Midnight in Florence"
descriptor: "Misteriosa e raffinata."
cta: "Scopri"
href: "/fragranze/midnight-in-florence"

---

### FRAGRANCE DETAIL — `/fragranze/bubble-garden`

## fragrance-hero
eyebrow: "02 — Violet Collection"
headline: "Bubble Garden"
subhead: "Solare e giocosa. Il giardino incantato fra gelsomino e muschi bianchi."
primary_cta: "Acquista"
primary_cta_shopify_key: "productBubbleGarden"
secondary_cta: "Vai allo shop"
secondary_cta_shopify_key: "storeRoot"

## notes-breakdown
eyebrow: "Piramide olfattiva"
headline: "Tre tempi."
subhead: —

### notes-breakdown.testa
label: "Note di testa"
ingredient: "Fiori freschi"
body: "Un'apertura luminosa e acquosa. I fiori appena colti, ancora bagnati di rugiada."

### notes-breakdown.cuore
label: "Note di cuore"
ingredient: "Gelsomino"
body: "Il gelsomino al centro. Pieno, caldo, ma sempre sottile. Il respiro del giardino a mezzogiorno."

### notes-breakdown.fondo
label: "Note di fondo"
ingredient: "Muschi bianchi"
body: "Un fondo pulito, cotonoso. Lascia la fragranza leggera sui capelli, senza coda pesante."

## story
eyebrow: "Storia"
headline: "Un giardino a mezzogiorno."
subhead: —
body: "La luce piena, le api al lavoro, il profumo del gelsomino che si apre al caldo. Bubble Garden e la versione olfattiva di quell'ora: gioia senza zucchero, leggerezza senza fretta. Il profumo che un capello sceglie quando vuole sorridere."

## product-gallery
eyebrow: "Dettagli"
headline: "Flacone e formati."
subhead: "50ml e 20ml. Unisex. Extrait de parfum al 20%."

## shop-cta
eyebrow: —
headline: "Porta Bubble Garden con te."
subhead: "Lo shop e gestito su Amioud Shopify. Checkout, spedizioni e resi restano li."
primary_cta: "Acquista"
primary_cta_shopify_key: "productBubbleGarden"
secondary_cta: "Vai allo shop Amioud"
secondary_cta_shopify_key: "storeRoot"

## related-fragrances
eyebrow: —
headline: "Le altre due."
subhead: —

### related-fragrances.card.a (su pagina bubble-garden)
label: "Amber Dusk"
descriptor: "Avvolgente e sensuale."
cta: "Scopri"
href: "/fragranze/amber-dusk"

### related-fragrances.card.b (su pagina bubble-garden)
label: "Midnight in Florence"
descriptor: "Misteriosa e raffinata."
cta: "Scopri"
href: "/fragranze/midnight-in-florence"

---

### `/shop` (placeholder bridge)

## shop-hero
eyebrow: —
headline: "Lo shop vive su Amioud Shopify."
subhead: "Checkout, spedizioni, resi e promozioni restano sulla piattaforma ufficiale. Da qui si arriva in un clic."
primary_cta: "Vai allo shop Amioud"
primary_cta_shopify_key: "storeRoot"
secondary_cta: —
notes: "Fino a quando Denis non compila shopify-links.ts, il bottone porta a #shopify-todo-storeRoot — visibile in dev tools, intercettabile in QA."

## shop-preview
eyebrow: "Violet Collection"
headline: "Le tre fragranze."
subhead: —
notes: "Tre tiles: una per SKU. Ciascuna CTA primary = 'Scopri' verso la detail interna; CTA secondaria = 'Acquista' verso Shopify per-SKU. Label committed qui sotto."

### shop-preview.tile.amber-dusk
label: "Amber Dusk"
descriptor: "Avvolgente e sensuale."
primary_cta: "Scopri"
primary_cta_href: "/fragranze/amber-dusk"
secondary_cta: "Acquista"
secondary_cta_shopify_key: "productAmberDusk"

### shop-preview.tile.bubble-garden
label: "Bubble Garden"
descriptor: "Solare e giocosa."
primary_cta: "Scopri"
primary_cta_href: "/fragranze/bubble-garden"
secondary_cta: "Acquista"
secondary_cta_shopify_key: "productBubbleGarden"

### shop-preview.tile.midnight-in-florence
label: "Midnight in Florence"
descriptor: "Misteriosa e raffinata."
primary_cta: "Scopri"
primary_cta_href: "/fragranze/midnight-in-florence"
secondary_cta: "Acquista"
secondary_cta_shopify_key: "productMidnightFlorence"

---

### `/rivenditori`

## rivenditori-hero
eyebrow: —
headline: "Dove trovare Amioud."
subhead: "Profumerie selettive e saloni partner, selezionati uno a uno. Distribuzione italiana curata da Roby Profumi."
primary_cta: "Diventa rivenditore"
secondary_cta: —
notes: "Primary CTA ancora a #form nella stessa pagina."

## rivenditori-list
eyebrow: "Partner"
headline: "Rete in crescita."
subhead: —
body: "L'elenco dei punti vendita e in aggiornamento costante. Per verificare la disponibilita presso una profumeria vicina, scrivere a info.amioud@gmail.com."
notes: "Lista puntini rivenditori e lasciata al builder; brief segnala lista thin. Body copre il gap senza fabbricare nomi."

## rivenditori-form
eyebrow: —
headline: "Diventa rivenditore."
subhead: "Profumerie selettive, saloni, concept store. Raccontaci il tuo spazio."
primary_cta: "Invia richiesta"
secondary_cta: —
notes: "Form labels in sezione 4. CTA label per form = 'Invia richiesta' per shopify-handoff.md."

---

### `/visione` (about / brand story long-form)

## visione-hero
eyebrow: "Visione"
headline: "Gioielleria della testa."
subhead: "Un profumo che non si indossa, si respira."
primary_cta: —
secondary_cta: —
notes: "Pull quote in Cormorant italic 300, come in hero home ma piu distesa (senza flacone sotto)."

## visione-origine
eyebrow: "Origine"
headline: "Diciotto mesi fra Grasse e Perugia."
subhead: —
body: "Aura Company nasce a Torino il 7 luglio 2025 per portare la profumeria artistica su un terreno che nessuno aveva ancora esplorato: i capelli. Diciotto mesi di lavoro fra le maison essenziere di Grasse e i Laboratori Sabatel di Perugia hanno prodotto una formula brevettata, un extrait al 20% pensato per la fibra capillare e non per la pelle."
notes: "Fatti: 7 luglio 2025 (brand_facts.founded), 18 mesi (stats.18+), Grasse e Perugia (supply_chain). Body 54 parole — ammesso per editorial-long."

## visione-filiera
eyebrow: "Filiera"
headline: "Quattro mani, quattro luoghi."
subhead: —
body: "Le essenze: maison di Grasse. La formula e l'imbottigliamento: Laboratori Sabatel, Perugia. Il packaging: Xuzhou S Moon Glass Products. La logistica: SAVE Logistica, Fiano Romano. La distribuzione italiana: Roby Profumi. Una filiera corta, dichiarata, verificabile."
notes: "Tutti i nomi citati sono in brand_facts.supply_chain. Nessuna invenzione."

## visione-formula
eyebrow: "Formula"
headline: "Extrait al 20%. Per i capelli, non per la pelle."
subhead: —
body: "La concentrazione al 20% e cio che definisce un extrait de parfum. Amioud e il primo al mondo a portarla sulla fibra capillare, in un vettore cosmetico studiato per non seccare il capello. Dentro: cheratina idrolizzata, olio di semi di lino, collagene. Brevetto depositato."
notes: "Tre principi attivi da brand_facts.products.active_ingredients. 'Primo al mondo' e positioning cliente (brand_facts.products.positioning) — va sempre legato a 'al 20% per capelli' per non sembrare vuoto."

## visione-founders
eyebrow: "Soci"
headline: "Due voci, una formula."
subhead: —
body: "Aura Company e guidata da Manuel Caputo (CEO) e Sveva Motteran (Product Manager). Manuel presidia strategia, filiera e relazioni commerciali; Sveva costruisce la piramide olfattiva e dialoga con laboratori e maison essenziere."
notes: "Founders bios verbatim condensato da brief.enriched_content.team. Se ritratto team-manuel-caputo e EMPTY per concept rejections, nascondere il blocco ritratti e tenere solo il body. NON sostituire con stock."

## visione-valori
eyebrow: —
headline: —
subhead: —
notes: "Marquee a scorrimento con i sei aggettivi del brand manual: 'ETEREO · ONIRICO · UNICO · LEGGEREZZA · SOGNO · FLOREALE'. Separatore middle-dot (·). Mai punteggiatura finale, mai frase attorno."

### visione-valori.marquee
text: "ETEREO · ONIRICO · UNICO · LEGGEREZZA · SOGNO · FLOREALE"

## 4. Global microcopy

Navigation items:
  - "Fragranze"
  - "Visione"
  - "Rivenditori"
  - "Shop"

Nav CTA: — (none — il Nav e minimal, no CTA button per concept.md nav-minimal variant)

Footer tagline: "Extrait de parfum per capelli. Torino, dal 2025."

Footer column headings:
  - "Fragranze"      (links: Amber Dusk, Bubble Garden, Midnight in Florence, Shop)
  - "Brand"          (links: Visione, Rivenditori)
  - "Contatti"       (email, social IG/FB/TikTok)
  - "Legale"         (links: Privacy, Cookie Policy)

Footer legal line: "Aura Company S.r.l. — Via Nicola Fabrizi 43, Torino — P.IVA IT13285940014 — Foro di Torino"
  (note: em dash sopra e deliberato — e una riga legale, non corpo testo editoriale; il trattino usato e il middle-dot. SE il builder preferisce, usare virgola semplice: "Aura Company S.r.l., Via Nicola Fabrizi 43 Torino, P.IVA IT13285940014, Foro di Torino." Equivalente, senza dash.)

Footer copyright: "© 2026 Aura Company S.r.l. Tutti i diritti riservati."

Footer social labels: "Instagram", "Facebook", "TikTok"  (no "Seguici su" intro)

Footer shop link label: "Shop"

404 headline: "Questa pagina non esiste."
404 subhead:  "La fragranza che cerchi e altrove."
404 CTA:      "Torna alla home"

Form labels (rivenditori):
  name:     "Nome e cognome"
  email:    "Email"
  business: "Nome dell'attivita"
  city:     "Citta"
  message:  "Raccontaci il tuo spazio"

Form placeholders: (none — labels e sufficiente)

Form errors:
  required:      "Campo richiesto."
  email_invalid: "Email non valida."
  too_short:     "Scrivi almeno una riga."

Form submit label:   "Invia richiesta"
Form loading label:  "Invio in corso..."
Form success:        "Grazie. Ti rispondiamo entro due giorni lavorativi."
Form failure:        "Qualcosa non ha funzionato. Scrivici a info.amioud@gmail.com."

Cookie banner (demo mode only):
  body: "Questo sito di anteprima usa solo cookie tecnici. Nessun tracciamento."
  cta:  "Ho capito"

Demo banner (demo mode only):
  body: "Anteprima non indicizzata. URL finale in corso di configurazione."

Privacy / Cookie Policy pages:
  placeholder_headline: "Informativa Privacy"
  placeholder_subhead:  "Documento in aggiornamento. Per richieste, scrivere a info.amioud@gmail.com."
  notes: "Copy-composer non scrive il testo legale. Builder inserisce boilerplate GDPR italiano o placeholder fino a revisione legale."

Quiz bridge (se il quiz Shopify non e ancora live):
  body: "Il quiz olfattivo e in corso di configurazione. Nel frattempo, scrivici a info.amioud@gmail.com: ti aiutiamo a scegliere la fragranza."
  notes: "Fallback copy quando shopifyLinks.quizStart e vuoto. Se builder vuole, puo nascondere la CTA quiz-cta dall'home per demo iniziale."

## 5. Brand factual claims

1. Primo Extrait de Parfum al mondo per capelli, brevetto depositato.
   source: brief.enriched_content.about + brand_facts.products.positioning + certifications[0]

2. Concentrazione al 20%.
   source: brief.enriched_content.stats[0] + brand_facts.products.concentration

3. Diciotto mesi di ricerca e sviluppo fra Grasse e Perugia.
   source: brief.enriched_content.stats[1] ("18+") — render come "diciotto mesi" o "oltre diciotto mesi" (non "18 mesi secchi") per tono editoriale

4. Filiera italo-francese dichiarata: Grasse (essenze), Perugia (Laboratori Sabatel), Fiano Romano (SAVE Logistica), distribuzione Italia Roby Profumi.
   source: brief.brand_facts.supply_chain

5. Aura Company S.r.l., fondata il 7 luglio 2025 a Torino da Manuel Caputo (CEO) e Sveva Motteran (Product Manager).
   source: brief.brand_facts.founded + legal_entity + founders

6. Principi attivi cosmetici pregiati: cheratina idrolizzata, olio di semi di lino, collagene.
   source: brief.brand_facts.products.active_ingredients + brief.enriched_content.about

Builder must surface at least 3 of these. Suggested placement:
- Fact 1 e 2 → hero home (claim + subhead)
- Fact 3 e 4 → editorial-split "Da Grasse a Perugia" + /visione-filiera
- Fact 5 → /visione-origine (founders) + footer legal
- Fact 6 → /visione-formula + eventualmente FAQ

No `[unverified]` tags applied — tutti e sei i fatti hanno sorgenti con confidence 1.0 in brief.json.

## 6. Rejections

- No "Scopri di piu" come CTA generica — usare il verbo specifico ("Scopri", "Leggi la storia", "Leggi la visione", "Inizia il quiz", "Vedi i rivenditori").
- No "Acquista ora", "Acquista subito", "Offerta", "Offerta imperdibile" — il CTA shop e "Acquista" secco (concept/brief vietano marketing pressure). Shopify handoff label committato = "Acquista" (primary) + "Vai allo shop" o "Vai allo shop Amioud" (secondary).
- No "Scopri la nostra gamma" / "Scopri la collezione" — template perfumery.
- No "Il primo profumo rivoluzionario" / "profumo all'avanguardia" / "innovativo" — brief vocabulary_dont. Usare "brevettato" quando serve novita.
- No "Contattaci", "Contattaci oggi", "Richiedi informazioni" — preferire verbi specifici ("Scrivi a info.amioud@gmail.com", "Invia richiesta").
- No "Shampoo profumato", "spray per capelli", "cosmetico" — brief lo vieta esplicitamente; usare "extrait de parfum per capelli".
- No "Esperienza unica", "Esperienza sensoriale", "Viaggio olfattivo", "Rituale sensoriale" — template perfumery da Tempio a Notino. Meglio nominare il profumo, la nota, il luogo.
- No aggettivi brand usati come slogan CTA o headline: niente "Cosa ONIRICA", "Profumo UNICO", "SOGNO che diventa realta", "Esperienza ETEREA". Gli aggettivi vivono solo nel marquee /visione in maiuscolo, separati da middle-dot.
- No domande retoriche come headline — voice quieto, dichiarativo, non conversazionale. ("Vuoi un profumo diverso?" out.)
- No "Made with love", "Made with passion", "Made with intention" — template beauty. Il brief usa "Made with intention" in values del live site: deliberately not ported.
- No "Noi crediamo", "La nostra missione", "La nostra passione", "Il team che fa la differenza" — brand is brand, non consulente.
- No em dash (—) e doppio trattino (--) in body/headline/subhead. Eccezioni: separatore in footer legal (virgola alternativa committata sopra) ed eyebrow della detail page ("01 — Violet Collection") — in quel caso l'em dash e tipografico intenzionale, singolo.
- No punto esclamativo mai, in nessuna copy, in nessuna pagina.
- No emoji inline in copy.
- No maiuscolo in body ("ETEREO" solo in marquee /visione e solo li).
- No prezzi in euro scritti in copy (cap e su /shop Shopify; brief.services mostra €21.50 scontato ma cambia, non committare cifre).
- No monologo prima persona Amioud ("Io nasco", "Io porto"). Soggetto = il profumo, l'extrait, la filiera, il flacone.
- No stock persone per Manuel Caputo / Sveva Motteran — da concept.md needs_denis. Se ritratti assenti, builder nasconde il blocco ritratti in visione-founders, tiene body.
- No lista prezzi / formati sulla home — spostata nella detail subhead ("50ml e 20ml").
- No cross-link "Sei anche un professionista?" o "Sei un salone?" — rivenditori CTA gia dedicato, niente duplicazione.
- No "Clicca qui", "Clicca per saperne di piu" — banned everywhere, always.
