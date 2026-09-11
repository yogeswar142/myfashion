import Link from 'next/link';
import { Store, MapPin, QrCode, ArrowLeft, Sparkles, Tag } from 'lucide-react';

interface StorePageProps {
  params: {
    branchSlug: string;
  };
}

export default function StoreBranchPage({ params }: StorePageProps) {
  const branchName = params.branchSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="flex flex-col space-y-5">
      {/* Header with back button */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back</span>
        </Link>
        <span className="text-[10px] tracking-wider uppercase bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/30">
          In-Store Mode
        </span>
      </div>

      {/* Store Banner */}
      <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
            <Store size={20} />
          </div>
          <div>
            <h1 className="text-base font-bold text-white">{branchName}</h1>
            <div className="flex items-center text-xs text-neutral-400 gap-1 mt-0.5">
              <MapPin size={12} />
              <span>Flagship Store • Branch: {params.branchSlug}</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-neutral-400">
          Scan garment barcodes or select in-store picks to try them immediately on your digital model.
        </p>
      </div>

      {/* Quick QR Scan Action */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-neutral-900 to-neutral-900/80 border border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-neutral-800 text-amber-400">
            <QrCode size={20} />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Scan Garment QR / Tag</div>
            <div className="text-[11px] text-neutral-400">Instant virtual try-on from store rack</div>
          </div>
        </div>
        <Link
          href="/try-on"
          className="px-3 py-1.5 bg-amber-500 text-neutral-950 rounded-lg text-xs font-semibold hover:bg-amber-400 transition-colors"
        >
          Scan
        </Link>
      </div>

      {/* Sample In-Store Garment Picks */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
            Available In Store Today
          </h2>
          <span className="text-[11px] text-amber-400 font-medium">10+ Featured</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { name: 'Kanjivaram Silk Saree', cat: 'Saree', price: '₹14,999' },
            { name: 'Handloom Banarasi Saree', cat: 'Saree', price: '₹18,500' },
            { name: 'Raw Silk Sherwani', cat: 'Men', price: '₹12,400' },
            { name: 'Zari Border Anarkali', cat: 'Dress', price: '₹8,990' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-neutral-900/70 border border-neutral-800/80 flex flex-col justify-between"
            >
              <div className="aspect-[3/4] bg-neutral-800/50 rounded-lg mb-2 flex items-center justify-center text-neutral-600">
                <Tag size={20} />
              </div>
              <div>
                <div className="text-[10px] text-amber-400 uppercase tracking-wider">{item.cat}</div>
                <div className="text-xs font-semibold text-neutral-200 truncate">{item.name}</div>
                <div className="text-xs font-medium text-neutral-300 mt-1">{item.price}</div>
              </div>
              <Link
                href={`/try-on?garment=${encodeURIComponent(item.name)}`}
                className="mt-2 w-full py-1.5 text-center text-[11px] bg-neutral-800 hover:bg-amber-500 hover:text-neutral-950 font-medium text-neutral-200 rounded-lg transition-colors flex items-center justify-center gap-1"
              >
                <Sparkles size={12} />
                <span>Try On</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
