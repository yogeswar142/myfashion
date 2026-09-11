import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BottomNav } from './BottomNav';

export function MobileShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface flex justify-center">
      <div className="w-full max-w-md min-h-screen bg-surface border-x border-[#e5dfd7] flex flex-col relative pb-20">
        {/* Top Atelier Header */}
        <header className="sticky top-0 z-40 bg-surface border-b border-[#e5dfd7] px-margin-mobile h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-space-xs">
            <div className="relative h-7 w-20">
              <Image
                src="/assets/vton_wordmark_logo/screen.png"
                alt="VTON Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <span className="font-label-caps-sm text-label-caps-sm uppercase text-on-surface tracking-[0.2em] font-semibold">
              VTON
            </span>
          </Link>

          <div className="flex items-center gap-space-xs">
            <button
              type="button"
              aria-label="Sensors and pairing"
              className="w-10 h-10 flex items-center justify-center text-on-surface hover:text-on-surface-variant transition-colors relative"
            >
              <span className="material-symbols-outlined text-[20px]">sensors</span>
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary" />
            </button>
            <Link
              href="/account"
              aria-label="Account profile"
              className="w-8 h-8 rounded-full bg-surface-container-low border border-[#e5dfd7] flex items-center justify-center text-secondary hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">account_circle</span>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 flex flex-col">{children}</main>

        {/* Persistent Bottom Nav */}
        <BottomNav />
      </div>
    </div>
  );
}

