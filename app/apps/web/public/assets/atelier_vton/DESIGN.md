---
name: Atelier VTON
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e4e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#444748'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f0ed'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c9c6c5'
  secondary: '#635d56'
  on-secondary: '#ffffff'
  secondary-container: '#e7ded5'
  on-secondary-container: '#67625a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c1a'
  on-tertiary-container: '#858481'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#eae1d8'
  secondary-fixed-dim: '#cdc5bc'
  on-secondary-fixed: '#1f1b15'
  on-secondary-fixed-variant: '#4b463f'
  tertiary-fixed: '#e5e2df'
  tertiary-fixed-dim: '#c8c6c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#474744'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2df'
typography:
  display-hero:
    fontFamily: Bodoni Moda
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Bodoni Moda
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0em
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Bodoni Moda
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0em
  title-editorial:
    fontFamily: Bodoni Moda
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-caps-lg:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.14em
  label-caps-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.18em
  numeric-data:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.04em
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  space-4xl: 6rem
  gutter-mobile: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2.5rem
  margin-mobile: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
---

## Brand & Style

This design system expresses the quiet authority, restraint, and tactile precision of high-end fashion houses, engineered specifically for in-store virtual try-on (VTON) terminals and companion handheld devices. It bridges physical retail architecture with digital intelligence, evoking the calm, curated environment of a private salon appointment rather than an interactive tech novelty.

### Aesthetic Foundation
- **Quiet Luxury & Editorial Restraint:** The visual language rejects software tropes—no gradients, neon status indicators, ambient blurs, or bubbly pill elements. It favors architectural alignment, deliberate whitespace, and high-impact editorial framing.
- **Physical Lookbook Metaphor:** Digital surfaces emulate heavy-weight paper stocks, museum mounts, and pristine physical gallery placards. Garments and client captures remain the sole focal point; UI chrome recedes completely.
- **Confidence Through Reduction:** Interactions are silent, deliberate, and definitive. Visual feedback relies on crisp contrast shifts, hairline framing, and subtle state transitions rather than heavy animations.
- **Retail Ergonomics:** Structured primarily for high-reach touch terminals and single-handed mobile navigation in fitting suites. Interactive zones prioritize thumb-driven lower viewports while lookbook imagery commands the visual horizon.

## Colors

The palette is rooted in classic monochrome editorial tones tempered with warm natural fibers. Color is strictly functional, never decorative.

