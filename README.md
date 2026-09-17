# GDSC Fayoum Landing Page

GDSC Fayoum is a Next.js landing page for the Google Developer Student Clubs community at Fayoum University. The site presents the community, learning tracks, events, achievements, journey, and team.

This document is intentionally written as both:

1. A developer onboarding guide.
2. An AI context file that can be provided to an AI assistant before requesting changes.

The goal is to explain where things belong, how pages are composed, and which rules should be followed when changing the project.

## Project stack

- Next.js `16.3.3`
- React `19.2.8`
- TypeScript
- App Router
- Tailwind CSS v4
- Framer Motion for animation
- Swiper for the team carousel
- Lucide React and React Icons for icons
- Local static content and assets
- No backend, database, API, authentication, CMS, search service, or global state library

## Getting started

Run commands from the project root:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available commands:

```bash
npm run dev       # Start the development server
npm run lint      # Run ESLint
npx tsc --noEmit  # Run TypeScript checks
npm run build     # Create a production build
npm run start     # Start the production server after building
```

There is currently no automated test suite or test script. For every code change, run at least:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Application architecture

The project uses the Next.js App Router. Routes are composed in `app/`, while reusable layout and page sections live in `components/`.

```text
app/
├── about/
│   ├── page.tsx
│   └── loading.tsx
├── error.tsx
├── globals.css
├── layout.tsx
├── loading.tsx
├── not-found.tsx
└── page.tsx

components/
├── layout/
│   ├── Footer.tsx
│   └── Navbar.tsx
├── sections/
│   ├── about/
│   │   ├── AboutUs.tsx
│   │   ├── OurAchievements.tsx
│   │   ├── OurJourney.tsx
│   │   ├── OurTracks.tsx
│   │   └── Team.tsx
│   └── home/
│       ├── About.tsx
│       ├── Events.tsx
│       ├── OurTracks.tsx
│       └── Hero.tsx
└── ui/
    └── Button.tsx

content/
├── about.ts
├── achievements.ts
├── home.ts
└── team.ts

public/
├── about/
├── brand/
│   ├── spring.svg
│   └── gdsc-fayoum-mark.png
├── home/
├── team/
└── tracks/
```

### Directory responsibilities

#### `app/`

Owns route composition and Next.js special files:

- `app/page.tsx` is the home page.
- `app/about/page.tsx` is the About page.
- `app/layout.tsx` defines global metadata, fonts, navbar, main wrapper, and footer.
- `loading.tsx` files define route loading UI.
- `error.tsx` defines the user-facing route error boundary.
- `not-found.tsx` defines the 404 page.
- `globals.css` contains global styles and third-party Swiper overrides.

Route files should primarily compose sections. Do not put large visual components, static content arrays, or unrelated business logic directly in route files.

#### `components/layout/`

Contains site-wide shell components:

- `Navbar.tsx`: fixed navigation and active route styling. It is a Client Component because it uses `usePathname`.
- `Footer.tsx`: site footer, navigation links, branding, and social links.

#### `components/sections/`

Contains page-specific visual sections:

- `sections/home/`: sections displayed on the home page, including tracks and events.
- `sections/about/`: sections displayed on the About page, including the team carousel.

The folder indicates the section's presentation ownership. A section may be rendered on another route when the product requirement calls for it, but its implementation should still stay in the domain folder that owns its content.

#### `components/ui/`

Contains reusable visual primitives. Add a component here only when it is genuinely reusable across multiple sections or routes. Do not move page-specific sections into this folder.

#### `content/`

Contains typed static editorial data:

- `home.ts`: events and tracks.
- `about.ts`: journey timeline records.
- `achievements.ts`: achievement records and icon metadata.
- `team.ts`: team member records.

When changing text, image paths, event records, team members, tracks, journey items, or achievements, look here first. Do not duplicate the same content inside a component.

#### `public/`

Contains browser-accessible static assets. Paths are referenced from the site root:

```tsx
<Image src="/brand/logo.png" ... />
```

Do not import files from `public/` using filesystem-relative paths. Use their public URL.

## Routes and page composition

### Home: `/`

Defined in [app/page.tsx](./app/page.tsx):

1. Hero
2. About
3. Our Tracks
4. Our Biggest Events

### About: `/about`

Defined in [app/about/page.tsx](./app/about/page.tsx):

1. About Us
2. Our Journey
3. Our Achievements
4. Meet Our Incredible Project Team

The navbar is fixed and has a height of approximately `123px`. The hero section accounts for this offset so content is not hidden under the navbar.

## Server and Client Components

Use Server Components by default.

Current client boundaries are intentional where browser behavior or animation is required:

- `Navbar.tsx`: pathname-based active link state.
- `Hero.tsx`: entrance animation and interactive visual behavior.
- `About.tsx`: animated section behavior.
- `Events.tsx`: scroll and hover animation.
- `OurTracks.tsx`: animated cards.
- `AboutUs.tsx`: pointer, scroll, spring, and particle interactions.
- `OurJourney.tsx`: scroll-linked timeline animation.
- `OurAchievements.tsx`: animated achievement cards.
- `Team.tsx`: Swiper, carousel controls, and client interaction. It belongs to `sections/about/` because the team is rendered on the About page.
- `Footer.tsx`: Framer Motion viewport animation.

When modifying a component, do not add `"use client"` automatically. First check whether the component uses:

- React state or effects
- Browser APIs
- Event handlers
- Framer Motion hooks or interactive animation
- Swiper or another browser-only library

If a mostly static component needs a small interactive part, prefer extracting that part into a client island instead of converting the entire page or large section.

