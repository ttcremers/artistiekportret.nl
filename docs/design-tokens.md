# Foundational design tokens

The public site uses a compact token layer that keeps the visual direction calm, warm and easy to adjust.

## Color tokens

- `--color-bg`: warm plaster-like background for the page
- `--color-surface`: slightly brighter surface panels for cards, nav and callouts
- `--color-text`: near-black body text
- `--color-muted`: restrained supporting text and secondary labels
- `--color-accent`: warm yellow-gold accent for links, emphasis and sparse highlights
- `--color-accent-soft`: soft gold tint for subtle highlights
- `--color-border`: low-contrast separators and outlines
- `--color-focus`: clearly visible keyboard focus ring

## Typography tokens

- `--font-serif`: editorial heading voice for the atelier feel
- `--font-sans`: practical body copy and UI text
- `--line-height-body`: relaxed reading rhythm for body content
- `--line-height-tight`: compact rhythm for headings

## Layout tokens

- `--content-width`: standard page measure
- `--content-width-wide`: wider measure for image-led and editorial sections
- `--content-width-narrow`: reading width for text-heavy content
- `--space-*`: consistent spacing scale from compact to spacious
- `--radius-*`: restrained corner rounding
- `--shadow-soft`: light surface elevation for calm panels
- `--breakpoint-md`: medium-screen convention used for the first editorial layout shift
- `--breakpoint-lg`: larger-screen convention for wider compositions

## Components

- links are underlined, use the accent color and stay readable without hover hints
- buttons share the same tactile surface style and become warmer on hover
- focus states are always visible
- surfaces are subtle, not glossy

## Implementation notes

- Keep the token layer centralized in `static/css/site.css`.
- Avoid decorative effects that do not support readability or atmosphere.
- Adjust the tokens before adding page-specific styling so the whole site stays coherent.
