// src/data/documents.ts

export const SERVICES_DOCUMENTS: Record<string, { ar: string[]; en: string[] }> = {
  // --- Companies (s1 محدثة حسب الصورة) ---
  s1: {
    ar: ['جواز السفر الأصلي', 'الهوية الإماراتية (للمقيمين)', 'الإقامة (إذا كان الشريك مكفولاً)', 'رسالة عدم ممانعة (إذا لزم الأمر)'],
    en: ['Original Passport', 'Emirates ID (Residents)', 'Visa Copy (if sponsored)', 'NOC (if required)']
  },
  s2: {
    ar: ['صورة جواز السفر', 'قائمة بـ 3 أسماء مقترحة'],
    en: ['Passport Copy', 'List of 3 proposed names']
  },
  s3: {
    ar: ['صورة الجواز', 'نسخة الإقامة والهوية للشريك'],
    en: ['Passport Copy', 'Visa & ID Copy']
  },
  s4: {
    ar: ['صورة الرخصة التجارية', 'عقد الإيجار الموثق (إيجاري)', 'صورة الهوية'],
    en: ['Trade License Copy', 'Attested Tenancy Contract', 'ID Copy']
  },
  s5: {
    ar: ['الرخصة الأصلية', 'قرار مجلس الإدارة بالتعديل', 'ملحق العقد'],
    en: ['Original License', 'Board Resolution', 'Contract Addendum']
  },
  s6: {
    ar: ['جواز الشريك الجديد', 'عقد التنازل المصدق', 'الرخصة الأصلية'],
    en: ['New Partner Passport', 'Attested Assignment Contract', 'Original License']
  },
  s7: {
    ar: ['الرخصة الأصلية', 'الاسم الجديد المقترح'],
    en: ['Original License', 'Proposed New Name']
  },
  s8: {
    ar: ['محضر اجتماع التصفية', 'تعيين المصفي القانوني', 'براءة ذمة (كهرباء/اتصالات/عمل)'],
    en: ['Liquidation Minutes', 'Liquidator Appointment', 'Clearance Certs']
  },
  s9: {
    ar: ['رسالة طلب التجميد', 'تعهد بعدم ممارسة النشاط', 'إلغاء بطاقات العمل'],
    en: ['Freezing Request Letter', 'Undertaking Letter', 'Cancelled Labour Cards']
  },
  s10: {
    ar: ['الرخصة التجارية', 'تصميم الإعلان/العرض', 'موافقة المالك (إذا خارجي)'],
    en: ['Trade License', 'Ad Design', 'Landlord Approval']
  },
  s11: {
    ar: ['صورة جواز الوكيل', 'خلاصة القيد', 'اتفاقية وكيل خدمات'],
    en: ['Agent Passport', 'Family Book', 'Service Agent Agreement']
  },

  // --- Golden Visa ---
  s12: {
    ar: ['سند الملكية العقارية (أصل)', 'صورة الجواز', 'تأمين صحي', 'صورة شخصية'],
    en: ['Original Title Deed', 'Passport Copy', 'Health Insurance', 'Photo']
  },
  s13: {
    ar: ['شهادة علمية مصدقة (معادلة)', 'عقد عمل مصدق (راتب 30k+)', 'توصية'],
    en: ['Attested Equivalency', 'Attested Contract (30k+)', 'Recommendation']
  },
  s14: {
    ar: ['تصريح العمل الحر', 'كشف حساب بنكي (6 أشهر)', 'المؤهل العلمي'],
    en: ['Freelance Permit', 'Bank Statement (6 months)', 'Degree']
  },

  // --- Residency ---
  s15: {
    ar: ['الرخصة التجارية', 'ملحق الشركاء', 'صورة الجواز', 'صورة شخصية'],
    en: ['Trade License', 'Partners Annex', 'Passport', 'Photo']
  },
  s16: {
    ar: ['صورة الجواز (صلاحية 6 أشهر)', 'صورة شخصية خلفية بيضاء'],
    en: ['Passport Copy (6m validity)', 'White Background Photo']
  },
  s17: {
    ar: ['جواز الكفيل والمكفول', 'عقد زواج مصدق', 'عقد إيجار', 'شهادة راتب'],
    en: ['Sponsor/Dependent Passports', 'Attested Marriage Cert', 'Ejari', 'Salary Cert']
  },
  s18: {
    ar: ['جوازات الوالدين', 'شهادة الميلاد (للكفيل)', 'إثبات الإعالة', 'راتب 20k+'],
    en: ['Parents Passports', 'Sponsor Birth Cert', 'Dependency Proof', 'Salary 20k+']
  },
  s19: {
    ar: ['شهادة الميلاد الأصلية', 'جواز المولود', 'جوازات وإقامات الوالدين'],
    en: ['Original Birth Cert', 'Baby Passport', 'Parents Visa/IDs']
  },
  s20: {
    ar: ['جواز السفر الأصلي', 'إذن الدخول', 'نتيجة الفحص الطبي'],
    en: ['Original Passport', 'Entry Permit', 'Medical Result']
  },
  s21: {
    ar: ['الجواز الأصلي', 'الهوية', 'الفحص الطبي', 'الضمان الصحي'],
    en: ['Original Passport', 'ID', 'Medical', 'Insurance']
  },
  s22: {
    ar: ['جواز السفر', 'الهوية الأصلية', 'نموذج الإلغاء الموقع'],
    en: ['Passport', 'Original ID', 'Signed Cancellation']
  },
  s23: {
    ar: ['جواز السفر', 'كشف بالمخالفات'],
    en: ['Passport', 'Fines Report']
  },
  s24: {
    ar: ['الجواز القديم', 'الجواز الجديد', 'الهوية'],
    en: ['Old Passport', 'New Passport', 'ID']
  },

  // --- Labour ---
  s25: {
    ar: ['صورة الجواز', 'صورة شخصية', 'المؤهل العلمي المصدق'],
    en: ['Passport Copy', 'Photo', 'Attested Degree']
  },
  s26: {
    ar: ['صورة الجواز', 'بيانات الراتب والبدلات'],
    en: ['Passport Copy', 'Salary Details']
  },
  s27: {
    ar: ['عرض العمل الموقع', 'تقرير الفحص الطبي'],
    en: ['Signed Offer', 'Medical Report']
  },
  s28: {
    ar: ['عقد العمل', 'صورة الجواز', 'بطاقة الهوية'],
    en: ['Labour Contract', 'Passport', 'ID']
  },
  s29: {
    ar: ['تفاصيل الموظف', 'ما يثبت الانقطاع'],
    en: ['Employee Details', 'Proof of Absence']
  },
  s30: {
    ar: ['مستندات داعمة', 'عقد الإيجار'],
    en: ['Supporting docs', 'Tenancy contract']
  },
  s31: {
    ar: ['رقم حساب المنشأة', 'قائمة الموظفين'],
    en: ['Company IBAN', 'Employee List']
  },
  s32: {
    ar: ['جواز الكفيل', 'عقد الزواج'],
    en: ['Sponsor Passport', 'Marriage Cert']
  },

  // --- ID & Medical ---
  s33: {
    ar: ['جواز السفر', 'التأشيرة'],
    en: ['Passport', 'Visa']
  },
  s34: {
    ar: ['الهوية القديمة', 'جواز السفر'],
    en: ['Old ID', 'Passport']
  },
  s35: {
    ar: ['صورة الجواز', 'التأشيرة', 'رقم الهاتف'],
    en: ['Passport', 'Visa', 'Phone Number']
  },
  s36: {
    ar: ['صورة شخصية', 'فحص الدم'],
    en: ['Photo', 'Blood Test']
  },
  s37: {
    ar: ['جواز السفر', 'الهوية', 'تأشيرة الإقامة'],
    en: ['Passport', 'ID', 'Visa']
  },

  // --- Legal ---
  s38: {
    ar: ['العقد الأصلي', 'هويات الأطراف'],
    en: ['Original Contract', 'Parties IDs']
  },
  s39: {
    ar: ['هوية الموكل', 'جواز الوكيل'],
    en: ['Principal ID', 'Agent Passport']
  },
  s40: {
    ar: ['المستند الأصلي'],
    en: ['Original Document']
  },
  s41: {
    ar: ['الوثيقة الأصلية (مصدقة من بلد المنشأ)'],
    en: ['Original Document (Attested from origin)']
  },
  s42: {
    ar: ['الشهادة الأصلية', 'كشف العلامات'],
    en: ['Original Degree', 'Transcripts']
  },

  // --- Municipality ---
  s43: {
    ar: ['عقد الإيجار', 'سند الملكية', 'هوية المستأجر'],
    en: ['Tenancy Contract', 'Title Deed', 'Tenant ID']
  },
  s44: {
    ar: ['سند الملكية', 'الهوية'],
    en: ['Title Deed', 'ID']
  },
  s45: {
    ar: ['صورة اللوحة', 'الرخصة التجارية'],
    en: ['Signage Photo', 'Trade License']
  },
  s46: {
    ar: ['عقد الصيانة', 'مخطط الموقع'],
    en: ['Maintenance Contract', 'Layout']
  },

  // --- Traffic ---
  s47: {
    ar: ['فحص ناجح', 'تأمين'],
    en: ['Passed Test', 'Insurance']
  },
  s48: {
    ar: ['هوية الطرفين', 'فحص ناجح'],
    en: ['Both IDs', 'Vehicle Test']
  },
  s49: {
    ar: ['الهوية', 'الإيميل'],
    en: ['ID', 'Email']
  },
  s50: {
    ar: ['الرخصة التجارية', 'الهوية'],
    en: ['Trade License', 'ID']
  },

  // --- Finance ---
  s51: {
    ar: ['الرخصة', 'عقد التأسيس'],
    en: ['License', 'MOA']
  },
  s52: {
    ar: ['الرخصة', 'كشف حساب 12 شهر'],
    en: ['License', 'Bank Stmt 12m']
  },
  s53: {
    ar: ['الرخصة', 'عقد التأسيس', 'جوازات الشركاء'],
    en: ['License', 'MOA', 'Passports']
  },
  s54: {
    ar: ['الرخصة التجارية'],
    en: ['Trade License']
  },

  // --- General ---
  s55: {
    ar: ['عقد الإيجار الموثق', 'الهوية'],
    en: ['Attested Tenancy', 'ID']
  },
  s56: {
    ar: ['رقم الحساب', 'صورة الهوية'],
    en: ['Account No', 'ID Copy']
  },
  s57: {
    ar: ['المستندات المطلوبة'],
    en: ['Required Docs']
  },
  s58: {
    ar: ['المستندات الاعتيادية'],
    en: ['Standard Docs']
  },
  s59: {
    ar: ['بطاقة المنشأة', 'تفويض'],
    en: ['Establishment Card', 'Authorization']
  },

  // --- الخدمات الجديدة (من s60 إلى s80) ---
  s60: {
    ar: ['الهوية الإماراتية', 'عقد إيجار السكن (للمقيمين)'],
    en: ['Emirates ID', 'Tenancy Contract (for residents)']
  },
  s61: {
    ar: ['سند الملكية', 'خارطة الأرض', 'صور العقار'],
    en: ['Title Deed', 'Site Plan', 'Property Photos']
  },
  s62: {
    ar: ['أصل الوكالة', 'هوية الموكل'],
    en: ['Original POA', 'Principal ID']
  },
  s63: {
    ar: ['الفواتير الضريبية الأصلية', 'إثبات التصدير'],
    en: ['Original Tax Invoices', 'Export Proof']
  },
  s64: {
    ar: ['موافقة ولي الأمر', 'صورة الجواز والهوية', 'عقد تدريب'],
    en: ['Guardian Consent', 'Passport & ID', 'Training Contract']
  },
  s65: {
    ar: ['ملكية المركبة', 'فحص المركبة الفني'],
    en: ['Vehicle Mulkiya', 'Technical Inspection']
  },
  s66: {
    ar: ['جواز السفر', 'خطة العمل للفعالية', 'موافقة القاعة'],
    en: ['Passport', 'Event Plan', 'Venue Approval']
  },
  s67: {
    ar: ['لائحة الدعوى', 'المستندات الداعمة', 'الهوية'],
    en: ['Claim Statement', 'Supporting Docs', 'ID']
  },
  s68: {
    ar: ['الفاتورة التجارية الأصلية', 'رخصة الشركة'],
    en: ['Original Invoice', 'Trade License']
  },
  s69: {
    ar: ['الهوية الأصلية', 'المستند الداعم للتغيير'],
    en: ['Original ID', 'Supporting Document']
  },
  s70: {
    ar: ['صورة المستند المفقود', 'الهوية الإماراتية'],
    en: ['Lost Document Copy', 'Emirates ID']
  },
  s71: {
    ar: ['صورة الشعار', 'الرخصة التجارية'],
    en: ['Logo Image', 'Trade License']
  },
  s72: {
    ar: ['الهوية الأصلية للأطراف', 'نص الإقرار'],
    en: ['Original IDs', 'Declaration Text']
  },
  s73: {
    ar: ['الرخصة التجارية', 'مخطط الموقع'],
    en: ['Trade License', 'Site Plan']
  },
  s74: {
    ar: ['المؤهل العلمي المصدق', 'الإقامة السارية'],
    en: ['Attested Degree', 'Valid Visa']
  },
  s75: {
    ar: ['إقامة الدولة الخليجية (سارية)', 'جواز السفر'],
    en: ['Valid GCC Residency', 'Passport']
  },
  s76: {
    ar: ['الشهادات العلمية', 'شهادة الخبرة', 'ترخيص سابق'],
    en: ['Degrees', 'Experience Letter', 'Previous License']
  },
  s77: {
    ar: ['رخصة القيادة المحلية', 'صورة شخصية', 'الهوية'],
    en: ['Local License', 'Photo', 'ID']
  },
  s78: {
    ar: ['الرخصة التجارية (نشاط استيراد/تصدير)'],
    en: ['Trade License (Import/Export Activity)']
  },
  s79: {
    ar: ['الفاتورة التجارية', 'قائمة التعبئة', 'الرخصة'],
    en: ['Commercial Invoice', 'Packing List', 'License']
  },
  s80: {
    ar: ['جواز السفر فقط (للبدء)'],
    en: ['Passport Only (to start)']
  }
};