import React, { useState, useEffect } from 'react';
import { Language, View } from '../types';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// شعار واتساب
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.113 1.588 5.911L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  view: View;
  setView: (v: View) => void;
  darkMode: boolean;
  setDarkMode: (d: boolean) => void;
  content: {
    home: string;
    services: string;
    about: string;
    contact: string;
    langLabel: string;
  };
}

const Navbar: React.FC<NavbarProps> = ({ 
  lang, 
  setLang, 
  view, 
  setView, 
  darkMode, 
  setDarkMode, 
  content 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAr = lang === 'ar';

  // ✅ تحميل الخطوط (Cairo للعربي و Outfit للإنجليزي) عند بدء التشغيل
  useEffect(() => {
    // تحميل خط Outfit
    if (!document.getElementById('font-outfit')) {
      const link = document.createElement('link');
      link.id = 'font-outfit';
      link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;800&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    // تحميل خط Cairo (للغة العربية)
    if (!document.getElementById('font-cairo')) {
      const link = document.createElement('link');
      link.id = 'font-cairo';
      link.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;700;800&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, []);

  const navItems: { id: View; label: string }[] = [
    { id: 'home', label: content.home },
    { id: 'services', label: content.services },
    { id: 'about', label: content.about },
    { id: 'contact', label: content.contact },
  ];

  const handleLangToggle = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  // ✅ تطبيق الخط المناسب: Cairo إذا عربي، Outfit إذا إنجليزي
  const fontStyle = {
    fontFamily: isAr ? '"Cairo", sans-serif' : '"Outfit", sans-serif',
  };

  // ✅ تخصيص خط زر اللغة (عكس لغة الموقع)
  // إذا الموقع إنجليزي، الزر مكتوب "العربية" -> نستخدم Cairo
  // إذا الموقع عربي، الزر مكتوب "English" -> نستخدم Outfit
  const langButtonFontStyle = {
    fontFamily: isAr ? '"Outfit", sans-serif' : '"Cairo", sans-serif',
  };

  const Logo = () => (
    <motion.div 
      className="flex items-center cursor-pointer select-none" 
      onClick={() => setView('home')}
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }} 
    >
      <img 
        src="/logo.png" 
        alt="Asia Business Services" 
        className="h-11 md:h-14 w-auto object-contain drop-shadow-sm"
      />
    </motion.div>
  );

  return (
    <nav 
      dir="rtl" 
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0b1121]/80 backdrop-blur-lg border-b border-slate-200/30 dark:border-slate-800/50 shadow-sm transition-colors duration-300"
      style={fontStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* 1. اللوغو */}
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>

          {/* 2. روابط الوسط */}
          <div className={`hidden md:flex items-center gap-1 ${isAr ? 'flex-row' : 'flex-row-reverse'}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id)}
                className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full group ${
                  view === item.id 
                    ? 'text-[#f15a27]' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#f15a27] dark:hover:text-[#f15a27]'
                }`}
              >
                {item.label}
                {view === item.id && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute bottom-1.5 left-0 right-0 mx-auto w-1/2 h-0.5 bg-[#f15a27] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* 3. الأزرار الجانبية */}
          <div className="hidden md:flex items-center gap-3">
             {/* زر اللغة - تم ضبط الخط هنا */}
            <button
              onClick={handleLangToggle}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#f15a27] hover:text-white dark:hover:bg-[#f15a27] transition-all duration-300 text-sm font-bold shadow-sm"
            >
              <Globe size={16} />
              {/* ✅ تطبيق خط خاص للنص داخل الزر */}
              <span style={langButtonFontStyle}>{content.langLabel}</span>
            </button>

            {/* زر الثيم */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-slate-500 hover:text-[#f15a27] hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* فاصل */}
            <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 mx-1"></div>

            {/* خريطة */}
            <a
              href="https://maps.app.goo.gl/hQzxyPezuXoHkLKU8"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              title="Location"
            >
               <img src="/LOGO/google-map-icon.png" alt="Google Maps" className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" />
            </a>

            {/* واتساب */}
            <a
              href="https://wa.me/971508433999"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform" />
            </a>

          </div>

          {/* زر القائمة للموبايل */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 dark:text-white hover:text-[#f15a27] p-2 transition-colors"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
             <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-[#f15a27]"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الموبايل */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-[#0b1121]/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden shadow-lg"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setView(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-start px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    view === item.id 
                      ? 'bg-[#f15a27]/10 text-[#f15a27]' 
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-3">
                 <button
                    onClick={() => {
                        handleLangToggle();
                        setMobileMenuOpen(false);
                    }}
                    className="col-span-2 flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    <Globe size={18} />
                    {/* ✅ تطبيق الخط هنا أيضاً في الموبايل */}
                    <span style={langButtonFontStyle}>{content.langLabel}</span>
                  </button>

                  <a
                    href="https://wa.me/971508433999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366]/10 text-[#25D366] rounded-xl font-bold hover:bg-[#25D366]/20 transition-colors"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    WhatsApp
                  </a>

                  <a
                    href="https://maps.app.goo.gl/hQzxyPezuXoHkLKU8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl font-bold hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    <img src="/LOGO/google-map-icon.png" alt="Map" className="w-5 h-5 object-contain" />
                    Map
                  </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;