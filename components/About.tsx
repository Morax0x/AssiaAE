import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, Headphones, Award, Star } from 'lucide-react';

interface AboutProps {
  content: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    stats: { label: string; value: string }[];
  };
  summaryMode?: boolean;
}

// --- 1. قائمة الصور (ثابتة وموثوقة) ---
const heroImages = [
  "https://i.postimg.cc/XvLZJwRp/image.jpg", // 1. المكتب
  "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=1000", // 2. برج خليفة
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000", // 3. توقيع عقود
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000", // 4. مصافحة
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000", // 5. أبراج
];

// رابط الصورة الافتراضية
const defaultAvatar = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";

// --- 2. التقييمات (30 تقييم واقعي ومتنوع) ---
const fakeReviews = [
  // المجموعة 1: المواطنين (بدون صور غالباً)
  { nameAr: "محمد العلي", nameEn: "Mohammed Al Ali", rating: 5.0, commentAr: "خدمة ممتازة وسريعة جداً، أنصح بهم.", commentEn: "Excellent and very fast service, highly recommended.", avatar: defaultAvatar },
  { nameAr: "خالد البلوشي", nameEn: "Khalid Al Balushi", rating: 4.9, commentAr: "الأفضل في عجمان لتخليص المعاملات.", commentEn: "The best in Ajman for transaction clearing.", avatar: defaultAvatar },
  { nameAr: "أم فهد", nameEn: "Um Fahad", rating: 5.0, commentAr: "ثقة وأمانة في التعامل، شكراً جزيلاً.", commentEn: "Trust and honesty in dealing, thank you very much.", avatar: defaultAvatar },
  { nameAr: "عبدالله المهيري", nameEn: "Abdullah Al Muhairi", rating: 5.0, commentAr: "خدمة المندوب عندهم ممتازة وتريح البال.", commentEn: "Their PRO service is excellent and gives peace of mind.", avatar: defaultAvatar },
  { nameAr: "سلطان الشامسي", nameEn: "Sultan Al Shamsi", rating: 4.8, commentAr: "إجراءات تجديد الرخصة كانت سهلة جداً معكم.", commentEn: "License renewal procedures were very easy with you.", avatar: defaultAvatar },
  { nameAr: "فاطمة الكعبي", nameEn: "Fatima Al Kaabi", rating: 5.0, commentAr: "شكراً للموظف في الاستقبال ", commentEn: "Thanks to the receptionist for her patience.", avatar: defaultAvatar },
  { nameAr: "عمر الفطيم", nameEn: "Omar Al Futtaim", rating: 4.9, commentAr: "احترافية عالية في التعامل مع الشركات.", commentEn: "High professionalism in dealing with companies.", avatar: defaultAvatar },
  { nameAr: "عائشة النعيمي", nameEn: "Aisha Al Nuaimi", rating: 5.0, commentAr: "خلصوا لي معاملة الإقامة!", commentEn: "They finished my Golden Visa process in two days!", avatar: defaultAvatar },
  { nameAr: "سالم الكتبي", nameEn: "Salem Al Ketbi", rating: 4.8, commentAr: "تعامل راقي وأسعار منطقية.", commentEn: "Classy dealing and reasonable prices.", avatar: defaultAvatar },
  { nameAr: "نورة السويدي", nameEn: "Noura Al Suwaidi", rating: 5.0, commentAr: "دائماً أعتمد عليهم في معاملات الخدم", commentEn: "I always rely on them for domestic worker transactions.", avatar: defaultAvatar },
  { nameAr: "حمد المزروعي", nameEn: "Hamad Al Mazrouei", rating: 4.9, commentAr: "خبرة واضحة من تعاملهم.", commentEn: "Long market experience is evident from their dealing.", avatar: defaultAvatar },
  { nameAr: "هدى المطروشي", nameEn: "Huda Al Matroushi", rating: 5.0, commentAr: " ما قصروا", commentEn: "Real VIP service, they did a great job.", avatar: defaultAvatar },

  // المجموعة 2: العرب المقيمين (مصر، الأردن، سوريا، لبنان...)
  { nameAr: "مريم حسن", nameEn: "Mariam Hassan", rating: 4.9, commentAr: "أسعارهم مناسبة جداً مقارنة بالمكاتب الأخرى.", commentEn: "Their prices are very reasonable compared to other offices.", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { nameAr: "محمود درويش", nameEn: "Mahmoud Darwish", rating: 5.0, commentAr: "فريق العمل فاهم القوانين صح.", commentEn: "The team understands the laws correctly.", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { nameAr: "حسن المصري", nameEn: "Hassan Al Masri", rating: 4.8, commentAr: "أنقذوني من غرامات التأخير، شكراً لكم.", commentEn: "Saved me from delay fines, thank you.", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { nameAr: "علي رضا", nameEn: "Ali Reza", rating: 4.9, commentAr: "موقعهم ممتاز وخدمتهم سريعة.", commentEn: "Excellent location and fast service.", avatar: "https://randomuser.me/api/portraits/men/46.jpg" },

  // المجموعة 3: الغربيين والأجانب (UK, US, Europe)
  { nameAr: "سارة جونسون", nameEn: "Sarah Johnson", rating: 5.0, commentAr: "فريق محترف وتعامل راقي، شكراً لكم.", commentEn: "Professional team and classy dealing, thank you.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" },
  { nameAr: "جون سميث", nameEn: "John Smith", rating: 4.8, commentAr: "إجراءات الإقامة كانت سلسة جداً معهم.", commentEn: "Residency procedures were very smooth with them.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
  { nameAr: "إيلينا بيتروفا", nameEn: "Elena Petrova", rating: 5.0, commentAr: "ساعدوني في تأسيس شركتي الجديدة بسهولة.", commentEn: "Helped me setup my new company easily.", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
  { nameAr: "ديفيد ميلر", nameEn: "David Miller", rating: 4.9, commentAr: "تواصل ممتاز وتحديث مستمر لحالة الطلب.", commentEn: "Great communication and constant status updates.", avatar: "https://randomuser.me/api/portraits/men/11.jpg" },
  { nameAr: "روبرت براون", nameEn: "Robert Brown", rating: 5.0, commentAr: "أفضل خدمة", commentEn: "Best PRO service I've dealt with in Dubai.", avatar: "https://randomuser.me/api/portraits/men/52.jpg" },
  { nameAr: "ماريا جارسيا", nameEn: "Maria Garcia", rating: 4.8, commentAr: "لطفاء جداً ومتعاونين لأبعد حد.", commentEn: "Very kind and extremely helpful.", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
  { nameAr: "جيمس ويلسون", nameEn: "James Wilson", rating: 4.9, commentAr: "شرحوا لي كل الخطوات بوضوح.", commentEn: "They explained all steps clearly to me.", avatar: "https://randomuser.me/api/portraits/men/76.jpg" },

  // المجموعة 4: الآسيويين (الهند، باكستان، الفلبين، الصين)
  { nameAr: "راجيش كومار", nameEn: "Rajesh Kumar", rating: 5.0, commentAr: "ساعدوني في إصدار الرخصة التجارية بيوم واحد!", commentEn: "Helped me issue the trade license in just one day!", avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200" },
  { nameAr: "لي وي", nameEn: "Li Wei", rating: 5.0, commentAr: "شكرا لكم ", commentEn: "Quick solutions for visa problems.", avatar: "https://images.unsplash.com/photo-1543096222-72de739f7917?auto=format&fit=crop&q=80&w=200" },
  { nameAr: "جوي سانتوس", nameEn: "Joy Santos", rating: 5.0, commentAr: "الموظفين ودودين جداً وسريعين.", commentEn: "Staff are very friendly and fast.", avatar: "https://randomuser.me/api/portraits/women/90.jpg" },
  { nameAr: "سيد أحمد", nameEn: "Syed Ahmed", rating: 4.7, commentAr: "خدمة طباع ممتازة ودقيقة.", commentEn: "Excellent and accurate typing service.", avatar: "https://randomuser.me/api/portraits/men/86.jpg" },
  { nameAr: "بريا باتيل", nameEn: "Priya Patel", rating: 5.0, commentAr: "شكراً لكم على المساعدة في فيزا العائلة.", commentEn: "Thank you for helping with the family visa.", avatar: "https://randomuser.me/api/portraits/women/28.jpg" },
  { nameAr: "عثمان خان", nameEn: "Usman Khan", rating: 4.9, commentAr: "مكان واحد لكل الخدمات الحكومية.", commentEn: "One stop shop for all government services.", avatar: "https://randomuser.me/api/portraits/men/61.jpg" },
  { nameAr: "تشين يو", nameEn: "Chen Yu", rating: 4.8, commentAr: "كفاءة عالية في العمل.", commentEn: "High efficiency at work.", avatar: "https://randomuser.me/api/portraits/men/15.jpg" },
];

const About: React.FC<AboutProps> = ({ content, summaryMode }) => {
  const isAr = content.title.includes('آسيا') || content.title.includes('عن');

  // State
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);

  // 1. تقليب التقييمات
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % fakeReviews.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  // 2. تقليب الصور
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const currentReview = fakeReviews[currentReviewIndex];

  const features = [
    { 
      icon: Zap, 
      titleAr: "سرعة في الإنجاز", titleEn: "Speed in Completion", 
      descAr: "نضمن لك تخليص معاملاتك في أسرع وقت ممكن.", descEn: "We guarantee clearing your transactions in the fastest time possible." 
    },
    { 
      icon: ShieldCheck, 
      titleAr: "موثوقية وأمان", titleEn: "Reliability & Security", 
      descAr: "نتعامل مع وثائقك بسرية تامة واحترافية عالية.", descEn: "We handle your documents with complete confidentiality and high professionalism." 
    },
    { 
      icon: Headphones, 
      titleAr: "دعم مستمر", titleEn: "Continuous Support", 
      descAr: "فريقنا جاهز للرد على استفساراتك طوال أيام الأسبوع.", descEn: "Our team is ready to answer your inquiries throughout the week." 
    },
  ];

  const unifiedEntranceVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const textSwitchVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4, 
        ease: "easeOut",
        staggerChildren: 0.1 
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2 } 
    }
  };

  return (
    <section 
      className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden" 
      dir="ltr"
    >
      <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/50 dark:bg-orange-900/10 rounded-full blur-[120px] -ml-20 -mb-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* === 1. جانب الصورة === */}
          <motion.div 
            variants={unifiedEntranceVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700 group h-[400px] lg:h-[550px] bg-slate-200 dark:bg-slate-800">

               {/* عرض الصور بالتناوب */}
               <AnimatePresence mode="wait">
                <motion.img 
                  key={currentHeroImageIndex} 
                  src={heroImages[currentHeroImageIndex]} 
                  alt="UAE Business & Services" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0"
                />
               </AnimatePresence>

               {/* طبقة تظليل خفيفة */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>

               {/* بطاقة التقييم العائمة */}
               <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 h-auto min-h-[100px] z-20">
                 <AnimatePresence mode="wait">
                   <motion.div 
                     key={currentReviewIndex}
                     initial={{ opacity: 0, y: 20, scale: 0.95 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: -20, scale: 0.95 }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-lg border border-white/20 flex items-center justify-between gap-3 md:gap-4"
                     dir={isAr ? 'rtl' : 'ltr'}
                   >
                      <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-bold text-slate-900 dark:text-white">
                               {isAr ? currentReview.nameAr : currentReview.nameEn}
                            </p>
                            <div className="flex items-center gap-0.5 text-[#f15a27]">
                              <Star fill="currentColor" size={14} className="md:w-4 md:h-4" />
                              <span className="text-slate-800 dark:text-white font-bold ml-1 text-xs md:text-sm">{currentReview.rating.toFixed(1)}</span>
                            </div>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                            "{isAr ? currentReview.commentAr : currentReview.commentEn}"
                          </p>
                      </div>

                      {/* صورة العميل المتغيرة */}
                      <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-white dark:border-slate-700 shadow-sm overflow-hidden shrink-0 bg-gray-200">
                        <img 
                          src={currentReview.avatar} 
                          alt="Client"
                          className="w-full h-full object-cover"
                        />
                      </div>

                   </motion.div>
                 </AnimatePresence>
               </div>
            </div>

            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-16 h-16 md:w-24 md:h-24 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 dark:border-slate-700 z-30"
            >
               <Award size={28} className="text-[#f15a27] md:w-10 md:h-10" />
            </motion.div>

            <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-full h-full border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-[2rem] md:rounded-[3rem] -z-10"></div>
          </motion.div>


          {/* === 2. جانب النص === */}
          <div 
            dir={isAr ? 'rtl' : 'ltr'} 
            className="w-full order-1 lg:order-2"
          >
            <AnimatePresence mode="wait">
                <motion.div
                    key={isAr ? 'ar-content' : 'en-content'}
                    variants={textSwitchVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    exit="exit"
                >
                    <motion.div variants={unifiedEntranceVariant}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-600 animate-pulse"></span>
                        {content.subtitle}
                      </div>

                      <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 leading-tight">
                        {content.title}
                      </h2>

                      <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 md:mb-8">
                        {content.description1}
                      </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-3 md:gap-4 mb-8 md:mb-10">
                       {features.map((item, idx) => (
                         <motion.div 
                           key={idx}
                           variants={unifiedEntranceVariant}
                           className="flex items-center gap-4 md:gap-5 p-4 md:p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all group"
                         >
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-[#204f89] dark:text-blue-400 group-hover:bg-[#204f89] group-hover:text-white transition-colors shrink-0">
                               <item.icon size={22} className="md:w-[26px] md:h-[26px]" />
                            </div>
                            <div>
                               <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1">
                                 {isAr ? item.titleAr : item.titleEn}
                               </h4>
                               <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                 {isAr ? item.descAr : item.descEn}
                               </p>
                            </div>
                         </motion.div>
                       ))}
                    </div>

                    {!summaryMode && (
                      <motion.div variants={unifiedEntranceVariant} className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-slate-200 dark:border-slate-800">
                          {content.stats.map((stat, idx) => (
                             <div key={idx} className="text-center md:text-start">
                                <p className="text-2xl md:text-3xl font-black text-[#f15a27] mb-1">{stat.value}</p>
                                <p className="text--[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
                             </div>
                          ))}
                      </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;