### Core Roles
- **Obsidian (#0B0B0B):** Primary structural tone used for primary call-to-action buttons, authoritative typography, and deep boundary anchors. Represents definitive action and timeless contrast.
- **Warm Alabaster (#FAF8F5):** Base canvas surface tone. Provides the tactile warmth of unbleached archival paper, avoiding the sterile eye fatigue of default digital whites under boutique lighting.
- **Crisp Off-White (#FFFFFF):** Elevated layer surface for active try-on panels, image framing canvases, and modal sheets.
- **Muted Sand & Warm Taupe (#E5DFD7, #C4BCB3):** Subtle structural dividing lines, inactive pill fills, swatch boundaries, and delicate neutral accents.
- **Subtle Charcoal (#2A2A28):** Architectural borders, secondary button outlines, precise iconography, and muted body copy where pure obsidian would feel visually overwhelming.

### Semantic Tones
- **Success/Confirmed:** Deep Olive Noir (`#2D3326`) replacing synthetic green.
- **Notice/Alert:** Muted Burnt Sienna (`#5C2E24`) applied strictly to typographic alerts, never flood fills.

## Typography

The typographic hierarchy pairs the high-contrast drama of Bodoni Moda with the quiet, utilitarian precision of Inter.

### Editorial Headings (Bodoni Moda)
Used for collection titles, garment identifiers, seasonal themes, and try-on state intros. Set with deliberate tracking and natural leading to maintain an editorial magazine posture. It must never be set in heavy bold weights; structural impact comes from scale contrast rather than stroke heaviness.

### Functional Body & Labels (Inter)
Inter manages garment specifications, fit metrics, material composition, sizes, and operational controls. 
- **All-Caps Tracking:** `label-caps-lg` and `label-caps-sm` are strictly set in uppercase with wide tracking (`0.14em` to `0.18em`) for sizing pills, metadata tags, breadcrumbs, and SKU classifications.
- **Numbers:** Currency, fit percentages, and measurements use `numeric-data` to preserve tabular clarity alongside high-fashion naming.

## Layout & Spacing

The layout philosophy follows a disciplined architectural grid inspired by physical lookbooks and gallery curation.

### Grid & Composition
- **Desktop/In-Store Kiosk (12 Columns):** Generous 40px margins with 24px gutters. The screen is partitioned deliberately: the left 7 columns house the full-bleed high-definition try-on visualizer, while the right 5 columns host the architectural garment dossier, size selector, and salon actions.
- **Mobile/Handheld Companion (4 Columns):** 20px margins with 16px gutters. Image viewports sit edge-to-edge or within razor-bordered ivory mats, reserving the bottom 35% of the viewport for thumb-accessible interaction drawers.
- **Airy Rhythm:** Vertical rhythm is unhurried. Generous whitespace around metadata enforces product exclusivity and eliminates terminal anxiety.

### Breakpoints
- **Mobile (Compact):** `< 768px` — Single-column stack, thumb-locked bottom floating bar, full-screen swipeable lookbook canvases.
- **Tablet / In-Store Vertical Mirror:** `768px - 1024px` — Split-view with a 60/40 vertical bias toward the VTON avatar.
- **Desktop / In-Store Kiosk Landscape:** `> 1024px` — 12-column dual-suite presentation with static anchor points for side-by-side garment comparison.

## Elevation & Depth

This design system rejects conventional drop shadows, blurs, and floating three-dimensional planes. Depth is articulated exclusively through architectural layering and hairline boundaries.

### Low-Contrast Hairline Framing
Surfaces are partitioned by 1px crisp borders in `#E5DFD7` (light surface separation) or `#2A2A28` (dossier and navigation structure). Overlapping panels do not cast shadows; they establish depth via tonal juxtaposition—a crisp white (`#FFFFFF`) card seated against a warm alabaster (`#FAF8F5`) field.

### Tonal Stratification
- **Ground Floor (Base Canvas):** Warm Alabaster (`#FAF8F5`), continuous across the entire viewport.
- **Gallery Mounts (Containers & Modals):** Pure Off-White (`#FFFFFF`) framed in 1px `#E5DFD7`.
- **System Sheets & Action Trays:** Fixed bottom drawers slide vertically over the canvas, distinguished solely by a 1px solid Obsidian (`#0B0B0B`) top border.

### Visual Focus & State
Interactive focus is conveyed by switching border weight from 1px `#E5DFD7` to 1px solid `#0B0B0B`. The absence of diffuse shadows reinforces physical gallery presence.

## Shapes

The geometric signature is uncompromising: zero corner radius across all visual elements.

### Sharp Architectural Geometry
- **Zero Radius (`0px`):** Every button, input box, modal container, toast, image frame, and swatch is strictly rectilinear.
- **Rationale:** Sharp edges mirror fine tailoring lines, architectural retail fixtures, luxury packaging boxes, and folded paper invitations. Soft corners are prohibited, as they erode the curated, severe elegance required by high fashion houses.

## Components

### Buttons
- **Primary CTA:** Solid Obsidian (`#0B0B0B`) background, Crisp White (`#FFFFFF`) label, zero radius. Set in `label-caps-lg` with `0.14em` tracking. Touch target minimum of 52px height for kiosk and mobile compliance. On press: subtle opacity shift to `0.9` with no geometric shrink.
- **Secondary CTA:** Transparent background, 1px solid Subtle Charcoal (`#2A2A28`) border, Obsidian text. On hover/press: fills with Warm Alabaster (`#FAF8F5`).
- **Tertiary / Action Link:** Borderless text link in `label-caps-sm`, underlined with a hairline 1px stroke positioned 4px below baseline.

### Garment & Try-On Cards
- **Structure:** Edge-to-edge high-resolution image container encased in a 1px `#E5DFD7` outline. 
- **Aspect Ratio:** Strictly vertical editorial ratios: `3:4` or `4:5`.
- **Metadata Placement:** Positioned flush beneath the image frame or seated inside an anchored crisp white placard at the lower border. Headings use `title-editorial`, with pricing and materials in `body-sm`.

### Chips & Selectors (Sizes, Fits, Colors)
- **Size Selectors:** Square, rectilinear boxes (44px x 44px) framed in 1px `#E5DFD7`. Active state fills solid Obsidian (`#0B0B0B`) with Crisp White text. Disabled state shows a diagonal 1px slash across the box.
- **Color Swatches:** 32px x 32px square swatches surrounded by 2px internal white spacing and a 1px outer frame. Active swatch receives an outer 1px Obsidian boundary ring.

### Input Fields
- **Text & Measurement Inputs:** Borderless top, left, and right; single bottom hairline border (1px `#C4BCB3`). 
- **Active / Focused:** Bottom border shifts to 1.5px `#0B0B0B`.
- **Labels:** Floating `label-caps-sm` above the input line in Subtle Charcoal (`#2A2A28`). Zero rounded background wraps.

### Checkboxes & Radios
- **Radio Buttons:** Outer square (16px x 16px) with a 1px `#0B0B0B` border. Selected state places a solid Obsidian inner square (8px x 8px) centered within.
- **Checkboxes:** 16px square with a 1px `#0B0B0B` border. Selected state displays a precise hairline vector checkmark without background fills.

### Specialized VTON Components
- **Try-On Comparison Slider:** Split-view divider rendered as a 1px Crisp White hairline with a central rectangular handle (`24px x 40px`, solid Obsidian) displaying minimal left/right arrows.
- **Fit Avatar Gauge:** Rectilinear horizontal progress bar (`2px` height) in `#E5DFD7` with an active indicator in `#0B0B0B`, paired with `numeric-data` indicators showing real-time drape tension and length specifications.
- **Fitting Room Assistant Callout:** Fixed bottom bar for physical retail stalls, spanning 100% width with a solid `#FAF8F5` surface and a 1px top border in `#0B0B0B`, containing a single primary action ("REQUEST STYLIST") and active garment SKU.