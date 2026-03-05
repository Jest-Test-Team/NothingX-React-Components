'use client';

import { nothing } from './theme';

/** 金星盈虧（簡化點陣圓盤） */
export function PhaseOfVenus(props?: { phase?: number }) {
  const phase = Math.min(1, Math.max(0, props?.phase ?? 0.5));

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface, display: 'flex', flexDirection: 'column', alignItems: 'center' }} aria-label="Phase of Venus">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Venus</div>
      <div style={{ width: 40, height: 40, borderRadius: '50%', background: nothing.colors.circleBg, border: `2px solid ${nothing.colors.surfaceLight}`, boxShadow: `inset ${phase * 20}px 0 0 0 ${nothing.colors.surface}` }} />
    </div>
  );
}
