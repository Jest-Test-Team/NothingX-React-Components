'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 帝國崩潰機率條，緩增至 99.9% */
export function PsychohistoryProb(props?: { probability?: number }) {
  const [p, setP] = useState(props?.probability ?? 85);
  useEffect(() => {
    if (props?.probability != null) return;
    const id = setInterval(() => setP((x) => Math.min(99.9, x + 0.1)), 2000);
    return () => clearInterval(id);
  }, [props?.probability]);
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Collapse Prob</div>
      <div style={{ height: 8, borderRadius: 4, background: nothing.colors.circleBg, overflow: 'hidden' }}>
        <div style={{ width: `${p}%`, height: '100%', background: nothing.colors.red }} />
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 12, color: nothing.colors.surfaceLight }}>{p.toFixed(1)}%</div>
    </div>
  );
}
