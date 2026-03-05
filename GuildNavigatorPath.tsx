'use client';

import { nothing } from './theme';

/** 摺疊空間，兩端點瞬間連線 */
export function GuildNavigatorPath() {
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Fold</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 8px' }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: nothing.colors.red }} />
        <div style={{ flex: 1, height: 2, background: nothing.colors.red, margin: '0 4px' }} />
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: nothing.colors.red }} />
      </div>
    </div>
  );
}
