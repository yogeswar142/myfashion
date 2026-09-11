'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface AuthFlowProps {
  initialStep?: 'login' | 'otp';
}

export function AuthFlow({ initialStep = 'login' }: AuthFlowProps) {
  const router = useRouter();
  const [step, setStep] = useState<'login' | 'otp'>(initialStep);
  const [countryCode, setCountryCode] = useState<string>('+1');
  const [phoneNumber, setPhoneNumber] = useState<string>('(555) 849-2104');
  const [digits, setDigits] = useState<string[]>(['8', '4', '9', '2']);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(42);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const hiddenInputRef = useRef<HTMLInputElement>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2400);
  };

  // Timer countdown micro-interaction
  useEffect(() => {
    if (step !== 'otp' || countdown <= 0) return;
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [step, countdown]);

  const handleSendOtp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!phoneNumber.trim()) {
      showToast('Please enter a valid phone number');
      return;
    }
    setStep('otp');
    setCountdown(42);
    setHasError(false);
    showToast(`SMS pass dispatched to ${countryCode} ${phoneNumber}`);
  };

  const handleDigitPress = (digit: string) => {
    if (digits.length < 4) {
      const next = [...digits, digit];
      setDigits(next);
      setHasError(false);
      if (next.length === 4) {
        verifyOtp(next.join(''));
      }
    }
  };

  const handleBackspace = () => {
    if (digits.length > 0) {
      setDigits(digits.slice(0, -1));
      setHasError(false);
    }
  };

  const verifyOtp = (codeString: string) => {
    // If entered code is 0000, trigger error state for testing wrong code
    if (codeString === '0000') {
      setHasError(true);
      return;
    }

    // TODO Phase 2: replace with real OTP provider + Worker verification endpoint.
    setIsVerifying(true);
    setHasError(false);

    // Mock verification: any 4-digit input accepted after a 1-second simulated delay
    setTimeout(() => {
      setIsVerifying(false);
      showToast('Pass verified. Mirror-04B activated.');
      setTimeout(() => {
        router.push('/');
      }, 600);
    }, 1000);
  };

  const handleResend = () => {
    if (countdown > 0) return;
    setCountdown(42);
    setDigits([]);
    setHasError(false);
    showToast('New verification code dispatched');
  };

  return (
    <div className="w-full max-w-md mx-auto px-margin-mobile flex flex-col pt-space-xs pb-space-lg">
      {/* In-Store Fitting Suite Context Badge */}
      <div className="w-full bg-surface-container-low border border-[#e5dfd7] p-space-sm mb-space-md">
        <div className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
            location_on
          </span>
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-center justify-between gap-space-xs">
              <span className="font-label-caps-sm text-label-caps-sm text-on-surface uppercase tracking-wider truncate">
                ABC Fashion — MVP Colony
              </span>
              <span className="inline-flex items-center gap-1 bg-surface-container-highest px-2 py-0.5 text-on-surface font-numeric-data text-[11px] border border-[#e5dfd7]">
                <span className="w-1.5 h-1.5 bg-primary" />
                Live Salon
              </span>
            </div>
            <div className="flex items-center flex-wrap gap-x-2 gap-y-0.5 mt-1">
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Salon Mirror-04B
              </span>
              <span className="text-on-surface-variant text-[10px]">•</span>
              <span className="font-label-caps-sm text-label-caps-sm text-primary font-medium tracking-normal">
                5 In-Store Credits Attached
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Auth Masthead */}
      <div className="flex flex-col items-center text-center my-space-xs">
        <div className="relative w-28 h-9 mb-space-sm flex items-center justify-center">
          <Image
            src="/assets/vton_wordmark_logo/screen.png"
            alt="VTON Brand Monogram"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="font-label-caps-sm text-label-caps-sm uppercase tracking-[0.2em] text-secondary mb-space-2xs">
          Boutique Guest Pass
        </p>
        <h1 className="font-headline-md text-headline-md text-on-surface italic font-normal">
          {step === 'login' ? 'Boutique Sign In' : 'Verify Fitting Pass'}
        </h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-[310px] mt-1">
          {step === 'login'
            ? 'Enter your mobile phone number to receive a one-time verification pass.'
            : 'A 4-digit one-time code has been sent via SMS to verify your private digital twin session.'}
        </p>
      </div>

      {/* STEP 1: LOGIN (Phone input) */}
      {step === 'login' && (
        <form onSubmit={handleSendOtp} className="w-full flex flex-col gap-space-sm mt-space-sm">
          <div className="w-full bg-surface-container-lowest border border-[#e5dfd7] p-space-md flex flex-col gap-space-xs">
            <label
              htmlFor="phone-input"
              className="font-label-caps-sm text-label-caps-sm uppercase text-secondary tracking-wider"
            >
              Mobile Phone Number
            </label>
            <div className="flex items-center gap-space-xs mt-1">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="h-12 bg-surface-container-low border border-[#e5dfd7] px-2 font-numeric-data text-body-md text-on-surface focus:outline-none focus:border-primary"
              >
                <option value="+1">+1 (US)</option>
                <option value="+91">+91 (IN)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+33">+33 (FR)</option>
              </select>
              <input
                id="phone-input"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="(555) 849-2104"
                className="flex-1 h-12 bg-surface-container-low border border-[#e5dfd7] px-space-sm font-numeric-data text-body-md text-on-surface focus:outline-none focus:border-primary"
                required
              />
            </div>
            <p className="font-body-sm text-[11px] text-secondary mt-1">
              Used strictly for in-salon mirror pairing and fitting room delivery alerts.
            </p>
          </div>

          <button
            type="submit"
            className="w-full h-14 bg-primary text-on-primary font-label-caps-lg text-label-caps-lg uppercase tracking-[0.14em] flex items-center justify-between px-space-md active:opacity-90 transition-opacity mt-space-xs"
          >
            <span>Send OTP</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </form>
      )}

      {/* STEP 2: OTP ENTRY (4-digit code) */}
      {step === 'otp' && (
        <div className="w-full flex flex-col">
          {/* Auth Stage 1: Phone Destination Chip */}
          <div className="w-full bg-surface-container mt-space-sm mb-space-md p-space-sm flex items-center justify-between border border-[#e5dfd7]">
            <div className="flex items-center gap-space-sm min-w-0">
              <div className="w-8 h-8 bg-surface-container-highest border border-[#e5dfd7] flex items-center justify-center text-on-surface text-[12px] font-medium font-numeric-data">
                {countryCode}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-caps-sm text-label-caps-sm uppercase text-secondary tracking-wider">
                  SMS Dispatch Destination
                </span>
                <span className="font-numeric-data text-numeric-data text-on-surface font-medium truncate">
                  {countryCode} {phoneNumber}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setStep('login')}
              className="flex items-center gap-1 text-primary text-body-sm font-label-caps-sm uppercase tracking-wider hover:opacity-75 transition-opacity px-2 py-1"
            >
              <span>Edit</span>
              <span className="material-symbols-outlined text-[16px]">edit</span>
            </button>
          </div>

          {/* Auth Stage 2: OTP Digit Sequence Frame */}
          <div className="w-full bg-surface-container-lowest border border-[#e5dfd7] p-space-md flex flex-col items-center">
            {/* 4-Digit Sequence Container */}
            <div
              className="w-full flex justify-center items-center max-w-[280px] gap-3 my-space-xs cursor-text"
              onClick={() => hiddenInputRef.current?.focus()}
            >
              {[0, 1, 2, 3].map((index) => {
                const val = digits[index];
                const isFocused = index === digits.length;
                return (
                  <div
                    key={index}
                    className={`w-12 h-14 border flex flex-col items-center justify-center relative transition-all duration-150 ${
                      isFocused
                        ? 'border-primary bg-surface-container-high'
                        : 'border-[#e5dfd7] bg-surface-container-low'
                    }`}
                  >
                    {val ? (
                      <span className="font-numeric-data text-[24px] font-medium text-on-surface">
                        {val}
                      </span>
                    ) : isFocused ? (
                      <span className="w-0.5 h-6 bg-primary animate-pulse" />
                    ) : null}
                  </div>
                );
              })}
            </div>

            {/* Hidden Input for Hardware Keyboard Support */}
            <input
              ref={hiddenInputRef}
              type="tel"
              maxLength={4}
              value={digits.join('')}
              onChange={(e) => {
                const clean = e.target.value.replace(/\D/g, '').slice(0, 4);
                setDigits(clean.split(''));
                setHasError(false);
                if (clean.length === 4) {
                  verifyOtp(clean);
                }
              }}
              className="sr-only"
              aria-label="4-digit verification code"
            />

            {/* Error State for Wrong Code */}
            {hasError && (
              <div className="w-full mt-space-sm bg-error-container text-on-error-container p-space-xs border border-[#ba1a1a] flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-error text-[18px] shrink-0">
                  error
                </span>
                <div className="flex-1 text-[11px] leading-tight font-body-sm">
                  <span>Incorrect code. 2 attempts remaining before 5-minute lockout.</span>
                </div>
                <button
                  type="button"
                  onClick={() => setHasError(false)}
                  className="text-on-error-container hover:opacity-70 p-1"
                >
                  <span className="material-symbols-outlined text-[14px]">close</span>
                </button>
              </div>
            )}

            {/* Resend & Dispatch Countdown States */}
            <div className="w-full flex flex-col items-center gap-2 mt-space-md pt-space-xs text-center">
              <div className="flex items-center justify-center gap-1.5 text-secondary font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>
                {countdown > 0 ? (
                  <span>
                    Resend SMS code in{' '}
                    <span className="font-numeric-data font-semibold text-on-surface">
                      0:{countdown < 10 ? `0${countdown}` : countdown}
                    </span>
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="font-label-caps-sm uppercase tracking-wider text-primary font-semibold underline"
                  >
                    Resend SMS Code Now
                  </button>
                )}
              </div>

              <div className="flex items-center justify-center gap-space-md mt-1">
                <button
                  type="button"
                  onClick={() => showToast('Connecting to Boutique Concierge...')}
                  className="flex items-center gap-1 font-label-caps-sm text-label-caps-sm uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors py-1"
                >
                  <span className="material-symbols-outlined text-[15px]">chat</span>
                  <span>WhatsApp Concierge</span>
                </button>
                <span className="text-outline-variant text-[12px]">•</span>
                <button
                  type="button"
                  onClick={() => showToast('Calling destination with audio code...')}
                  className="flex items-center gap-1 font-label-caps-sm text-label-caps-sm uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors py-1"
                >
                  <span className="material-symbols-outlined text-[15px]">call</span>
                  <span>Call with Code</span>
                </button>
              </div>
            </div>
          </div>

          {/* Primary Action Trigger */}
          <div className="w-full mt-space-md flex flex-col gap-space-xs">
            <button
              type="button"
              disabled={digits.length < 4 || isVerifying}
              onClick={() => verifyOtp(digits.join(''))}
              className={`w-full h-14 bg-primary text-on-primary font-label-caps-lg text-label-caps-lg uppercase tracking-[0.14em] flex items-center justify-between px-space-md transition-all ${
                digits.length === 4 && !isVerifying
                  ? 'opacity-100 ring-1 ring-primary'
                  : 'opacity-70'
              }`}
            >
              <span className="flex items-center gap-2">
                {isVerifying ? (
                  <>
                    <span className="w-4 h-4 border-2 border-on-primary border-t-transparent animate-spin inline-block mr-2" />
                    <span>Verifying Pass...</span>
                  </>
                ) : (
                  <span>Verify &amp; Enter Salon</span>
                )}
              </span>
              <div className="flex items-center gap-space-xs">
                <span className="bg-surface-container-highest/20 text-on-primary px-2 py-0.5 text-[10px] tracking-normal font-normal">
                  5 Credits Unlocked
                </span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </div>
            </button>
            <div className="flex items-center justify-center gap-2 py-1">
              <span className="w-1.5 h-1.5 bg-primary" />
              <span className="font-label-caps-sm text-label-caps-sm uppercase tracking-wider text-secondary">
                Instant Pairing to Mirror-04B
              </span>
            </div>
          </div>

          {/* On-Screen Luxury Keypad (Thumb Ergonomics) */}
          <div className="w-full bg-surface-container-low border border-[#e5dfd7] p-space-sm mt-space-md">
            <div className="grid grid-cols-3 gap-2">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => handleDigitPress(num)}
                  className="h-12 bg-surface-container-lowest border border-[#e5dfd7] text-on-surface font-numeric-data text-[20px] font-medium flex items-center justify-center active:bg-surface-container-high transition-colors"
                >
                  {num}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setHasError((prev) => !prev)}
                title="Toggle Demo Error State"
                className="h-12 bg-surface-container border border-[#e5dfd7] text-on-surface-variant flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
              </button>
              <button
                type="button"
                onClick={() => handleDigitPress('0')}
                className="h-12 bg-surface-container-lowest border border-[#e5dfd7] text-on-surface font-numeric-data text-[20px] font-medium flex items-center justify-center active:bg-surface-container-high transition-colors"
              >
                0
              </button>
              <button
                type="button"
                onClick={handleBackspace}
                title="Delete"
                className="h-12 bg-surface-container border border-[#e5dfd7] text-on-surface flex items-center justify-center active:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">backspace</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Editorial Luxury Security & Privacy Footnote */}
      <div className="mt-space-lg pt-space-xs text-center flex flex-col items-center">
        <div className="flex items-center gap-1 text-secondary mb-1">
          <span className="material-symbols-outlined text-[14px]">lock</span>
          <span className="font-label-caps-sm text-label-caps-sm uppercase tracking-[0.16em]">
            End-to-End Encrypted
          </span>
        </div>
        <p className="font-body-sm text-[11px] leading-relaxed text-on-surface-variant max-w-xs">
          Private biometrics &amp; digital twin tokens are end-to-end encrypted for boutique fitting suite Mirror-04B. Never shared with third parties.
        </p>
      </div>

      {/* Interactive Toast */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-primary text-on-primary px-space-md py-space-xs flex items-center gap-space-xs border border-[#30312f]">
          <span className="material-symbols-outlined text-[16px] text-on-primary">check</span>
          <span className="font-label-caps-sm text-label-caps-sm uppercase tracking-wider text-on-primary">
            {toastMessage}
          </span>
        </div>
      )}
    </div>
  );
}
