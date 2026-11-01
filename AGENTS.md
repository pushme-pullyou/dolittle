# Dolittle Workshop - AI Agent Instructions

Repo-local guidance. These instructions override global defaults only where they are more specific.

## Hard Constraints

- Vanilla JavaScript only: no frameworks, no jQuery, no build tools (beyond `assemble.ps1` text substitution), no Node.js.
- The assembled app is a single `.html` file: HTML, CSS, and JavaScript inline.
- Static hosting only: GitHub Pages or `file://`; no backend.
- ES2020+: prefer `const`, arrow functions, template literals, async/await; no `var`, no classes, no `this`.

## Karpathy Rules

1. Do not assume. Do not hide confusion. Surface tradeoffs.
2. Write the minimum code that solves the problem. Nothing speculative.
3. Touch only what you must. Clean up only your own mess.
4. Define success criteria. Loop until verified.

## What This Repo Is

**This workshop is the single source of truth for TooToo.** The real code lives in the
component sources under [`src/`](src/); `assemble.ps1` stitches them into a single-file
build. Two generated outputs exist:

- **Dev build** — [`index.html`](index.html) in this repo (`assemble.ps1`), identity `TooToo Dev`.
- **Production** — `index.html` in the sibling `pushme-pullyou-tootoo` repo
  (`assemble.ps1 -Prod -OutFile ..\pushme-pullyou-tootoo\index.html`), neutral config.

**Never hand-edit any `index.html`** — dev, production, or an install's. Edits there are
overwritten by the next assemble/sync.

Key references:

- [`PIPELINE.md`](PIPELINE.md) — the `promote` → `sync` → `publish` release flow.
- [`INSTALL-LIST.md`](INSTALL-LIST.md) — the authoritative list of downstream installs.
- [`src/ARCHITECTURE.md`](src/ARCHITECTURE.md) — layers, state ownership, component contracts.
- [`0-dolittle-agenda.md`](0-dolittle-agenda.md) — current priorities.
- [`0-dolittle-journal.md`](0-dolittle-journal.md) — development journal (add dated entries, newest first).
- History before 2026-10-31 (including `.archive/` snapshots and the old changelog) is in
  the archive repo `pushme-pullyou/tootoo-2026-10`.

## Development Workflow

1. Edit `src/` (components, JS, CSS, config).
2. `pwsh -File assemble.ps1` → rebuild the dev `index.html`; test via `file://`.
3. Check [`tootoo-test-regressions.html`](tootoo-test-regressions.html) via `file://`
   (it loads the dev build; `?build=production` checks the sibling repo's build).
4. `promote` / `sync` / `publish` per [`PIPELINE.md`](PIPELINE.md) — only when asked.

- Before non-trivial edits, define 2-4 concrete success checks, then verify them.
- User-facing changes get a dated changelog bullet in the **tootoo repo's** README
  (written by `promote`); workshop-internal changes go in this repo's journal.

## Style Conventions

- CSS custom properties for colors, sizes, and repeated values; keep them in the `:root` block near the top of the stylesheet.
- Dark mode uses `body.dark-mode` to toggle CSS variables.
- Font sizing uses `rem`; `var(--font-size)` lives on `html` so the A-/A+ controls scale the app.
- External CDN dependencies are intentionally pinned: `marked`, `highlight.js`, `DOMPurify`, and `SheetJS`.
- Keep code beginner-readable and consistent with nearby code.

## Backup Rule

The generated builds need no backups (they are reproducible from `src/`), but `promote`
still snapshots production before overwriting it: `index-<TSF>.html` beside the file,
pruned to the newest two (dated backups are gitignored). Before editing a **source**
file under `src/` non-trivially, a dated backup is not required — git history covers
sources; prefer small, reviewable edits instead.

## Canonical Source & Installs

- **Edit here only.** Every TooToo change is made in this repo's `src/`, never in the
  production repo or an install.
- **Per-install differences live in `tootoo.config.js`,** never in `index.html`. No
  process step ever edits an install's `tootoo.config.js`.
- **Changes flow one way:** `src/` → `promote` → `sync` → `publish`
  ([`PIPELINE.md`](PIPELINE.md); targets in [`INSTALL-LIST.md`](INSTALL-LIST.md)).
- **Don't fan out by hand.** Never apply a fix directly to installs unless the task
  explicitly asks for cross-repo sync.
