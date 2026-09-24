# Release audit — 20 September 2026

## Scope

Home, About Us, Our Seals, Updates, Support Us and Contact Us, plus the legacy found-a-seal redirect, shared templates, styles, scripts, icons, fonts, content data and SEO files.

## Changes completed

- Consistent, formatted HTML/CSS/JavaScript, with shared header/footer/icon source templates and repeatable release commands.
- Removed obsolete help placeholders, generic collection-dialog code and unused merchandise/layout styles. Replaced the empty legacy page with a redirect and readable advice.
- Fixed the homepage’s mobile overflow from decorative process curves. Checked intermediate breakpoints as well as desktop/tablet/mobile sizes.
- Moved homepage Facebook content below “Back in the wild”; standardised “How we care” in the homepage and shared footer.
- Retained white CTA text using a darker accessible coral for controls. Kept original coral for decorative accents; darkened teal text where needed.
- Added high-visibility two-tone keyboard focus, focusable skip destinations, menu breakpoint handling and an explicit modal Tab/Shift+Tab loop. Native dialog Escape behaviour and return focus are preserved.
- Enlarged standalone controls and FAQ disclosures to 44px targets. Inline links within running text retain normal text flow.
- Added persistent form error text connected through `aria-describedby` and `aria-invalid`; failures preserve the message, and submission state is announced.
- Hosted fonts locally with their licences. Added visitor-triggered Facebook and Google Maps loading and corrected the footer notices to reflect actual services.
- Optimised six large graphics from approximately 7.4 MB to 0.4 MB combined; kept original supplied images.
- Added canonical URLs, page-specific descriptions, Open Graph and Twitter metadata, logo image descriptions, Organization/WebSite/WebPage JSON-LD, sitemap and robots file. Favicon, Apple Touch Icon and manifest references are versioned with their contents.

## Automated and visual verification

Run `npm run prepare:release`, `npm run format:check` and `npm test` from the project root. The latter writes screenshots and a JSON report to `audit-results/`.

- All six pages at 320, 360, 390, 640, 641, 768, 900, 901, 1024, 1280 and 1440 CSS pixels: no document overflow or JavaScript errors.
- Axe scans at 390px and 1440px, covering WCAG A/AA tags through 2.2 and best-practice rules. A clean result is automated evidence, not a complete conformance certification.
- Desktop 200% zoom reflow equivalent: 720 × 450 CSS-pixel viewport at device scale factor 2, representing a 1440 × 900 display. This tests reflow; it is not a claim of manually operating every browser’s zoom controls.
- Keyboard skip links, visible focus, mobile menu Enter/Tab/Escape behaviour, modal Tab/Shift+Tab trapping, Escape close and focus return.
- All data-driven story dialogs, local navigation/anchors, image loading and 44px standalone targets.
- Contact-form required fields and associated errors, category preselection, mocked success/failure, retained messages and no-JavaScript POST fallback. No test enquiry was sent.
- Reduced-motion preferences, blocked-by-default external embeds, sharing fallback and no-JavaScript navigation.
- HTML validation, CSS syntax/assets, JavaScript syntax, content IDs/images, version hashes and SEO metadata structure.
- Screenshot review of desktop/mobile pages and tablet layouts. Original image posters remain available with accompanying text descriptions.

## Remaining owner/deployment checks

1. **Live integrations:** confirm Formspree activation, any domain restrictions and delivery to the intended inbox with an approved real enquiry. Confirm the Google map pin, Facebook embed and external shop/wishlist/JustGiving destinations in normal browsers. Automated tests intentionally block external services.
2. **Real assistive technology/devices:** manually smoke-test Safari/iOS and Android, and VoiceOver or NVDA. Browser automation verifies labels and keyboard mechanics but does not replace listening to an actual screen reader.
3. **Privacy operations:** the site notices now describe the implementation accurately. The hospital must confirm its actual retention arrangements and approved full privacy information for submitted enquiries. No retention policy or legal compliance certification has been invented.
4. **Content sign-off:** confirm that current-patient status, release dates/species, fundraising details and contact information are still accurate. Instagram opens the service rather than an unconfirmed hospital profile. Wishlist needs and Teemill availability are not synchronised.
5. **SEO deployment:** publish the complete Website folder, then check live canonical/share URLs and submit the sitemap. On GitHub Pages, project-level robots.txt does not govern the domain root; see README. Re-run Google’s Rich Results/URL Inspection tools on the public URLs after deployment; local JSON validation cannot guarantee indexing or rich-result eligibility.

The local implementation has been audited and corrected. These remaining operational checks are deliberately not reported as completed or guaranteed.

Four additional mobile axe checks covered open patient, team, fun-poster and news dialogs; all returned no violations. These targeted results are saved in `audit-results/dialog-accessibility.json`.

