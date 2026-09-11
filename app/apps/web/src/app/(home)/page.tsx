import Link from 'next/link';
import { PingTestCard } from '@/components/PingTestCard';
import { Sparkles, Store, Clock, Wallet, User, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-900 via-neutral-900/60 to-transparent p-5 border border-neutral-800">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-medium mb-3">
          <Sparkles size={12} />
          <span>Next-Gen Virtual Fitting</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white mb-2">
          Experience In-Store Try-On Before You Wear
        </h1>
        <p className="text-xs text-neutral-400 leading-relaxed mb-4">
          Try on luxury sarees, designer lehengas, and western apparel in seconds with our high-fidelity AI drape engine.
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/try-on"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 font-semibold text-xs py-2.5 px-4 rounded-xl shadow-md shadow-amber-500/20 transition-all"
          >
            <span>Start Virtual Try-On</span>
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/store/abc-fashion-flagship"
            className="flex items-center justify-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs py-2.5 px-3 rounded-xl border border-neutral-700 transition-colors"
          >
            <Store size={14} />
            <span>Store</span>
          </Link>
        </div>
      </div>

      {/* Frontend to Cloudflare Worker Healthcheck Ping */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
            Backend Infrastructure Verification
          </h2>
          <span className="text-[10px] text-emerald-400 font-mono">Edge Worker</span>
        </div>
        <PingTestCard />
      </div>

      {/* Quick Navigation Sections */}
      <div>
        <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
          Explore App Routes
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/store/abc-fashion-flagship"
            className="group p-3.5 rounded-xl bg-neutral-900/70 hover:bg-neutral-900 border border-neutral-800/80 transition-all flex flex-col justify-between"
          >
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 w-fit mb-2">
              <Store size={16} />
            </div>
            <div>
              <div className="text-xs font-semibold text-neutral-200 group-hover:text-amber-400 transition-colors">
                Store Catalog
              </div>
              <div className="text-[11px] text-neutral-500">/store/[branchSlug]</div>
            </div>
          </Link>

          <Link
            href="/try-on"
            className="group p-3.5 rounded-xl bg-neutral-900/70 hover:bg-neutral-900 border border-neutral-800/80 transition-all flex flex-col justify-between"
          >
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 w-fit mb-2">
              <Sparkles size={16} />
            </div>
            <div>
              <div className="text-xs font-semibold text-neutral-200 group-hover:text-amber-400 transition-colors">
                Virtual Try-On Flow
              </div>
              <div className="text-[11px] text-neutral-500">/try-on (4 steps)</div>
            </div>
          </Link>

          <Link
            href="/wallet"
            className="group p-3.5 rounded-xl bg-neutral-900/70 hover:bg-neutral-900 border border-neutral-800/80 transition-all flex flex-col justify-between"
          >
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit mb-2">
              <Wallet size={16} />
            </div>
            <div>
              <div className="text-xs font-semibold text-neutral-200 group-hover:text-amber-400 transition-colors">
                Credits Wallet
              </div>
              <div className="text-[11px] text-neutral-500">/wallet</div>
            </div>
          </Link>

          <Link
            href="/history"
            className="group p-3.5 rounded-xl bg-neutral-900/70 hover:bg-neutral-900 border border-neutral-800/80 transition-all flex flex-col justify-between"
          >
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 w-fit mb-2">
              <Clock size={16} />
            </div>
            <div>
              <div className="text-xs font-semibold text-neutral-200 group-hover:text-amber-400 transition-colors">
                Try-On History
              </div>
              <div className="text-[11px] text-neutral-500">/history</div>
            </div>
          </Link>
        </div>
      </div>

      {/* Security note */}
      <div className="flex items-start gap-2 p-3 rounded-lg bg-neutral-900/40 border border-neutral-800/40 text-[11px] text-neutral-500">
        <ShieldCheck size={14} className="text-neutral-400 mt-0.5 shrink-0" />
        <span>
          Architecture: Zero backend secrets in frontend. All secrets remain isolated in Cloudflare Worker runtime.
        </span>
      </div>
    </div>
  );
}
