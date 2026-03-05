'use client';

import { nothing } from './theme';

/**
 * NThing-UI Pill Badge: 膠囊形狀標籤（如 LIVE, OFF）
 */
export function PillBadge(props: { children: React.ReactNode; variant?: 'live' | 'off' | 'neutral' }) {
  const variant = props.variant ?? 'neutral';
  const bg = variant === 'live' ? nothing.colors.red : variant === 'off' ? nothing.colors.circleBg : nothing.colors.muted;
  const color = variant === 'off' ? nothing.colors.muted : nothing.colors.surfaceLight;

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 10px',
        borderRadius: 999,
        background: bg,
        color,
        fontFamily: 'var(--font-headline, system-ui)',
        fontSize: 10,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
      }}
    >
      {props.children}
    </span>
  );
}
