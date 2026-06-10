# Foundational design tokens

The public site uses a small token layer that keeps the visual direction calm, warm and easy to adjust.

## Color tokens

- `--color-bg`: warm off-white page background
- `--color-surface`: slightly brighter surface panels
- `--color-text`: near-black body text
- `--color-muted`: muted supporting text
- `--color-accent`: restrained accent for links and emphasis
- `--color-accent-soft`: soft accent for subtle highlights
- `--color-border`: low-contrast separators
- `--color-focus`: visible keyboard focus color

## Typography tokens

- `--font-serif`: heading voice for the atelier feel
- `--font-sans`: practical body copy and UI text

## Layout tokens

- `--content-width`: outer page measure
- `--content-width-narrow`: reading width for text-heavy content
- `--space-*`: consistent spacing scale from compact to spacious
- `--radius-*`: restrained corner rounding
- `--shadow-soft`: light surface elevation for calm panels

## Components

- links are underlined and use the accent color
- buttons share the same tactile surface style
- focus states are always visible
- surfaces are subtle, not glossy

## Implementation notes

- Keep the token layer centralized in `static/css/site.css`.
- Avoid adding decorative effects that do not support readability or atmosphere.
- Adjust the tokens before adding page-specific styling so the whole site stays coherent.
