'use client';

import { nothing } from './theme';

/**
 * NThing-UI Sleep Summary: 昨晚睡眠時數與品質長條圖
 */
export function SleepSummary(props: { hours?: number; quality?: number; label?: string }) {
  const hours = props.hours ?? 7.5;
  const quality = Math.min(100, Math.max(0, props.quality ?? 80));
  const label = props.label ?? 'Last night';

  return (
    <div
      style={{
        width: 185,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label={`Sleep ${hours}h quality ${quality}%`}
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>
        Sleep
      </div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 24, fontWeight: 700, color: nothing.colors.surfaceLight, marginBottom: 4 }}>
        {hours}h
      </div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.muted, marginBottom: 10 }}>{label}</div>
      <div style={{ height: 8, borderRadius: 4, background: nothing.colors.circleBg, overflow: 'hidden' }}>
        <div
          style={{
            width: `${quality}%`,
            height: '100%',
            borderRadius: 4,
            background: quality >= 70 ? nothing.colors.text : nothing.colors.red,
            transition: 'width 0.3s ease',
          }}
        />
      </div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.muted, marginTop: 4 }}>Quality {quality}%</div>
    </div>
  );
}
