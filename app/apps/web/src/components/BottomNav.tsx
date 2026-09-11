'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Store, Sparkles, Wallet, Clock, User } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Store', href: '/store/abc-boutique', icon: Store },
  { label: 'Try-On', href: '/try-on', icon: Sparkles, highlight: true },
  { label: 'History', href: '/history', icon: Clock },
  { label: 'Wallet', href: '/wallet', icon: Wallet },
  { label: 'Account', href: '/account', icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="w-full max-w-md bg-neutral-900/90 backdrop-blur-md border-t border-neutral-800/80 px-2 py-2 flex items-center justify-around pointer-events-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href.split('?')[0]);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors text-xs ${
                item.highlight
                  ? 'text-amber-400 font-medium'
                  : isActive
                  ? 'text-white font-medium'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <div
                className={`p-1 rounded-full ${
                  item.highlight
                    ? 'bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/30'
                    : ''
                }`}
              >
                <Icon size={18} />
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
