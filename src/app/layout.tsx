import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cold Air | كولد إير لخدمات التكييف والتبريد',
  description: 'منصة عربية متكاملة لخدمات التكييف والتبريد، المبيعات، الصيانة، العقود، وإدارة الفروع.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Cold Air', description: 'حلول تكييف وتبريد احترافية ومنصة ERP قابلة للتوسع.' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
