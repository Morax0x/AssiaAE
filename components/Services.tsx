import React, { useState, useRef, useMemo } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import { Content } from '../types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { motion, AnimatePresence } from 'framer-motion';
import { ALL_SERVICE_DETAILS } from '../data/service-details';

interface RichServiceItem {
  id: string;
  title: string;
  description: string;
  titleAr?: string;
  titleEn?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  icon: React.FC<any>;
  category: string;
  authority: string;
  fullDescriptionAr: string;
  fullDescriptionEn: string;
  requiredDocumentsAr: string[];
  requiredDocumentsEn: string[];
  costBreakdown: { itemAr: string; itemEn: string; fee: string }[];
}

interface ServicesProps {
  content: Content['services'];
  limit?: number;
  onViewAll?: () => void;
  onSelectService?: (item: RichServiceItem) => void;
  lang?: string;
}

const mergeServiceData = (items: ServicesProps['content']['items']): RichServiceItem[] => {
  return items.map(item => {
    const details = ALL_SERVICE_DETAILS.find((detail: any) => detail.id === item.id);
    return {
      ...item,
      authority: details?.authority || 'N/A',
      fullDescriptionAr: details?.fullDescriptionAr || item.description,
      fullDescriptionEn: details?.fullDescriptionEn || item.description,
      requiredDocumentsAr: details?.requiredDocumentsAr || [],
      requiredDocumentsEn: details?.requiredDocumentsEn || [],
      costBreakdown: details?.costBreakdown || [],
      titleAr: details?.titleAr || item.title,
      titleEn: details?.titleEn || item.title,
      descriptionAr: details?.fullDescriptionAr || item.description,
      descriptionEn: details?.fullDescriptionEn || item.description,
    } as RichServiceItem;
  });
};

