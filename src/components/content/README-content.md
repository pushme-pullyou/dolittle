# Content component

The content area renders the selected repository file and its file actions.
It also hosts the About and Token panels opened by Header.

- [`content.html`](content.html) contains the `@part:content` markup and a
  standalone preview page.
- [`content.js`](content.js) selects files, renders previews, and wires content
  actions.
- It uses shared helpers from [`core.js`](../../js/core.js), sample state from
  [`mock-data.js`](../../mock/mock-data.js), and embeds the Footer markup.

Open `content.html` directly to try the component preview. The assembled app
includes the marked HTML fragment and the JavaScript source separately.
