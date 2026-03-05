'use client';

import { nothing } from './theme';

/** 機器人序號 NDR-113 + 條碼 */
export function RobotSerialID(props?: { id?: string }) {
  const id = props?.id ?? 'NDR-113';
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Serial</div>
      <div style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 700, color: nothing.colors.surfaceLight }}>{id}</div>
      <div style={{ height: 4, marginTop: 6, display: 'flex', gap: 1 }}>
        {id.split('').map((_, i) => <div key={i} style={{ flex: 1, height: '100%', background: nothing.colors.textDark }} />)}
      </div>
    </div>
  );
}
