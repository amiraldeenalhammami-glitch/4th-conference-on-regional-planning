import React from 'react';
import { Users, Building, Landmark, Train, ShieldAlert, Zap, Wheat, MapPin, Map, Compass, Satellite, GraduationCap, Award, Briefcase, ShieldCheck, BarChart3, Globe2 } from 'lucide-react';
import { Language } from '../types/conference';
import { INVITED_ENTITIES } from '../data/conferenceData';

interface InvitedEntitiesSectionProps {
  language: Language;
}

export const InvitedEntitiesSection: React.FC<InvitedEntitiesSectionProps> = ({ language }) => {
  const isAr = language === 'ar';

  const getEntityIcon = (iconType: string) => {
    switch (iconType) {
      case 'Building':
        return <Building className="w-5 h-5 text-cyan-700" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-emerald-700" />;
      case 'Train':
        return <Train className="w-5 h-5 text-cyan-800" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-rose-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-600" />;
      case 'Wheat':
        return <Wheat className="w-5 h-5 text-emerald-600" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-cyan-700" />;
      case 'Map':
        return <Map className="w-5 h-5 text-teal-700" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-cyan-800" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-cyan-700" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-emerald-700" />;
      case 'Satellite':
        return <Satellite className="w-5 h-5 text-indigo-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-emerald-700" />;
      case 'Globe2':
        return <Globe2 className="w-5 h-5 text-cyan-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-amber-700" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-slate-700" />;
      default:
        return <Building className="w-5 h-5 text-cyan-700" />;
    }
  };

  return (
    <section id="entities" className="py-20 bg-[#f4fafd] border-t border-cyan-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-900 text-xs font-bold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>{isAr ? 'الجهات المدعوة' : 'Invited Entities'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#0c2d48] tracking-tight">
            {isAr ? 'الجهات المدعوة للمشاركة' : 'Invited Entities'}
          </h2>
        </div>

        {/* Entities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INVITED_ENTITIES.map((entity) => (
            <div
              key={entity.id}
              className="p-4 sm:p-5 rounded-2xl bg-white hover:bg-white border border-cyan-100 hover:border-cyan-300 transition-all duration-200 shadow-xs hover:shadow-md flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                {getEntityIcon(entity.iconType)}
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#0c2d48] group-hover:text-cyan-800 transition-colors">
                  {isAr ? entity.nameAr : entity.nameEn}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
