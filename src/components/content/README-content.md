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

HTML/HTM files run in unsandboxed iframes. For a matching local checkout, the
frame loads the actual file; for a repo known to have Pages, it loads the
published URL. This preserves relative config, scripts, assets, and the page's
location for repository detection. Other remote HTML uses a blob URL, where
relative dependencies and location-based detection may not work. The raw view
always shows the fetched source. Only open trusted HTML.
An embedded TooToo copy opens its README rather than resuming the parent app's
saved file selection, preventing recursive previews of the app itself.
