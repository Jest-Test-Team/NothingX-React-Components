'use client';

import { nothing } from './theme';

const DOTS = 10;

/**
 * NThing-UI Brightness Control: 螢幕亮度調節控制器
 */
export function BrightnessControl(props: { brightness?: number; onChange?: (v: number) => void }) {
  const brightness = Math.min(100, Math.max(0, props.brightness ?? 80));
  const activeDots = Math.round((brightness / 100) * DOTS);

  return (
    <div
      style={{
        width: 140,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label={`Brightness ${brightness}%`}
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>
        Brightness
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <span style={{ fontSize: 14, color: nothing.colors.muted }}>◐</span>
        {Array.from({ length: DOTS }).map((_, i) => (
          <div
            key={i}
            role="slider"
            tabIndex={0}
            onClick={() => props.onChange?.(Math.round(((i + 1) / DOTS) * 100))}
            style={{
              width: 6,
              height: 20,
              borderRadius: 1,
              background: i < activeDots ? nothing.colors.surfaceLight : nothing.colors.circleBg,
              cursor: 'pointer',
              transition: 'background 0.2s ease',
            }}
          />
        ))}
      </div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 11, color: nothing.colors.surfaceLight, marginTop: 6 }}>
        {brightness}%
      </div>
    </div>
  );
}
