'use client';

import { nothing } from './theme';

/** 電子幫浦能量傳輸儀表 */
export function ElectronPump(props?: { efficiency?: number }) {
  const eff = Math.min(100, Math.max(0, props?.efficiency ?? 78));
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Electron Pump</div>
      <div style={{ height: 8, borderRadius: 4, background: nothing.colors.circleBg, overflow: 'hidden' }}>
        <div style={{ width: `${eff}%`, height: '100%', background: nothing.colors.red, transition: 'width 0.3s' }} />
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 12, color: nothing.colors.surfaceLight }}>{eff}%</div>
    </div>
  );
}
