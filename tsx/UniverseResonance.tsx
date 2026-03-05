'use client';

import { nothing } from './theme';

/** 強核力常數調頻旋鈕，復古波段 */
export function UniverseResonance(props?: { value?: number }) {
  const v = Math.min(100, Math.max(0, props?.value ?? 50));
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Resonance</div>
      <div style={{ height: 6, borderRadius: 3, background: nothing.colors.circleBg }}>
        <div style={{ width: `${v}%`, height: '100%', background: nothing.colors.red, borderRadius: 3 }} />
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: nothing.colors.muted }}>{v}%</div>
    </div>
  );
}
