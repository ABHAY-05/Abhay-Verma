# Graph Report - Abhay-Verma  (2026-10-15)

## Corpus Check
- 27 files · ~169,017 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: .css 6, (none) 2, .lock 1)

## Summary
- 200 nodes · 289 edges · 22 communities (10 shown, 12 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4e97ce43`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- UI Assets and Libraries
- Project Scripts and Metadata
- Website Components and Navigation
- Technology Stack Definitions
- TypeScript Compiler Configuration
- Development Tools and Types
- Projects.tsx
- Core Application Dependencies
- Redux State Management
- Asset Type Declarations
- Personal Profile Assets
- Voice Assistant Interface
- Linguistic Project Page
- MedScan Project Page
- Flipkart Clone Interface
- Todo Application Dashboard
- CLAUDE.md
- layout.tsx

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `react` - 9 edges
3. `Page()` - 8 edges
4. `react-intersection-observer` - 7 edges
5. `MultiTilt()` - 7 edges
6. `Tilt()` - 7 edges
7. `react-icons` - 6 edges
8. `Navbar()` - 6 edges
9. `scripts` - 5 edges
10. `next` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Profile Photo of Abhay` --conceptually_related_to--> `Abhay SVG Logo`  [INFERRED]
  src/assets/Abhay.png → public/Abhay.svg
- `Page()` --calls--> `About()`  [EXTRACTED]
  src/app/page.tsx → src/components/About.tsx
- `Page()` --calls--> `Home()`  [EXTRACTED]
  src/app/page.tsx → src/components/Home.tsx
- `Page()` --calls--> `Navbar()`  [EXTRACTED]
  src/app/page.tsx → src/components/Navbar.tsx
- `Home()` --calls--> `Tilt()`  [EXTRACTED]
  src/components/Home.tsx → src/components/Tilt.tsx

## Import Cycles
- None detected.

## Communities (22 total, 12 thin omitted)

### Community 0 - "UI Assets and Libraries"
Cohesion: 0.14
Nodes (12): @emailjs/browser, react, react-hot-toast, Home(), Typewriter(), Bio, email, github (+4 more)

### Community 1 - "Project Scripts and Metadata"
Cohesion: 0.08
Nodes (25): name, private, scripts, build, dev, lint, start, version (+17 more)

### Community 2 - "Website Components and Navigation"
Cohesion: 0.21
Nodes (9): react-icons, react-scroll, About(), Link, DarkMode(), Link, NAV_ITEMS, Navbar() (+1 more)

### Community 3 - "Technology Stack Definitions"
Cohesion: 0.10
Nodes (19): bootstrap, chatBot, css, express, fastAPI, flask, html, javaScript (+11 more)

### Community 4 - "TypeScript Compiler Configuration"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 5 - "Development Tools and Types"
Cohesion: 0.12
Nodes (16): devDependencies, autoprefixer, eslint, eslint-plugin-react-hooks, postcss, prettier, prettier-plugin-tailwindcss, tailwindcss (+8 more)

### Community 6 - "Projects.tsx"
Cohesion: 0.16
Nodes (16): framer-motion, react-intersection-observer, vanilla-tilt, Page(), LeetCode Logo, LeetCode Dark Logo, CodingProfile(), Contact() (+8 more)

### Community 7 - "Core Application Dependencies"
Cohesion: 0.13
Nodes (15): dependencies, aos, @emailjs/browser, framer-motion, next, react, react-dom, react-hot-toast (+7 more)

### Community 8 - "Redux State Management"
Cohesion: 0.15
Nodes (12): react-redux, redux-persist, @reduxjs/toolkit, DarkMode, darkModeSlice, initialState, AppDispatch, authPersistConfig (+4 more)

### Community 21 - "layout.tsx"
Cohesion: 0.29
Nodes (6): next, bitter, metadata, moirai, RootLayout(), Providers()

## Knowledge Gaps
- **24 isolated node(s):** `aos`, `react-dom`, `@tailwindcss/postcss`, `@types/node`, `@types/react` (+19 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 130 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Development Tools and Types` to `Project Scripts and Metadata`?**
  _High betweenness centrality (0.118) - this node is a cross-community bridge._
- **What connects `aos`, `react-dom`, `@tailwindcss/postcss` to the rest of the system?**
  _24 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UI Assets and Libraries` be split into smaller, more focused modules?**
  _Cohesion score 0.1422924901185771 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `Core Application Dependencies` to `Project Scripts and Metadata`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **Should `Project Scripts and Metadata` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Why does `react` connect `UI Assets and Libraries` to `Project Scripts and Metadata`, `Website Components and Navigation`, `Projects.tsx`, `Redux State Management`, `layout.tsx`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Should `Technology Stack Definitions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._