import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GovernmentBarProps {
  content: {
    title: string;
  };
  lang: string;
}

const GovernmentBar: React.FC<GovernmentBarProps> = ({ content, lang }) => {

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const entities = useMemo(() => [
    { image: "/LOGO/tasheel.png", labelAr: "تسهيل", labelEn: "Tasheel" },
    { image: "/LOGO/ameer.png", labelAr: "آمر", labelEn: "Amer" },
    { image: "/LOGO/icp.png", labelAr: "الهوية والجنسية", labelEn: "ICP" },
    { image: "/LOGO/goa.png", labelAr: "اقتصادية عجمان", labelEn: "Ajman DED" },
    { image: "/LOGO/tt.png", labelAr: "كاتب العدل", labelEn: "Notary Public" },
    { image: "/LOGO/Dubai-Municipality.png", labelAr: "اقتصادية دبي", labelEn: "Dubai Economy" },
    { image: "/LOGO/Makani.png", labelAr: "مكاني", labelEn: "Makani" },
    { image: "/LOGO/Etihad-Water-and-Electricity-.png", labelAr: "الاتحاد للماء والكهرباء", labelEn: "Etihad WE" },
    { image: "/LOGO/Visit-Ajman.png", labelAr: "معاملات إمارة عجمان", labelEn: "Ajman Services" },
    { image: "/LOGO/Department-of-Finance-Ajman.png", labelAr: "دائرة المالية", labelEn: "Ajman Finance" },
    { image: "/LOGO/Municipality-and-Planning-Department--Ajman.png", labelAr: "دائرة البلدية والتخطيط", labelEn: "Ajman Municipality" },
    { image: "/LOGO/Department-Of-Human-Resources-Ajman.png", labelAr: "دائرة الموارد البشرية", labelEn: "Ajman HR" },
    { image: "/LOGO/mohre.png", labelAr: "الموارد البشرية", labelEn: "MOHRE" },
    { image: "/LOGO/Police-GHQ.png", labelAr: "خدمات المرور", labelEn: "Police GHQ" },
    { image: "/LOGO/Tawasul-171.png", labelAr: "الدعم الفني", labelEn: "Tawasul 171" },
    { image: "/LOGO/Emirates-Transport.png", labelAr: "مواصلات الإمارات", labelEn: "Emirates Transport" },
    { image: "/LOGO/Abu-Dhabi-Chamber.png", labelAr: "غرفة أبوظبي", labelEn: "AD Chamber" },
    { image: "/LOGO/Abu-Dhabi-National-Insurance-Company.png", labelAr: "أبوظبي للتأمين", labelEn: "ADNIC" },
    { image: "/LOGO/Emirates-Red-Crescent.png", labelAr: "الهلال الأحمر", labelEn: "Red Crescent" },
    { image: "/LOGO/Dewa-Vertical.png", labelAr: "ماء وكهرباء دبي", labelEn: "DEWA" },
    { image: "/LOGO/Dubai-Health.png", labelAr: "هيئة دبي للصحة", labelEn: "Dubai Health" },
    { image: "/LOGO/Islamic-Affairs.png", labelAr: "الأوقاف", labelEn: "Awqaf" },
    { image: "/LOGO/UAE-MOEdu.png", labelAr: "وزارة التربية والتعليم", labelEn: "Ministry of Education" },
    { image: "/LOGO/Government-of-Sharjah.png", labelAr: "حكومة الشارقة", labelEn: "Sharjah Gov" },
    { image: "/LOGO/UAE-Pass.png", labelAr: "الهوية الرقمية", labelEn: "UAE Pass" },
    { image: "/LOGO/Emirates-Post-Group.png", labelAr: "بريد الإمارات", labelEn: "Emirates Post" },
    { image: "/LOGO/Financial.png", labelAr: "الخدمات المالية", labelEn: "Financial Services" },
    { image: "/LOGO/Ajman-Chamber.png", labelAr: "غرفة عجمان", labelEn: "Ajman Chamber" },
    { image: "/LOGO/Emirates-Schools.png", labelAr: "مؤسسة التعليم", labelEn: "Emirates Schools" },
    { image: "/LOGO/Emirates-Health-Services.png", labelAr: "الإمارات للخدمات الصحية", labelEn: "EHS" },
    { image: "/LOGO/TAMM.png", labelAr: "تـم", labelEn: "TAMM" },
    { image: "/LOGO/About-Abu-Dhabi-Distribution-Company.png", labelAr: "أبوظبي للتوزيع", labelEn: "ADDC" },
    { image: "/LOGO/Abu-Dhabi-Judicial-Department.png", labelAr: "دائرة القضاء", labelEn: "Judicial Dept" },
    { image: "/LOGO/Smart-Dubai@4x.png", labelAr: "دبي الرقمية", labelEn: "Smart Dubai" },
    { image: "/LOGO/Land-Department@4x.png", labelAr: "عقود إيجاري", labelEn: "Land Dept" },
    { image: "/LOGO/Government-of-Dubai-Logo-Vertical@4x.png", labelAr: "خدمات دبي", labelEn: "Dubai Gov" },
    { image: "/LOGO/Abu-Dhabi-Police@4x.png", labelAr: "مرور دبي", labelEn: "Traffic Services" },
    { image: "/LOGO/sharjah-police.png", labelAr: "مرور الشارقة", labelEn: "Sharjah Police" },
    { image: "/LOGO/sharjah-municipality.png", labelAr: "بلدية الشارقة", labelEn: "Shj Municipality" },
    { image: "/LOGO/dubai-police.png", labelAr: "شرطة دبي", labelEn: "Dubai Police" },
    { image: "/LOGO/dubai-courts.png", labelAr: "محاكم دبي", labelEn: "Dubai Courts" },
  ], []);

  const marqueeStyle = `
    body { overflow-x: hidden; }
    @keyframes marquee-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee-scroll 180s linear infinite;
      will-change: transform;
    }
    .hover-pause:hover .animate-marquee,
    .hover-pause:active .animate-marquee {
      animation-play-state: paused;
    }
  `;

  const isRTL = lang === 'ar';

  const textAnimation = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 }
  };

  const layoutTransition = { type: "spring", stiffness: 70, damping: 20 };

  return (
    // التعديل هنا: خففنا الـ mt السالب ليكون آمناً على كل الشاشات
    // بدلاً من lg:-mt-32 وضعنا lg:-mt-12
    // إذا ما زالت تتداخل، اجعلها mt-0
    <section className="relative w-full py-4 z-40 -mt-6 lg:-mt-12 overflow-visible bg-transparent border-none outline-none shadow-none cursor-grab active:cursor-grabbing">
      <style>{marqueeStyle}</style>

      <div className="w-full px-4 border-none outline-none">

        <div className="relative w-full hover-pause border-none" dir="ltr">

          <div className="flex w-max gap-5 lg:gap-12 animate-marquee py-2"> 
            {[...entities, ...entities].map((item, idx) => {
              return (
                <motion.div 
                  layout 
                  transition={layoutTransition}
                  key={`${idx}-${item.labelEn}`} 
                  className="flex flex-col items-center gap-2 lg:gap-3 group flex-shrink-0 relative"
                  drag 
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  dragElastic={isMobile ? 0.2 : 1}
                  onDragStart={() => setDraggedIndex(idx)}
                  onDragEnd={() => setDraggedIndex(null)}
                  whileHover={{ scale: 1.1, cursor: 'grab', zIndex: 50 }}
                  whileDrag={{ scale: 1.3, cursor: 'grabbing', zIndex: 9999 }}
                >
                  <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 p-3 lg:p-4 select-none pointer-events-none hover:bg-white/40 dark:hover:bg-slate-700/40 border-none shadow-none ring-0">
                    <img 
                      src={item.image} 
                      alt={isRTL ? item.labelAr : item.labelEn}
                      className="w-full h-full object-contain select-none pointer-events-none drag-none drop-shadow-none"
                      style={{ userSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }}
                      draggable="false"
                      onError={(e) => { 
                        (e.target as HTMLImageElement).style.opacity = '0'; 
                      }}
                    />
                  </div>

                  <div className="h-[20px] flex items-center justify-center overflow-visible">
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={isRTL ? 'ar' : 'en'} 
                        variants={textAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                        className="text-[8px] lg:text-[11px] font-bold text-slate-600 dark:text-slate-300 transition-colors text-center max-w-[100px] lg:max-w-[120px] leading-tight select-none pointer-events-none mt-1 whitespace-nowrap"
                      >
                        {isRTL ? item.labelAr : item.labelEn}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentBar;