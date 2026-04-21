import type { ShopifyKey } from './shopify-links';

/**
 * Violet Collection — three fragrances.
 * Copy verbatim from copy.md §3 (fragrance-preview, fragrance-detail, notes-breakdown, story, shop-cta).
 * Image paths from asset-manifest.json (all `manual` and `client-website` sources
 * already on disk in public/images/).
 */
export interface NoteRow {
  label: string;       // "Note di testa"
  ingredient: string;  // "Iris"
  body: string;        // short editorial sentence — italic 300 mood preserved in component
}

export interface Fragrance {
  slug: 'amber-dusk' | 'bubble-garden' | 'midnight-in-florence';
  eyebrow: string;                 // "01 — Violet Collection"
  number: string;                  // "01"
  name: string;                    // "Amber Dusk"
  mood: string;                    // "Avvolgente e sensuale."
  heroSubhead: string;             // detail-page hero sub tagline
  previewImage: string;            // staggered preview card image (PNG, transparent background usable)
  heroImage: string;               // detail page fragrance-hero image
  notesImage: string;              // ingredient still-life
  galleryImages: string[];         // product-gallery
  storyHeadline: string;
  storyBody: string;
  shopHeadline: string;            // "Porta Amber Dusk con te."
  shopSubhead: string;
  shopifyKey: ShopifyKey;          // productAmberDusk / Bubble / Midnight
  notes: NoteRow[];
  /* Price chip shown on home shop-discovery block and shop preview tiles.
     Format: Italian convention, euro, two decimals with comma.
     Source: placeholder 85,00 EUR per revise-brief P1(4) — update when Shopify catalog
     confirms real prices. Copy.md §6 forbids euro figures in long-form copy but the
     chip is a product-discovery affordance, not editorial prose. */
  price: string;                   // "€ 85,00"
}

