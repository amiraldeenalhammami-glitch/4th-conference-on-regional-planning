import React, { useState } from 'react';
import { ExternalLink, Copy, Check, ChevronDown, ChevronUp, UserCheck, ShieldCheck, Award, FileSpreadsheet, MapPin } from 'lucide-react';
import { Language } from '../types/conference';
import { CONFERENCE_INFO } from '../data/conferenceData';

interface AttendanceRegistrationSectionProps {
  language: Language;
}

export const AttendanceRegistrationSection: React.FC<AttendanceRegistrationSectionProps> = ({ language }) => {
  const isAr = language === 'ar';
  const [copiedLink, setCopiedLink] = useState(false);
  const [showEmbeddedForm, setShowEmbeddedForm] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(CONFERENCE_INFO.registrationFormUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="attendance" className="py-16 sm:py-20 bg-gradient-to-b from-[#eef7fa] via-[#f4fafd] to-white border-y border-cyan-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Registration Card */}
        <div className="bg-white rounded-3xl p-7 sm:p-12 shadow-xl border border-cyan-100 text-center relative overflow-hidden">
          
          {/* Subtle top decorative ribbon */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-cyan-600 via-emerald-500 to-cyan-600" />

          {/* Section Kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-black mb-4 shadow-2xs">
            <UserCheck className="w-4 h-4 text-cyan-700" />
            <span>{isAr ? 'تسجيل حضور المشاركين' : 'Participant Registration'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#0c2d48] tracking-tight leading-tight mb-4">
            {isAr ? 'تسجيل حضور المشاركين في المؤتمر' : 'Conference Attendance Registration'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            {isAr
              ? 'يرحب المعهد العالي للتخطيط الإقليمي وكليّة الهندسة المعمارية في جامعة دمشق بالسادة الباحثين والمشاركين لتأكيد الحضور والمشاركة عبر الرابط الرسمي المعتمد.'
              : 'Damascus University cordially invites researchers and participants to confirm their attendance for the 4th International Conference on Regional Planning.'}
          </p>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8 text-start">
            <div className="bg-[#f7fcfd] p-3 rounded-2xl border border-cyan-100/80 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span className="text-xs font-bold text-[#0c2d48]">
                {isAr ? 'حضور رسمي معتمد' : 'Accredited Attendance'}
              </span>
            </div>

            <div className="bg-[#f7fcfd] p-3 rounded-2xl border border-cyan-100/80 flex items-center gap-2.5">
              <Award className="w-5 h-5 text-cyan-600 flex-shrink-0" />
              <span className="text-xs font-bold text-[#0c2d48]">
                {isAr ? 'شهادة مشاركة' : 'Certificate of Participation'}
              </span>
            </div>

            <div className="bg-[#f7fcfd] p-3 rounded-2xl border border-cyan-100/80 flex items-center gap-2.5">
              <FileSpreadsheet className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span className="text-xs font-bold text-[#0c2d48]">
                {isAr ? 'حقيبة أوراق المؤتمر' : 'Conference Proceedings'}
              </span>
            </div>

            <div className="bg-[#f7fcfd] p-3 rounded-2xl border border-cyan-100/80 flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-cyan-600 flex-shrink-0" />
              <span className="text-xs font-bold text-[#0c2d48]">
                {isAr ? 'قاعة رضا سعيد' : 'Reda Said Hall'}
              </span>
            </div>
          </div>

          {/* Primary Action Button (Clean, dignified, prominent) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto mb-6">
            <a
              href={CONFERENCE_INFO.registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 text-base sm:text-lg font-black text-white bg-gradient-to-r from-cyan-700 via-cyan-800 to-[#0c2d48] hover:from-cyan-600 hover:to-[#081e32] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <UserCheck className="w-5 h-5 text-cyan-200" />
              <span>{isAr ? 'تسجيل الحضور الآن' : 'Register Attendance Now'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleCopyLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#0c2d48] bg-cyan-50/80 hover:bg-cyan-100/90 border border-cyan-200 rounded-2xl transition-colors"
              title={isAr ? 'نسخ رابط التسجيل' : 'Copy link'}
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">{isAr ? 'تم نسخ الرابط' : 'Link Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>{isAr ? 'نسخ الرابط' : 'Copy Link'}</span>
                </>
              )}
            </button>
          </div>

          {/* Clean toggle for direct view */}
          <div>
            <button
              type="button"
              onClick={() => setShowEmbeddedForm(!showEmbeddedForm)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-800 hover:text-cyan-900 transition-colors"
            >
              <span>
                {showEmbeddedForm
                  ? (isAr ? 'إخفاء الاستمارة' : 'Hide Form')
                  : (isAr ? 'عرض الاستمارة مباشرة في هذه الصفحة' : 'Show registration form directly on this page')}
              </span>
              {showEmbeddedForm ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Embedded Form */}
          {showEmbeddedForm && (
            <div className="mt-8 pt-6 border-t border-cyan-100 animate-fade-in text-start">
              <div className="bg-slate-50/60 rounded-2xl p-2 sm:p-4 border border-cyan-100 max-w-4xl mx-auto shadow-inner">
                <iframe
                  src={CONFERENCE_INFO.registrationFormUrl}
                  width="100%"
                  height="760"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-xl w-full bg-white shadow-xs"
                  title="Attendance Registration Form"
                >
                  {isAr ? 'جارٍ تحميل الاستمارة...' : 'Loading Registration Form...'}
                </iframe>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
