# Reference

## Canonical vs installs

**This workshop repo holds the source of truth** — the component sources under `src/`
and the assembler. **`pushme-pullyou-tootoo`** (the sibling repo) is **canonical
production**: the generated `index.html` that every install receives. All the other
repos below are **installs**: each carries a generated, vendored copy of the canonical
`index.html`, customized only through its own `tootoo.config.js`. Never edit any
`index.html` by hand; changes are made here in `src/` and fanned out with
`promote` → `sync` → `publish`. See [`AGENTS.md`](AGENTS.md) and
[`PIPELINE.md`](PIPELINE.md). The **authoritative install/target list** is
[`INSTALL-LIST.md`](INSTALL-LIST.md) — keep that in sync when an install is added, not this file.

## Repos

* `G:\My Drive\2026-theo-github\pushme-pullyou-dolittle` — **source of truth (this repo)**
* `G:\My Drive\2026-theo-github\pushme-pullyou-tootoo` — **canonical production**
* G:\My Drive\2026-theo-github\pushme-pullyou-github
* G:\My Drive\2026-theo-github\pushme-pullyou-assets
* G:\My Drive\2026-theo-github\theo-armour-2025
* G:\My Drive\2026-theo-github\theo-armour-2026
* G:\My Drive\2026-theo-github\theo-armour-agenda
* G:\My Drive\2026-theo-github\theo-armour-pages
* G:\My Drive\2026-theo-github\theo-armour-qdata
* G:\My Drive\2026-theo-github\theo-armour-sandbox
* G:\My Drive\2026-theo-github\theo-armour-aa
* G:\My Drive\2026-theo-github\theo-armour-genealogy
* G:\My Drive\2026-theo-github\theo-armour-wikitheo
* I:/My%20Drive/tech/index.html
