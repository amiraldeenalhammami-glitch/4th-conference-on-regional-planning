import React, { useState, useEffect } from 'react';
import { Language } from './types/conference';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AttendanceRegistrationSection } from './components/AttendanceRegistrationSection';
import { ConferenceObjectives } from './components/ConferenceObjectives';
import { ScientificThemesSection } from './components/ScientificThemesSection';
import { ParticipationConditionsSection } from './components/ParticipationConditionsSection';
import { InvitedEntitiesSection } from './components/InvitedEntitiesSection';
import { VenueSection } from './components/VenueSection';
import { ContactFooter } from './components/ContactFooter';

export default function App() {
  const [language, setLanguage] = useState<Language>('ar');

  // Synchronize document dir and lang attributes on language change
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <div className={`min-h-screen bg-[#f8fcfd] text-[#0c2d48] flex flex-col font-sans transition-colors duration-200 ${
      language === 'ar' ? 'font-arabic' : 'font-latin'
    }`}>
      {/* Sticky Bilingual Navbar */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Main Content Sections - Strictly based on Prompt */}
      <main className="flex-1">
        
        {/* Beginning of the Site: Official Invitation Card & Hero Overview */}
        <Hero
          language={language}
        />

        {/* Dedicated Attendance Registration Section with Clear Google Form Link */}
        <AttendanceRegistrationSection
          language={language}
        />

        {/* 1. Main Conference Objectives (أهداف المؤتمر الرئيسية) */}
        <ConferenceObjectives
          language={language}
        />

        {/* 2. Main Scientific Themes (المحاور العلمية الرئيسية) */}
        <ScientificThemesSection
          language={language}
        />

        {/* 3. Participation Conditions (شروط المشاركة) */}
        <ParticipationConditionsSection
          language={language}
        />

        {/* 4. Invited Entities (الجهات المدعوة للمشاركة) */}
        <InvitedEntitiesSection
          language={language}
        />

        {/* 5. Date, Venue & Google Maps Embed (المكان والخريطة) */}
        <VenueSection
          language={language}
        />

      </main>

      {/* 6. Footer & Contact (تذييل الصفحة وقسم التواصل) */}
      <ContactFooter
        language={language}
      />
    </div>
  );
}
