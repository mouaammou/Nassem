'use client';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useState } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import clsx from 'clsx';
import { useLocale } from 'next-intl';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const isRTL = locale === 'ar';

  const links = [
    { href: '/', label: t('home') },
    { href: '/product', label: t('product') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  const switchLanguage = () => {
    const newLocale = locale === 'fr' ? 'ar' : 'fr';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <nav className="bg-white fixed w-full top-0 z-50" dir={isRTL ? 'rtl' : 'ltr'}>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="">
            <div className="border-2 border-gray-300 rounded-full p-1 hover:border-blue-400 transition-colors">
              <Image 
                width={60}
                height={60}
                alt='Inhaler logo'
                src="/inhaler.png"
                className='rounded-full'
              />
            </div>
          </Link>

          {/* Desktop menu - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-8">
              {links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'text-gray-700 hover:text-blue-600 font-medium text-base transition-colors relative',
                    pathname === link.href && 'text-blue-600',
                    pathname === link.href && 'after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Language switcher - Right side */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={switchLanguage}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 border-2 border-gray-300 rounded-lg hover:border-blue-400 transition-all"
            >
              <Languages size={18} />
              <span className="font-semibold">
                {locale === 'fr' ? 'العربية' : 'Français'}
              </span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setOpen(!open)} 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors",
                  pathname === link.href && 'text-blue-600 bg-blue-50'
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Language switcher mobile */}
            <button
              onClick={() => {
                switchLanguage();
                setOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 border-2 border-gray-300 rounded-lg hover:border-blue-400 transition-all"
            >
              <Languages size={18} />
              <span className="font-semibold">
                {locale === 'fr' ? 'العربية' : 'Français'}
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}