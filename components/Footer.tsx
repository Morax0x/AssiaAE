import React, { useState, useEffect } from 'react';
import { Instagram, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { View } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface FooterProps {
  content: {
    description: string;
    rights: string;
  };
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  onNavClick: (view: View) => void;
  lang: string;
}

const Footer: React.FC<FooterProps> = ({ content, nav, onNavClick, lang }) => {
  const isAr = lang === 'ar';
  const [isOpen, setIsOpen] = useState(false);
  const [statusText, setStatusText] = useState('');

  useEffect(() => {
    const checkBusinessStatus = () => {
      const now = new Date().toLocaleString("en-US", {timeZone: "Asia/Dubai"});
      const uaeDate = new Date(now);
      const day = uaeDate.getDay(); 
      const hour = uaeDate.getHours(); 
      const isWorkingDay = day >= 1 && day <= 6;
      const isWorkingHour = hour >= 9 && hour < 20;

      if (isWorkingDay && isWorkingHour) {
        setIsOpen(true);
        setStatusText(isAr ? 'مفتوح الآن' : 'Open Now');
      } else {
        setIsOpen(false);
        if (day === 0) setStatusText(isAr ? 'يفتح الاثنين 9:00 ص' : 'Opens Mon 9:00 AM');
        else if (day === 6 && hour >= 20) setStatusText(isAr ? 'يفتح الاثنين 9:00 ص' : 'Opens Mon 9:00 AM');
        else if (hour < 9) setStatusText(isAr ? 'يفتح اليوم 9:00 ص' : 'Opens Today 9:00 AM');
        else setStatusText(isAr ? 'يفتح غداً 9:00 ص' : 'Opens Tomorrow 9:00 AM');
      }
    };
    checkBusinessStatus();
    const interval = setInterval(checkBusinessStatus, 60000);
    return () => clearInterval(interval);
  }, [isAr]);

  // ✅ مكون الأيقونات الجديد: حركة ناعمة بدون خلفية بيضاء
  const SocialLink = ({ href, icon: Icon, colorClass, delay }: any) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: delay, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ 
        scale: 1.2, 
        rotate: 10,
        // ❌ تم إزالة الخلفية البيضاء من هنا
        transition: { type: "spring", stiffness: 300, damping: 15 }
      }}
      whileTap={{ scale: 0.9 }}
      className={`w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 shadow-lg backdrop-blur-sm border border-slate-700/50 ${colorClass}`}
    >
      <Icon size={22} />
    </motion.a>
  );

  const WhatsAppIcon = ({size}: {size:number}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.113 1.588 5.911L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );

  return (
    // ✅ تم تقليل الـ padding-bottom هنا
    <footer className="bg-[#0f172a] text-slate-300 py-8 md:py-12 border-t border-slate-800 relative overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>

       {/* خلفيات متحركة ناعمة */}
       <motion.div 
         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#204f89]/20 to-transparent pointer-events-none"
       ></motion.div>

       <motion.div 
         animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f15a27]/10 to-transparent pointer-events-none"
       ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <AnimatePresence mode="wait">
            <motion.div 
              key={lang} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              // ✅ تم تقليل المسافات للجوال (gap-8)
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
            >

                {/* 1. معلومات الشركة */}
                <div>
                    <div className="mb-6">
                    <motion.img 
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        src="/logo.png" 
                        alt="Asia Business Services" 
                        className="h-16 w-auto object-contain cursor-pointer"
                        onClick={() => onNavClick('home')}
                        onError={(e) => {e.currentTarget.style.display='none'}} 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    />
                    </div>
                    <p className="text-sm leading-relaxed mb-6 opacity-80 text-slate-400">
                      {content.description}
                    </p>

                    {/* ✅ تم استبدال الأيقونات القديمة بالمكون الجديد */}
                    <div className="flex gap-4">
                      <SocialLink 
                        href="https://www.instagram.com/assiia.ae/" 
                        icon={Instagram} 
                        colorClass="hover:text-pink-500 hover:border-pink-500/50" 
                        delay={0.1} 
                      />
                      <SocialLink 
                        href="https://wa.me/971508433999" 
                        icon={WhatsAppIcon} 
                        colorClass="hover:text-green-500 hover:border-green-500/50" 
                        delay={0.2} 
                      />
                      <SocialLink 
                        href="https://maps.google.com/maps?q=25.40350210959637,55.49586574714605&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                        icon={MapPin} 
                        colorClass="hover:text-orange-500 hover:border-orange-500/50" 
                        delay={0.3} 
                      />
                    </div>
                </div>

                {/* 2. روابط سريعة */}
                <div>
                    <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b-2 border-[#f15a27] pb-2 inline-block">
                    {isAr ? 'روابط سريعة' : 'Quick Links'}
                    </h3>
                    <ul className="space-y-3 text-sm">
                      {Object.entries(nav).map(([key, value], idx) => {
                         // ✅ فلترة لإزالة "English" تماماً
                         const lowerValue = String(value).toLowerCase();
                         const lowerKey = String(key).toLowerCase();
                         if (
                           lowerKey.includes('english') || 
                           lowerKey.includes('lang') || 
                           lowerValue.includes('english') || 
                           lowerValue.includes('العربية') ||
                           (lowerValue.includes('en') && lowerValue.length < 4)
                         ) return null;

                         return (
                           <li key={key}>
                             <motion.button 
                                whileHover={{ x: isAr ? -5 : 5, color: "#f15a27" }}
                                onClick={() => onNavClick(key as View)} 
                                className="hover:text-[#f15a27] transition-colors duration-200 flex items-center gap-2 text-slate-400"
                              >
                                <span>•</span> {value}
                             </motion.button>
                           </li>
                         );
                      })}
                    </ul>
                </div>

                {/* 3. تواصل معنا */}
                <div>
                    <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b-2 border-[#f15a27] pb-2 inline-block">
                    {isAr ? 'تواصل معنا' : 'Contact Us'}
                    </h3>
                    <ul className="space-y-5 text-sm">
                    <li className="flex items-start gap-3">
                        <a href="https://maps.google.com/maps?q=25.40350210959637,55.49586574714605&t=&z=17&ie=UTF8&iwloc=&output=embed" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 hover:bg-slate-800/50 p-2 -m-2 rounded-lg transition-colors duration-200">
                        <MapPin size={20} className="text-[#f15a27] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                        <span className="leading-relaxed text-slate-400 group-hover:text-white transition-colors duration-200">
                            {isAr ? 'عجمان، الجرف 2، خلف سمايل هايبرماركت، الإمارات' : 'Al Jurf 2, Behind Smile Hypermarket, Ajman, UAE'}
                        </span>
                        </a>
                    </li>
                    <li className="flex items-center gap-3">
                        <Phone size={20} className="text-[#f15a27] shrink-0" />
                        <a href="tel:+971508433999" dir="ltr" className="hover:text-white transition-colors duration-200 text-slate-400 font-medium">+971 50 843 3999</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail size={20} className="text-[#f15a27] shrink-0" />
                        <a href="mailto:assia_ae@yahoo.com" className="hover:text-white transition-colors duration-200 text-slate-400">assia_ae@yahoo.com</a>
                    </li>
                    </ul>
                </div>

                {/* 4. ساعات العمل */}
                <div>
                    <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b-2 border-[#f15a27] pb-2 inline-block">
                    {isAr ? 'ساعات العمل' : 'Working Hours'}
                    </h3>
                    <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 relative overflow-hidden group hover:border-[#f15a27]/30 transition-colors duration-200">
                        <Clock size={20} className="text-[#f15a27] shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200" />
                        <div>
                        <p className="font-bold text-white mb-1">
                            {isAr ? 'من الاثنين إلى السبت' : 'Mon - Sat'}
                        </p>
                        <p className="text-slate-400 font-medium text-xs mb-3" dir="ltr">
                            {isAr ? '9:00 صباحاً - 8:00 مساءً' : '9:00 AM - 8:00 PM'}
                        </p>
                        <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-bold transition-colors duration-500 border ${isOpen ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                            <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                            {statusText}
                        </div>
                        </div>
                    </li>
                    <li className="flex items-center gap-3 opacity-50 px-3 text-slate-500">
                        <div className="w-5 flex justify-center"><span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span></div>
                        <div className="flex justify-between w-full text-xs font-medium">
                        <span>{isAr ? 'الأحد' : 'Sunday'}</span>
                        <span>{isAr ? 'مغلق' : 'Closed'}</span>
                        </div>
                    </li>
                    </ul>
                </div>

            </motion.div>
        </AnimatePresence>

        {/* القسم السفلي: حقوق فقط */}
        <motion.div 
            key={`${lang}-copyright`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            // ✅ تم تقليل الهوامش العلوية والسفلية (mt-8, pb-4)
            className="border-t border-slate-800 mt-8 pt-6 pb-4 flex justify-center items-center"
        >
          <p className="text-slate-500 text-sm hover:text-slate-300 transition-colors duration-200 text-center font-medium">
            {isAr 
              ? `© ${new Date().getFullYear()} آسيا لخدمات رجال الأعمال. جميع الحقوق محفوظة`
              : `© ${new Date().getFullYear()} Assia Business Services All rights reserved`
            }
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;