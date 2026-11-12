# Career and roadmap certification integration

## Data flow

`src/data/certifications.js` owns the credential records and their `recommendedCareerPaths`. `src/utils/certificationUtils.js` resolves those path identifiers against the career catalog in `src/data/careersData.js` and active roadmap catalog in `src/data/roadmapsData.js`.

`CertificationRecommendations` is shared by `CareerDetailView` and `RoadmapDetailView`. Career details query by career ID; roadmap details query by roadmap ID. Both render records from the same catalog and link each credential name and detail action to `/certifications/:id`. The catalog list uses the same detail route. The detail page provides the provider link as the explicit external destination and internal links back to the originating path and related roadmaps.

## Identifier compatibility

Career profiles use descriptive IDs such as `frontend-developer`, while older catalog records and quiz answers may use shorter aliases such as `frontend-dev`. `careerIdAliases` in the utility maps known legacy names to current career IDs. Each career's `roadmapId` then connects those IDs to the 11 active roadmap IDs.

Quiz answers are also normalized through `getRoadmapIdsForCareerPath` before scores are applied. `FindPathPage` passes `roadmapsData` to the quiz, so returned links point to routes served by `RoadmapDetailView`. The old duplicated `relatedCertifications` arrays were removed from roadmap records.

## Utility API

- `getCertificationsByCareerId(id, limit)` returns up to six mapped credentials for a career.
- `getCertificationsByRoadmapId(id, limit)` returns up to six mapped credentials for a roadmap.
- `getCertificationsByCategory(category)`, `getCertificationsByProvider(provider)`, and `getCertificationsByDifficulty(difficulty)` provide catalog lookups.
- `getCertificationById(id)` resolves a stable catalog ID.
- `getRoadmapIdsForCareerPath(id)` normalizes current and legacy career path identifiers.
- `validateCareerAndRoadmapReferences()` reports duplicate IDs, missing provider/category/link data, and broken career or roadmap references.

Recommendation functions return no unrelated fallback results when a mapping is missing. Add or correct a mapping in the central catalog/alias map and cover it with a test rather than adding a component-local list.

## Adding a career or roadmap

1. Add the record to the correct career or roadmap data source and ensure `career.roadmapId` matches a route in `roadmapsData`.
2. Add any necessary legacy alias to `careerIdAliases`; do not rename a stable public ID just to match a display title.
3. Add the path ID to relevant catalog records' `recommendedCareerPaths`.
4. Check coverage with `npm test`, which validates all career/roadmap references and recommendation results.
