'use client';

import { nothing } from './theme';

/** 斯瓦巴種子庫，唯讀純文字列表 */
export function DoomsdayVault(props?: { items?: string[] }) {
  const items = props?.items ?? ['Wheat · 001', 'Rice · 002', 'Maize · 003'];
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Vault</div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontFamily: 'monospace', fontSize: 11, color: nothing.colors.muted }}>
        {items.map((s, i) => <li key={i} style={{ marginBottom: 4 }}>{s}</li>)}
      </ul>
    </div>
  );
}
