# Sidebar component

The sidebar loads and displays the repository file tree, with filtering,
folder controls, and resizing.

- [`sidebar.html`](sidebar.html) contains the `@part:sidebar` markup and a
  standalone preview page.
- [`sidebar.js`](sidebar.js) fetches and renders the tree and handles sidebar
  interactions.
- It uses shared helpers from [`core.js`](../../js/core.js), sample state from
  [`mock-data.js`](../../mock/mock-data.js), and hands file selection to Content.

Open `sidebar.html` directly to try the component preview. The assembled app
includes the marked HTML fragment and the JavaScript source separately.

## Behaviour

- **Tree:** folders keep their existing order, followed by README-prefixed files
  (for example, `README.md`, `README RFP.md`, or dated backups), then other files.
  Dotfolders, `CONFIG.hiddenFolders` and `CONFIG.hiddenFiles` are left out. Hover
  a folder for its file and folder counts and total size; hover a file for its
  type and size.
- **README auto-open:** the root README opens on first load, and the first time
  you expand a folder its own README opens. Set `autoOpenFolderReadme: false`
  to turn the folder part off.
- **Blog mode:** a folder named `blog` with month folders (`06-June`) sorts
  newest first, with year folders (`2025`) after the months. Posts named
  `2026-06-28-title` sort newest first, and expanding the blog opens the latest post.
- **Filter:** matches file names (hyphens and spaces count as the same) and shows
  the match count in the heading. Escape or ✕ clears it and restores the folders
  you had open.
- **Scroll:** the header, filter, and file tree share a scroll area; a floating ↑
  appears when the panel overflows and returns the whole sidebar to the top.
- **Keyboard:** `/` goes to the filter, `\` to the tree, Ctrl+B toggles the
  sidebar. In the tree: arrow keys, Home / End and Page Up / Down move and open
  files; Enter or Space toggles a folder; Left / Right collapse and expand.
- **Errors:** a rate limit or private repo opens the token panel. A missing
  branch in a readable repo says so instead, and the branch menu can pick another.
  Repos over GitHub's tree limit show a "too large" notice.
- **Resizing:** drag the divider; the width is saved per page.

The **branch switcher** code lives here, but its chip and menu markup are in
the header component, so try it in the full app rather than this preview.
