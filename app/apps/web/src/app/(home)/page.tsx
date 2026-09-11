'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Box, Stack, Group, Text, Title, Button, Paper,
  Badge, ScrollArea, Flex, ActionIcon,
} from '@mantine/core';

// TODO Phase 2: replace mock recent try-on session thumbnails with user history from Worker API & MongoDB
const MOCK_RECENT_SESSIONS = [
  {
    id: 'session-1',
    title: "L'Hiver Tailored Coat",
    price: '\u20ac2,450',
    color: 'Noir',
    fabric: 'Cashmere Wool',
    fittedAgo: '2h ago',
    tag: 'Rendered 4K',
    fitMetric: 'Drape tension: 98% Natural',
    size: 'EU 38',
    imageSrc: '/images/high_fashion_editorial_lookbook_photo_of_an_elegant_model_wearing_an_olive.png',
    bookmarked: true,
  },
  {
    id: 'session-2',
    title: 'Aura Silk Halter Dress',
    price: '\u20ac1,890',
    color: 'Champagne',
    fabric: 'Mulberry Silk',
    fittedAgo: 'yesterday',
    tag: 'In Boutique',
    fitMetric: 'Silk Bias: Flawless drape',
    size: 'EU 36',
    imageSrc: '/images/luxury_fashion_editorial_photograph_of_a_model_in_a_fluid_draped_silk_cream.png',
    bookmarked: false,
  },
  {
    id: 'session-3',
    title: 'Travertine Linen Suit',
    price: '\u20ac2,120',
    color: 'Olive Sage',
    fabric: 'Italian Linen',
    fittedAgo: '3d ago',
    tag: 'Runway Piece',
    fitMetric: 'Ease allowance: +3.2cm',
    size: 'EU 40',
    imageSrc: '/images/high_fashion_full_body_editorial_photograph_of_a_model_wearing_an_architectural.png',
    bookmarked: false,
  },
  {
    id: 'session-4',
    title: 'Architectural Drape Saree',
    price: '\u20ac3,200',
    color: 'Obsidian & Gold',
    fabric: 'Raw Silk',
    fittedAgo: '4d ago',
    tag: 'Private Salon',
    fitMetric: 'Pallu drape: Precision pleats',
    size: 'Bespoke',
    imageSrc: '/images/high_fashion_editorial_portrait_of_an_elegant_woman_serene_expression_minimal.png',
    bookmarked: true,
  },
];

