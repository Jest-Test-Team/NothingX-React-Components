'use client';

import { nothing } from './theme';

/** 第二基地精神力量，平緩微小波 */
export function MentalicsWave() {
  const pts = [20, 22, 21, 23, 22, 21, 22];
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Mentalics</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 28 }}>
        {pts.map((h, i) => <div key={i} style={{ flex: 1, height: h, borderRadius: 1, background: nothing.colors.muted }} />)}
      </div>
    </div>
  );
}
