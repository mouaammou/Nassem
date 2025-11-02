'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Smartphone, Bell, BarChart3, Bluetooth } from 'lucide-react';

export default function AppFeatures() {
  const t = useTranslations('AppFeatures');

  const features = [
    {
      image: '/appFeatures/app_feature_1.png',
      icon: <Bluetooth className="w-8 h-8 text-blue-600" />,
      title: t('feature1Title', { defaultValue: 'Connexion Bluetooth' }),
      description: t('feature1Desc', { defaultValue: 'Connectez automatiquement votre inhalateur à l\'application via Bluetooth pour un suivi sans effort.' }),
      color: 'blue'
    },
    {
      image: '/appFeatures/app_feature_2.png',
      icon: <Bell className="w-8 h-8 text-green-600" />,
      title: t('feature2Title', { defaultValue: 'Rappels Intelligents' }),
      description: t('feature2Desc', { defaultValue: 'Recevez des notifications push pour vos doses quotidiennes et ne manquez jamais votre traitement.' }),
      color: 'green'
    },
    {
      image: '/appFeatures/app_feature_3.png',
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: t('feature3Title', { defaultValue: 'Suivi des Données' }),
      description: t('feature3Desc', { defaultValue: 'Visualisez vos statistiques d\'utilisation avec des graphiques détaillés et des rapports hebdomadaires.' }),
      color: 'purple'
    },
    {
      image: '/appFeatures/app_feature_4.png',
      icon: <Smartphone className="w-8 h-8 text-orange-600" />,
      title: t('feature4Title', { defaultValue: 'Interface Intuitive' }),
      description: t('feature4Desc', { defaultValue: 'Une application simple et élégante conçue pour tous les âges, du plus jeune au plus âgé.' }),
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-50 to-blue-100',
    green: 'from-green-50 to-green-100',
    purple: 'from-purple-50 to-purple-100',
    orange: 'from-orange-50 to-orange-100'
  };

  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title', { defaultValue: 'Fonctionnalités de l\'Application' })}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle', { defaultValue: 'Découvrez comment notre application transforme la gestion de votre asthme avec des fonctionnalités innovantes' })}
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
            >
              {/* Image Section */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <div className={`absolute -inset-4 rounded-3xl`}></div>
                  <div className="">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={1600}
                      height={1400}
                      className=" h-160 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="flex-1 w-60">
                <div className={`p-8 lg:p-12 rounded-3xl shadow-lg hover:shadow-xl transition-shadow`}>
                  <div className="space-y-4">
                    <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-700 shadow-md">
                      Fonctionnalité {index + 1}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            {t('cta', { defaultValue: 'Télécharger l\'Application' })}
          </button>
        </div>
      </div>
    </section>
  );
}