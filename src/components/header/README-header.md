# Header component

The header shows the current app/repository identity and provides appearance,
navigation, About, and GitHub token controls.

- [`header.html`](header.html) contains the `@part:header` markup and a standalone
  preview page.
- [`header.js`](header.js) renders the header, restores preferences, and handles
  header controls and the About/Token panels.
- It uses shared helpers from [`core.js`](../../js/core.js) and sample state from
  [`mock-data.js`](../../mock/mock-data.js).

## Links

- **Brand icon** — always goes back to the start: the page that loaded TooToo,
  with no `?owner=…`, `#file`, cached repo, or last file. Its tooltip names the
  repo hosting the page (`<owner>.github.io/<repo>/` from the address, else the
  install's config). Clicking the title's background (e.g. the `/`) does the same.
- **Owner** — the owner's `github.io` site when `preferPagesUrls` is set, else
  their GitHub profile.
- **Repo** — its Pages site when known to be published, else the GitHub repo.
- **⌂** — the hub page in `homeUrl`, when set.

## Layout

The right-hand buttons are one group (`.header-actions`). As the screen narrows
they slide over the subtitle, which ends in "…". The group moves to a second row
only when it would otherwise cover owner / repo or the branch chip.

## Preview

Open `header.html` directly to try the component preview. Selecting an install
in the sidebar fetches that repository's real `tootoo.config.js` and applies it
the way the app does: built-in defaults first, then the install's values. The
header and the preview settings update to match. Settings the controls don't
cover (favicon, hidden files and folders, `homeUrl`, …) are listed read-only
below them, and keys set more than once are flagged. The file is read as data,
never executed. Private repositories need a token, set with **⚙️**. The preview
keeps its own `storagePrefix`, so the token stays visible. **?** and **⚙️** open
the real About and Token panels in the content area; clicking the same button
again restores the preview. The page stubs the few content/sidebar helpers those
panels call, so the About panel's self-test button only points you to the full
app. The assembled app includes the marked HTML fragment and the JavaScript
source separately.