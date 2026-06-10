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

## Manual dashboard steps

1. Create or connect the Cloudflare Pages project to the GitHub repository.
2. Select the Hugo preset, or set the build command to `hugo -b $CF_PAGES_URL` and the output directory to `public`.
3. Set `HUGO_VERSION=0.154.5` in both the Production and Preview environment variables.
4. Set the production branch to `main`.
5. Leave preview deployments enabled for all non-production branches.
6. Add the custom domain later, once DNS access is available.

## Notes

- No extra repository-specific build script is required for the current setup.
- If Cloudflare Pages settings ever need to vary by branch, use the dashboard branch deployment controls rather than hard-coding environment-specific behavior into the repository.
