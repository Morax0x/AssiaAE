// src/data/fees.ts

export const SERVICES_FEES: Record<string, { itemAr: string; itemEn: string; feeAr: string; feeEn: string }[]> = {
  // --- Companies ---
  s1: [
    { itemAr: 'حجز الاسم التجاري', itemEn: 'Trade Name Reservation', feeAr: '560', feeEn: '560' },
    { itemAr: 'الموافقة المبدئية', itemEn: 'Initial Approval', feeAr: '250', feeEn: '250' },
    { itemAr: 'رخصة (فردية/وكيل)', itemEn: 'License (Sole/Agent)', feeAr: '5000 تقريباً', feeEn: '5000 approx' },
    { itemAr: 'رخصة (شركة أعمال)', itemEn: 'License (Business)', feeAr: '6000 تقريباً', feeEn: '6000 approx' },
    { itemAr: 'رخصة (ذ.م.م)', itemEn: 'License (LLC)', feeAr: 'تبدأ من 8500', feeEn: 'Starts from 8500' },
    { itemAr: 'الاسم الأجنبي', itemEn: 'Foreign Name', feeAr: '2000 سنوياً', feeEn: '2000 annually' },
    { itemAr: 'رسوم الأنشطة', itemEn: 'Activity Fees', feeAr: '4000 - 15000', feeEn: '4000 - 15000' }
  ],
  s2: [{ itemAr: 'رسوم الحجز', itemEn: 'Reservation Fee', feeAr: '620', feeEn: '620' }],
  s3: [{ itemAr: 'رسوم الموافقة', itemEn: 'Approval Fee', feeAr: '350', feeEn: '350' }],
  s4: [{ itemAr: 'رسوم الخدمة', itemEn: 'Service Fee', feeAr: '350 + الحكومية', feeEn: '350 + Gov Fees' }, { itemAr: 'عقد الإيجار', itemEn: 'Tenancy Contract', feeAr: '250', feeEn: '250' }],
  s5: [{ itemAr: 'رسوم التعديل', itemEn: 'Amendment Fee', feeAr: '500', feeEn: '500' }, { itemAr: 'رسوم الإعلان', itemEn: 'Advertisement', feeAr: '300', feeEn: '300' }],
  s6: [{ itemAr: 'رسوم الملحق', itemEn: 'Addendum Fee', feeAr: '1500', feeEn: '1500' }, { itemAr: 'النشر', itemEn: 'Publication', feeAr: '500', feeEn: '500' }],
  s7: [{ itemAr: 'تغيير الاسم', itemEn: 'Name Change', feeAr: '600', feeEn: '600' }, { itemAr: 'حجز الاسم الجديد', itemEn: 'New Name', feeAr: '620', feeEn: '620' }],
  s8: [{ itemAr: 'رسوم الحل', itemEn: 'Dissolution Fee', feeAr: '2000', feeEn: '2000' }, { itemAr: 'محو القيد', itemEn: 'Deregistration', feeAr: '1000', feeEn: '1000' }],
  s9: [{ itemAr: 'رسوم التجميد', itemEn: 'Freezing Fee', feeAr: '2000 سنوياً', feeEn: '2000 annually' }],
  s10: [{ itemAr: 'رسوم التصريح', itemEn: 'Permit Fee', feeAr: '500', feeEn: '500' }],
  s11: [{ itemAr: 'الرسوم السنوية', itemEn: 'Annual Fee', feeAr: '3000 - 5000', feeEn: '3000 - 5000' }],

  // --- Golden Visa ---
  s12: [{ itemAr: 'رسوم الطلب', itemEn: 'App Fee', feeAr: '150', feeEn: '150' }, { itemAr: 'رسوم الإصدار', itemEn: 'Issuance', feeAr: '2800', feeEn: '2800' }],
  s13: [{ itemAr: 'رسوم الترشيح', itemEn: 'Nomination', feeAr: '500', feeEn: '500' }, { itemAr: 'رسوم الإصدار', itemEn: 'Issuance', feeAr: '2800', feeEn: '2800' }],
  s14: [{ itemAr: 'رسوم المعالجة', itemEn: 'Processing', feeAr: '300', feeEn: '300' }, { itemAr: 'رسوم الإقامة', itemEn: 'Visa Fee', feeAr: '2300', feeEn: '2300' }],

  // --- Residency ---
  s15: [{ itemAr: 'رسوم الإقامة (3 سنوات)', itemEn: '3-Year Visa', feeAr: '800', feeEn: '800' }, { itemAr: 'فحص طبي', itemEn: 'Medical', feeAr: '300', feeEn: '300' }],
  s16: [{ itemAr: 'رسوم التصريح', itemEn: 'Permit Fee', feeAr: '250 - 500', feeEn: '250 - 500' }, { itemAr: 'الضمان (إن وجد)', itemEn: 'Deposit', feeAr: '1000', feeEn: '1000' }],
  s17: [{ itemAr: 'فتح الملف', itemEn: 'File Opening', feeAr: '250', feeEn: '250' }, { itemAr: 'الإقامة', itemEn: 'Visa Stamping', feeAr: '800', feeEn: '800' }],
  s18: [{ itemAr: 'رسوم الإقامة', itemEn: 'Visa Fee', feeAr: '1100', feeEn: '1100' }, { itemAr: 'الضمان المالي', itemEn: 'Deposit', feeAr: '3000', feeEn: '3000' }],
  s19: [{ itemAr: 'رسوم الإقامة', itemEn: 'Visa Fee', feeAr: '350', feeEn: '350' }, { itemAr: 'الهوية', itemEn: 'ID', feeAr: '170', feeEn: '170' }],
  s20: [{ itemAr: 'رسوم التثبيت', itemEn: 'Stamping', feeAr: '200', feeEn: '200' }],
  s21: [{ itemAr: 'تجديد الإقامة', itemEn: 'Visa Renewal', feeAr: '800', feeEn: '800' }, { itemAr: 'تجديد الهوية', itemEn: 'ID Renewal', feeAr: '270', feeEn: '270' }],
  s22: [{ itemAr: 'رسوم الإلغاء', itemEn: 'Cancellation', feeAr: '160', feeEn: '160' }],
  s23: [{ itemAr: 'رسم الخدمة', itemEn: 'Service Fee', feeAr: '100 + الغرامة', feeEn: '100 + Fine' }],
  s24: [{ itemAr: 'رسوم النقل', itemEn: 'Transfer Fee', feeAr: '220', feeEn: '220' }],

  // --- Labour ---
  s25: [{ itemAr: 'طلب تصريح', itemEn: 'Permit Request', feeAr: '250', feeEn: '250' }, { itemAr: 'الموافقة', itemEn: 'Approval', feeAr: 'حسب الفئة (500+)', feeEn: 'Category dependent (500+)' }],
  s26: [{ itemAr: 'طباعة العرض', itemEn: 'Offer Letter', feeAr: '53', feeEn: '53' }],
  s27: [{ itemAr: 'توثيق العقد', itemEn: 'Contract Attest', feeAr: '100', feeEn: '100' }],
  s28: [{ itemAr: 'رسم الخدمة', itemEn: 'Service Fee', feeAr: '100', feeEn: '100' }, { itemAr: 'الرسوم الحكومية', itemEn: 'Gov Fees', feeAr: 'حسب الفئة', feeEn: 'Category dependent' }],
  s29: [{ itemAr: 'رسوم البلاغ', itemEn: 'Report Fee', feeAr: '420', feeEn: '420' }],
  s30: [{ itemAr: 'طلب الكوتا', itemEn: 'Quota Request', feeAr: '200', feeEn: '200' }],
  s31: [{ itemAr: 'رسوم التسجيل', itemEn: 'Registration Fee', feeAr: '250', feeEn: '250' }, { itemAr: 'التحويل الشهري', itemEn: 'Transfer', feeAr: '15 / موظف', feeEn: '15 / emp' }],
  s32: [{ itemAr: 'باقة تدبير', itemEn: 'Tadbeer Pkg', feeAr: 'تبدأ من 5000', feeEn: 'Starts from 5000' }, { itemAr: 'رسوم الخدمة', itemEn: 'Service Fee', feeAr: '300', feeEn: '300' }],

  // --- ID & Medical ---
  s33: [{ itemAr: 'رسوم الهوية (سنتين)', itemEn: 'ID 2 Years', feeAr: '270', feeEn: '270' }, { itemAr: 'رسوم الخدمة', itemEn: 'Service Fee', feeAr: '30', feeEn: '30' }],
  s34: [{ itemAr: 'تجديد (سنتين)', itemEn: 'Renew 2 Years', feeAr: '270', feeEn: '270' }, { itemAr: 'تجديد (3 سنوات)', itemEn: 'Renew 3 Years', feeAr: '370', feeEn: '370' }],
  s35: [{ itemAr: 'عادي (48 س)', itemEn: 'Normal', feeAr: '302', feeEn: '302' }, { itemAr: 'VIP (4 س)', itemEn: 'VIP', feeAr: '750', feeEn: '750' }],
  s36: [{ itemAr: 'رسوم البطاقة', itemEn: 'Card Fee', feeAr: '150 - 300', feeEn: '150 - 300' }],
  s37: [{ itemAr: 'الباقة الأساسية', itemEn: 'Basic Plan', feeAr: '650', feeEn: '650' }, { itemAr: 'رسوم الخدمة', itemEn: 'Service Fee', feeAr: '100', feeEn: '100' }],

  // --- Legal ---
  s38: [{ itemAr: 'رسوم التصديق', itemEn: 'Attestation', feeAr: '300 - 500', feeEn: '300 - 500' }],
  s39: [{ itemAr: 'توكيل عام', itemEn: 'General POA', feeAr: '350', feeEn: '350' }, { itemAr: 'توكيل خاص', itemEn: 'Special POA', feeAr: '250', feeEn: '250' }],
  s40: [{ itemAr: 'ترجمة (صفحة)', itemEn: 'Per Page', feeAr: '30', feeEn: '30' }],
  s41: [{ itemAr: 'تصديق عادي', itemEn: 'Normal Attest', feeAr: '150', feeEn: '150' }, { itemAr: 'تصديق تجاري', itemEn: 'Commercial', feeAr: '2000', feeEn: '2000' }],
  s42: [{ itemAr: 'رسوم المعادلة', itemEn: 'Equivalency', feeAr: '100', feeEn: '100' }],

  // --- Municipality ---
  s43: [{ itemAr: 'رسوم التوثيق', itemEn: 'Registration', feeAr: '220', feeEn: '220' }, { itemAr: 'نسبة البلدية', itemEn: 'Muni Fee', feeAr: '5% من الإيجار', feeEn: '5% of Rent' }],
  s44: [{ itemAr: 'إصدار خارطة', itemEn: 'Site Plan', feeAr: '250', feeEn: '250' }],
  s45: [{ itemAr: 'تصريح اللوحة', itemEn: 'Signage Permit', feeAr: '500 / متر', feeEn: '500 / meter' }],
  s46: [{ itemAr: 'رسوم الشهادة', itemEn: 'Cert Fee', feeAr: 'تختلف حسب النشاط', feeEn: 'Varies by activity' }],

  // --- Traffic ---
  s47: [{ itemAr: 'تجديد ملكية', itemEn: 'Renewal', feeAr: '380', feeEn: '380' }, { itemAr: 'فحص فني', itemEn: 'Testing', feeAr: '170', feeEn: '170' }],
  s48: [{ itemAr: 'رسوم النقل', itemEn: 'Transfer', feeAr: '350', feeEn: '350' }, { itemAr: 'رسوم المبايعة', itemEn: 'Sale Agrmnt', feeAr: '50', feeEn: '50' }],
  s49: [{ itemAr: 'إصدار شهادة', itemEn: 'Certificate', feeAr: '100', feeEn: '100' }],
  s50: [{ itemAr: 'فتح ملف', itemEn: 'Open File', feeAr: '200', feeEn: '200' }],

  // --- Finance ---
  s51: [{ itemAr: 'رسوم التسجيل', itemEn: 'Registration Fee', feeAr: '350', feeEn: '350' }],
  s52: [{ itemAr: 'رسوم التسجيل', itemEn: 'Registration Fee', feeAr: '350', feeEn: '350' }, { itemAr: 'تقديم إقرار', itemEn: 'Return Filing', feeAr: '200', feeEn: '200' }],
  s53: [{ itemAr: 'رسوم الخدمة', itemEn: 'Service Fee', feeAr: '500 - 1000', feeEn: '500 - 1000' }],
  s54: [{ itemAr: 'رسوم العضوية', itemEn: 'Membership', feeAr: 'تبدأ من 1200', feeEn: 'Starts from 1200' }],

  // --- General ---
  s55: [{ itemAr: 'تأمين (شقة)', itemEn: 'Deposit (Apt)', feeAr: '2000 (مسترد)', feeEn: '2000 (Refundable)' }, { itemAr: 'رسوم التوصيل', itemEn: 'Connection', feeAr: '150', feeEn: '150' }],
  s56: [{ itemAr: 'رسوم البراءة', itemEn: 'Clearance', feeAr: '50', feeEn: '50' }],
  s57: [{ itemAr: 'طباعة (صفحة)', itemEn: 'Typing (Page)', feeAr: '30', feeEn: '30' }, { itemAr: 'تعبئة استمارة', itemEn: 'Form Filling', feeAr: '50', feeEn: '50' }],
  s58: [{ itemAr: 'رسوم VIP', itemEn: 'VIP Fee', feeAr: '300', feeEn: '300' }],
  s59: [{ itemAr: 'عقد شهري', itemEn: 'Monthly Contract', feeAr: 'حسب حجم الشركة', feeEn: 'Depends on size' }, { itemAr: 'بالمعاملة', itemEn: 'Per Transaction', feeAr: '300', feeEn: '300' }],
  s60: [{ itemAr: 'رسوم الرخصة', itemEn: 'License Fee', feeAr: '1070', feeEn: '1070' }],
  s61: [{ itemAr: 'رسوم التقييم', itemEn: 'Valuation Fee', feeAr: '4000', feeEn: '4000' }],
  s62: [{ itemAr: 'رسوم الإلغاء', itemEn: 'Revocation Fee', feeAr: '500', feeEn: '500' }],
  s63: [{ itemAr: 'رسوم الخدمة', itemEn: 'Service Fee', feeAr: 'نسبة من الاسترداد', feeEn: 'Percentage of refund' }],
  s64: [{ itemAr: 'رسوم التصريح', itemEn: 'Permit Fee', feeAr: '100 - 500', feeEn: '100 - 500' }],
  s65: [{ itemAr: 'رسوم التصريح', itemEn: 'Permit Fee', feeAr: 'مختلفة', feeEn: 'Various' }],
  s66: [{ itemAr: 'رسوم الرخصة', itemEn: 'License Fee', feeAr: 'حسب الإمارة', feeEn: 'Depending on the Emirate' }],
  s67: [{ itemAr: 'رسوم القيد', itemEn: 'Filing Fee', feeAr: 'نسبة من المطالبة', feeEn: 'Percentage of claim' }],
  s68: [{ itemAr: 'رسوم التصديق', itemEn: 'Attestation Fee', feeAr: '2000+', feeEn: '2000+' }],
  s69: [{ itemAr: 'رسوم التحديث', itemEn: 'Update Fee', feeAr: '150', feeEn: '150' }],
  s70: [{ itemAr: 'رسوم الشهادة', itemEn: 'Cert Fee', feeAr: '50 - 70', feeEn: '50 - 70' }],
  s71: [{ itemAr: 'رسوم التسجيل', itemEn: 'Reg Fee', feeAr: '7000+', feeEn: '7000+' }],
  s72: [{ itemAr: 'رسوم التوثيق', itemEn: 'Notary Fee', feeAr: '300', feeEn: '300' }],
  s73: [{ itemAr: 'الرسوم', itemEn: 'Fees', feeAr: 'حسب العدد والموقع', feeEn: 'Based on number and location' }],
  s74: [{ itemAr: 'رسوم التصريح', itemEn: 'Permit Fee', feeAr: 'حسب المهارة', feeEn: 'Based on skill' }],
  s75: [{ itemAr: 'رسوم التأشيرة', itemEn: 'Visa Fee', feeAr: '250', feeEn: '250' }],
  s76: [{ itemAr: 'رسوم التقييم', itemEn: 'Evaluation Fee', feeAr: 'مختلفة', feeEn: 'Various' }],
  s77: [{ itemAr: 'الرسوم', itemEn: 'Fees', feeAr: '170', feeEn: '170' }],
  s78: [{ itemAr: 'رسوم الكود', itemEn: 'Code Fee', feeAr: '100 + تجديد', feeEn: '100 + Renewal' }],
  s79: [{ itemAr: 'رسوم الشهادة', itemEn: 'Cert Fee', feeAr: 'مختلفة', feeEn: 'Various' }],
  s80: [{ itemAr: 'سعر الباقة', itemEn: 'Package Price', feeAr: 'حسب الطلب', feeEn: 'On Request' }],
};