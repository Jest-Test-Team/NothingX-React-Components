'use client';

import { nothing } from './theme';

const OVERHEAT_THRESHOLD = 75;

/**
 * NThing-UI Temperature: 設備溫度監控（過熱時紅色點陣顯示）
 */
export function Temperature(props: { celsius?: number; label?: string }) {
  const celsius = props.celsius ?? 42;
  const label = props.label ?? 'CPU';
  const isOverheat = celsius >= OVERHEAT_THRESHOLD;

  return (
    <div
      style={{
        width: 120,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        flexShrink: 0,
      }}
      aria-label={`Temperature ${celsius}°C ${label}`}
    >
      <span
        style={{
          fontFamily: 'var(--font-headline, system-ui)',
          fontSize: 28,
          fontWeight: 700,
          color: isOverheat ? nothing.colors.red : nothing.colors.surfaceLight,
          letterSpacing: 1,
        }}
      >
        {celsius}°
      </span>
      <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase' }}>
        {label}
      </span>
      <div style={{ display: 'flex', gap: 2, marginTop: 4 }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: i < Math.min(8, Math.round((celsius / 100) * 8)) ? (isOverheat ? nothing.colors.red : nothing.colors.text) : nothing.colors.circleBg,
            }}
          />
        ))}
      </div>
    </div>
  );
}
