import { Objective, ScientificTheme, ParticipationRule, InvitedEntity } from '../types/conference';

export const CONFERENCE_INFO = {
  organizersAr: 'جامعة دمشق - المعهد العالي للتخطيط الإقليمي، وكلية الهندسة المعمارية',
  organizersEn: 'Damascus University - Higher Institute for Regional Planning, and Faculty of Architecture',
  titleAr: 'المؤتمر الدولي الرابع للتخطيط الإقليمي',
  titleEn: '4th International Conference on Regional Planning',
  themeAr: 'رؤى تخطيطية لسورية الجديدة - تنمية وعدالة مكانية مستدامة',
  themeEn: 'Planning Visions for a New Syria: Sustainable Development and Spatial Justice',
  dateAr: 'الثلاثاء 3 نوفمبر 2026',
  dateEn: 'Tuesday, November 3, 2026',
  targetDate: '2026-11-03T09:00:00',
  locationAr: 'دمشق، سورية — قاعة رضا سعيد للمؤتمرات، رئاسة جامعة دمشق، دمشق برامكة',
  locationEn: 'Damascus, Syria — Reda Said Conference Hall, Presidency of Damascus University, Baramkeh',
  email: 'regionalplanningcon@gmail.com',
  registrationFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdUNuv9-3-PEoYzzJtM-QRBS6JhWBcNFX0ZJf-VGI9bWS1vfg/viewform',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.8058384551814!2d36.294160760497945!3d33.51151137347635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e716c0517a35%3A0x2d3f5a2ded089d3!2z2YLYp9i52Kkg2LHYttinINiz2LnZitiv!5e1!3m2!1sar!2sch!4v1791184009379!5m2!1sar!2sch',
};

