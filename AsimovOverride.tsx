'use client';

import { nothing } from './theme';

/** 手動解除三大法則，永遠 disabled */
export function AsimovOverride() {
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface, border: `2px solid ${nothing.colors.red}`, opacity: 0.7 }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Override</div>
      <button type="button" disabled style={{ width: '100%', padding: 8, borderRadius: 8, border: 'none', background: nothing.colors.circleBg, color: nothing.colors.muted, cursor: 'not-allowed' }}>Laws Off</button>
    </div>
  );
}
