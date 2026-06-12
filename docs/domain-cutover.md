# Domain cutover operator checklist

Use this note when the Cloudflare Pages preview is ready and the public domain can be connected.

## Decisions

- canonical host: `https://artistiekportret.nl/`
- `www` redirects permanently to the apex host
- the existing registrar stays in place
- live dashboard changes require Tommy's approval

## Preparation

- verify the production preview deployment
- confirm the production base URL is `https://artistiekportret.nl/`
- save the current registrar configuration before changing anything
- preserve mail-related and verification records
- keep the previous configuration available for rollback

## Cutover order

1. Follow Cloudflare's official full-setup flow for the domain.
2. Confirm the domain is active in Cloudflare.
3. Attach `artistiekportret.nl` in the Pages project's **Custom domains** screen.
4. Wait for HTTPS activation.
5. Configure the `www` redirect using Cloudflare's official Pages guide.

Do not improvise dashboard values. Use the current Cloudflare documentation during the live change.

## Verify

- the apex site loads over HTTPS
- `www` redirects to the apex host
- paths and query strings survive the redirect
- `/robots.txt` loads
- `/sitemap.xml` loads
- sitemap URLs use `https://artistiekportret.nl/`
- homepage and core pages work on phone and desktop
- existing mail-related records still behave as expected when applicable

## Rollback

When the cutover fails, restore the previously saved registrar configuration and wait for propagation. Keep the Cloudflare setup available until the cause is understood.

When only the `www` redirect fails, disable that redirect and verify the apex site independently.

## Manual owner checkpoint

Tommy performs or explicitly approves the live registrar and Cloudflare dashboard changes. Do not perform the live cutover as part of an implementation PR.

## Official references

- https://developers.cloudflare.com/pages/configuration/custom-domains/
- https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/
- https://developers.cloudflare.com/pages/how-to/www-redirect/
