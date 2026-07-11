import React from 'react';
import CatalogPage from './CatalogPage.jsx';
import { languageCategories } from './languages.js';
import { languageContent } from './siteContent.js';
import { usePageMeta } from './pageMeta.js';

export default function LanguagesPage() {
  usePageMeta(
    'Languages and Technologies',
    'Explore programming languages, frameworks, platforms, and tooling that support modern development careers.',
  );

  return (
    <CatalogPage
      categories={languageCategories}
      guideText="Search by name or learning goal, filter by category, and mark technologies complete as you gain working familiarity."
      infoText="Programming languages, frameworks, cloud platforms, and tooling shape how modern teams build and ship software. This catalog keeps them in one place with context and curated resources."
      infoTitle="Why Learn These?"
      itemPath="/languages"
      itemType="language"
      items={languageContent}
      searchPlaceholder="Search languages, frameworks, and tools..."
      subtitle="Programming languages, frameworks, cloud platforms, and tooling aligned to current development practice."
      title="Languages and Technologies"
    />
  );
}
