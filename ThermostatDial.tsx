'use client';

import { nothing } from './theme';

/** 圓形旋鈕室溫控制 */
export function ThermostatDial(props?: { temp?: number; onChange?: (t: number) => void }) {
  const temp = Math.min(35, Math.max(15, props?.temp ?? 22));

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Thermostat">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Heat</div>
      <div style={{ width: 64, height: 64, borderRadius: '50%', border: `3px solid ${nothing.colors.circleBg}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'monospace', fontSize: 20, fontWeight: 700, color: nothing.colors.surfaceLight }}>{temp}°</span>
      </div>
    </div>
  );
}
