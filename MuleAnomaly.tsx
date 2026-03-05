'use client';

import { nothing } from './theme';

/** 騾變數警報，Glitch 效果 */
export function MuleAnomaly(props?: { anomaly?: boolean }) {
  const anomaly = props?.anomaly ?? false;
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface, boxShadow: anomaly ? `0 0 20px ${nothing.colors.red}` : 'none' }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Anomaly</div>
      <div style={{ fontFamily: 'monospace', fontSize: 12, color: anomaly ? nothing.colors.red : nothing.colors.muted }}>{anomaly ? 'DETECTED' : '—'}</div>
    </div>
  );
}
