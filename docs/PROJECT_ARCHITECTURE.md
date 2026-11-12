# Project architecture

## Application shell and routing

The application is a Vite-built React single-page application. `src/main.jsx` mounts `src/app/App.jsx`, which uses React Router and lazy-loads route pages inside `Layout`. Main routes cover home, roadmaps and details, careers and details, Find My Path, certifications, news, about, and not-found handling.

## Data and shared components

- Career profiles and career-to-roadmap associations: `src/data/careersData.js`.
- The 11 interactive career roadmaps and steps: `src/data/roadmapsData.js`.
- Certification catalog, provider metadata, and related videos: `src/data/certifications.js`.
- Legacy roadmap/language page metadata and imported HTML content: `src/data/roadmaps.js`, `src/data/languages.js`, and `src/data/siteContent.js`.
- Shared certification selection and reference validation: `src/utils/certificationUtils.js`.
- Shared catalog, provider-folder, detail, news, and learning-plan components: `src/components/catalog/`.

`CareersPage` and `RoadmapsPage` browse their respective data sources. Detail views render profile or step content and call the shared certification recommendation component. `/certifications/:id` resolves a dedicated detail view from the central catalog. Catalog and recommendation links stay within the application; the detail page contains the explicit provider links. The catalog page remains the source for searching and filtering all opportunities.

## Persistence

Browser `localStorage` stores the selected theme, roadmap completion state, Find My Path answers, and saved careers. There is no backend, database, or account system.

## External services and links

The news data layer (`src/data/techNews.js`) fetches stories from the public Hacker News Firebase API and has local/fallback content. Certification, learning, video, and roadmap resource links navigate to external provider or resource sites; they are not proxied by the application.

## Tooling

The package scripts are `npm run dev`, `npm test` (Node's built-in test runner), `npm run build`, `npm run preview`, and `npm run check` (tests followed by production build). React Router, React, Vite, Lucide, and React Icons are existing dependencies.
