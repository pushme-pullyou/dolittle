# TooToo — Development Journal

## 2026-11-02

* **Editor cleanup** — both standalone editors now share the INSTALL-LIST.md
  loader; removed the config editor's stale hard-coded install list. Updated
  header documentation for the unified table, font presets, favicon files,
  validation, and config downloads. The generated app has no new dependency.

* **Heading font presets restored** — font buttons in the header settings update
  both font fields and the live preview, with the selected preset indicated.
  Choices are included in config downloads; None clears both fields.

* **Configurable icon file** — added `faviconFile` to both config editors and
  app startup. It uses a supplied file or URL for the tab, header, and footer
  marks; empty means none. The header preview resolves filenames against the
  selected install. No icons are generated.

* **Plain favicon.ico only** — removed the assembler's fallback icon generator
  and obsolete generation comments. The app and brand marks use the provided
  `favicon.ico` directly; builds leave icon files untouched. The frozen pre-carve
  reference remains historical, not part of the build.

* **Hide dated backups by default** — `hideDatedBackups` now defaults to `true`.
  Set it to `false` to show backup snapshots. Date-first content stays visible.
  The header settings and standalone config editor reflect the new default.

* **Download header config** — added a `tootoo.config.js` download from the
  unified settings table. Exports explicit install values and preview edits,
  including unknown keys; inherited defaults are omitted. Invalid edits block
  downloading. The browser saves a new file without changing or publishing repos.

* **Unified header settings** — replaced separate preview controls and config
  report with one editable setting/value table. Explicit install values and
  preview edits are bold; inherited defaults are muted. All built-in settings
  and unknown file keys are shown, with JSON validation for structured values
  and a way to restore defaults. Edits are preview-only, not file writes.

* **Live header install list** — the standalone header preview reads its menu
  from INSTALL-LIST.md at startup, using the target table's owner/repo and branch.
  Additions and removals no longer need matching hard-coded header buttons.
  Load and format errors appear in the sidebar.

* **Executable HTML previews** — HTML/HTM iframe previews now run without a
  sandbox or the old sandbox notice. Open only trusted HTML: its scripts can
  access TooToo's parent document and, on hosted origins, its stored GitHub token.
  Raw-source viewing and Markdown iframe restrictions are unchanged.

* **Header preview default** — the standalone header page now opens at
  `pushme-pullyou / dolittle`, with the owner linked to
  `https://pushme-pullyou.github.io/` and the repo linked to
  `https://pushme-pullyou.github.io/dolittle`. Other component mocks and install
  previews are unchanged.

## 2026-11-01

* **Config editor** — added a standalone workshop tool at `tools/config-editor.html`
  to generate per-install `tootoo.config.js` files. It stays outside the assembled
  app and runs locally without uploading settings. Reshaped it around the TooToo
  header / sidebar / content / footer: clicking a single install in the sidebar
  loads its config for inspection and editing in the content pane, and
  copy/download actions stay in the footer.

## 2026-10-31

* **Hub harvest** — ported five general-purpose features from Theo's TooToo Hub build
  (`theo-armour.github.io`, 2026-10-26) into the canonical sources, generalized for
  arbitrary repos (the Hub could assume one owner with Pages everywhere; canonical
  uses a new `repoHasPages()` — Pages URLs only for `<owner>.github.io` repos, the
  repo the app is served from, or installs that set the new `preferPagesUrls` knob):
  1. Header title segments are live links (owner → github.com or the owner's site,
     repo → its Pages site when known, else github.com); the slash between them and
     the title background keep the click-to-reset.
  2. New Tab opens a viewable file's live Pages copy when the repo is known to have
     one; downloads keep the raw URL.
  3. New `hideDatedBackups` config knob — hides `name-2026-10-24…` backup snapshots
     from the tree (date-first blog posts unaffected). Off by default.
  4. Floating ↑ button over the file tree, appearing after 150 px of scroll.
  5. Markdown iframes, safely: `MD_PURIFY` now admits `<iframe>` and a DOMPurify
     `afterSanitizeAttributes` hook re-sandboxes every frame (no `allow-same-origin`
     on the origins where the token lives), lazy-loads them, resolves relative `src`
     per repo (local file in drop-in mode, else Pages/raw), and drops `http:`/`data:`
     sources. Not ported (GubGub seeds): repo shelf, `ta-data.js`, private-repo
     merge, organizations row, `@@@` reveal blocks.
  Verified: 52/52 browser regressions, 27/27 helper tests, headless screenshot of the
  dev build showing the linked header over the local checkout. Not yet promoted —
  production and install docs (README knobs) update at the next `promote`.

