'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 人造心臟精準點陣心跳圖 */
export function SyntheticOrgan() {
  const [beat, setBeat] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setBeat((b) => (b + 1) % 8), 600);
    return () => clearInterval(id);
  }, []);
  const h = [8, 16, 24, 20, 12, 8, 4, 8];
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Organ</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 28 }}>
        {h.map((v, i) => <div key={i} style={{ flex: 1, height: v, borderRadius: 1, background: i === beat ? nothing.colors.red : nothing.colors.circleBg }} />)}
      </div>
    </div>
  );
}
