export function isSafeHttpsUrl(value) {
  if (typeof value !== 'string' || !value.trim()) {
    return false;
  }

  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password;
  } catch {
    return false;
  }
}

export function isSafeYouTubeUrl(value) {
  if (!isSafeHttpsUrl(value)) {
    return false;
  }

  const url = new URL(value);
  const host = url.hostname.replace(/^www\./, '');
  return (
    (host === 'youtube.com' && url.pathname === '/watch' && Boolean(url.searchParams.get('v'))) ||
    (host === 'youtu.be' && url.pathname.length > 1)
  );
}

export function getYouTubeVideoId(value) {
  if (!isSafeYouTubeUrl(value)) {
    return '';
  }

  const url = new URL(value);
  return url.hostname.replace(/^www\./, '') === 'youtu.be'
    ? url.pathname.slice(1).split('/')[0]
    : url.searchParams.get('v') ?? '';
}

export function filterCertifications(items, filters = {}) {
  const search = (filters.search ?? '').trim().toLowerCase();

  return items.filter((item) => {
    const matchesSearch =
      !search ||
      `${item.name} ${item.provider} ${item.description} ${item.skills.join(' ')}`
        .toLowerCase()
        .includes(search);
    const matchesProvider = !filters.provider || filters.provider === 'all' || item.provider === filters.provider;
    const matchesCategory = !filters.category || filters.category === 'all' || item.category === filters.category;
    const matchesDifficulty =
      !filters.difficulty || filters.difficulty === 'all' || item.difficulty === filters.difficulty;
    const matchesCost = !filters.costType || filters.costType === 'all' || item.costType === filters.costType;

    return matchesSearch && matchesProvider && matchesCategory && matchesDifficulty && matchesCost;
  });
}

export function filterNews(items, filters = {}) {
  const search = (filters.search ?? '').trim().toLowerCase();
  const filtered = items.filter((item) => {
    const matchesSearch =
      !search || `${item.title} ${item.summary} ${item.source} ${item.category}`.toLowerCase().includes(search);
    const matchesCategory = !filters.category || filters.category === 'all' || item.category === filters.category;
    const matchesSource = !filters.source || filters.source === 'all' || item.source === filters.source;
    return matchesSearch && matchesCategory && matchesSource;
  });

  return [...filtered].sort((left, right) => {
    const direction = filters.sort === 'oldest' ? 1 : -1;
    return (new Date(left.publishedAt).getTime() - new Date(right.publishedAt).getTime()) * direction;
  });
}

export function uniqueValues(items, key) {
  return [...new Set(items.map((item) => item[key]).filter(Boolean))].sort();
}

export function formatArticleDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return 'Date unavailable';
  }

  return new Intl.DateTimeFormat('en-ZA', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}
