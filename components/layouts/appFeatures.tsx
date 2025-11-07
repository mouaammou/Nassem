'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import DownloadButtons from '../ui/DownloadButtons';

export default function AppFeatures() {
  const t = useTranslations('AppFeatures');

  const features = [
    {
      image: '/mockup-3.png',
      title: t('feature1Title', { defaultValue: 'Connexion Bluetooth' }),
      description: t('feature1Desc', { defaultValue: 'Connectez automatiquement votre inhalateur à l\'application via Bluetooth pour un suivi sans effort.' }),
      color: 'blue'
    },
    {
      image: '/mockup-6.png',
      title: t('feature2Title', { defaultValue: 'Rappels Intelligents' }),
      description: t('feature2Desc', { defaultValue: 'Recevez des notifications push pour vos doses quotidiennes et ne manquez jamais votre traitement.' }),
      color: 'green'
    },
    {
      image: '/mockup-2.png',
      title: t('feature3Title', { defaultValue: 'Carte Météo Interactive' }),
      description: t('feature3Desc', { defaultValue: 'Consultez les conditions météorologiques en temps réel sur une carte interactive pour anticiper les facteurs environnementaux.' }),
      color: 'purple'
    },
    {
      image: '/mockup-7.png',
      title: t('feature4Title', { defaultValue: 'Suivi des Données' }),
      description: t('feature4Desc', { defaultValue: 'Visualisez vos statistiques d\'utilisation avec des graphiques détaillés et des rapports hebdomadaires complets.' }),
      color: 'orange'
    },
    {
      image: '/mockup-5.png',
      title: t('feature5Title', { defaultValue: 'Interface Intuitive' }),
      description: t('feature5Desc', { defaultValue: 'Une application simple et élégante conçue pour tous les âges, du plus jeune au plus âgé.' }),
      color: 'pink'
    }
  ];

  return (
    <section className="py-20 pt-40" id='produit'>
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
              className={` flex max-lg:flex-wrap  items-center gap-3 justify-center md:gap-0 ${index % 2 === 1  ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              {/* Image Section */}
              <div className="">
                <div className="relative">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={1000}
                      height={1}
                      className="w-full h-140 lg:h-200 object-cover"
                    />
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full">
                <div className={`p-8`}>
                  <div className="space-y-4 sm:px-10 px-0">
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
        <div className="text-center">
            <DownloadButtons />
        </div>
      </div>
    </section>
  );
}