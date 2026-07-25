import React from 'react';
import CatalogPage from './CatalogPage.jsx';
import { roadmapContent, homeStats } from './siteContent.js';
import { usePageMeta } from './pageMeta.js';
import { roadmapCategories } from './roadmaps.js';

export default function Home() {
  usePageMeta(
    'TechRoadMap',
    'Explore tech career roadmaps, curated learning resources, and current development guidance in one SPA.',
  );

  return (
    <CatalogPage
      categories={roadmapCategories}
      guideText="Use search or category filters to narrow the list. Mark a roadmap complete as you progress, then open the detail page for learning paths and resources."
      infoText="Tech roadmaps help you organize what to learn next, see how skills connect, and focus on the paths employers actually hire for."
      infoTitle="Why Tech Roadmaps?"
      itemPath="/roadmaps"
      itemType="roadmap"
      items={roadmapContent}
      searchPlaceholder="Search roadmaps, roles, and skills..."
      stats={[
        {
          label: 'Career Roadmaps',
          tone: 'blue',
          value: `${homeStats.roadmapCount}+`,
        },
        {
          label: 'Learning Resources',
          tone: 'green',
          value: `${homeStats.learningResourceCount}+`,
        },
        {
          label: 'Technologies Covered',
          tone: 'purple',
          value: `${homeStats.technologyCount}+`,
        },
      ]}
      subtitle="Structured guidance for navigating software, cloud, data, security, and adjacent tech careers."
      title="The TechRoadMap"
    />
  );
}
