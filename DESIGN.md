# Praiz Portfolio Design Direction

This document describes the design language currently implemented in the Praiz portfolio. It replaces the earlier HAOQI-inspired exploration as the visual source of truth for future work.

## Design intent

Praiz should feel like a creative practitioner with both strong visual taste and technical control. The portfolio is expressive and cinematic, but the work and message must remain easy to understand.

The experience combines:

- Editorial scale and composition
- Motion-design timing and scene transitions
- Near-black gallery environments
- A warm, restrained hero canvas
- Vivid orange as the primary signal color
- Portrait-led personal branding
- Clear, compact supporting copy

The result should feel like a curated showreel translated into a website, not a conventional SaaS or agency landing page.

## Brand character

- **Confident:** Large typography, direct claims, decisive contrast
- **Creative:** Unexpected transitions, layered images, animated details
- **Technical:** Precise motion, structured grids, clean project metadata
- **Human:** Praiz's portrait, first-person copy, process, and testimonials
- **Playful:** Orange accents, bouncing and scaling moments, responsive hover states

## Visual principles

### 1. One dominant idea per viewport

Each major section should have a clear visual focus: the portrait in the hero, the editorial statement, the project track, the service image, or the testimonial stack. Avoid filling every section with equally weighted cards.

### 2. Contrast creates the rhythm

The page alternates between a warm light hero, white editorial panels, deep black content areas, and high-energy orange accents. Preserve these transitions; a uniformly dark page would lose the intended pacing.

### 3. Motion explains hierarchy

Animation should reveal order, state, and spatial relationships. Large sequences establish a scene; small animations acknowledge interaction. Movement should not be added only as decoration.

### 4. The work remains the evidence

Portfolio media should be visually dominant. Labels, locations, years, and categories support the image or video rather than competing with it.

### 5. Soft controls, editorial surfaces

Buttons, filters, tags, and avatars can use pills or circles. Large layout panels and media frames should stay comparatively restrained, with square or subtly softened edges.

## Color system

### Core tokens

| Role | Value | Usage |
| --- | --- | --- |
| Main background | `#0A0A0A` | Primary dark sections and page canvas |
| Raised dark background | `#111111` | Cards, modal surfaces, subtle contrast |
| Pure black | `#000000` | Gallery route, media backdrops, maximum contrast |
| Primary text | `#FFFFFF` | Headings and high-priority copy on dark surfaces |
| Muted text | `rgba(255, 255, 255, 0.6)` | Descriptions, metadata, secondary labels |
| Grid/border | `rgba(255, 255, 255, 0.1)` | Dividers, outlines, and structural grids |
| Primary accent | `#FF5E14` | CTAs, emphasis, active states, highlights |
| Accent hover | `#E04E0C` | Pressed and hover states |
| Hero canvas | `#E5E3DB` | Warm neutral opening viewport |
| Hero ink | `#1A1A1A` | Navigation and foreground UI on the hero |

Orange is the signature color. Use it to direct attention, not as a universal fill. The contact banner can use a richer orange gradient from `#FF5E14` toward a deeper red-orange.

Secondary blue, green, and purple tints may distinguish bento cards or service categories, but they should remain translucent and subordinate to orange.

## Typography

### Families

- **Outfit:** Display headings, section titles, large statistics, project names, and branded UI
- **Inter:** Body copy, metadata, navigation, filters, and utility labels

Both families are loaded through `next/font` in `src/app/layout.js`.

### Display type

- Use large responsive sizes with `clamp()`.
- Keep line height close to `1` or `1.1`.
- Use slightly negative tracking, generally around `-0.02em`.
- Prefer medium-to-bold weights; reserve the heaviest weights for the wordmark and key hero moments.
- Uppercase is appropriate for section labels, navigation, filters, and high-impact headings.

### Body and utility type

- Default body size is `16px` with approximately `1.5` line height.
- Long descriptions should use Inter at a light or regular weight.
- Metadata can be smaller, uppercase, and letter-spaced.
- Muted text must still retain sufficient contrast against its surface.

## Spacing and shape

The project uses a base spacing sequence:

| Token | Value |
| --- | --- |
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `16px` |
| `--space-4` | `24px` |
| `--space-5` | `32px` |
| `--space-6` | `48px` |
| `--space-7` | `64px` |
| `--space-8` | `96px` |
| `--space-9` | `128px` |

