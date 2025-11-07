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

export const metadata: Metadata = {
  title: "Nassem - Smart Inhaler App",
  description: "Transform your asthma management with our innovative smart inhaler application",
};

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
