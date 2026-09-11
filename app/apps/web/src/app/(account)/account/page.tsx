import Link from 'next/link';
import { User, Phone, Shield, ArrowLeft, LogIn, ChevronRight, Lock } from 'lucide-react';

export default function AccountPage() {
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
        <span className="text-[10px] tracking-wider uppercase bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded border border-neutral-700">
          Account
        </span>
      </div>

      {/* Guest / User Profile Card */}
      <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-400">
          <User size={24} />
        </div>
        <div className="flex-1">
          <div className="text-xs font-semibold text-white">Guest Shopper</div>
          <div className="text-[11px] text-neutral-400">Sign in with mobile number to save looks</div>
        </div>
      </div>

      {/* Phone OTP Login Card (Placeholder UI) */}
      <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
        <div className="flex items-center gap-2 mb-3">
          <Phone size={16} className="text-amber-400" />
          <h2 className="text-xs font-semibold text-white">Quick In-Store Sign In</h2>
        </div>
        <div className="space-y-2.5">
          <div className="flex gap-2">
            <div className="px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-neutral-400 font-mono flex items-center">
              +91
            </div>
            <input
              type="tel"
              placeholder="Enter 10-digit mobile number"
              className="flex-1 px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-400"
            />
          </div>
          <button className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors">
            <LogIn size={14} />
            <span>Send OTP</span>
          </button>
        </div>
      </div>

      {/* Privacy & DPDP Compliance Note */}
      <div className="p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
        <div className="flex items-center gap-2 mb-1.5 text-neutral-300">
          <Shield size={14} className="text-emerald-400" />
          <span className="text-xs font-medium">Customer Photo Privacy & DPDP Act</span>
        </div>
        <p className="text-[11px] text-neutral-400 leading-relaxed">
          Customer photos are processed exclusively for virtual try-on drape generation. Consent is explicit, and raw customer captures can be set for instant automatic deletion.
        </p>
      </div>

      {/* Settings list */}
      <div className="space-y-1">
        {[
          { label: 'Store Preferences', desc: 'Select preferred retail showroom' },
          { label: 'Model Measurements', desc: 'Height, fit & drape settings' },
          { label: 'Privacy & Data Controls', desc: 'Manage photo retention & deletion' },
        ].map((item, i) => (
          <div
            key={i}
            className="p-3 rounded-lg bg-neutral-900/40 hover:bg-neutral-900 border border-neutral-800/60 flex items-center justify-between cursor-pointer transition-colors"
          >
            <div>
              <div className="text-xs font-medium text-neutral-200">{item.label}</div>
              <div className="text-[10px] text-neutral-500">{item.desc}</div>
            </div>
            <ChevronRight size={14} className="text-neutral-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
