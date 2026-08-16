# Praiz Portfolio

An interaction-led portfolio for Praiz (Praise Adjei), a Ghana-based multidisciplinary designer specializing in graphic design, motion design, cinematography, and video editing. The site presents Praiz's work, capabilities, process, social proof, and contact options through a cinematic, scroll-driven experience.

The current build is a front-end portfolio prototype. Its content is stored locally in React components; there is no CMS, database, authentication layer, or external application API.

## Experience overview

The homepage is structured as a continuous visual narrative:

1. A full-screen animated introduction centered on the Praiz wordmark and portrait
2. Animated experience and project statistics
3. A split editorial statement about motion-led brand design
4. An about section covering Praiz's story, skills, and creative tools
5. A horizontally scrolling, filterable project showcase
6. A sticky services presentation for desktop and stacked cards for mobile
7. A three-step Discover, Design, Deliver process
8. A sticky testimonial stack
9. An interactive contact banner and social links

The design and interaction rules are documented in [DESIGN.md](./DESIGN.md).

## Routes

| Route | Purpose | Status |
| --- | --- | --- |
| `/` | Main portfolio experience | Primary implementation |
| `/projects` | Categorized project gallery with full-screen media previews | Prototype |
| `/project/[id]` | Individual case-study shell | Placeholder template |

Project cards on the homepage currently open `/projects?id=<project-id>`, where the matching project is highlighted. The dynamic case-study route is not yet connected to the card flow.

## Core features

- GSAP entrance choreography, pinned sequences, horizontal scrolling, and FLIP transitions
- Lenis smooth scrolling synchronized with GSAP ScrollTrigger
- Framer Motion counters, word reveals, and in-view micro-interactions
- Filterable project categories
- Hover-to-play project video cards
- Full-screen project media modal
- Responsive desktop and mobile service layouts
- Local image assets with selected remote Unsplash imagery
- Metadata and Open Graph configuration for the Praiz portfolio

## Technology

- [Next.js](https://nextjs.org/) 16.2 using the App Router
- [React](https://react.dev/) 19.2
- JavaScript/JSX with TypeScript path configuration
- [GSAP](https://gsap.com/) and `@gsap/react`
- [Framer Motion](https://motion.dev/)
- [Lenis](https://lenis.darkroom.engineering/)
- [Tailwind CSS](https://tailwindcss.com/) 4 and shadcn dependencies
- `next/image`, `next/font`, and `next-video`

The homepage is primarily styled with authored CSS and component-level styles. Tailwind utilities are used more heavily by the secondary project routes.

## Project structure

```text
src/
|-- app/
|   |-- layout.js             # Fonts, metadata, and smooth-scroll provider
|   |-- page.js               # Homepage section composition
|   |-- projects/page.jsx     # Project gallery route
|   `-- project/[id]/page.jsx # Case-study route template
|-- components/
|   |-- Hero.jsx
|   |-- Header.jsx
|   |-- StatsStrip.jsx
|   |-- LocationCards.jsx
|   |-- About.jsx
|   |-- Works.jsx
|   |-- Services.jsx
|   |-- Process.jsx
|   |-- Testimonials.jsx
|   |-- Contact.jsx
|   |-- ProjectsGallery.jsx
|   |-- ProjectCard.jsx
|   `-- ui/                   # Shared reveal and text animation helpers
|-- lib/
`-- styles/                   # Tokens, typography, layout, and components

public/                       # Portraits, thumbnails, and social icons
videos/                       # next-video metadata
```

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables are currently required for local development.

## Available scripts

```bash
npm run dev    # Start the Next.js development server
npm run build  # Create a production build
npm run start  # Run the production build
npm run lint   # Run ESLint
```

There is currently no automated test suite.

## Updating portfolio content

The portfolio data is currently embedded directly in components:

- Homepage projects and category filters: `src/components/Works.jsx`
- Project gallery data: `src/components/ProjectsGallery.jsx`
- Services: `src/components/Services.jsx`
- Testimonials: `src/components/Testimonials.jsx`
- Process steps: `src/components/Process.jsx`
- Biography, skills, and tools: `src/components/About.jsx`
- Email and social calls to action: `src/components/Contact.jsx`
- Site metadata: `src/app/layout.js`

Project data is duplicated between `Works.jsx` and `ProjectsGallery.jsx`. These collections should be moved into one shared data module before real case studies are added.

## Assets and remote media

Local images and social icons are stored in `public/`. Remote Unsplash images are allowed by `next.config.mjs`. Some project videos and testimonial avatars still use external placeholder sources.

When replacing media:

- Prefer optimized WebP/AVIF images where practical.
- Supply poster images for every video.
- Keep hover previews short, muted, looped, and compressed.
- Preserve meaningful alternative text.
- Avoid committing large source renders when a delivery-optimized export is sufficient.

## Current content status

Before launch, replace or verify the following prototype content:

- Sample project names, thumbnails, locations, and video URLs
- Placeholder testimonials and avatar images
- `hello@example.com`, booking targets, and social profile URLs
- Case-study Lorem Ipsum and media placeholders
- Conflicting project and experience statistics across sections
- Visible character-encoding artifacts in component copy

The repository also contains earlier design experiments and reference exports outside `src/`. They are not part of the Next.js application runtime.

## Production build

Create and run an optimized build with:

```bash
npm run build
npm run start
```

The application can be deployed to any platform that supports Next.js 16. Confirm all remote media hosts, production metadata URLs, contact links, and analytics requirements before launch.
