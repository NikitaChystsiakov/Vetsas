import type { Metadata, Viewport } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';

// Onest — ближайшая бесплатная замена Gilroy с их сайта: геометрический гротеск с кириллицей
const onest = Onest({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700', '800'], variable: '--f-body', display: 'swap' });

export const metadata: Metadata = {
  title: 'Sas Animal Service — ветеринарный центр в центре Минска',
  description: 'Ветклиника на ул. Козлова, 27а: КТ, МРТ, своя лаборатория, эндоскопия, хирургия любой сложности. Ежедневно 9:00–21:00. Онлайн-запись на ближайшее время.',
  robots: { index: false, follow: false },
  icons: { icon: '/img/favicon.svg' },
};

export const viewport: Viewport = { themeColor: '#1176ED', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={onest.variable}>
      <body>{children}</body>
    </html>
  );
}
