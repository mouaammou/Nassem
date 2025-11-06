'use client';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section className="py-24 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title', { defaultValue: 'Contact Us' })}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle', { defaultValue: 'We\'d love to hear from you! Reach out to us through any of the following channels.' })}
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-colors">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Address</h3>
              <p className="text-gray-600">
                {t('address', { defaultValue: '123 Innovation Drive, Tech City, 12345' })}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-300 transition-colors">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Phone</h3>
              <a 
                href={`tel:${t('phone', { defaultValue: '+1 (555) 123-4567' })}`}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                {t('phone', { defaultValue: '+1 (555) 123-4567' })}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-300 transition-colors">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Email</h3>
              <a 
                href={`mailto:${t('email', { defaultValue: 'contact@inhalerapp.com' })}`}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                {t('email', { defaultValue: 'contact@inhalerapp.com' })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}