# TooToo — Component Architecture

How the component-based TooToo is organized. Status: **implemented** — this describes the
live `src/` layout of the Dolittle workshop repo (drafted 2026-06-21 as `tootoo-dev/`;
graduated to canonical 2026-06-23; moved to its own repo 2026-10-31). It is the source
every TooToo `index.html` is assembled from, not a proposal.

Throughout, **§ numbers** refer to the numbered sections of
[`../tootoo-reference.html`](../tootoo-reference.html) — the frozen pre-carve single-file
app these components were extracted from.

## Layers

It isn't four equal components — it's **three layers**:

1. **`core`** (no UI) — the backbone every component stands on.
2. **Four UI components** — header, sidebar, content, footer.
3. **`main`** — init order + wiring.

## Communication model: shared globals, one writer per field

Components talk through shared global state (`CONFIG` + `state`), the way the
current single-file app already does. The discipline that keeps that sane:

> **Every global field has exactly ONE owner (writer). Everyone else only reads.**
> To change a field you don't own, call the owner's function — don't write it.

### State ownership table

| Field | Owner (only writer) | Readers | Notes |
| --- | --- | --- | --- |
| `CONFIG` | core (at init) | all | frozen after init; never written again |
| `state.owner` / `repo` / `branch` | **Header** | sidebar, content | the "location / address" |
| `state.tree` | **Sidebar** | content, header | set after `fetchTree` |
| `state.oversized` | **Sidebar** | content | discovered during tree fetch |
| `state.currentFilePath` | **Content** | header, sidebar | set via `selectFile` |
| `state.localMode` / `localBase` / `pagesEnabled` | core (env detect) | sidebar, content | environment facts |

Example flows:
- Header changes branch → writes `state.branch` → calls `Sidebar.fetchTree()`.
- Sidebar row clicked → calls `Content.selectFile(path)` (Content writes `currentFilePath`).
- Header `?`/`⚙️` clicked → opens the About/Token panel (rendered into the content area).

## Component contracts

Each component: a **mission**, the **DOM** it owns, what state it **writes** vs
**reads**, and the **functions it exposes**. In the dev setup each UI component
keeps its markup, behavior, and notes together in a named folder under
`src/components/`.

### 🟦 Header — "Where are we?"
- **Owns DOM:** the `<header>` bar; the About + Token dialogs.
- **Writes:** `state.owner/repo/branch` (repo + branch controls).
- **Reads:** `CONFIG` (branding, theme), rate-limit info.
- **Exposes:** `updateHeaderFromConfig()`, `showAbout()`, `showToken()`, repo/branch pickers.
- **Sections from reference:** §8, §10, §11, §12, §12c.

### 🟩 Sidebar — "What files exist & how they're shown"
- **Owns DOM:** the file tree, filter input, expand/collapse, resizer.
- **Writes:** `state.tree`, `state.oversized`; local display state (filter text, expanded folders).
- **Reads:** `state.owner/repo/branch`, `CONFIG.hiddenFolders/hiddenFiles`.
- **Exposes:** `fetchTree()`, `renderTree()`, `applyFilter()`, `expandAll()/collapseAll()`.
- **Hands off:** calls `Content.selectFile(path)` on a row click.
- **Sections:** §18–§29.

### 🟨 Content — "Show the file & act on it"
- **Owns DOM:** the main content area, the file header (breadcrumbs + actions), back-to-top.
- **Writes:** `state.currentFilePath`.
- **Reads:** `state.owner/repo/branch`, `state.tree`, `state.localMode`, `CONFIG`.
- **Exposes:** `selectFile(path)`, `renderContent()`, `buildFileHeader()`, self-test.
- **Hosts:** the About/Token panels the header opens.
- **Sections:** §31–§38, §12b.

### ⬜ Footer — branding / identity
- **Owns DOM:** the content-area copyright/rights and license footer.
- **Reads:** `CONFIG.rightsText/rightsOwners`, `state.owner`.
- **Exposes:** `renderFooter()`.
- **Sections:** CSS "Footer".

### ⚙️ core — state + services (no DOM)
- **Owns:** `CONFIG`, the `state` object, utilities, storage keys, blob tracking,
  file-text cache, view prefs, GitHub API helpers, file icons, size format, repo
  stats, `detectRepo`, environment detection.
- **Sections:** §1–§7, §9, §14–§17, §34–§36.

### 🔗 main — init + wiring
- **Owns:** `init()`, `setupListeners()`, global error handlers, hash routing.
- **Init order:** core → detect environment + repo → `Header.update` → `Sidebar.fetchTree`
  → `Footer.render` → `setupListeners` → hash route to a file.
- **Sections:** §13, §30, §39, §40.

## File layout this implies

```text
src/
  index.template.html   skeleton with @include markers
  styles.css            shared (base tokens + per-component sections appended)
  config.js             dev config — bakes a default repo + dev identity for standalone testing
  config.prod.js        empty production config — keeps the shipped build neutral
  components/
    header/  README-header.md  header.html  header.js
    sidebar/ README-sidebar.md sidebar.html sidebar.js
    content/ README-content.md content.html content.js
    footer/  README-footer.md  footer.html  footer.js
  js/          core.js  main.js
  mock/        mock-data.js   (sample CONFIG, state, tree, file blob)
```

`../assemble.ps1` stitches this into a single file — two outputs, differing only by the
config block: the **dev build** (`../index.html`, includes `config.js`) and the
**production build** (`-Prod`, includes `config.prod.js`, written to the sibling
`pushme-pullyou-tootoo` repo). See [`../PIPELINE.md`](../PIPELINE.md).

Each component's `*.html` page mocks **exactly the state slice it reads** — so the
page is a runnable copy of that component's contract. Its folder README describes
the component's responsibilities and standalone page. If a page has to mock a
field the table doesn't grant it, the boundary is wrong.

## Open boundary to confirm

- **"Current folder / path."** Header owns repo+branch (the address); Content owns
  the selected *file*; Sidebar owns *folder expansion* in the tree (local display).
  Whether a separate "current folder" cursor belongs to the Header (as part of the
  address/breadcrumb) is the one fuzzy line — assumed Sidebar-local for now.
