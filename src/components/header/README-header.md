# Header component

The header shows the current app/repository identity and provides appearance,
navigation, About, and GitHub token controls.

- [`header.html`](header.html) contains the `@part:header` markup and a standalone
  preview page.
- [`header.js`](header.js) renders the header, restores preferences, and handles
  header controls and the About/Token panels.
- It uses shared helpers from [`core.js`](../../js/core.js) and sample state from
  [`mock-data.js`](../../mock/mock-data.js).

Open `header.html` directly to try the component preview. Selecting an install
in the sidebar updates the header with its owner, repository, branch, and GitHub
link, exercising the live header controls. **?** and **⚙️** open the real About
and Token panels in the content area; clicking the same button again restores the
preview. The page stubs the few content/sidebar helpers those panels call, so the
About panel's self-test button only points you to the full app. The assembled app
includes the marked HTML fragment and the JavaScript source separately.