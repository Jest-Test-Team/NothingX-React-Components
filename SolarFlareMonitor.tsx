'use client';

import { nothing } from './theme';

type Level = 'low' | 'moderate' | 'high' | 'extreme';

/** 太空天氣/太陽風暴警報；高時紅色 */
export function SolarFlareMonitor(props?: { level?: Level }) {
  const level = props?.level ?? 'low';
  const isHigh = level === 'high' || level === 'extreme';

  return (
    <div
      style={{
        padding: 14,
        borderRadius: nothing.radius.card,
        background: isHigh ? nothing.colors.surface : nothing.colors.surface,
        border: `2px solid ${isHigh ? nothing.colors.red : nothing.colors.circleBg}`,
      }}
      aria-label={`Solar flare ${level}`}
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Solar</div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 14, fontWeight: 700, color: isHigh ? nothing.colors.red : nothing.colors.surfaceLight }}>{level}</div>
    </div>
  );
}
