import Link from 'next/link';
import { Clock, ArrowLeft, Sparkles, Eye, Share2 } from 'lucide-react';

export default function HistoryPage() {
  const historyItems = [
    {
      id: 'try-001',
      date: 'Today, 2:45 PM',
      garment: 'Kanjivaram Silk Saree (Crimson & Gold)',
      branch: 'Flagship Boutique',
      status: 'completed',
    },
    {
      id: 'try-002',
      date: 'Yesterday, 5:12 PM',
      garment: 'Chanderi Zari Kurti Set',
      branch: 'Online Atelier',
      status: 'completed',
    },
    {
      id: 'try-003',
      date: 'Sep 8, 11:30 AM',
      garment: 'Emerald Velvet Indo-Western Lehenga',
      branch: 'Flagship Boutique',
      status: 'completed',
    },
  ];

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
        <span className="text-[10px] tracking-wider uppercase bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded border border-purple-500/30">
          Try-On History
        </span>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-sm font-bold text-white">Your Lookbook ({historyItems.length})</h1>
        <span className="text-[11px] text-neutral-400">Auto-saved</span>
      </div>

      {/* History Items */}
      <div className="space-y-3">
        {historyItems.map((item) => (
          <div
            key={item.id}
            className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex gap-3 items-center"
          >
            {/* Thumbnail Placeholder */}
            <div className="w-16 h-20 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-600 shrink-0 border border-neutral-700/50">
              <Sparkles size={16} className="text-amber-400/60" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] text-neutral-400">{item.date}</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                  {item.status}
                </span>
              </div>
              <h2 className="text-xs font-semibold text-white truncate">{item.garment}</h2>
              <p className="text-[11px] text-neutral-400 truncate">{item.branch}</p>

              <div className="flex items-center gap-3 mt-2">
                <button className="flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300">
                  <Eye size={12} />
                  <span>View Look</span>
                </button>
                <button className="flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white">
                  <Share2 size={12} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
