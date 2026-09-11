'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Camera, Upload, Sparkles, ArrowRight, ArrowLeft, RefreshCw, CheckCircle2 } from 'lucide-react';

const STEPS = [
  { id: 1, title: 'Photo', desc: 'Capture or Model' },
  { id: 2, title: 'Garment', desc: 'Pick apparel' },
  { id: 3, title: 'Generate', desc: 'AI draping' },
  { id: 4, title: 'Result', desc: 'Final fit' },
];

export default function TryOnPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('saree');

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
        <span className="text-[10px] tracking-wider uppercase bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/30">
          Virtual Fitting Room
        </span>
      </div>

      {/* 4-Step Progress Indicator */}
      <div className="bg-neutral-900/90 rounded-xl p-3 border border-neutral-800">
        <div className="flex items-center justify-between">
          {STEPS.map((step) => (
            <div
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
              className={`flex-1 text-center cursor-pointer transition-all ${
                currentStep === step.id
                  ? 'text-amber-400'
                  : currentStep > step.id
                  ? 'text-emerald-400'
                  : 'text-neutral-500'
              }`}
            >
              <div
                className={`w-6 h-6 mx-auto rounded-full flex items-center justify-center text-xs font-semibold mb-1 ${
                  currentStep === step.id
                    ? 'bg-amber-500 text-neutral-950 ring-2 ring-amber-400/40'
                    : currentStep > step.id
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                    : 'bg-neutral-800 text-neutral-400'
                }`}
              >
                {step.id}
              </div>
              <div className="text-[10px] font-medium">{step.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="flex-1">
        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-white">Step 1: Choose or Capture Photo</h2>
            <p className="text-xs text-neutral-400">
              Provide a full-length customer photo or pick an AI reference model.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 transition-colors text-center group">
                <div className="p-3 rounded-full bg-neutral-800 text-amber-400 mb-2 group-hover:scale-105 transition-transform">
                  <Camera size={22} />
                </div>
                <span className="text-xs font-semibold text-white">Camera</span>
                <span className="text-[10px] text-neutral-500 mt-0.5">Take photo in-store</span>
              </button>

              <button className="flex flex-col items-center justify-center p-5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 transition-colors text-center group">
                <div className="p-3 rounded-full bg-neutral-800 text-amber-400 mb-2 group-hover:scale-105 transition-transform">
                  <Upload size={22} />
                </div>
                <span className="text-xs font-semibold text-white">Upload</span>
                <span className="text-[10px] text-neutral-500 mt-0.5">From gallery</span>
              </button>
            </div>

            <div className="pt-2">
              <span className="text-xs font-medium text-neutral-400 block mb-2">Or select model preset:</span>
              <div className="grid grid-cols-3 gap-2">
                {['Female (Saree Model)', 'Female (Western)', 'Male (Kurta Model)'].map((name, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-center cursor-pointer hover:border-amber-500/40 text-[11px] text-neutral-300"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-white">Step 2: Select Garment</h2>
            <p className="text-xs text-neutral-400">Choose category and apparel to drape.</p>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {['saree', 'dress', 'top', 'bottom', 'children'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize shrink-0 transition-colors ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-neutral-950 font-semibold'
                      : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-neutral-900 border border-dashed border-neutral-700 text-center">
              <Sparkles size={24} className="mx-auto text-amber-400 mb-2" />
              <div className="text-xs font-medium text-white mb-1">Select Garment from Catalog or Upload</div>
              <p className="text-[11px] text-neutral-500">Supports sarees, gowns, kurtas, and suits</p>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4 text-center py-8">
            <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
              <RefreshCw size={32} className="text-amber-400 animate-spin" />
            </div>
            <h2 className="text-base font-bold text-white">Generating AI Look...</h2>
            <p className="text-xs text-neutral-400 max-w-xs mx-auto">
              Synthesizing realistic fabric drape, folds, shadows, and lighting.
            </p>
            <div className="text-[11px] font-mono text-amber-400/80 bg-neutral-900 px-3 py-1.5 rounded-lg w-fit mx-auto border border-neutral-800">
              Estimated time: ~10-15s
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 size={16} />
              <h2 className="text-sm font-semibold">Drape Generated Successfully</h2>
            </div>
            <div className="aspect-[3/4] bg-neutral-900 rounded-xl border border-neutral-800 flex items-center justify-center text-neutral-500 text-xs">
              [VTON High-Fidelity Result Preview]
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
        <button
          onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
          disabled={currentStep === 1}
          className="px-3 py-2 rounded-lg text-xs font-medium text-neutral-400 disabled:opacity-30"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentStep((s) => Math.min(4, s + 1))}
          disabled={currentStep === 4}
          className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 text-neutral-950 rounded-lg text-xs font-semibold disabled:opacity-30"
        >
          <span>Continue</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
