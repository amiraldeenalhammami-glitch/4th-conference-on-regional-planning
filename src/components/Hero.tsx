import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink, Building, UserCheck, Maximize2, X, ChevronDown, Sparkles } from 'lucide-react';
import { Language } from '../types/conference';
import { CONFERENCE_INFO } from '../data/conferenceData';
import officialLogoImg from '../assets/images/conference_official_logo_1791187167043.jpg';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const isAr = language === 'ar';
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const scrollToObjectives = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#objectives');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-28 sm:pt-36 pb-20 bg-gradient-to-b from-[#eef7fa] via-[#f7fcfd] to-white relative overflow-hidden">
      
      {/* Dynamic constellation & network background */}
      <div className="absolute inset-0 bg-[radial-gradient(#93c5fd_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-40 pointer-events-none" />
      <div className="absolute top-12 right-1/4 w-[32rem] h-[32rem] bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[32rem] h-[32rem] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Institutional Header Row - Strictly Damascus University */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 border border-cyan-200/90 shadow-xs text-xs sm:text-sm font-extrabold text-[#0c2d48]">
            <Building className="w-4 h-4 text-cyan-700" />
            <span>{isAr ? CONFERENCE_INFO.organizersAr : CONFERENCE_INFO.organizersEn}</span>
          </div>
        </div>

        {/* LARGE OFFICIAL LOGO IN THE INTRODUCTION - High-Precision Display */}
        <div className="mb-9 flex flex-col items-center justify-center">
          <div className="relative group">
            
            {/* Outer Glow & Rotating Border Accent */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-500 rounded-full blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-300" />

            {/* The Crisp Circular Logo */}
            <div
              onClick={() => setIsZoomOpen(true)}
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white p-1 ring-4 ring-cyan-200 cursor-pointer transform group-hover:scale-102 transition-all duration-300 flex items-center justify-center"
              title={isAr ? 'انقر لتكبير الشعار بالدقة الكاملة' : 'Click to inspect logo in full resolution'}
            >
              <img
                src={officialLogoImg}
                alt="شعار المؤتمر الدولي الرابع للتخطيط الإقليمي"
                className="w-full h-full object-contain rounded-full"
                loading="eager"
              />

              {/* Hover Zoom Prompt Badge */}
              <div className="absolute inset-0 bg-[#0c2d48]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full flex flex-col items-center justify-center text-white p-4">
                <Maximize2 className="w-8 h-8 mb-1.5 text-cyan-200 animate-pulse" />
                <span className="text-xs sm:text-sm font-black tracking-wide">
                  {isAr ? 'عرض الشعار بالدقة الكاملة' : 'View Full Resolution'}
                </span>
              </div>
            </div>

            {/* Bottom Emblem Pill Badge */}
            <div className="absolute -bottom-3 inset-x-0 flex justify-center">
              <span className="px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#0c2d48] text-white shadow-md border border-cyan-400/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>ICRP 2026</span>
              </span>
            </div>

          </div>
        </div>

        {/* Main Conference Title */}
        <div className="max-w-4xl mx-auto mb-6 space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0c2d48] tracking-tight leading-[1.2]">
            {isAr ? CONFERENCE_INFO.titleAr : CONFERENCE_INFO.titleEn}
          </h1>

          {/* Theme Banner */}
          <div className="inline-block p-[1.5px] rounded-2xl bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500 shadow-sm max-w-3xl">
            <div className="bg-white/95 px-6 sm:px-8 py-3.5 rounded-2xl">
              <p className="text-base sm:text-xl lg:text-2xl font-black text-[#144a32] leading-snug">
                {isAr ? `«${CONFERENCE_INFO.themeAr}»` : `“${CONFERENCE_INFO.themeEn}”`}
              </p>
            </div>
          </div>

          {/* Formal Invitation Statement */}
          <p className="text-base sm:text-lg font-black text-[#0c2d48] pt-1">
            {isAr ? 'نتشرف بدعوتكم لحضور فعاليات المؤتمر' : 'Cordially inviting you to attend the conference proceedings'}
          </p>

          {/* Venue & Time Pill Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3 text-xs sm:text-sm font-bold text-[#0c2d48]">
            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-2xl border border-cyan-200/90 shadow-xs">
              <Calendar className="w-4 h-4 text-cyan-700" />
              <span>{isAr ? CONFERENCE_INFO.dateAr : CONFERENCE_INFO.dateEn}</span>
            </div>

            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-2xl border border-cyan-200/90 shadow-xs">
              <MapPin className="w-4 h-4 text-emerald-700" />
              <span>{isAr ? CONFERENCE_INFO.locationAr : CONFERENCE_INFO.locationEn}</span>
            </div>
          </div>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-6 max-w-md mx-auto">
          <a
            href={CONFERENCE_INFO.registrationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-black text-white bg-gradient-to-r from-cyan-700 via-cyan-800 to-[#0c2d48] hover:from-cyan-600 hover:to-[#081e32] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <UserCheck className="w-5 h-5 text-cyan-200" />
            <span>{isAr ? 'تسجيل الحضور في المؤتمر' : 'Register Attendance'}</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href="#objectives"
            onClick={scrollToObjectives}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold text-[#0c2d48] hover:text-cyan-800 bg-white hover:bg-cyan-50/60 border border-cyan-200/80 rounded-2xl shadow-xs transition-colors"
          >
            <span>{isAr ? 'استكشاف الأهداف والمحاور' : 'Explore Objectives & Tracks'}</span>
            <ChevronDown className="w-4 h-4 text-cyan-700" />
          </a>
        </div>

      </div>

      {/* Full Resolution Logo Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-6 text-center">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <span className="text-sm font-black text-[#0c2d48]">
                {isAr ? 'الشعار الرسمي للمؤتمر — جامعة دمشق' : 'Official Conference Logo — Damascus University'}
              </span>
              <button
                type="button"
                onClick={() => setIsZoomOpen(false)}
                className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex items-center justify-center py-4">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-cyan-200 shadow-xl bg-white p-2">
                <img
                  src={officialLogoImg}
                  alt="شعار المؤتمر بدقة متناهية"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 font-semibold">
              <p>4th International Conference on Regional Planning — Damascus University (ICRP 2026)</p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