The primary content container is capped at `1400px` with `24px` horizontal padding. Section spacing should be generous enough to let pinned and sticky sequences breathe.

Shape rules:

- Pill controls: `999px`
- Standard content cards: approximately `16px`
- Large feature/modal surfaces: up to `24px`
- Contact banner: `40px`
- Editorial highlights and large project surfaces: square or minimally rounded

## Page composition

### Header

The header begins as part of the hero composition rather than a conventional bar. Navigation surrounds the central portrait and wordmark. During the hero scroll sequence, the navigation contracts, the Praiz logo moves left, and a pill-shaped menu control appears on the right.

The slide-in drawer uses a translucent near-black surface, blur, large uppercase links, and orange hover states.

### Hero

The hero is a full-viewport warm neutral stage containing:

- An oversized `PRAIZ` background wordmark
- A centered cutout portrait
- The statement “Design, Applied Differently.”
- Two orange pill calls to action
- Compact supporting copy in the lower corners
- A small orange ball that drops, bounces, expands, and triggers the final headline reveal

The initial sequence should feel like an opening title treatment. On scroll, the hero pins while the portrait and supporting content recede and the header transforms into its compact state.

### Statistics

The stats strip is a dark, structured proof point. Large Outfit numerals count upward as they enter view. Fine dividers and orange hover feedback reinforce the technical, measured feel.

### Split statement

This section breaks the dark rhythm with a white editorial panel and a large image. The message is revealed word by word, with “needs to move” highlighted in orange. Tags and the CTA use compact pill shapes.

The image enters through a vertical clip-path wipe with restrained parallax.

### About

The about section returns to a near-black canvas with a subtle purple-toned gradient. Content is arranged as a compact bento system:

- Portrait
- Biography
- Creative superpowers
- Software arsenal

Cards use low-opacity colored gradients, fine white borders, and a very light noise texture. They should feel atmospheric rather than glossy.

### Projects

The homepage project showcase uses a horizontally moving track pinned to vertical scroll. Cards prioritize edge-to-edge media with overlay metadata, category tags, and a circular launch control.

Category filters use outlined pills with a white active state. Reordering and filtering use FLIP motion so cards retain spatial continuity.

The dedicated project gallery groups work by category and opens media in a near-black full-screen modal.

### Services

Desktop uses a two-column sticky composition:

- A persistent title and large changing image on the left
- A vertically scrolling list of services on the right

The active service is fully opaque and controls the image. On mobile, the same content becomes a stack of sticky dark cards with colored top rules.

### Process

Three oversized cards communicate Discover, Design, and Deliver. Their black, orange, and light-gray surfaces overlap with slight rotations on desktop, then flatten into a single-column stack on mobile.

### Testimonials

The testimonial section uses a near-black background. The heading and statistics remain sticky on the left while white testimonial cards stack on the right. This contrast separates social proof from the portfolio gallery without introducing a new brand color.

### Contact

The final CTA is a large rounded orange gradient banner on black. A subtle grid is always visible, and a brighter grid follows the pointer through a radial mask. The title remains centered and direct, supported by white pill buttons and social icons.

## Motion system

### Primary tools

- GSAP and ScrollTrigger for scene choreography, pinning, scrubbing, and horizontal movement
- GSAP Flip for project filtering and modal continuity
- Framer Motion for word reveals, counters, in-view entrances, and hover feedback
- Lenis for smooth scrolling synchronized to the GSAP ticker

### Timing and easing

- Use smooth editorial easing for most transitions: `cubic-bezier(0.25, 1, 0.5, 1)` or GSAP `power2`/`power3` variants.
- Use bounce or `back.out` sparingly for branded moments such as the compact logo and menu reveal.
- Stagger text and related items in short increments so they read as one thought.
- Scroll-scrubbed animation should remain spatially predictable and should not race ahead of the user's input.

### Motion hierarchy

1. **Scene motion:** Hero pinning, header transformation, horizontal project track
2. **State motion:** Service image changes, project filtering, gallery modal expansion
3. **Reveal motion:** Headings, body copy, statistics, testimonial cards
4. **Micro-interaction:** Button lift, arrow movement, card hover, orange glow

Do not run several high-intensity animations in the same viewport unless they are part of one coordinated timeline.

## Imagery and media

- Use real project frames, short motion loops, and authored portrait photography.
- Favor strong crops and clear silhouettes over decorative stock imagery.
- Project thumbnails should share consistent aspect ratios and grading.
- Video previews should be muted, looped, compressed, and supported by poster images.
- Keep text out of critical areas of an image when it will be covered by metadata overlays.
- Remote stock imagery is acceptable during prototyping but should be replaced by owned or licensed final media.

