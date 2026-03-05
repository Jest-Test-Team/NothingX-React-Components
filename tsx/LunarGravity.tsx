'use client';

import { nothing } from './theme';

/** 1/6 G 月球重力狀態燈 */
export function LunarGravity(props?: { active?: boolean }) {
  const active = props?.active ?? true;
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Lunar</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: active ? nothing.colors.red : nothing.colors.circleBg }} />
        <span style={{ fontFamily: 'monospace', fontSize: 12, color: nothing.colors.surfaceLight }}>1/6 G</span>
      </div>
    </div>
  );
}
