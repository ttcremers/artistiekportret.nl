# Architecture

## Principle

Keep the public front door simple, fast and resilient. Add dynamic systems only when a real need appears.

The public website and any future customer-facing tools do not need to live in the same application.

## Public site

Use:

- **Hugo** as static site generator
- **GitHub** as source repository
- **Cloudflare Pages** for deployment
- **artistiekportret.nl** as the primary public domain
- Dutch as the first language

The public site should remain lightweight, image-led and easy to maintain.

## Performance

Prioritize:

- responsive image variants
- modern image formats where useful
- explicit image dimensions to avoid layout shifts
- lazy loading below the fold
- sensible caching headers
- Brotli and gzip compression through the delivery layer
- minimal JavaScript

The photographs are the visual center of the site, but they should not become a performance burden.

## Search and sharing

Include:

- page-specific titles and descriptions
- canonical URLs
- `robots.txt`
- XML sitemap
- favicon support
- descriptive filenames and alt text
- Open Graph metadata
- social sharing images for important pages
- structured data where appropriate, such as `WebSite`, `ProfilePage` and local business information

After launch, register the site with Google Search Console and submit the sitemap.

## Content management

For the first version, keep content in the repository as Markdown and image files. This is transparent, versioned and sufficient for a site that changes infrequently.

Do not build an admin backend merely to avoid editing a handful of content files.

## Future dynamic systems

When a real customer need appears, use separate services or subdomains, for example:

- `klanten.artistiekportret.nl`
- `contact.artistiekportret.nl`

A future Symfony application on the VPS may support:

- intake forms
- appointment requests
- private customer galleries
- image selection
- delivery
- print and framing choices
- payments

These features are intentionally outside the first milestone.
