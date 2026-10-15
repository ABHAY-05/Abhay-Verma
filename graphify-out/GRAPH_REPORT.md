# Graph Report - Abhay-Verma  (2026-10-15)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 190 nodes · 266 edges · 20 communities (9 shown, 11 thin omitted)
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
- Navbar.tsx
- Core Application Dependencies
- Redux State Management
- Asset Type Declarations
- Personal Profile Assets
- Voice Assistant Interface
- Linguistic Project Page
- MedScan Project Page
- Flipkart Clone Interface
- Todo Application Dashboard

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Page()` - 8 edges
3. `MultiTilt()` - 7 edges
4. `Tilt()` - 7 edges
5. `react-intersection-observer` - 7 edges
6. `Navbar()` - 6 edges
7. `react-icons` - 6 edges
8. `Home()` - 5 edges
9. `Projects()` - 5 edges
10. `About()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Profile Photo of Abhay` --conceptually_related_to--> `Abhay SVG Logo`  [INFERRED]
  src/assets/Abhay.png → public/Abhay.svg
- `Home()` --calls--> `Typewriter()`  [EXTRACTED]
  src/components/Home.tsx → src/components/Typewriter.tsx
- `Page()` --calls--> `About()`  [EXTRACTED]
  src/app/page.tsx → src/components/About.tsx
- `Page()` --calls--> `Navbar()`  [EXTRACTED]
  src/app/page.tsx → src/components/Navbar.tsx
- `Home()` --calls--> `Tilt()`  [EXTRACTED]
  src/components/Home.tsx → src/components/Tilt.tsx

## Import Cycles
- None detected.

## Communities (20 total, 11 thin omitted)

### Community 0 - "UI Assets and Libraries"
Cohesion: 0.11
Nodes (17): react-redux, redux-persist, @reduxjs/toolkit, bitter, metadata, moirai, RootLayout(), Providers() (+9 more)

### Community 1 - "Project Scripts and Metadata"
Cohesion: 0.13
Nodes (11): @emailjs/browser, react-hot-toast, Typewriter(), Bio, email, github, linkedin, phone (+3 more)

### Community 2 - "Website Components and Navigation"
Cohesion: 0.09
Nodes (21): bootstrap, chatBot, css, express, fastAPI, flask, framerMotion, html (+13 more)

### Community 3 - "Technology Stack Definitions"
Cohesion: 0.19
Nodes (14): react-intersection-observer, Page(), LeetCode Logo, LeetCode Dark Logo, CodingProfile(), Contact(), Home(), MultiTilt() (+6 more)

### Community 4 - "TypeScript Compiler Configuration"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 5 - "Development Tools and Types"
Cohesion: 0.11
Nodes (17): name, private, scripts, build, dev, lint, start, version (+9 more)

### Community 6 - "Navbar.tsx"
Cohesion: 0.18
Nodes (11): react-icons, react-scroll, vanilla-tilt, About(), Link, DarkMode(), Link, NAV_ITEMS (+3 more)

### Community 7 - "Core Application Dependencies"
Cohesion: 0.12
Nodes (16): devDependencies, autoprefixer, eslint, eslint-plugin-react-hooks, postcss, prettier, prettier-plugin-tailwindcss, tailwindcss (+8 more)

### Community 8 - "Redux State Management"
Cohesion: 0.13
Nodes (15): dependencies, aos, @emailjs/browser, framer-motion, next, react, react-dom, react-hot-toast (+7 more)

## Knowledge Gaps
- **16 isolated node(s):** `aos`, `autoprefixer`, `eslint-plugin-react-hooks`, `postcss`, `prettier` (+11 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 123 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Core Application Dependencies` to `Development Tools and Types`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **What connects `aos`, `autoprefixer`, `eslint-plugin-react-hooks` to the rest of the system?**
  _16 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UI Assets and Libraries` be split into smaller, more focused modules?**
  _Cohesion score 0.10869565217391304 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `Redux State Management` to `Development Tools and Types`?**
  _High betweenness centrality (0.117) - this node is a cross-community bridge._
- **Should `Project Scripts and Metadata` be split into smaller, more focused modules?**
  _Cohesion score 0.13043478260869565 - nodes in this community are weakly interconnected._
- **Why does `react-intersection-observer` connect `Technology Stack Definitions` to `Project Scripts and Metadata`, `Development Tools and Types`, `Navbar.tsx`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Should `Website Components and Navigation` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._