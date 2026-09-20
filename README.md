# Tynemouth Seal Hospital website

A static, responsive website using semantic HTML, CSS and vanilla JavaScript. The published site needs no build service, framework or Node runtime. Development tools live one directory above `Website/` and are not required by visitors.

## Preview

From the project root:

```sh
python3 -m http.server 8000 --directory Website
```

Open `http://localhost:8000/`. Use a local server rather than opening files directly, particularly when testing forms, fonts and sharing.

## Pages and shared files

- `index.html`: homepage, process, compact patient/release cards, updates and donation entry point.
- `about.html`: hospital background, care, team and questions.
- `seals.html`: full patient and release stories.
- `updates.html`: news, release highlights, book feature, fun posters and Facebook.
- `support.html`: donations, supplies, merchandise, fundraising, volunteering, corporate enquiries and sharing.
- `contact.html`: contact details, general enquiry form and location.
- `found-a-seal.html`: redirects the legacy URL to the homepage advice, with a readable fallback.
- `js/content.js`: shared seal, news, team and help-card data.
- `js/components.js`: reusable card rendering. Text is inserted with DOM APIs, not interpreted as HTML.
- `js/main.js`: navigation, focus-managed story dialogs, donation handoff and footer notices.
- `js/contact.js`, `js/facebook.js`, `js/support.js`: page-specific interactions.
- `css/style.css`: palette, shared styles, page sections and responsive rules.
- `css/fonts.css` and `fonts/`: locally hosted Manrope and DM Sans, with their open font licences.
- `Images/optimized/`: smaller web versions of large graphics. Original supplied assets are retained in `Images/`.

## Edit and validate

Install development dependencies from the project root with `npm ci`.

The shared header, footer and SVG symbols have source files in `templates/`. Edit those sources, not six separate copies. Active navigation is generated per page. Page content remains editable in the HTML files.

After changes, run:

```sh
npm run prepare:release
npm test
```

`prepare:release` synchronises shared layout, formats the source, refreshes stylesheet, script and icon cache hashes and checks HTML, JavaScript, CSS, data IDs and asset references. `npm test` starts its own temporary server and tests a GitHub Pages subdirectory using Chromium. It checks all six pages at 11 viewport widths, desktop 200% reflow equivalents, reduced motion, keyboard focus, modal trapping, form errors, 44px standalone controls and WCAG 2.2-tagged axe rules. It uses installed Google Chrome on macOS, `CHROME_PATH` if supplied, or Playwright Chromium (`npx playwright install chromium`). External requests are blocked and Formspree submissions are mocked: tests never email the hospital. Screenshots and results are written to ignored `audit-results/`.

Separate commands are `npm run seo`, `npm run layout`, `npm run format`, `npm run format:check`, `npm run assets` and `npm run check`. Run formatting before refreshing asset hashes. No build command is needed simply to view the site.

## Content collections

Edit `js/content.js`; give each record a unique, stable `id` within its collection.

- Seals use `name`, `species`, `sex`, `image`, `imageAlt`, `summary` and `details`. Optional `gallery` entries contain `src` and `alt`; optional `videos` link to public videos.
- To release a patient, move the same record from `patients` to `releases`, retaining its ID, and update its story/status. Keep array order intentional; homepage previews display the first three.
- Updates use `title`, ISO `date`, `dateLabel`, `summary` and `details`. The Updates page sorts by date. Optional `sections` provide headings, paragraphs and lists; `posters` provide `src`, `alt`, `caption` and optional intrinsic dimensions.
- `fun` holds the two poster collections. `team` holds team profiles. Both use the shared detail dialog.
- `actions` links to real support sections or external destinations.
- `data-records` selects named records; `data-limit` caps a preview; `data-variant` selects compact or expanded cards.

All dynamic content requires JavaScript. Important navigation, contact details, support links and the contact form remain available without it. Keep meaningful descriptions alongside poster images.

## External integrations

**Donations:** JustGiving handles payments. The homepage amount selector is a preview; the chosen amount is not transferred. Visitors choose the final amount on JustGiving. A future payment integration can replace `showDonationOptions` in `main.js`.

**Contact:** the form posts to `https://formspree.io/f/mjykgygr`. Name, email, category and message are required; phone and organisation are optional. JavaScript adds progress/success/error feedback and preserves entries after failures. Without JavaScript, the native POST still works. `?topic=volunteering` (or another valid category) preselects the enquiry type. Account activation, allowed domains and actual inbox delivery require a live owner check.

**Facebook:** visitors choose whether to load the third-party embed. Empty `facebook.posts` shows the public Page timeline; supplying up to three public post URLs shows those curated posts. This is not an automatic “latest three posts” API. Direct links remain available if Facebook blocks embedding.

**Map:** visitors choose whether to load a standard Google Maps embed. It marks Tynemouth Aquarium, where the hospital is based, rather than an unverified hospital entrance. No Maps API key is present or required for this standard embed. A Maps Embed API integration requires a restricted browser key and a replacement `embed/v1/place` URL.

**Sharing:** native share, clipboard copy and a manual selection fallback use the published homepage URL, never localhost. Instagram currently links to Instagram itself; replace it once the hospital’s exact profile is confirmed.

**Shop and supplies:** Teemill and Amazon links lead to their external sites. Product availability, prices and current wishlist items are not synchronised. The supplies examples are not claims of current stock needs. The children’s hoodie links to the main shop; a separate children’s tees link uses the supplied collection URL.

## Publish

Publish the contents of `Website/` as the GitHub Pages site, including `fonts/`, `Images/optimized/`, icons, manifest, CSS and JavaScript. Do not deploy `node_modules`, tests or audit screenshots. The code works under a project subdirectory; current canonical/share URLs use `https://jamiefleming.github.io/Tynemouth_seal_hospital/`. Update those when moving domains.

Before announcing launch, complete the owner checks in `RELEASE_AUDIT.md`. Automated accessibility checks are useful evidence, not a certification of complete accessibility or legal compliance.

## Content sources

Hospital contact information: [Charity Commission](https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/5191750/contact-information). Hospital location and aquarium reception: [Aquarium contact](https://www.tynemouthaquarium.co.uk/visitor-info/contact-us/) and [travel information](https://www.tynemouthaquarium.co.uk/visitor-info/getting-here/). The registered charity address is not the hospital’s physical map location. Team, seal stories and posters come from the supplied material. Existing event links attribute the aquarium’s historical listings.

## SEO and social sharing

`scripts/seo.mjs` is the single place to change the published base URL. It maintains per-page canonical and Open Graph URLs, title/description/image metadata, Twitter summary cards, Organization/WebSite/WebPage JSON-LD, `robots.txt` and the six-page sitemap. The social image is the supplied 512px seal logo; favicon, Apple Touch Icon and manifest icons remain separate assets. The sitemap excludes the legacy redirect.

On the current GitHub Pages project URL, `Website/robots.txt` is published in a subdirectory. Crawlers only apply robots rules from the origin root (`https://jamiefleming.github.io/robots.txt`). Deploy the file at that root if you control it, or use it when moving to a custom domain. Submit the project’s `sitemap.xml` directly in Search Console. The project copy alone does not control crawling of the parent domain.

External map/feed content loads only after a visitor chooses to connect. Inline links within paragraphs remain inline; standalone navigation, buttons, selects, disclosures and action links use at least 44 × 44 CSS-pixel targets. This avoids disrupting reading flow while meeting the requested touch-target treatment for controls.
