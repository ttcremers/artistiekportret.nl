# Cloudflare Pages deployment

## Build settings

Use the Cloudflare Pages Hugo preset with:

- build command: `hugo -b $CF_PAGES_URL`
- build output directory: `public`
- environment variable: `HUGO_VERSION=0.154.5`

## Branch behavior

- production branch: `main`
- preview deployments: enabled for all non-production branches and pull requests

Cloudflare Pages uses branch deployment controls to manage production and preview deployments. The default setup is to deploy every commit to the production branch and to create preview deployments for other branches.

Set `HUGO_VERSION=0.154.5` in both the Production and Preview environments so both deployment types build with the same Hugo version.

## Caching and compression defaults

- `_headers` keeps HTML caching conservative so deploy updates remain easy to pick up.
- the source stylesheet URL stays conservative, while the fingerprinted CSS asset gets long-lived immutable caching.
- Cloudflare Pages already serves compatible content with Brotli and gzip compression, so no extra compression configuration is required for this site.

## Manual dashboard steps

1. Create or connect the Cloudflare Pages project to the GitHub repository.
2. Select the Hugo preset, or set the build command to `hugo -b $CF_PAGES_URL` and the output directory to `public`.
3. Set `HUGO_VERSION=0.154.5` in both the Production and Preview environment variables.
4. Set the production branch to `main`.
5. Leave preview deployments enabled for all non-production branches.
6. Add the custom domain later, once DNS access is available.
7. Keep the cache headers simple unless a concrete performance problem appears.

## Notes

- No extra repository-specific build script is required for the current setup.
- If Cloudflare Pages settings ever need to vary by branch, use the dashboard branch deployment controls rather than hard-coding environment-specific behavior into the repository.
