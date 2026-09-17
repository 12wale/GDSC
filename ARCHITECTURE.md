# GDSC Fayoum Architecture Report

## 1. Current architecture

This is a small Next.js 16 App Router marketing site with two static routes:

- `/` composes the hero, home About content, tracks, and events.
- `/about` composes the About Us, journey, achievements, and team sections.
- The root layout provides metadata, fonts, a fixed navbar, a main wrapper, and a footer.
- Static assets are served from `public/`.
- Content is hard-coded inside section components.
- There are no API routes, external data fetches, search flows, authentication, database access, or shared global client state.

The project currently uses Tailwind CSS v4, Framer Motion, Swiper, React Icons, and Lucide React.

## 2. Problems found

### Structure and naming

- Route files and the root layout live directly under `app/`, which is valid for this size of site, but the component tree mixes route-specific sections with shared UI.
- Component filenames are inconsistent (`About.tsx` versus `aboutus.tsx`, `ourtracks.tsx`, and `ourjourney.tsx`).
- Imports mix relative paths and the `@/*` alias.
- Static asset folders were previously mixed at the `public/` root and included the misspelled `staff_develope` directory.

### Component boundaries

- Most sections are marked `"use client"` even when their static content could remain server-rendered.
- `aboutus.tsx` combines content, scroll transforms, pointer tracking, spring values, particles, and presentation.
- `Team.tsx` combines team data, Swiper configuration, navigation controls, social links, and member-card markup.
- Animation variants and content arrays are repeated or embedded in render modules.

### Resilience and SEO

- There are no `loading.tsx`, `error.tsx`, `not-found.tsx`, or `global-error.tsx` surfaces.
- Metadata is global only and contains a placeholder description (`Impact Meaker`).
- `#contact` is linked from navigation but no contact section exists.
- Social, privacy, terms, and some team URLs are placeholders.

### Styling and performance

- Design colors, gradients, widths, and radii are repeated as arbitrary values.
- The configured Geist font is declared but the body overrides it with Arial.
- The hero uses a CSS background image, which is appropriate for a cover treatment but does not receive `next/image` optimization.
- Framer Motion, Swiper, React Icons, and Lucide React overlap in responsibilities; they are currently justified by actual usage, so removal should be deferred until a measured bundle or UX need exists.

### Requested feature surfaces

Search, API/data fetching, authentication, and authorization are not present in this repository. No architecture for them should be introduced speculatively.

## 3. Recommended architecture

Keep the root `app/` directory. For this two-route static site, moving everything into `src/` or adding route groups would add churn without improving ownership boundaries.

Use:

- `app/` for route composition, global metadata, global styles, and route-level resilience files.
- `components/layout/` for the navbar and footer.
- `components/ui/` for reusable primitives such as `Button`.
- `components/sections/home/` and `components/sections/about/` for route-owned presentation.
- `content/` for typed static content and asset references.
- Small client “islands” only where state, browser events, Swiper, or motion values are required.
- A small `lib/` only when a real shared utility exists; do not create empty service, API, hook, or state folders.

## 4. Proposed folder structure

```text
app/
  about/
    page.tsx
    loading.tsx
    error.tsx
  error.tsx
  not-found.tsx
  globals.css
  layout.tsx
  page.tsx

components/
  layout/
    Navbar.tsx
    Footer.tsx
  ui/
    Button.tsx
  sections/
    home/
      Hero.tsx
      About.tsx
      Events.tsx
      OurTracks.tsx
    about/
      AboutUs.tsx
      OurJourney.tsx
      OurAchievements.tsx
      Team.tsx

content/
  home.ts
  about.ts
  team.ts

public/
  about/
    illustrations/
    timeline/
  brand/
  home/
    about/
    events/
    hero/
  team/
  tracks/
```

The exact split should remain incremental: extract data and the highest-coupling client islands first, rather than creating wrappers around every small markup fragment.

## 5. Responsibilities

