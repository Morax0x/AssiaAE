// types.ts
import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'ar';
export type View = 'home' | 'services' | 'about' | 'contact';

// تعريف هيكل تفاصيل الخدمة (من ملف constants)
export interface ServiceDetail {
  id: string;
  authority: string;
  fullDescriptionAr: string;
  fullDescriptionEn: string;
  requiredDocumentsAr: string[];
  requiredDocumentsEn: string[];
  costBreakdown: { itemAr: string; itemEn: string; fee: string }[];
}

// تعريف العنصر الأساسي في القائمة
export interface ServiceItem {
  id: string;
  category: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

// الكائن المدمج الذي نستخدمه في الصفحات (يجمع الاثنين)
export interface RichServiceItem extends ServiceItem {
  authority: string;
  fullDescriptionAr: string;
  fullDescriptionEn: string;
  requiredDocumentsAr: string[];
  requiredDocumentsEn: string[];
  costBreakdown: { itemAr: string; itemEn: string; fee: string }[];
}

// تعريف محتوى النصوص
export interface Content {
  en: LanguageContent;
  ar: LanguageContent;
}

export interface LanguageContent {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    langLabel: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  trust: {
    title: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  about: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    stats: { label: string; value: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
    info: {
      addressLabel: string;
      address: string;
      phoneLabel: string;
      emailLabel: string;
    };
  };
  footer: {
    company: string;
    description: string;
    rights: string;
  };
}