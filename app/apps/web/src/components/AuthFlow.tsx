'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Box, Stack, Group, Text, Title, Button, Paper,
  TextInput, NativeSelect, Alert, Grid,
} from '@mantine/core';

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
    if (codeString === '0000') {
      setHasError(true);
      return;
    }

    // TODO Phase 2: replace with real OTP provider + Worker verification endpoint.
    setIsVerifying(true);
    setHasError(false);

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
    <Box style={{ width: '100%', maxWidth: 440, margin: '0 auto', padding: '16px 20px 48px' }}>
      <Paper withBorder p="sm" mb="md" radius="xs" style={{ background: '#FAF8F5', borderColor: '#E8E0D6' }}>
        <Group align="flex-start" gap="xs" wrap="nowrap">
          <span className="material-symbols-outlined" style={{ color: '#1A1A1A', fontSize: 18, marginTop: 2 }}>
            location_on
          </span>
          <Box style={{ flex: 1, minWidth: 0 }}>
            <Group justify="space-between" align="center" gap="xs">
              <Text size="xs" fw={600} tt="uppercase" c="#1A1A1A" style={{ letterSpacing: '0.12em' }} truncate>
                ABC Fashion — MVP Colony
              </Text>
              <Group gap={4} style={{ background: '#F5F2ED', padding: '2px 8px', border: '1px solid #E8E0D6' }}>
                <Box w={6} h={6} style={{ background: '#1A1A1A' }} />
                <Text size="xs" style={{ fontSize: 11, fontFamily: 'monospace' }}>Live Salon</Text>
              </Group>
            </Group>
            <Group gap={8} mt={4}>
              <Text size="xs" c="#6B6560">Salon Mirror-04B</Text>
              <Text size="xs" c="#6B6560">•</Text>
              <Text size="xs" fw={500} c="#1A1A1A">5 In-Store Credits Attached</Text>
            </Group>
          </Box>
        </Group>
      </Paper>

      <Stack align="center" ta="center" my="xs" gap="xs">
        <Box style={{ position: 'relative', width: 112, height: 36, marginBottom: 8 }}>
          <Image
            src="/assets/vton_wordmark_logo/screen.png"
            alt="VTON Brand Monogram"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </Box>
        <Text size="xs" tt="uppercase" c="#6B6560" style={{ letterSpacing: '0.2em' }}>Boutique Guest Pass</Text>
        <Title order={1} style={{ fontFamily: 'var(--font-bodoni), Bodoni Moda, Georgia, serif', fontWeight: 400, fontSize: 28, color: '#1A1A1A', fontStyle: 'italic' }}>
          {step === 'login' ? 'Boutique Sign In' : 'Verify Fitting Pass'}
        </Title>
        <Text size="sm" c="#6B6560" style={{ maxWidth: 310 }}>
          {step === 'login'
            ? 'Enter your mobile phone number to receive a one-time verification pass.'
            : 'A 4-digit one-time code has been sent via SMS to verify your private digital twin session.'}
        </Text>
      </Stack>

      {step === 'login' && (
        <form onSubmit={handleSendOtp}>
          <Stack gap="sm" mt="sm">
            <Paper withBorder p="md" radius="xs" style={{ background: '#FFFFFF', borderColor: '#E8E0D6' }}>
              <Stack gap="xs">
                <Text component="label" htmlFor="phone-input" size="xs" tt="uppercase" c="#6B6560" style={{ letterSpacing: '0.12em' }}>
                  Mobile Phone Number
                </Text>
                <Group gap="xs" wrap="nowrap">
                  <NativeSelect
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.currentTarget.value)}
                    data={[
                      { label: '+1 (US)', value: '+1' },
                      { label: '+91 (IN)', value: '+91' },
                      { label: '+44 (UK)', value: '+44' },
                      { label: '+33 (FR)', value: '+33' },
                    ]}
                    radius="xs"
                    styles={{ input: { height: 48, fontFamily: 'monospace', borderColor: '#E8E0D6' } }}
                  />
                  <TextInput
                    id="phone-input"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="(555) 849-2104"
                    radius="xs"
                    required
                    style={{ flex: 1 }}
                    styles={{ input: { height: 48, fontFamily: 'monospace', borderColor: '#E8E0D6' } }}
                  />
                </Group>
                <Text size="xs" c="#6B6560" style={{ fontSize: 11 }}>
                  Used strictly for in-salon mirror pairing and fitting room delivery alerts.
                </Text>
              </Stack>
            </Paper>

            <Button
              type="submit"
              color="dark"
              radius="xs"
              size="lg"
              fullWidth
              rightSection={<span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>}
              styles={{ root: { height: 56, letterSpacing: '0.14em' } }}
            >
              Send OTP
            </Button>
          </Stack>
        </form>
      )}

      {step === 'otp' && (
        <Stack gap={0}>
          <Paper withBorder p="sm" mt="sm" mb="md" radius="xs" style={{ background: '#FAF8F5', borderColor: '#E8E0D6' }}>
            <Group justify="space-between" align="center" wrap="nowrap">
              <Group gap="sm" wrap="nowrap" style={{ minWidth: 0 }}>
                <Box
                  style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5F2ED', border: '1px solid #E8E0D6', fontSize: 12, fontFamily: 'monospace' }}
                >
                  {countryCode}
                </Box>
                <Stack gap={0} style={{ minWidth: 0 }}>
                  <Text size="xs" tt="uppercase" c="#6B6560" style={{ letterSpacing: '0.12em' }}>SMS Dispatch Destination</Text>
                  <Text size="sm" fw={500} style={{ fontFamily: 'monospace' }} truncate>{countryCode} {phoneNumber}</Text>
                </Stack>
              </Group>
              <Button variant="subtle" color="dark" size="xs" onClick={() => setStep('login')} rightSection={<span className="material-symbols-outlined" style={{ fontSize: 16 }}>edit</span>}>
                Edit
              </Button>
            </Group>
          </Paper>

          <Paper withBorder p="md" radius="xs" style={{ background: '#FFFFFF', borderColor: '#E8E0D6' }}>
            <Stack align="center" gap="md">
              <Group gap="sm" style={{ cursor: 'text' }} onClick={() => hiddenInputRef.current?.focus()}>
                {[0, 1, 2, 3].map((index) => {
                  const val = digits[index];
                  const isFocused = index === digits.length;
                  return (
                    <Box
                      key={index}
                      style={{
                        width: 48,
                        height: 56,
                        border: `1px solid ${isFocused ? '#1A1A1A' : '#E8E0D6'}`,
                        background: isFocused ? '#F5F2ED' : '#FAF8F5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 150ms',
                      }}
                    >
                      {val ? (
                        <Text style={{ fontFamily: 'monospace', fontSize: 24, fontWeight: 500, color: '#1A1A1A' }}>{val}</Text>
                      ) : isFocused ? (
                        <Box style={{ width: 2, height: 24, background: '#1A1A1A' }} />
                      ) : null}
                    </Box>
                  );
                })}
              </Group>

              <input
                ref={hiddenInputRef}
                type="tel"
                maxLength={4}
                value={digits.join('')}
                onChange={(e) => {
                  const clean = e.target.value.replace(/\D/g, '').slice(0, 4);
                  setDigits(clean.split(''));
                  setHasError(false);
                  if (clean.length === 4) verifyOtp(clean);
                }}
                className="sr-only"
                style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}
                aria-label="4-digit verification code"
              />

              {hasError && (
                <Alert color="red" radius="xs" icon={<span className="material-symbols-outlined" style={{ fontSize: 18 }}>error</span>} styles={{ root: { width: '100%' } }}>
                  Incorrect code. 2 attempts remaining before 5-minute lockout.
                </Alert>
              )}

              <Stack gap="xs" align="center" mt="md">
                <Group gap={6}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#6B6560' }}>schedule</span>
                  {countdown > 0 ? (
                    <Text size="sm" c="#6B6560">
                      Resend SMS code in <Text component="span" fw={600} c="#1A1A1A" style={{ fontFamily: 'monospace' }}>0:{countdown < 10 ? `0${countdown}` : countdown}</Text>
                    </Text>
                  ) : (
                    <Text component="button" size="sm" fw={600} c="dark" td="underline" onClick={handleResend} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                      Resend SMS Code Now
                    </Text>
                  )}
                </Group>

                <Group gap="md">
                  <Text component="button" size="xs" tt="uppercase" c="#6B6560" onClick={() => showToast('Connecting to Boutique Concierge...')} style={{ display: 'flex', alignItems: 'center', gap: 4, letterSpacing: '0.12em', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 15 }}>chat</span>
                    WhatsApp Concierge
                  </Text>
                  <Text size="xs" c="#E8E0D6">•</Text>
                  <Text component="button" size="xs" tt="uppercase" c="#6B6560" onClick={() => showToast('Calling destination with audio code...')} style={{ display: 'flex', alignItems: 'center', gap: 4, letterSpacing: '0.12em', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 15 }}>call</span>
                    Call with Code
                  </Text>
                </Group>
              </Stack>
            </Stack>
          </Paper>

          <Stack gap="xs" mt="md">
            <Button
              disabled={digits.length < 4 || isVerifying}
              onClick={() => verifyOtp(digits.join(''))}
              color="dark"
              radius="xs"
              size="lg"
              fullWidth
              style={{ height: 56, letterSpacing: '0.14em' }}
            >
              <Group justify="space-between" style={{ width: '100%' }}>
                <Group gap="sm">
                  {isVerifying ? (
                    <>
                      <Box style={{ width: 16, height: 16, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                      <span>Verifying Pass...</span>
                    </>
                  ) : (
                    <span>Verify &amp; Enter Salon</span>
                  )}
                </Group>
                <Group gap="xs">
                  <Text style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 8px', fontSize: 10, letterSpacing: 'normal' }}>5 Credits Unlocked</Text>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                </Group>
              </Group>
            </Button>
            <Group justify="center" gap="sm">
              <Box w={6} h={6} style={{ background: '#1A1A1A' }} />
              <Text size="xs" tt="uppercase" c="#6B6560" style={{ letterSpacing: '0.12em' }}>Instant Pairing to Mirror-04B</Text>
            </Group>
          </Stack>

          <Paper withBorder p="sm" mt="md" radius="xs" style={{ background: '#FAF8F5', borderColor: '#E8E0D6' }}>
            <Grid columns={3} gutter="sm">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
                <Grid.Col span={1} key={num}>
                  <Button variant="default" radius="xs" fullWidth onClick={() => handleDigitPress(num)} style={{ height: 48, fontSize: 20, fontFamily: 'monospace', borderColor: '#E8E0D6' }}>
                    {num}
                  </Button>
                </Grid.Col>
              ))}
              <Grid.Col span={1}>
                <Button variant="default" radius="xs" fullWidth onClick={() => setHasError((prev) => !prev)} style={{ height: 48, borderColor: '#E8E0D6' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>verified_user</span>
                </Button>
              </Grid.Col>
              <Grid.Col span={1}>
                <Button variant="default" radius="xs" fullWidth onClick={() => handleDigitPress('0')} style={{ height: 48, fontSize: 20, fontFamily: 'monospace', borderColor: '#E8E0D6' }}>
                  0
                </Button>
              </Grid.Col>
              <Grid.Col span={1}>
                <Button variant="default" radius="xs" fullWidth onClick={handleBackspace} style={{ height: 48, borderColor: '#E8E0D6' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>backspace</span>
                </Button>
              </Grid.Col>
            </Grid>
          </Paper>
        </Stack>
      )}

      <Stack align="center" mt="xl" pt="xs" gap={4}>
        <Group gap={4}>
          <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#6B6560' }}>lock</span>
          <Text size="xs" tt="uppercase" c="#6B6560" style={{ letterSpacing: '0.16em' }}>End-to-End Encrypted</Text>
        </Group>
        <Text size="xs" c="#6B6560" ta="center" style={{ fontSize: 11, maxWidth: 320 }}>
          Private biometrics &amp; digital twin tokens are end-to-end encrypted for boutique fitting suite Mirror-04B. Never shared with third parties.
        </Text>
      </Stack>

      {toastMessage && (
        <Box
          style={{
            position: 'fixed',
            bottom: 80,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 100,
            background: '#1A1A1A',
            color: '#fff',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            border: '1px solid #333',
            whiteSpace: 'nowrap',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>check</span>
          <Text size="xs" fw={600} tt="uppercase" c="#fff" style={{ letterSpacing: '0.08em' }}>
            {toastMessage}
          </Text>
        </Box>
      )}
    </Box>
  );
}
