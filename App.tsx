import React, { useState, useEffect } from 'react';
import { APP_CONTENT } from './constants';
import { ALL_SERVICE_DETAILS } from './data/service-details'; 
import { Language, View } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GovernmentBar from './components/GovernmentBar';
import ServiceDetailsPage from './components/ServiceDetailsPage';
import { motion, AnimatePresence } from 'framer-motion';

export interface RichServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.FC<any>;
  category: string;
  authority: string;
  fullDescriptionAr: string;
  fullDescriptionEn: string;
  requiredDocumentsAr: string[];
  requiredDocumentsEn: string[];
  costBreakdown: { itemAr: string; itemEn: string; fee: string }[];
}

function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [view, setView] = useState<View>('home');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedService, setSelectedService] = useState<RichServiceItem | null>(null);

  // تحديث اتجاه الصفحة والخطوط عند تغيير اللغة
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (lang === 'ar') {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-sans');
    } else {
      document.body.classList.add('font-sans');
      document.body.classList.remove('font-arabic');
    }
  }, [lang]);

  // تفعيل الوضع الليلي بالكلاسات
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // دالة التبديل (View Transition API)
  const handleThemeToggle = (e: any) => {
    // 1. التحقق من دعم المتصفح
    if (!(document as any).startViewTransition) {
      setDarkMode(!darkMode);
      return;
    }

    // 2. تحديد مركز الانطلاق
    const x = e?.clientX ?? window.innerWidth / 2;
    const y = e?.clientY ?? window.innerHeight / 2;

    // 3. حساب المسافة
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // 4. تجميد الشاشة
    const transition = (document as any).startViewTransition(() => {
      setDarkMode((prev) => !prev);
    });

    // 5. تشغيل الأنيميشن
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ],
        },
        {
          duration: 800,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const content = APP_CONTENT[lang];

  const handleNavClick = (newView: View) => {
    if (view === newView && !selectedService) return;
    setSelectedService(null);
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (item: any) => { 
    const id = typeof item === 'string' ? item : item.id;
    let basicInfo = APP_CONTENT['en'].services.items.find(i => i.id === id);
    if (!basicInfo) basicInfo = APP_CONTENT['ar'].services.items.find(i => i.id === id);
    const detailsInfo = ALL_SERVICE_DETAILS.find((d) => d.id === id);

    if (basicInfo && detailsInfo) {
       const currentLangBasicInfo = content.services.items.find(i => i.id === id) || basicInfo;
       const richItem = {
         ...currentLangBasicInfo,
         authority: detailsInfo.authorityAr,
         titleAr: detailsInfo.titleAr,
         titleEn: detailsInfo.titleEn,
         authorityAr: detailsInfo.authorityAr,
         authorityEn: detailsInfo.authorityEn,
         fullDescriptionAr: detailsInfo.fullDescriptionAr,
         fullDescriptionEn: detailsInfo.fullDescriptionEn,
         requiredDocumentsAr: detailsInfo.requiredDocumentsAr,
         requiredDocumentsEn: detailsInfo.requiredDocumentsEn,
         costBreakdown: detailsInfo.costBreakdown,
       } as RichServiceItem;

       setSelectedService(richItem);
       setView('services');
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToServices = () => {
    setSelectedService(null);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: "easeInOut" }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0f172a] overflow-x-hidden w-full relative">

      <style>{`
        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation: none;      
          mix-blend-mode: normal; 
        }

        ::view-transition-new(root) {
          z-index: 9999; 
        }

        ::view-transition-group(root) {
           animation-duration: 0s;
        }
      `}</style>

      <Navbar 
        lang={lang} 
        setLang={setLang} 
        view={view} 
        setView={handleNavClick} 
        darkMode={darkMode} 
        setDarkMode={handleThemeToggle} 
        content={content.nav} 
      />

      <main className="flex-grow pt-16 w-full">
        <AnimatePresence mode='wait'>

          {view === 'home' && (
            <motion.div 
              key="home"
              initial="initial" animate="animate" exit="exit" variants={pageVariants}
              className="w-full"
            >
              <Hero 
                content={content.hero} 
                onCtaClick={() => handleNavClick('services')} 
                onContactClick={() => handleNavClick('contact')} 
              />

              <GovernmentBar content={content.trust} lang={lang} />

              <Services 
                content={content.services} 
                limit={10} 
                onViewAll={() => handleNavClick('services')} 
                onSelectService={handleSelectService} 
                lang={lang} 
              />
              <About content={content.about} summaryMode />
            </motion.div>
          )}

          {view === 'services' && selectedService && (
            <motion.div 
              key="service-details" 
              initial="initial" animate="animate" exit="exit" variants={pageVariants}
              className="w-full"
            >
              <ServiceDetailsPage 
                item={selectedService} 
                onBack={handleBackToServices} 
                lang={lang} 
              />
            </motion.div>
          )}

          {view === 'services' && !selectedService && (
            <motion.div 
              key="services-list" 
              initial="initial" animate="animate" exit="exit" variants={pageVariants}
              className="w-full"
            >
              <Services 
                content={content.services} 
                onSelectService={handleSelectService} 
                lang={lang} 
              />
            </motion.div>
          )}

          {view === 'about' && (
            <motion.div 
              key="about" 
              initial="initial" animate="animate" exit="exit" variants={pageVariants}
              className="w-full"
            >
              <About content={content.about} />
            </motion.div>
          )}

          {view === 'contact' && (
            <motion.div 
              key="contact" 
              initial="initial" animate="animate" exit="exit" variants={pageVariants}
              className="w-full"
            >
              <Contact content={content.contact} />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      <Footer content={content.footer} nav={content.nav} onNavClick={handleNavClick} lang={lang} />
    </div>
  );
}

export default App;