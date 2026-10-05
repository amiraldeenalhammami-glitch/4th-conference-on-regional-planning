export type Language = 'ar' | 'en';

export interface TimelineDate {
  id: string;
  dateStrAr: string;
  dateStrEn: string;
  targetDate: string; // ISO date format for countdown calculation
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  isMilestone?: boolean;
}

export interface Objective {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  keyPointsAr: string[];
  keyPointsEn: string[];
  icon: string;
}

export interface ScientificTheme {
  id: string;
  trackNumber: number;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  topicsAr: string[];
  topicsEn: string[];
  icon: string;
}

export interface ParticipationRule {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  noteAr?: string;
  noteEn?: string;
}

export interface InvitedEntity {
  id: string;
  category: 'ministries' | 'governorates' | 'agencies' | 'academic_private';
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  iconType: string;
}

export interface CommitteeMember {
  roleAr: string;
  roleEn: string;
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
}

export interface FAQItem {
  id: string;
  qAr: string;
  qEn: string;
  aAr: string;
  aEn: string;
  categoryAr: string;
  categoryEn: string;
}

export interface SubmissionData {
  referenceId: string;
  submittedAt: string;
  authorName: string;
  authorEmail: string;
  authorPhone: string;
  affiliation: string;
  country: string;
  trackId: string;
  trackTitle: string;
  paperTitle: string;
  abstractText: string;
  keywords: string;
  fileName?: string;
}
