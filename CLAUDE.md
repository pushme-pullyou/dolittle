# Claude Instructions

> **2026-11-23:** TooToo work happens in [pushme-pullyou/tootoo](https://github.com/pushme-pullyou/tootoo) (local `pushme-pullyou-tootoo-next`). The pipeline below (`promote` / `sync` / `publish`) is retired: never run it. See AGENTS.md.


Repo-specific guidance lives in [`AGENTS.md`](AGENTS.md). Read that first.

The short version: this is the **workshop** — TooToo's source of truth. Edit the
components under [`src/`](src/), rebuild with `assemble.ps1`, test via `file://`.
Both `index.html` builds (dev here, production in the sibling `pushme-pullyou-tootoo`
repo) are **generated** — never hand-edit them. Release flow: [`PIPELINE.md`](PIPELINE.md).

Current priorities: [`0-dolittle-agenda.md`](0-dolittle-agenda.md). Recent notes:
[`0-dolittle-journal.md`](0-dolittle-journal.md).
