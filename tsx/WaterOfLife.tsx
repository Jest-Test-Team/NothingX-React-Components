'use client';

import { nothing } from './theme';

/** 生命之水，黑點陣慢慢濾成白 */
export function WaterOfLife(props?: { converted?: number }) {
  const p = Math.min(100, Math.max(0, props?.converted ?? 60));
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Water of Life</div>
      <div style={{ width: 48, height: 48, borderRadius: 8, background: `linear-gradient(to top, ${nothing.colors.surfaceLight} ${p}%, ${nothing.colors.textDark} ${p}%)` }} />
    </div>
  );
}
