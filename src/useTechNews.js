import { useCallback, useEffect, useState } from 'react';
import { loadTechNews, NEWS_REFRESH_INTERVAL_MS } from './techNews.js';

export function useTechNews() {
  const [articles, setArticles] = useState([]);
  const [feedMode, setFeedMode] = useState('loading');
  const [status, setStatus] = useState('loading');
  const [updatedAt, setUpdatedAt] = useState(null);

  const refresh = useCallback(async (forceRefresh = true) => {
    try {
      const result = await loadTechNews({ forceRefresh });
      setArticles(result.items);
      setFeedMode(result.mode);
      setUpdatedAt(result.updatedAt);
      setStatus('ready');
    } catch {
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    let active = true;

    async function update(forceRefresh) {
      if (!active) {
        return;
      }
      await refresh(forceRefresh);
    }

    update(false);
    const timer = window.setInterval(() => update(true), NEWS_REFRESH_INTERVAL_MS);

    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, [refresh]);

  return {
    articles,
    feedMode,
    refresh,
    status,
    updatedAt,
  };
}

export function getNewsFeedLabel(feedMode) {
  if (feedMode === 'live') {
    return 'Live from Hacker News';
  }
  if (feedMode === 'cache') {
    return 'Recently updated';
  }
  if (feedMode === 'fallback') {
    return 'Curated fallback';
  }
  return 'Updating news';
}
