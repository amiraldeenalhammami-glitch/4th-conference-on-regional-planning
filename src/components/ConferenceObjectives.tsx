import React from 'react';
import { Target, Network, Scale, Leaf, ShieldCheck, CheckCircle2, Sparkles, Compass } from 'lucide-react';
import { Language } from '../types/conference';
import { CONFERENCE_OBJECTIVES } from '../data/conferenceData';

interface ConferenceObjectivesProps {
  language: Language;
}

export const ConferenceObjectives: React.FC<ConferenceObjectivesProps> = ({ language }) => {
  const isAr = language === 'ar';

  const getObjectiveIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-6 h-6 text-cyan-700" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-emerald-700" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-800" />;
      default:
        return <Target className="w-6 h-6 text-cyan-700" />;
    }
  };

  return (
    <section id="objectives" className="py-20 sm:py-24 bg-white relative">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-black mb-3 shadow-2xs">
            <Target className="w-4 h-4 text-cyan-700" />
            <span>{isAr ? 'أهداف المؤتمر الرئيسية' : 'Main Conference Objectives'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0c2d48] tracking-tight leading-tight">
            {isAr ? 'أهداف المؤتمر الرئيسية وأبعادها التنموية' : 'Main Conference Objectives & Spatial Dimensions'}
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'تتكامل أهداف المؤتمر لتضع خارطة طريق علمية وتطبيقية شاملة تدعم صناعة القرار التخطيطي وتعزز مسار التعافي والإعمار في سورية الجديدة.'
              : 'The conference objectives integrate academic rigor and practical frameworks to support spatial policy-making for a resilient, sustainable Syria.'}
          </p>
        </div>

        {/* 4 Cards Grid - Expanded with Academic Rationale and Key Points */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CONFERENCE_OBJECTIVES.map((obj, index) => {
            const keyPoints = isAr ? obj.keyPointsAr : obj.keyPointsEn;

            return (
              <div
                key={obj.id}
                className="group relative rounded-3xl bg-gradient-to-b from-[#f9fdfd] to-[#f4fafd] hover:from-white hover:to-white border border-cyan-100 hover:border-cyan-300/80 p-7 sm:p-9 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Sequence Badge */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-white border border-cyan-200/80 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:shadow-md transition-all">
                      {getObjectiveIcon(obj.icon)}
                    </div>
                    
                    <span className="text-xs font-mono font-black text-cyan-900 bg-cyan-100/70 border border-cyan-200/60 px-3 py-1 rounded-xl">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Primary Objective Title from Prompt */}
                  <h3 className="text-lg sm:text-xl font-black text-[#0c2d48] leading-snug group-hover:text-cyan-900 transition-colors mb-3.5">
                    {isAr ? obj.titleAr : obj.titleEn}
                  </h3>

                  {/* Expanded Academic Narrative */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                    {isAr ? obj.descAr : obj.descEn}
                  </p>
                </div>

                {/* Substantive Key Operational Dimensions */}
                {keyPoints && keyPoints.length > 0 && (
                  <div className="pt-5 border-t border-cyan-100/90 mt-2 space-y-2.5">
                    <span className="text-[11px] font-black uppercase tracking-wider text-cyan-800 block">
                      {isAr ? 'الركائز والأبعاد التنفيذية:' : 'Strategic Dimensions:'}
                    </span>
                    
                    <ul className="space-y-2">
                      {keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
