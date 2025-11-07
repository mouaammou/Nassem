'use client';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const isRTL = locale === 'ar';
  const fontClass = isRTL ? 'font-baloo' : 'font-rubik';

  const links = [
    { href: '/', label: t('home') },
    { href: '#produit', label: t('product') },
    { href: '#about', label: t('about') },
    { href: '#contact', label: t('contact') },
  ];

  const switchLanguage = () => {
    const newLocale = locale === 'fr' ? 'ar' : 'fr';
    router.replace(pathname, { locale: newLocale });
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={clsx(
        'fixed w-full top-0 z-50 transition-all duration-300',
        fontClass,
        isScrolled ? 'bg-white shadow-xs py-2' : 'bg-sky-100'
      )} 
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-1">
          {/* Logo */}
          <Link href="/" className="">
            <div className="">
              <Image 
                width={60}
                height={60}
                alt='Inhaler logo'
                src="/logo.png"
                className='rounded-full w-12'
              />
              <h1 className='font-lobster text-lg text-sky-700'>Nassem</h1>
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
                    isRTL && "text-xl"
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
              <Languages size={17} />
              <span className="text-xs  font-semibold">
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