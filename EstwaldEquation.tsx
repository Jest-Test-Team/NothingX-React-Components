'use client';

import { nothing } from './theme';

/** 平行宇宙方程式裝飾，點陣亂碼與數學符號 */
export function EstwaldEquation() {
  const eq = '∂Ψ/∂t = −îℏ∇²Ψ';
  return (
    <div style={{ padding: 12, borderRadius: nothing.radius.card, background: nothing.colors.bg, fontFamily: 'monospace', fontSize: 11, color: nothing.colors.muted }}>
      <div style={{ color: nothing.colors.red, marginBottom: 6 }}>ESTWALD</div>
      <div style={{ letterSpacing: 1 }}>{eq}</div>
    </div>
  );
}
