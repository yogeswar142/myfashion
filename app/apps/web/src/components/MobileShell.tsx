import React from 'react';
import { BottomNav } from './BottomNav';

export function MobileShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 flex justify-center">
      <div className="w-full max-w-md min-h-screen bg-[#0c0c10] border-x border-neutral-800/60 shadow-2xl flex flex-col relative pb-20">
        {/* Top App Bar */}
        <header className="sticky top-0 z-40 bg-[#0c0c10]/80 backdrop-blur-md border-b border-neutral-800/60 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-sm font-semibold tracking-wider uppercase text-neutral-100">
              MYFASHION
            </span>
          </div>
          <span className="text-[10px] tracking-widest uppercase bg-neutral-800/80 text-neutral-400 px-2 py-0.5 rounded border border-neutral-700/50">
            VTON ATELIER
          </span>
        </header>

        {/* Page Content */}
        <main className="flex-1 flex flex-col p-4">{children}</main>

        {/* Persistent Mobile Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
}
