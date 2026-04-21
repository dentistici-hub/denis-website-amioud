import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap-init';

/* Amioud scroll-animations.
   Micro-timings from motion-plan.md §7:
     - fade-up body paragraphs: 700ms / power2.out / stagger 60ms
     - fade-up staggered elements inside a single parent: 60ms gap
   Reduced-motion: everything renders in final state immediately. */

if (!prefersReducedMotion) {
  // Individual fade-ups — one element, 700ms power2.out, triggered on viewport enter
  document.querySelectorAll('[data-animate="fade-up"]').forEach((el) => {
    const htmlEl = el as HTMLElement;
    htmlEl.style.visibility = 'visible';
    gsap.from(htmlEl, {
      opacity: 0,
      y: 24,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: htmlEl,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // Grouped fade-ups with 60ms internal stagger — use [data-animate-group="fade-up"]
  // on the parent, and each child is staggered in on viewport entry.
  document.querySelectorAll('[data-animate-group="fade-up"]').forEach((parent) => {
    const children = Array.from(parent.children) as HTMLElement[];
    children.forEach((c) => { c.style.visibility = 'visible'; });
    gsap.from(children, {
      opacity: 0,
      y: 24,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.06,
      scrollTrigger: {
        trigger: parent as HTMLElement,
        start: 'top 85%',
        once: true,
      },
    });
  });

  ScrollTrigger.refresh();

  // No-scroll failsafe: 2.5s after init, force every un-fired ScrollTrigger
  // to its end state. Handles bots, crawlers, screenshot tools, users who
  // never scroll, and hash-link jumps past triggers. Real users scrolling
  // hit triggers long before this runs.
  setTimeout(() => {
    ScrollTrigger.getAll().forEach((st) => {
      if (st.progress === 0 && !st.isActive) {
        const anim = st.animation;
        if (anim) anim.progress(1);
      }
    });
    // Belt+braces: flip visibility on any element whose tween somehow missed.
    document.querySelectorAll('[data-animate], [data-animate-group] > *').forEach((el) => {
      const h = el as HTMLElement;
      if (h.style.visibility !== 'visible') {
        h.style.visibility = 'visible';
      }
    });
  }, 2500);
} else {
  // Reduced-motion — flip visibility, no animation
  document.querySelectorAll('[data-animate], [data-animate-group]').forEach((el) => {
    (el as HTMLElement).style.visibility = 'visible';
    Array.from(el.children).forEach((c) => {
      (c as HTMLElement).style.visibility = 'visible';
    });
  });
}
