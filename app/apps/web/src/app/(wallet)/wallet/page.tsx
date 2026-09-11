import Link from 'next/link';
import { Wallet, ArrowLeft, Zap, Crown, Plus, CheckCircle } from 'lucide-react';

export default function WalletPage() {
  return (
    <div className="flex flex-col space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back</span>
        </Link>
        <span className="text-[10px] tracking-wider uppercase bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
          Store Credits
        </span>
      </div>

      {/* Balance Card */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 shadow-xl relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Wallet size={18} />
            </div>
            <span className="text-xs font-semibold text-neutral-300">Credit Balance</span>
          </div>
          <span className="text-[10px] text-neutral-500 font-mono">ID: WALLET-091</span>
        </div>

        <div className="text-3xl font-bold text-white mb-4">
          100 <span className="text-sm font-normal text-neutral-400">credits</span>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-800">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded bg-blue-500/10 text-blue-400">
              <Zap size={14} />
            </div>
            <div>
              <div className="text-xs font-semibold text-neutral-200">90 Normal</div>
              <div className="text-[10px] text-neutral-500">Western & casual</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded bg-amber-500/10 text-amber-400">
              <Crown size={14} />
            </div>
            <div>
              <div className="text-xs font-semibold text-neutral-200">10 Premium</div>
              <div className="text-[10px] text-neutral-500">Intricate sarees</div>
            </div>
          </div>
        </div>
      </div>

      {/* Top-up Packs */}
      <div>
        <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
          Top-Up Credit Packs
        </h2>
        <div className="space-y-3">
          {[
            {
              title: 'Standard Top-Up',
              credits: '50 Credits',
              price: '₹375',
              rate: '₹7.5 / credit',
              badge: 'Popular',
            },
            {
              title: 'Bulk Top-Up Pack',
              credits: '400 Credits',
              price: '₹2,080',
              rate: '₹5.2 / credit',
              badge: 'Best Value',
            },
            {
              title: 'Enterprise Monthly',
              credits: '1,100 Credits',
              price: '₹5,720',
              rate: '₹5.2 / credit',
              badge: 'Festival Rush',
            },
          ].map((pack, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-white">{pack.title}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/20 font-medium">
                    {pack.badge}
                  </span>
                </div>
                <div className="text-[11px] text-neutral-400">
                  {pack.credits} • <span className="text-neutral-500">{pack.rate}</span>
                </div>
              </div>
              <button className="flex items-center gap-1 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-semibold border border-neutral-700 transition-colors">
                <Plus size={12} />
                <span>{pack.price}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
