# Tech stack tags on projects listing page

## Context

Tech stack is currently only shown inside each project's detail page, buried as free MDX body text under a "## Tech Stack" heading. It's not structured data — it's a plain-text line, and 2 of 6 projects don't have one at all. The goal: surface tech stack as small tags/pills directly on the main `/projects` listing page cards, so visitors can scan stacks without opening each project. Additionally, the homepage (`app/page.tsx`) gets a new "Technologies I've Used" section showing the deduplicated set of every tech stack tag across all projects, so visitors get an at-a-glance summary without visiting `/projects` at all.

Since no tag data or tag UI exists yet, this requires: promoting tech stack into structured frontmatter, building a small tag component from scratch (no component library is used on this site), and rendering it on the listing cards.

Confirmed with user:
- Projects with no tech stack data (`CommuterBike.mdx`) get no tags row at all — skip silently, don't invent data.
- `AppleWeatherClone.mdx` gets `ReactJS` only (the only verifiable stack item from its body text).
- Tags appear only on the full `/projects` listing (`Projects()`), not the homepage "recent projects" teaser (`RecentProjects()`), which stays lean.

## Changes

### 1. `app/projects/utils.ts`
- Add `techStack?: string[]` to the `Metadata` type.
- In `parseFrontmatter()`, special-case the `techStack` key to split its value on `,` and trim each item into an array, instead of storing it as a raw string like other fields.

### 2. New file: `app/components/tag.tsx`
Small presentational pill component, styled with existing Tailwind `neutral-*` palette (matches conventions in `nav.tsx`/`projects.tsx`), light/dark aware, sized to sit in a `flex-wrap` row:
```tsx
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
      {children}
    </span>
  )
}
```

### 3. `app/components/projects.tsx`
In `Projects()` only (lines 4-32), render a tags row right after the summary `<p>`:
```tsx
{post.metadata.techStack && post.metadata.techStack.length > 0 && (
  <div className="flex flex-row flex-wrap gap-1.5 mt-2">
    {post.metadata.techStack.map((tech) => (
      <Tag key={tech}>{tech}</Tag>
    ))}
  </div>
)}
```
`RecentProjects()` (lines 38-67) is left unchanged per user decision.

### 4. MDX frontmatter updates
Add `techStack: '...'` to frontmatter (comma-separated string), and delete the now-redundant `## Tech Stack` body heading/line, for:

| File | `techStack` value |
|---|---|
| `ThisSite.mdx` | `ReactJS, NextJS, TailwindCSS, Vercel` |
| `PurdueOutingClubWebsiteV2.mdx` | `NextJS, ReactJS, TailwindCSS, PostgreSQL, Vercel, AWS, Typescript` |
| `Jobwatch.mdx` | `C#, .NET Core, MSSQL, Octopus Deploy, TypeScript, ReactJS` |
| `PurdueOutingClubWebsite.mdx` | `Express, ReactJS, HTML, CSS, PostgreSQL, AWS Lightsail` |
| `AppleWeatherClone.mdx` | `ReactJS` |

`CommuterBike.mdx` gets no `techStack` field added — no tags row will render for it, per user decision.

Note: `Jobwatch.mdx` has image lines directly after its `## Tech Stack` block — remove only the heading + tech list line, keep the image lines intact.

### 5. Homepage "Technologies I've Used" section — `app/projects/utils.ts` + `app/page.tsx`
- Add `getAllTechStack()` to `app/projects/utils.ts`: calls `getProjects()`, flattens every post's `metadata.techStack` (skipping posts with none), dedupes (`Array.from(new Set(...))`), returns `string[]`. Keeps aggregation logic next to the other data-access functions rather than in the page component.
- `app/page.tsx` is a server component already importing project data indirectly (`RecentProjects`), so it can import `getAllTechStack` and `Tag` directly (no client-side fetch needed).
- Insert a new section after `Recent Projects` and before `Contact`:
  ```tsx
  <h2 className='text-xl font-semibold tracking-tight mb-4 mt-4'>Technologies I've Used</h2>
  <div className="flex flex-row flex-wrap gap-1.5 mb-4">
    {getAllTechStack().map((tech) => (
      <Tag key={tech}>{tech}</Tag>
    ))}
  </div>
  ```
- This naturally reflects whatever `techStack` values exist once step 4's MDX edits land — no separate list to maintain by hand.

## Verification
- Run dev server, visit `/projects`, confirm each card (except Commuter Bike) shows a wrapped row of pills below its summary, correct in both light and dark mode.
- Visit each project detail page to confirm the old "## Tech Stack" text block is gone and nothing else in the body broke (especially Jobwatch's images).
- Confirm homepage teaser (`RecentProjects`) is visually unchanged.
- Visit homepage, confirm "Technologies I've Used" section shows one tag per unique technology (no duplicates like "ReactJS" appearing once despite being in 4 projects), wraps correctly, styled consistent with `/projects` tags.
