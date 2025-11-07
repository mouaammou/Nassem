'use client';
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import DownloadButtons from "../ui/DownloadButtons";
import { motion } from 'framer-motion'

export default function Hero() {
   const t = useTranslations('Hero');
   const locale = useLocale();
   const isRTL = locale === 'ar';

   const features = [
      {
         icon: <Image width={100} height={100} src="/icons/icon-1.png" alt="icon 1" />,
         title: t('feature1Title'),
         description: t('feature1Desc')
      },
      {
         icon: <Image width={100} height={100} src="/icons/icon-2.png" alt="icon 1" />,
         title: t('feature2Title'),
         description: t('feature2Desc')
      },
      {
         icon: <Image width={100} height={100} src="/icons/icon-3.png" alt="icon 1" />,
         title: t('feature3Title'),
         description: t('feature3Desc')
      }
   ];

   return (
      <section className="relative py-16 mt-18 overflow-hidden" id="hero">
         {/* Background - Sky blue with angled edge */}
         <div
            className={`absolute inset-y-0 w-220 bg-sky-100 -z-10 h-full ${isRTL ? 'right-0' : 'left-0'
               }`}
            aria-hidden="true"
            style={{
               clipPath: isRTL
                  ? 'polygon(100% 0, 0 0, 20% 100%, 100% 100%)'
                  : 'polygon(0 0, 100% 0, 80% 100%, 0 100%)'
            }}
         />

         <div className="container mx-auto px-6">
            {/* Hero Content */}
            <div className="flex justify-around items-center gap-12 w-full mb-20 max-lg:flex-wrap">
               {/* Left Info */}
               <div className="flex-1 max-w-xl space-y-6">
                  <h1 className="text-xl md:text-6xl font-bold text-gray-900 leading-tight">
                     {t('title')}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                     {t('description')}
                  </p>
                  <div className="flex gap-4 pt-2">
                     <button className="">
                        <DownloadButtons />
                     </button>
                  </div>
               </div>

               {/* right Image */}
               <motion.div
                  initial={{ y: 0 }}
                  whileInView={{ y: [0, -20, 0] }} // moves up 20px then back
                  transition={{
                     duration: 2,       // speed of one full up-down cycle
                     repeat: Infinity,  // repeat forever
                     ease: "easeInOut", // smooth motion
                  }}
                  viewport={{ once: false, amount: 0.5 }} // active when in view
               >
                  <div className={`relative transform-gpu origin-center ${!isRTL ? 'rotate-6 md:rotate-10' : '-rotate-6 md:-rotate-10'}`}>
                     {/* iPhone mockup frame */}
                     <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl w-[280px] h-[570px] md:w-[320px] md:h-[650px]">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10"></div>

                        {/* Screen */}

                        <div className="relative bg-white rounded-[2.5rem] overflow-hidden w-full h-full">
                           <Image
                              width={1000}
                              height={1650}
                              src="/appFeatures/app-feature-7.png"
                              alt="Mobile app connected to smart inhaler"
                              className="w-full h-full object-contain"
                              priority
                           />
                        </div>

                        {/* Home indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
                     </div>
                  </div>
               </motion.div>

            </div>

            {/* Features Section */}
            <div className="mt-20">
               <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                  {t('featuresTitle')}
               </h2>
               <div className="grid md:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                     <div
                        key={index}
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-blue-200"
                     >
                        <div className="mb-6 p-4 bg-blue-50 rounded-xl inline-block">
                           {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                           {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                           {feature.description}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}