* Workshop named **Dolittle** (repo `dolittle`), after the Doctor who talks to the
  animals; the release pipeline is cast as **Pushme-Pullyou**, the two-headed animal
  that talks to and hears from GitHub. `0-tootoo-*` files renamed `0-dolittle-*`.

* Repo split, executing the structure in the org README: the old combined repo
  (`pushme-pullyou-tootoo`) is archived as `tootoo-2026-10`; the finished app now lives
  alone in a fresh minimal `pushme-pullyou-tootoo` (index.html, config, examples/, docs);
  and everything `tootoo-dev/` held — `src/`, `assemble.ps1`, tests, this journal, the
  agenda, PIPELINE / INSTALL-LIST — moved to this new **Dolittle workshop** repo.
  Left behind in the archive: `.archive/`, AI-session folders (`.chat-gpt/`, `.gemini/`),
  recreate prompts, dated backups, the pre-pipeline `.github/skills/`, and the closed
  carve-era audits (PARITY.md, lab-fixes.md, README-tootoo-dev.md).

## 2026-06-26

* 2026-06-25: add a header to the readme that is a link to the example folder. This is a test of the new link hover effect. add some links to interesting files in the example folder underneath the header.
* 2026-06-25: all links to have a hover effect. All links have underlines. This includes headers that are links as well.
* 2026-06-24: user footer message

## 2026-06-24

* 2026-06-24: clean up readme files
* 2026-06-23: favicon in config.js

## 2026-06-23

Done

* 2026-06-24: Add to config.js: ability to inform the app that a favicon file is present and there is no need to create a favicon
* 2026-06-24: Hide index.html
* 2026-06-24:Drop MIT
* 2026-06-23 Blog post folders display newest at top
* 2026-05-26 ~ update both local and GitHub repos: or maybe separate apps
* 2026-05-31 ~ repos to the header bar
* 2026-05-31 ~ add branches to the header bar
* 2026-05-26 ~ Update readme
* About shows the live branch count (name + all-branches link done 2026-06-08)
* **Keyboard shortcut for toggling sidebar** — `Ctrl+B` (VS Code convention). Useful on narrow screens.
* **File search** (`Ctrl+F` in sidebar) — fuzzy match across all file paths, not just the filter substring match. Jump to result on Enter.
* **Branch/tag switcher** — dropdown in the header to switch branches. Already have `state.branch`, just need a `GET /repos/.../branches` call and re-fetch the tree.
* **Print/export** — render current markdown file to a clean print stylesheet, or offer "Save as PDF" via `window.print()` with `@media print` styles.

## 2026-06-16

✅ **Fixed: New Tab now displays text files instead of downloading (local mode)**

* markdown (.md, .markdown, .mkd, .mkdn)
* 3D model source (OBJ, STL, MTL)
* Extensionless text files (LICENSE, Makefile, etc.)

**Solution:** Added `isTextOpenAsPlain()` helper. When "New Tab" is clicked on these file types **in local mode** (`file://`), the handler fetches the file as text and opens it as a `text/plain` blob URL in a new tab. This forces display instead of downloading, and never navigates the app away.

On GitHub Pages, `getNewTabUrl()` already handles these correctly: markdown renders via Pages, OBJ/STL/MTL and extensionless text files serve as `text/plain` from raw—so no blob conversion needed.



## 2026-06-08

