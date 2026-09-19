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

### Extra seal photographs

A seal can optionally include `gallery: [{ src: "Images/kraken_2.jpg", alt: "Description of the photograph" }]` in its content record. The main `image` remains the homepage photograph and first modal image. Gallery entries become keyboard-accessible thumbnail buttons underneath the modal photograph. Add further entries to add photos; omit `gallery` for a single-photo story. Kraken includes two additional photographs.

### Update articles with guidance and posters

Updates can include `sections` (each with `title`, optional `paragraphs`, and optional bullet-list `items`) and `posters` (each with `src`, `alt`, and `caption`). The modal renders this material after the article text. Posters retain their complete aspect ratio and link to full-size originals. The nurdling article dated 28 August 2026 demonstrates this structure. Its local clean-up guidance is based on the supplied posters; no unprovided WhatsApp invite or drop-off address has been invented.

### Homepage limits and full seal collections

Homepage patient/release containers use `data-limit="3"` and show the first three records in their existing content order. One or two cards are centred on desktop at the usual three-column card width. The homepage buttons link to `seals.html`, which renders every patient and release from the same content file and supports the same story dialogs and galleries. Its mobile view stacks all profiles for browsing. Keep both pages and their versioned CSS/JS references updated when deploying changes.

## About Us page

`about.html` shares the site's header, footer, fonts, palette and modal system. It includes the hospital's story, care journey, partnerships, Isla's success story, ten team profiles, FAQs and support links. About Us links on the homepage and seal directory now open this page.

Team profiles live in `team` in `js/content.js`. Each uses `id`, `title` (the person's display name), `role`, `poster`, `summary`, `details`, `sections` and `posters`. `teamCard` in `js/components.js` renders every team member consistently. Copy or remove a profile object to add or remove a person. All information from the supplied posters is available as readable modal text, with the original poster linked at full size. No new roles were inferred beyond Richard's supplied chairperson/volunteer-lead description and the other team members' volunteer profiles.

Hospital information was checked against:
- https://www.tynemouthaquarium.co.uk/discover/exhibits/seal-hospital/
- https://www.tynemouthaquarium.co.uk/blog/animal-stories/seal-hospital-behind-the-scenes/
- https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/5191750

The two Aquarium pages give different pen counts, so capacity is not stated. Dated rescue totals and current staffing totals are also omitted. Team biographical information comes from the supplied posters; the Isla account comes from the supplied story. Source links are included in the relevant About page sections.

Validation: all three pages initialise without script errors in DOM checks; all ten team modals display their text and posters; image paths, navigation/fragment links, menu behaviour and CSS parsing pass. Browser visual verification was not available in this session.

## Expanded Our Seals page

`seals.html` now contains a page hero, current patients, curated seal stories, a complete release collection and support/advice CTAs. `data-variant="expanded"` selects large photo-led profiles with previews from the existing details; the homepage still uses compact cards and its three-record limit. `sealStories` stores short feature headings and references existing patient/release records by `collection` and `recordId`, so photos and modal stories stay in sync.

Facebook access was blocked during research, so no new current-patient status was inferred. The additional Minnie Mouse and Tweety Pie release was verified from the Aquarium's report, published 25 March 2026:
https://www.tynemouthaquarium.co.uk/blog/animal-stories/double-seal-release/

Four release photographs were downloaded from that article to `Images/minnie-tweety-release-1.jpg` through `-4.jpg`. The record credits and links to the Aquarium on the full profile and in its modal. Individual seals are not identified in the image captions because the source does not specify which is pictured. The publication date is labelled as a report date, not an exact release date.

Checks cover expanded and compact rendering, all profile/story controls, the new four-photo gallery, attribution, image paths, and cross-page anchors. Actual browser rendering remains unverified in this environment.

### Updates page

`updates.html` uses the shared header, footer, Facebook feed and detail dialog. Edit news in `updates` inside `js/content.js`; the page sorts entries by their ISO `date` (newest first). The homepage uses the same content with its compact card layout. Add `posters` to show images in the story dialog; the first poster also illustrates the Updates card. Optional poster `width` and `height` preserve nonstandard image proportions.

The `fun` collection contains the life advice and secretly-a-seal features, with readable text and the complete original poster series in their dialogs. The book corner opens the shared `books` update. Release highlights reference existing seal records via `data-records` on the Updates page, so their stories stay consistent with Our Seals.

The Facebook section uses the same public embed and direct-page fallback as the homepage; availability depends on Facebook and the visitor’s browser settings. After editing shared CSS or JavaScript, refresh the `?v=` asset versions on all four pages before publishing to GitHub Pages.

### Support page

`support.html` includes a JustGiving donation feature, supplies guidance, the Amazon wishlist link, and Teemill collection cards. Payments and orders take place on those external services. Supply categories are examples, not a verified inventory of current requests; check the live wishlist before replacing these with specific products. Amazon and Teemill blocked automated retrieval during implementation, so no live embed, prices, stock or product photographs are claimed. Merchandise cards link to the supplied mugs, tote bags and baseball long-sleeved tee collections; hoodies and sweatshirts use the main shop link until confirmed collection URLs are supplied.

Include `support.html` when refreshing shared asset version links or publishing the site.

Support page additions: seven Teemill collections (duplicate supplied URLs are shown only once), six fundraising ideas, past events, volunteering, corporate equipment/project enquiries, and sharing resources. Contact email `tynemouthsh@gmail.com` comes from the Charity Commission contact listing: https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/5191750/contact-information . The 2023 pop-up is sourced to the aquarium’s Summer 2023 event listing, linked directly in the page. Past events are explicitly labelled and do not claim attendance or fundraising totals.

`js/support.js` uses native sharing when available, then clipboard copying, then a selectable URL if clipboard access fails. The shared URL is the published GitHub Pages homepage, never localhost. The Instagram button currently opens Instagram itself; replace it with the hospital’s profile once confirmed. Awareness-poster downloads use the existing nurdles images.

### Contact page

`contact.html` posts to the supplied Formspree endpoint `https://formspree.io/f/mjykgygr`. Required fields: name, email, enquiry category and message. Phone and organisation are optional. `js/contact.js` adds AJAX success/error feedback, prevents duplicate submissions while sending, preserves entries after failures, and accepts a known `?topic=` value for enquiries arriving from Support Us. Native POST remains available without JavaScript. Tests use mocked responses only; inbox delivery and Formspree account configuration have not been verified by sending a real enquiry.

The map uses a standard Google Maps embed for Tynemouth Aquarium, Grand Parade, NE30 4JF, with the address alongside it and a direct Maps fallback link. It marks the aquarium site, not an unverified hospital entrance. No API key was supplied. To switch to the Maps Embed API, enable that API and replace the iframe URL with `https://www.google.com/maps/embed/v1/place?key=YOUR_RESTRICTED_BROWSER_KEY&q=Tynemouth+Aquarium+Grand+Parade+NE30+4JF`; restrict the browser key to the intended local/published origins and Maps Embed API.

Contact sources: hospital email and listed telephone from the Charity Commission contact record; site address and reception telephone from https://www.tynemouthaquarium.co.uk/visitor-info/contact-us/ and https://www.tynemouthaquarium.co.uk/visitor-info/getting-here/ . The charity’s registered address is not used as the hospital map location. Include all six completed pages when refreshing shared asset versions.
