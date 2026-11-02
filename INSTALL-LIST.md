# TooToo Install List

The downstream copies of TooToo — every `index.html` that `sync` overwrites and `publish` commits + pushes. This is the list of record: when an install is added, moved or retired, edit it here. The release flow itself is in [PIPELINE.md](PIPELINE.md).

An **install** is a repo that carries an unmodified copy of the canonical `index.html`, branded only by its own `tootoo.config.js`. (Not a GitHub *fork* — forking TooToo to change its code is covered in [FORKING.md](FORKING.md).) No pipeline command touches an install's `tootoo.config.js`.

## Targets

All 16 are git repos, so every one is both a `sync` and a `publish` target.

The standalone header preview and config editor load this table on startup. Keep the GitHub identity
and default preview branch with each path; folder names need not match repo names.

| Local index.html path | Owner/repo | Branch |
| --- | --- | --- |
| `g:\My Drive\2026-theo-github\heritage-happenings.github.io\index.html` | heritage-happenings/heritage-happenings.github.io | master |
| `G:\My Drive\2026-theo-github\heritage-happenings-documents\index.html` | heritage-happenings/documents | main |
| `g:\My Drive\2026-theo-github\pushme-pullyou-assets\index.html` | pushme-pullyou/assets | main |
| `g:\My Drive\2026-theo-github\pushme-pullyou-github-io\index.html` | pushme-pullyou/pushme-pullyou.github.io | main |
| `g:\My Drive\2026-theo-github\theo-armour-github-io\index.html` | theo-armour/github-io | main |
| `g:\My Drive\2026-theo-github\theo-armour-2025\index.html` | theo-armour/2025 | main |
| `g:\My Drive\2026-theo-github\theo-armour-2026\index.html` | theo-armour/2026 | main |
| `g:\My Drive\2026-theo-github\theo-armour-aa\index.html` | theo-armour/aa | main |
| `g:\My Drive\2026-theo-github\theo-armour-agenda\index.html` | theo-armour/agenda | main |
| `g:\My Drive\2026-theo-github\theo-armour-collection\index.html` | theo-armour/collection | main |
| `g:\My Drive\2026-theo-github\theo-armour-genealogy\index.html` | theo-armour/genealogy | main |
| `g:\My Drive\2026-theo-github\theo-armour-pages\index.html` | theo-armour/pages | main |
| `g:\My Drive\2026-theo-github\theo-armour-qdata\index.html` | theo-armour/qdata | main |
| `g:\My Drive\2026-theo-github\theo-armour-sandbox\index.html` | theo-armour/sandbox | main |
| `g:\My Drive\2026-theo-github\theo-armour-wikitheo\index.html` | theo-armour/wikitheo | main |
| `j:\My Drive\tech\index.html` | heritage-happenings/tech | main |

## Notes

- **Repo split (2026-10-31).** This list now lives in the **Dolittle workshop** repo.
  Canonical production `index.html` lives in the sibling **`pushme-pullyou-tootoo`** repo
  (GitHub `pushme-pullyou/tootoo`) — it is `promote`'s output and `sync`'s source, and is
  *not* itself an install, so it is not listed above. The previous combined repo is archived
  as `pushme-pullyou/tootoo-2026-10`.
- **Renamed from `FORK-LIST.md`** (2026-10-29). "Fork" was doing double duty — a GitHub fork of the source vs. a repo that merely receives the built file — so downstream copies are now called *installs*.
- **How the list was found** — discovered 2026-06-21 by scanning for TooToo builds (`TOOTOO_CONFIG` / `appName: 'TooToo'`) that are **not** the canonical repo.
- **`heritage-happenings-documents`** — added 2026-08-09 as the 14th target. TooToo installs at the repo root, replacing a stub `index.html` that redirected to a `./tootoo/` folder which never existed (the stub is archived beside it as `index-redirect-<TSF>.html`). Its first `tootoo.config.js` was written during that sync — the one and only time a pipeline command creates one; no later command touches it. The repo's pre-existing `.tootoo/` folder is an older, unrelated viewer, not a sync target.
- **`pushme-pullyou-github-io`** — added 2026-10-29 as the 16th target: the organization's root site, `pushme-pullyou.github.io`. Not to be confused with **`pushme-pullyou-github-2019`** (folder renamed from `pushme-pullyou-github` by 2026-11-01), whose remote is `pushme-pullyou/2019`, the archived 2016–2019 site.
- **`tech`** — moved from `i:` to `j:\My Drive\tech` (2026-08-09). Its Google Drive letter can shift between machines/remounts, so a "missing" report for this target usually means a changed drive letter, not a deleted install — check the other letters before treating it as gone.

## Adding an install

1. Add its `index.html` path to the list above.
   Include its GitHub `owner/repo` and default preview branch in the same row.
2. Make sure the repo has its own `tootoo.config.js` (owner, repo, appName, …).
3. Update the target count if it changes ("All 16 …").
