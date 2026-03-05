'use client';

import { nothing } from './theme';

const DOTS = 12;

/**
 * NThing-UI Volume Control: 音量大小的點陣滑塊
 */
export function VolumeControl(props: { volume?: number; onChange?: (v: number) => void }) {
  const volume = Math.min(100, Math.max(0, props.volume ?? 70));
  const activeDots = Math.round((volume / 100) * DOTS);

  return (
    <div
      style={{
        width: 160,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label={`Volume ${volume}%`}
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>
        Volume
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {Array.from({ length: DOTS }).map((_, i) => (
          <div
            key={i}
            role="slider"
            tabIndex={0}
            aria-valuenow={volume}
            aria-valuemin={0}
            aria-valuemax={100}
            onClick={() => props.onChange?.(Math.round(((i + 1) / DOTS) * 100))}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') props.onChange?.(Math.max(0, volume - 10));
              if (e.key === 'ArrowRight') props.onChange?.(Math.min(100, volume + 10));
            }}
            style={{
              width: 8,
              height: 24,
              borderRadius: 2,
              background: i < activeDots ? nothing.colors.red : nothing.colors.circleBg,
              cursor: 'pointer',
              transition: 'background 0.2s ease',
            }}
          />
        ))}
      </div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 12, color: nothing.colors.surfaceLight, marginTop: 6 }}>
        {volume}%
      </div>
    </div>
  );
}
