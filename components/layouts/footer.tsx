'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Linkedin, Github, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import DownloadButtons from '../ui/DownloadButtons';

export default function Footer() {
  const t = useTranslations('Footer');
  const tContact = useTranslations('Contact');
  const tNav = useTranslations('Navbar');

  return (
    <footer className="bg-linear-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <Image
                  width={50}
                  height={50}
                  alt='Nassem logo'
                  src="/logo.png"
                  className='rounded-full'
                />
                <h1 className='font-lobster text-2xl text-sky-700'>Nassem</h1>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t("brand")}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-sky-500 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all">
                <Github size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link href="#produit" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  {tNav('product')}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600 text-sm">
                <Mail size={18} className="mt-0.5 shrink-0" />
                <a href={`mailto:${tContact('email')}`} className="hover:text-blue-600 transition-colors">
                  {tContact('email')}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-600 text-sm">
                <Phone size={18} className="mt-0.5 shrink-0" />
                <a href={`tel:${tContact('phone')}`} className="hover:text-blue-600 transition-colors"
                  dir="ltr"
                >
                  {tContact('phone')}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-600 text-sm">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>{tContact('address')}</span>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Get the App</h3>
            <DownloadButtons />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Nassem. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}