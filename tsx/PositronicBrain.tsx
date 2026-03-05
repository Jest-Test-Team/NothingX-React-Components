'use client';

import { nothing } from './theme';

/** 正子腦節點圖，載入時發光 */
export function PositronicBrain(props?: { active?: boolean }) {
  const active = props?.active ?? false;
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Positronic</div>
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: nothing.colors.circleBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 24, height: 24, borderRadius: '50%', background: active ? nothing.colors.red : nothing.colors.surfaceLight, opacity: active ? 1 : 0.5 }} />
      </div>
    </div>
  );
}