* 2026-06-08 ~ Clicks on About and Token buttons Should toggle their appearance and disappearance
* 2026-06-08 ~ New tab:
  * local: csv, stl, xls
* 2026-06-08 ~ About page refreshed:
  * copyright, license, repo link
  * rejig repo / tips / about; click ? or ⚙️ Token again to return
  * shows current branch + all-branches link
  * keyboard shortcuts updated (Ctrl/⌘ B, Esc)

I'm still very unclear as to the way that files are opened depending on whether they are local or on the server and whether the server is public or not.

## 2026-06-02

* 2026-05-31 ~ Update tips & why pages
* 2026-06-02 ~ tidy the sample files.
* 2026-06-02 ~ Sidebar header: folders and files and sizes
* 2026-05-26 ~ support printing the current file with a clean print stylesheet
* 2026-05-31 ~ find files ~ Much better filters
* Control B to Toggle sidebar

***

Here is my previous prompt for index.html:

"this file is going to be quite large and complicated. Is there any place where we can streamline or simplify it?"

You worked for a long time on this and came up with a new index.html that is the same size as the earlier version - index-2026-06-01-22-49.html. And it seems to display the same error of displaying an HTML file using raw GitHub user content.

Review and comment on this situation.

## 2026-05-28

* 2026-05-28 ~ Add hiddenFiles ~ for tootoo.config.sys etc
* 2026-05-28 ~ Links in theme colors

  'G:\My Drive\2026-theo-github\heritage-happenings.github.io'
  'G:\My Drive\2026-theo-github\pushme-pullyou-github'
  'G:\My Drive\2026-theo-github\pushme-pullyou-assets'
  'G:\My Drive\2026-theo-github\theo-armour-2025'
  'G:\My Drive\2026-theo-github\theo-armour-2026'
  'G:\My Drive\2026-theo-github\theo-armour-agenda'
  'G:\My Drive\2026-theo-github\theo-armour-aa'
  'G:\My Drive\2026-theo-github\theo-armour-genealogy'
  'G:\My Drive\2026-theo-github\theo-armour-pages'
  'G:\My Drive\2026-theo-github\theo-armour-qdata'
  'G:\My Drive\2026-theo-github\theo-armour-sandbox'
  'G:\My Drive\2026-theo-github\theo-armour-wikitheo'
  'I:\My Drive\tech'

For all these repos, to their tootoo.config.js file add:
 subtitle: 'a GitHub repository browser',
 headingFontUrl: 'https://fonts.googleapis.com/css2?family=Patua+One&display=swap',
  headingFont: '"Patua One", serif',
  hiddenFiles: [ 'tootoo.config.js' ],
  hiddenFolders: [ 'Images' ],

## 2026-05-26

currently the current url used when reloading is being saved to local storage. I think this can be confusing to a user who's not been to the site for a while. What would that be a more normal way of handling reloading?

* 2026-05-26 ~ theming
* 2026-05-26 ~ Add a favicon for each repo, using the GitHub organization avatar if available, otherwise a default icon.
* 2026-05-26 ~ Config in external file.
* 2026-05-26 ~ support for the linux repo
* 2026-05-26 ~ Reload last page and file in the sidebar, and open it on load. Store in session storage.
* 2026-05-25 ~ Files with no extension are sent to a new tab.
* Favicon to GitHub organization
* User theming
* Make sure all the different code sections are relevant and are factual.
* That the numbering of sections is relevant

## 2026-05-25

* 2026-05-19 PDF opens in new tab instead of downloading
* Add keystroke to initiate sidebar scrolling
* 2026-05-19 file size slides under filename, not in a separate column
* Add a footer to the sidebar with copyright and license info, and a link go to top

## 2026-04-26

## Why TooToo?

A blog post for each
* Run a large and maintain a large number of site
* Archivable
* Free, open source, no vendor lock-in
* No backend, no database, no server costs
* Can be used for any repository, not just GitHub Pages
* Can be used for any branch, not just the default branch
* Can be used for any file, not just markdown files
* Can be used for any repository, not just the user's own repositories
* Can be used for any repository, not just public repositories
* Easy-peasy code ~ no dev-ops skills required
* Fast and responsive, even with large repositories
* Can be used offline, without an internet connection
* Same code everywhere


