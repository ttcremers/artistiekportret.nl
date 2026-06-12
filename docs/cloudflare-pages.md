# Cloudflare Pages deployment

## Build settings

Use the Cloudflare Pages Hugo preset with:

- build output directory: `public`
- environment variable: `HUGO_VERSION=0.154.5`

Use this build command for preview deployments:

```text
hugo -b $CF_PAGES_URL
```

Use this build command for the production deployment:

```text
hugo -b $PUBLIC_BASE_URL
```

Set this variable only in the Production environment:

```text
PUBLIC_BASE_URL=https://artistiekportret.nl/
```

The public base URL matters because Hugo uses it when generating absolute URLs in `sitemap.xml`.

## Branch behavior

- production branch: `main`
- preview deployments: enabled for all non-production branches and pull requests

Set `HUGO_VERSION=0.154.5` in both the Production and Preview environments so both deployment types build with the same Hugo version.

## Caching and compression defaults

- `_headers` keeps HTML caching conservative so deploy updates remain easy to pick up.
- the source stylesheet URL stays conservative, while the fingerprinted CSS asset gets long-lived immutable caching.
- Cloudflare Pages already serves compatible content with Brotli and gzip compression, so no extra compression configuration is required for this site.

## Manual dashboard steps

1. Create or connect the Cloudflare Pages project to the GitHub repository.
2. Set the preview build command to `hugo -b $CF_PAGES_URL`.
3. Set the production build command to `hugo -b $PUBLIC_BASE_URL`.
4. Set `HUGO_VERSION=0.154.5` in both environments.
5. Set `PUBLIC_BASE_URL=https://artistiekportret.nl/` only in Production.
6. Set the production branch to `main`.
7. Leave preview deployments enabled for all non-production branches.
8. Use the [domain cutover operator checklist](domain-cutover.md) when the public domain can be connected.

## Search discovery

After the custom domain is live, follow [Google Search Console launch notes](search-console.md).
