import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { APP_CONTENT } from '../constants'; 

interface HeroProps {
  content: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  onCtaClick: () => void;
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ content, onCtaClick, onContactClick }) => {
  const isAr = content.ctaSecondary === 'تواصل معنا';

  useEffect(() => {
    if (!document.getElementById('en-font-outfit')) {
      const link = document.createElement('link');
      link.id = 'en-font-outfit';
      link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;800&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, []);

  const fontStyle = {
    fontFamily: isAr ? 'inherit' : '"Outfit", sans-serif',
  };

  const startSide = isAr ? 'right' : 'left'; 
  const endSide = isAr ? 'left' : 'right';

  const allServices = useMemo(() => {
    const arItems = APP_CONTENT?.['ar']?.services?.items || [];
    const enItems = APP_CONTENT?.['en']?.services?.items || [];

    return arItems.slice(0, 15).map((item: any, index: number) => ({
      id: item.id,
      titleAr: item.title,
      titleEn: enItems[index]?.title || item.title,
      icon: item.icon,
      color: index % 4 === 0 ? "bg-blue-100 text-blue-600" :
             index % 4 === 1 ? "bg-yellow-100 text-yellow-600" :
             index % 4 === 2 ? "bg-green-100 text-green-600" :
             "bg-purple-100 text-purple-600"
    }));
  }, []);

  const govLogos = useMemo(() => [
    "/LOGO/tasheel.png", "/LOGO/ameer.png", "/LOGO/icp.png", "/LOGO/goa.png",
    "/LOGO/Dubai-Municipality.png", "/LOGO/Makani.png", "/LOGO/Etihad-Water-and-Electricity-.png",
    "/LOGO/Visit-Ajman.png", "/LOGO/Department-of-Finance-Ajman.png", "/LOGO/Municipality-and-Planning-Department--Ajman.png",
    "/LOGO/Department-Of-Human-Resources-Ajman.png", "/LOGO/mohre.png", "/LOGO/Police-GHQ.png",
    "/LOGO/Tawasul-171.png", "/LOGO/Emirates-Transport.png", "/LOGO/Abu-Dhabi-Chamber.png",
    "/LOGO/Abu-Dhabi-National-Insurance-Company.png", "/LOGO/Emirates-Red-Crescent.png", "/LOGO/Dewa-Vertical.png",
    "/LOGO/Dubai-Health.png", "/LOGO/Islamic-Affairs.png", "/LOGO/UAE-MOEdu.png",
    "/LOGO/Government-of-Sharjah.png", "/LOGO/UAE-Pass.png", "/LOGO/Emirates-Post-Group.png",
    "/LOGO/Financial.png", "/LOGO/Ajman-Chamber.png", "/LOGO/Emirates-Schools.png",
    "/LOGO/Emirates-Health-Services.png", "/LOGO/TAMM.png", "/LOGO/About-Abu-Dhabi-Distribution-Company.png",
    "/LOGO/Abu-Dhabi-Judicial-Department.png", "/LOGO/Smart-Dubai@4x.png", "/LOGO/Land-Department@4x.png",
    "/LOGO/Government-of-Dubai-Logo-Vertical@4x.png", "/LOGO/Abu-Dhabi-Police@4x.png", "/LOGO/sharjah-police.png",
    "/LOGO/sharjah-municipality.png", "/LOGO/dubai-police.png", "/LOGO/dubai-courts.png"
  ], []);

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [activeIndices, setActiveIndices] = useState([0, 5, 10]);

  useEffect(() => {
    const updateLogoIndex = (positionToUpdate: number) => {
      setActiveIndices(prevIndices => {
        const newIndices = [...prevIndices];
        let nextCandidate = (newIndices[positionToUpdate] + 1) % govLogos.length;
        while (newIndices.includes(nextCandidate)) {
          nextCandidate = (nextCandidate + 1) % govLogos.length;
        }
        newIndices[positionToUpdate] = nextCandidate;
        return newIndices;
      });
    };

    const serviceInterval = setInterval(() => setCurrentServiceIndex(prev => (prev + 1) % allServices.length), 3000);
    const t1 = setInterval(() => updateLogoIndex(0), 4000);
    const t2 = setInterval(() => updateLogoIndex(1), 5500);
    const t3 = setInterval(() => updateLogoIndex(2), 4800);

    return () => {
      clearInterval(serviceInterval);
      clearInterval(t1); clearInterval(t2); clearInterval(t3);
    };
  }, [govLogos.length, allServices.length]);

  const floatingAnimation = { y: [-10, 10, -10], rotate: [-2, 2, -2], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } };
  const floatingAnimationReverse = { y: [10, -10, 10], rotate: [2, -2, 2], transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 } };
  const floatingAnimationSlow = { y: [-5, 5, -5], rotate: [1, -1, 1], transition: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 } };
  const dragProps = { drag: true, dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 }, dragElastic: 0.2, whileHover: { scale: 1.1, cursor: 'grab', zIndex: 50 }, whileDrag: { scale: 1.2, cursor: 'grabbing', zIndex: 100 } };

  const layoutTransition = { type: "spring", stiffness: 70, damping: 20 };

  return (
    <section 
      className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-[#f8fafc] dark:bg-[#0b1121] transition-colors duration-500"
      dir={isAr ? 'rtl' : 'ltr'}
      style={{
        ...fontStyle,
        maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
      }}
    >
      <style>{`
        @keyframes shine-sweep {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        .shine-effect {
          position: absolute;
          top: 0; left: 0; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
          animation: shine-sweep 3s infinite;
        }
        .shine-effect-subtle {
          position: absolute;
          top: 0; left: 0; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.05) 50%, transparent 100%);
        }
        .dark .shine-effect-subtle {
           background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-darken dark:mix-blend-lighten"></div>
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/30 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"></div>
        <div className="absolute top-[-20%] right-[0%] w-[70%] h-[70%] rounded-full blur-[150px] bg-gradient-to-br from-[#204f89]/20 to-transparent dark:from-[#204f89]/30"></div>
        <div className="absolute bottom-[-20%] left-[0%] w-[70%] h-[70%] rounded-full blur-[150px] bg-gradient-to-tr from-[#f15a27]/10 to-transparent dark:from-[#f15a27]/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f8fafc] via-transparent to-transparent dark:from-[#0b1121] dark:via-transparent dark:to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-0">

        {/* === العمود الأول (النصوص) === */}
        <motion.div 
          layout 
          transition={layoutTransition}
          className={`order-2 lg:order-1 flex flex-col items-center lg:items-start text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}
        >

          <motion.div layout transition={layoutTransition} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4 lg:mb-6 inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-md">
            <span className="flex h-2.5 w-2.5 relative justify-center items-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f15a27] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#f15a27] to-orange-600"></span>
            </span>
            <span className="text-slate-700 dark:text-slate-300 text-xs font-bold tracking-wide">
              {isAr ? 'خيارك الأمثل لتخليص المعاملات' : 'Your Ideal Choice'}
            </span>
          </motion.div>

          <motion.h1 layout transition={layoutTransition} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 lg:mb-6 leading-tight tracking-tight whitespace-nowrap">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#204f89] to-[#f15a27] dark:from-white dark:via-[#204f89] dark:to-[#f15a27] pb-1 filter drop-shadow-sm">
              {content.title}
            </span>
          </motion.h1>

          <motion.p layout transition={layoutTransition} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-base sm:text-lg lg:text-lg text-slate-600 dark:text-slate-300 mb-6 lg:mb-8 max-w-xl leading-relaxed font-medium">
            {isAr ? 'دقة في الإجراءات • سرعة في الإنجاز • شفافية تامة' : 'Precision • Speed • Transparency'}
          </motion.p>

          <motion.div 
            layout 
            transition={layoutTransition}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start"
          >
            <motion.button 
              layout 
              onClick={onCtaClick} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3.5 bg-[#f15a27] text-white font-bold text-base rounded-xl overflow-hidden shadow-lg shadow-orange-500/20 outline-none focus:outline-none"
            >
               <div className="shine-effect"></div>
              <span className="relative z-20 flex items-center justify-center gap-2">
                {content.ctaPrimary}
                <ArrowRight size={18} className={`transition-transform duration-300 group-hover:translate-x-1 ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </span>
            </motion.button>

            <motion.button 
              layout 
              onClick={onContactClick} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white font-bold text-base rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm hover:shadow outline-none focus:outline-none overflow-hidden"
            >
               <div className="shine-effect-subtle group-hover:animate-[shine-sweep_1.5s_infinite]"></div>
              <span className="relative z-10">
                {content.ctaSecondary}
              </span>
            </motion.button>
          </motion.div>

        </motion.div>

        {/* === العمود الثاني (الكارت الزجاجي) === */}
        <motion.div 
           layout 
           transition={layoutTransition}
           className="order-1 lg:order-2 relative w-full h-[350px] lg:h-[500px] flex items-center justify-center pointer-events-none select-none overflow-visible"
        >
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative w-[500px] lg:w-full h-full flex items-center justify-center transform scale-[0.68] sm:scale-[0.8] lg:scale-100 origin-center">
                <motion.div
                  layout 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    layout: { duration: 0.6, type: "spring", bounce: 0.2 },
                    scale: { duration: 1, delay: 0.3 },
                    opacity: { duration: 1, delay: 0.3 }
                  }}
                  className="relative z-20 w-[340px] h-[400px] bg-white/10 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 dark:border-slate-700/30 shadow-2xl flex flex-col items-center justify-center p-6 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                  <div className="relative w-64 h-64 flex items-center justify-center mb-4">
                      <div className="absolute inset-0 bg-[#f15a27] rounded-full opacity-[0.03] blur-3xl"></div>
                      <img src="/LOGO/assialogo.png" alt="Asia Logo" className="relative z-10 w-full h-full object-contain drop-shadow-lg" />
                  </div>
                  <div className="w-full space-y-3 mt-2">
                      <div className="h-2.5 w-2/3 bg-slate-400/20 rounded-full mx-auto"></div>
                      <div className="h-2.5 w-1/2 bg-slate-400/20 rounded-full mx-auto"></div>
                      <div className="flex justify-center gap-4 mt-6">
                            <div className="h-10 w-10 rounded-xl bg-[#204f89]/10 flex items-center justify-center border border-[#204f89]/20">
                              <CheckCircle2 size={20} className="text-[#204f89] dark:text-blue-400" />
                          </div>
                            <div className="h-10 w-10 rounded-xl bg-[#f15a27]/10 flex items-center justify-center border border-[#f15a27]/20">
                              <FileText size={20} className="text-[#f15a27]" />
                          </div>
                      </div>
                  </div>
                </motion.div>

                {/* ✅ التعديلات الجديدة: */}

                {/* 1. شعار اليمين العلوي: خلفية مطابقة للرئيسي في الجوال */}
                <motion.div layout transition={layoutTransition} {...dragProps} animate={floatingAnimation} className={`absolute top-[5%] ${startSide}-[-18%] lg:${startSide}-[-5%] z-30 w-16 h-16 bg-white/10 dark:bg-slate-900/40 backdrop-blur-2xl border-white/20 lg:bg-white/60 lg:dark:bg-slate-800/60 lg:border-white/40 shadow-lg rounded-2xl border flex items-center justify-center p-2 overflow-hidden pointer-events-auto`}>
                    <AnimatePresence mode='wait'><motion.img key={activeIndices[0]} src={govLogos[activeIndices[0]]} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5 }} className="w-full h-full object-contain pointer-events-none" /></AnimatePresence>
                </motion.div>

                {/* 2. شعار اليمين السفلي: خلفية مطابقة للرئيسي في الجوال */}
                <motion.div layout transition={layoutTransition} {...dragProps} animate={floatingAnimationSlow} className={`absolute bottom-[25%] ${startSide}-[-22%] lg:${startSide}-[-8%] z-20 w-14 h-14 bg-white/10 dark:bg-slate-900/40 backdrop-blur-2xl border-white/20 lg:bg-white/60 lg:dark:bg-slate-800/60 lg:border-white/40 shadow-lg rounded-2xl border flex items-center justify-center p-2 overflow-hidden pointer-events-auto`}>
                    <AnimatePresence mode='wait'><motion.img key={activeIndices[1]} src={govLogos[activeIndices[1]]} initial={{ opacity: 0, rotate: -10 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 10 }} transition={{ duration: 0.5 }} className="w-full h-full object-contain pointer-events-none" /></AnimatePresence>
                </motion.div>

                 {/* 3. الشعار الأيسر: خلفية مطابقة للرئيسي في الجوال */}
                 <motion.div layout transition={layoutTransition} {...dragProps} animate={floatingAnimationReverse} className={`absolute top-[15%] ${endSide}-[-18%] lg:${endSide}-[-5%] z-10 w-12 h-12 bg-white/10 dark:bg-slate-900/40 backdrop-blur-2xl border-white/20 lg:bg-white/50 lg:dark:bg-slate-800/50 lg:border-white/30 shadow-md rounded-xl border flex items-center justify-center p-2 overflow-hidden pointer-events-auto`}>
                    <AnimatePresence mode='wait'><motion.img key={activeIndices[2]} src={govLogos[activeIndices[2]]} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }} className="w-full h-full object-contain pointer-events-none" /></AnimatePresence>
                </motion.div>

                {/* 4. زر تم الإنجاز: تعديل الموقع (-14%) والميلان (-6) */}
                <motion.div layout transition={layoutTransition} {...dragProps} animate={floatingAnimationReverse} className={`absolute bottom-[-25%] lg:bottom-[10%] ${endSide}-[-14%] lg:${endSide}-[-5%] -rotate-6 lg:rotate-0 z-30 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl border border-white/40 shadow-lg flex items-center justify-center gap-2 pointer-events-auto`}>
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{isAr ? 'تم الإنجاز' : 'Completed'}</span>
                </motion.div>

                {/* 5. بطاقة الخدمات: */}
                <div className={`absolute top-[65%] lg:top-[40%] ${endSide}-[-18%] -rotate-6 lg:rotate-0 z-40 pointer-events-auto transition-all duration-700`}>
                   <AnimatePresence mode='wait'>
                      <motion.div {...dragProps} key={currentServiceIndex} initial={{ opacity: 0, x: isAr ? -20 : 20, scale: 0.9 }} animate={{ scale: 1, x: 0, opacity: 1 }} exit={{ opacity: 0, x: isAr ? 20 : -20, scale: 0.9 }} transition={{ duration: 0.5 }} className="flex items-center gap-3 bg-white/10 dark:bg-slate-900/40 backdrop-blur-2xl lg:bg-white/80 lg:dark:bg-slate-800/80 p-3 pr-6 rounded-2xl border border-white/20 dark:border-slate-700/30 lg:border-white/40 shadow-xl">
                         <div className={`p-2 rounded-xl shadow-sm ${allServices[currentServiceIndex].color}`}>{React.createElement(allServices[currentServiceIndex].icon, { size: 20 })}</div>
                         <div className="flex flex-col text-start">
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{isAr ? 'خـدمـات' : 'Featured Service'}</span>
                            <span className="text-sm font-bold text-slate-800 dark:text-white whitespace-nowrap">{isAr ? allServices[currentServiceIndex].titleAr : allServices[currentServiceIndex].titleEn}</span>
                         </div>
                      </motion.div>
                   </AnimatePresence>
                </div>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;