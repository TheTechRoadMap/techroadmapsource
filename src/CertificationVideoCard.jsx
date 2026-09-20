import React, { useState } from 'react';
import { getYouTubeVideoId, isSafeYouTubeUrl } from './contentUtils.js';

export default function CertificationVideoCard({ video }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!isSafeYouTubeUrl(video.youtubeUrl)) {
    return null;
  }

  const videoId = getYouTubeVideoId(video.youtubeUrl);
  const thumbnail = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : '';

  return (
    <article className="video-card">
      {thumbnail && !imageFailed ? (
        <img
          alt={`Thumbnail for ${video.title}`}
          className="video-card__image"
          loading="lazy"
          onError={() => setImageFailed(true)}
          src={thumbnail}
        />
      ) : (
        <div className="media-fallback media-fallback--video" role="img" aria-label="Video thumbnail unavailable">
          Video
        </div>
      )}
      <div className="video-card__body">
        <span className="eyebrow">{video.topic}</span>
        <h4>{video.title}</h4>
        <p>
          {video.channel}
          {video.duration ? ` · ${video.duration}` : ''}
        </p>
        <a className="button-link button-link--small" href={video.youtubeUrl} rel="noopener noreferrer" target="_blank">
          Watch on YouTube
        </a>
      </div>
    </article>
  );
}
