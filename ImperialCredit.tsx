'use client';

import { nothing } from './theme';

/** 銀河信用幣匯率，紅色向下折線 */
export function ImperialCredit(props?: { trend?: number[] }) {
  const trend = props?.trend ?? [100, 85, 70, 55, 45];
  const max = Math.max(...trend, 1);
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Credit</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 32 }}>
        {trend.map((v, i) => <div key={i} style={{ flex: 1, height: (v / max) * 32, borderRadius: 1, background: nothing.colors.red }} />)}
      </div>
    </div>
  );
}