const Services: React.FC<ServicesProps> = ({ content, limit, onViewAll, onSelectService, lang = 'ar' }) => {
  const isHomePage = limit !== undefined;
  const isAr = lang === 'ar';

  const richItems = useMemo(() => mergeServiceData(content.items), [content.items]);

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; 
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(prev => prev === categoryId ? 'all' : categoryId);
  };

  const categories = useMemo(() => [
    { id: 'all', labelAr: 'الكل', labelEn: 'All' },
    { id: 'companies', labelAr: 'الشركات', labelEn: 'Companies' },
    { id: 'residency', labelAr: 'الإقامات', labelEn: 'Residency' },
    { id: 'golden', labelAr: 'الذهبية', labelEn: 'Golden Visa' },
    { id: 'labour', labelAr: 'تسهيل', labelEn: 'Labour' },
    { id: 'id_medical', labelAr: 'الهوية', labelEn: 'Emirates ID' },
    { id: 'traffic', labelAr: 'المرور', labelEn: 'Traffic' },
    { id: 'legal', labelAr: 'قانونية', labelEn: 'Legal' },
    { id: 'municipality', labelAr: 'البلدية', labelEn: 'Municipality' },
    { id: 'finance', labelAr: 'المالية', labelEn: 'Finance' },
    { id: 'visitors', labelAr: 'الزيارة', labelEn: 'Visit Visas' },
    { id: 'general', labelAr: 'عامة', labelEn: 'General' },
  ], []);

  const filteredItems = useMemo(() => {
    return richItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        (item.titleAr?.toLowerCase().includes(query) || '') || 
        (item.titleEn?.toLowerCase().includes(query) || '') || 
        item.title.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [richItems, activeCategory, searchQuery]);

  const pairs = useMemo(() => {
    const p = [];
    if (isHomePage) {
      for (let i = 0; i < richItems.length; i += 2) {
        p.push(richItems.slice(i, i + 2));
      }
    }
    return p;
  }, [richItems, isHomePage]);

  const cardVariants = {
    hover: { y: -5, transition: { duration: 0.3, ease: "easeInOut" } },
    tap: { scale: 0.98 }
  };

  return (
    <section className="pt-8 md:pt-12 pb-6 md:pb-8 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative group/section overflow-visible">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .swiper-visible { overflow: visible !important; }
        .swiper-slide:focus { outline: none !important; }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 leading-tight">
            {content.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {!isHomePage && (
          <div className="max-w-3xl mx-auto space-y-4 mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="relative group w-full z-20">
              <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-5 rtl:pr-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-corporate-blue transition-colors duration-300" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isAr ? "ابحث في الخدمات..." : "Search services..."}
                className="block w-full pl-12 rtl:pl-5 rtl:pr-12 pr-5 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md placeholder-slate-400 focus:outline-none focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue transition-all duration-300 text-slate-900 dark:text-white text-base outline-none"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 rtl:right-auto rtl:left-0 pr-5 rtl:pl-5 flex items-center text-slate-400 hover:text-red-500 transition-colors p-2 outline-none"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="relative w-full max-w-2xl mx-auto flex items-center gap-2">
              <button onClick={() => scroll(isAr ? 'right' : 'left')} className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-corporate-blue hover:border-corporate-blue transition-colors hidden md:flex shrink-0 outline-none focus:outline-none z-20">
                {isAr ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
              </button>

              <div ref={scrollContainerRef} className="flex-1 overflow-x-auto hide-scrollbar scroll-smooth px-1">
                <div className="flex gap-2 w-max py-2 px-1"> 
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className={`
                        shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative outline-none focus:outline-none
                        ${activeCategory === cat.id 
                          ? 'bg-corporate-blue text-white shadow-md transform scale-105' 
                          : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}
                      `}
                    >
                      {isAr ? cat.labelAr : cat.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={() => scroll(isAr ? 'left' : 'right')} className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-corporate-blue hover:border-corporate-blue transition-colors hidden md:flex shrink-0 outline-none focus:outline-none z-20">
                {isAr ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
              </button>
            </div>

            {(activeCategory !== 'all' || searchQuery) && (
              <div className="text-center animate-in fade-in zoom-in duration-300">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-slate-800 text-corporate-blue dark:text-blue-300 text-xs font-bold shadow-sm">
                    {isAr ? `النتائج: ${filteredItems.length}` : `Results: ${filteredItems.length}`}
                  </span>
              </div>
            )}
          </div>
        )}
      </div>

      {isHomePage ? (
        <div className="w-full px-4 md:px-12 relative z-10">
            <div className='relative'>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    speed={1000}
                    dir={isAr ? 'rtl' : 'ltr'} 
                    key={isAr ? 'rtl-swiper' : 'ltr-swiper'} 
                    onSwiper={(swiper) => { swiperRef.current = swiper; }}
                    autoplay={{
                        delay: 3000, 
                        disableOnInteraction: false, 
                        pauseOnMouseEnter: true,
                        reverseDirection: true,
                    }}
                    navigation={{ prevEl, nextEl }}
                    onInit={(swiper) => {
                        // @ts-ignore
                        swiper.params.navigation.prevEl = prevEl;
                        // @ts-ignore
                        swiper.params.navigation.nextEl = nextEl;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 }, 
                        768: { slidesPerView: 2 }, 
                        1024: { slidesPerView: 3 }, 
                        1600: { slidesPerView: 4 },
                    }}
                    // ✅ تم التعديل هنا: تقليل الـ padding للجوال وإبقاؤه للكمبيوتر
                    className="swiper-visible pb-10 pt-8 md:pb-16 md:pt-14 px-1 md:px-2"
                >
                    {pairs.map((pair, index) => (
                    <SwiperSlide key={index} className="h-auto">
                        {/* ✅ تم التعديل هنا: gap-4 للجوال و gap-8 للكمبيوتر */}
                        <div className="flex flex-col gap-4 md:gap-8 h-full" dir={isAr ? 'rtl' : 'ltr'}>
                        {pair.map((item) => (
                            <motion.div 
                            key={`${item.id}-${lang}`}
                            initial={{ opacity: 0, x: isAr ? -10 : 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}

                            onClick={() => onSelectService && onSelectService(item)}
                            variants={cardVariants}
                            whileHover="hover"
                            whileTap="tap"
                            // ✅ تم التعديل هنا: p-5 للجوال و p-8 للكمبيوتر، و min-h للجوال
                            className="bg-white dark:bg-slate-800 p-5 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex-1 hover:border-corporate-gold hover:shadow-xl transition-all duration-300 group flex items-start text-start gap-4 md:gap-5 select-none min-h-[150px] md:min-h-[180px] cursor-pointer outline-none focus:outline-none focus:ring-0 active:scale-95 relative z-10"
                            >
                            {/* ✅ تم التعديل هنا: تصغير حاوية الأيقونة للجوال */}
                            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-blue-50 dark:bg-slate-700 rounded-lg flex items-center justify-center text-corporate-gold group-hover:bg-corporate-gold group-hover:text-white transition-colors duration-300">
                                <item.icon size={28} className="w-6 h-6 md:w-auto md:h-auto" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-1 transition-all duration-300">
                                {isAr ? (item.titleAr || item.title) : (item.titleEn || item.title)}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 transition-all duration-300">
                                {isAr ? (item.descriptionAr || item.description) : (item.descriptionEn || item.description)}
                                </p>
                            </div>
                            </motion.div>
                        ))}
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>

                <button ref={(node) => setPrevEl(node)} className="absolute top-[50%] -translate-y-1/2 -left-2 md:-left-5 z-40 w-10 h-14 flex items-center justify-center rounded-md border border-slate-300/50 bg-white/90 backdrop-blur-sm dark:bg-slate-800/90 text-slate-500 hover:bg-corporate-gold hover:border-corporate-gold hover:text-white transition-all duration-300 hidden lg:flex outline-none focus:outline-none shadow-lg cursor-pointer">
                    <ChevronLeft size={28} />
                </button>
                <button ref={(node) => setNextEl(node)} className="absolute top-[50%] -translate-y-1/2 -right-2 md:-right-5 z-40 w-10 h-14 flex items-center justify-center rounded-md border border-slate-300/50 bg-white/90 backdrop-blur-sm dark:bg-slate-800/90 text-slate-500 hover:bg-corporate-gold hover:border-corporate-gold hover:text-white transition-all duration-300 hidden lg:flex outline-none focus:outline-none shadow-lg cursor-pointer">
                    <ChevronRight size={28} />
                </button>
            </div>

          <div className="text-center mt-8 md:mt-12">
            <motion.button 
              onClick={onViewAll}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-corporate-blue dark:bg-slate-700 text-white rounded-full hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors duration-300 font-bold text-base shadow-md hover:shadow-lg outline-none focus:outline-none w-auto min-w-[200px]"
            >
              {limit ? (isAr ? 'عرض جميع الخدمات' : 'View All Services') : (isAr ? 'عرض الكل' : 'View All')}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </motion.button>
          </div>
        </div>
      ) : (
        <div className="w-full px-4 md:px-12">
          {filteredItems.length === 0 ? (
             <div className="text-center py-24 bg-white dark:bg-slate-800 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 animate-in fade-in zoom-in duration-500">
               <div className="w-24 h-24 bg-slate-50 dark:bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Search className="h-10 w-10 text-slate-300 dark:text-slate-500" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                 {isAr ? 'لا توجد نتائج' : 'No Results'}
               </h3>
               <button 
                 onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                 className="px-6 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-white rounded-lg font-bold transition-colors text-sm outline-none focus:outline-none"
               >
                 {isAr ? 'عرض الكل' : 'View All'}
               </button>
             </div>
           ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
              <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                <motion.div 
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => onSelectService && onSelectService(item)}
                  whileHover={cardVariants.hover}
                  whileTap={cardVariants.tap}
                  className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-[0_2px_15px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 dark:border-slate-700 hover:border-corporate-gold/40 transition-colors duration-300 group flex flex-col h-full cursor-pointer outline-none focus:outline-none focus:ring-0 active:scale-95"
                >
                  <div className="w-16 h-16 bg-blue-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center text-corporate-gold mb-6 group-hover:bg-corporate-gold group-hover:text-white transition-colors duration-300 shadow-sm">
                    <item.icon size={30} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-corporate-blue dark:group-hover:text-corporate-gold transition-colors">
                    {isAr ? (item.titleAr || item.title) : (item.titleEn || item.title)}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow text-sm">
                    {isAr ? (item.descriptionAr || item.description) : (item.descriptionEn || item.description)}
                  </p>

                  <div className="pt-5 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 dark:bg-slate-700/50 px-3 py-1.5 rounded-md">
                        {categories.find(c => c.id === item.category)?.[isAr ? 'labelAr' : 'labelEn']}
                    </span>

                    <div className="flex items-center gap-2 text-sm font-bold text-corporate-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 rtl:-translate-x-4 group-hover:translate-x-0">
                      <span>{isAr ? 'عرض التفاصيل' : 'View Details'}</span>
                      <ArrowRight size={16} className="rtl:rotate-180" />
                    </div>
                  </div>
                </motion.div>
              ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      )}
    </section>
  );
};

export default Services;