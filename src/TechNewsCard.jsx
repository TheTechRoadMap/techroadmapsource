import React, { useState } from 'react';
import { formatArticleDate, isSafeHttpsUrl } from './contentUtils.js';

export default function TechNewsCard({ article }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!isSafeHttpsUrl(article.articleUrl)) {
    return null;
  }

  return (
    <article className="news-card glass-card">
      <a
        aria-label={`Read ${article.title} on ${article.source}`}
        className="news-card__link"
        href={article.articleUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        {isSafeHttpsUrl(article.imageUrl) && !imageFailed ? (
          <img
            alt=""
            className="news-card__image"
            loading="lazy"
            onError={() => setImageFailed(true)}
            src={article.imageUrl}
          />
        ) : (
          <div className="media-fallback media-fallback--news" role="img" aria-label="Article image unavailable">
            {article.category.slice(0, 2).toUpperCase()}
          </div>
        )}
        <div className="news-card__body">
          <span className="eyebrow">{article.category}</span>
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <div className="news-card__meta">
            <span>{article.source}</span>
            <span>{formatArticleDate(article.publishedAt)}</span>
            {article.readingTime ? <span>{article.readingTime}</span> : null}
          </div>
          <span className="text-link">Read article</span>
        </div>
      </a>
    </article>
  );
}
