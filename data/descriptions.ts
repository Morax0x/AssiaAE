// data/descriptions.ts

export const SERVICES_DESCRIPTIONS: Record<string, { 
  titleAr: string; titleEn: string; 
  authorityAr: string; authorityEn: string; 
  ar: string; en: string 
}> = {
  // --- Companies (الشركات) ---
  s1: { 
    titleAr: 'إصدار الرخص التجارية', titleEn: 'Mainland License', 
    authorityAr: 'دائرة التنمية الاقتصادية', authorityEn: 'DED', 
    ar: 'تأسيس الشركات وإصدار الرخص الجديدة في البر الرئيسي لكافة الأنشطة التجارية والمهنية والصناعية مع تخليص كافة الموافقات الحكومية المطلوبة', 
    en: 'Issuance of new trade licenses for all commercial professional and industrial activities in the Mainland including all required government approvals' 
  },
  s2: { 
    titleAr: 'حجز الاسم التجاري', titleEn: 'Trade Name Reservation', 
    authorityAr: 'دائرة التنمية الاقتصادية', authorityEn: 'DED', 
    ar: 'حجز وتسجيل اسم تجاري مميز للشركة الجديدة لضمان الهوية التجارية والحماية القانونية قبل بدء إجراءات الترخيص', 
    en: 'Reserving and registering a unique trade name for new businesses to ensure brand identity and legal protection before licensing procedures' 
  },
  s3: { 
    titleAr: 'الموافقة المبدئية', titleEn: 'Initial Approval', 
    authorityAr: 'دائرة التنمية الاقتصادية', authorityEn: 'DED', 
    ar: 'استخراج الموافقة المبدئية من الجهات المعنية للبدء بإجراءات التأسيس وتجهيز الموقع ومخاطبة الدوائر الحكومية الأخرى', 
    en: 'Obtaining initial approval from relevant authorities to start business setup procedures prepare the location and address other government departments' 
  },
  s4: { 
    titleAr: 'تجديد الرخص', titleEn: 'License Renewal', 
    authorityAr: 'دائرة التنمية الاقتصادية', authorityEn: 'DED', 
    ar: 'تجديد الرخصة التجارية وتوثيق عقد الإيجار وتحديث بيانات الشركة لضمان استمرارية العمل دون توقف أو غرامات', 
    en: 'Renewing trade license and attesting tenancy contract and updating company details to ensure business continuity without interruption or fines' 
  },
  s5: { 
    titleAr: 'تعديل الرخصة', titleEn: 'License Amendment', 
    authorityAr: 'دائرة التنمية الاقتصادية', authorityEn: 'DED', 
    ar: 'تعديل بيانات الرخصة مثل تغيير النشاط أو المدير أو الموقع أو إضافة وحذف الأنشطة التجارية حسب حاجة العمل', 
    en: 'Amending license details such as changing activity manager or location or adding and removing commercial activities as per business needs' 
  },
  s6: { 
    titleAr: 'إضافة/سحب شريك', titleEn: 'Partner Services', 
    authorityAr: 'دائرة التنمية الاقتصادية', authorityEn: 'DED', 
    ar: 'إجراءات إضافة شريك جديد أو انسحاب شريك حالي وتعديل عقد التأسيس بما يتوافق مع التغييرات الجديدة في هيكل الملكية', 
    en: 'Procedures for adding a new partner or removing an existing one and amending the Memorandum of Association to reflect changes in ownership structure' 
  },
  s7: { 
    titleAr: 'تغيير الاسم التجاري', titleEn: 'Change Trade Name', 
    authorityAr: 'دائرة التنمية الاقتصادية', authorityEn: 'DED', 
    ar: 'تغيير الاسم التجاري المسجل للمنشأة في الرخصة والسجلات الرسمية مع نشر الإعلان القانوني المطلوب', 
    en: 'Changing the registered trade name of the establishment in the license and official records along with publishing the required legal advertisement' 
  },
  s8: { 
    titleAr: 'إلغاء الرخصة', titleEn: 'License Cancellation', 
    authorityAr: 'دائرة التنمية الاقتصادية', authorityEn: 'DED', 
    ar: 'إلغاء الرخصة التجارية وتصفية الشركة نهائياً وإغلاق ملفات العمالة والجوازات للحصول على براءة الذمة', 
    en: 'Final cancellation of trade license and company liquidation and closing labor and immigration files to obtain clearance certificate' 
  },
  s9: { 
    titleAr: 'تجميد الرخصة', titleEn: 'License Freezing', 
    authorityAr: 'دائرة التنمية الاقتصادية', authorityEn: 'DED', 
    ar: 'إيقاف الرخصة مؤقتاً لتجنب الغرامات أثناء التوقف عن العمل لفترة محددة وحفظ حقوق الملكية لحين استئناف النشاط', 
    en: 'Temporarily freezing the license to avoid fines during inactivity for a specific period and preserving ownership rights until business resumption' 
  },
  s10: { 
    titleAr: 'تصريح تجاري', titleEn: 'Commercial Permit', 
    authorityAr: 'دائرة التنمية الاقتصادية', authorityEn: 'DED', 
    ar: 'إصدار تصاريح العروض الترويجية والإعلانات والتنزيلات والأكشاك المؤقتة لزيادة المبيعات والتسويق القانوني', 
    en: 'Issuing permits for promotional offers advertisements sales and temporary kiosks to increase sales and ensure legal marketing' 
  },
  s11: { 
    titleAr: 'وكيل خدمات', titleEn: 'Local Service Agent', 
    authorityAr: 'دائرة التنمية الاقتصادية', authorityEn: 'DED', 
    ar: 'توفير وكيل خدمات مواطن للرخص المهنية لتمثيل الشركة أمام الدوائر الحكومية وتسهيل الإجراءات دون التدخل في الإدارة', 
    en: 'Providing a UAE National Local Service Agent for professional licenses to represent the company before government departments and facilitate procedures without management interference' 
  },

  // --- Golden & Green Visas (الإقامات المميزة) ---
  s12: { 
    titleAr: 'إقامة ذهبية (مستثمر)', titleEn: 'Golden Visa (Investor)', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'إقامة 10 سنوات للمستثمرين العقاريين وأصحاب الودائع البنكية تمنح الاستقرار طويل الأمد دون الحاجة لكفيل', 
    en: '10-year residency for real estate and bank deposit investors granting long-term stability without the need for a sponsor' 
  },
  s13: { 
    titleAr: 'إقامة ذهبية (موهبة)', titleEn: 'Golden Visa (Talent)', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'إقامة 10 سنوات للأطباء والمهندسين والمبدعين وأصحاب المواهب الاستثنائية والعلماء لتعزيز الاستقرار المهني', 
    en: '10-year residency for doctors engineers creatives exceptional talents and scientists to enhance professional stability' 
  },
  s14: { 
    titleAr: 'الإقامة الخضراء', titleEn: 'Green Visa', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'إقامة 5 سنوات للعمل الحر والموظفين المهرة وأصحاب المشاريع الخاصة تتيح العمل والاستقرار بمرونة عالية', 
    en: '5-year residency for freelancers skilled employees and entrepreneurs allowing flexible work and stability' 
  },

  // --- Residency (الإقامات) ---
  s15: { 
    titleAr: 'إقامة شريك', titleEn: 'Partner Visa', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'إصدار وتجديد إقامة مستثمر أو شريك لمدة 3 سنوات قابلة للتجديد لتسهيل إدارة الأعمال والاستثمار', 
    en: 'Issuing and renewing 3-year investor or partner visa renewable to facilitate business management and investment' 
  },
  s16: { 
    titleAr: 'إذن دخول', titleEn: 'Entry Permit', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'استخراج تأشيرة دخول للعمل أو الزيارة للموظفين الجدد أو الزوار لبدء إجراءات الإقامة داخل الدولة', 
    en: 'Issuing entry permit for employment or visit for new employees or visitors to start residency procedures inside the country' 
  },
  s17: { 
    titleAr: 'كفالة الأسرة', titleEn: 'Family Visa', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'إصدار وتجديد إقامة الزوجة والأبناء وفتح ملف الكفالة وتخليص كافة الإجراءات الطبية والهوية', 
    en: 'Issuing and renewing residency for wife and children opening sponsorship file and clearing all medical and ID procedures' 
  },
  s18: { 
    titleAr: 'كفالة الوالدين', titleEn: 'Parents Visa', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'إجراءات كفالة الوالدين للإقامة في الدولة شاملة الضمان المالي والتأمين الطبي وإثبات الإعالة', 
    en: 'Procedures for sponsoring parents residency in the country including financial guarantee medical insurance and proof of dependency' 
  },
  s19: { 
    titleAr: 'إقامة مولود', titleEn: 'Newborn Visa', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'تثبيت إقامة المواليد الجدد واستخراج الهوية وجواز السفر لضمان قانونية وضع المولود وتجنب الغرامات', 
    en: 'Stamping residency and issuing ID and passport for newborns to ensure legal status and avoid fines' 
  },
  s20: { 
    titleAr: 'تثبيت الإقامة', titleEn: 'Visa Stamping', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'طباعة وتثبيت ملصق الإقامة على الجواز بعد اجتياز الفحص الطبي واستكمال إجراءات الهوية', 
    en: 'Printing and stamping residency visa sticker on passport after passing medical test and completing ID procedures' 
  },
  s21: { 
    titleAr: 'تجديد الإقامة', titleEn: 'Visa Renewal', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'تجديد الإقامات المنتهية للموظفين والأسر والشركاء لضمان استمرارية الإقامة القانونية في الدولة', 
    en: 'Renewing expired residencies for employees families and partners to ensure continuous legal stay in the country' 
  },
  s22: { 
    titleAr: 'إلغاء الإقامة', titleEn: 'Visa Cancellation', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'إلغاء الإقامة بغرض السفر النهائي أو تغيير الكفيل وإنهاء العلاقة التعاقدية بشكل قانوني', 
    en: 'Cancelling visa for final exit or sponsorship change and legally terminating the contractual relationship' 
  },
  s23: { 
    titleAr: 'دفع الغرامات', titleEn: 'Fines Settlement', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'تسوية ودفع غرامات التأخير وتعديل الوضع للمخالفين لتصحيح وضعهم القانوني وتجنب المساءلة', 
    en: 'Settling and paying overstay fines and status regularization for violators to correct their legal status and avoid liability' 
  },
  s24: { 
    titleAr: 'نقل الإقامة', titleEn: 'Visa Transfer', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'نقل بيانات الإقامة من جواز سفر منتهي أو مفقود إلى جواز سفر جديد لضمان سهولة التنقل والسفر', 
    en: 'Transferring visa details from an expired or lost passport to a new one to ensure ease of movement and travel' 
  },

  // --- Labour (العمل والعمال) ---
  s25: { 
    titleAr: 'تصريح عمل جديد', titleEn: 'New Work Permit', 
    authorityAr: 'الموارد البشرية', authorityEn: 'MOHRE', 
    ar: 'استخراج تصريح عمل لموظف جديد من داخل أو خارج الدولة لاستكمال إجراءات التوظيف بشكل قانوني', 
    en: 'Issuing a new work permit for an employee from inside or outside the country to complete employment procedures legally' 
  },
  s26: { 
    titleAr: 'عرض عمل', titleEn: 'Job Offer', 
    authorityAr: 'الموارد البشرية', authorityEn: 'MOHRE', 
    ar: 'طباعة عرض العمل الإلكتروني وإرساله للموظف للتوقيع عليه كخطوة أولى في إجراءات التوظيف', 
    en: 'Typing electronic job offer letter and sending it to the employee for signature as the first step in employment procedures' 
  },
  s27: { 
    titleAr: 'عقد عمل', titleEn: 'Labour Contract', 
    authorityAr: 'الموارد البشرية', authorityEn: 'MOHRE', 
    ar: 'توثيق واعتماد عقود العمل الرسمية بين الطرفين لحفظ الحقوق والواجبات وفق قانون العمل الإماراتي', 
    en: 'Attesting and approving official labour contracts between parties to protect rights and duties under UAE labour law' 
  },
  s28: { 
    titleAr: 'تجديد بطاقة العمل', titleEn: 'Labour Card Renewal', 
    authorityAr: 'الموارد البشرية', authorityEn: 'MOHRE', 
    ar: 'تجديد تصريح العمل وبطاقة العمل للموظفين الحاليين لضمان استمرارية عملهم بشكل قانوني', 
    en: 'Renewing work permit and labour card for existing employees to ensure their continued legal employment' 
  },
  s29: { 
    titleAr: 'بلاغ هروب', titleEn: 'Absconding Report', 
    authorityAr: 'الموارد البشرية', authorityEn: 'MOHRE', 
    ar: 'تسجيل بلاغ انقطاع عن العمل ضد الموظف المنقطع لإخلاء مسؤولية الشركة وتجنب الغرامات', 
    en: 'Registering an absconding report against an absent employee to clear company liability and avoid fines' 
  },
  s30: { 
    titleAr: 'طلب كوتا', titleEn: 'Quota Request', 
    authorityAr: 'الموارد البشرية', authorityEn: 'MOHRE', 
    ar: 'زيادة عدد تصاريح العمل المسموحة للمنشأة لتمكينها من توظيف عمالة جديدة وتوسيع النشاط', 
    en: 'Increasing the company quota for work permits to enable hiring new employees and expanding business activity' 
  },
  s31: { 
    titleAr: 'نظام حماية الأجور', titleEn: 'WPS Registration', 
    authorityAr: 'الموارد البشرية', authorityEn: 'MOHRE', 
    ar: 'التسجيل في نظام حماية الأجور لتحويل رواتب الموظفين عبر البنوك والصرافة وضمان الالتزام بالقانون', 
    en: 'Registering in Wages Protection System to transfer employee salaries via banks and exchanges and ensure legal compliance' 
  },
  s32: { 
    titleAr: 'خدمات تدبير', titleEn: 'Tadbeer Services', 
    authorityAr: 'تدبير', authorityEn: 'Tadbeer', 
    ar: 'استقدام وكفالة العمالة المساعدة كالخدم والسائقين والمربيات وإنهاء كافة إجراءاتهم القانونية', 
    en: 'Recruiting and sponsoring domestic workers such as maids drivers and nannies and completing all their legal procedures' 
  },

  // --- ID & Medical (الهوية والصحة) ---
  s33: { 
    titleAr: 'هوية جديدة', titleEn: 'New Emirates ID', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'إصدار بطاقة الهوية الإماراتية لأول مرة للمقيمين والمواطنين مع حجز موعد التبصيم', 
    en: 'Issuing new Emirates ID card for residents and citizens for the first time including fingerprint appointment booking' 
  },
  s34: { 
    titleAr: 'تجديد الهوية', titleEn: 'Renew Emirates ID', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'تجديد بطاقة الهوية المنتهية أو استبدال البطاقة التالفة أو المفقودة لضمان سريان مفعولها', 
    en: 'Renewing expired Emirates ID card or replacing damaged or lost cards to ensure validity' 
  },
  s35: { 
    titleAr: 'فحص طبي', titleEn: 'Medical Test', 
    authorityAr: 'هيئة الصحة', authorityEn: 'DHA/MOHAP', 
    ar: 'طلب فحص اللياقة الطبية للإقامة وحجز المواعيد في المراكز المعتمدة لاستكمال إجراءات الفيزا', 
    en: 'Medical fitness test application for visa and appointment booking at authorized centers to complete visa procedures' 
  },
  s36: { 
    titleAr: 'صحة مهنية', titleEn: 'Occupational Health', 
    authorityAr: 'البلدية', authorityEn: 'Municipality', 
    ar: 'استخراج بطاقة صحية للعاملين في مجالات الأغذية والصالونات ومراكز التجميل لضمان السلامة العامة', 
    en: 'Issuing health card for workers in food salons and beauty centers to ensure public safety' 
  },
  s37: { 
    titleAr: 'تأمين صحي', titleEn: 'Health Insurance', 
    authorityAr: 'شركات التأمين', authorityEn: 'Insurance', 
    ar: 'إصدار وثائق التأمين الصحي الإلزامي للإقامة وتجديدها لتغطية الاحتياجات الصحية للموظفين والأسر', 
    en: 'Issuing mandatory health insurance policies for residency and renewal to cover health needs of employees and families' 
  },

  // --- Legal (قانونية) ---
  s38: { 
    titleAr: 'تصديق عقود', titleEn: 'Contract Attestation', 
    authorityAr: 'كاتب العدل', authorityEn: 'Notary Public', 
    ar: 'توثيق العقود والاتفاقيات التجارية وملاحق الشركات لضمان قانونيتها وقوتها التنفيذية', 
    en: 'Notarizing commercial contracts agreements and company addendums to ensure their legality and enforceability' 
  },
  s39: { 
    titleAr: 'وكالة', titleEn: 'Power of Attorney', 
    authorityAr: 'كاتب العدل', authorityEn: 'Notary Public', 
    ar: 'عمل وتصديق الوكالات العامة والخاصة للأفراد والشركات لتمثيلهم قانونياً في المعاملات', 
    en: 'Drafting and notarizing General and Special Power of Attorney for individuals and companies for legal representation' 
  },
  s40: { 
    titleAr: 'ترجمة قانونية', titleEn: 'Legal Translation', 
    authorityAr: 'مكاتب الترجمة', authorityEn: 'Translation', 
    ar: 'ترجمة معتمدة للمستندات الرسمية والعقود والشهادات لتقديمها للجهات الحكومية والمحاكم', 
    en: 'Certified translation for official documents contracts and certificates for submission to government authorities and courts' 
  },
  s41: { 
    titleAr: 'تصديق الخارجية', titleEn: 'MOFA Attestation', 
    authorityAr: 'الخارجية', authorityEn: 'MOFA', 
    ar: 'تصديق الشهادات والوثائق الرسمية الصادرة من داخل أو خارج الدولة لتوثيقها واستخدامها رسمياً', 
    en: 'Attesting certificates and official documents issued locally or abroad for authentication and official use' 
  },
  s42: { 
    titleAr: 'معادلة الشهادات', titleEn: 'Degree Equivalency', 
    authorityAr: 'التربية والتعليم', authorityEn: 'MOE', 
    ar: 'معادلة الشهادات الدراسية والجامعية الصادرة من الخارج لتصبح معتمدة ومعترف بها داخل الدولة', 
    en: 'Equivalency of foreign academic and school degrees to be recognized and accredited within the country' 
  },

  // --- Municipality (البلدية) ---
  s43: { 
    titleAr: 'توثيق إيجاري', titleEn: 'Tenancy Contract', 
    authorityAr: 'البلدية', authorityEn: 'Municipality', 
    ar: 'تسجيل وتصديق عقود الإيجار السكنية والتجارية في نظام البلدية لحفظ حقوق المؤجر والمستأجر', 
    en: 'Registering and attesting residential and commercial tenancy contracts in Municipality system to protect rights' 
  },
  s44: { 
    titleAr: 'خارطة موقع', titleEn: 'Site Plan', 
    authorityAr: 'البلدية', authorityEn: 'Municipality', 
    ar: 'إصدار مخطط الأرض الرسمي وتحديد الحدود والمساحات للعقارات والأراضي السكنية والتجارية', 
    en: 'Issuing official land site plan and defining boundaries and areas for residential and commercial properties' 
  },
  s45: { 
    titleAr: 'تصريح لوحة', titleEn: 'Signage Permit', 
    authorityAr: 'البلدية', authorityEn: 'Municipality', 
    ar: 'إصدار وتجديد تصريح للوحات الإعلانية الخارجية للمحلات التجارية والمكاتب وفق اشتراطات البلدية', 
    en: 'Issuing and renewing permits for external advertising signage for shops and offices as per municipality regulations' 
  },
  s46: { 
    titleAr: 'شهادة دفاع مدني', titleEn: 'Civil Defense Cert', 
    authorityAr: 'الدفاع المدني', authorityEn: 'Civil Defense', 
    ar: 'شهادة استيفاء شروط السلامة والوقاية من الحريق للمنشآت التجارية والمباني السكنية', 
    en: 'Safety and fire prevention compliance certificate for commercial establishments and residential buildings' 
  },

  // --- Traffic (المرور) ---
  s47: { 
    titleAr: 'تجديد ملكية', titleEn: 'Vehicle Renewal', 
    authorityAr: 'المرور', authorityEn: 'Traffic Dept', 
    ar: 'تجديد ملكية المركبة وتأمينها وفحصها فنياً لضمان صلاحيتها للسير على الطرقات', 
    en: 'Vehicle registration renewal insurance and technical inspection to ensure roadworthiness' 
  },
  s48: { 
    titleAr: 'نقل ملكية', titleEn: 'Vehicle Transfer', 
    authorityAr: 'المرور', authorityEn: 'Traffic Dept', 
    ar: 'نقل ملكية السيارة من البائع للمشتري وتحديث بيانات المركبة وإصدار ملكية جديدة', 
    en: 'Transferring vehicle ownership from seller to buyer updating vehicle details and issuing new registration' 
  },
  s49: { 
    titleAr: 'حسن سيرة وسلوك', titleEn: 'Police Clearance', 
    authorityAr: 'الشرطة', authorityEn: 'Police', 
    ar: 'استخراج شهادة بحث الحالة الجنائية لتقديمها لجهات العمل أو الهجرة أو الدراسة', 
    en: 'Obtaining Police Clearance Certificate for employment immigration or study purposes' 
  },
  s50: { 
    titleAr: 'فتح ملف مروري', titleEn: 'Open Traffic File', 
    authorityAr: 'المرور', authorityEn: 'Traffic Dept', 
    ar: 'فتح ملف مروري جديد للأفراد للحصول على رخصة قيادة أو للشركات لتسجيل المركبات', 
    en: 'Opening a new traffic file for individuals to get driving license or for companies to register vehicles' 
  },

  // --- Finance (المالية) ---
  s51: { 
    titleAr: 'ضريبة الشركات', titleEn: 'Corporate Tax', 
    authorityAr: 'الضرائب', authorityEn: 'FTA', 
    ar: 'التسجيل في ضريبة الشركات والحصول على الرقم الضريبي للامتثال للقوانين المالية الجديدة', 
    en: 'Corporate tax registration and obtaining Tax Registration Number to comply with new financial laws' 
  },
  s52: { 
    titleAr: 'ضريبة القيمة المضافة', titleEn: 'VAT Registration', 
    authorityAr: 'الضرائب', authorityEn: 'FTA', 
    ar: 'التسجيل في ضريبة القيمة المضافة وتقديم الإقرارات الضريبية الدورية بدقة لتجنب الغرامات', 
    en: 'VAT registration and accurate periodic return filing to avoid fines' 
  },
  s53: { 
    titleAr: 'فتح حساب بنكي', titleEn: 'Bank Account', 
    authorityAr: 'البنوك', authorityEn: 'Banks', 
    ar: 'المساعدة في فتح حسابات بنكية للشركات والأفراد وتجهيز الملفات المطلوبة وحجز المواعيد', 
    en: 'Assistance with opening bank accounts for companies and individuals preparing required files and booking appointments' 
  },
  s54: { 
    titleAr: 'عضوية الغرفة', titleEn: 'Chamber Membership', 
    authorityAr: 'غرفة التجارة', authorityEn: 'Chamber', 
    ar: 'تسجيل وتجديد عضوية غرفة التجارة والصناعة اللازمة لممارسة الأنشطة التجارية وتصديق الشهادات', 
    en: 'Registering and renewing Chamber of Commerce membership required for business activities and certificate attestation' 
  },

  // --- General (خدمات عامة) ---
  s55: { 
    titleAr: 'كهرباء وماء', titleEn: 'Utilities', 
    authorityAr: 'الكهرباء والماء', authorityEn: 'FEWA/DEWA', 
    ar: 'توصيل خدمات الكهرباء والماء للمنازل والمكاتب ودفع التأمين وتفعيل الحسابات', 
    en: 'Connecting electricity and water services for homes and offices paying deposits and activating accounts' 
  },
  s56: { 
    titleAr: 'براءة ذمة', titleEn: 'Clearance Cert', 
    authorityAr: 'الكهرباء والماء', authorityEn: 'FEWA/DEWA', 
    ar: 'استخراج شهادة براءة ذمة للكهرباء والماء عند إخلاء العقار واسترداد مبلغ التأمين', 
    en: 'Obtaining electricity and water clearance certificate upon vacating property and refunding deposit' 
  },
  s57: { 
    titleAr: 'طباعة وتصوير', titleEn: 'Typing Services', 
    authorityAr: 'مراكز الطباعة', authorityEn: 'Typing Center', 
    ar: 'خدمات الطباعة وتعبئة النماذج الحكومية وتصوير المستندات والمسح الضوئي والتقديم الإلكتروني', 
    en: 'Typing services government form filling photocopying scanning and online application submission' 
  },
  s58: { 
    titleAr: 'خدمات VIP', titleEn: 'VIP Services', 
    authorityAr: 'عام', authorityEn: 'General', 
    ar: 'تخليص سريع ومميز للمعاملات الحكومية لتوفير الوقت والجهد مع خدمة استلام وتسليم', 
    en: 'Fast and premium government transaction processing to save time and effort with pickup and delivery service' 
  },
  s59: { 
    titleAr: 'خدمات المندوب', titleEn: 'PRO Services', 
    authorityAr: 'عام', authorityEn: 'General', 
    ar: 'تخليص شامل لكافة معاملات الشركات والموظفين من خلال مندوبين محترفين بعقود سنوية أو شهرية', 
    en: 'Comprehensive clearing of all company and employee transactions through professional PROs via annual or monthly contracts' 
  },

  // --- New Services (60-80) ---
  s60: { 
    titleAr: 'رخصة تاجر', titleEn: 'E-Trader License', 
    authorityAr: 'الاقتصادية', authorityEn: 'DED', 
    ar: 'رخصة مخصصة للمواطنين والمقيمين لممارسة الأعمال التجارية عبر وسائل التواصل الاجتماعي من المنزل دون الحاجة لمقر', 
    en: 'License for nationals and residents to conduct business via social media from home without need for office' 
  },
  s61: { 
    titleAr: 'تقييم عقاري', titleEn: 'Property Valuation', 
    authorityAr: 'الأراضي والأملاك', authorityEn: 'Land Dept', 
    ar: 'إصدار شهادة تقييم عقاري معتمدة للعقارات السكنية والتجارية لغايات البيع أو الإقامة الذهبية', 
    en: 'Issuing certified real estate valuation certificate for residential and commercial properties for sale or Golden Visa' 
  },
  s62: { 
    titleAr: 'إلغاء وكالة', titleEn: 'Revoke POA', 
    authorityAr: 'كاتب العدل', authorityEn: 'Notary Public', 
    ar: 'إجراءات إلغاء وكالة عامة أو خاصة مسجلة مسبقاً وإخطار الوكيل بالعزل بشكل قانوني', 
    en: 'Procedures to revoke a previously registered POA and legally notify the agent of dismissal' 
  },
  s63: { 
    titleAr: 'استرداد ضريبة', titleEn: 'VAT Refund', 
    authorityAr: 'الضرائب', authorityEn: 'FTA', 
    ar: 'تقديم طلبات استرداد ضريبة القيمة المضافة للسياح والزوار والأعمال التجارية المؤهلة وبناء المساكن', 
    en: 'Submitting VAT refund requests for tourists visitors eligible businesses and home construction' 
  },
  s64: { 
    titleAr: 'تصريح عمل حدث', titleEn: 'Juvenile Permit', 
    authorityAr: 'الموارد البشرية', authorityEn: 'MOHRE', 
    ar: 'استخراج تصريح عمل مؤقت للأحداث بين 15 و 18 سنة للتدريب أو العمل خلال الإجازات', 
    en: 'Issuing temporary work permit for juveniles aged 15-18 for training or work during holidays' 
  },
  s65: { 
    titleAr: 'تصريح مركبة أغذية', titleEn: 'Food Truck Permit', 
    authorityAr: 'البلدية', authorityEn: 'Municipality', 
    ar: 'إصدار تصريح واعتماد لسيارات نقل المواد الغذائية لضمان استيفاء شروط الصحة والسلامة الغذائية', 
    en: 'Issuing permit and approval for food transport vehicles to ensure health and food safety compliance' 
  },
  s66: { 
    titleAr: 'رخصة فعاليات', titleEn: 'Event License', 
    authorityAr: 'السياحة', authorityEn: 'Tourism', 
    ar: 'ترخيص لتنظيم الفعاليات والمؤتمرات والمعارض والحفلات مع كافة الموافقات الأمنية المطلوبة', 
    en: 'License for organizing events conferences exhibitions and parties with all required security approvals' 
  },
  s67: { 
    titleAr: 'تسجيل قضية', titleEn: 'Case Registration', 
    authorityAr: 'المحاكم', authorityEn: 'Courts', 
    ar: 'تسجيل ورفع الدعاوى القضائية العمالية والتجارية ومتابعة الإجراءات القانونية في المحاكم المختصة', 
    en: 'Registering and filing labor and commercial lawsuits and following up legal procedures in competent courts' 
  },
  s68: { 
    titleAr: 'تصديق فواتير', titleEn: 'Invoice Attestation', 
    authorityAr: 'الخارجية', authorityEn: 'MOFA', 
    ar: 'تصديق الفواتير التجارية وقوائم التعبئة لأغراض التصدير والاستيراد والتخليص الجمركي', 
    en: 'Attesting commercial invoices and packing lists for export import and customs clearance purposes' 
  },
  s69: { 
    titleAr: 'تحديث الهوية', titleEn: 'Update ID', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'تحديث البيانات الشخصية في بطاقة الهوية مثل تغيير رقم الهاتف أو الحالة الاجتماعية أو المؤهل', 
    en: 'Updating personal details in Emirates ID such as phone number marital status or qualification' 
  },
  s70: { 
    titleAr: 'شهادة فقدان', titleEn: 'Lost Item Cert', 
    authorityAr: 'الشرطة', authorityEn: 'Police', 
    ar: 'استخراج شهادة فقدان رسمية للمستندات الضائعة كالجواز أو الهوية لاستكمال إجراءات البدل فاقد', 
    en: 'Obtaining official lost item certificate for lost documents like passport or ID to process replacement' 
  },
  s71: { 
    titleAr: 'علامة تجارية', titleEn: 'Trademark', 
    authorityAr: 'الاقتصاد', authorityEn: 'Economy', 
    ar: 'تسجيل العلامة التجارية والشعار لحماية حقوق الملكية الفكرية ومنع التعدي على هوية الشركة', 
    en: 'Registering trademark and logo to protect intellectual property rights and prevent infringement' 
  },
  s72: { 
    titleAr: 'إقرار مديونية', titleEn: 'Debt Ack', 
    authorityAr: 'كاتب العدل', authorityEn: 'Notary Public', 
    ar: 'توثيق إقرار بالدين أو تعهد بالسداد بين الأطراف لضمان الحقوق المالية بشكل قانوني', 
    en: 'Notarizing debt acknowledgement or payment undertaking between parties to legally secure financial rights' 
  },
  s73: { 
    titleAr: 'تصريح مواقف', titleEn: 'Parking Permit', 
    authorityAr: 'البلدية', authorityEn: 'Municipality', 
    ar: 'حجز مواقف خاصة للمنشآت التجارية أو الاشتراك في بطاقات المواقف العامة المدفوعة', 
    en: 'Reserving private parking for commercial establishments or subscribing to public paid parking cards' 
  },
  s74: { 
    titleAr: 'عمل حر', titleEn: 'Freelance Permit', 
    authorityAr: 'الموارد البشرية', authorityEn: 'MOHRE', 
    ar: 'استخراج تصريح عمل حر للأفراد المستقلين لممارسة نشاطهم المهني بشكل قانوني دون كفيل', 
    en: 'Issuing freelance permit for independent individuals to practice their profession legally without sponsor' 
  },
  s75: { 
    titleAr: 'تأشيرة زيارة وتمديد', titleEn: 'Tourist Visa & Extension', 
    authorityAr: 'الهوية والجنسية', authorityEn: 'ICP', 
    ar: 'إصدار تأشيرات سياحية لجميع الجنسيات 30 أو 60 يوم وتمديد التأشيرات الحالية من داخل الدولة', 
    en: 'Issuing tourist visas for all nationalities 30 or 60 days and extending current visas from inside country' 
  },
  s76: { 
    titleAr: 'ترخيص طبي', titleEn: 'Medical License', 
    authorityAr: 'الصحة', authorityEn: 'Health', 
    ar: 'إجراءات ترخيص مزاولة المهنة للأطباء والممرضين والفنيين للعمل في القطاع الطبي', 
    en: 'Professional license procedures for doctors nurses and technicians to work in medical sector' 
  },
  s77: { 
    titleAr: 'رخصة دولية', titleEn: 'Intl License', 
    authorityAr: 'المرور', authorityEn: 'Traffic', 
    ar: 'إصدار رخصة قيادة دولية معتمدة لاستخدامها في القيادة واستئجار السيارات خارج الدولة', 
    en: 'Issuing approved international driving license for driving and renting cars abroad' 
  },
  s78: { 
    titleAr: 'كود جمركي', titleEn: 'Customs Code', 
    authorityAr: 'الجمارك', authorityEn: 'Customs', 
    ar: 'تسجيل وإصدار كود جمركي للمستوردين والمصدرين لتسهيل عمليات الشحن والتخليص', 
    en: 'Registering and issuing customs code for importers and exporters to facilitate shipping and clearance' 
  },
  s79: { 
    titleAr: 'شهادة منشأ', titleEn: 'Origin Cert', 
    authorityAr: 'الغرفة', authorityEn: 'Chamber', 
    ar: 'إصدار شهادة المنشأ لتصدير البضائع والمنتجات وإثبات مصدرها للجهات الخارجية', 
    en: 'Issuing certificate of origin for exporting goods and products and proving their source to foreign entities' 
  },
  s80: { 
    titleAr: 'باقة تأسيس', titleEn: 'Setup Package', 
    authorityAr: 'عام', authorityEn: 'General', 
    ar: 'باقة "تسهيل أعمالك" الشاملة لتأسيس الشركات وتشمل الرخصة والإقامات والحساب البنكي والمكتب', 
    en: 'Comprehensive "Ease Your Business" package for company setup including license visas bank account and office' 
  },
};