# Tynemouth Seal Hospital

A responsive, dependency-free implementation of `Design/Desktop - 1.png` using the supplied brand colours and local photographs.

## Preview

Open `index.html` directly in your browser, or run from this folder:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Edit

- `index.html`: page sections, navigation, and card collection containers.
- `js/content.js`: all seal, update and ways-to-help card content.
- `js/components.js`: the three reusable card renderers and shared controls.
- `css/style.css`: brand colours in `:root`, layout, and mobile breakpoints.
- `js/main.js`: mobile navigation, story dialogs, donation amount selection and supporting information.
- `Images/`: original supplied assets.

The repeated Mabel and Brutus cards and March 2026 updates reproduce the draft content in the mockup. Replace these with approved profiles and stories in `js/content.js`; dialogs and collection views use that same data. The slate swatch is visually matched because its label in the palette repeats the coral hex value.

Before launch, connect an approved donation provider, wishlist, volunteering/fundraising contacts, social profiles and final policy content. Donation controls currently show an explicit preview message and never process payment. Navigation uses working homepage sections; the pre-existing empty secondary HTML files are not linked.

Accessibility features include semantic landmarks, a skip link, descriptive image alternatives, visible keyboard focus, native modal dialogs, labelled donation controls, reduced-motion support and responsive layouts. No external fonts, trackers, cookies or build dependencies are used.

Validation: JavaScript syntax check; local asset, internal anchor and duplicate-ID checks; successful HTTP responses. Visual browser QA could not be performed in the available environment because no browser was connected.

## Editing reusable cards

Edit `js/content.js` to change the content without touching the layout:

- `patients` and `releases`: `id`, `name`, `species`, `sex`, `image`, `imageAlt`, `summary`, and `details`.
- `updates`: `id`, `title`, ISO `date`, visible `dateLabel`, `summary`, and `details`. Use `\n` within the summary for a line break.
- `actions`: `id`, `title`, `icon`, `summary`, button `label`, `detailTitle`, `details`, and optional `href`.

Copy an existing object to add a card, or remove an object to remove one. Give each object a unique ID within its collection; names can repeat. `details` is an array of paragraph strings. Leave it empty to reuse the summary in the dialog. Set an action's `href` to a real URL when available; otherwise its button opens its details.

To change a card's structure for every instance, edit its renderer in `js/components.js`: `sealCard`, `updateCard`, or `helpCard`. Patient and release cards share the same component with a layout variant. Styles remain in `css/style.css`.

The three deferred scripts load in order: content, components, then interactions. No framework, build step or server is required; opening `index.html` directly still works. Cards require JavaScript, with a no-script notice provided. New pages can reuse the components by including these scripts and a container such as `<div class="seal-grid" data-cards="patients"></div>` (the card renderers require the page's shared SVG icon symbols). `main.js` is the homepage interaction script.

Refactor validation: DOM checks cover all 13 initial cards and their dialogs, edits to a single profile, adding an update, collection summaries, image paths, literal text rendering and safe action URLs. Browser visual QA remains unavailable.
