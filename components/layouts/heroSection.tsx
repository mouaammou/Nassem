'use client';
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import { Heart, Shield, ArrowRight, Smartphone } from 'lucide-react';

export default function Hero() {
   const t = useTranslations('Hero');
   const locale = useLocale();
   const isRTL = locale === 'ar';

   const features = [
      {
         icon: <Smartphone className="w-12 h-12 text-blue-600" />,
         title: t('feature1Title'),
         description: t('feature1Desc')
      },
      {
         icon: <Shield className="w-12 h-12 text-green-600" />,
         title: t('feature2Title'),
         description: t('feature2Desc')
      },
      {
         icon: <Heart className="w-12 h-12 text-purple-600" />,
         title: t('feature3Title'),
         description: t('feature3Desc')
      }
   ];

   return (
      <section className="relative py-16 mt-20 overflow-hidden">
         {/* Background - Sky blue with angled edge */}
         <div 
           className={`absolute inset-y-0 w-220 bg-sky-100 -z-10 h-screen ${
             isRTL ? 'right-0' : 'left-0'
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
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                     {t('title')}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                     {t('description')}
                  </p>
                  <div className="flex gap-4 pt-2">
                     <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl">
                        {t('cta')}
                        <ArrowRight size={20} />
                     </button>
                  </div>
               </div>

               {/* right Image */}
               <div>
                  <div className={`relative transform-gpu origin-center ${!isRTL ? 'rotate-6 md:rotate-10' : '-rotate-6 md:-rotate-10'}`}>
                     {/* iPhone mockup frame */}
                     <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl z-10"></div>
                        
                        {/* Screen */}
                        <div className="relative bg-white rounded-[2.5rem] overflow-hidden">
                           <Image
                              width={400}
                              height={800}
                              src="/appFeatures/app-feature-7.png"
                              alt="Mobile app connected to smart inhaler"
                              className="w-84 h-150 object-contain"
                              priority
                           />
                        </div>
                        
                        {/* Home indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full"></div>
                     </div>
                  </div>
               </div>

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