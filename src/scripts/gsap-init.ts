import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* Amioud motion register — quiet editorial.
   Defaults per motion-plan.md §7: body fades use power2.out / 700ms.
   Signature clip-reveals use expo.out / 900ms with local override. */
gsap.defaults({
  ease: 'power2.out',
  duration: 0.7,
});

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  gsap.globalTimeline.timeScale(100);
}

export { gsap, ScrollTrigger, prefersReducedMotion };
