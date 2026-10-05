import React, { useState } from 'react';
import { Layers, Compass, Building2, GitFork, TrendingUp, Trees, Cpu, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { Language } from '../types/conference';
import { SCIENTIFIC_THEMES } from '../data/conferenceData';

interface ScientificThemesSectionProps {
  language: Language;
}

export const ScientificThemesSection: React.FC<ScientificThemesSectionProps> = ({ language }) => {
  const isAr = language === 'ar';
  const [expandedTrack, setExpandedTrack] = useState<string | null>(null);

  const getThemeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-cyan-700" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-teal-700" />;
      case 'GitFork':
        return <GitFork className="w-5 h-5 text-emerald-700" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-700" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-emerald-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-800" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-700" />;
    }
  };

  const toggleTrack = (id: string) => {
    setExpandedTrack(expandedTrack === id ? null : id);
  };

  return (
    <section id="themes" className="py-20 sm:py-24 bg-[#f4fafd] border-t border-cyan-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-950 text-xs font-black mb-3 shadow-2xs">
            <Layers className="w-4 h-4 text-cyan-700" />
            <span>{isAr ? 'المحاور الستة' : 'Scientific Themes'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0c2d48] tracking-tight leading-tight">
            {isAr ? 'المحاور العلمية الرئيسية للمؤتمر' : 'Main Scientific Themes & Research Tracks'}
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'تغطي محاور المؤتمر ستة مسارات استراتيجية تمتد من السياسات المكانية الكبرى إلى تقنيات التخطيط الذكية والتحول الرقمي.'
              : 'The conference encompasses six foundational research tracks addressing macro-spatial policies, sustainability, and smart planning technologies.'}
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCIENTIFIC_THEMES.map((theme) => {
            const isExpanded = expandedTrack === theme.id;
            const topics = isAr ? theme.topicsAr : theme.topicsEn;

            return (
              <div
                key={theme.id}
                className="group relative rounded-3xl bg-white border border-cyan-100/90 hover:border-cyan-300 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:bg-cyan-100/60 transition-all">
                      {getThemeIcon(theme.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-cyan-50/80 text-cyan-800 border border-cyan-200/60">
                      {isAr ? `المحور ${theme.trackNumber}` : `Track ${theme.trackNumber}`}
                    </span>
                  </div>

                  {/* Theme Title */}
                  <h3 className="text-base sm:text-lg font-black text-[#0c2d48] leading-snug group-hover:text-cyan-800 transition-colors mb-3">
                    {isAr ? theme.titleAr : theme.titleEn}
                  </h3>

                  {/* Scope / Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                    {isAr ? theme.descAr : theme.descEn}
                  </p>
                </div>

                {/* Subtopics Accordion */}
                <div className="pt-3 border-t border-cyan-50">
                  <button
                    type="button"
                    onClick={() => toggleTrack(theme.id)}
                    className="w-full flex items-center justify-between text-xs font-bold text-cyan-800 hover:text-cyan-950 py-1 transition-colors"
                  >
                    <span>{isAr ? 'موضوعات ونقاط المحور' : 'Track Topics & Subthemes'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isExpanded && topics && (
                    <ul className="mt-3 space-y-2 pt-2 border-t border-cyan-50 animate-fade-in">
                      {topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
