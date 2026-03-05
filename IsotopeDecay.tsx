'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 同位素衰變計數器，極慢跳動 */
export function IsotopeDecay() {
  const [count, setCount] = useState(186);
  useEffect(() => {
    const id = setInterval(() => setCount((c) => Math.max(0, c - (Math.random() > 0.7 ? 1 : 0))), 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>W-186 → Pu-239</div>
      <div style={{ fontFamily: 'monospace', fontSize: 18, color: nothing.colors.surfaceLight }}>{count}</div>
    </div>
  );
}