- `app/`: route composition, metadata, error/loading/not-found conventions.
- `components/layout/`: site-wide shell and navigation.
- `components/ui/`: reusable visual primitives with no page-specific content.
- `components/sections/`: route-owned visual sections.
- `content/`: typed, reusable editorial content and asset paths.
- `public/`: static images and SVGs only.
- `lib/`: future domain utilities only after a concrete shared need appears.

## 6. Components to move or rename

- Rename lowercase about section files to PascalCase.
- Standardize all imports on `@/*`.
- Keep asset ownership aligned with the page/domain that renders it. Public URLs now use descriptive kebab-case names and the former `staff_develope` directory has been replaced by `team/`.
- Keep `About.tsx` as the home About section; use `AboutUs.tsx` for the about-page introduction to avoid ambiguous ownership.

## 7. Components to split

- Split `aboutus.tsx` into a server-rendered section shell/content and a client interactive card/particle island.
- Split `Team.tsx` into typed content, a client Swiper carousel, and a presentational member card. Keep the section under `components/sections/about/` because it is composed by the About route.
- Keep `Events.tsx` as a small route section, but move its event records into typed content.
- Keep static tracks, achievements, and journey markup server-rendered where motion is not required; isolate animation wrappers only if bundle size becomes measurable.

## 8. Logic to extract

- Move team, event, track, achievement, and journey arrays into `content/`.
- Move repeated motion variants into narrowly named modules only when shared by more than one component.
- Add a small navigation-link helper inside the client navbar, not a generic utility.
- Do not add API clients, hooks, or global state until a real remote feature exists.

## 9. API and data-fetching improvements

There is currently no API or remote data flow. Keep the site static and server-rendered. If content later moves to a CMS:

1. Add typed server-side content loaders under a domain-specific `lib/` or feature service.
2. Keep fetches out of visual components.
3. Define cache/revalidation behavior at the loader boundary.
4. Add response validation before rendering.

The requested search feature is absent; implement it as a separate feature only after its searchable source and UX are defined.

## 10. State-management improvements

- Keep pathname state local to the navbar.
- Keep carousel state local to the team carousel.
- Keep pointer/particle interaction local to the About Us island.
- Keep static editorial content server-rendered.
- Do not add Redux, Zustand, Context, or a query library for the current site.

## 11. Type improvements

- Export named content types from content modules.
- Replace repeated local interfaces with domain types.
- Use `satisfies` for content records so asset and label shapes remain checked.
- Keep component props explicit and avoid `any`.

## 12. Performance improvements

- Reduce client boundaries around static sections.
- Avoid loading animation libraries into sections that only need static markup.
- Preserve `next/image` for content images and provide accurate `sizes`.
- Keep Swiper and its CSS isolated to the team carousel.
- Add reduced-motion behavior for interactive animation islands.

## 13. Security considerations

- No authentication or sensitive server data currently exists.
- Replace placeholder external URLs before production.
- Treat future CMS/API content as untrusted and validate it before rendering.
- Avoid exposing secrets in client components or `NEXT_PUBLIC_*` variables without a clear need.
- Use route-level error boundaries that do not expose server error details.

## 14. Migration plan

### Phase 1 — low-risk organization

1. Add route-level `error.tsx`, `not-found.tsx`, and lightweight loading UI.
2. Standardize section filenames/imports.
3. Extract typed editorial content from the largest sections.
4. Preserve existing routes, visual output, and asset URLs.

### Phase 2 — client boundary reduction

1. Keep route pages and static section shells as Server Components.
2. Isolate the Team Swiper as a Client Component.
3. Isolate About Us pointer/particle interactions as a Client Component.
4. Keep Navbar client-side only for `usePathname`.

### Phase 3 — production polish

1. Replace placeholder links and improve page-specific metadata.
2. Add a real contact destination or remove the dead anchor.
3. Add accessibility and reduced-motion checks.
4. Add tests when interactive behavior or remote data is introduced.

## Decision

Implement Phase 1 and the safe portion of Phase 2 now. Do not add search, API, authentication, a state-management library, or speculative service layers to this static marketing site.
