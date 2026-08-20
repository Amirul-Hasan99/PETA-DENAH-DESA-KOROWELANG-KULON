import React, { useState } from 'react';

export const KENDAL_LOGO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Emblem_of_Kendal_Regency_%282011%29.svg/480px-Emblem_of_Kendal_Regency_%282011%29.svg.png';

interface KendalLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  alt?: string;
}

export const KendalLogo: React.FC<KendalLogoProps> = ({
  className = '',
  size = 'md',
  alt = 'Lambang Kabupaten Kendal - Ngesti Widdhi',
}) => {
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: 'w-7 h-9',
    md: 'w-9 h-11',
    lg: 'w-12 h-15',
    xl: 'w-16 h-20',
  };

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded bg-[#001e40] text-[#ffd700] font-bold border border-[#ffd700]/30 shadow-xs ${sizeClasses[size]} ${className}`}
        title="Kabupaten Kendal"
      >
        <span className="text-[10px] font-black tracking-tighter">KDL</span>
        <span className="text-[7px] text-white">1605</span>
      </div>
    );
  }

  return (
    <img
      src={KENDAL_LOGO_URL}
      alt={alt}
      loading="eager"
      onError={() => setHasError(true)}
      className={`${sizeClasses[size]} object-contain drop-shadow-sm transition-transform ${className}`}
    />
  );
};
