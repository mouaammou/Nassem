import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Baloo_Bhaijaan_2, Rubik, Lobster, Lobster_Two } from 'next/font/google';
import { getMessages } from 'next-intl/server';


const baloo = Baloo_Bhaijaan_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-baloo-family',
})

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik-family',
})

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lobster-family',
})

const lobsterTwo = Lobster_Two({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lobster-two-family',
})

const metaByLocale: Record<string, Metadata> = {
  fr: {
    title: "Nassem - Application intelligente pour inhalateur",
    description: "Révolutionnez la gestion de l'asthme grâce à Nassem, l'application intelligente pour inhalateurs. Suivi facile, notifications personnalisées et conseils santé en temps réel.",
  },
  ar: {
    title: "نسيم - تطبيق ذكي لجهاز الاستنشاق",
    description: "حوّل إدارة الربو مع نسيم، تطبيق ذكي لجهاز الاستنشاق. متابعة سهلة، إشعارات مخصصة، ونصائح صحية لحظية.",
  },
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { locale } = await params || 'fr'; // fallback to fr
  return metaByLocale[locale];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await the params
  const { locale } = await params;

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();


  // detect direction: Arabic = rtl, otherwise ltr
  const dir = locale === "ar" ? "rtl" : "ltr";
  const fontClass = locale === "ar" ? 'font-baloo' : 'font-rubik'; // add this

  return (
    <html lang={locale} dir={dir} className={`${baloo.variable} ${rubik.variable} ${lobster.variable} ${lobsterTwo.variable}`}>
      <body className={fontClass}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
