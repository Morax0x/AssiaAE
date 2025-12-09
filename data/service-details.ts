// data/service-details.ts
import { SERVICES_DESCRIPTIONS } from './descriptions';
import { SERVICES_DOCUMENTS } from './documents';
import { SERVICES_FEES } from './fees';

// تعريف الواجهة
export interface ServiceDetail {
  id: string;
  authorityAr: string;
  authorityEn: string;
  fullDescriptionAr: string;
  fullDescriptionEn: string;
  requiredDocumentsAr: string[];
  requiredDocumentsEn: string[];
  costBreakdown: {
    itemAr: string;
    itemEn: string;
    feeAr: string;
    feeEn: string;
  }[];
}

// --- بيانات احتياطية للخدمات الجديدة (s60 - s80) لضمان ظهورها ---
const EXTRA_DOCS: Record<string, { ar: string[], en: string[] }> = {
  s60: { ar: ['الهوية الإماراتية', 'عقد إيجار السكن'], en: ['Emirates ID', 'Tenancy Contract'] },
  s61: { ar: ['سند الملكية', 'خارطة الأرض'], en: ['Title Deed', 'Site Plan'] },
  s62: { ar: ['أصل الوكالة', 'هوية الموكل'], en: ['Original POA', 'Principal ID'] },
  s63: { ar: ['الفواتير الأصلية', 'إثبات التصدير'], en: ['Original Invoices', 'Export Proof'] },
  s64: { ar: ['موافقة ولي الأمر', 'الجواز والهوية'], en: ['Guardian Consent', 'Passport & ID'] },
  s65: { ar: ['ملكية المركبة', 'فحص فني'], en: ['Vehicle Mulkiya', 'Technical Test'] },
  s66: { ar: ['جواز السفر', 'خطة الفعالية'], en: ['Passport', 'Event Plan'] },
  s67: { ar: ['لائحة الدعوى', 'المستندات'], en: ['Claim Details', 'Documents'] },
  s68: { ar: ['الفاتورة الأصلية', 'الرخصة'], en: ['Original Invoice', 'License'] },
  s69: { ar: ['الهوية الأصلية', 'المستند الداعم'], en: ['Original ID', 'Support Doc'] },
  s70: { ar: ['صورة المستند المفقود', 'الهوية'], en: ['Lost Doc Copy', 'ID'] },
  s71: { ar: ['صورة الشعار', 'الرخصة'], en: ['Logo Image', 'License'] },
  s72: { ar: ['الهويات', 'نص الإقرار'], en: ['IDs', 'Undertaking Text'] },
  s73: { ar: ['الرخصة', 'مخطط الموقع'], en: ['License', 'Site Plan'] },
  s74: { ar: ['المؤهل العلمي', 'الجواز'], en: ['Degree', 'Passport'] },
  s75: { ar: ['إقامة الخليج', 'الجواز'], en: ['GCC Visa', 'Passport'] },
  s76: { ar: ['الشهادات', 'الخبرة'], en: ['Certificates', 'Experience'] },
  s77: { ar: ['رخصة القيادة', 'صورة'], en: ['Driving License', 'Photo'] },
  s78: { ar: ['الرخصة التجارية'], en: ['Trade License'] },
  s79: { ar: ['الفاتورة', 'قائمة التعبئة'], en: ['Invoice', 'Packing List'] },
  s80: { ar: ['جواز السفر'], en: ['Passport'] },
};

