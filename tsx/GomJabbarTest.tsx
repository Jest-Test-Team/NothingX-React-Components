'use client';

import { useState } from 'react';
import { nothing } from './theme';

/** 戈姆刺，長按點陣雜訊增強，提早放開變紅 */
export function GomJabbarTest() {
  const [holding, setHolding] = useState(false);
  const [released, setReleased] = useState(false);
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: released ? nothing.colors.red : nothing.colors.surface, boxShadow: holding ? `0 0 20px ${nothing.colors.red}60` : 'none' }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Gom Jabbar</div>
      <button type="button" onMouseDown={() => setHolding(true)} onMouseUp={() => { setHolding(false); setReleased(true); }} onMouseLeave={() => setHolding(false)} style={{ padding: '12px 24px', borderRadius: 8, border: 'none', background: nothing.colors.circleBg, color: nothing.colors.surfaceLight, cursor: 'pointer' }}>Hold</button>
    </div>
  );
}