// 1. قسم أهداف المؤتمر الرئيسية (Main Conference Objectives) - مع الشرح الموسّع
export const CONFERENCE_OBJECTIVES: Objective[] = [
  {
    id: 'obj-1',
    icon: 'Network',
    titleAr: 'التأكيد على التكامل بين الكفاءات العلمية والعملية وبين الأولويات التنموية ضمن أطرها المكانية المحددة',
    titleEn: 'Emphasizing the integration between scientific and practical competencies and development priorities within their defined spatial frameworks.',
    descAr: 'التأكيد على التكامل الوثيق بين الكفاءات العلمية والأكاديمية والخبرات الميدانية والعملية، وتوجيهها نحو الأولويات التنموية الوطنية ضمن أطر مكانية وإقليمية محددة وقابلة للتطبيق.',
    descEn: 'Emphasizing close integration between academic competencies and on-ground practical expertise, directed towards national development priorities within defined, actionable territorial frameworks.',
    keyPointsAr: [
      'ربط النتاج البحثي الأكاديمي بخطط الإعمار والتنمية الميدانية في المحافظات',
      'تجسير الفجوة بين المؤسسات التخطيطية والجامعات والمراكز البحثية والوزارات',
      'تأطير خطط التعافي وإعادة البناء في نماذج مكانية عملية قابلة للتنفيذ المستدام'
    ],
    keyPointsEn: [
      'Linking academic research directly with regional reconstruction and field development plans',
      'Bridging institutional gaps between planning commissions, universities, and ministries',
      'Framing post-crisis recovery blueprints into actionable, sustainable spatial implementations'
    ],
  },
  {
    id: 'obj-2',
    icon: 'Scale',
    titleAr: 'إظهار أهمية العدالة المكانية في الخطط التنموية',
    titleEn: 'Highlighting the importance of spatial equity in development plans.',
    descAr: 'إظهار الأهمية القصوى للعدالة المكانية في الخطط والسياسات التنموية، وضمان التوزيع المتكافئ والعادل للمشاريع والفرص والخدمات والموارد بين كافة الأقاليم والمحافظات السورية.',
    descEn: 'Highlighting the paramount importance of spatial equity in development policies, ensuring equitable and balanced allocation of investments, services, and opportunities across all Syrian territories.',
    keyPointsAr: [
      'معالجة الفوارق الإقليمية والتباينات التنموية بين المراكز الحضرية والمناطق الريفية',
      'تعزيز الإتاحة المتكافئة للخدمات الأساسية والبنى التحتية وفرص العمل في جميع المناطق',
      'تحقيق التوازن الجغرافي والاجتماعي في توزيع الاستثمارات والمشاريع الاستراتيجية'
    ],
    keyPointsEn: [
      'Addressing regional disparities and developmental imbalances between urban centers and rural territories',
      'Promoting equitable access to essential infrastructure, social services, and economic livelihoods',
      'Ensuring geographic and socioeconomic equilibrium in strategic capital investments'
    ],
  },
  {
    id: 'obj-3',
    icon: 'Leaf',
    titleAr: 'التأكيد على التنمية المستدامة وحماية الموارد كأسلوب في الممارسة اليومية لكل منطقة',
    titleEn: 'Emphasizing sustainable development and the protection of resources as a daily practice in every region.',
    descAr: 'التأكيد على مبادئ التنمية المستدامة وحماية الموارد الطبيعية والبيئية والمائية والتراثية، وترسيخها كأسلوب تفكير وممارسة يومية في إدارة كل منطقة وإقليم.',
    descEn: 'Emphasizing the principles of sustainable development and the conservation of natural, environmental, water, and cultural assets as an everyday operational practice across every region.',
    keyPointsAr: [
      'ترشيد استهلاك الموارد المائية وحماية الأراضي الزراعية الخصبة من الزحف العمراني',
      'اعتماد استراتيجيات التكيف مع التغير المناخي والتحول نحو الطاقة المتجددة والنظيفة',
      'ترسيخ الاقتصاد الدائري، الإدارة البيئية للنفايات، وإعادة تدوير مخلفات البناء محلياً'
    ],
    keyPointsEn: [
      'Safeguarding vital water resources and shielding arable agrarian basins from urban sprawl',
      'Adopting climate adaptation frameworks and clean renewable energy transition models',
      'Embedding circular economy principles, sustainable waste valorization, and debris recycling'
    ],
  },
  {
    id: 'obj-4',
    icon: 'ShieldCheck',
    titleAr: 'التأكيد على أن التنمية المكانية المتوازنة واللامركزية الإدارية، تدعم الوحدة الوطنية',
    titleEn: 'Affirming that balanced spatial development and administrative decentralization support national unity.',
    descAr: 'التأكيد على أن تحقيق التنمية المكانية المتوازنة وتفعيل اللامركزية الإدارية وتمكين الوحدات المحلية، يشكل ركيزة أساسية لتعزيز الوحدة الوطنية والتماسك المجتمعي والاستقرار الشامل.',
    descEn: 'Affirming that achieving balanced territorial growth and empowering local administrative decentralization serves as a foundational pillar for national unity, civic solidarity, and lasting stability.',
    keyPointsAr: [
      'تمكين مجالس الإدارة المحلية في قيادة التنمية الإقليمية وفق الخصائص والمزايا النسبية لكل منطقة',
      'تعزيز الاندماج والترابط الوطني عبر شبكات نقل وبنى تحتية تكاملية بين المحافظات',
      'بناء الثقة التنموية المشتركة وترسيخ الاستقرار السكاني وتكافؤ فرص الازدهار'
    ],
    keyPointsEn: [
      'Empowering local administrative councils to spearhead development tailored to regional territorial assets',
      'Strengthening national cohesion through integrative connectivity grids between governorates',
      'Fostering shared developmental prosperity to anchor civic stability and equitable growth'
    ],
  },
];

