'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Linkedin, Github, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Copyright Info */}
          <div className="text-center sm:text-left">
            <Link href="/" className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
              <Image 
                width={40}
                height={40}
                alt='Inhaler logo'
                src="/inhaler.png"
                className='rounded-full'
              />
              <span className="font-bold text-lg text-gray-800">Inhaler</span>
            </Link>
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Inhaler. {t('rights')}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-sky-500 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}