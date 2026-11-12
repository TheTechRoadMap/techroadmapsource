# UI/UX improvements

## Certification discovery

The Certifications & Programmes page now explains the difference between credential types, reports catalog/provider/free-listing counts, and warns that free learning does not imply a free proctored exam. Search and filters cover provider, technology category, difficulty, cost, credential type, and career path. Filtered results retain the provider-folder presentation, and users can clear filters or open a relevant career/roadmap pre-filter.

Expanded provider folders show each opportunity's type, level, cost classification, description, skills, known exam requirement, and verification date or review status. External links use a new tab with `noopener noreferrer`.

## Career and roadmap pages

Both detail views use one recommendation component and the central catalog. Cards include the provider, credential type, level, cost, short description, skills, and internal links to dedicated catalog detail pages. Provider links appear on those detail pages as the explicit external destination. A no-match message replaces the former unrelated fallback list.

Each `/certifications/:id` page presents the catalog details, exam and validity metadata when available, skills, verification status, and related roadmaps. Unknown IDs receive an in-app not-found state. Return navigation preserves the referring career/roadmap or catalog filter path.

## Responsive behavior and accessibility

Catalog statistics and filters use wrapping/responsive grids, controls have full available width, recommendation cards shrink to the viewport, and long catalog text can wrap. On narrow screens, provider names wrap and credential actions move below the full-width credential details.

Roadmap detail headers stack the title and completion indicator on mobile. The percentage and label share a row, with the progress bar spanning the available width inside the banner. The page no longer imposes a 320px minimum body width.

AWS and Microsoft use local brand glyphs, and Oracle uses a local wordmark, all within the existing provider-icon treatment.

## Theme

New catalog and recommendation styles use existing dark-theme variables and explicit light-theme colors. The existing theme toggle remains browser-local and controls `data-theme` on the document root.

## Validation

Browser-checked all 11 roadmap detail banners at 320px, 360px, 375px, 414px, and 720px; the progress indicator stayed within the banner without overlapping the title. Also checked the 100% completion state at those widths. The main mobile routes were checked at 320px, 375px, and 414px.

These visual checks do not replace the automated release checks. Run `npm run check` before publishing.
