'use client';

import { useState } from 'react';
import { nothing } from './theme';

/** 弗瑞曼穴地人口，hover 亮起 */
export function FremenPopulation(props?: { count?: number }) {
  const [hover, setHover] = useState(false);
  const count = props?.count ?? 12000;
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ padding: 14, borderRadius: nothing.radius.card, background: hover ? nothing.colors.surface : nothing.colors.bg }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Fremen</div>
      <div style={{ width: 60, height: 40, borderRadius: 8, background: nothing.colors.circleBg, display: 'flex', flexWrap: 'wrap', gap: 2, padding: 4 }}>
        {Array.from({ length: 24 }).map((_, i) => <div key={i} style={{ width: 4, height: 4, borderRadius: 1, background: hover ? nothing.colors.red : nothing.colors.bg, opacity: hover ? 0.9 : 0.2 }} />)}
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: hover ? nothing.colors.surfaceLight : nothing.colors.muted, marginTop: 6 }}>{count}</div>
    </div>
  );
}
