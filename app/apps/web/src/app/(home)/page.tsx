'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// TODO Phase 2: replace mock recent try-on session thumbnails with user history from Worker API & MongoDB
const MOCK_RECENT_SESSIONS = [
  {
    id: 'session-1',
    title: "L'Hiver Tailored Coat",
    price: '€2,450',
    color: 'Noir',
    fabric: 'Cashmere Wool',
    fittedAgo: '2h ago',
    tag: 'Rendered 4K',
    fitMetric: 'Drape tension: 98% Natural',
    size: 'EU 38',
    imageSrc: '/assets/images/high_fashion_editorial_lookbook_photo_of_an_elegant_model_wearing_an_olive.png',
    bookmarked: true,
  },
  {
    id: 'session-2',
    title: 'Aura Silk Halter Dress',
    price: '€1,890',
    color: 'Champagne',
    fabric: 'Mulberry Silk',
    fittedAgo: 'yesterday',
    tag: 'In Boutique',
    fitMetric: 'Silk Bias: Flawless drape',
    size: 'EU 36',
    imageSrc: '/assets/images/luxury_fashion_editorial_photograph_of_a_model_in_a_fluid_draped_silk_cream.png',
    bookmarked: false,
  },
  {
    id: 'session-3',
    title: 'Travertine Linen Suit',
    price: '€2,120',
    color: 'Olive Sage',
    fabric: 'Italian Linen',
    fittedAgo: '3d ago',
    tag: 'Runway Piece',
    fitMetric: 'Ease allowance: +3.2cm',
    size: 'EU 40',
    imageSrc: '/assets/images/high_fashion_full_body_editorial_photograph_of_a_model_wearing_an_architectural.png',
    bookmarked: false,
  },
  {
    id: 'session-4',
    title: 'Architectural Drape Saree',
    price: '€3,200',
    color: 'Obsidian & Gold',
    fabric: 'Raw Silk',
    fittedAgo: '4d ago',
    tag: 'Private Salon',
    fitMetric: 'Pallu drape: Precision pleats',
    size: 'Bespoke',
    imageSrc: '/assets/images/high_fashion_editorial_portrait_of_an_elegant_woman_serene_expression_minimal.png',
    bookmarked: true,
  },
];

