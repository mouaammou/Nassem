'use client';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Heart, Shield, ArrowRight, Smartphone } from 'lucide-react';

export default function Hero() {
   const t = useTranslations('Hero');

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
      <section className="py-16 mt-20">
         <div className="container mx-auto px-6">
            {/* Hero Content */}
            <div className="flex justify-around items-center gap-12 w-full mb-20 max-lg:flex-wrap">
               {/* Left Info */}
               <div className="flex-1 max-w-xl space-y-6">
                  <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                     {t('badge')}
                  </div>
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
                  <div className="relative">
                     <div className="absolute -inset-4 bg-linear-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20"></div>
                     <Image
                        width={500}
                        height={500}
                        src="/inhaler-kid.jpg"
                        alt="Mobile app connected to smart inhaler"
                        className="relative rounded-3xl shadow-2xl"
                        priority
                     />
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