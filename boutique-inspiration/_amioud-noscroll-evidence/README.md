# Amioud — no-scroll paint evidence

Captured 2026-04-21 at 1440x900, full page.

- `amioud-home-with-scroll.jpg` — full page after scripted end-to-end scroll; every ClipMaskReveal ScrollTrigger has fired. Real-user view.
- `amioud-home-no-scroll.jpg` — full page captured immediately after `networkidle` + 1500ms, no scroll. Bot / crawler / screenshot-tool view.

Diff = below-fold ClipMaskReveal sections never un-clip. See `revise-brief.md` §2(B), §3(B), §4(P0-2).

Reproduction scripts: `tools/screenshot-refs/diag.mjs` (with scroll), `tools/screenshot-refs/diag-noscroll.mjs` (no scroll).
