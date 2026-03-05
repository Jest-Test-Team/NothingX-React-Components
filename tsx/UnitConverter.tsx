'use client';

import { useState } from 'react';
import { nothing } from './theme';

/** 電子秤風單位換算 */
export function UnitConverter() {
  const [val, setVal] = useState('100');
  const from = 'kg';
  const to = 'lb';
  const num = parseFloat(val) || 0;
  const result = from === 'kg' && to === 'lb' ? (num * 2.205).toFixed(2) : num.toFixed(2);

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Unit converter">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Convert</div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} style={{ width: '100%', marginBottom: 8, padding: 8, fontFamily: 'monospace', fontSize: 18, background: nothing.colors.bg, border: `1px solid ${nothing.colors.circleBg}`, borderRadius: 8, color: nothing.colors.surfaceLight }} />
      <div style={{ fontFamily: 'monospace', fontSize: 14, color: nothing.colors.muted }}>{from} → {to}</div>
      <div style={{ fontFamily: 'monospace', fontSize: 20, fontWeight: 700, color: nothing.colors.surfaceLight }}>{result}</div>
    </div>
  );
}