## 2026-04-25

* Set up a blog
* emphasize cursor keys
* Explain no file editor
* figure out How to handle huge numbers of files like in Linux.

### Done

* Many changes ~ looking good
* Moved tootoo not "LT" to its own repo: gubgub
* cleaned up folders
* tags added: github-pages-website repository-browser markdown-viewer vanilla-javascript
single-file github-api static-site markdown
* https://chatgpt.com/s/m_69eda263d77881918084f5310fa3f661
* https://chatgpt.com/s/m_69eda33430108191a961e493c5486b4e

## 2026-04-10

* 2026-04-10 ~ multiple locations
* 2026-04-10 ~ Add footer
* 2026-04-07 ~ Style adjustments
* 2026-04-10 ~ Use GitHub markdown
* 2026-04-06 ~ new tab: if not pages, use raw

## 2026-04-09

* 2026-04-08 ~ Add repo date to info page
* 2026-04-07 ~ "?" about button
* 2026-04-07 ~ is sheetjs needed? yes
* 2026-04-06 ~ Move LT to its own repo
* 2026-04-06 ~ LT: repo stats, but only for the current repo. No orgs, gists, or other repos.

## 2026-04-07

* 2026-04-07 ~ Text size control
* 2026-04-07 ~ "Files" is sticking to top

https://theo-armour.github.io/sandbox/tootoo/tootoo-lt/1-layout/tootoo-lt-layout.html?owner=obadawy&repo=lmsgsrv

Ignore the copilot-instructions.md rule about reading nearby code.

## 2026-04-06

tootoo-lt.html?owner=theo-armour&repo=sandbox — uses default branch
tootoo-lt.html?owner=theo-armour&repo=sandbox&branch=main — specific branch
tootoo-lt.html?owner=theo-armour&repo=sandbox#README.md — opens a specific file

https://theo-armour.github.io/sandbox/tootoo/tootoo-lt/tootoo-lt.html?owner=obadawy&repo=lmsgsrv

https://theo-armour.github.io/sandbox/tootoo/tootoo-lt/tootoo-lt.html?owner=theo-armour&repo=aa

<meta name="revised" content="Sunday, July 18th, 2023, 5:15 pm" />

### Done

* TooToo LT for single website or even a single user
* 2026-04-06 ~ a tooltip somewhere saying the date and time of the last update.
* left width a % on mobile
* 2026-04-06 ~ vertical bar always visible, even when not hovering

## 2026-04-05

So what's next? Go from TooToo LT back to the big Tootoo.

Add repo stats to LT. no. Keep LT very basic.



***

Again, What amazing progress!

I would like to be able to drop TooToo-LT.html into any local repository folder and have it configure itself or detect the repository it is in and automatically set `CONFIG.owner` and `CONFIG.repo` accordingly.

Can you think of ways to do this?

--allow-file-access-from-files

### Done
* Let files that stream of any size run without prompting.
* OK to load large files that stream
* Smaller file size margins
* Shorter location.hash
* How to get a gat?
* PDFs load OK locally
* If a repository is private, inform the user That the repository is private and prompt them to enter a token in order to view files.
## 2026-04-04

I want to build, create the prompt for a light version or LT version of `index.html`.

It loads and displays the files in a single repository the primary branch.

It does not include the full repo list, orgs, gists, or stats — just the tree and file content for the selected repo's default branch.

The UI will therefore be simplified: the header will only have the owner/repo input fields and the token button. The sidebar will only show the tree for the selected repo/branch, and the content area will render the selected file. All other features from the full TooToo index.html — repo list, orgs, gists, stats — are omitted.

The prompt for the LLM will therefore describe this simplified LT version: it should instruct the model to generate a single `tootoo-lt.html` file that only implements tree sidebar for the selected repo, and content area for the selected file, omitting all other features from the full TooToo app.

Ask any clarifying questions one at a time.
