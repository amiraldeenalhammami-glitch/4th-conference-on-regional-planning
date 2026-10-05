import React from 'react';
import { MapPin, Navigation, Calendar, ExternalLink } from 'lucide-react';
import { Language } from '../types/conference';
import { CONFERENCE_INFO } from '../data/conferenceData';

interface VenueSectionProps {
  language: Language;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ language }) => {
  const isAr = language === 'ar';
  const directMapsUrl = "https://maps.google.com/?q=قاعة+رضا+سعيد+للمؤتمرات+رئاسة+جامعة+دمشق";

  return (
    <section id="venue" className="py-20 bg-white border-t border-cyan-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{isAr ? 'المكان والزمان' : 'Venue & Date'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#0c2d48] tracking-tight">
            {isAr ? 'الزمان والمكان' : 'Date and Venue'}
          </h2>
          
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold text-[#0c2d48]">
            <span className="bg-[#f0f9fb] px-4 py-2 rounded-xl border border-cyan-200">
              {isAr ? CONFERENCE_INFO.dateAr : CONFERENCE_INFO.dateEn}
            </span>
            <span className="bg-[#f0f9fb] px-4 py-2 rounded-xl border border-cyan-200">
              {isAr ? CONFERENCE_INFO.locationAr : CONFERENCE_INFO.locationEn}
            </span>
          </div>
        </div>

        {/* Embedded Google Maps Container as requested */}
        <div className="rounded-3xl overflow-hidden border-2 border-cyan-200 shadow-lg bg-white">
          <div className="bg-[#f0f9fb] px-6 py-3 border-b border-cyan-100 flex items-center justify-between text-xs font-bold text-[#0c2d48]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-700" />
              <span>
                {isAr
                  ? 'قاعة رضا سعيد للمؤتمرات — رئاسة جامعة دمشق — دمشق، البرامكة'
                  : 'Reda Said Conference Hall — Presidency of Damascus University — Baramkeh'}
              </span>
            </div>
            <a
              href={directMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-800 hover:text-cyan-900 inline-flex items-center gap-1 underline underline-offset-2"
            >
              <span>{isAr ? 'فتح في خرائط Google' : 'Open in Maps'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* User's Exact Google Maps iframe */}
          <div className="w-full h-[420px] sm:h-[480px]">
            <iframe
              src={CONFERENCE_INFO.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Damascus University Reda Said Hall Map"
              className="w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
