'use client';

import { nothing } from './theme';

/** 超快子通訊，來自未來時間戳的幽默訊息 */
export function TachyonComm(props?: { message?: string }) {
  const msg = props?.message ?? 'Message received before sent.';
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Tachyon</div>
      <div style={{ fontFamily: 'monospace', fontSize: 10, color: nothing.colors.muted }}>t+0.00s</div>
      <div style={{ fontSize: 12, color: nothing.colors.surfaceLight, marginTop: 6 }}>{msg}</div>
    </div>
  );
}
