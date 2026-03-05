'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 木雕光點掃描網格 */
export function WoodCarvingCNC() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setX((p) => (p + 1) % 8);
      setY((p) => (p + (x === 7 ? 1 : 0)) % 6);
    }, 200);
    return () => clearInterval(id);
  }, [x]);
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>CNC</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 8px)', gap: 2, width: 80 }}>
        {Array.from({ length: 48 }).map((_, i) => {
          const cx = i % 8;
          const cy = Math.floor(i / 8);
          return <div key={i} style={{ width: 8, height: 8, borderRadius: 1, background: x === cx && y === cy ? nothing.colors.red : nothing.colors.circleBg }} />;
        })}
      </div>
    </div>
  );
}