## Content voice

Copy should be concise, direct, and confident. First-person language is preferred because the product is a personal portfolio.

Good patterns:

- “Design, Applied Differently.”
- “Browse My Projects”
- “How I Help”
- “Let's work together!”

Avoid generic agency language, unsupported superlatives, long capability lists, or conflicting statistics. Every number and testimonial should be verifiable before launch.

## Responsive behavior

Desktop is the fullest expression of the design, including pinned scenes, horizontal tracks, sticky columns, and overlapping cards.

At `900px` and below:

- Switch to native browser scrolling; Lenis, pinned ScrollTriggers, scrubbed timelines, parallax, and scroll-controlled horizontal translation are desktop-only.
- Use a compact fixed header with the Praiz pill on the left and a minimum `44px` menu control on the right.
- Keep all page content inside the layout viewport with `16px` to `21px` gutters, `min-width: 0`, responsive media, and headings capped near `44px` to `48px`.
- Treat the hero as one contained portrait composition using `100svh` at standard phone sizes. Text and controls must remain visible; very short devices may grow vertically rather than clip content.
- Collapse editorial and bento layouts into one column. Images precede related copy where that improves scanning.
- Replace the project pin with a native horizontal swipe rail. Cards are approximately `86vw`, scroll-snap to the leading edge, always show a poster, and open details by tap.
- Render services, process, and testimonials as normal static stacks without sticky card choreography.
- Retain only short, once-per-section opacity/translate reveals and counters. Coarse pointers use this light profile even when their viewport is wider than a typical phone.

At approximately `768px` and below, stack statistics and editorial panels, normalize side padding, and allow heading copy to wrap naturally.

### Mobile reference and ownership

The mobile layout is informed by the clarity and touch-first pacing observed on `heynesh.com`: compact navigation, portrait-led hierarchy, restrained typography, native swipeable work cards, and normal vertical section flow. Do not copy that site's logos, wording, imagery, or proprietary brand elements. Praiz's orange/black palette, content, portrait, project media, and voice remain the source material.

### Mobile motion profiles

- **Full:** Fine-pointer desktop devices receive Lenis, GSAP pinning, scrubbed choreography, and richer hover feedback.
- **Light:** Viewports at `900px` and below or coarse-pointer devices receive native scrolling and brief entrance reveals that run once.
- **None:** `prefers-reduced-motion: reduce` receives immediately visible content, native scrolling, and no decorative animation.

## Accessibility and performance guardrails

- Maintain visible keyboard focus on all links, buttons, filters, and modal controls.
- Preserve semantic heading order and descriptive alternative text.
- Do not rely on hover as the only way to access project content.
- Add a reduced-motion experience for users who request it.
- Trap focus inside an open project modal and restore it when the modal closes.
- Ensure orange/white and muted-text combinations meet contrast requirements.
- Lazy-load below-the-fold images and video; reserve priority loading for the hero.
- Avoid animating layout properties when transforms and opacity can achieve the same result.
- Test ScrollTrigger and Lenis together after any layout or media change.

## Design guardrails

### Do

- Keep orange as a deliberate focal signal.
- Use large type and media to establish hierarchy.
- Coordinate animations around section narratives.
- Alternate light, dark, and orange moments to preserve pacing.
- Reuse the existing token system and animation helpers.
- Test around `1366x768`, large desktop widths, and mobile widths below `900px`.

### Do not

- Reintroduce the pale-blue HAOQI wallpaper aesthetic as the main direction.
- Turn every section into a rounded marketing card grid.
- Add unrelated accent colors without a semantic purpose.
- Use stock imagery as permanent portfolio evidence.
- Add autoplaying video with sound.
- Sacrifice navigation, readability, or performance for motion.

## Implementation map

- Tokens: `src/styles/variables.css`
- Typography: `src/styles/typography.css`
- Global layouts and section styling: `src/styles/layout.css`
- Reusable UI patterns: `src/styles/components.css`
- Hero and header choreography: `src/components/Hero.jsx`, `src/components/Header.jsx`
- Motion helpers: `src/components/ui/`
- Smooth-scroll integration: `src/components/LenisProvider.jsx`

When the visual language changes, update the tokens and this document together so the implementation and design direction remain aligned.
