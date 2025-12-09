import { Content } from './types';
import { 
  Briefcase, FileText, Globe, Scale, ShieldCheck, Building2,
  Users, Clock, CreditCard, FileCheck, Zap, Heart, Car, Gavel, 
  Home, Printer, Crown, Calculator, UserPlus, Plane, Key, 
  FileSignature, Landmark, Shield, GraduationCap, FileMinus,
  AlertTriangle, Baby, Stethoscope, BadgeCheck, XCircle,
  Unlock, RotateCcw, FilePlus, ClipboardList, Package, MapPin, Star
} from 'lucide-react';

export const APP_CONTENT: Content = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact Us',
      langLabel: 'العربية',
    },
    hero: {
      title: 'Assia Business Services', 
      subtitle: 'Your trusted partner for government transactions, Service Agent representation, and business setup in Ajman & UAE.', 
      ctaPrimary: 'Our Services',
      ctaSecondary: 'Contact Us',
    },
    trust: {
      title: 'All Services at Your Fingertips', 
    },
    services: {
      title: 'Our Services',
      subtitle: 'A complete encyclopedia of government transactions for companies and individuals.',
      items: [
        // --- DED / Companies ---
        { id: 's1', category: 'companies', icon: Building2, title: 'Mainland License', description: 'Issuance of new commercial licenses.' },
        { id: 's2', category: 'companies', icon: FileText, title: 'Trade Name', description: 'Reserving a trade name.' },
        { id: 's3', category: 'companies', icon: FileSignature, title: 'Initial Approval', description: 'Initial approvals for business.' },
        { id: 's4', category: 'companies', icon: RotateCcw, title: 'License Renewal', description: 'Renewing trade licenses.' },
        { id: 's5', category: 'companies', icon: ClipboardList, title: 'License Amendment', description: 'Amending license details.' },
        { id: 's6', category: 'companies', icon: Users, title: 'Partner Services', description: 'Adding or removing partners.' },
        { id: 's7', category: 'companies', icon: FileText, title: 'Change Name', description: 'Changing trade name.' },
        { id: 's8', category: 'companies', icon: XCircle, title: 'License Cancellation', description: 'Cancelling trade licenses.' },
        { id: 's9', category: 'companies', icon: Unlock, title: 'License Freezing', description: 'Temporarily freezing license.' },
        { id: 's10', category: 'companies', icon: Briefcase, title: 'Commercial Permit', description: 'Permits for promotions.' },
        { id: 's11', category: 'companies', icon: Briefcase, title: 'Local Agent', description: 'Service agent representation.' },

        // --- Golden & Green Visas ---
        { id: 's12', category: 'golden', icon: Crown, title: 'Golden Visa (Inv)', description: '10-year investor visa.' },
        { id: 's13', category: 'golden', icon: BadgeCheck, title: 'Golden Visa (Pro)', description: 'Golden visa for professionals.' },
        { id: 's14', category: 'golden', icon: ShieldCheck, title: 'Green Visa', description: '5-year self-sponsored visa.' },

        // --- Residency ---
        { id: 's15', category: 'residency', icon: Users, title: 'Partner Visa', description: '3-year partner residency.' },
        { id: 's16', category: 'residency', icon: FilePlus, title: 'Entry Permit', description: 'Employment entry permit.' },
        { id: 's17', category: 'residency', icon: Heart, title: 'Family Visa', description: 'Sponsoring wife and kids.' },
        { id: 's18', category: 'residency', icon: UserPlus, title: 'Parents Visa', description: 'Sponsoring parents.' },
        { id: 's19', category: 'residency', icon: Baby, title: 'Newborn Visa', description: 'Residency for newborns.' },
        { id: 's20', category: 'residency', icon: FileCheck, title: 'Visa Stamping', description: 'Residency stamping.' },
        { id: 's21', category: 'residency', icon: RotateCcw, title: 'Visa Renewal', description: 'Renewing residency visa.' },
        { id: 's22', category: 'residency', icon: FileMinus, title: 'Visa Cancel', description: 'Cancelling residency.' },
        { id: 's23', category: 'residency', icon: AlertTriangle, title: 'Fines Settlement', description: 'Paying overstay fines.' },
        { id: 's24', category: 'residency', icon: FileText, title: 'Data Transfer', description: 'Visa transfer to new passport.' },

        // --- Labour ---
        { id: 's25', category: 'labour', icon: Briefcase, title: 'Work Permit', description: 'New work permit issuance.' },
        { id: 's26', category: 'labour', icon: FilePlus, title: 'Job Offer', description: 'Job offer letter typing.' },
        { id: 's27', category: 'labour', icon: FileSignature, title: 'Labour Contract', description: 'Contract submission.' },
        { id: 's28', category: 'labour', icon: RotateCcw, title: 'Card Renewal', description: 'Renewing labour card.' },
        { id: 's29', category: 'labour', icon: AlertTriangle, title: 'Absconding', description: 'Absconding reports.' },
        { id: 's30', category: 'labour', icon: Calculator, title: 'Quota Request', description: 'Increasing quota.' },
        { id: 's31', category: 'labour', icon: Shield, title: 'WPS Reg', description: 'Wages Protection System.' },
        { id: 's32', category: 'labour', icon: UserPlus, title: 'Domestic Visa', description: 'Maids and Nannies visas.' },

        // --- ID & Medical ---
        { id: 's33', category: 'id_medical', icon: CreditCard, title: 'New ID', description: 'New Emirates ID.' },
        { id: 's34', category: 'id_medical', icon: RotateCcw, title: 'Renew ID', description: 'Renew Emirates ID.' },
        { id: 's35', category: 'id_medical', icon: Stethoscope, title: 'Medical Test', description: 'Medical fitness application.' },
        { id: 's36', category: 'id_medical', icon: BadgeCheck, title: 'Health Card', description: 'Occupational health card.' },
        { id: 's37', category: 'id_medical', icon: Heart, title: 'Insurance', description: 'Health insurance policy.' },

        // --- Legal ---
        { id: 's38', category: 'legal', icon: Gavel, title: 'Notary Public', description: 'Contract notarization.' },
        { id: 's39', category: 'legal', icon: FileSignature, title: 'POA', description: 'Power of Attorney.' },
        { id: 's40', category: 'legal', icon: Scale, title: 'Translation', description: 'Legal translation.' },
        { id: 's41', category: 'legal', icon: Globe, title: 'Attestation', description: 'MOFA attestation.' },
        { id: 's42', category: 'legal', icon: GraduationCap, title: 'Equivalency', description: 'Degree equivalency.' },

        // --- Municipality ---
        { id: 's43', category: 'municipality', icon: Home, title: 'Ejari/Tasdeeq', description: 'Tenancy contract.' },
        { id: 's44', category: 'municipality', icon: Building2, title: 'Site Plan', description: 'Site plan issuance.' },
        { id: 's45', category: 'municipality', icon: FileCheck, title: 'Signage', description: 'Signage permit.' },
        { id: 's46', category: 'municipality', icon: Zap, title: 'Civil Defense', description: 'Safety certificate.' },

        // --- Traffic ---
        { id: 's47', category: 'traffic', icon: Car, title: 'Car Reg', description: 'Vehicle registration.' },
        { id: 's48', category: 'traffic', icon: Key, title: 'Car Transfer', description: 'Vehicle ownership transfer.' },
        { id: 's49', category: 'traffic', icon: ShieldCheck, title: 'Police Clear', description: 'Good conduct certificate.' },
        { id: 's50', category: 'traffic', icon: FileText, title: 'Traffic File', description: 'Opening traffic file.' },

        // --- Finance ---
        { id: 's51', category: 'finance', icon: Calculator, title: 'Corp Tax', description: 'Corporate tax registration.' },
        { id: 's52', category: 'finance', icon: FileText, title: 'VAT Reg', description: 'VAT registration.' },
        { id: 's53', category: 'finance', icon: Landmark, title: 'Bank Account', description: 'Bank account assistance.' },
        { id: 's54', category: 'finance', icon: Briefcase, title: 'Chamber', description: 'Chamber membership.' },

        // --- General ---
        { id: 's55', category: 'general', icon: Zap, title: 'Utilities', description: 'Water & Electricity.' },
        { id: 's56', category: 'general', icon: FileCheck, title: 'Clearance', description: 'Utility clearance.' },
        { id: 's57', category: 'general', icon: Printer, title: 'Typing', description: 'General typing.' },
        { id: 's58', category: 'general', icon: Clock, title: 'VIP Service', description: 'Fast-track services.' },
        { id: 's59', category: 'general', icon: Users, title: 'PRO Service', description: 'Monthly PRO service.' },

        // --- New Services (60-80) ---
        { id: 's60', category: 'companies', icon: Building2, title: 'E-Trader', description: 'Home business license.' },
        { id: 's61', category: 'municipality', icon: Home, title: 'Valuation', description: 'Property valuation certificate.' },
        { id: 's62', category: 'legal', icon: FileSignature, title: 'Revoke POA', description: 'Cancelling Power of Attorney.' },
        { id: 's63', category: 'finance', icon: Calculator, title: 'VAT Refund', description: 'Tax refund for tourists/business.' },
        { id: 's64', category: 'labour', icon: Users, title: 'Juvenile Permit', description: 'Work permit for teenagers.' },
        { id: 's65', category: 'municipality', icon: Car, title: 'Food Vehicle', description: 'Food truck permit.' },
        { id: 's66', category: 'companies', icon: Building2, title: 'Event License', description: 'Organizing events permit.' },
        { id: 's67', category: 'legal', icon: Gavel, title: 'Case Reg', description: 'Labor/Commercial case registration.' },
        { id: 's68', category: 'legal', icon: Globe, title: 'Invoice Attest', description: 'Commercial invoice attestation.' },
        { id: 's69', category: 'id_medical', icon: CreditCard, title: 'Update ID', description: 'Updating Emirates ID details.' },
        { id: 's70', category: 'traffic', icon: ShieldCheck, title: 'Lost Cert', description: 'Lost item certificate.' },
        { id: 's71', category: 'companies', icon: Briefcase, title: 'Trademark', description: 'Trademark registration.' },
        { id: 's72', category: 'legal', icon: FileText, title: 'Debt Ack', description: 'Acknowledgement of debt.' },
        { id: 's73', category: 'municipality', icon: MapPin, title: 'Parking', description: 'Reserved parking permit.' },
        { id: 's74', category: 'labour', icon: UserPlus, title: 'Freelance', description: 'Freelance work permit.' },
        { id: 's75', category: 'visitors', icon: Plane, title: 'GCC Visa', description: 'Entry visa for GCC residents.' },
        { id: 's76', category: 'id_medical', icon: Stethoscope, title: 'Pro License', description: 'Medical professional license.' },
        { id: 's77', category: 'traffic', icon: Car, title: 'Intl License', description: 'International driving license.' },
        { id: 's78', category: 'companies', icon: Package, title: 'Customs Code', description: 'Import/Export code.' },
        { id: 's79', category: 'companies', icon: FileCheck, title: 'Origin Cert', description: 'Certificate of origin.' },
        { id: 's80', category: 'general', icon: Star, title: 'Ease Package', description: 'Comprehensive setup package.' },
      ],
    },
    about: {
      title: 'Assia Business Services',
      subtitle: 'About Us',
      description1: 'Assia Business Services is a certified office specializing in transaction clearing and business facilitation in Ajman and across the UAE. We act as a bridge between companies and government entities to ensure transactions proceed smoothly and with full compliance.',
      description2: '',
      // ✅ تم إفراغ الإحصائيات هنا
      stats: [],
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Visit our office or send us a message.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Your Message',
        submit: 'Send Message',
      },
      info: {
        addressLabel: 'Our Office',
        address: 'Al Jurf 2, Behind Smile Hypermarket, Ajman, UAE',
        phoneLabel: 'Call Us',
        emailLabel: 'Email Us',
      },
    },
    footer: {
      company: 'Assia Business Services',
      description: 'Your gateway to seamless government services in the UAE.',
      rights: '© 2025 Assia Business Services. All rights reserved.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      about: 'من نحن',
      contact: 'اتصل بنا',
      langLabel: 'English',
    },
    hero: {
      title: 'آسيا لخدمات رجال الاعمال', 
      subtitle: 'شريكك الموثوق لتخليص المعاملات في الإمارات', 
      ctaPrimary: 'اكتشف خدماتنا',
      ctaSecondary: 'تواصل معنا',
    },
    trust: {
      title: 'جميع خدماتنا بين يديك',
    },
    services: {
      title: 'خدمـاتـنـا',
      subtitle: 'موسوعة شاملة لكافة المعاملات الحكومية للشركات والأفراد.',
      items: [
        // --- الاقتصادية / الشركات ---
        { id: 's1', category: 'companies', icon: Building2, title: 'إصدار الرخص', description: 'إصدار رخص تجارية جديدة' },
        { id: 's2', category: 'companies', icon: FileText, title: 'الاسم التجاري', description: 'حجز الأسماء التجارية' },
        { id: 's3', category: 'companies', icon: FileSignature, title: 'الموافقة المبدئية', description: 'استخراج الموافقات' },
        { id: 's4', category: 'companies', icon: RotateCcw, title: 'تجديد الرخص', description: 'تجديد الرخص التجارية' },
        { id: 's5', category: 'companies', icon: ClipboardList, title: 'تعديل الرخص', description: 'تعديل بيانات الرخصة' },
        { id: 's6', category: 'companies', icon: Users, title: 'خدمات الشركاء', description: 'إضافة أو سحب شريك' },
        { id: 's7', category: 'companies', icon: FileText, title: 'تغيير الاسم', description: 'تغيير الاسم التجاري' },
        { id: 's8', category: 'companies', icon: XCircle, title: 'إلغاء الرخص', description: 'إلغاء الرخص والتصفية.' },
        { id: 's9', category: 'companies', icon: Unlock, title: 'تجميد الرخص', description: 'تجميد الرخص مؤقتاً' },
        { id: 's10', category: 'companies', icon: Briefcase, title: 'تصريح تجاري', description: 'تصاريح العروض' },
        { id: 's11', category: 'companies', icon: Briefcase, title: 'وكيل خدمات', description: 'توفير وكيل خدمات' },

        // --- Golden & Green Visas ---
        { id: 's12', category: 'golden', icon: Crown, title: 'إقامة ذهبية (م)', description: 'للمستثمرين العقاريين' },
        { id: 's13', category: 'golden', icon: BadgeCheck, title: 'إقامة ذهبية (ت)', description: 'للمواهب والمتخصصين' },
        { id: 's14', category: 'golden', icon: ShieldCheck, title: 'إقامة خضراء', description: 'للعمل الحر والمهرة' },

        // --- Residency ---
        { id: 's15', category: 'residency', icon: Users, title: 'إقامة شريك', description: 'إقامة مستثمر 3 سنوات' },
        { id: 's16', category: 'residency', icon: FilePlus, title: 'إذن دخول', description: 'تأشيرة عمل جديدة' },
        { id: 's17', category: 'residency', icon: Heart, title: 'كفالة الأسرة', description: 'إقامة الزوجة والأبناء' },
        { id: 's18', category: 'residency', icon: UserPlus, title: 'كفالة الوالدين', description: 'إقامة الآباء' },
        { id: 's19', category: 'residency', icon: Baby, title: 'إقامة مولود', description: 'تثبيت إقامة مولود' },
        { id: 's20', category: 'residency', icon: FileCheck, title: 'تثبيت الإقامة', description: 'طباعة الإقامة' },
        { id: 's21', category: 'residency', icon: RotateCcw, title: 'تجديد الإقامة', description: 'تجديد الإقامة المنتهية' },
        { id: 's22', category: 'residency', icon: FileMinus, title: 'إلغاء الإقامة', description: 'إلغاء الفيزا' },
        { id: 's23', category: 'residency', icon: AlertTriangle, title: 'دفع الغرامات', description: 'تسوية غرامات التأخير' },
        { id: 's24', category: 'residency', icon: FileText, title: 'نقل بيانات', description: 'نقل الإقامة لجواز جديد' },

        // --- Labour ---
        { id: 's25', category: 'labour', icon: Briefcase, title: 'تصريح عمل', description: 'إصدار تصريح جديد' },
        { id: 's26', category: 'labour', icon: FilePlus, title: 'عرض عمل', description: 'طباعة عرض عمل.' },
        { id: 's27', category: 'labour', icon: FileSignature, title: 'عقد عمل', description: 'تصديق عقد العمل.' },
        { id: 's28', category: 'labour', icon: RotateCcw, title: 'تجديد بطاقة', description: 'تجديد بطاقة العمل.' },
        { id: 's29', category: 'labour', icon: AlertTriangle, title: 'بلاغ هروب', description: 'تسجيل بلاغ انقطاع.' },
        { id: 's30', category: 'labour', icon: Calculator, title: 'طلب كوتا', description: 'زيادة كوتا العمال.' },
        { id: 's31', category: 'labour', icon: Shield, title: 'حماية الأجور', description: 'نظام WPS.' },
        { id: 's32', category: 'labour', icon: UserPlus, title: 'عمالة مساعدة', description: 'خدم وتدبير.' },

        // --- ID & Medical ---
        { id: 's33', category: 'id_medical', icon: CreditCard, title: 'هوية جديدة', description: 'إصدار هوية لأول مرة.' },
        { id: 's34', category: 'id_medical', icon: RotateCcw, title: 'تجديد الهوية', description: 'تجديد الهوية المنتهية.' },
        { id: 's35', category: 'id_medical', icon: Stethoscope, title: 'فحص طبي', description: 'طلب فحص اللياقة.' },
        { id: 's36', category: 'id_medical', icon: BadgeCheck, title: 'صحة مهنية', description: 'بطاقة صحية للعمل.' },
        { id: 's37', category: 'id_medical', icon: Heart, title: 'تأمين صحي', description: 'وثائق التأمين.' },

        // --- Legal ---
        { id: 's38', category: 'legal', icon: Gavel, title: 'كاتب العدل', description: 'تصديق العقود.' },
        { id: 's39', category: 'legal', icon: FileSignature, title: 'وكالات', description: 'عمل وكالة عامة/خاصة.' },
        { id: 's40', category: 'legal', icon: Scale, title: 'ترجمة', description: 'ترجمة قانونية.' },
        { id: 's41', category: 'legal', icon: Globe, title: 'تصديق خارجية', description: 'تصديق الشهادات.' },
        { id: 's42', category: 'legal', icon: GraduationCap, title: 'معادلة', description: 'معادلة الشهادات.' },

        // --- Municipality ---
        { id: 's43', category: 'municipality', icon: Home, title: 'عقود الإيجار', description: 'تصديق إيجاري.' },
        { id: 's44', category: 'municipality', icon: Building2, title: 'خارطة موقع', description: 'إصدار مخطط أرض.' },
        { id: 's45', category: 'municipality', icon: FileCheck, title: 'تصريح لوحة', description: 'لوحات إعلانية.' },
        { id: 's46', category: 'municipality', icon: Zap, title: 'دفاع مدني', description: 'شهادة استيفاء.' },

        // --- Traffic ---
        { id: 's47', category: 'traffic', icon: Car, title: 'تسجيل مركبة', description: 'تجديد ملكية.' },
        { id: 's48', category: 'traffic', icon: Key, title: 'نقل ملكية', description: 'نقل ملكية سيارة.' },
        { id: 's49', category: 'traffic', icon: ShieldCheck, title: 'حسن سيرة', description: 'شهادة بحث حالة.' },
        { id: 's50', category: 'traffic', icon: FileText, title: 'ملف مروري', description: 'فتح ملف ليسن.' },

        // --- Finance ---
        { id: 's51', category: 'finance', icon: Calculator, title: 'ضريبة الشركات', description: 'التسجيل الضريبي.' },
        { id: 's52', category: 'finance', icon: FileText, title: 'القيمة المضافة', description: 'تسجيل VAT.' },
        { id: 's53', category: 'finance', icon: Landmark, title: 'حساب بنكي', description: 'فتح حساب شركات.' },
        { id: 's54', category: 'finance', icon: Briefcase, title: 'غرفة التجارة', description: 'عضوية الغرفة.' },

        // --- General ---
        { id: 's55', category: 'general', icon: Zap, title: 'كهرباء وماء', description: 'توصيل الخدمات.' },
        { id: 's56', category: 'general', icon: FileCheck, title: 'براءة ذمة', description: 'براءة ذمة كهرباء.' },
        { id: 's57', category: 'general', icon: Printer, title: 'طباعة', description: 'خدمات الطباعة.' },
        { id: 's58', category: 'general', icon: Clock, title: 'خدمة VIP', description: 'تخليص سريع.' },
        { id: 's59', category: 'general', icon: Users, title: 'خدمات المندوب', description: 'عقود سنوية.' },

        // --- New Services (60-80) ---
        { id: 's60', category: 'companies', icon: Building2, title: 'رخصة تاجر', description: 'للعمل من المنزل.' },
        { id: 's61', category: 'municipality', icon: Home, title: 'تقييم عقاري', description: 'شهادة تقييم.' },
        { id: 's62', category: 'legal', icon: FileSignature, title: 'إلغاء وكالة', description: 'عزل وكيل.' },
        { id: 's63', category: 'finance', icon: Calculator, title: 'استرداد ضريبة', description: 'استرجاع VAT.' },
        { id: 's64', category: 'labour', icon: Users, title: 'تصريح حدث', description: 'عمل للأحداث.' },
        { id: 's65', category: 'municipality', icon: Car, title: 'تصريح أغذية', description: 'سيارة نقل أغذية.' },
        { id: 's66', category: 'companies', icon: Building2, title: 'تنظيم فعاليات', description: 'رخصة فعاليات.' },
        { id: 's67', category: 'legal', icon: Gavel, title: 'تسجيل قضية', description: 'عمالية أو تجارية.' },
        { id: 's68', category: 'legal', icon: Globe, title: 'تصديق فواتير', description: 'تجارة خارجية.' },
        { id: 's69', category: 'id_medical', icon: CreditCard, title: 'تحديث بيانات', description: 'تحديث الهوية.' },
        { id: 's70', category: 'traffic', icon: ShieldCheck, title: 'شهادة فقدان', description: 'فقدان مستندات.' },
        { id: 's71', category: 'companies', icon: Briefcase, title: 'علامة تجارية', description: 'تسجيل Trademark.' },
        { id: 's72', category: 'legal', icon: FileText, title: 'إقرار مديونية', description: 'توثيق دين.' },
        { id: 's73', category: 'municipality', icon: MapPin, title: 'تصريح مواقف', description: 'حجز موقف.' },
        { id: 's74', category: 'labour', icon: UserPlus, title: 'عمل حر', description: 'تصريح فري لانس.' },
        { id: 's75', category: 'visitors', icon: Plane, title: 'تأشيرة زيارة', description: 'تأشيرات زيارة لجميع الجنسيات' },
        { id: 's76', category: 'id_medical', icon: Stethoscope, title: 'ترخيص مهني', description: 'أطباء وتمريض.' },
        { id: 's77', category: 'traffic', icon: Car, title: 'رخصة دولية', description: 'قيادة دولية.' },
        { id: 's78', category: 'companies', icon: Package, title: 'كود جمركي', description: 'رمز مستورد.' },
        { id: 's79', category: 'companies', icon: FileCheck, title: 'شهادة منشأ', description: 'تصدير بضائع.' },
        { id: 's80', category: 'general', icon: Star, title: 'باقة تسهيل', description: 'تأسيس شامل.' },
      ],
    },
    about: {
      title: 'آسيا لخدمات رجال الاعمال',
      subtitle: 'من نحن',
      description1: 'آسيا لخدمات رجال الأعمال مكتب معتمد في مجال تخليص المعاملات وتسهيل الأعمال في عجمان وكافة الامارات نعمل كجسر وصل بين الشركات والافراد والمقيمين مع الجهات الحكومية لضمان سير المعاملات بسلاسة وامتثال تام',
      description2: '',
      // ✅ تم إفراغ الإحصائيات هنا
      stats: [],
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'تفضل بزيارة مكتبنا أو أرسل لنا رسالة',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        message: 'رسالتك',
        submit: 'إرسال الرسالة',
      },
      info: {
        addressLabel: 'موقعنا',
        address: 'عجمان، الجرف 2، خلف سمايل هايبرماركت',
        phoneLabel: 'اتصل بنا',
        emailLabel: 'راسلنا',
      },
    },
    footer: {
      company: 'آسيا لخدمات رجال الاعمال',
      description: 'بوابتك لخدمات حكومية سلسة في الإمارات العربية المتحدة',
      rights: '© 2025 آسيا لخدمات رجال الاعمال. جميع الحقوق محفوظة',
    },
  },
};