// 2. قسم المحاور العلمية الرئيسية (Main Scientific Themes)
export const SCIENTIFIC_THEMES: ScientificTheme[] = [
  {
    id: 'theme-1',
    trackNumber: 1,
    icon: 'Compass',
    titleAr: 'التخطيط الإقليمي والسياسات المكانية للتنمية المتوازنة',
    titleEn: 'Regional Planning and Spatial Policies for Balanced Development',
    descAr: 'دراسة استراتيجيات الإطار الوطني للتخطيط الإقليمي، منظومة المدن والتجمعات العمرانية، وتضييق الفجوات التنموية بين المحافظات.',
    descEn: 'Analyzing national spatial planning strategies, urban hierarchies, and bridging developmental gaps across Syrian regions.',
    topicsAr: [
      'استراتيجيات الإطار الوطني للتخطيط الإقليمي وتحديث المخططات',
      'منظومات التجمعات العمرانية والحد من ترييف المدن والهجرة',
      'السياسات المكانية للتنمية الريفية المتكاملة والمناطق الهامشية',
      'إدارة أراضي الدولة واستعمالات الأراضي الإقليمية الكبرى'
    ],
    topicsEn: [
      'National Regional Spatial Framework strategies and modernization',
      'Urban settlement systems, counteracting unplanned urbanization',
      'Spatial policies for integrated rural development and peripheral zones',
      'State land governance and major regional land-use zoning'
    ],
  },
  {
    id: 'theme-2',
    trackNumber: 2,
    icon: 'Building2',
    titleAr: 'الحوكمة المكانية وسياسات الإسكان والتنمية الحضرية',
    titleEn: 'Spatial Governance, Housing Policies, and Urban Development',
    descAr: 'تطوير أطر الحوكمة المحلية، سياسات السكن الميسر والمستدام، وإعادة إعمار وتنظيم المناطق المتضررة والمراكز الحضرية.',
    descEn: 'Developing local governance frameworks, affordable housing strategies, post-crisis urban regeneration, and informal settlements restructuring.',
    topicsAr: [
      'اللامركزية الإدارية وصلاحيات مجالس الإدارة المحلية في التخطيط',
      'سياسات الإسكان الاجتماعي والبدائل السكنية لمرحلة التعافي',
      'إعادة تأهيل وتجديد المراكز التاريخية والأنسجة العمرانية المتضررة',
      'التشريعات العقارية والتنظيمية وآليات الشراكة التنموية'
    ],
    topicsEn: [
      'Administrative decentralization and municipal planning jurisdictions',
      'Social and affordable housing schemes for the recovery phase',
      'Rehabilitation of historic city centers and damaged urban fabrics',
      'Real estate laws, planning codes, and development partnerships'
    ],
  },
  {
    id: 'theme-3',
    trackNumber: 3,
    icon: 'GitFork',
    titleAr: 'البنى التحتية والربط اللوجستي والتكامل الإقليمي',
    titleEn: 'Infrastructure, Logistics Connectivity, and Regional Integration',
    descAr: 'شبكات النقل متعدد الوسائط، الممرات التنموية، وتأهيل البنى التحتية الحيوية للربط الوطني والإقليمي.',
    descEn: 'Multimodal transportation corridors, vital infrastructure networks, logistics hubs, and national-to-transnational connectivity.',
    topicsAr: [
      'شبكات السكك الحديدية والطرق السريعة كمحركات للتنمية الإقليمية',
      'الموانئ البحرية والجافة والمراكز اللوجستية كبوابات تجارة',
      'منظومات المياه، الصرف، وشبكات الطاقة الكهربائية الإقليمية',
      'تأثير ممرات الترانزيت على التنمية المكانية للمحافظات'
    ],
    topicsEn: [
      'Railway and highway transit networks as regional growth engines',
      'Seaports, dry ports, and logistics hubs as regional trade gateways',
      'Inter-regional water management, wastewater, and energy grids',
      'Transit corridor impacts on regional spatial development'
    ],
  },
  {
    id: 'theme-4',
    trackNumber: 4,
    icon: 'TrendingUp',
    titleAr: 'الهوية المكانية، التخصص الوظيفي، والتنمية الاقتصادية الإقليمية',
    titleEn: 'Spatial Identity, Functional Specialization, and Regional Economic Development',
    descAr: 'استثمار المزايا النسبية لكل إقليم، التخصص الوظيفي، الحفاظ على التراث العمراني، وتنشيط القطاعات الإنتاجية.',
    descEn: 'Leveraging territorial comparative advantages, regional specialization, cultural heritage preservation, and industrial clustering.',
    topicsAr: [
      'المدن والمناطق الصناعية المتخصصة وسلاسل القيمة المحلية',
      'الهوية التراثية والمعمارية كرافعة للتنمية السياحية والاقتصادية',
      'التكتلات الزراعية - الصناعية (Agro-Industries) وتنمية الريف',
      'توزيع الأنشطة الاقتصادية وجذب الاستثمارات وفق الكفاءة المكانية'
    ],
    topicsEn: [
      'Specialized industrial zones and localized value chains',
      'Architectural and cultural heritage identity as an economic driver',
      'Agro-industrial clusters and modern rural economic revitalization',
      'Spatially balanced economic distribution and investment attraction'
    ],
  },
  {
    id: 'theme-5',
    trackNumber: 5,
    icon: 'Trees',
    titleAr: 'الاستدامة البيئية، التكيف المناخي، وإدارة المخاطر والكوارث',
    titleEn: 'Environmental Sustainability, Climate Adaptation, and Risk and Disaster Management',
    descAr: 'حماية الموارد البيئية، استراتيجيات مواجهة التغير المناخي والجفاف، والتخطيط الاستباقي للحد من مخاطر الكوارث والزلازل.',
    descEn: 'Environmental resource conservation, climate resilience against droughts, and spatial proactive planning for seismic and natural hazard mitigation.',
    topicsAr: [
      'التخطيط المكاني للحد من مخاطر الكوارث الطبيعية والزلازل',
      'مكافحة التصحر، حماية الغطاء النباتي والأحواض المائية',
      'الطاقات المتجددة (الشمسية والريحية) في التخطيط الإقليمي',
      'الإدارة البيئية المتكاملة للنفايات الصلبة والمخلفات العمرانية'
    ],
    topicsEn: [
      'Spatial planning frameworks for seismic resilience and disaster risk reduction',
      'Combating desertification, forest preservation, and watershed protection',
      'Renewable energy integration in regional spatial plans',
      'Integrated spatial waste management and demolition debris recycling'
    ],
  },
  {
    id: 'theme-6',
    trackNumber: 6,
    icon: 'Cpu',
    titleAr: 'التحول الرقمي والتقنيات الذكية في التخطيط والإدارة المكانية',
    titleEn: 'Digital Transformation and Smart Technologies in Spatial Planning and Management',
    descAr: 'توظيف نظم المعلومات الجغرافية (GIS)، الاستشعار عن بعد، الذكاء الاصطناعي، والتوائم الرقمية في صنع القرار المكاني.',
    descEn: 'Harnessing GIS, satellite remote sensing, AI spatial models, and Urban Digital Twins for data-driven territorial decision-making.',
    topicsAr: [
      'نظم المعلومات الجغرافية (GIS) والبيانات المكانية الضخمة (Big Spatial Data)',
      'تطبيقات الاستشعار عن بعد في مراقبة التوسع العمراني والتغيرات البيئية',
      'التوائم الرقمية للمدن (Digital Twins) ونمذجة سيناريوهات التخطيط',
      'المدن الذكية والمنصات التشاركية لإشراك المجتمع في التخطيط المكاني'
    ],
    topicsEn: [
      'Geographic Information Systems (GIS) and Big Spatial Data platforms',
      'Satellite Remote Sensing applications in monitoring urban growth and ecology',
      'Urban Digital Twins and predictive spatial planning simulation models',
      'Smart cities and civic participatory platforms in spatial governance'
    ],
  },
];