## Content and data flow

This is currently a static marketing site:

```text
typed content module
        ↓
page section component
        ↓
route page composition
        ↓
browser-rendered page
```

There is no current:

- `fetch` request
- API route
- server action
- database
- CMS
- authentication flow
- global state store
- search feature

Do not add an API layer, authentication system, search architecture, or state-management library unless a concrete product requirement introduces one.

If remote data is added in the future, keep data fetching in a dedicated domain service or server-side loader. Do not fetch data directly from random visual components.

## Asset organization

Assets are grouped by purpose:

```text
public/
├── about/
│   ├── illustrations/
│   └── timeline/
├── brand/
├── home/
│   ├── about/
│   ├── events/
│   └── hero/
├── team/
└── tracks/
```

Naming rules:

- Use lowercase kebab-case for new asset filenames.
- Put logos and shared brand icons in `public/brand/`.
- Put home-only assets under `public/home/`.
- Put About-page assets under `public/about/`.
- Put team portraits under `public/team/`.
- Put track images under `public/tracks/`.
- Do not add unrelated files directly to the `public/` root.

## Styling conventions

- Tailwind utility classes are the primary styling approach.
- Existing GDSC green is `#20B15A`.
- Preserve responsive behavior at mobile, tablet, and desktop widths.
- Reuse existing spacing, radii, typography, and colors before introducing new arbitrary values.
- Keep global styles in `app/globals.css` only when they truly apply globally.
- Keep section-specific styles in the section component.
- Preserve the current visual design unless the request explicitly asks for a design change.

The design currently uses animated sections, but new animation should be purposeful. Respect reduced-motion behavior when adding new motion-heavy interactions.

## Navigation and links

The navbar currently contains:

- Home: `/`
- Events: `#events`
- About: `/about`
- Contact: `#contact`

The events anchor exists on the home page. Before adding or changing an anchor link, confirm that the target `id` exists. If a real Contact section is introduced, add it as a proper page section instead of leaving a dead anchor.

## How to make common changes

### Change page text or static records

1. Identify the domain:
   - events/tracks → `content/home.ts`
   - journey → `content/about.ts`
   - achievements → `content/achievements.ts`
   - team → `content/team.ts`
2. Update the typed record.
3. Keep the rendering component focused on layout and presentation.
4. Run lint, TypeScript, and build.

### Add a new image

1. Put it in the correct `public/` domain folder.
2. Use a lowercase kebab-case filename.
3. Reference it with a root-relative URL such as `/home/events/new-event.png`.
4. Use `next/image` for content images where possible.
5. Add meaningful alt text unless the image is decorative, in which case use `alt=""` and `aria-hidden="true"` when appropriate.

### Add a new section

1. Decide which route owns the section.
2. Create the component under the matching `components/sections/<route>/` folder.
3. Keep static records in `content/`.
4. Use a Server Component unless interactivity requires a Client Component.
5. Compose it from the appropriate `app/**/page.tsx` file.
6. Add stable section IDs when navigation needs an anchor.

### Change navbar behavior

Update [components/layout/Navbar.tsx](./components/layout/Navbar.tsx). Preserve:

- Fixed positioning
- The approximately `123px` layout height
- Active route color `#20B15A`
- Hover color `#20B15A`
- Responsive spacing

### Change the hero

Update [components/sections/home/Hero.tsx](./components/sections/home/Hero.tsx). The current hero uses:

- `/home/hero/hero-section.png`
- Static background treatment without the previous background scale animation
- A green and black overlay treatment
- A Join Us button using `/brand/leading.svg`
- A top offset so the fixed navbar does not cover the content

Do not reintroduce background animation unless explicitly requested.

## AI change protocol

When giving this repository to an AI assistant, provide this README as context and ask the assistant to follow these rules:

1. Work only in the project root and preserve existing uncommitted changes.
2. Inspect the relevant files before editing.
3. Do not rewrite the application or introduce speculative architecture.
4. Preserve existing routes, asset URLs, responsive behavior, and visual behavior unless the request explicitly changes them.
5. Keep route files focused on composition.
6. Keep static content in `content/`.
7. Keep assets in the correct `public/` domain folder.
8. Use Server Components by default.
9. Add `"use client"` only when state, effects, browser APIs, event handlers, Framer Motion hooks, or Swiper require it.
10. Reuse existing components and patterns before creating new abstractions.
11. Do not add API, authentication, search, global state, or new dependencies without a concrete requirement.
12. Use TypeScript strictly and do not introduce `any`.
13. Update directly related documentation when architecture or conventions change.
14. Run:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

15. Report changed files, validation results, and any remaining issues.

### Recommended AI request template

```text
Read README.md and ARCHITECTURE.md before changing anything.

Task:
<describe the requested change>

Requirements:
- Preserve existing routes and responsive behavior.
- Follow the project folder and asset conventions.
- Keep static content in content/.
- Use Server Components by default.
- Do not add new dependencies unless necessary.
- Validate with npm run lint, npx tsc --noEmit, and npm run build.

First inspect the relevant files, then implement the smallest complete change.
```

## Related documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md): detailed architecture audit, rationale, and migration plan.
- [Next.js App Router documentation](https://nextjs.org/docs/app)
- [Next.js Server and Client Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

## Current limitations

- No automated test suite exists yet.
- Several external social and legal URLs are placeholders and should be replaced with verified destinations.
- The navbar contains a Contact anchor, but a dedicated Contact section has not been implemented.
- Content is local and static; there is no CMS or admin workflow.
- The team carousel and animation-heavy sections are still relatively large client components and can be split further in a future incremental refactor.
