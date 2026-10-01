import React, { useState } from 'react';
import {
  Building2,
  Cloud,
  Database,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react';
import {
  SiCisco,
  SiCodecademy,
  SiComptia,
  SiCoursera,
  SiDocker,
  SiFreecodecamp,
  SiGithub,
  SiGoogle,
  SiIsc2,
  SiLinuxfoundation,
  SiMongodb,
  SiRedhat,
  SiUnity,
} from 'react-icons/si';
import { isSafeHttpsUrl } from '../../utils/contentUtils.js';

const providerIcons = {
  cisco: SiCisco,
  codecademy: SiCodecademy,
  comptia: SiComptia,
  coursera: SiCoursera,
  docker: SiDocker,
  freecodecamp: SiFreecodecamp,
  github: SiGithub,
  google: SiGoogle,
  isc2: SiIsc2,
  linuxfoundation: SiLinuxfoundation,
  mongodb: SiMongodb,
  redhat: SiRedhat,
  unity: SiUnity,
};

const fallbackIcons = [Building2, Cloud, Database, GraduationCap, ShieldCheck];

function providerInitials(provider) {
  return provider
    .split(/\s+/)
    .filter((word) => !['and', 'of', 'the'].includes(word.toLowerCase()))
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
}

function getFallbackIcon(provider) {
  const index = [...provider].reduce((total, character) => total + character.charCodeAt(0), 0);
  return fallbackIcons[index % fallbackIcons.length];
}

export default function ProviderIcon({ iconKey, provider, logoUrl, size = 26 }) {
  const [imageFailed, setImageFailed] = useState(false);
  const BrandIcon = iconKey === 'image' ? null : providerIcons[iconKey] ?? providerIcons[provider];
  const FallbackIcon = getFallbackIcon(provider);
  const canUseImage = !BrandIcon && !imageFailed && isSafeHttpsUrl(logoUrl);

  if (BrandIcon) {
    return <BrandIcon aria-hidden="true" className="provider-logo__brand" size={size} />;
  }

  if (canUseImage) {
    return (
      <img
        alt=""
        className="provider-logo__image"
        height={size}
        loading="lazy"
        onError={() => setImageFailed(true)}
        src={logoUrl}
        width={size}
      />
    );
  }

  return (
    <span className="provider-logo__fallback" title={provider}>
      <FallbackIcon aria-hidden="true" size={Math.max(18, size - 4)} />
      <span className="sr-only">{providerInitials(provider)}</span>
    </span>
  );
}
