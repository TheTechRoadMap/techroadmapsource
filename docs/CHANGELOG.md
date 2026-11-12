# Changelog

## 1.2.1 — 2026-11-12

- Updated AWS and Microsoft provider icons and added an Oracle wordmark using local assets in the existing provider-icon treatment.
- Improved mobile certification folders so provider names wrap and credential details use the full available width.
- Made roadmap completion indicators responsive: the title and progress stack on mobile, while the percentage, label, and bar remain aligned inside the banner.
- Removed the fixed 320px body minimum that could cause narrow-screen horizontal overflow.
- Browser-checked all 11 roadmap detail banners at 320px, 360px, 375px, 414px, and 720px, including a 100% completion state.

## 2026-11-03 — Certification catalog and integration

- Made the central catalog the runtime source for career and all 11 roadmap detail recommendations; removed duplicated roadmap credential arrays.
- Added an in-app detail route for every catalog entry and changed catalog, career, and roadmap credential navigation to remain internal until a learner chooses an official provider link.
- Added common identifier resolution/validation and corrected quiz recommendations to use active roadmap routes.
- Removed retired Google Associate Android, closed TensorFlow Developer exam, Microsoft 98-361-based C# certification, AWS Machine Learning Specialty, AWS Database Specialty, and Microsoft 365 Fundamentals from active recommendations.
- Added Azure Administrator Associate, Azure Database Administrator Associate, Google Cloud Digital Leader, AWS Machine Learning Engineer Associate, and AWS Data Engineer Associate; corrected the Flutter entry to a free learning path and updated the Docker DCA provider link.
- Updated Cisco DevNet Associate to CCNA Automation, corrected Cisco cybersecurity links, and reclassified SQL Server documentation as a free learning resource rather than a certification.
- Added consistent credential-type and verification metadata, expanded category/provider discovery, and surfaced skills, costs, and verification status.
- Improved catalog filters, counts, reset behavior, responsive card sizing, empty states, and filtered paths from career/roadmap details.
- Added automated catalog, mapping, quiz-route, and search/filter tests plus the `docs/` maintenance and architecture guides.
