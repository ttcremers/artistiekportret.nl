# Cloudflare Pages deployment

## Build settings

Use the Cloudflare Pages Hugo preset with:

- build command: `hugo`
- build output directory: `public`

## Branch behavior

- production branch: `main`
- preview deployments: enabled for all non-production branches and pull requests

Cloudflare Pages uses branch deployment controls to manage production and preview deployments. The default setup is to deploy every commit to the production branch and to create preview deployments for other branches.

## Manual dashboard steps

1. Create or connect the Cloudflare Pages project to the GitHub repository.
2. Select the Hugo preset, or set the build command to `hugo` and the output directory to `public`.
3. Set the production branch to `main`.
4. Leave preview deployments enabled for all non-production branches.
5. Add the custom domain later, once DNS access is available.

## Notes

- No extra repository-specific build script is required for the current setup.
- If Cloudflare Pages settings ever need to vary by branch, use the dashboard branch deployment controls rather than hard-coding environment-specific behavior into the repository.
