'use client';

import { useState } from 'react';
import { nothing } from './theme';

/** 超空間躍遷，點擊後點陣拉長飛逝 */
export function HyperspaceJump() {
  const [jumping, setJumping] = useState(false);
  return (
    <div onClick={() => setJumping(true)} style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface, cursor: 'pointer', transition: 'transform 0.5s', transform: jumping ? 'scaleX(0.1)' : 'none' }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Jump</div>
      <div style={{ fontFamily: 'monospace', fontSize: 14, color: nothing.colors.surfaceLight }}>HYPERSPACE</div>
    </div>
  );
}
