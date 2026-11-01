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
