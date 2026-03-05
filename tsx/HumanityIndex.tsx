'use client';

import { nothing } from './theme';

/** 人性轉化指數，漫長進度條 */
export function HumanityIndex(props?: { percent?: number }) {
  const p = Math.min(100, Math.max(0, props?.percent ?? 67));
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Humanity</div>
      <div style={{ height: 8, borderRadius: 4, background: nothing.colors.circleBg, overflow: 'hidden' }}>
        <div style={{ width: `${p}%`, height: '100%', background: nothing.colors.red }} />
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 12, color: nothing.colors.surfaceLight }}>{p}%</div>
    </div>
  );
}
