'use client';

import { nothing } from './theme';

/** 平行宇宙能源折線，數值巔峰 */
export function ParaEnergyFeed(props?: { values?: number[] }) {
  const values = props?.values ?? [98, 99, 100, 99, 100, 100];
  const max = Math.max(...values, 1);
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Para Energy</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 32 }}>
        {values.map((v, i) => <div key={i} style={{ flex: 1, height: (v / max) * 32, borderRadius: 1, background: nothing.colors.red }} />)}
      </div>
    </div>
  );
}
