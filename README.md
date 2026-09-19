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

Accessibility features include semantic landmarks, a skip link, descriptive image alternatives, visible keyboard focus, native modal dialogs, labelled donation controls, reduced-motion support and responsive layouts. Fonts load from Google Fonts; no trackers, cookies or build dependencies are included.

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

## Mobile layout

At 640px and below, the page follows the mobile mockup: portrait hero with process shortcuts, a vertical process journey, a solid rescue advice panel, swipeable seal collections, two-column donation amounts and a light footer. The footer logo stays 240 × 80 and coral CTA labels remain white. Ways to help uses a native disclosure, automatically expanded on larger screens and when a support navigation link is selected. All profiles remain available by swiping, scrolling or keyboard focus. Content is still maintained in `js/content.js`.

The header is sticky in normal document flow so it does not cover the hero. Intermediate tablet layouts remain at the 900px breakpoint. Mobile DOM/interaction checks passed; visual Safari QA was blocked by pending computer-use permissions.

## Typography

Manrope is used for headings (700, with 800 for the hero). DM Sans is used for body text, navigation and controls (400–700). Font families are configured with `--font-heading` and `--font-body` in `css/style.css`. Google Fonts uses `display=swap`, with local sans-serif fallbacks if the font service is unavailable.

## Adding or releasing a seal now

1. Put the seal's photograph in `Images/` with a descriptive filename.
2. Open `js/content.js`. Copy an existing object into `patients` for a seal in rehabilitation, or `releases` for an already released seal.
3. Change `id` to a unique, permanent identifier (for example `mabel-2026`), then edit `name`, `species`, `sex`, `image`, `imageAlt`, `summary` and `details`. Each string in `details` becomes a paragraph in the story dialog.
4. Separate objects with commas. Save and refresh the page. On a hosted site, upload the changed content file and image too.
5. When a seal is released, move its entire object from `patients` to `releases`, keeping its ID. Update the photograph, summary and story. Place newest releases first; array order controls display order.
6. To remove a seal from display, remove its object. Keep a backup if you need to preserve its history. All card/dialog content comes from this one record.

The repeated Mabel and Brutus entries are draft placeholders, not distinct verified patients. Replace them as real profiles become available. A future CMS should store a single seal collection with rehabilitation/released status and release dates, so changing status replaces manual movement between arrays.

## Facebook section

`js/facebook.js` embeds the public TynemouthSeal Page timeline below the hospital updates. This is a live Facebook-controlled timeline, **not a feed limited to three latest posts**. Facebook may restrict display or require login; a permanent direct Page link remains visible. Live content could not be verified because Facebook blocked retrieval in this environment.

To display three selected posts instead, populate `facebook.posts` in `js/content.js` with their public Facebook permalinks, newest first. At most three are embedded. These links require manual updating; they do not automatically track the latest posts. With an empty list, the Page timeline is shown.

Automatically displaying exactly the latest three posts in custom cards requires a supported feed provider or a server-side Meta API connection with the appropriate Page authorization. No credentials or access tokens belong in `content.js` or other public frontend files. The current project has no such connection.

Facebook embeds may use third-party cookies. The preview notices now mention this service; review production consent handling before launch. DOM checks cover timeline/post selection, the three-post cap, URL validation and fallback links; they do not verify Facebook's external availability.
