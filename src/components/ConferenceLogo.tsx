import React from 'react';
import officialLogoImg from '../assets/images/conference_official_logo_1791187167043.jpg';

interface ConferenceLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  showShadow?: boolean;
}

export const ConferenceLogo: React.FC<ConferenceLogoProps> = ({
  size = 'md',
  className = '',
  showShadow = true,
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
    hero: 'w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96',
  }[size];

  return (
    <div
      className={`relative rounded-full overflow-hidden bg-white flex items-center justify-center ${sizeClasses} ${
        showShadow ? 'shadow-xl ring-4 ring-cyan-100/80 border-2 border-cyan-300' : ''
      } ${className}`}
    >
      <img
        src={officialLogoImg}
        alt="شعار المؤتمر الدولي الرابع للتخطيط الإقليمي - جامعة دمشق"
        className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-105"
        loading="eager"
      />
    </div>
  );
};