const EXTRA_FEES: Record<string, { itemAr: string, itemEn: string, feeAr: string, feeEn: string }[]> = {
  s60: [{ itemAr: 'رسوم الرخصة', itemEn: 'License Fee', feeAr: '1070 درهم', feeEn: '1070 AED' }],
  s61: [{ itemAr: 'رسوم التقييم', itemEn: 'Valuation Fee', feeAr: '4000 درهم', feeEn: '4000 AED' }],
  s62: [{ itemAr: 'رسوم الإلغاء', itemEn: 'Revocation Fee', feeAr: '500 درهم', feeEn: '500 AED' }],
  s63: [{ itemAr: 'رسوم الخدمة', itemEn: 'Service Fee', feeAr: 'نسبة مئوية', feeEn: 'Percentage' }],
  s64: [{ itemAr: 'رسوم التصريح', itemEn: 'Permit Fee', feeAr: '500 درهم', feeEn: '500 AED' }],
  s65: [{ itemAr: 'رسوم التصريح', itemEn: 'Permit Fee', feeAr: '300 درهم', feeEn: '300 AED' }],
  s66: [{ itemAr: 'رسوم الرخصة', itemEn: 'License Fee', feeAr: 'حسب الإمارة', feeEn: 'Varies' }],
  s67: [{ itemAr: 'رسوم القيد', itemEn: 'Filing Fee', feeAr: 'نسبة من المطالبة', feeEn: '% of Claim' }],
  s68: [{ itemAr: 'رسوم التصديق', itemEn: 'Attestation Fee', feeAr: '2000+ درهم', feeEn: '2000+ AED' }],
  s69: [{ itemAr: 'رسوم التحديث', itemEn: 'Update Fee', feeAr: '150 درهم', feeEn: '150 AED' }],
  s70: [{ itemAr: 'رسوم الشهادة', itemEn: 'Cert Fee', feeAr: '70 درهم', feeEn: '70 AED' }],
  s71: [{ itemAr: 'رسوم التسجيل', itemEn: 'Reg Fee', feeAr: '7000+ درهم', feeEn: '7000+ AED' }],
  s72: [{ itemAr: 'رسوم التوثيق', itemEn: 'Notary Fee', feeAr: '300 درهم', feeEn: '300 AED' }],
  s73: [{ itemAr: 'الرسوم السنوية', itemEn: 'Annual Fee', feeAr: 'حسب الموقع', feeEn: 'Depends on Loc' }],
  s74: [{ itemAr: 'رسوم التصريح', itemEn: 'Permit Fee', feeAr: 'حسب المهارة', feeEn: 'Skill Based' }],
  s75: [{ itemAr: 'رسوم التأشيرة', itemEn: 'Visa Fee', feeAr: '250 درهم', feeEn: '250 AED' }],
  s76: [{ itemAr: 'رسوم التقييم', itemEn: 'Eval Fee', feeAr: 'مختلفة', feeEn: 'Varies' }],
  s77: [{ itemAr: 'رسوم الرخصة', itemEn: 'License Fee', feeAr: '170 درهم', feeEn: '170 AED' }],
  s78: [{ itemAr: 'رسوم الكود', itemEn: 'Code Fee', feeAr: '100 درهم', feeEn: '100 AED' }],
  s79: [{ itemAr: 'رسوم الشهادة', itemEn: 'Cert Fee', feeAr: 'مختلفة', feeEn: 'Varies' }],
  s80: [{ itemAr: 'سعر الباقة', itemEn: 'Package Price', feeAr: 'حسب الطلب', feeEn: 'On Request' }],
};

// --- الدمج النهائي ---
const serviceIds = Object.keys(SERVICES_DESCRIPTIONS);

export const ALL_SERVICE_DETAILS: ServiceDetail[] = serviceIds.map((id) => {
  // نأخذ البيانات من الملفات، وإذا لم نجدها (للخدمات الجديدة) نأخذها من الاحتياط هنا
  const desc = SERVICES_DESCRIPTIONS[id] || { authorityAr: '', authorityEn: '', ar: '', en: '' };

  // هنا "الذكاء": إذا لم نجد المستندات في الملف الأصلي، نبحث في القائمة الاحتياطية
  const docs = SERVICES_DOCUMENTS[id] || EXTRA_DOCS[id] || { ar: [], en: [] };

  // ونفس الشيء للرسوم
  const fees = SERVICES_FEES[id] || EXTRA_FEES[id] || [];

  return {
    id: id,
    authorityAr: desc.authorityAr,
    authorityEn: desc.authorityEn,

    // العناوين من ملف descriptions
    // @ts-ignore (لأننا أضفنا الحقول حديثاً)
    titleAr: desc.titleAr,
    // @ts-ignore
    titleEn: desc.titleEn,

    fullDescriptionAr: desc.ar,
    fullDescriptionEn: desc.en,
    requiredDocumentsAr: docs.ar,
    requiredDocumentsEn: docs.en,
    costBreakdown: fees.map(f => ({
      itemAr: f.itemAr,
      itemEn: f.itemEn,
      feeAr: f.feeAr,
      feeEn: f.feeEn
    }))
  };
});