import React, { useState } from 'react';

// Primary high-speed global CDN URL and fallback mirrors
export const PRIMARY_LOGO_URL =
  'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Emblem_of_Kendal_Regency_%282011%29.svg/500px-Emblem_of_Kendal_Regency_%282011%29.svg.png';

export const BACKUP_LOGO_URLS = [
  'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Emblem_of_Kendal_Regency_%282011%29.svg/500px-Emblem_of_Kendal_Regency_%282011%29.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Emblem_of_Kendal_Regency_%282011%29.svg/500px-Emblem_of_Kendal_Regency_%282011%29.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/8/8c/Emblem_of_Kendal_Regency_%282011%29.svg',
];

interface KendalLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  alt?: string;
}

export const KendalLogo: React.FC<KendalLogoProps> = ({
  className = '',
  size = 'md',
  alt = 'Lambang Kabupaten Kendal - Ngesti Widdhi 1605',
}) => {
  const [urlIndex, setUrlIndex] = useState(0);

  const sizeClasses = {
    sm: 'w-8 h-10',
    md: 'w-10 h-12 md:w-11 md:h-13',
    lg: 'w-12 h-15 md:w-14 md:h-17',
    xl: 'w-16 h-20 md:w-20 md:h-24',
  };

  const allUrls = [PRIMARY_LOGO_URL, ...BACKUP_LOGO_URLS];
  const currentSrc = allUrls[urlIndex] || PRIMARY_LOGO_URL;

  const handleImageError = () => {
    if (urlIndex < allUrls.length - 1) {
      setUrlIndex(prev => prev + 1);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading="eager"
      decoding="async"
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
      onError={handleImageError}
      className={`${sizeClasses[size]} object-contain drop-shadow-sm transition-transform select-none ${className}`}
    />
  );
};