// 3. قسم شروط المشاركة (Participation Conditions) - حرفياً من البرومبت
export const PARTICIPATION_CONDITIONS: ParticipationRule[] = [
  {
    id: 'cond-1',
    titleAr: 'أن لا تكون المشاركة منشورة سابقاً، أو تم عرضها في مؤتمرات أو ندوات سابقة',
    titleEn: 'The submission must not have been previously published or presented at conferences or seminars.',
    descAr: 'أن لا تكون المشاركة منشورة سابقاً، أو تم عرضها في مؤتمرات أو ندوات سابقة.',
    descEn: 'The submission must not have been previously published or presented at conferences or seminars.',
  },
  {
    id: 'cond-2',
    titleAr: 'أن تتمتع المشاركة بالحداثة والأصالة، واستخدام أدوات بحثية حديثة',
    titleEn: 'The submission must demonstrate originality, innovation, and the use of modern research tools.',
    descAr: 'أن تتمتع المشاركة بالحداثة والأصالة، واستخدام أدوات بحثية حديثة.',
    descEn: 'The submission must demonstrate originality, innovation, and the use of modern research tools.',
  },
  {
    id: 'cond-3',
    titleAr: 'أن تنضوي تحت أحد المحاور بشكل واضح وصريح',
    titleEn: 'The submission must clearly fall under one of the conference themes.',
    descAr: 'أن تنضوي تحت أحد المحاور بشكل واضح وصريح.',
    descEn: 'The submission must clearly fall under one of the conference themes.',
  },
  {
    id: 'cond-4',
    titleAr: 'أن يتقيد المشارك بالتواريخ المحددة في الإعلان',
    titleEn: 'Participants must adhere to the deadlines specified in the announcement.',
    descAr: 'أن يتقيد المشارك بالتواريخ المحددة في الإعلان.',
    descEn: 'Participants must adhere to the deadlines specified in the announcement.',
  },
];

