import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, ArrowUp, UserCheck } from 'lucide-react';
import { Language } from '../types/conference';
import { CONFERENCE_INFO } from '../data/conferenceData';
import officialLogoImg from '../assets/images/conference_official_logo_1791187167043.jpg';

interface ContactFooterProps {
  language: Language;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ language }) => {
  const isAr = language === 'ar';
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONFERENCE_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#f0f8fb] border-t-2 border-cyan-200/80 text-[#0c2d48] pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10 border-b border-cyan-200/80 items-center">
          
          {/* Organizers & Conference Title */}
          <div className="space-y-3.5 text-start">
            <div className="flex items-center gap-3.5">
              <div className="w-13 h-13 rounded-2xl overflow-hidden border border-cyan-200 bg-white flex-shrink-0 shadow-xs">
                <img src={officialLogoImg} alt="ICRP Emblem" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xs font-bold text-cyan-800 block">
                  {isAr ? CONFERENCE_INFO.organizersAr : CONFERENCE_INFO.organizersEn}
                </span>
                <h3 className="text-base sm:text-lg font-black text-[#0c2d48]">
                  {isAr ? CONFERENCE_INFO.titleAr : CONFERENCE_INFO.titleEn}
                </h3>
              </div>
            </div>

            <p className="text-xs font-extrabold text-[#144a32]">
              {isAr ? `«${CONFERENCE_INFO.themeAr}»` : `“${CONFERENCE_INFO.themeEn}”`}
            </p>

            <p className="text-xs text-slate-600 font-medium">
              {isAr ? `${CONFERENCE_INFO.dateAr} • ${CONFERENCE_INFO.locationAr}` : `${CONFERENCE_INFO.dateEn} • ${CONFERENCE_INFO.locationEn}`}
            </p>
          </div>

          {/* Conference Email & Registration Link */}
          <div className="bg-white p-6 rounded-3xl border border-cyan-200 shadow-sm space-y-3.5">
            <span className="text-xs font-black text-cyan-950 block uppercase tracking-wider">
              {isAr ? 'البريد الإلكتروني الرسمي للمؤتمر:' : 'Official Conference Email:'}
            </span>

            <div className="flex items-center justify-between gap-3 bg-[#f8fcfd] p-3 rounded-2xl border border-cyan-100">
              <a
                href={`mailto:${CONFERENCE_INFO.email}`}
                className="text-xs sm:text-sm font-mono font-bold text-[#0c2d48] hover:text-cyan-700 transition-colors truncate"
              >
                {CONFERENCE_INFO.email}
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3.5 py-1.5 bg-cyan-100/80 hover:bg-cyan-200 text-cyan-900 text-xs font-black rounded-xl transition-colors flex items-center gap-1.5 flex-shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (isAr ? 'تم النسخ' : 'Copied') : (isAr ? 'نسخ' : 'Copy')}</span>
              </button>
            </div>

            <div className="pt-1">
              <a
                href={CONFERENCE_INFO.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 bg-gradient-to-r from-cyan-700 to-[#0c2d48] hover:from-cyan-600 hover:to-[#081e32] text-white font-black text-xs sm:text-sm rounded-xl shadow-xs hover:shadow-sm transition-all"
              >
                <UserCheck className="w-4 h-4 text-cyan-300" />
                <span>{isAr ? 'تسجيل حضور المشاركين' : 'Register Attendance'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>
            {isAr
              ? 'جامعة دمشق — المعهد العالي للتخطيط الإقليمي وكلية الهندسة المعمارية © 2026'
              : 'Damascus University — Higher Institute for Regional Planning & Faculty of Architecture © 2026'}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="px-3.5 py-2 rounded-xl bg-white border border-cyan-200 hover:bg-cyan-50 text-cyan-950 transition-colors flex items-center gap-1.5 font-bold text-xs shadow-2xs"
          >
            <span>{isAr ? 'العودة للأعلى' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
