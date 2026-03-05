'use client';

import { nothing } from './theme';

/** 土壤濕度；需澆水時紅燈 */
export function PlantMoisture(props?: { level?: number; threshold?: number }) {
  const level = Math.min(100, Math.max(0, props?.level ?? 35));
  const threshold = props?.threshold ?? 30;
  const needWater = level < threshold;

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Plant moisture">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Moisture</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: needWater ? nothing.colors.red : nothing.colors.surfaceLight }} />
        <span style={{ fontFamily: 'monospace', fontSize: 16, color: nothing.colors.surfaceLight }}>{level}%</span>
      </div>
    </div>
  );
}
