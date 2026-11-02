# Dolittle tools

## TooToo Config Editor

Open [`config-editor.html`](config-editor.html) in a browser. It follows
TooToo's header / sidebar / content / footer layout: click one install in the
sidebar to inspect and edit its settings in the content pane, then use the
footer actions to copy or download that install's `tootoo.config.js`.

The sidebar lists the repositories in [`../INSTALL-LIST.md`](../INSTALL-LIST.md).
Clicking an install reads its public `tootoo.config.js`, parses it as data
(never executing it), and loads its settings into the editor. A missing config
or private repository is reported in the content pane; the editor is initialized
for that install so a new config can still be created. The sidebar mirrors the
install list in the page, so update its repository array when `INSTALL-LIST.md`
changes.

The editor is a standalone page with no external dependencies. It runs locally;
settings stay in the page and are not uploaded or saved. Empty optional text
fields are omitted so TooToo keeps its built-in defaults. The hidden-file list
starts with TooToo's built-in `tootoo.config.js` entry; remove it if that file
should appear in the sidebar.

The generated file sets `window.TOOTOO_CONFIG`, which TooToo merges over its
built-in configuration when it starts. Keep this file with the install, not in
the Dolittle app's `src/` tree.
