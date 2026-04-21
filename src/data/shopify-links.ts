/**
 * Shopify handoff convention — see shopify-handoff.md.
 * Populate each value with the real Shopify URL before production.
 * Until filled, every transactional CTA renders as `#shopify-todo-<key>`,
 * visible in dev tools and obvious in QA.
 */
export const shopifyLinks = {
  storeRoot:               '', // TODO: https://amioud.com/ (current Shopify root)
  productAmberDusk:        '', // TODO: https://amioud.com/products/amber-dusk
  productBubbleGarden:     '', // TODO: https://amioud.com/products/bubble-garden
  productMidnightFlorence: '', // TODO: https://amioud.com/products/midnight-in-florence
  quizStart:               '', // TODO: https://amioud.com/pages/quiz OR external
  rivenditoriForm:         '', // TODO: https://amioud.com/pages/rivenditori (form URL)
} as const;

export type ShopifyKey = keyof typeof shopifyLinks;

export function shopifyHref(key: ShopifyKey): string {
  const v = shopifyLinks[key];
  if (!v) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn(`[shopify-links] Missing URL for "${key}" — rendering placeholder.`);
    }
    return `#shopify-todo-${key}`;
  }
  return v;
}
