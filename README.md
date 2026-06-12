# artistiekportret.nl

A calm, carefully crafted website for **Theodoor Thomas** and his artistic portrait work in The Hague.

The public site will be built as a lightweight static website with Hugo and deployed through Cloudflare Pages. The first goal is not a feature-rich platform, but a clear and welcoming digital front door: fast, accessible, image-led and easy to find.

## Local development

Run the Hugo development server through Docker from the repository root:

```powershell
make dev
```

## Production build

Build the static site through Docker from the repository root:

```powershell
make build
```

## Cloudflare Pages

Cloudflare Pages should use the Hugo preset with these settings:

- preview build command: `hugo -b $CF_PAGES_URL`
- production build command: `hugo -b $PUBLIC_BASE_URL`
- build output directory: `public`
- production branch: `main`
- preview deployments: all non-production branches and pull requests
- environment variable: `HUGO_VERSION=0.154.5` in both Production and Preview
- environment variable: `PUBLIC_BASE_URL=https://artistiekportret.nl/` in Production only
- local Docker image: `hugomods/hugo:exts-0.154.5`

See [Cloudflare Pages deployment](docs/cloudflare-pages.md) for the manual dashboard steps.

## Positioning

**Artistieke portretfotografie in Den Haag**

The work sits between a photographic session and a painted portrait. The offer is not merely a set of files, but a personal portrait shaped by attention, atmosphere and interpretation. A session may result in a carefully selected portrait series, an extensively developed image, or a finished physical artwork with print and frame.

## Project documentation

- [Current project direction](docs/current-project-direction.md)
- [Vision](docs/vision.md)
- [Audience](docs/audience.md)
- [Design direction](docs/design-direction.md)
- [Foundational design tokens](docs/design-tokens.md)
- [Content plan](docs/content-plan.md)
- [Architecture](docs/architecture.md)
- [Cloudflare Pages deployment](docs/cloudflare-pages.md)
- [Domain cutover operator checklist](docs/domain-cutover.md)
- [Google Search Console launch notes](docs/search-console.md)
- [Roadmap](docs/roadmap.md)

## Working method

Read [`AGENTS.md`](AGENTS.md) and [Current project direction](docs/current-project-direction.md) before making changes. Work in small, reviewable pull requests. Keep the public site simple until a real need justifies additional complexity.
