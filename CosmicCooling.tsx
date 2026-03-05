'use client';

import { nothing } from './theme';

/** 宇宙熱寂倒數，刻度兆年 */
export function CosmicCooling(props?: { yearsRemaining?: number }) {
  const years = props?.yearsRemaining ?? 10_000_000_000_000;
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Heat Death</div>
      <div style={{ fontFamily: 'monospace', fontSize: 14, color: nothing.colors.surfaceLight }}>~{(years / 1e12).toFixed(1)} T yr</div>
    </div>
  );
}
