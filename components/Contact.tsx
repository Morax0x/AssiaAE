import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, Clock, ArrowRight, Navigation, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// أيقونة واتساب
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

interface ContactProps {
  content: {
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
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  const isAr = content.title === 'تواصل معنا';
  const [isOpen, setIsOpen] = useState(false);
  const [statusText, setStatusText] = useState('');

  // رابط الخريطة
  const mapSrc = `https://maps.google.com/maps?q=25.403489,55.495864&hl=$en&z=15&output=embed`;

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

  const itemHover = { 
    scale: 1.02, 
    x: isAr ? -5 : 5, 
    transition: { type: "spring", stiffness: 200, damping: 25 } 
  };

  const itemTap = { scale: 0.98 };

  const layoutTransition = { 
    type: "spring", 
    stiffness: 70, 
    damping: 20,
    duration: 0.5 
  };

  return (
    // ✅ تم التعديل: زيادة pb-24 للجوال لإعطاء مساحة للتدرج
    <section className="relative pt-8 pb-24 md:pt-12 md:pb-24 overflow-hidden bg-[#f8fafc] dark:bg-[#0b1121] transition-colors duration-700 ease-in-out" dir={isAr ? 'rtl' : 'ltr'}>

      <style>{`
        @keyframes shine-sweep {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(250%) skewX(-20deg); }
        }
        .shine-element {
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          transform: translateX(-150%) skewX(-20deg);
        }
        .group:hover .shine-element {
          animation: shine-sweep 1s ease-in-out infinite;
        }
      `}</style>

      {/* الخلفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#204f89]/10 dark:bg-[#204f89]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f15a27]/10 dark:bg-[#f15a27]/15 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* العنوان */}
        <div className="text-center mb-8 md:mb-12">

          <motion.h2 
            layout 
            transition={layoutTransition}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tight"
          >
            {content.title}
          </motion.h2>

          {/* الكبسولة البرتقالية */}
          <motion.div 
            layout 
            transition={layoutTransition}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md shadow-sm mb-6"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f15a27] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f15a27]"></span>
            </span>
            <span className="text-slate-600 dark:text-slate-300 text-xs font-bold tracking-wide uppercase">
              {isAr ? 'تفضل بزيارة مكتبنا أو أرسل لنا رسالة' : 'Visit our office or send us a message'}
            </span>
          </motion.div>
        </div>

        {/* --- الكارد الكبير الموحد --- */}
        <motion.div 
            layout
            transition={layoutTransition}
            className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[2rem] lg:rounded-[3rem] shadow-2xl border border-white/20 dark:border-slate-700/50 overflow-hidden flex flex-col lg:flex-row items-stretch"
        >

          {/* 1. قسم المعلومات (الأزرق/الكحلي الغامق) */}
          <motion.div 
            layout 
            className="lg:w-2/5 bg-gradient-to-br from-[#204f89] to-[#1a3f6f] dark:from-[#0f172a] dark:to-[#020617] text-white p-6 md:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden transition-colors duration-700 ease-in-out"
          >

             {/* تأثيرات خلفية */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f15a27]/30 rounded-full blur-3xl -ml-16 -mb-16"></div>

             <div className="relative z-10 flex flex-col h-full justify-between">
               <div>
                 <motion.h3 
                    layout 
                    transition={layoutTransition} 
                    className="text-2xl font-bold mb-6 md:mb-8"
                 >
                    {isAr ? 'بيانات الاتصال' : 'Contact Info'}
                 </motion.h3>

                 <div className="space-y-5 md:space-y-6">
                     <motion.a 
                       layout 
                       href="tel:+971508433999" 
                       className="flex items-start gap-3 md:gap-4 group cursor-pointer"
                       whileHover={itemHover}
                       whileTap={itemTap}
                     >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors shrink-0">
                           <Phone size={20} className="text-[#f15a27] md:w-6 md:h-6" />
                        </div>
                        <div>
                           <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-0.5 md:mb-1">{content.info.phoneLabel}</p>
                           <p className="text-lg md:text-xl font-bold" dir="ltr">+971 50 843 3999</p>
                        </div>
                     </motion.a>

                     <motion.a 
                       layout 
                       href="mailto:assia_ae@yahoo.com" 
                       className="flex items-start gap-3 md:gap-4 group cursor-pointer"
                       whileHover={itemHover}
                       whileTap={itemTap}
                     >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors shrink-0">
                           <Mail size={20} className="text-[#f15a27] md:w-6 md:h-6" />
                        </div>
                        <div>
                           <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-0.5 md:mb-1">{content.info.emailLabel}</p>
                           <p className="text-base md:text-lg font-bold break-all">assia_ae@yahoo.com</p>
                        </div>
                     </motion.a>

                     <motion.a 
                       layout 
                       href="https://www.google.com/maps/search/Assia+Business+Services+Ajman" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="flex items-start gap-3 md:gap-4 group cursor-pointer"
                       whileHover={itemHover}
                       whileTap={itemTap}
                     >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors shrink-0">
                           <MapPin size={20} className="text-[#f15a27] md:w-6 md:h-6" />
                        </div>
                        <div>
                           <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-0.5 md:mb-1">{content.info.addressLabel}</p>
                           <p className="text-base md:text-lg font-medium leading-relaxed">{content.info.address}</p>
                        </div>
                     </motion.a>

                     <motion.div layout className="flex items-start gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 shrink-0">
                           <Clock size={20} className="text-[#f15a27] md:w-6 md:h-6" />
                        </div>
                        <div>
                           <div className="flex items-center gap-2 md:gap-3 mb-0.5 md:mb-1">
                             <p className="text-white/60 text-xs font-bold uppercase tracking-wider">{isAr ? 'ساعات العمل' : 'Working Hours'}</p>
                             <span className={`text-[10px] px-2 py-0.5 rounded border ${isOpen ? 'bg-green-500/20 text-green-300 border-green-400/30' : 'bg-red-500/20 text-red-300 border-red-400/30'}`}>
                               {statusText}
                             </span>
                           </div>
                           <p className="text-base md:text-lg font-bold" dir="ltr">09:00 AM - 08:00 PM</p>
                        </div>
                     </motion.div>
                 </div>
               </div>

               {/* زر واتساب */}
               <motion.div 
                 layout 
                 transition={layoutTransition}
                 className="relative z-10 pt-6 md:pt-8 mt-6 md:mt-auto"
               >
                   <motion.a 
                     layout 
                     href="https://wa.me/971508433999" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     transition={{ type: "spring", stiffness: 200, damping: 25 }}
                     className="flex items-center justify-center gap-3 w-full py-3 md:py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl text-white transition-all group cursor-pointer shadow-lg hover:shadow-xl outline-none focus:outline-none overflow-hidden relative"
                   >
                      <div className="shine-element"></div>
                      <div className="p-1 bg-green-500 rounded-full z-10 relative"><WhatsAppIcon className="w-3 h-3 md:w-4 md:h-4 text-white" /></div>
                      <span className="font-bold z-10 relative text-sm md:text-base">{isAr ? 'محادثة مباشرة' : 'Live Chat'}</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 z-10 relative md:w-5 md:h-5" />
                   </motion.a>
               </motion.div>
            </div>
          </motion.div>

          {/* 2. قسم الفورم */}
          <motion.div 
            layout 
            transition={layoutTransition}
            className="lg:w-3/5 p-6 md:p-8 lg:p-12 flex flex-col"
          >
             <form action="https://formspree.io/f/xkgdzgoa" method="POST" className="w-full max-w-lg mx-auto flex flex-col h-full">
                <input type="hidden" name="_next" value="https://assia-ae.replit.dev/?view=contact&success=true" />

                <div className="space-y-6 md:space-y-8 flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* الاسم */}
                    <div className="relative group">
                      <input 
                        type="text" 
                        name="Name" 
                        id="name" 
                        required 
                        placeholder=" " 
                        className="peer w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-700 py-3 text-slate-900 dark:text-white font-bold focus:border-[#f15a27] outline-none transition-all duration-700 ease-in-out placeholder-transparent" 
                      />
                      <motion.label 
                        layout 
                        transition={layoutTransition}
                        htmlFor="name" 
                        className={`absolute -top-3.5 text-xs font-bold text-slate-400 transition-all duration-700 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#f15a27] peer-focus:text-xs ${isAr ? 'right-0 peer-placeholder-shown:right-0' : 'left-0 peer-placeholder-shown:left-0'}`}
                      >
                        {content.form.name}
                      </motion.label>
                    </div>

                    {/* البريد الإلكتروني */}
                    <div className="relative group">
                      <input 
                        type="email" 
                        name="Email" 
                        id="email" 
                        required 
                        placeholder=" " 
                        className="peer w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-700 py-3 text-slate-900 dark:text-white font-bold focus:border-[#f15a27] outline-none transition-all duration-700 ease-in-out placeholder-transparent" 
                      />
                      <motion.label 
                        layout 
                        transition={layoutTransition}
                        htmlFor="email" 
                        className={`absolute -top-3.5 text-xs font-bold text-slate-400 transition-all duration-700 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#f15a27] peer-focus:text-xs ${isAr ? 'right-0 peer-placeholder-shown:right-0' : 'left-0 peer-placeholder-shown:left-0'}`}
                      >
                        {content.form.email}
                      </motion.label>
                    </div>
                  </div>

                  {/* الهاتف */}
                  <div className="relative group">
                    <input 
                      type="tel" 
                      name="Phone" 
                      id="phone" 
                      placeholder=" " 
                      className="peer w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-700 py-3 text-slate-900 dark:text-white font-bold focus:border-[#f15a27] outline-none transition-all duration-700 ease-in-out placeholder-transparent" 
                    />
                    <motion.label 
                      layout 
                      transition={layoutTransition}
                      htmlFor="phone" 
                      className={`absolute -top-3.5 text-xs font-bold text-slate-400 transition-all duration-700 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#f15a27] peer-focus:text-xs ${isAr ? 'right-0 peer-placeholder-shown:right-0' : 'left-0 peer-placeholder-shown:left-0'}`}
                    >
                      {content.form.phone}
                    </motion.label>
                  </div>

                  {/* الرسالة */}
                  <div className="relative group">
                    <textarea 
                      name="Message" 
                      id="message" 
                      rows={4} 
                      required 
                      placeholder=" " 
                      className="peer w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-700 py-3 text-slate-900 dark:text-white font-bold focus:border-[#f15a27] outline-none transition-all duration-700 ease-in-out placeholder-transparent resize-none"
                    ></textarea>
                    <motion.label 
                      layout 
                      transition={layoutTransition}
                      htmlFor="message" 
                      className={`absolute -top-3.5 text-xs font-bold text-slate-400 transition-all duration-700 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#f15a27] peer-focus:text-xs ${isAr ? 'right-0 peer-placeholder-shown:right-0' : 'left-0 peer-placeholder-shown:left-0'}`}
                    >
                      {content.form.message}
                    </motion.label>
                  </div>
                </div>

                {/* زر الإرسال */}
                <div className="pt-6 md:pt-8 mt-auto">
                    <motion.button 
                      layout 
                      type="submit" 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="w-full py-3 md:py-3.5 bg-gradient-to-r from-[#204f89] to-[#1a3f6f] hover:from-[#f15a27] hover:to-orange-600 text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-3 group relative overflow-hidden outline-none focus:outline-none shadow-none"
                    >
                       <div className="shine-element"></div>
                       <span className="z-10 relative">{content.form.submit}</span>
                       <Send size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 z-10 relative" />
                    </motion.button>
                </div>
             </form>
          </motion.div>
        </motion.div>

        {/* --- قسم الخريطة --- */}
        <motion.div 
            layout
            transition={layoutTransition}
            className="mt-8 lg:mt-12 relative h-[300px] lg:h-[450px] rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700/50 group"
        >

          <iframe 
            src={mapSrc}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Assia Business Services Map"
            className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
          ></iframe>

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <motion.div 
            layout 
            transition={layoutTransition}
            className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-auto md:right-6 md:w-[320px] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-4 md:p-5 rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
          >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#f15a27]/10 flex items-center justify-center shrink-0">
                  <Navigation size={18} className="text-[#f15a27] md:w-5 md:h-5" />
                </div>
                <div className="flex-1">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                     {isAr ? 'موقعنا' : 'Our Location'}
                   </p>
                   <p className="text-sm font-bold text-slate-800 dark:text-white line-clamp-2 mb-3">
                     {content.info.address}
                   </p>

                   {/* زر الاتجاهات */}
                   <motion.a 
                     layout 
                     href="https://maps.google.com/?q=25.403489,55.495864" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
                     className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#204f89] hover:bg-[#1a3f6f] px-3 py-1.5 md:px-4 md:py-2 rounded-full relative overflow-hidden group outline-none"
                   >
                     <div className="shine-element"></div>
                     <span className="z-10 relative">{isAr ? 'احصل على الاتجاهات' : 'Get Directions'}</span>
                     <ExternalLink size={12} className="z-10 relative" />
                   </motion.a>
                </div>
              </div>
          </motion.div>

        </motion.div>

      </div>

      {/* ✅ تدرج لوني في نهاية القسم لإخفاء الخط الحاد */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/90 to-transparent dark:from-[#0b1121] dark:via-[#0b1121]/90 dark:to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};

export default Contact;
