'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function DownloadButtons() {
  const t = useTranslations('Download'); // Translation namespace

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6">
      {/* App Store Button */}
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
      >
        <Image
          src="/apple-logo.svg"
          alt="App Store"
          width={24}
          height={24}
        />
        <div className="flex flex-col leading-tight text-left">
          <span className="text-lg">{t('downloadApp')}</span>
          <span className="font-semibold text-sm">App Store</span>
        </div>
      </a>

      {/* Google Play Button */}
      <a
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
      >
        <Image
          src="/google-play.svg"
          alt="Google Play"
          width={24}
          height={24}
        />
        <div className="flex flex-col leading-tight text-left">
          <span className="text-lg">{t('downloadApp')}</span>
          <span className="font-semibold text-sm">Google Play</span>
        </div>
      </a>
    </div>
  );
}
