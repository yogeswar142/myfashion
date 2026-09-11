import type { Metadata, Viewport } from 'next';
import './globals.css';
import { MobileShell } from '@/components/MobileShell';

export const metadata: Metadata = {
  title: 'MyFashion Atelier | Mobile Virtual Try-On',
  description: 'AI-powered virtual fitting room for luxury ethnic & western wear',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-neutral-950 min-h-screen text-neutral-100 selection:bg-amber-500/30 selection:text-amber-200">
        <MobileShell>{children}</MobileShell>
      </body>
    </html>
  );
}
