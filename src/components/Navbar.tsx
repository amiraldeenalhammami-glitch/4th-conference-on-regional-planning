import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ExternalLink, UserCheck } from 'lucide-react';
import { Language } from '../types/conference';
import { CONFERENCE_INFO } from '../data/conferenceData';
import officialLogoImg from '../assets/images/conference_official_logo_1791187167043.jpg';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
}) => {
  const isAr = language === 'ar';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = isAr ? [
    { href: '#hero', label: 'الرئيسية' },
    { href: '#attendance', label: 'تسجيل الحضور', isSpecial: true },
    { href: '#objectives', label: 'أهداف المؤتمر' },
    { href: '#themes', label: 'المحاور العلمية' },
    { href: '#conditions', label: 'شروط المشاركة' },
    { href: '#entities', label: 'الجهات المدعوة' },
    { href: '#venue', label: 'المكان والخريطة' },
    { href: '#contact', label: 'التواصل' },
  ] : [
    { href: '#hero', label: 'Home' },
    { href: '#attendance', label: 'Registration', isSpecial: true },
    { href: '#objectives', label: 'Objectives' },
    { href: '#themes', label: 'Themes' },
    { href: '#conditions', label: 'Conditions' },
    { href: '#entities', label: 'Invited Entities' },
    { href: '#venue', label: 'Venue & Map' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-cyan-950/5 border-b border-cyan-100 py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-cyan-100/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Official Conference Logo Button */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 rounded-2xl p-1 transition-transform"
            title={isAr ? 'المؤتمر الدولي الرابع للتخطيط الإقليمي' : '4th International Conference on Regional Planning'}
          >
            {/* Crisp Official Logo in Navbar */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-cyan-400/80 shadow-md ring-2 ring-cyan-100 flex-shrink-0 bg-white">
              <img
                src={officialLogoImg}
                alt="شعار المؤتمر الرسمي - جامعة دمشق"
                className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col text-start">
              <span className="text-[11px] font-bold text-cyan-800 tracking-wide">
                {isAr ? 'جامعة دمشق' : 'Damascus University'}
              </span>
              <span className="text-xs sm:text-sm font-black text-[#0c2d48] tracking-tight leading-tight group-hover:text-cyan-700 transition-colors">
                {isAr ? CONFERENCE_INFO.titleAr : CONFERENCE_INFO.titleEn}
              </span>
              <span className="text-[10px] text-slate-500 hidden sm:inline-block font-medium">
                {isAr ? 'المعهد العالي للتخطيط الإقليمي & كلية الهندسة المعمارية' : 'Higher Institute for Regional Planning & Architecture'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs font-bold transition-colors duration-200 py-1 ${
                  link.isSpecial
                    ? 'text-cyan-900 bg-cyan-100/70 hover:bg-cyan-200/80 px-3 py-1 rounded-xl border border-cyan-200'
                    : 'text-[#0c2d48]/80 hover:text-cyan-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: Language Switcher & Direct Attendance CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher Toggle */}
            <div className="flex items-center bg-cyan-50/90 border border-cyan-200 p-0.5 rounded-xl shadow-2xs">
              <button
                type="button"
                onClick={() => onLanguageChange('ar')}
                className={`px-2.5 py-1 text-xs font-black rounded-lg transition-all ${
                  isAr
                    ? 'bg-[#0c2d48] text-white shadow-xs'
                    : 'text-cyan-900 hover:text-[#0c2d48]'
                }`}
                title="التبديل إلى اللغة العربية"
              >
                عربي
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-xs font-black rounded-lg transition-all ${
                  !isAr
                    ? 'bg-[#0c2d48] text-white shadow-xs'
                    : 'text-cyan-900 hover:text-[#0c2d48]'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Direct Attendance Registration CTA Button */}
            <a
              href={CONFERENCE_INFO.registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 sm:px-4.5 py-2 text-xs sm:text-sm font-black text-white bg-gradient-to-r from-cyan-700 via-cyan-800 to-[#0c2d48] hover:from-cyan-600 hover:to-[#092238] rounded-xl shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <UserCheck className="w-3.5 h-3.5 text-cyan-300" />
              <span>{isAr ? 'تسجيل الحضور' : 'Register'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:text-[#0c2d48] hover:bg-cyan-50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-cyan-100 px-4 pt-3 pb-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-1 divide-y divide-cyan-50">
            <div className="py-2 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-3 py-2 text-xs font-bold rounded-xl transition-colors ${
                    link.isSpecial
                      ? 'text-cyan-900 bg-cyan-100/70'
                      : 'text-slate-800 hover:text-cyan-700 hover:bg-cyan-50/50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3">
              <a
                href={CONFERENCE_INFO.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-black text-white bg-gradient-to-r from-cyan-700 to-[#0c2d48] rounded-xl shadow"
              >
                <UserCheck className="w-4 h-4 text-cyan-300" />
                <span>{isAr ? 'تسجيل حضور المشاركين' : 'Register Attendance'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
