# Current project direction

This note records the current implementation contract for `artistiekportret.nl`.

Use it together with `AGENTS.md` before changing structure, visual language or launch behavior.

## Product position

`artistiekportret.nl` is the commercial front door for the artistic portrait work of **Theodoor Thomas** in The Hague.

Primary positioning:

```text
Artistieke portretfotografie in Den Haag
```

The offer sits between a photographic session and a painted portrait. The site should communicate attention, atmosphere, calm collaboration and a finished image with presence.

## Visual contract

The versioned styleguide is the reference for visual changes:

- `styleguide/README.md`
- `styleguide/index.html`
- `styleguide/style-guide.html`
- `styleguide/styles.css`
- `styleguide/poster-tweaks.css`

The approved direction is a quiet contemporary gallery room:

- warm mineral background
- near-black text
- restrained yellow-gold accent
- thin architectural rules
- square-edged images
- editorial asymmetry
- breathing room
- one controlled authored gesture rather than many decorative effects

Avoid:

- rounded card parades
- nested panels
- heavy shadows
- glossy photography-site patterns
- autoplay
- cursor-only interactions
- generic package-driven studio language

## Current public routes

Core routes:

- `/`
- `/portretten/`
- `/werkwijze/`
- `/autonoom-werk/`
- `/over-mij/`
- `/contact/`

Audience routes:

- `/voor-auteurs/`
- `/voor-uitgevers/`
- `/voor-makers/`
- `/liever-niet-op-de-foto/`

The audience pages are real visitor pages. They should remain distinct and useful rather than becoming thin search-engine variants.

## Technical foundation now in place

- Hugo static-site structure
- Cloudflare Pages deployment guidance
- versioned styleguide and homepage prototype
- local portrait source assets
- responsive WebP output with JPEG fallback
- explicit image dimensions
- eager hero loading and lazy below-the-fold loading
- portrait gallery with lightbox behavior
- canonical metadata
- Open Graph and Twitter-card metadata
- local hero image as the default sharing image
- conservative schema.org metadata
- `robots.txt`
- Hugo sitemap support
- Search Console launch checklist

## Remaining implementation order

1. Run accessibility, mobile and performance QA.
2. Fix straightforward QA findings in small branches.
3. Refine core copy and audience-page copy with Tommy.
4. Select or explicitly defer remaining archive images and framed-work photography.
5. Connect the public domain and verify HTTPS.
6. Complete the first public launch checklist.

## Manual owner checkpoints

Tommy still needs to decide or perform:

- final public contact address
- final wording approval
- remaining archive selections
- framed-work photograph or explicit deferral
- registrar and Cloudflare dashboard changes
- Search Console verification after the domain is live
- final launch approval

## Working cycle

- start from the latest `main`
- use a short-lived branch
- keep changes small and reviewable
- perform a critical self-review
- record newly discovered work as issues
- rebase onto the latest `main` before merge
- squash merge completed pull requests
- leave manual or live-environment work as explicit checkpoints rather than hiding it in implementation PRs
