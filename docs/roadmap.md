# Roadmap

## Guiding principle

Build the public front door first. Add complexity only when the work itself asks for it.

## Milestone 1: Het atelier openen

Create a clear, calm and technically solid public website.

### Foundation

- scaffold Hugo
- configure Cloudflare Pages deployment
- connect `artistiekportret.nl`
- create the initial content structure
- define typography, colors and spacing

### Pages

- homepage
- Portretten
- Werkwijze
- Autonoom werk
- Over mij
- Contact

### Media and performance

- responsive image pipeline
- modern formats where useful
- explicit dimensions
- lazy loading below the fold
- sensible caching headers
- mobile performance checks

### Search and sharing

- page titles and descriptions
- canonical URLs
- sitemap
- `robots.txt`
- Open Graph cards
- structured data
- Google Search Console registration

## Milestone 2: Frictie verlagen

Improve the experience for visitors who may be interested but hesitant.

Possible additions:

- a calm intake form
- an appointment request flow
- privacy-friendly analytics
- audience-specific landing pages
- clearer information about prints and framing
- an English layer where useful

## Milestone 3: Alleen bouwen wanneer klanten erom vragen

Use the VPS and Symfony only when there is a real operational need.

Possible additions:

- private customer galleries
- customer login
- image selection
- digital delivery
- print and framing choices
- quotation or order support
- payments

## Guardrail

Do not build milestone 3 features during milestone 1 merely because they may be interesting later. The first success criterion is a compelling, findable and fast public website.
