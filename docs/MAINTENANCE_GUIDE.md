# Maintenance guide

## Catalog updates

Use the provider's official page as the source for credential name, exam status, version, requirements, delivery, price, validity, and region availability. Recheck URLs after redirects and avoid copying a provider landing page that does not identify the credential. Record the date in `lastVerified` only when the details were actually checked; otherwise retain `verificationStatus: 'needs-review'`.

Describe free learning and exam fees separately. Use `examRequired` only when the provider confirms whether an exam is part of the credential. Use `costType` as a broad classification and avoid stale fixed prices in the catalog.

## Providers, careers, and roadmaps

Add a provider entry to `certificationProviders` so its site and presentation are available. Add all new credentials only to `certifications`. Preserve stable IDs when names or metadata change; when an item is retired, remove it from the active catalog and check `certificationVideos` and documentation for references.

Use IDs from `careersData.js` and `roadmapsData.js` in `recommendedCareerPaths`. Add a compatibility alias to `careerIdAliases` only when older IDs still need support. Keep the 11 active roadmap records route-compatible. Do not put credential arrays in career or roadmap components.

## Validation

From the project root:

1. `npm test` runs the Node built-in tests, including ID/category/provider/URL checks and recommendations for all active career and roadmap IDs.
2. `npm run build` validates the Vite production bundle.
3. `npm run check` runs both commands in sequence.

The automated checks do not confirm every external page's live availability or perform browser visual tests. Recheck provider pages and test the catalog, detail pages, quiz routes, theme toggle, and local progress persistence in a browser before release.

## Release version control

Use Semantic Versioning for app releases: increment the patch for backward-compatible fixes, the minor version for backward-compatible features, and the major version for incompatible changes. Keep the version in `package.json` and the root package records in `package-lock.json` identical. Add a dated, versioned entry to `docs/CHANGELOG.md` and update the current version in `docs/README.md` for each release. Run `npm run check` before publishing.
