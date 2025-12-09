import React from 'react';
import { ArrowLeft, CheckCircle2, DollarSign, FileText, ListChecks, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// تحديث الواجهة لتشمل الحقول العربية والإنجليزية
interface RichServiceItem {
    id: string;
    title: string; // العنوان الافتراضي
    description: string;
    icon: React.FC<any>;
    category: string;

    // الحقول الجديدة التي تأتي من App.tsx
    titleAr?: string;
    titleEn?: string;
    authorityAr?: string;
    authorityEn?: string;

    fullDescriptionAr: string;
    fullDescriptionEn: string;
    requiredDocumentsAr: string[];
    requiredDocumentsEn: string[];
    costBreakdown: { itemAr: string; itemEn: string; feeAr: string; feeEn: string }[];
}

interface ServiceDetailsPageProps {
    item: RichServiceItem;
    onBack: () => void;
    lang: string;
}

const ServiceDetailsPage: React.FC<ServiceDetailsPageProps> = ({ item, onBack, lang }) => {
    const isAr = lang === 'ar';

    // تحديد النصوص بناءً على اللغة
    const displayTitle = isAr ? (item.titleAr || item.title) : (item.titleEn || item.title);
    const displayAuthority = isAr ? (item.authorityAr || 'جهة حكومية') : (item.authorityEn || 'Government Authority');
    const documents = isAr ? item.requiredDocumentsAr : item.requiredDocumentsEn;
    const fullDesc = isAr ? item.fullDescriptionAr : item.fullDescriptionEn;

    const documentsLabel = isAr ? 'الوثائق المطلوبة' : 'Required Documents';
    const costLabel = isAr ? 'التكلفة والرسوم' : 'Cost & Fees';

    const handleWhatsAppClick = () => {
        const phoneNumber = "971508433999"; 
        const message = isAr 
            ? `مرحباً، أنا مهتم بخدمة: (${displayTitle}). أرجو تزويدي بمزيد من التفاصيل.`
            : `Hello, I am interested in the service: (${displayTitle}). Please provide more details.`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const CurrencyLogo = () => (
        <img 
            src="/LOGO/Dirham.png" 
            alt={isAr ? "د.إ" : "AED"}
            className="h-4 w-auto object-contain mt-1.5" 
        />
    );

    const WhatsAppIconSvg = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.113 1.588 5.911L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
    );

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full py-12 md:py-16 bg-white dark:bg-slate-900 transition-colors duration-300 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-700"
            dir={isAr ? 'rtl' : 'ltr'}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* زر العودة */}
                <button 
                    onClick={onBack}
                    className="inline-flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-corporate-blue transition-all mb-8 text-lg font-medium group"
                >
                    <ArrowLeft size={24} className={`transition-transform group-hover:-translate-x-1 ${isAr ? 'rotate-180' : ''}`} />
                    {isAr ? 'العودة إلى قائمة الخدمات' : 'Back to Services List'}
                </button>

                {/* Header / Title */}
                <div className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-8">
                    <div className="w-16 h-16 bg-corporate-blue dark:bg-slate-700 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-900/10">
                        {item.icon && <item.icon size={32} />}
                    </div>
                    {/* العنوان - يتم عرضه بناء على اللغة */}
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                        {displayTitle}
                    </h1>
                    {/* الجهة المسؤولة - يتم عرضها بناء على اللغة */}
                    <p className="text-corporate-gold font-bold text-lg flex items-center gap-2">
                        {displayAuthority}
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-12">

                    {/* 1. الوصف */}
                    <div className="bg-slate-50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                        <h2 className="text-xl font-bold text-corporate-blue dark:text-white mb-4 flex items-center gap-2">
                            {isAr ? 'نظرة عامة' : 'Overview'}
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                            {fullDesc}
                        </p>
                    </div>

                    {/* 2. الوثائق */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                            <div className="p-2 bg-blue-100 dark:bg-slate-700 rounded-lg text-corporate-blue dark:text-corporate-gold">
                                <FileText size={24} />
                            </div>
                            {documentsLabel}
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {documents && documents.length > 0 ? (
                                documents.map((doc, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                                        <ListChecks size={20} className="text-green-500 mt-1 shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-200 font-medium">{doc}</span>
                                    </li>
                                ))
                            ) : (
                                <p className="opacity-70 italic col-span-2">{isAr ? 'يرجى التواصل لتحديد الوثائق.' : 'Please contact us to determine required documents.'}</p>
                            )}
                        </ul>
                    </div>

                    {/* 3. التكلفة */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                            <div className="p-2 bg-orange-100 dark:bg-slate-700 rounded-lg text-orange-600 dark:text-orange-400">
                                <DollarSign size={24} />
                            </div>
                            {costLabel}
                        </h2>
                        <div className="space-y-3 bg-slate-50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                            {item.costBreakdown && item.costBreakdown.length > 0 ? (
                                item.costBreakdown.map((cost, i) => (
                                    <div key={i} className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700 last:border-0">
                                        <span className="font-medium text-slate-700 dark:text-slate-300">{isAr ? cost.itemAr : cost.itemEn}</span>

                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-slate-900 dark:text-white text-lg" dir="ltr">
                                                {isAr ? cost.feeAr : cost.feeEn}
                                            </span>
                                            <CurrencyLogo />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="opacity-70 italic">{isAr ? 'يرجى التواصل لتقدير التكلفة.' : 'Please contact us for cost estimation.'}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* زر الواتساب */}
                <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 text-center">
                    <p className="text-lg text-slate-500 dark:text-slate-400 mb-6">
                        {isAr ? 'هل لديك استفسار أو ترغب في بدء المعاملة؟' : 'Have questions or ready to start?'}
                    </p>

                    <button
                        onClick={handleWhatsAppClick}
                        className="group relative inline-flex items-center justify-center gap-3 px-12 py-4 bg-slate-900 dark:bg-corporate-blue hover:bg-corporate-blue dark:hover:bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                        <WhatsAppIconSvg className="w-6 h-6 text-corporate-gold group-hover:text-white transition-colors" />
                        <span className="font-bold text-lg tracking-wide">
                            {isAr ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                        </span>
                        <ArrowRight size={20} className={`transition-transform duration-300 group-hover:translate-x-1 ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                    </button>
                </div>

            </div>
        </motion.div>
    );
};

export default ServiceDetailsPage;