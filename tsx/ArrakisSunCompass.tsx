'use client';

import { nothing } from './theme';

/** 雙星指南針 */
export function ArrakisSunCompass(props?: { angle?: number }) {
  const angle = props?.angle ?? 90;
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Arrakis</div>
      <div style={{ fontFamily: 'monospace', fontSize: 14, color: nothing.colors.surfaceLight }}>{angle}°</div>
    </div>
  );
}
