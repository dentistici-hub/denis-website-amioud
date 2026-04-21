import type { SiteConfig, NavLink, SchemaConfig, FAQ } from '@components/types/content';

/* Site config — Amioud.
   Facts verbatim from brief.json.brand_facts + analysis.json.
   Legal entity: Aura Company S.r.l., VAT IT13285940014,
   Via Nicola Fabrizi 43, 10143 Torino — Foro di Torino. */
export const site: SiteConfig = {
  name: 'Amioud',
  tagline: 'Il primo Extrait de Parfum al mondo per capelli.',
  description:
    'Amioud — extrait de parfum per capelli al 20%. Violet Collection: Amber Dusk, Bubble Garden, Midnight in Florence. Progetto di Aura Company, Torino. Filiera fra Grasse e Perugia.',
  url: 'https://dentistici-hub.github.io/denis-website-amioud',
  language: 'it',
  lastUpdated: '2026-04-21',
  contact: {
    email: 'info.amioud@gmail.com',
    address: 'Via Nicola Fabrizi 43',
    city: 'Torino',
    country: 'IT',
    lat: 45.0703,
    lng: 7.6869,
  },
  social: {
    instagram: 'https://www.instagram.com/amioudofficial/',
    facebook: 'https://www.facebook.com/amioudofficial',
    tiktok:   'https://www.tiktok.com/@amioudofficial',
  },
};

/* Nav — single-word labels per type-system.md §6 copy-length guardrails.
   CTA banned on Nav (nav-minimal variant per brief).
   Shop (3) affordance (revise-brief P1(6)): the "(3)" is the static fragrance
   count, a conversion-hint hybrid of item-count chip + quiet text link. It is
   NOT a real cart counter (no cart backend on this bridge site). The numeral
   shares the same Inter 600 uppercase letter-spaced treatment as the rest of
   the nav — no second chrome. Shop is kept as the LAST nav item per brief. */
export const nav: NavLink[] = [
  { label: 'Fragranze',    href: '/fragranze/amber-dusk' },
  { label: 'Visione',      href: '/visione' },
  { label: 'Rivenditori',  href: '/rivenditori' },
  { label: 'Shop (3)',     href: '/shop' },
];

/* FAQ — surfaced in schema only; copy verbatim from brief.json.enriched_content.faq_pairs */
export const faqs: FAQ[] = [
  {
    question: 'Qual è la differenza tra un profumo per capelli Amioud e un profumo classico per la pelle?',
    answer:
      'Amioud è un Extrait de Parfum al 20% formulato specificamente per i capelli, non per la pelle. A differenza dei profumi tradizionali, la formula Amioud contiene principi attivi cosmetici pregiati — cheratina idrolizzata, olio di semi di lino e collagene — che rinforzano e proteggono la fibra capillare mentre rilasciano la fragranza. È il primo extrait de parfum al mondo pensato esplicitamente per l\u2019hair care, protetto da brevetto depositato.',
  },
  {
    question: 'Quali sono le fragranze della Violet Collection Amioud?',
    answer:
      'La Violet Collection comprende tre extrait de parfum per capelli, tutti unisex. Amber Dusk costruisce un mood avvolgente e sensuale su note di vaniglia, lavanda e ambra. Bubble Garden è solare e giocosa, con note floreali fresche, gelsomino e muschi bianchi. Midnight in Florence è misteriosa e raffinata, con iris, incenso e legni preziosi.',
  },
  {
    question: 'Dove viene prodotto Amioud e chi c\u2019è dietro il brand?',
    answer:
      'Amioud è il brand di Aura Company S.r.l., società fondata a Torino il 7 luglio 2025 dai soci Manuel Caputo (CEO) e Sveva Motteran (Product Manager). Le essenze provengono dalle maison di Grasse, la formula e l\u2019imbottigliamento sono curati dai Laboratori Sabatel di Perugia, la logistica è gestita da SAVE Logistica a Fiano Romano. La distribuzione fisica in Italia è curata da Roby Profumi.',
  },
  {
    question: 'Come capisco quale fragranza Amioud è adatta a me?',
    answer:
      'Sul sito è disponibile un quiz gratuito di cinque domande, senza registrazione, che abbina il cliente alla fragranza più affine al proprio mood olfattivo. È inoltre possibile iniziare con il formato da 20ml, pensato come primo approccio al brand, con la stessa concentrazione al 20% e la stessa identità grafica del formato da 50ml.',
  },
];

/* Schema — Organization + FAQPage; no aggregateRating (brand <1 year, no reviews). */
export const schema: SchemaConfig = {
  type: 'Organization',
  faqs,
};

/* Legal entity line used by FooterColumns + /privacy + /cookie-policy */
export const legalLine =
  'Aura Company S.r.l., Via Nicola Fabrizi 43 Torino, P.IVA IT13285940014, Foro di Torino.';

export const legalCopyright = '© 2026 Aura Company S.r.l. Tutti i diritti riservati.';

export const footerTagline = 'Extrait de parfum per capelli. Torino, dal 2025.';
