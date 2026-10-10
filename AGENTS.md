## Current authorized page structure
Six independent static English pages: index.html, services/index.html, portfolio/index.html, about/index.html, contact/index.html, faq/index.html. Shared assets use relative paths; no build required. Historical homepage hashes redirect to the corresponding real HTML pages; do not reintroduce fake JavaScript routing. Preserve every original visible word/design except owner-authorized phone +212669840756, Bossdawg JPG replacement and navigation destinations. French translations are incomplete: preserve runtime switching but do not publish incomplete French URLs.

# Voniweb Agency repository guidance

## Structure
Static GitHub Pages website; no build step or runtime dependencies.
- index.html: metadata, JSON-LD, original homepage overview content.
- favicon.png: original favicon.
- assets/images/: deduplicated original artwork with lossless optimization.
- assets/css/site.css: original design styles and equivalent heading selectors.
- assets/css/google-fonts.css and font-awesome.css: local copies of existing font styles; Font Awesome glyph declarations are limited to classes verified in HTML and JavaScript.
- assets/fonts/: unchanged font binaries corresponding to those stylesheets.
- assets/js/site.js: original interactions, translations, Google Apps Script form endpoint and accessibility state synchronization.
- robots.txt, sitemap.xml, llms.txt: public discovery files.

## Preservation requirements
Do not alter visible text, translations, service names, prices, claims, calls to action, colors, typography, spacing, layout, imagery, animation timing, navigation, language/theme behavior, forms or links without explicit user authorization.
Do not invent offices, company history, testimonials, partnerships, reviews, ratings, projects or results.
Retain the Morocco-based, worldwide-service positioning. Canadian client work does not establish a Canadian office.
Inspect all interaction hooks and matching CSS selectors before structural changes.
The timestamped external backup must never be deleted or overwritten.

## Deployment
Deploy the static project root to GitHub Pages as-is; no npm install or build required.
Keep asset paths relative so a repository subpath also works.
Canonical URLs and sitemap URLs use https://voniweb.com/.
The original project contained no CNAME or workflow. Configure the custom domain through the owner's existing hosting settings; do not invent deployment configuration.
Do not push, publish, deploy or change external integrations without user authorization.
GitHub Pages controls response caching/security headers; do not add unsupported .htaccess rules.
Developer guidance is not a search ranking mechanism.

## SEO maintenance
Exactly one document H1. Use equivalent CSS when improving heading semantics.
Keep title/description factual. Do not add visible keyword text.
Update JSON-LD using stable @id references and verified information present on the site.
Do not add unsupported opening hours, founding dates, physical offices, review/rating schema or social handles.
Use lastmod only with a reliable date of meaningful page modification.
Keep public CSS, JS, fonts, images and pages crawlable.
llms.txt is optional guidance; it does not guarantee AI visibility or citations.

## Assets and validation
Preserve original decoded pixels for logos/graphics. Verify lossless conversions with raw-pixel comparison.
Do not substitute stock imagery. Existing remote photographs are retained.
Supply intrinsic image dimensions; eager-load the critical desktop hero image and lazy-load appropriate secondary images.
Verify exact English and French text, desktop/tablet/mobile screenshots in both themes and native homepage anchors plus all six independent pages.
Run browser console/network checks, local HTML/XML/schema validation and measured Lighthouse tests.
Keep audit tools and generated screenshots/reports outside the deployable project. Retain bundled font license files. When adding a Font Awesome icon, restore its matching glyph declaration from the same licensed 6.5.0 release; the original font binaries are retained.

## Contact form limitation
The existing Google Apps Script POST uses no-cors. An opaque response does not verify backend acceptance, email delivery, spreadsheet writes or calendar creation.
The owner explicitly instructed preservation of all form text and behavior despite this limitation.
Do not claim that the current success message proves receipt.
Do not change the endpoint, send real QA leads, or alter the visible status/data-clearing behavior without authorization.
A future confirmed flow requires a readable validated backend acknowledgement plus owner-approved pending/failure wording.

## FAQ and loader maintenance
FAQ navigation points to the real faq/index.html page. Keep the early homepage #faq compatibility redirect and preserve all source/translated question and answer wording on dedicated pages. The branded loader belongs only to root index.html; never add its markup to secondary or French pages. Preserve the homepage 1900ms post-load wait, artwork and CSS exactly. Shared JavaScript initializes secondary pages immediately without a loader delay.

## Refined homepage
Homepage order: original hero, three service previews, four Why Voniweb cards, actual Bossdawg project, compact contact CTA, original footer. Full About/process/FAQ/form content remains on dedicated pages. Historical #services/#portfolio/#about/#contact/#faq URLs are handled by an early, root-only location.replace to real pages; keep query parameters and avoid loops.
assets/js/home.js is the homepage-only edition of assets/js/site.js; it preserves unchanged values for its used translation keys, theme, loader, navigation and reveals, omitting form/FAQ/filter/counter code that has no homepage UI. Keep both editions synchronized when editing shared behavior/translations. Secondary page HTML and site.js remain authoritative and unchanged for integrations. Homepage Service entities are omitted; maintain detailed Service JSON-LD on services/index.html.

The homepage hero photograph is served locally as assets/images/voniweb-website-design.jpg, byte-identical to the original remote photograph. Preserve its pixels, dimensions, crop and styles. Homepage About/FAQ no-script fallback IDs live on neutral empty spans inside existing footer links; never attach these IDs to the links themselves because section CSS would apply. Use existing primary button styles for preview actions on light sections.
