# Footer component

The footer displays repository-owner copyright information and a license link.

- [`footer.html`](footer.html) contains the `@part:footer` markup and a
  standalone preview page.
- [`footer.js`](footer.js) renders and updates the footer details
  (`renderFooter()`, using brand text from `CONFIG`).
- It uses shared helpers from [`core.js`](../../js/core.js) and sample state from
  [`mock-data.js`](../../mock/mock-data.js).

Open `footer.html` directly to try the component preview. The assembled app
includes the marked HTML fragment and the JavaScript source separately.