export default function HomePage() {
  // Mock credit balance specified in task requirements: mock value of 13
  const [creditBalance] = useState<number>(13);
  const [savedItems, setSavedItems] = useState<Record<string, boolean>>({
    'session-1': true,
    'session-4': true,
  });
  const [toastMessage, setToastMessage] = useState<{ text: string; icon: string } | null>(null);

  const showToast = (text: string, icon = 'check') => {
    setToastMessage({ text, icon });
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const toggleBookmark = (id: string, title: string) => {
    setSavedItems((prev) => {
      const nextState = !prev[id];
      showToast(
        nextState ? `Saved ${title} to Dossier` : `Removed ${title} from Dossier`,
        nextState ? 'bookmark' : 'bookmark_border'
      );
      return { ...prev, [id]: nextState };
    });
  };

  return (
    <div className="flex flex-col w-full pb-10">
      {/* In-Store Atelier Presence & Greeting */}
      <section className="px-margin-mobile pt-space-md pb-space-lg flex flex-col gap-space-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="w-1.5 h-1.5 bg-primary" />
            <span className="font-label-caps-sm text-label-caps-sm uppercase tracking-[0.2em] text-secondary">
              Rue Saint-Honoré Boutique • Salon 04
            </span>
          </div>
          <span className="font-numeric-data text-numeric-data text-secondary">16:42 CET</span>
        </div>

        <div className="mt-space-xs">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-normal">
            Good afternoon, Elena
          </h1>
          <p className="font-body-md text-body-md text-secondary mt-0.5">
            Your bespoke digital mirror and fitting suite are ready.
          </p>
        </div>
      </section>

      {/* Credit Balance & Atelier Privileges Card */}
      <section className="px-margin-mobile mb-space-lg">
        <div className="bg-surface-container-lowest p-space-md border border-[#e5dfd7] relative">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <span className="font-label-caps-sm text-label-caps-sm uppercase text-secondary tracking-[0.16em]">
                Available Atelier Credits
              </span>
              <div className="flex items-baseline gap-space-xs mt-space-2xs">
                <span className="font-display-hero-mobile text-display-hero-mobile text-primary font-normal">
                  {creditBalance}
                </span>
                <span className="font-body-sm text-body-sm text-secondary uppercase tracking-wider">
                  Fittings remaining
                </span>
              </div>
            </div>

            <button
              type="button"
              aria-label="Atelier privilege details"
              onClick={() => showToast('Unlimited in-boutique scans valid today', 'star')}
              className="w-8 h-8 flex items-center justify-center bg-surface-container-low border border-[#e5dfd7] text-secondary hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">info</span>
            </button>
          </div>

          {/* Atelier Privilege Pill */}
          <div className="mt-space-sm bg-surface-container-low px-space-sm py-space-xs flex items-center justify-between border border-[#e5dfd7]">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
              <span className="font-body-sm text-body-sm text-on-surface">
                Complimentary in-store concierge scans active
              </span>
            </div>
            <span className="font-label-caps-sm text-label-caps-sm text-secondary uppercase">Tier I</span>
          </div>
        </div>
      </section>

      {/* Primary One-Handed Action Matrix */}
      <section className="px-margin-mobile flex flex-col gap-space-sm mb-space-xl">
        {/* Primary CTA: Start Virtual Try-On */}
        <Link
          href="/try-on"
          className="w-full h-14 bg-primary text-on-primary flex items-center justify-between px-space-md active:opacity-90 transition-opacity"
        >
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[20px] text-on-primary">crop_free</span>
            <span className="font-label-caps-lg text-label-caps-lg uppercase tracking-[0.16em] text-on-primary">
              Start Virtual Try-On
            </span>
          </div>
          <span className="material-symbols-outlined text-[18px] text-on-primary">arrow_forward</span>
        </Link>

        {/* Secondary CTAs */}
        <div className="grid grid-cols-2 gap-space-xs">
          <button
            type="button"
            onClick={() => showToast('Optical Scanner Active', 'qr_code_scanner')}
            className="h-12 bg-surface-container-lowest border border-[#e5dfd7] text-primary flex items-center justify-center gap-space-xs px-space-sm active:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[18px] text-secondary">qr_code_scanner</span>
            <span className="font-label-caps-sm text-label-caps-sm uppercase tracking-wider">Scan Rack Tag</span>
          </button>

          <Link
            href="/wallet"
            className="h-12 bg-surface-container-lowest border border-[#e5dfd7] text-primary flex items-center justify-center gap-space-xs px-space-sm active:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[18px] text-secondary">add</span>
            <span className="font-label-caps-sm text-label-caps-sm uppercase tracking-wider">
              Buy Credits (5 / $25)
            </span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-space-xs py-space-2xs text-secondary">
          <span className="material-symbols-outlined text-[14px]">tap_and_play</span>
          <span className="font-body-sm text-body-sm">
            Hold device against garment NFC puck to simulate instantaneously
          </span>
        </div>
      </section>

      {/* Recent Sessions Editorial Lookbook */}
      <section className="flex flex-col mb-space-xl">
        <div className="px-margin-mobile flex items-baseline justify-between mb-space-sm">
          <div className="flex items-center gap-space-xs">
            <span className="font-label-caps-sm text-label-caps-sm uppercase tracking-[0.18em] text-primary">
              Recent Sessions
            </span>
            <span className="w-1 h-1 bg-secondary" />
            <span className="font-body-sm text-body-sm text-secondary">Fall/Winter Salon</span>
          </div>
          <Link
            href="/history"
            className="font-label-caps-sm text-label-caps-sm uppercase tracking-[0.14em] text-secondary hover:text-primary transition-colors flex items-center gap-0.5"
          >
            Archive (12)
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </Link>
        </div>

        {/* Horizontally scrollable row of recent try-on thumbnails */}
        <div className="flex overflow-x-auto gap-space-md px-margin-mobile pb-space-xs scrollbar-none snap-x snap-mandatory">
          {MOCK_RECENT_SESSIONS.map((session) => {
            const isBookmarked = !!savedItems[session.id];
            return (
              <article
                key={session.id}
                className="flex-none w-[78vw] max-w-[310px] snap-start flex flex-col bg-surface-container-lowest border border-[#e5dfd7]"
              >
                {/* 3:4 Thumbnail Image Frame */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container">
                  <Image
                    src={session.imageSrc}
                    alt={session.title}
                    fill
                    sizes="(max-width: 768px) 78vw, 310px"
                    className="object-cover object-top"
                  />

                  {/* Status Tag */}
                  <div className="absolute top-3 left-3 bg-surface-container-lowest/95 border border-[#e5dfd7] px-2 py-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    <span className="font-label-caps-sm text-label-caps-sm uppercase tracking-wider text-primary">
                      {session.tag}
                    </span>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    type="button"
                    aria-label={`Save ${session.title}`}
                    onClick={() => toggleBookmark(session.id, session.title)}
                    className="absolute top-3 right-3 w-8 h-8 bg-surface-container-lowest border border-[#e5dfd7] text-primary flex items-center justify-center hover:bg-surface transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {isBookmarked ? 'bookmark' : 'bookmark_border'}
                    </span>
                  </button>

                  {/* Fit Metric Scrim */}
                  <div className="absolute bottom-0 inset-x-0 bg-primary/85 text-on-primary px-space-sm py-space-xs flex items-center justify-between">
                    <span className="font-body-sm text-body-sm text-on-primary">
                      {session.fitMetric}
                    </span>
                    <span className="font-numeric-data text-numeric-data text-on-primary">
                      {session.size}
                    </span>
                  </div>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-space-sm flex flex-col justify-between flex-1 gap-space-sm">
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h2 className="font-title-editorial text-title-editorial text-primary font-normal">
                        {session.title}
                      </h2>
                      <span className="font-numeric-data text-numeric-data text-primary">
                        {session.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs mt-1 text-secondary">
                      <span className="font-body-sm text-body-sm">{session.color}</span>
                      <span>•</span>
                      <span className="font-body-sm text-body-sm">{session.fabric}</span>
                      <span>•</span>
                      <span className="font-body-sm text-body-sm">{session.fittedAgo}</span>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="grid grid-cols-2 gap-space-xs pt-space-xs">
                    <button
                      type="button"
                      onClick={() => showToast(`Matrix loaded for ${session.title}`, 'view_in_ar')}
                      className="h-9 bg-surface-container-low border border-[#e5dfd7] text-primary flex items-center justify-center font-label-caps-sm text-label-caps-sm uppercase tracking-wider active:bg-surface-container transition-colors"
                    >
                      View Matrix
                    </button>
                    <button
                      type="button"
                      onClick={() => showToast('Garment queued for Dressing Suite 4', 'checkroom')}
                      className="h-9 bg-primary text-on-primary flex items-center justify-center font-label-caps-sm text-label-caps-sm uppercase tracking-wider active:opacity-90 transition-opacity"
                    >
                      Request Rack
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Fitting Suite Concierge Callout Bar */}
      <section className="px-margin-mobile mb-space-lg">
        <div className="bg-surface-container-high border border-[#e5dfd7] p-space-md flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[20px] text-primary">notifications_active</span>
              <span className="font-label-caps-sm text-label-caps-sm uppercase tracking-[0.16em] text-primary">
                Private Salon Concierge
              </span>
            </div>
            <span className="font-label-caps-sm text-label-caps-sm text-secondary uppercase">Assigned: Julien M.</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface">
            Physical pieces from your try-on session can be brought straight to Fitting Room 4 in minutes.
          </p>
          <div className="flex items-center gap-space-xs pt-space-2xs">
            <button
              type="button"
              onClick={() => showToast('Stylist Julien M. notified', 'room_service')}
              className="flex-1 h-11 bg-primary text-on-primary flex items-center justify-center gap-space-xs active:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined text-[16px] text-on-primary">concierge</span>
              <span className="font-label-caps-lg text-label-caps-lg uppercase tracking-[0.14em] text-on-primary">
                Summon Stylist
              </span>
            </button>
            <button
              type="button"
              aria-label="Adjust mirror lighting"
              onClick={() => showToast('Mirror Light: Golden Hour 3200K', 'wb_sunny')}
              className="w-11 h-11 bg-surface-container-lowest border border-[#e5dfd7] text-primary flex items-center justify-center active:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">wb_sunny</span>
            </button>
          </div>
        </div>
      </section>

      {/* Action Feedback Toast */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-primary text-on-primary px-space-md py-space-xs flex items-center gap-space-xs shadow-none border border-[#30312f] animate-fade-in">
          <span className="material-symbols-outlined text-[16px] text-on-primary">
            {toastMessage.icon}
          </span>
          <span className="font-label-caps-sm text-label-caps-sm uppercase tracking-wider text-on-primary">
            {toastMessage.text}
          </span>
        </div>
      )}
    </div>
  );
}

