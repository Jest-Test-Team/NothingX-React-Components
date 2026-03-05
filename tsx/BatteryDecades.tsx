'use client';

import { nothing } from './theme';

/** 電池剩餘 150 年 */
export function BatteryDecades(props?: { years?: number }) {
  const years = props?.years ?? 150;
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Battery</div>
      <div style={{ fontFamily: 'monospace', fontSize: 18, color: nothing.colors.surfaceLight }}>{years} yr</div>
    </div>
  );
}
