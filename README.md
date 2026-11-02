# Dolittle — the workshop 🩺

**The Doctor's workshop: where the Pushme-Pullyou menagerie is raised.**

Every animal in the [Pushme-Pullyou](https://github.com/pushme-pullyou) family is born
and raised here — its component sources, its assembler, its tests. The workshop is named
for the Doctor himself: the one character who isn't an animal, whose house all the
animals live in, and whose special power — talking with the animals — is how this repo
works too: you poke and tweak it by conversation.

One animal lives in the workshop permanently: **Pushme-Pullyou**, the two-headed beast,
is the release pipeline. One head pulls improvements in (dev, carving, merges); the
other pushes finished builds out to every animal's repo (`promote` → `sync` → `publish`).

Right now the workshop raises one product: **[TooToo](https://github.com/pushme-pullyou/tootoo)**,
the single-file GitHub repo viewer. JipJip, DabDab and GubGub will be born here too.

## How changes flow

1. Edit the component sources in [`src/`](src/) — each `components/<name>/` folder
   holds its HTML, JavaScript, and README; shared code lives in `js/`.
2. `pwsh -File assemble.ps1` → builds the dev `index.html` beside it. Test via `file://`.
3. `promote` regenerates production `index.html` in the sibling
   [`pushme-pullyou-tootoo`](https://github.com/pushme-pullyou/tootoo) repo
   (`assemble.ps1 -Prod`), then `sync` copies it to every install and `publish`
   commits + pushes. Full spec: [`PIPELINE.md`](PIPELINE.md); rules: [`AGENTS.md`](AGENTS.md).

**Both `index.html` files — dev and production — are generated. Never hand-edit either.**

## What's here

```text
src/                          ← THE SOURCE: components/ · js/ · styles.css · config.js
  ARCHITECTURE.md             ← layers, state ownership, component contracts
  mock/                       ← sample data so component pages run standalone, offline
assemble.ps1                  ← stitches src/ into a single index.html (dev or -Prod)
index.html                    ← dev build (GENERATED — rebuild with assemble.ps1)
PIPELINE.md                   ← Pushme-Pullyou, the promote → sync → publish release flow
INSTALL-LIST.md               ← the installs (downstream copies) that sync/publish update
AGENTS.md                     ← AI agent guidance for this repo
0-dolittle-agenda.md          ← priorities and ideas
0-dolittle-journal.md         ← development journal
0-dolittle-reference.md       ← repo map: source / canonical / installs
tootoo-test.html              ← standalone test harness for pure helpers
tootoo-test-load.html         ← manual GitHub raw-file load tester
tootoo-test-regressions.html  ← browser regression checks against the assembled app
tootoo-reference.html         ← frozen pre-carve single-file app, kept for reference
tools/                        ← standalone workshop tools, including the config editor
```

## The family

| Repo | What it is |
| --- | --- |
| [pushme-pullyou.github.io](https://github.com/pushme-pullyou/pushme-pullyou.github.io) | The organization's front door |
| [tootoo](https://github.com/pushme-pullyou/tootoo) | TooToo, the finished app — this workshop's output |
| **dolittle** (this repo) | The Doctor's workshop — sources, assembler, and Pushme-Pullyou the pipeline |
| [tootoo-2026-10](https://github.com/pushme-pullyou/tootoo-2026-10) | Archive: the 2026-04 → 2026-10 combined repo, history intact |
| [2019](https://github.com/pushme-pullyou/2019) | Archive: the original 2016–2019 site |

## Changelog

### 2026-10-31

* Workshop named **Dolittle** (repo `dolittle`), after the Doctor; the release pipeline
  is cast as **Pushme-Pullyou**, the two-headed animal that talks to and hears from
  GitHub. The `0-tootoo-*` agenda/journal/reference files became `0-dolittle-*`.
* Workshop born: `tootoo-dev/` moved out of the combined TooToo repo into this
  standalone repo, per the plan in the org README. Paths updated (production now
  written to the sibling `pushme-pullyou-tootoo` repo); the combined repo is archived
  as `tootoo-2026-10` with the full earlier history, prompts and snapshots.
