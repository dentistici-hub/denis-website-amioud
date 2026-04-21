# Shopify handoff — Amioud

The current amioud.com is a Shopify template. This new static site
replaces the brand/editorial layer but **all transactional actions stay
on Shopify**: cart, checkout, account, inventory, promo codes.

Every CTA that previously led to cart/checkout/product-on-Shopify needs
to become a placeholder link here. Denis swaps the real URLs in after
the build.

---

## Convention

All Shopify URLs live in **one file**: `src/data/shopify-links.ts`.

```ts
// src/data/shopify-links.ts
// Populate each value with the real Shopify URL before production.
// Builder scaffolds this file with empty strings + TODO comments.

export const shopifyLinks = {
  storeRoot:            '', // TODO: https://amioud.com/ (current Shopify root)
  productAmberDusk:     '', // TODO: https://amioud.com/products/amber-dusk
  productBubbleGarden:  '', // TODO: https://amioud.com/products/bubble-garden
  productMidnightFlorence: '', // TODO: https://amioud.com/products/midnight-in-florence
  quizStart:            '', // TODO: https://amioud.com/pages/quiz OR external
  rivenditoriForm:      '', // TODO: https://amioud.com/pages/rivenditori (form URL)
} as const;

export function shopifyHref(key: keyof typeof shopifyLinks): string {
  const v = shopifyLinks[key];
  if (!v) {
    if (import.meta.env.DEV) {
      console.warn(`[shopify-links] Missing URL for ${key}`);
    }
    return '#shopify-todo-' + key;
  }
  return v;
}
```

Every CTA in the site imports from this file. Example:

```astro
---
import { shopifyHref } from '@/data/shopify-links';
---
<a href={shopifyHref('productAmberDusk')} class="cta">Acquista</a>
```

Until Denis fills in `shopify-links.ts`, every transactional button
renders as `href="#shopify-todo-<key>"` — visible in dev tools, harmless
in production but obviously broken, impossible to miss at QA.

---

## Handoff points (exhaustive)

| Where on the new site | CTA label (IT) | Shopify link key | Target page on Shopify |
|---|---|---|---|
| Home — each fragrance-preview card | `Scopri` (primary) | (internal) | → our `/fragranze/[slug]` |
| Home — each fragrance-preview card | `Acquista` (secondary, optional) | `productAmberDusk` etc. | product page |
| Home — hero CTA | `Esplora` (primary) | (internal) | → our `/visione` or scroll |
| Home — quiz CTA block | `Trova la tua fragranza` | `quizStart` | Shopify quiz page |
| Home — rivenditori CTA block | `Diventa rivenditore` | (internal) | → our `/rivenditori` |
| `/fragranze/[slug]` — primary product CTA | `Acquista` | `productAmberDusk` / `productBubbleGarden` / `productMidnightFlorence` | Shopify product page for that SKU |
| `/fragranze/[slug]` — secondary CTA | `Vai allo shop` | `storeRoot` | Shopify root |
| `/shop` — the whole page is a bridge | `Vai allo shop Amioud` | `storeRoot` | Shopify root |
| `/shop` — per-SKU preview tiles (if present) | `Acquista` | per-SKU key | Shopify product page |
| `/rivenditori` — form CTA | `Invia richiesta` | `rivenditoriForm` OR internal `<form action>` | wherever Denis prefers |
| Navbar | `Shop` | `storeRoot` | Shopify root |
| Footer | `Shop`, `Prodotti` | `storeRoot` | Shopify root |

---

## `/shop` page content

This page is NOT an attempt to recreate the Shopify catalog. It's a
bridge/handshake page designed to:

1. Present the three fragrances at a glance (one card each, linking to
   our `/fragranze/[slug]` detail pages — NOT to Shopify yet)
2. One prominent CTA `Vai allo shop Amioud` → `shopifyLinks.storeRoot`
3. Short copy explaining "lo shop è gestito su Amioud Shopify" so
   visitors don't think the new site itself is broken

Copy-composer will commit the exact headline / body / CTA labels.

---

## What does NOT move through this file

- Internal navigation links — `/fragranze/[slug]`, `/rivenditori`,
  `/visione`, `/privacy`, `/cookie-policy`, etc. Use plain Astro
  `<a href="/fragranze/amber-dusk">` or `Astro.url.pathname`-based nav.
- Email / WhatsApp / phone links — these are `mailto:` / `tel:`
  literals, no Shopify involvement.
- Image sources — use the asset pipeline (scraped-assets,
  manual-assets, public/images).

---

## QA checklist (for when Denis swaps real URLs in)

Before production:
- [ ] Populate all six keys in `src/data/shopify-links.ts`
- [ ] `grep -r "shopify-todo-" dist/` returns zero matches after build
- [ ] Open each CTA in a new tab, confirm it lands on the expected
      Shopify page
- [ ] If Shopify store has its own domain (e.g. shop.amioud.com), make
      sure `rel="noopener"` is on every outbound link
- [ ] Analytics: if Shopify has its own tracking, confirm there's no
      double-counting on the outbound event vs Shopify's inbound event
