'use client';

import { useState } from 'react';
import { nothing } from './theme';

/** 原子護盾，高頻點擊紅，低頻白 */
export function ShieldHoltzman() {
  const [hits, setHits] = useState(0);
  const [last, setLast] = useState(0);
  const highFreq = hits > 3 && Date.now() - last < 500;
  return (
    <div
      style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface, border: `2px solid ${highFreq ? nothing.colors.red : nothing.colors.circleBg}` }}
      onClick={() => { setHits((h) => h + 1); setLast(Date.now()); }}
      role="button"
      tabIndex={0}
    >
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Shield</div>
      <div style={{ width: 40, height: 40, borderRadius: 8, background: highFreq ? nothing.colors.red : nothing.colors.circleBg }} />
    </div>
  );
}
