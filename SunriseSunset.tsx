'use client';

import { nothing } from './theme';

/**
 * NThing-UI Sunrise Sunset: 日出與日落時間，帶有點陣半圓形軌跡
 */
export function SunriseSunset(props: { sunrise?: string; sunset?: string }) {
  const sunrise = props.sunrise ?? '06:24';
  const sunset = props.sunset ?? '18:05';

  return (
    <div
      style={{
        width: 185,
        padding: 16,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label={`Sunrise ${sunrise} Sunset ${sunset}`}
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 10 }}>
        Sun
      </div>
      <div style={{ position: 'relative', height: 50, marginBottom: 12 }}>
        <svg width="100%" height={50} viewBox="0 0 160 50" preserveAspectRatio="none">
          <path
            d="M 0 50 Q 80 0 160 50"
            fill="none"
            stroke={nothing.colors.circleBg}
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M 0 50 Q 80 0 160 50"
            fill="none"
            stroke={nothing.colors.red}
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeDashoffset="0"
          />
        </svg>
        <div style={{ position: 'absolute', left: 0, bottom: 0, width: 8, height: 8, borderRadius: '50%', background: nothing.colors.red }} />
        <div style={{ position: 'absolute', right: 0, bottom: 0, width: 8, height: 8, borderRadius: '50%', background: nothing.colors.text }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 9, color: nothing.colors.muted }}>Sunrise</div>
          <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 14, fontWeight: 700, color: nothing.colors.surfaceLight }}>{sunrise}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 9, color: nothing.colors.muted }}>Sunset</div>
          <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 14, fontWeight: 700, color: nothing.colors.surfaceLight }}>{sunset}</div>
        </div>
      </div>
    </div>
  );
}