export default function HomePage() {
  const [creditBalance] = useState<number>(13);
  const [savedItems, setSavedItems] = useState<Record<string, boolean>>({
    'session-1': true,
    'session-4': true,
  });
  const [toastMessage, setToastMessage] = useState<{ text: string; icon: string } | null>(null);

  const showToast = (text: string, icon = 'check') => {
    setToastMessage({ text, icon });
    setTimeout(() => setToastMessage(null), 2500);
  };

  const toggleBookmark = (id: string, title: string) => {
    setSavedItems((prev) => {
      const nextState = !prev[id];
      showToast(nextState ? `Saved ${title}` : `Removed ${title}`, nextState ? 'bookmark' : 'bookmark_border');
      return { ...prev, [id]: nextState };
    });
  };

  return (
    <Stack gap={0} pb="xl">
      {/* Boutique Context Bar */}
      <Box px={20} pt={16} pb={8}>
        <Group justify="space-between" align="center">
          <Group gap={6}>
            <Box w={6} h={6} style={{ background: '#1A1A1A' }} />
            <Text size="xs" c="#6B6560" tt="uppercase" style={{ letterSpacing: '0.12em' }}>
              Rue Saint-Honor\u00e9 Boutique \u2022 Salon 04
            </Text>
          </Group>
          <Text size="xs" c="#6B6560" ff="monospace">16:42 CET</Text>
        </Group>
        <Box mt={8}>
          <Title order={1} style={{ fontFamily: 'var(--font-bodoni), Bodoni Moda, Georgia, serif', fontWeight: 400, fontSize: 26, color: '#1A1A1A' }}>
            Good afternoon, Elena
          </Title>
          <Text size="sm" c="#6B6560" mt={2}>
            Your bespoke digital mirror and fitting suite are ready.
          </Text>
        </Box>
      </Box>

      {/* Credit Balance Card */}
      <Box px={20} mb={16}>
        <Paper withBorder p="md" radius="xs" style={{ borderColor: '#E8E0D6', background: '#fff' }}>
          <Group justify="space-between" align="flex-start">
            <Stack gap={4}>
              <Text size="xs" c="#6B6560" tt="uppercase" style={{ letterSpacing: '0.12em' }}>
                Available Atelier Credits
              </Text>
              <Group align="baseline" gap={8}>
                <Text
                  style={{ fontFamily: 'var(--font-bodoni), Bodoni Moda, serif', fontSize: 42, fontWeight: 400, lineHeight: 1, color: '#1A1A1A' }}
                >
                  {creditBalance}
                </Text>
                <Text size="xs" c="#6B6560" tt="uppercase" style={{ letterSpacing: '0.08em' }}>Fittings remaining</Text>
              </Group>
            </Stack>
            <ActionIcon
              variant="light"
              color="gray"
              size="sm"
              radius="xs"
              onClick={() => showToast('Unlimited in-boutique scans valid today', 'star')}
              aria-label="Credit info"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>info</span>
            </ActionIcon>
          </Group>
          <Box
            mt="sm"
            p="xs"
            style={{ background: '#FAF8F5', border: '1px solid #E8E0D6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Group gap={6}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#1A1A1A' }}>verified</span>
              <Text size="xs" c="#1A1A1A">Complimentary in-store concierge scans active</Text>
            </Group>
            <Text size="xs" c="#6B6560" tt="uppercase" style={{ letterSpacing: '0.08em' }}>Tier I</Text>
          </Box>
        </Paper>
      </Box>

      {/* Primary CTAs */}
      <Stack gap="xs" px={20} mb={24}>
        <Button
          component={Link}
          href="/try-on"
          fullWidth
          size="lg"
          color="dark"
          radius="xs"
          rightSection={<span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>}
          leftSection={<span className="material-symbols-outlined" style={{ fontSize: 20 }}>crop_free</span>}
          styles={{ root: { height: 52 } }}
        >
          Start Virtual Try-On
        </Button>
        <Group grow gap="xs">
          <Button
            variant="outline"
            color="dark"
            radius="xs"
            onClick={() => showToast('Optical Scanner Active', 'qr_code_scanner')}
            leftSection={<span className="material-symbols-outlined" style={{ fontSize: 18 }}>qr_code_scanner</span>}
            styles={{ root: { borderColor: '#E8E0D6', height: 44 } }}
          >
            Scan Rack
          </Button>
          <Button
            component={Link}
            href="/wallet"
            variant="outline"
            color="dark"
            radius="xs"
            leftSection={<span className="material-symbols-outlined" style={{ fontSize: 18 }}>add</span>}
            styles={{ root: { borderColor: '#E8E0D6', height: 44 } }}
          >
            Buy Credits
          </Button>
        </Group>
        <Text size="xs" c="#6B6560" ta="center">
          Hold device against garment NFC puck to simulate instantaneously
        </Text>
      </Stack>

      {/* Recent Sessions */}
      <Box mb={24}>
        <Group justify="space-between" align="center" px={20} mb={12}>
          <Group gap={6}>
            <Text size="xs" fw={600} tt="uppercase" c="#1A1A1A" style={{ letterSpacing: '0.14em' }}>Recent Sessions</Text>
            <Box w={4} h={4} style={{ background: '#6B6560', borderRadius: '50%' }} />
            <Text size="xs" c="#6B6560">Fall/Winter Salon</Text>
          </Group>
          <Button component={Link} href="/history" variant="subtle" size="xs" color="dark">
            Archive (12)
          </Button>
        </Group>
        <ScrollArea type="never" offsetScrollbars={false}>
          <Group
            gap="md"
            px={20}
            pb={8}
            wrap="nowrap"
            style={{ width: 'max-content' }}
          >
            {MOCK_RECENT_SESSIONS.map((session) => {
              const isBookmarked = !!savedItems[session.id];
              return (
                <Box
                  key={session.id}
                  style={{
                    width: 240,
                    flexShrink: 0,
                    border: '1px solid #E8E0D6',
                    background: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Image container 3:4 */}
                  <Box style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden', background: '#EDE8E0' }}>
                    <Image
                      src={session.imageSrc}
                      alt={session.title}
                      fill
                      sizes="240px"
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                    {/* Status tag */}
                    <Box
                      style={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        background: 'rgba(255,255,255,0.95)',
                        border: '1px solid #E8E0D6',
                        padding: '2px 6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      <Box w={5} h={5} style={{ background: '#1A1A1A', flexShrink: 0 }} />
                      <Text size="xs" fw={600} tt="uppercase" style={{ fontSize: 9, letterSpacing: '0.1em' }}>{session.tag}</Text>
                    </Box>
                    {/* Bookmark */}
                    <ActionIcon
                      size="sm"
                      radius="xs"
                      variant="white"
                      onClick={() => toggleBookmark(session.id, session.title)}
                      aria-label={`Bookmark ${session.title}`}
                      style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        border: '1px solid #E8E0D6',
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                        {isBookmarked ? 'bookmark' : 'bookmark_border'}
                      </span>
                    </ActionIcon>
                    {/* Fit metric scrim */}
                    <Box
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'rgba(26,26,26,0.85)',
                        padding: '4px 8px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Text size="xs" c="#fff" style={{ fontSize: 10 }}>{session.fitMetric}</Text>
                      <Text size="xs" c="#fff" ff="monospace" style={{ fontSize: 10 }}>{session.size}</Text>
                    </Box>
                  </Box>
                  {/* Card metadata */}
                  <Box p="xs">
                    <Group justify="space-between" align="baseline" mb={4}>
                      <Text
                        style={{ fontFamily: 'var(--font-bodoni), Bodoni Moda, serif', fontSize: 13, fontWeight: 500, color: '#1A1A1A' }}
                      >
                        {session.title}
                      </Text>
                      <Text ff="monospace" size="xs" c="#1A1A1A">{session.price}</Text>
                    </Group>
                    <Text size="xs" c="#6B6560" mb={8}>
                      {session.color} \u2022 {session.fabric} \u2022 {session.fittedAgo}
                    </Text>
                    <Group grow gap={4}>
                      <Button
                        size="xs"
                        variant="light"
                        color="gray"
                        radius="xs"
                        onClick={() => showToast(`Matrix loaded`, 'view_in_ar')}
                        styles={{ root: { border: '1px solid #E8E0D6', fontSize: 10, height: 32 } }}
                      >
                        View Matrix
                      </Button>
                      <Button
                        size="xs"
                        color="dark"
                        radius="xs"
                        onClick={() => showToast('Garment queued for Suite 4', 'checkroom')}
                        styles={{ root: { fontSize: 10, height: 32 } }}
                      >
                        Request Rack
                      </Button>
                    </Group>
                  </Box>
                </Box>
              );
            })}
          </Group>
        </ScrollArea>
      </Box>

      {/* Concierge Callout */}
      <Box px={20} mb={24}>
        <Paper
          withBorder
          p="md"
          radius="xs"
          style={{ borderColor: '#E8E0D6', background: '#F5F2ED' }}
        >
          <Group justify="space-between" mb="xs">
            <Group gap={6}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#1A1A1A' }}>notifications_active</span>
              <Text size="xs" fw={600} tt="uppercase" c="#1A1A1A" style={{ letterSpacing: '0.12em' }}>Private Salon Concierge</Text>
            </Group>
            <Text size="xs" c="#6B6560" tt="uppercase">Assigned: Julien M.</Text>
          </Group>
          <Text size="xs" c="#1A1A1A" mb="sm">
            Physical pieces from your try-on session can be brought straight to Fitting Room 4 in minutes.
          </Text>
          <Group gap="xs">
            <Button
              style={{ flex: 1 }}
              color="dark"
              radius="xs"
              size="sm"
              leftSection={<span className="material-symbols-outlined" style={{ fontSize: 16 }}>concierge</span>}
              onClick={() => showToast('Stylist Julien M. notified', 'room_service')}
              styles={{ root: { height: 44 } }}
            >
              Summon Stylist
            </Button>
            <ActionIcon
              variant="outline"
              color="dark"
              size={44}
              radius="xs"
              aria-label="Mirror lighting"
              onClick={() => showToast('Mirror Light: Golden Hour 3200K', 'wb_sunny')}
              style={{ borderColor: '#E8E0D6' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>wb_sunny</span>
            </ActionIcon>
          </Group>
        </Paper>
      </Box>

      {/* Action Feedback Toast */}
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
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{toastMessage.icon}</span>
          <Text size="xs" fw={600} tt="uppercase" c="#fff" style={{ letterSpacing: '0.08em' }}>
            {toastMessage.text}
          </Text>
        </Box>
      )}
    </Stack>
  );
}
