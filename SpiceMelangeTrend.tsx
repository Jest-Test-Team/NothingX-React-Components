'use client';

import { nothing } from './theme';

/** 香料產量趨勢 */
export function SpiceMelangeTrend(props?: { values?: number[] }) {
  const v = props?.values ?? [70, 80, 75, 90, 85];
  const max = Math.max(...v, 1);
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Spice</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 32 }}>
        {v.map((h, i) => <div key={i} style={{ flex: 1, height: (h / max) * 32, borderRadius: 1, background: nothing.colors.red }} />)}
      </div>
    </div>
  );
}
