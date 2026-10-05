import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import { Language } from '../types/conference';
import { PARTICIPATION_CONDITIONS } from '../data/conferenceData';

interface ParticipationConditionsSectionProps {
  language: Language;
}

export const ParticipationConditionsSection: React.FC<ParticipationConditionsSectionProps> = ({ language }) => {
  const isAr = language === 'ar';

  return (
    <section id="conditions" className="py-20 bg-white border-t border-cyan-100 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>{isAr ? 'شروط المشاركة' : 'Participation Conditions'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#0c2d48] tracking-tight">
            {isAr ? 'شروط المشاركة في المؤتمر' : 'Conference Participation Conditions'}
          </h2>
        </div>

        {/* 4 Conditions Cards */}
        <div className="space-y-4">
          {PARTICIPATION_CONDITIONS.map((cond, idx) => (
            <div
              key={cond.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#f8fcfd] hover:bg-white border border-cyan-100 hover:border-cyan-300 transition-all duration-200 shadow-xs hover:shadow-md flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-900 font-extrabold flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                {idx + 1}
              </div>

              <div className="space-y-1">
                <p className="text-sm sm:text-base font-bold text-[#0c2d48] leading-relaxed">
                  {isAr ? cond.titleAr : cond.titleEn}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
