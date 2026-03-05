'use client';

import { nothing } from './theme';

/** 魅音頻譜，低沉粗重波 */
export function BeneGesseritVoice() {
  const bars = [12, 18, 22, 20, 24, 22, 18, 14];
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Voice</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 28 }}>
        {bars.map((h, i) => <div key={i} style={{ flex: 1, height: h, borderRadius: 1, background: nothing.colors.red }} />)}
      </div>
    </div>
  );
}