// 4. قسم الجهات المدعوة للمشاركة (Invited Entities) - بدقة كما وردت في الإعلان الرسمي
export const INVITED_ENTITIES: InvitedEntity[] = [
  {
    id: 'ent-1',
    category: 'ministries',
    nameAr: 'وزارة الأشغال العامة والإسكان',
    nameEn: 'Ministry of Public Works and Housing',
    descAr: 'الجهات الحكومية',
    descEn: 'Government Ministries',
    iconType: 'Building',
  },
  {
    id: 'ent-2',
    category: 'ministries',
    nameAr: 'وزارة الإدارة المحلية والبيئة',
    nameEn: 'Ministry of Local Administration and Environment',
    descAr: 'الجهات الحكومية',
    descEn: 'Government Ministries',
    iconType: 'Landmark',
  },
  {
    id: 'ent-3',
    category: 'ministries',
    nameAr: 'وزارة النقل',
    nameEn: 'Ministry of Transport',
    descAr: 'الجهات الحكومية',
    descEn: 'Government Ministries',
    iconType: 'Train',
  },
  {
    id: 'ent-4',
    category: 'ministries',
    nameAr: 'وزارة الطوارئ وإدارة الكوارث',
    nameEn: 'Ministry of Emergency and Disaster Management',
    descAr: 'الجهات الحكومية',
    descEn: 'Government Ministries',
    iconType: 'ShieldAlert',
  },
  {
    id: 'ent-5',
    category: 'ministries',
    nameAr: 'وزارة الطاقة',
    nameEn: 'Ministry of Energy',
    descAr: 'الجهات الحكومية',
    descEn: 'Government Ministries',
    iconType: 'Zap',
  },
  {
    id: 'ent-6',
    category: 'ministries',
    nameAr: 'وزارة الزراعة',
    nameEn: 'Ministry of Agriculture',
    descAr: 'الجهات الحكومية',
    descEn: 'Government Ministries',
    iconType: 'Wheat',
  },
  {
    id: 'ent-7',
    category: 'academic_private',
    nameAr: 'نقابة المهندسين',
    nameEn: 'Syrian Syndicate of Engineers',
    descAr: 'النقابات المهنية',
    descEn: 'Professional Syndicate',
    iconType: 'Award',
  },
  {
    id: 'ent-8',
    category: 'governorates',
    nameAr: 'محافظة دمشق',
    nameEn: 'Damascus Governorate',
    descAr: 'المحافظات',
    descEn: 'Governorates',
    iconType: 'MapPin',
  },
  {
    id: 'ent-9',
    category: 'governorates',
    nameAr: 'محافظة ريف دمشق',
    nameEn: 'Rural Damascus Governorate',
    descAr: 'المحافظات',
    descEn: 'Governorates',
    iconType: 'Map',
  },
  {
    id: 'ent-10',
    category: 'agencies',
    nameAr: 'هيئة التخطيط الإقليمي',
    nameEn: 'Regional Planning Commission',
    descAr: 'الهيئات التخطيطية',
    descEn: 'Planning Commissions',
    iconType: 'Compass',
  },
  {
    id: 'ent-11',
    category: 'agencies',
    nameAr: 'هيئة المنافذ الحدودية',
    nameEn: 'Border Crossings Commission',
    descAr: 'الهيئات العامة',
    descEn: 'Public Commissions',
    iconType: 'ShieldCheck',
  },
  {
    id: 'ent-12',
    category: 'agencies',
    nameAr: 'هيئة التخطيط والإحصاء',
    nameEn: 'Planning and Statistics Commission',
    descAr: 'الهيئات التخطيطية والإحصائية',
    descEn: 'Planning & Statistical Commissions',
    iconType: 'BarChart3',
  },
  {
    id: 'ent-13',
    category: 'agencies',
    nameAr: 'الهيئة العامة للاستشعار عن بعد',
    nameEn: 'General Organization of Remote Sensing (GORS)',
    descAr: 'هيئات الاستشعار والتقانات الحديثة',
    descEn: 'Remote Sensing & Spatial Tech',
    iconType: 'Satellite',
  },
  {
    id: 'ent-14',
    category: 'academic_private',
    nameAr: 'جامعة دمشق (كليات - معاهد عليا)',
    nameEn: 'Damascus University (Faculties & Higher Institutes)',
    descAr: 'الصروح الأكاديمية والتعليم العالي',
    descEn: 'Academic Institutions & Higher Institutes',
    iconType: 'GraduationCap',
  },
  {
    id: 'ent-15',
    category: 'academic_private',
    nameAr: 'جامعات عربية وأوروبية',
    nameEn: 'Arab and European Universities',
    descAr: 'الجامعات الإقليمية والدولية',
    descEn: 'Regional & International Universities',
    iconType: 'Globe2',
  },
  {
    id: 'ent-16',
    category: 'academic_private',
    nameAr: 'الشركات والمؤسسات الخاصة العاملة والمهتمة بإعادة الإعمار',
    nameEn: 'Private Companies & Organizations Engaged and Interested in Reconstruction',
    descAr: 'القطاع الخاص ومؤسسات التعافي والإعمار',
    descEn: 'Private Sector & Reconstruction Firms',
    iconType: 'Briefcase',
  },
];
