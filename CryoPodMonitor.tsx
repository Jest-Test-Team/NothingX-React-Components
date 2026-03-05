'use client';

import { nothing } from './theme';

/** 休眠艙 BPM 與體溫 */
export function CryoPodMonitor(props?: { bpm?: number; temp?: number }) {
  const bpm = props?.bpm ?? 4;
  const temp = props?.temp ?? 34.2;
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Cryo</div>
      <div style={{ fontFamily: 'monospace', fontSize: 14, color: nothing.colors.surfaceLight }}>{bpm} BPM</div>
      <div style={{ fontFamily: 'monospace', fontSize: 14, color: nothing.colors.muted }}>{temp}°C</div>
    </div>
  );
}