export const fragrances: Fragrance[] = [
  {
    slug: 'amber-dusk',
    eyebrow: '01 — Violet Collection',
    number: '01',
    name: 'Amber Dusk',
    mood: 'Avvolgente e sensuale.',
    heroSubhead: 'Avvolgente e sensuale. La quiete e il calore di un tramonto dorato.',
    previewImage: '/images/fragrance-preview-amber-dusk.png',
    heroImage:    '/images/fragrance-hero-amber-dusk.jpg',
    notesImage:   '/images/fragrance-notes-amber-dusk.jpg',
    galleryImages: [
      '/images/product-gallery-amber-dusk-02.png',
      '/images/product-gallery-amber-dusk-03.png',
    ],
    storyHeadline: 'L\u2019ora d\u2019oro.',
    storyBody:
      'Il momento in cui la luce si abbassa e tutto diventa più morbido. Amber Dusk è scritto per quella luce: una scia calda che si appoggia sui capelli e rimane come un ricordo del pomeriggio, senza mai diventare pesante.',
    shopHeadline: 'Porta Amber Dusk con te.',
    shopSubhead:  'Lo shop è gestito su Amioud Shopify. Checkout, spedizioni e resi restano lì.',
    shopifyKey: 'productAmberDusk',
    price: '\u20AC 85,00',
    notes: [
      {
        label: 'Note di testa',
        ingredient: 'Vaniglia',
        body: 'Un\u2019apertura dolce, vicina alla pelle. Vaniglia pura, non zuccherata.',
      },
      {
        label: 'Note di cuore',
        ingredient: 'Lavanda',
        body: 'La lavanda provenzale smorza la dolcezza. Taglia pulito, fa ombra.',
      },
      {
        label: 'Note di fondo',
        ingredient: 'Ambra',
        body: 'Il fondo resinoso, caldo, persistente. Il tramonto che resta nei capelli per ore.',
      },
    ],
  },
  {
    slug: 'bubble-garden',
    eyebrow: '02 — Violet Collection',
    number: '02',
    name: 'Bubble Garden',
    mood: 'Solare e giocosa.',
    heroSubhead: 'Solare e giocosa. Il giardino incantato fra gelsomino e muschi bianchi.',
    previewImage: '/images/fragrance-preview-bubble-garden.png',
    heroImage:    '/images/fragrance-hero-bubble-garden.jpg',
    notesImage:   '/images/fragrance-notes-bubble-garden.jpg',
    galleryImages: [
      '/images/product-gallery-bubble-garden-02.png',
      '/images/product-gallery-bubble-garden-03.png',
    ],
    storyHeadline: 'Un giardino a mezzogiorno.',
    storyBody:
      'La luce piena, le api al lavoro, il profumo del gelsomino che si apre al caldo. Bubble Garden è la versione olfattiva di quell\u2019ora: gioia senza zucchero, leggerezza senza fretta. Il profumo che un capello sceglie quando vuole sorridere.',
    shopHeadline: 'Porta Bubble Garden con te.',
    shopSubhead:  'Lo shop è gestito su Amioud Shopify. Checkout, spedizioni e resi restano lì.',
    shopifyKey: 'productBubbleGarden',
    price: '\u20AC 85,00',
    notes: [
      {
        label: 'Note di testa',
        ingredient: 'Fiori freschi',
        body: 'Un\u2019apertura luminosa e acquosa. I fiori appena colti, ancora bagnati di rugiada.',
      },
      {
        label: 'Note di cuore',
        ingredient: 'Gelsomino',
        body: 'Il gelsomino al centro. Pieno, caldo, ma sempre sottile. Il respiro del giardino a mezzogiorno.',
      },
      {
        label: 'Note di fondo',
        ingredient: 'Muschi bianchi',
        body: 'Un fondo pulito, cotonoso. Lascia la fragranza leggera sui capelli, senza coda pesante.',
      },
    ],
  },
  {
    slug: 'midnight-in-florence',
    eyebrow: '03 — Violet Collection',
    number: '03',
    name: 'Midnight in Florence',
    mood: 'Misteriosa e raffinata.',
    heroSubhead: 'Misteriosa e raffinata. Una notte senza tempo fra le strade di Firenze.',
    previewImage: '/images/fragrance-preview-midnight-florence.png',
    heroImage:    '/images/fragrance-hero-midnight-florence.jpg',
    notesImage:   '/images/fragrance-notes-midnight-florence.jpg',
    galleryImages: [
      '/images/product-gallery-midnight-florence-02.png',
      '/images/product-gallery-midnight-florence-03.png',
    ],
    storyHeadline: 'Una notte in Oltrarno.',
    storyBody:
      'Firenze dopo la chiusura dei musei. Le pietre ancora calde, le botteghe serrate, l\u2019aria che sa di incenso e legno bagnato. Midnight in Florence nasce da questa oretta silenziosa fra Santa Croce e il fiume, e la porta sui capelli come una scia discreta.',
    shopHeadline: 'Porta Midnight in Florence con te.',
    shopSubhead:  'Lo shop è gestito su Amioud Shopify. Checkout, spedizioni e resi restano lì.',
    shopifyKey: 'productMidnightFlorence',
    price: '\u20AC 85,00',
    notes: [
      {
        label: 'Note di testa',
        ingredient: 'Iris',
        body: 'L\u2019apertura polverosa e fredda. Iris fiorentino, l\u2019icona della città e della profumeria classica.',
      },
      {
        label: 'Note di cuore',
        ingredient: 'Incenso',
        body: 'Il fumo lento delle basiliche. Una resina sacra che tiene il profumo in sospensione.',
      },
      {
        label: 'Note di fondo',
        ingredient: 'Legni preziosi',
        body: 'Cedro, sandalo, un fondo scuro. Il profumo rimane sui capelli come una memoria urbana.',
      },
    ],
  },
];

export function fragranceBySlug(slug: string): Fragrance | undefined {
  return fragrances.find((f) => f.slug === slug);
}

export function otherFragrances(slug: string): Fragrance[] {
  return fragrances.filter((f) => f.slug !== slug);
}
