# Certification catalog

## Source and presentation

`src/data/certifications.js` is the authoritative catalog. It exports:

- `certifications`: the normalized credential, programme, and learning-path records.
- `certificationCategories`: category labels used by the catalog filter.
- `certificationProviders`: provider descriptions, logos, and official provider landing pages.
- `certificationVideos`: optional learning videos tied to catalog IDs.

The catalog page loads these records and groups them by provider in `CertificationFolder`. Career and roadmap detail pages request recommendations through `src/utils/certificationUtils.js`; they do not maintain their own certification arrays.

## Categories and credential types

Categories currently represented are AI, cloud, data and analytics, design, DevOps, software engineering, game development, systems administration, IT service management, mobile, networking, programming, productivity, cybersecurity, and IT support.

`credentialType` distinguishes industry/associate certifications, professional certificates, course badges, tuition-free programmes, and learning paths. For older entries without an explicit value, the catalog normalizer infers a type from the listed name; maintainers should replace inferred values with the provider's exact classification when verifying a record.

## Record shape

Each catalog record has a stable `id`, `name`, `provider`, `credentialType`, `description`, `category`, `difficulty`, `duration`, `costType`, `skills`, `officialUrl`, and `recommendedCareerPaths`. Records may also include `examCode`, `examRequired`, `validityPeriod`, `lastVerified`, and `verificationStatus`.

- `costType` describes the listed opportunity at a broad level (`Free`, `Paid`, `Varies`, or financial-aid availability); it is not a quoted exam price.
- `examRequired` is omitted when the provider requirement has not been checked. `false` means the listed resource itself is not an exam-based credential.
- `lastVerified` is an ISO date for source checks actually performed.
- `verificationStatus` is `verified` only for records checked against a primary provider source; otherwise records default to `needs-review`.
- `officialUrl` should point directly to the provider or authorized credential/programme page.

## Providers

The catalog currently represents AWS, Cisco Networking Academy, Codecademy, CompTIA, Coursera, Docker (via Mirantis), Flutter, freeCodeCamp, GitHub, Google, Google Cloud, IBM, ISC2, Linux Foundation, Microsoft, MongoDB, Oracle University, PeopleCert, Red Hat, Tableau, Unity, and WeThinkCode_.

Availability, fees, and eligibility can vary by country and change over time. In particular, a free course or free learning material does not imply a free external certification examination.

## Adding or changing a record

1. Check the provider's current credential page and exam or enrolment information.
2. Preserve an existing ID if the record remains the same credential. If replacing a credential, add a new ID and remove the retired entry only after checking its references.
3. Use a provider's exact current name and credential type. Do not treat a course completion certificate as an industry exam.
4. Add only facts supported by the source. Keep unconfirmed details omitted and set `verificationStatus: 'needs-review'`.
5. Add the relevant career or roadmap identifiers to `recommendedCareerPaths`.
6. Run `npm test` and `npm run build`; the catalog tests validate IDs, categories, links, mappings, and recommendation coverage.
7. Record source URLs, dates, and any uncertainty in [Certification verification](./CERTIFICATION_VERIFICATION.md).
