'use client';

import { nothing } from './theme';

/**
 * NThing-UI Radio Tuner: 復古收音機調頻介面（FM/AM）
 */
export function RadioTuner(props: { frequency?: number; band?: 'FM' | 'AM'; station?: string }) {
  const frequency = props.frequency ?? 98.5;
  const band = props.band ?? 'FM';
  const station = props.station ?? '—';

  return (
    <div
      style={{
        width: 185,
        padding: 16,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label={`Radio ${band} ${frequency}`}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase' }}>Radio</span>
        <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.muted }}>{band}</span>
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 28, fontWeight: 700, color: nothing.colors.surfaceLight, letterSpacing: 2, marginBottom: 4 }}>
        {frequency.toFixed(1)}
      </div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 11, color: nothing.colors.muted, marginBottom: 14 }}>{station}</div>
      <div style={{ display: 'flex', gap: 4 }}>
        {[88, 90, 92, 94, 96, 98, 100, 102, 104, 106].map((f) => (
          <div
            key={f}
            style={{
              flex: 1,
              height: 6,
              borderRadius: 1,
              background: Math.abs(f - frequency) < 2 ? nothing.colors.red : nothing.colors.circleBg,
            }}
          />
        ))}
      </div>
    </div>
  );
}
