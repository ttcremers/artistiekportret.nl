# Google Search Console launch checklist

Use this checklist after `artistiekportret.nl` is connected to the public deployment and HTTPS is working.

## Verify public URLs

Confirm:

- `https://artistiekportret.nl/` loads successfully
- `https://artistiekportret.nl/robots.txt` returns `200`
- `https://artistiekportret.nl/sitemap.xml` returns `200`
- sitemap URLs start with `https://artistiekportret.nl/`
- the sitemap does not contain preview URLs

## Add the site

Create a Search Console Domain property for:

```text
artistiekportret.nl
```

Complete the verification steps shown by Search Console.

## Submit the sitemap

After verification, submit:

```text
sitemap.xml
```

Check that Search Console accepts the sitemap without errors.

## Manual owner checkpoint

Tommy completes property creation, verification and sitemap submission after the domain is live.
