# AGENTS.md

This repository contains the public website for **artistiekportret.nl**.

Use the user's general workbench rules as the default working method. This file adds project-specific guidance.

## Read first

Before making product, design or architecture decisions, read:

- `docs/vision.md`
- `docs/audience.md`
- `docs/design-direction.md`
- `docs/content-plan.md`
- `docs/architecture.md`
- `docs/roadmap.md`

## Product direction

- This is the commercial front door for the artistic portrait work of **Theodoor Thomas** in The Hague.
- Primary positioning: **Artistieke portretfotografie in Den Haag**.
- The work lives between a photographic session and a painted portrait.
- Sell creativity, attention, atmosphere and interpretation, not generic photoshoot packages.
- Dutch is the primary language. Add an English layer only when explicitly requested.

## Visual direction

- Aim for a quiet, modern atelier rather than a generic photography studio.
- Use generous whitespace, warm off-white backgrounds, near-black text and restrained muted accents.
- Prefer elegant serif headings and practical sans-serif body text.
- Let images breathe. Avoid autoplay carousels, busy animation and glossy photography-site clichés.
- Show physical presentation where useful: print, paper and framing are part of the offer.

## Technical direction

- Build the public site as a Hugo static site.
- Deploy the public site through Cloudflare Pages.
- Optimize images responsively and keep performance excellent.
- Include SEO basics, Open Graph cards, canonical URLs, sitemap support and structured data where appropriate.
- Keep future Symfony/VPS functionality out of scope unless explicitly requested.
- Potential future dynamic functionality belongs behind separate subdomains such as `klanten.artistiekportret.nl`.

## Working style

- Keep changes small and reviewable.
- Do not commit or push directly to `main`.
- Use short-lived branches.
- Prefer straightforward solutions over premature complexity.
- Ask for clarification before making product decisions that could materially affect tone, structure or visual direction.
