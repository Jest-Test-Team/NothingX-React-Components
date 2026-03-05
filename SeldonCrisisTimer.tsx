'use client';

import { nothing } from './theme';

/** 謝頓危機倒數，終端機風格 */
export function SeldonCrisisTimer(props?: { daysToCrisis?: number }) {
  const days = props?.daysToCrisis ?? 1247;
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.bg, fontFamily: 'monospace', fontSize: 12, color: nothing.colors.muted }}>
      <div style={{ color: nothing.colors.red, marginBottom: 6 }}>SELDON CRISIS</div>
      <div style={{ color: nothing.colors.surfaceLight }}>{days} days</div>
    </div>
  );
}