Reference standards: [WCAG target-size guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html), [Google Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization), and [Google robots.txt placement](https://developers.google.com/crawling/docs/robots-txt/create-robots-txt).

## Follow-up full audit

Repeated the six-page responsive, accessibility, internal-link, SEO and source checks. A read-only external-link sweep returned HTTP 200 for all 29 public destinations checked (including redirects). This checks reachability, not stock availability or embedded-service behaviour. The Formspree POST endpoint returned HTTP 405 to a GET, as expected for a submission-only endpoint; that does not verify inbox delivery. Results are in `audit-results/external-links.json`.

Improved Formspree failure handling to display returned validation messages as plain text while preserving the enquiry. Successful responses now retain edits made while a request was pending and explain that those edits were not sent. Added mocked regression checks for both cases and the disabled sending button. The original endpoint and native POST fallback are unchanged. Form submission handling was cross-checked against [Formspree’s AJAX guidance](https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax).

Visual review also found adjacent book actions without adequate separation; they now wrap with a consistent gap. No live enquiry was sent and no production deployment was performed. The owner/deployment checks above still apply.

## Editorial release pass

Reduced main-content eyebrows from 45 to 15 across the six pages. Retained useful page labels, story context and event dates; removed duplicated section introductions and promotional filler. Simplified selected headings to describe their content directly, including Current patients, Released seals, Contact details, Volunteer with us and Corporate support. Shared footer labels and patient status labels remain useful navigation/context.

Before launch, the owner should confirm current seal records, permission to publish supplied photographs/team profiles, contact details and approved enquiry privacy information; send a real Formspree test and confirm inbox delivery; check the live site on phones and with assistive technology; and confirm the final public domain. If moving from GitHub Pages to a custom domain, update the base URL in scripts/seo.mjs and all share links before regenerating metadata and publishing. Instagram currently opens the generic service, so supply the official profile or omit that option. These are operational sign-offs rather than verified code failures.

## Privacy, cookies and error-page implementation

Added dedicated Privacy Notice and Cookies pages, linked in every shared footer and at the enquiry form. Notices cover enquiry fields, purposes, proposed legitimate-interest basis, service providers, technical hosting logs, optional embeds, retention criteria, international processing, individual rights and ICO complaints. They reflect the current implementation, but are not a certification of legal compliance.

**Hospital sign-off required before treating these notices as final:** confirm the controller/contact details; assess and record the legitimate interests described; approve and implement retention/deletion across the Formspree dashboard, mailbox and backups; verify the Formspree/email provider processing agreements and applicable UK transfer safeguards, then add specific transfer details; review the live embed cookie inventory (including names and durations) and provider consent arrangements. The owner's retention and provider-agreement answer was requested but has not yet been supplied. Provider policy links alone do not verify the charity's agreements. No fixed retention period, DPA acceptance or transfer safeguard has been invented.

Optional embeds remain blocked by default. More explicit load notices link to Cookies; adjacent turn-off controls remove loaded content and disconnect Facebook resize observers. This stops future embed requests on that page but cannot erase provider cookies or recall transferred data. The Cookies page explains those limits.

Added a noindex 404.html excluded from the sitemap, with homepage/contact routes and urgent seal advice. Its base URL is /Tynemouth_seal_hospital/ so assets and links work on nested missing paths at GitHub Pages. Update that base if deploying at a custom domain root. Publish 404.html in the actual Pages publishing root; a generic local server may need its own 404 configuration. This handles missing pages, not all possible service errors.

Sources reviewed: [ICO privacy-information requirements](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-be-informed/), [ICO cookie consent guidance](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/how-do-we-manage-consent-in-practice/), [ICO international transfers](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/), [Formspree privacy policy](https://formspree.io/legal/privacy-policy/), and [GitHub custom 404 instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site).

## Desktop footer spacing

Compacted footer padding, column gaps, logo spacing and copyright separation. Quick links use 32px rows only above 1000px with a fine pointer and hover; touch layouts retain 44px targets. This intentionally supersedes the earlier all-device 44px footer statement. The browser target check reflects this desktop-only exception.

## Brighter coral buttons

Primary coral buttons now use #EC6048 with white 19px, 700-weight labels, providing approximately 3.32:1 contrast for large bold text. The larger label treatment is required for this brighter colour; do not reduce it to small text without revisiting contrast. Existing darker tokens remain for small selected amount labels and form errors. High-contrast mode retains its yellow/black overrides.

The later button typography revision removes the 19px override and restores the shared button sizes. Coral returns to #C94B35 for readable small white labels; this supersedes the brighter-coral note above.

Latest visual preference: bright #EC6048 coral restored with the existing smaller white button typography. White text contrast is approximately 3.32:1, below the 4.5:1 AA requirement for normal-sized text; the earlier default-mode contrast pass no longer applies to these buttons. High-contrast mode retains its yellow/black treatment, but does not establish default-mode conformance.

Owner verification (21 September 2026): user confirms Formspree works and reports successful use on their phone, laptop and iPad. This closes the previously outstanding owner Formspree-delivery/device smoke-check items; it is not an assistive-technology or full cross-browser certification.
