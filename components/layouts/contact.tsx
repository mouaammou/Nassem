'use client';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
            {t('subtitle', { defaultValue: 'We\'d love to hear from you! Send us a message and we\'ll get back to you as soon as possible.' })}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              {t('formTitle', { defaultValue: 'Send a Message' })}
            </h3>
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('nameLabel', { defaultValue: 'Full Name' })}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t('namePlaceholder', { defaultValue: 'John Doe' })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('emailLabel', { defaultValue: 'Email Address' })}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('emailPlaceholder', { defaultValue: 'you@example.com' })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('messageLabel', { defaultValue: 'Your Message' })}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={t('messagePlaceholder', { defaultValue: 'Type your message here...' })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
              >
                <Send size={20} />
                {t('submitButton', { defaultValue: 'Send Message' })}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8 lg:mt-12">
            <div className="bg-blue-50 p-8 rounded-3xl border-2 border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('infoTitle', { defaultValue: 'Contact Information' })}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('infoSubtitle', { defaultValue: 'Find us at the following address or contact us via phone or email.' })}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                  <p className="text-gray-700">{t('address', { defaultValue: '123 Innovation Drive, Tech City, 12345' })}</p>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                  <p className="text-gray-700">{t('phone', { defaultValue: '+1 (555) 123-4567' })}</p>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                  <p className="text-gray-700">{t('email', { defaultValue: 'contact@inhalerapp.com' })}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}