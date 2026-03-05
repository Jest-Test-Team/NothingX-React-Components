'use client';

import { nothing } from './theme';

const GLASSES = 8;

/**
 * NThing-UI Water Intake: 喝水進度追蹤（點陣水杯填滿動畫）
 */
export function WaterIntake(props: { current?: number; goal?: number }) {
  const current = Math.min(GLASSES, Math.max(0, props.current ?? 5));
  const goal = props.goal ?? GLASSES;

  return (
    <div
      style={{
        width: 160,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surfaceLight,
        flexShrink: 0,
      }}
      aria-label={`Water ${current} of ${goal} glasses`}
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 10 }}>
        Water
      </div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
        {Array.from({ length: goal }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 28,
              borderRadius: 4,
              background: i < current ? nothing.colors.red : nothing.colors.muted,
              transition: 'background 0.2s ease',
            }}
          />
        ))}
      </div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 12, color: nothing.colors.textDark }}>
        {current} / {goal} glasses
      </div>
    </div>
  );
}
