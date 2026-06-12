# Runtime QA checklist

Use this note after a preview deployment is available. Record findings in issue #11.

## Build

- run the production Hugo build
- confirm it completes without errors
- confirm no assets are missing

## Browser review

Review the homepage, portrait gallery, core pages and audience pages on phone, tablet and desktop widths.

Confirm:

- navigation remains usable
- text does not overlap images or other text
- longer pages remain comfortable to read
- images load without obvious layout shifts
- the homepage audience section stacks calmly on narrow screens

## Keyboard review

Using only the keyboard, confirm:

- the skip link reaches the main content
- focus states remain visible
- gallery cards can be opened
- the gallery dialog can be closed
- previous and next navigation work
- focus returns to the gallery card after closing

## Touch review

On a phone or tablet, confirm:

- gallery controls are easy to tap
- portrait, landscape and panorama images remain readable
- the dialog opens and closes reliably

## Metadata and discovery

Inspect generated HTML for:

- canonical URL
- meta description
- sharing metadata
- structured data
- favicon

After the public domain is connected, verify `robots.txt` and `sitemap.xml` as well.

## Performance audit

Run Lighthouse or an equivalent audit on the homepage, gallery and one longer audience page. Record findings in issue #11 and create separate issues for follow-up work.

## Completion

Close issue #11 when runtime checks are complete, straightforward findings are fixed and remaining trade-offs have separate tickets.
